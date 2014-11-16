// Compiled by ClojureScript 0.0-2371
goog.provide('lg_checkers.ui');
goog.require('cljs.core');
goog.require('lg_checkers.board');
goog.require('cljs.core.async');
goog.require('lg_checkers.board');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.ui.board_click = (function board_click(board_pos){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),new cljs.core.Keyword(null,"position","position",-2011731912),board_pos], null));
});
lg_checkers.ui.draw_piece = (function draw_piece(piece_type){return cljs.core.apply.call(null,om.dom.div,{"className": piece_type},null);
});
lg_checkers.ui.draw_tuple = (function draw_tuple(piece,row_odd_QMARK_){var piece_type = cljs.core.name.call(null,cljs.core.last.call(null,piece));var piece_pos = cljs.core.first.call(null,piece);var white_square = React.DOM.td({"className": "white"});var green_square = React.DOM.td({"onClick": ((function (piece_type,piece_pos,white_square){
return (function (e){return lg_checkers.ui.board_click.call(null,piece_pos);
});})(piece_type,piece_pos,white_square))
, "className": "green"},lg_checkers.ui.draw_piece.call(null,piece_type));if(cljs.core.truth_(row_odd_QMARK_))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [white_square,green_square], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [green_square,white_square], null);
}
});
lg_checkers.ui.draw_row = (function draw_row(row){var curr_row = (cljs.core.first.call(null,cljs.core.last.call(null,row)) / (4));var row_odd_QMARK_ = cljs.core.odd_QMARK_.call(null,curr_row);return cljs.core.apply.call(null,om.dom.tr,null,cljs.core.mapcat.call(null,((function (curr_row,row_odd_QMARK_){
return (function (p1__10648_SHARP_){return lg_checkers.ui.draw_tuple.call(null,p1__10648_SHARP_,row_odd_QMARK_);
});})(curr_row,row_odd_QMARK_))
,row));
});
lg_checkers.ui.checkerboard = (function checkerboard(board,owner){if(typeof lg_checkers.ui.t10652 !== 'undefined')
{} else
{
/**
* @constructor
*/
lg_checkers.ui.t10652 = (function (owner,board,checkerboard,meta10653){
this.owner = owner;
this.board = board;
this.checkerboard = checkerboard;
this.meta10653 = meta10653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lg_checkers.ui.t10652.cljs$lang$type = true;
lg_checkers.ui.t10652.cljs$lang$ctorStr = "lg-checkers.ui/t10652";
lg_checkers.ui.t10652.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"lg-checkers.ui/t10652");
});
lg_checkers.ui.t10652.prototype.om$core$IRender$ = true;
lg_checkers.ui.t10652.prototype.om$core$IRender$render$arity$1 = (function (this__4611__auto__){var self__ = this;
var this__4611__auto____$1 = this;return cljs.core.apply.call(null,om.dom.table,null,cljs.core.map.call(null,lg_checkers.ui.draw_row,cljs.core.partition.call(null,(4),cljs.core.sort_by.call(null,cljs.core.first,lg_checkers.board.get_board.call(null,self__.board,cljs.core.deref.call(null,lg_checkers.board.tx_cursor))))));
});
lg_checkers.ui.t10652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10654){var self__ = this;
var _10654__$1 = this;return self__.meta10653;
});
lg_checkers.ui.t10652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10654,meta10653__$1){var self__ = this;
var _10654__$1 = this;return (new lg_checkers.ui.t10652(self__.owner,self__.board,self__.checkerboard,meta10653__$1));
});
lg_checkers.ui.__GT_t10652 = (function __GT_t10652(owner__$1,board__$1,checkerboard__$1,meta10653){return (new lg_checkers.ui.t10652(owner__$1,board__$1,checkerboard__$1,meta10653));
});
}
return (new lg_checkers.ui.t10652(owner,board,checkerboard,null));
});
lg_checkers.ui.bootstrap_ui = (function bootstrap_ui(){return om.core.root.call(null,lg_checkers.ui.checkerboard,lg_checkers.board.conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",278309663),lg_checkers.board.conn,new cljs.core.Keyword(null,"txq","txq",-2047769753),lg_checkers.board.txq,new cljs.core.Keyword(null,"tx-cursor","tx-cursor",-1122119549),lg_checkers.board.tx_cursor], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("checkers")], null));
});
lg_checkers.ui.temporality = (function temporality(){if(typeof lg_checkers.ui.t10658 !== 'undefined')
{} else
{
/**
* @constructor
*/
lg_checkers.ui.t10658 = (function (temporality,meta10659){
this.temporality = temporality;
this.meta10659 = meta10659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lg_checkers.ui.t10658.cljs$lang$type = true;
lg_checkers.ui.t10658.cljs$lang$ctorStr = "lg-checkers.ui/t10658";
lg_checkers.ui.t10658.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"lg-checkers.ui/t10658");
});
lg_checkers.ui.t10658.prototype.om$core$IRender$ = true;
lg_checkers.ui.t10658.prototype.om$core$IRender$render$arity$1 = (function (this__4611__auto__){var self__ = this;
var this__4611__auto____$1 = this;return React.DOM.div(null,React.DOM.button({"onClick": ((function (this__4611__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.time_lord,new cljs.core.Keyword(null,"rewind","rewind",-669264915));
});})(this__4611__auto____$1))
},"Rewind"),React.DOM.button({"onClick": ((function (this__4611__auto____$1){
return (function (e){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.time_lord,new cljs.core.Keyword(null,"forward","forward",-557345303));
});})(this__4611__auto____$1))
},"Forward"));
});
lg_checkers.ui.t10658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10660){var self__ = this;
var _10660__$1 = this;return self__.meta10659;
});
lg_checkers.ui.t10658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10660,meta10659__$1){var self__ = this;
var _10660__$1 = this;return (new lg_checkers.ui.t10658(self__.temporality,meta10659__$1));
});
lg_checkers.ui.__GT_t10658 = (function __GT_t10658(temporality__$1,meta10659){return (new lg_checkers.ui.t10658(temporality__$1,meta10659));
});
}
return (new lg_checkers.ui.t10658(temporality,null));
});
lg_checkers.ui.data_ui = (function data_ui(){return om.core.root.call(null,lg_checkers.ui.temporality,lg_checkers.board.conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",278309663),lg_checkers.board.conn,new cljs.core.Keyword(null,"txq","txq",-2047769753),lg_checkers.board.txq,new cljs.core.Keyword(null,"tx-cursor","tx-cursor",-1122119549),lg_checkers.board.tx_cursor], null),new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("data")], null));
});

//# sourceMappingURL=ui.js.map