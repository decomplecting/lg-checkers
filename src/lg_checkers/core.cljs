(ns lg-checkers.core
  (:require [lg-checkers.board :refer [init-board]]
            [lg-checkers.ui :refer [bootstrap-ui data-ui]]
            ;[figwheel.client :as fw :include-macros true]
            ))

(defonce app-init
  (do
    (init-board)
    (bootstrap-ui)
    (data-ui)))
