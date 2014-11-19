(ns lg-checkers.ui
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [put! chan <!]]
            [lg-checkers.board :refer [conn
                                       get-board
                                       board-events
                                       time-lord
                                       tx-queue
                                       tx-cursor
                                       rewind-mode?
                                       history]]))

(enable-console-print!)

; == UI events ==========================================
; when we click a game square, we send an event
(defn board-click [board-pos]
  (put! board-events {:event :board-clicked
                      :position board-pos}))

; == Board UI Drawing ===================================
; draw pieces based on the piece-type
(defn draw-piece [piece-type]
  [:div {:class piece-type}])

; draws pairs of checkerboard squares within a row
; depending on if row is odd or even.
(defn draw-tuple [piece row-odd?]
  (let [piece-type (name (last piece))
        piece-pos (first piece)
        white-square [:td.white]
        green-square [:td.green {:on-click (fn [e] (board-click piece-pos))}
                      [draw-piece piece-type]]]
    (if row-odd?
      [white-square green-square]
      [green-square white-square])))


; given a row, determine if it is an odd or even row
; and iterates over the board positions, drawing each
; tuple of checkerboard squares
(defn draw-row [row]
  (let [curr-row (/ (first (last row)) 4)
        row-odd? (odd? curr-row)]
    (into [:tr]
           (mapcat #(draw-tuple % row-odd?)
                   row))))

; given a checkerboard data structure, partition into
; rows and draw the individual rows
(defn checkerboard []
  [:table
   [:tbody
    (map draw-row
         (partition 4
                    (sort-by first (get-board @conn @tx-cursor))))]])


; == Bootstrap ============================================


(defn bootstrap-ui []
  (r/render-component [checkerboard]
                      (. js/document (getElementById "checkers"))))


; == Data Magic ===
(defn temporality []
  [:div
   (when (> @tx-cursor (second (tx-queue)))[:button
    {:type "button"
     :on-click (fn [e]
                 (put! time-lord :rewind))} "Rewind"])
   (when (< @tx-cursor (last (tx-queue)))
     [:button
      {:type "button"
       :on-click (fn [e]
                   (put! time-lord :forward))} "Forward"])
   (when (rewind-mode? @conn @tx-cursor)
     [:div
      [:button
       {:type "button"
        :on-click (fn [e]
                    (put! time-lord :commit))} "Play From Here"]
      [:div {:class "past"}
       "YOU ARE IN THE PAST"]])])


(defn data-ui []
  (r/render-component [temporality]
                      (. js/document (getElementById "data"))))
