goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../datascript/btset.js", ['datascript.btset'], ['cljs.core']);
goog.addDependency("../datascript/core.js", ['datascript.core'], ['cljs.core', 'datascript.btset']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../datascript/impl/entity.js", ['datascript.impl.entity'], ['cljs.core', 'datascript.core']);
goog.addDependency("../datascript/query.js", ['datascript.query'], ['cljs.core', 'datascript.core', 'clojure.set', 'cljs.reader', 'clojure.walk', 'datascript.impl.entity']);
goog.addDependency("../datascript.js", ['datascript'], ['datascript.query', 'cljs.core', 'datascript.core', 'datascript.btset', 'datascript.impl.entity']);
goog.addDependency("../cljs/core/async/impl/protocols.js", ['cljs.core.async.impl.protocols'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/buffers.js", ['cljs.core.async.impl.buffers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/dispatch.js", ['cljs.core.async.impl.dispatch'], ['cljs.core', 'cljs.core.async.impl.buffers', 'goog.async.nextTick']);
goog.addDependency("../cljs/core/async/impl/channels.js", ['cljs.core.async.impl.channels'], ['cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/ioc_helpers.js", ['cljs.core.async.impl.ioc_helpers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/timers.js", ['cljs.core.async.impl.timers'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async.js", ['cljs.core.async'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols', 'cljs.core.async.impl.ioc_helpers', 'cljs.core.async.impl.timers']);
goog.addDependency("../om/dom.js", ['om.dom'], ['cljs.core']);
goog.addDependency("../om/core.js", ['om.core'], ['cljs.core', 'om.dom', 'goog.ui.IdGenerator']);
goog.addDependency("../lg_checkers/board.js", ['lg_checkers.board'], ['cljs.core', 'datascript', 'cljs.core.async', 'datascript.core', 'om.core']);
goog.addDependency("../lg_checkers/ui.js", ['lg_checkers.ui'], ['cljs.core', 'lg_checkers.board', 'om.dom', 'cljs.core.async', 'om.core']);
goog.addDependency("../lg_checkers/core.js", ['lg_checkers.core'], ['lg_checkers.ui', 'cljs.core', 'lg_checkers.board']);