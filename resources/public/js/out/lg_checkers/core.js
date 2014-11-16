// Compiled by ClojureScript 0.0-2371
goog.provide('lg_checkers.core');
goog.require('cljs.core');
goog.require('lg_checkers.board');
goog.require('lg_checkers.ui');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('lg_checkers.ui');
goog.require('lg_checkers.board');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof lg_checkers.core.app_init !== 'undefined')
{} else
{lg_checkers.core.app_init = (function (){lg_checkers.board.init_board.call(null);
lg_checkers.ui.bootstrap_ui.call(null);
return lg_checkers.ui.data_ui.call(null);
})();
}
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return cljs.core.print.call(null,"reloaded");
}));

//# sourceMappingURL=core.js.map