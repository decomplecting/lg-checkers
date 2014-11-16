[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/decomplecting/lg-checkers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[Hackathon Presentation](http://goo.gl/5BIFM2)

So for now I'll leave the original challenge info below.

We're Datalog-loving madmen, so we've changed the state managment to a DataScript database, munged some other things, and added Figwheel for instant updates.

Your mileage, of course, may vary.

The Challenge: Lookingglass Checkers
====================================

The challenge is to implement the game logic for a provided checkerboard board state and UI:

* Using concurrent processes and channels in a functional manner
* Utilizing [Event Sourcing](http://www.jayway.com/2013/04/02/event-sourcing-in-clojure/) where possible.

Some notes:

* There is no 'right' answer
* This is intended to take no more than a few chronological days of effort.

Some possible functionality areas to design and implement:

* *UI event to move transformer* - take two clicks and determine if they are different board positions.  If they are, communicate a desired move to the rest of the game logic via channels.
* *A move validator* - Validate that the requested move is allowable.
* *Computer player* - this can be as stupid or as advanced as the challengee wants.
	* Major bonus points if the computer player can calculate its moves concurrently with user idle, without impact on browser responsiveness.
* *Game recorder* - record the game to a database.  One suggestion is [Datascript](https://github.com/tonsky/datascript)
	* This should be able to play back a game upon request be reproducing the event stream.

The provided code is an implementation of a rudimentary UI and board state for a checkerboard that communicates events and receives updates over channels.  It uses the following components:

* [ClojureScript](https://github.com/clojure/clojurescript) - JavaScript targeted version of Clojure, a Lisp-based language.
* [core.async](https://github.com/clojure/core.async) - Clojure library for asynchronous programming and concurrency.
* [Om](https://github.com/swannodette/om) - ClojureScript interface to FaceBook's React, that represents the UI as EDN.

Board events are sent as messages over `board-events` for backend logic to process.  The backend logic can then send the board commands via `board-commands` to update its state, although it is possible for any other process to alter the board state directly using `swap!`.

Good luck!  We have tried to come up with an interesting challenge!

Quickstart Notes
================

* You will need Java 7 or Java 8 JRE or JDK installed on your machine.
* Install [`lein`](http://leiningen.org/)
* Run `lein cljsbuild once`
* Open a browser on `index.html`

Our strongly suggested editor is [LightTable](http://lighttable.com/) due to the inline evaluation capabilities.  [Video](https://www.youtube.com/watch?v=cs3lO4FE3U4)

Submission Guidelines
=====================

Please provide a link to your code in your presentation.  Also to allow more time for review, upon completion, send in a tarball to `wbrown@lgscout.com`. It should compile cleanly using lein clean; lein cljsbuild, and execute in a browser.

Author
=====================
Wes Brown (wbrown@lgscout.com)
