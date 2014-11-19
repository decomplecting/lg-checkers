// Compiled by ClojureScript 0.0-2371
goog.provide('lg_checkers.ui');
goog.require('cljs.core');
goog.require('lg_checkers.board');
goog.require('cljs.core.async');
goog.require('lg_checkers.board');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
lg_checkers.ui.board_click = (function board_click(board_pos){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_events,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"board-clicked","board-clicked",1157654001),new cljs.core.Keyword(null,"position","position",-2011731912),board_pos], null));
});
lg_checkers.ui.draw_piece = (function draw_piece(piece_type){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),piece_type], null)], null);
});
lg_checkers.ui.draw_tuple = (function draw_tuple(piece,row_odd_QMARK_){var piece_type = cljs.core.name.call(null,cljs.core.last.call(null,piece));var piece_pos = cljs.core.first.call(null,piece);var white_square = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.white","td.white",-517212280)], null);var green_square = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.green","td.green",-88615887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (piece_type,piece_pos,white_square){
return (function (e){return lg_checkers.ui.board_click.call(null,piece_pos);
});})(piece_type,piece_pos,white_square))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.draw_piece,piece_type], null)], null);if(cljs.core.truth_(row_odd_QMARK_))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [white_square,green_square], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [green_square,white_square], null);
}
});
lg_checkers.ui.draw_row = (function draw_row(row){var curr_row = (cljs.core.first.call(null,cljs.core.last.call(null,row)) / (4));var row_odd_QMARK_ = cljs.core.odd_QMARK_.call(null,curr_row);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.mapcat.call(null,((function (curr_row,row_odd_QMARK_){
return (function (p1__10014_SHARP_){return lg_checkers.ui.draw_tuple.call(null,p1__10014_SHARP_,row_odd_QMARK_);
});})(curr_row,row_odd_QMARK_))
,row));
});
lg_checkers.ui.checkerboard = (function checkerboard(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.call(null,lg_checkers.ui.draw_row,cljs.core.partition.call(null,(4),cljs.core.sort_by.call(null,cljs.core.first,lg_checkers.board.get_board.call(null,cljs.core.deref.call(null,lg_checkers.board.conn),cljs.core.deref.call(null,lg_checkers.board.tx_cursor)))))], null)], null);
});
lg_checkers.ui.bootstrap_ui = (function bootstrap_ui(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.checkerboard], null),document.getElementById("checkers"));
});
lg_checkers.ui.temporality = (function temporality(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((cljs.core.deref.call(null,lg_checkers.board.tx_cursor) > cljs.core.second.call(null,lg_checkers.board.tx_queue.call(null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.time_lord,new cljs.core.Keyword(null,"rewind","rewind",-669264915));
})], null),"Rewind"], null):null),(((cljs.core.deref.call(null,lg_checkers.board.tx_cursor) < cljs.core.last.call(null,lg_checkers.board.tx_queue.call(null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.time_lord,new cljs.core.Keyword(null,"forward","forward",-557345303));
})], null),"Forward"], null):null),((lg_checkers.board.rewind_mode_QMARK_.call(null,cljs.core.deref.call(null,lg_checkers.board.conn),cljs.core.deref.call(null,lg_checkers.board.tx_cursor)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){return cljs.core.async.put_BANG_.call(null,lg_checkers.board.time_lord,new cljs.core.Keyword(null,"commit","commit",113374389));
})], null),"Play From Here"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"past"], null),"YOU ARE IN THE PAST"], null)], null):null)], null);
});
lg_checkers.ui.data_ui = (function data_ui(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lg_checkers.ui.temporality], null),document.getElementById("data"));
});

//# sourceMappingURL=ui.js.map