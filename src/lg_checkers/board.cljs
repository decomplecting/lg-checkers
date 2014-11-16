(ns lg-checkers.board
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [put! chan <!]]
            [datascript :as d]
            [datascript.core :as dc]
            [om.core :as om :include-macros true]))

(enable-console-print!)

(defonce schema {:piece/position {:db/valueType :db.type/ref}})

(defonce conn (d/create-conn schema))

(defonce txq (atom (sorted-set (+ d/tx0 1))))

(defonce tx-cursor (atom (last @txq)))


;; prevent cursor-ification https://gist.github.com/swannodette/11308901
(extend-type dc/DB
  om/IToCursor
  (-to-cursor
    ([this _] this)
    ([this _ _] this)))


(defn init-board []
  (let [pos-matrix (vec
                    (apply
                     concat
                     (map-indexed
                      (fn [i row]
                        (if (even? i)
                          (take-nth 2 (drop 1 row))
                          (take-nth 2 row)))
                      (partition 8 (for [y (range 8)
                                         x (range 8)]
                                     [x y])))))
          ;; positions are db entities.
          positions (vec
                     (map-indexed
                      (fn [i [x y]]
                        {:db/id (- (inc i))
                         :position/idx (inc i)
                         :position/x x
                         :position/y y}) pos-matrix))

          ;; pieces ref positions
          red-pieces (vec
                      (map-indexed
                       (fn [i [x y]]
                         {:db/id (- (+ 100 (inc i)))
                          :piece/color :red-piece
                          :piece/position (- (inc i))}) (take 12 pos-matrix)))

          black-pieces (vec (map-indexed (fn [i [x y]]
                                         {:db/id (- (+ 200 (inc i)))
                                          :piece/color :black-piece
                                          :piece/position (- (+ 20 (inc i)))})
                                         (drop 20 pos-matrix)))]
      (d/transact! conn (vec (concat positions red-pieces black-pieces)))))


;; let's keep a tx queue

(d/listen! conn
           (fn [tx-report]
             (do
               (swap! txq merge (get-in tx-report [:tempids :db/current-tx]))
               (reset! tx-cursor (last @txq)))))


;; checkers has rules... so does datalog!

(defonce checkers-rules
  '[

    ;; just a helper
    [(coords ?pos ?x ?y)
     [?pos :position/x ?x]
     [?pos :position/y ?y]]


    ;; get piece position
    [(piece-position ?piece ?pos)
     [?piece :piece/position ?pos]]

    ;; inc OR dec
    [(inc-dec ?i ?ii)
     [(inc ?i) ?ii]]
    [(inc-dec ?i ?ii)
     [(dec ?i) ?ii]]

    ;; get neighbors
    [(neighbors ?pos ?neighbor)
     (coords ?pos ?x ?y)
     (inc-dec ?x ?xx)
     (inc-dec ?y ?yy)
     [?neighbor :position/x ?xx]
     [?neighbor :position/y ?yy]]

    ;; get empty
    [(empty-pos ?pos)
     [?pos :position/idx]
     [(missing? $ ?pos :piece/_position)]]

    [(empty-neighbors ?pos ?neighbor)
     (empty-pos ?pos)
     (neighbors ?pos ?neighbor)
     ]

    ])


(defn board-contents-q [db & [tx-id]]
  (if tx-id
    (d/q '[:find ?idx ?color
           :in $
           :where
           [?piece :piece/color ?color]
           [?piece :piece/position ?pos]
           [?pos :position/idx ?idx]] (vec (filter (fn [[_ _ _ t _]]
                                                     (<= t tx-id)) (map vec (:eavt db)))))
    (d/q '[:find ?idx ?color
           :where
           [?piece :piece/color ?color]
           [?piece :piece/position ?pos]
           [?pos :position/idx ?idx]] db)))

(defn board-munge [tuples]
  (merge
   (zipmap (range 1 33) (repeat :empty-piece))
   (apply hash-map (flatten (vec tuples)))))


(defn get-board [db & [tx-id]]
  (board-munge (board-contents-q db tx-id)))



;(print (get-board @conn))

; == Notes ==============================================
; Board pieces are defined in the checkers.css file.  The
; currently defined pieces are:
;     :red-piece
;     :black-piece
;     :prom-red-piece
;     :prom-black-piece
;     :empty
;
; The board is laid out as a 32 element map, one element
; for each position.  It is stored in an atom, and bound
; to the UI.  Any update of the atom will cause an UI
; refresh to reflect the current board state.
;
; core.async is used to implement CSP (Communicating
; Sequential Proceses), and channels are used to report
; user interaction events, as well as changing the board
; state.

; ===Channels ===========================================
; the board generates events on this channel
;     {:event :event-symbol
;      :position <int>}
(defonce board-events (chan))

; the board receives commands to manipulate its state
;     {:command :command-symbol
;      :position <integer>
;      :piece :piece-symbol}

