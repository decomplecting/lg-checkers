Lookingglass Checkers
=====================

This is an implementation of rudimentary UI components for a checkerboard.  It uses the following components:

* ClojureScript - JavaScript targeted version of Clojure, a Lisp-based language.
* core.async - Clojure library for asynchronous programming and concurrency.
* Om - ClojureScript interface to FaceBook's React, that represents the UI as EDN.

Board events are sent as messages over `board-events` for backend logic to process.  The backend logic can then send the board commands via `board-commands` to update its state, although it is possible for any other process to alter the board state directly using `swap!`.

Quickstart Notes
================

* Install [`lein`](http://leiningen.org/)
* Run `lein cljsbuild`
* Open a browser on `index.html`

Our strongly suggested editor is [LightTable](http://lighttable.com/).

The Challenge
=============

The challenge is to implement the game logic for this UI checkerboard, using concurrent processes and channels in a functional manner utilizing event sourcing where possible.  This is intended to take no more than a few chronological days of effort.  The depth of the attempt is up to the challengee, but some ideas of directions to go in:

* *UI event to move transformer* - take two clicks and determine if they are different board positions.  If they are, communicate a desired move to the rest of the game logic via channels.
* *A move validator* - Validate that the requested move is allowable.
* *Computer player* - this can be as stupid or as advanced as the challengee wants.
	* Major bonus points if the computer player can calculate its moves concurrently with user idle, without impact on browser responsiveness.
* *Game recorder* - record the game to a database.  One suggestion is [Datascript](https://github.com/tonsky/datascript)
	* This should be able to play back a game upon request be reproducing the event stream.

Good luck!  We have tried to come up with an interesting challenge that will help demonstrate the principles that we are trying to architect our system to.