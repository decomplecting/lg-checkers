(defproject lg-checkers "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [datascript "0.5.1"]
                 [reagent "0.4.3"]
                 [figwheel "0.1.5-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]
            [lein-figwheel "0.1.5-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["dev" "src"]
              :compiler {
                :output-to "resources/public/js/lg_checkers.js"
                :output-dir "resources/public/js/out"
                :externs ["datascript/externs.js"]
                :optimizations :none
                         :source-map true}}
             {:id "lg-checkers"
              :source-paths ["src"]
              :compiler {
                         :output-to "lg_checkers.js"
                         :output-dir "out"
                         :optimizations :none
                         :source-map true}}]})