(defonce board-commands (chan))

; for other processes to acquire the board state atom
;     (atom (create-board))
(defonce board-state (chan))

; For our rewind button
(defonce time-lord (chan))

; == Board State ==========================================
; initialize a board, where positions are indexed 1-32.
; each position is an atom containing the symbol of the
; piece in it.
#_(defn create-board []
  (atom
   (apply sorted-map
          (flatten
           (map-indexed (fn [i v] (vector (inc i) v))
                        (flatten
                         [(repeat 12 :red-piece)
                          (repeat 8 :empty-piece)
                          (repeat 12 :black-piece)]))))))


; instantiate our game board state, initializing our
; board with starting pieces



;(defonce board conn)
; === Utility Functions =================================
; positional constants
(defonce top-row 1)
(defonce bottom-row 8)

; given a board position, return the position of neighbors
; [NOTE:] Challengee should investigate memoization of
;         this function.
(defn compute-pos-neighbors [pos]
  (let [curr-row (Math/ceil (/ pos 4))
        row-odd? (odd? curr-row)
        row-even? (not row-odd?)
        top-row? (= curr-row top-row)
        bottom-row? (= curr-row bottom-row)
        right-edge? (= (mod pos 4) 0)
        left-edge? (= (mod pos 4) 1)
        up-left (if row-odd? (- pos 4)
                             (- pos 5))
        up-right (if row-odd? (- pos 3)
                              (- pos 4))
        down-left (if row-odd? (+ pos 4)
                               (+ pos 5))
        down-right (if row-odd? (+ pos 3)
                                (+ pos 4))]
    (remove nil?
            (flatten
             [(if (not top-row?)
                (if row-even?
                  [up-left up-right]
                  [(if (not left-edge?)
                     up-left)
                   (if (not right-edge?)
                     up-right)]))
              (if (not bottom-row?)
                (if row-odd?
                  [down-left down-right]
                  [(if (not left-edge?)
                     down-left)
                   (if (not right-edge?)
                     down-right)]))]))))

; compute neighbors for every board position
(defn compute-neighbor-positions []
  (map (fn [pos] {pos (compute-pos-neighbors pos)})
       (range 1 33)))





(defn legal-move?
  "Given a db and two positions, checks the legality of move. At present, the
  game is pretty boring as the only legal move is to an adjacent empty space.
  Passive agressive checkers"
  [db pos1 pos2]
  (let [possible-moves (d/q '[:find ?moves
                              :in $ % ?pos1
                              :where
                              (empty-pos ?moves) ;;empty spaces
                              (neighbors ?pos1 ?moves) ;;that are neighbors
                              [_ :piece/position ?pos1] ;;current space has a piece (redundant)
                              ] db checkers-rules pos1)]
    (possible-moves [pos2])))

(defn get-piece-at-pos
  "Given a db and a position, find a piece or return nil"
  [db pos]
  (ffirst (d/q '[:find ?piece
                 :in $ ?pos
                 :where
                 [?piece :piece/position ?pos]] db pos)))


(defn move!
  "Fires a transaction to move a piece to a position. In this context you could
  also check for piece jumping, kinging, or other game domain side effects and
  mutate the transaction accordingly."
  [piece position]
  (d/transact! conn [{:db/id piece
                      :piece/position position}]))

; == Time travel =====================
; @milt I need to pair with you on these fns
; to get the fn queries applied to the txs properly
; and then wiring them up to the btns should be easy.

(defn rewind []
  (swap! tx-cursor dec)
  (print @tx-cursor)
  (print @txq)
  (print (get-board @conn @tx-cursor)))


(defonce mah-loops
  (do
; == Concurrent Processes =================================
; this concurrent process reacts to board click events --
; at present, it sets the board position clicked to contain
; a black piece by sending a command to the board-commands
; channel
(go-loop [last-pos nil]
  (let [{:keys [position]} (<! board-events)
        db @conn
        last-click-piece (get-piece-at-pos db last-pos)]
    (if (and last-pos last-click-piece) ;; was there a previous click? was it a piece?
      (if (legal-move? db last-pos position)
        (do (put! board-commands {:command :update-board-position
                                  :position position
                                  :piece last-click-piece})
            (recur nil))
        (recur nil)) ;;if not, clear and loop
      (recur position)) ;; if not, store the position
    ))

; this concurrent process receives board command messages
; and executes on them.  at present, the only thing it does
; is sets the desired game position to the desired piece
#_(go (while true
      (let [command (<! board-commands)]
        (swap! board assoc (:position command)
               (:piece command)))))

(go-loop []
     (let [{:keys [piece position]} (<! board-commands)]
       (move! piece position)
       (recur)))

(go-loop []
  (let [time-travel (<! time-lord)]
    ;;catch thjose clicks
    (cond (= time-travel :rewind)
          (rewind)
          (= time-travel :forward)
          (forward)
          :else (print "The Doctor is in."))
    (recur)))))
