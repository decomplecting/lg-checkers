(ns lg-checkers.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))


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
; for each position.  It is stored in an atom, and bounded
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


; == UI events ==========================================
; when we click a game square, we send an event
(defn board-click [board-pos]
  (put! board-events {:event :board-clicked
                      :position board-pos}))

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

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece [piece-type]
  (apply dom/div #js {:className piece-type} nil))

; draws pairs of checkerboard squares within a row
; depending on if row is odd or even.
(defn draw-tuple [piece row-odd?]
	(let [piece-type (name (last piece))
		    piece-pos (first piece)
        white-square (dom/td #js {:className "white"})
        green-square (dom/td #js {:className "green"
                                  :onClick
                                    (fn [e] (board-click
                                             piece-pos))}
                                 (draw-piece piece-type))]
    (if row-odd?
      [white-square green-square]
      [green-square white-square])))

; given a row, determine if it is an odd or even row
; and iterates over the board positions, drawing each
; tuple of checkerboard squares
(defn draw-row [row]
  (let [row-odd? (odd? (/ (first (last row)) 4))]
    (apply dom/tr nil
      (mapcat #(draw-tuple % row-odd?)
           row))))

; given a checkerboard data structure, partition into
; rows and draw the individual rows
(defn checkerboard [board owner]
  (om/component
   (apply dom/table nil
      (map draw-row
           (partition 4 board)))))

; == Bootstrap ============================================
(om/root
  checkerboard ; our UI
  board        ; our game state
  {:target (. js/document (getElementById "checkers"))})

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

; this concurrent process provides the atom to any process
; that requests it via the channel.  Note that this is a
; reference, so only needs to be done once for each process
; that wants to use it.
(go (while true
      (put! board-state board)))
