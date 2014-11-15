(ns lg-checkers.core
  (:require [lg-checkers.ui :refer [bootstrap-ui]]
            [figwheel.client :as fw :include-macros true]))

(enable-console-print!)

(bootstrap-ui)

(fw/watch-and-reload
 ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
 :jsload-callback (fn [] (print "reloaded")))
