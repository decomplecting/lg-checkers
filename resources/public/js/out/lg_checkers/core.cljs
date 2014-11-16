(ns lg-checkers.core
  (:require [lg-checkers.board :refer [init-board]]
            [lg-checkers.ui :refer [bootstrap-ui data-ui]]
            [figwheel.client :as fw :include-macros true]))

(enable-console-print!)

(defonce app-init
  (do
    (init-board)
    (bootstrap-ui)
    (data-ui)))

(fw/watch-and-reload
 ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
 :jsload-callback (fn [] (print "reloaded")))
