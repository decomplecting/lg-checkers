// Compiled by ClojureScript 0.0-2371
goog.provide('lg_checkers.board');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('datascript');
goog.require('datascript');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof lg_checkers.board.schema !== 'undefined')
{} else
{lg_checkers.board.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
}
if(typeof lg_checkers.board.conn !== 'undefined')
{} else
{lg_checkers.board.conn = datascript.create_conn.call(null,lg_checkers.board.schema);
}
datascript.core.DB.prototype.om$core$IToCursor$ = true;
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$2 = (function (this$,_){var this$__$1 = this;return this$__$1;
});
datascript.core.DB.prototype.om$core$IToCursor$_to_cursor$arity$3 = (function (this$,_,___$1){var this$__$1 = this;return this$__$1;
});
lg_checkers.board.init_board = (function init_board(){var pos_matrix = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (i,row){if(cljs.core.even_QMARK_.call(null,i))
{return cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),row));
} else
{return cljs.core.take_nth.call(null,(2),row);
}
}),cljs.core.partition.call(null,(8),(function (){var iter__4379__auto__ = (function iter__10409(s__10410){return (new cljs.core.LazySeq(null,(function (){var s__10410__$1 = s__10410;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10410__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var y = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__10410__$1,y,xs__4624__auto__,temp__4126__auto__){
return (function iter__10411(s__10412){return (new cljs.core.LazySeq(null,((function (s__10410__$1,y,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__10412__$1 = s__10412;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10412__$1);if(temp__4126__auto____$1)
{var s__10412__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10412__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__10412__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__10414 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__10413 = (0);while(true){
if((i__10413 < size__4378__auto__))
{var x = cljs.core._nth.call(null,c__4377__auto__,i__10413);cljs.core.chunk_append.call(null,b__10414,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__10421 = (i__10413 + (1));
i__10413 = G__10421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10414),iter__10411.call(null,cljs.core.chunk_rest.call(null,s__10412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10414),null);
}
} else
{var x = cljs.core.first.call(null,s__10412__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__10411.call(null,cljs.core.rest.call(null,s__10412__$2)));
}
} else
{return null;
}
break;
}
});})(s__10410__$1,y,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__10410__$1,y,xs__4624__auto__,temp__4126__auto__))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,cljs.core.range.call(null,(8))));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__10409.call(null,cljs.core.rest.call(null,s__10410__$1)));
} else
{{
var G__10422 = cljs.core.rest.call(null,s__10410__$1);
s__10410__$1 = G__10422;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.range.call(null,(8)));
})()))));var positions = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix){
return (function (i,p__10415){var vec__10416 = p__10415;var x = cljs.core.nth.call(null,vec__10416,(0),null);var y = cljs.core.nth.call(null,vec__10416,(1),null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- (i + (1))),new cljs.core.Keyword("position","idx","position/idx",-247800494),(i + (1)),new cljs.core.Keyword("position","x","position/x",548414418),x,new cljs.core.Keyword("position","y","position/y",734696329),y], null);
});})(pos_matrix))
,pos_matrix));var red_pieces = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix,positions){
return (function (i,p__10417){var vec__10418 = p__10417;var x = cljs.core.nth.call(null,vec__10418,(0),null);var y = cljs.core.nth.call(null,vec__10418,(1),null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- ((100) + (i + (1)))),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword("piece","position","piece/position",833802022),(- (i + (1)))], null);
});})(pos_matrix,positions))
,cljs.core.take.call(null,(12),pos_matrix)));var black_pieces = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix,positions,red_pieces){
return (function (i,p__10419){var vec__10420 = p__10419;var x = cljs.core.nth.call(null,vec__10420,(0),null);var y = cljs.core.nth.call(null,vec__10420,(1),null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- ((200) + (i + (1)))),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword("piece","position","piece/position",833802022),(- ((20) + (i + (1))))], null);
});})(pos_matrix,positions,red_pieces))
,cljs.core.drop.call(null,(20),pos_matrix)));return datascript.transact_BANG_.call(null,lg_checkers.board.conn,cljs.core.vec.call(null,cljs.core.concat.call(null,positions,red_pieces,black_pieces)));
});
/**
* @param {...*} var_args
*/
lg_checkers.board.board_contents_q = (function() { 
var board_contents_q__delegate = function (db,p__10423){var vec__10425 = p__10423;var tx_id = cljs.core.nth.call(null,vec__10425,(0),null);if(cljs.core.truth_(tx_id))
{return datascript.q.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?tx-id","?tx-id",-563082632,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?tx-id","?tx-id",-563082632,null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),db);
} else
{return datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),db);
}
};
var board_contents_q = function (db,var_args){
var p__10423 = null;if (arguments.length > 1) {
  p__10423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return board_contents_q__delegate.call(this,db,p__10423);};
board_contents_q.cljs$lang$maxFixedArity = 1;
board_contents_q.cljs$lang$applyTo = (function (arglist__10426){
var db = cljs.core.first(arglist__10426);
var p__10423 = cljs.core.rest(arglist__10426);
return board_contents_q__delegate(db,p__10423);
});
board_contents_q.cljs$core$IFn$_invoke$arity$variadic = board_contents_q__delegate;
return board_contents_q;
})()
;
lg_checkers.board.board_munge = (function board_munge(tuples){return cljs.core.merge.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null,(1),(33)),cljs.core.repeat.call(null,new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.flatten.call(null,cljs.core.vec.call(null,tuples))));
});
/**
* @param {...*} var_args
*/
lg_checkers.board.get_board = (function() { 
var get_board__delegate = function (db,p__10427){var vec__10429 = p__10427;var tx_id = cljs.core.nth.call(null,vec__10429,(0),null);return lg_checkers.board.board_munge.call(null,lg_checkers.board.board_contents_q.call(null,db,tx_id));
};
var get_board = function (db,var_args){
var p__10427 = null;if (arguments.length > 1) {
  p__10427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_board__delegate.call(this,db,p__10427);};
get_board.cljs$lang$maxFixedArity = 1;
get_board.cljs$lang$applyTo = (function (arglist__10430){
var db = cljs.core.first(arglist__10430);
var p__10427 = cljs.core.rest(arglist__10430);
return get_board__delegate(db,p__10427);
});
get_board.cljs$core$IFn$_invoke$arity$variadic = get_board__delegate;
return get_board;
})()
;
if(typeof lg_checkers.board.board_events !== 'undefined')
{} else
{lg_checkers.board.board_events = cljs.core.async.chan.call(null);
}
if(typeof lg_checkers.board.board_commands !== 'undefined')
{} else
{lg_checkers.board.board_commands = cljs.core.async.chan.call(null);
}
if(typeof lg_checkers.board.board_state !== 'undefined')
{} else
{lg_checkers.board.board_state = cljs.core.async.chan.call(null);
}
if(typeof lg_checkers.board.time_lord !== 'undefined')
{} else
{lg_checkers.board.time_lord = cljs.core.async.chan.call(null);
}
if(typeof lg_checkers.board.top_row !== 'undefined')
{} else
{lg_checkers.board.top_row = (1);
}
if(typeof lg_checkers.board.bottom_row !== 'undefined')
{} else
{lg_checkers.board.bottom_row = (8);
}
lg_checkers.board.compute_pos_neighbors = (function compute_pos_neighbors(pos){var curr_row = Math.ceil.call(null,(pos / (4)));var row_odd_QMARK_ = cljs.core.odd_QMARK_.call(null,curr_row);var row_even_QMARK_ = !(row_odd_QMARK_);var top_row_QMARK_ = cljs.core._EQ_.call(null,curr_row,lg_checkers.board.top_row);var bottom_row_QMARK_ = cljs.core._EQ_.call(null,curr_row,lg_checkers.board.bottom_row);var right_edge_QMARK_ = cljs.core._EQ_.call(null,cljs.core.mod.call(null,pos,(4)),(0));var left_edge_QMARK_ = cljs.core._EQ_.call(null,cljs.core.mod.call(null,pos,(4)),(1));var up_left = ((row_odd_QMARK_)?(pos - (4)):(pos - (5)));var up_right = ((row_odd_QMARK_)?(pos - (3)):(pos - (4)));var down_left = ((row_odd_QMARK_)?(pos + (4)):(pos + (5)));var down_right = ((row_odd_QMARK_)?(pos + (3)):(pos + (4)));return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!(top_row_QMARK_))?((row_even_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [up_left,up_right], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!(left_edge_QMARK_))?up_left:null),((!(right_edge_QMARK_))?up_right:null)], null)):null),((!(bottom_row_QMARK_))?((row_odd_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [down_left,down_right], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((!(left_edge_QMARK_))?down_left:null),((!(right_edge_QMARK_))?down_right:null)], null)):null)], null)));
});
lg_checkers.board.compute_neighbor_positions = (function compute_neighbor_positions(){return cljs.core.map.call(null,(function (pos){return new cljs.core.PersistentArrayMap.fromArray([pos,lg_checkers.board.compute_pos_neighbors.call(null,pos)], true, false);
}),cljs.core.range.call(null,(1),(33)));
});
lg_checkers.board.empty_pos_QMARK_ = (function empty_pos_QMARK_(db,pos){return (cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),db,pos)) == null);
});
lg_checkers.board.get_move = (function get_move(pos_a,pos_b){var db = cljs.core.deref.call(null,lg_checkers.board.conn);var blk_piece_to_move = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),db,pos_a));if(cljs.core.truth_((function (){var and__3628__auto__ = blk_piece_to_move;if(cljs.core.truth_(and__3628__auto__))
{return lg_checkers.board.empty_pos_QMARK_.call(null,db,pos_b);
} else
{return and__3628__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),new cljs.core.Keyword(null,"position","position",-2011731912),pos_b,new cljs.core.Keyword(null,"piece","piece",1396691784),blk_piece_to_move], null);
} else
{return null;
}
});
if(typeof lg_checkers.board.mah_loops !== 'undefined')
{} else
{lg_checkers.board.mah_loops = (function (){var c__5849__auto___10579 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___10579){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___10579){
return (function (state_10460){var state_val_10461 = (state_10460[(1)]);if((state_val_10461 === (7)))
{var inst_10431 = (state_10460[(7)]);var inst_10442 = (state_10460[(8)]);var inst_10441 = (state_10460[(2)]);var inst_10442__$1 = cljs.core.get.call(null,inst_10441,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_10443 = cljs.core.print.call(null,inst_10442__$1);var state_10460__$1 = (function (){var statearr_10462 = state_10460;(statearr_10462[(9)] = inst_10443);
(statearr_10462[(8)] = inst_10442__$1);
return statearr_10462;
})();if(cljs.core.truth_(inst_10431))
{var statearr_10463_10580 = state_10460__$1;(statearr_10463_10580[(1)] = (8));
} else
{var statearr_10464_10581 = state_10460__$1;(statearr_10464_10581[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (1)))
{var inst_10431 = null;var state_10460__$1 = (function (){var statearr_10465 = state_10460;(statearr_10465[(7)] = inst_10431);
return statearr_10465;
})();var statearr_10466_10582 = state_10460__$1;(statearr_10466_10582[(2)] = null);
(statearr_10466_10582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (4)))
{var inst_10435 = (state_10460[(10)]);var inst_10435__$1 = (state_10460[(2)]);var inst_10436 = cljs.core.seq_QMARK_.call(null,inst_10435__$1);var state_10460__$1 = (function (){var statearr_10467 = state_10460;(statearr_10467[(10)] = inst_10435__$1);
return statearr_10467;
})();if(inst_10436)
{var statearr_10468_10583 = state_10460__$1;(statearr_10468_10583[(1)] = (5));
} else
{var statearr_10469_10584 = state_10460__$1;(statearr_10469_10584[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (13)))
{var inst_10452 = (state_10460[(2)]);var state_10460__$1 = state_10460;var statearr_10470_10585 = state_10460__$1;(statearr_10470_10585[(2)] = inst_10452);
(statearr_10470_10585[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (6)))
{var inst_10435 = (state_10460[(10)]);var state_10460__$1 = state_10460;var statearr_10471_10586 = state_10460__$1;(statearr_10471_10586[(2)] = inst_10435);
(statearr_10471_10586[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (3)))
{var inst_10458 = (state_10460[(2)]);var state_10460__$1 = state_10460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10460__$1,inst_10458);
} else
{if((state_val_10461 === (12)))
{var inst_10431 = null;var state_10460__$1 = (function (){var statearr_10472 = state_10460;(statearr_10472[(7)] = inst_10431);
return statearr_10472;
})();var statearr_10473_10587 = state_10460__$1;(statearr_10473_10587[(2)] = null);
(statearr_10473_10587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (2)))
{var state_10460__$1 = state_10460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10460__$1,(4),lg_checkers.board.board_events);
} else
{if((state_val_10461 === (11)))
{var inst_10445 = (state_10460[(11)]);var inst_10447 = cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_commands,inst_10445);var inst_10431 = null;var state_10460__$1 = (function (){var statearr_10474 = state_10460;(statearr_10474[(12)] = inst_10447);
(statearr_10474[(7)] = inst_10431);
return statearr_10474;
})();var statearr_10475_10588 = state_10460__$1;(statearr_10475_10588[(2)] = null);
(statearr_10475_10588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (9)))
{var inst_10442 = (state_10460[(8)]);var inst_10431 = inst_10442;var state_10460__$1 = (function (){var statearr_10476 = state_10460;(statearr_10476[(7)] = inst_10431);
return statearr_10476;
})();var statearr_10477_10589 = state_10460__$1;(statearr_10477_10589[(2)] = null);
(statearr_10477_10589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (5)))
{var inst_10435 = (state_10460[(10)]);var inst_10438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10435);var state_10460__$1 = state_10460;var statearr_10478_10590 = state_10460__$1;(statearr_10478_10590[(2)] = inst_10438);
(statearr_10478_10590[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (10)))
{var inst_10456 = (state_10460[(2)]);var state_10460__$1 = state_10460;var statearr_10479_10591 = state_10460__$1;(statearr_10479_10591[(2)] = inst_10456);
(statearr_10479_10591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10461 === (8)))
{var inst_10431 = (state_10460[(7)]);var inst_10445 = (state_10460[(11)]);var inst_10442 = (state_10460[(8)]);var inst_10445__$1 = lg_checkers.board.get_move.call(null,inst_10431,inst_10442);var state_10460__$1 = (function (){var statearr_10480 = state_10460;(statearr_10480[(11)] = inst_10445__$1);
return statearr_10480;
})();if(cljs.core.truth_(inst_10445__$1))
{var statearr_10481_10592 = state_10460__$1;(statearr_10481_10592[(1)] = (11));
} else
{var statearr_10482_10593 = state_10460__$1;(statearr_10482_10593[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5849__auto___10579))
;return ((function (switch__5834__auto__,c__5849__auto___10579){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_10486 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10486[(0)] = state_machine__5835__auto__);
(statearr_10486[(1)] = (1));
return statearr_10486;
});
var state_machine__5835__auto____1 = (function (state_10460){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_10460);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e10487){if((e10487 instanceof Object))
{var ex__5838__auto__ = e10487;var statearr_10488_10594 = state_10460;(statearr_10488_10594[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10460);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10487;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10595 = state_10460;
state_10460 = G__10595;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_10460){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_10460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___10579))
})();var state__5851__auto__ = (function (){var statearr_10489 = f__5850__auto__.call(null);(statearr_10489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___10579);
return statearr_10489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___10579))
);
var c__5849__auto___10596 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___10596){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___10596){
return (function (state_10513){var state_val_10514 = (state_10513[(1)]);if((state_val_10514 === (7)))
{var inst_10499 = (state_10513[(2)]);var inst_10500 = cljs.core.get.call(null,inst_10499,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_10501 = cljs.core.get.call(null,inst_10499,new cljs.core.Keyword(null,"piece","piece",1396691784));var inst_10502 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10503 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("piece","position","piece/position",833802022)];var inst_10504 = [inst_10501,inst_10500];var inst_10505 = cljs.core.PersistentHashMap.fromArrays(inst_10503,inst_10504);var inst_10506 = [inst_10505];var inst_10507 = (new cljs.core.PersistentVector(null,1,(5),inst_10502,inst_10506,null));var inst_10508 = datascript.transact_BANG_.call(null,lg_checkers.board.conn,inst_10507);var state_10513__$1 = (function (){var statearr_10515 = state_10513;(statearr_10515[(7)] = inst_10508);
return statearr_10515;
})();var statearr_10516_10597 = state_10513__$1;(statearr_10516_10597[(2)] = null);
(statearr_10516_10597[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10514 === (6)))
{var inst_10493 = (state_10513[(8)]);var state_10513__$1 = state_10513;var statearr_10517_10598 = state_10513__$1;(statearr_10517_10598[(2)] = inst_10493);
(statearr_10517_10598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10514 === (5)))
{var inst_10493 = (state_10513[(8)]);var inst_10496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10493);var state_10513__$1 = state_10513;var statearr_10518_10599 = state_10513__$1;(statearr_10518_10599[(2)] = inst_10496);
(statearr_10518_10599[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10514 === (4)))
{var inst_10493 = (state_10513[(8)]);var inst_10493__$1 = (state_10513[(2)]);var inst_10494 = cljs.core.seq_QMARK_.call(null,inst_10493__$1);var state_10513__$1 = (function (){var statearr_10519 = state_10513;(statearr_10519[(8)] = inst_10493__$1);
return statearr_10519;
})();if(inst_10494)
{var statearr_10520_10600 = state_10513__$1;(statearr_10520_10600[(1)] = (5));
} else
{var statearr_10521_10601 = state_10513__$1;(statearr_10521_10601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10514 === (3)))
{var inst_10511 = (state_10513[(2)]);var state_10513__$1 = state_10513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10513__$1,inst_10511);
} else
{if((state_val_10514 === (2)))
{var state_10513__$1 = state_10513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10513__$1,(4),lg_checkers.board.board_commands);
} else
{if((state_val_10514 === (1)))
{var state_10513__$1 = state_10513;var statearr_10522_10602 = state_10513__$1;(statearr_10522_10602[(2)] = null);
(statearr_10522_10602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5849__auto___10596))
;return ((function (switch__5834__auto__,c__5849__auto___10596){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_10526 = [null,null,null,null,null,null,null,null,null];(statearr_10526[(0)] = state_machine__5835__auto__);
(statearr_10526[(1)] = (1));
return statearr_10526;
});
var state_machine__5835__auto____1 = (function (state_10513){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_10513);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e10527){if((e10527 instanceof Object))
{var ex__5838__auto__ = e10527;var statearr_10528_10603 = state_10513;(statearr_10528_10603[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10527;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10604 = state_10513;
state_10513 = G__10604;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_10513){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_10513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___10596))
})();var state__5851__auto__ = (function (){var statearr_10529 = f__5850__auto__.call(null);(statearr_10529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___10596);
return statearr_10529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___10596))
);
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__){
return (function (state_10554){var state_val_10555 = (state_10554[(1)]);if((state_val_10555 === (7)))
{var inst_10549 = (state_10554[(2)]);var state_10554__$1 = (function (){var statearr_10556 = state_10554;(statearr_10556[(7)] = inst_10549);
return statearr_10556;
})();var statearr_10557_10605 = state_10554__$1;(statearr_10557_10605[(2)] = null);
(statearr_10557_10605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (1)))
{var state_10554__$1 = state_10554;var statearr_10558_10606 = state_10554__$1;(statearr_10558_10606[(2)] = null);
(statearr_10558_10606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (4)))
{var inst_10532 = (state_10554[(8)]);var inst_10532__$1 = (state_10554[(2)]);var inst_10533 = cljs.core._EQ_.call(null,inst_10532__$1,new cljs.core.Keyword(null,"rewind","rewind",-669264915));var state_10554__$1 = (function (){var statearr_10559 = state_10554;(statearr_10559[(8)] = inst_10532__$1);
return statearr_10559;
})();if(inst_10533)
{var statearr_10560_10607 = state_10554__$1;(statearr_10560_10607[(1)] = (5));
} else
{var statearr_10561_10608 = state_10554__$1;(statearr_10561_10608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (13)))
{var inst_10545 = (state_10554[(2)]);var state_10554__$1 = state_10554;var statearr_10562_10609 = state_10554__$1;(statearr_10562_10609[(2)] = inst_10545);
(statearr_10562_10609[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (6)))
{var inst_10532 = (state_10554[(8)]);var inst_10537 = cljs.core._EQ_.call(null,inst_10532,new cljs.core.Keyword(null,"forward","forward",-557345303));var state_10554__$1 = state_10554;if(inst_10537)
{var statearr_10563_10610 = state_10554__$1;(statearr_10563_10610[(1)] = (8));
} else
{var statearr_10564_10611 = state_10554__$1;(statearr_10564_10611[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (3)))
{var inst_10552 = (state_10554[(2)]);var state_10554__$1 = state_10554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10554__$1,inst_10552);
} else
{if((state_val_10555 === (12)))
{var state_10554__$1 = state_10554;var statearr_10565_10612 = state_10554__$1;(statearr_10565_10612[(2)] = null);
(statearr_10565_10612[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (2)))
{var state_10554__$1 = state_10554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10554__$1,(4),lg_checkers.board.time_lord);
} else
{if((state_val_10555 === (11)))
{var inst_10542 = cljs.core.print.call(null,"The Doctor is in.");var state_10554__$1 = state_10554;var statearr_10566_10613 = state_10554__$1;(statearr_10566_10613[(2)] = inst_10542);
(statearr_10566_10613[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (9)))
{var state_10554__$1 = state_10554;var statearr_10567_10614 = state_10554__$1;(statearr_10567_10614[(1)] = (11));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (5)))
{var inst_10535 = cljs.core.print.call(null,"REWIND!");var state_10554__$1 = state_10554;var statearr_10569_10615 = state_10554__$1;(statearr_10569_10615[(2)] = inst_10535);
(statearr_10569_10615[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (10)))
{var inst_10547 = (state_10554[(2)]);var state_10554__$1 = state_10554;var statearr_10570_10616 = state_10554__$1;(statearr_10570_10616[(2)] = inst_10547);
(statearr_10570_10616[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10555 === (8)))
{var inst_10539 = cljs.core.print.call(null,"FORWARD!");var state_10554__$1 = state_10554;var statearr_10571_10617 = state_10554__$1;(statearr_10571_10617[(2)] = inst_10539);
(statearr_10571_10617[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5849__auto__))
;return ((function (switch__5834__auto__,c__5849__auto__){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_10575 = [null,null,null,null,null,null,null,null,null];(statearr_10575[(0)] = state_machine__5835__auto__);
(statearr_10575[(1)] = (1));
return statearr_10575;
});
var state_machine__5835__auto____1 = (function (state_10554){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_10554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e10576){if((e10576 instanceof Object))
{var ex__5838__auto__ = e10576;var statearr_10577_10618 = state_10554;(statearr_10577_10618[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10554);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10576;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10619 = state_10554;
state_10554 = G__10619;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_10554){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_10554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_10578 = f__5850__auto__.call(null);(statearr_10578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_10578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__))
);
return c__5849__auto__;
})();
}

//# sourceMappingURL=board.js.map