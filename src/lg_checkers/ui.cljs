(ns lg-checkers.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [lg-checkers.board :refer [board board-events]]))

(enable-console-print!)

; == UI events ==========================================
; when we click a game square, we send an event
(defn board-click [board-pos]
  (put! board-events {:event :board-clicked
                      :position board-pos}))

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
  (let [curr-row (/ (first (last row)) 4)
        row-odd? (odd? curr-row)]
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
(defn bootstrap-ui []
  (om/root
    checkerboard ; our UI
    board        ; our game state
    {:target (. js/document (getElementById "checkers"))}))

(bootstrap-ui)
