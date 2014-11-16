// Compiled by ClojureScript 0.0-2371
goog.provide('lg_checkers.core');
goog.require('cljs.core');
goog.require('lg_checkers.board');
goog.require('lg_checkers.ui');
goog.require('lg_checkers.ui');
goog.require('lg_checkers.board');
if(typeof lg_checkers.core.app_init !== 'undefined')
{} else
{lg_checkers.core.app_init = (function (){lg_checkers.board.init_board.call(null);
lg_checkers.ui.bootstrap_ui.call(null);
return lg_checkers.ui.data_ui.call(null);
})();
}

//# sourceMappingURL=core.js.map