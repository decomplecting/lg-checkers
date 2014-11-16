(ns lg-checkers.user
  (:require [lg-checkers.core]
            [figwheel.client :as fw :include-macros true]))

(enable-console-print!)


(fw/watch-and-reload
 ;; :websocket-url "ws://localhost:3449/figwheel-ws" default
 :jsload-callback (fn [] (print "reloaded")))
