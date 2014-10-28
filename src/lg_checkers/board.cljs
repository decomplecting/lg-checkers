(ns lg-checkers.board
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

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
(def board-events (chan))

; the board receives commands to manipulate its state
;     {:command :command-symbol
;      :position <integer>
;      :piece :piece-symbol}

(def board-commands (chan))

; for other processes to acquire the board state atom
;     (atom (create-board))
(def board-state (chan))

; == Board State ==========================================
; initialize a board, where positions are indexed 1-32.
; each position is an atom containing the symbol of the
; piece in it.
(defn create-board []
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
(def board (create-board))

; === Utility Functions =================================
; positional constants
(def top-row 1)
(def bottom-row 8)

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

; == Concurrent Processes =================================
; this concurrent process reacts to board click events --
; at present, it sets the board position clicked to contain
; a black piece by sending a command to the board-commands
; channel
(go (while true
      (let [event (<! board-events)]
        (put! board-commands
              {:command :update-board-position
               :position (:position event)
               :piece :black-piece}))))

; this concurrent process receives board command messages
; and executes on them.  at present, the only thing it does
; is sets the desired game position to the desired piece
(go (while true
      (let [command (<! board-commands)]
        (swap! board assoc (:position command)
                           (:piece command)))))
