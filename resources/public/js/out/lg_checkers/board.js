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
}),cljs.core.partition.call(null,(8),(function (){var iter__12234__auto__ = (function iter__31485(s__31486){return (new cljs.core.LazySeq(null,(function (){var s__31486__$1 = s__31486;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31486__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var y = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__31486__$1,y,xs__4624__auto__,temp__4126__auto__){
return (function iter__31487(s__31488){return (new cljs.core.LazySeq(null,((function (s__31486__$1,y,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__31488__$1 = s__31488;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31488__$1);if(temp__4126__auto____$1)
{var s__31488__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31488__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__31488__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__31490 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__31489 = (0);while(true){
if((i__31489 < size__12233__auto__))
{var x = cljs.core._nth.call(null,c__12232__auto__,i__31489);cljs.core.chunk_append.call(null,b__31490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__31497 = (i__31489 + (1));
i__31489 = G__31497;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31490),iter__31487.call(null,cljs.core.chunk_rest.call(null,s__31488__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31490),null);
}
} else
{var x = cljs.core.first.call(null,s__31488__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__31487.call(null,cljs.core.rest.call(null,s__31488__$2)));
}
} else
{return null;
}
break;
}
});})(s__31486__$1,y,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__31486__$1,y,xs__4624__auto__,temp__4126__auto__))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,cljs.core.range.call(null,(8))));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__31485.call(null,cljs.core.rest.call(null,s__31486__$1)));
} else
{{
var G__31498 = cljs.core.rest.call(null,s__31486__$1);
s__31486__$1 = G__31498;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,cljs.core.range.call(null,(8)));
})()))));var positions = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix){
return (function (i,p__31491){var vec__31492 = p__31491;var x = cljs.core.nth.call(null,vec__31492,(0),null);var y = cljs.core.nth.call(null,vec__31492,(1),null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- (i + (1))),new cljs.core.Keyword("position","idx","position/idx",-247800494),(i + (1)),new cljs.core.Keyword("position","x","position/x",548414418),x,new cljs.core.Keyword("position","y","position/y",734696329),y], null);
});})(pos_matrix))
,pos_matrix));var red_pieces = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix,positions){
return (function (i,p__31493){var vec__31494 = p__31493;var x = cljs.core.nth.call(null,vec__31494,(0),null);var y = cljs.core.nth.call(null,vec__31494,(1),null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- ((100) + (i + (1)))),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword("piece","position","piece/position",833802022),(- (i + (1)))], null);
});})(pos_matrix,positions))
,cljs.core.take.call(null,(12),pos_matrix)));var black_pieces = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix,positions,red_pieces){
return (function (i,p__31495){var vec__31496 = p__31495;var x = cljs.core.nth.call(null,vec__31496,(0),null);var y = cljs.core.nth.call(null,vec__31496,(1),null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- ((200) + (i + (1)))),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword("piece","position","piece/position",833802022),(- ((20) + (i + (1))))], null);
});})(pos_matrix,positions,red_pieces))
,cljs.core.drop.call(null,(20),pos_matrix)));return datascript.transact_BANG_.call(null,lg_checkers.board.conn,cljs.core.vec.call(null,cljs.core.concat.call(null,positions,red_pieces,black_pieces)));
});
/**
* @param {...*} var_args
*/
lg_checkers.board.board_contents_q = (function() { 
var board_contents_q__delegate = function (db,p__31499){var vec__31501 = p__31499;var tx_id = cljs.core.nth.call(null,vec__31501,(0),null);if(cljs.core.truth_(tx_id))
{return datascript.q.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?tx-id","?tx-id",-563082632,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"?tx-id","?tx-id",-563082632,null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),db);
} else
{return datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),db);
}
};
var board_contents_q = function (db,var_args){
var p__31499 = null;if (arguments.length > 1) {
  p__31499 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return board_contents_q__delegate.call(this,db,p__31499);};
board_contents_q.cljs$lang$maxFixedArity = 1;
board_contents_q.cljs$lang$applyTo = (function (arglist__31502){
var db = cljs.core.first(arglist__31502);
var p__31499 = cljs.core.rest(arglist__31502);
return board_contents_q__delegate(db,p__31499);
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
var get_board__delegate = function (db,p__31503){var vec__31505 = p__31503;var tx_id = cljs.core.nth.call(null,vec__31505,(0),null);return lg_checkers.board.board_munge.call(null,lg_checkers.board.board_contents_q.call(null,db,tx_id));
};
var get_board = function (db,var_args){
var p__31503 = null;if (arguments.length > 1) {
  p__31503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_board__delegate.call(this,db,p__31503);};
get_board.cljs$lang$maxFixedArity = 1;
get_board.cljs$lang$applyTo = (function (arglist__31506){
var db = cljs.core.first(arglist__31506);
var p__31503 = cljs.core.rest(arglist__31506);
return get_board__delegate(db,p__31503);
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
lg_checkers.board.get_move = (function get_move(pos_a,pos_b){var db = cljs.core.deref.call(null,lg_checkers.board.conn);var blk_piece_to_move = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?p","?p",-10896580,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?p","?p",-10896580,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),db,pos_a));if(cljs.core.truth_((function (){var and__11483__auto__ = blk_piece_to_move;if(cljs.core.truth_(and__11483__auto__))
{return lg_checkers.board.empty_pos_QMARK_.call(null,db,pos_b);
} else
{return and__11483__auto__;
}
})()))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),new cljs.core.Keyword(null,"position","position",-2011731912),pos_b,new cljs.core.Keyword(null,"piece","piece",1396691784),blk_piece_to_move], null);
} else
{return null;
}
});
if(typeof lg_checkers.board.mah_loops !== 'undefined')
{} else
{lg_checkers.board.mah_loops = (function (){var c__13373__auto___31655 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___31655){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___31655){
return (function (state_31536){var state_val_31537 = (state_31536[(1)]);if((state_val_31537 === (7)))
{var inst_31507 = (state_31536[(7)]);var inst_31518 = (state_31536[(8)]);var inst_31517 = (state_31536[(2)]);var inst_31518__$1 = cljs.core.get.call(null,inst_31517,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_31519 = cljs.core.print.call(null,inst_31518__$1);var state_31536__$1 = (function (){var statearr_31538 = state_31536;(statearr_31538[(9)] = inst_31519);
(statearr_31538[(8)] = inst_31518__$1);
return statearr_31538;
})();if(cljs.core.truth_(inst_31507))
{var statearr_31539_31656 = state_31536__$1;(statearr_31539_31656[(1)] = (8));
} else
{var statearr_31540_31657 = state_31536__$1;(statearr_31540_31657[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (1)))
{var inst_31507 = null;var state_31536__$1 = (function (){var statearr_31541 = state_31536;(statearr_31541[(7)] = inst_31507);
return statearr_31541;
})();var statearr_31542_31658 = state_31536__$1;(statearr_31542_31658[(2)] = null);
(statearr_31542_31658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (4)))
{var inst_31511 = (state_31536[(10)]);var inst_31511__$1 = (state_31536[(2)]);var inst_31512 = cljs.core.seq_QMARK_.call(null,inst_31511__$1);var state_31536__$1 = (function (){var statearr_31543 = state_31536;(statearr_31543[(10)] = inst_31511__$1);
return statearr_31543;
})();if(inst_31512)
{var statearr_31544_31659 = state_31536__$1;(statearr_31544_31659[(1)] = (5));
} else
{var statearr_31545_31660 = state_31536__$1;(statearr_31545_31660[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (13)))
{var inst_31528 = (state_31536[(2)]);var state_31536__$1 = state_31536;var statearr_31546_31661 = state_31536__$1;(statearr_31546_31661[(2)] = inst_31528);
(statearr_31546_31661[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (6)))
{var inst_31511 = (state_31536[(10)]);var state_31536__$1 = state_31536;var statearr_31547_31662 = state_31536__$1;(statearr_31547_31662[(2)] = inst_31511);
(statearr_31547_31662[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (3)))
{var inst_31534 = (state_31536[(2)]);var state_31536__$1 = state_31536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31536__$1,inst_31534);
} else
{if((state_val_31537 === (12)))
{var inst_31507 = null;var state_31536__$1 = (function (){var statearr_31548 = state_31536;(statearr_31548[(7)] = inst_31507);
return statearr_31548;
})();var statearr_31549_31663 = state_31536__$1;(statearr_31549_31663[(2)] = null);
(statearr_31549_31663[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (2)))
{var state_31536__$1 = state_31536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,(4),lg_checkers.board.board_events);
} else
{if((state_val_31537 === (11)))
{var inst_31521 = (state_31536[(11)]);var inst_31523 = cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_commands,inst_31521);var inst_31507 = null;var state_31536__$1 = (function (){var statearr_31550 = state_31536;(statearr_31550[(12)] = inst_31523);
(statearr_31550[(7)] = inst_31507);
return statearr_31550;
})();var statearr_31551_31664 = state_31536__$1;(statearr_31551_31664[(2)] = null);
(statearr_31551_31664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (9)))
{var inst_31518 = (state_31536[(8)]);var inst_31507 = inst_31518;var state_31536__$1 = (function (){var statearr_31552 = state_31536;(statearr_31552[(7)] = inst_31507);
return statearr_31552;
})();var statearr_31553_31665 = state_31536__$1;(statearr_31553_31665[(2)] = null);
(statearr_31553_31665[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (5)))
{var inst_31511 = (state_31536[(10)]);var inst_31514 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31511);var state_31536__$1 = state_31536;var statearr_31554_31666 = state_31536__$1;(statearr_31554_31666[(2)] = inst_31514);
(statearr_31554_31666[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (10)))
{var inst_31532 = (state_31536[(2)]);var state_31536__$1 = state_31536;var statearr_31555_31667 = state_31536__$1;(statearr_31555_31667[(2)] = inst_31532);
(statearr_31555_31667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31537 === (8)))
{var inst_31521 = (state_31536[(11)]);var inst_31507 = (state_31536[(7)]);var inst_31518 = (state_31536[(8)]);var inst_31521__$1 = lg_checkers.board.get_move.call(null,inst_31507,inst_31518);var state_31536__$1 = (function (){var statearr_31556 = state_31536;(statearr_31556[(11)] = inst_31521__$1);
return statearr_31556;
})();if(cljs.core.truth_(inst_31521__$1))
{var statearr_31557_31668 = state_31536__$1;(statearr_31557_31668[(1)] = (11));
} else
{var statearr_31558_31669 = state_31536__$1;(statearr_31558_31669[(1)] = (12));
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
});})(c__13373__auto___31655))
;return ((function (switch__13358__auto__,c__13373__auto___31655){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_31562 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31562[(0)] = state_machine__13359__auto__);
(statearr_31562[(1)] = (1));
return statearr_31562;
});
var state_machine__13359__auto____1 = (function (state_31536){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_31536);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e31563){if((e31563 instanceof Object))
{var ex__13362__auto__ = e31563;var statearr_31564_31670 = state_31536;(statearr_31564_31670[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31671 = state_31536;
state_31536 = G__31671;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_31536){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_31536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___31655))
})();var state__13375__auto__ = (function (){var statearr_31565 = f__13374__auto__.call(null);(statearr_31565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___31655);
return statearr_31565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___31655))
);
var c__13373__auto___31672 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___31672){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___31672){
return (function (state_31589){var state_val_31590 = (state_31589[(1)]);if((state_val_31590 === (7)))
{var inst_31575 = (state_31589[(2)]);var inst_31576 = cljs.core.get.call(null,inst_31575,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_31577 = cljs.core.get.call(null,inst_31575,new cljs.core.Keyword(null,"piece","piece",1396691784));var inst_31578 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31579 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("piece","position","piece/position",833802022)];var inst_31580 = [inst_31577,inst_31576];var inst_31581 = cljs.core.PersistentHashMap.fromArrays(inst_31579,inst_31580);var inst_31582 = [inst_31581];var inst_31583 = (new cljs.core.PersistentVector(null,1,(5),inst_31578,inst_31582,null));var inst_31584 = datascript.transact_BANG_.call(null,lg_checkers.board.conn,inst_31583);var state_31589__$1 = (function (){var statearr_31591 = state_31589;(statearr_31591[(7)] = inst_31584);
return statearr_31591;
})();var statearr_31592_31673 = state_31589__$1;(statearr_31592_31673[(2)] = null);
(statearr_31592_31673[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31590 === (6)))
{var inst_31569 = (state_31589[(8)]);var state_31589__$1 = state_31589;var statearr_31593_31674 = state_31589__$1;(statearr_31593_31674[(2)] = inst_31569);
(statearr_31593_31674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31590 === (5)))
{var inst_31569 = (state_31589[(8)]);var inst_31572 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31569);var state_31589__$1 = state_31589;var statearr_31594_31675 = state_31589__$1;(statearr_31594_31675[(2)] = inst_31572);
(statearr_31594_31675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31590 === (4)))
{var inst_31569 = (state_31589[(8)]);var inst_31569__$1 = (state_31589[(2)]);var inst_31570 = cljs.core.seq_QMARK_.call(null,inst_31569__$1);var state_31589__$1 = (function (){var statearr_31595 = state_31589;(statearr_31595[(8)] = inst_31569__$1);
return statearr_31595;
})();if(inst_31570)
{var statearr_31596_31676 = state_31589__$1;(statearr_31596_31676[(1)] = (5));
} else
{var statearr_31597_31677 = state_31589__$1;(statearr_31597_31677[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31590 === (3)))
{var inst_31587 = (state_31589[(2)]);var state_31589__$1 = state_31589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31589__$1,inst_31587);
} else
{if((state_val_31590 === (2)))
{var state_31589__$1 = state_31589;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31589__$1,(4),lg_checkers.board.board_commands);
} else
{if((state_val_31590 === (1)))
{var state_31589__$1 = state_31589;var statearr_31598_31678 = state_31589__$1;(statearr_31598_31678[(2)] = null);
(statearr_31598_31678[(1)] = (2));
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
});})(c__13373__auto___31672))
;return ((function (switch__13358__auto__,c__13373__auto___31672){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_31602 = [null,null,null,null,null,null,null,null,null];(statearr_31602[(0)] = state_machine__13359__auto__);
(statearr_31602[(1)] = (1));
return statearr_31602;
});
var state_machine__13359__auto____1 = (function (state_31589){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_31589);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e31603){if((e31603 instanceof Object))
{var ex__13362__auto__ = e31603;var statearr_31604_31679 = state_31589;(statearr_31604_31679[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31589);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31603;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31680 = state_31589;
state_31589 = G__31680;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___31672))
})();var state__13375__auto__ = (function (){var statearr_31605 = f__13374__auto__.call(null);(statearr_31605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___31672);
return statearr_31605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___31672))
);
var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__){
return (function (state_31630){var state_val_31631 = (state_31630[(1)]);if((state_val_31631 === (7)))
{var inst_31625 = (state_31630[(2)]);var state_31630__$1 = (function (){var statearr_31632 = state_31630;(statearr_31632[(7)] = inst_31625);
return statearr_31632;
})();var statearr_31633_31681 = state_31630__$1;(statearr_31633_31681[(2)] = null);
(statearr_31633_31681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (1)))
{var state_31630__$1 = state_31630;var statearr_31634_31682 = state_31630__$1;(statearr_31634_31682[(2)] = null);
(statearr_31634_31682[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (4)))
{var inst_31608 = (state_31630[(8)]);var inst_31608__$1 = (state_31630[(2)]);var inst_31609 = cljs.core._EQ_.call(null,inst_31608__$1,new cljs.core.Keyword(null,"rewind","rewind",-669264915));var state_31630__$1 = (function (){var statearr_31635 = state_31630;(statearr_31635[(8)] = inst_31608__$1);
return statearr_31635;
})();if(inst_31609)
{var statearr_31636_31683 = state_31630__$1;(statearr_31636_31683[(1)] = (5));
} else
{var statearr_31637_31684 = state_31630__$1;(statearr_31637_31684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (13)))
{var inst_31621 = (state_31630[(2)]);var state_31630__$1 = state_31630;var statearr_31638_31685 = state_31630__$1;(statearr_31638_31685[(2)] = inst_31621);
(statearr_31638_31685[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (6)))
{var inst_31608 = (state_31630[(8)]);var inst_31613 = cljs.core._EQ_.call(null,inst_31608,new cljs.core.Keyword(null,"forward","forward",-557345303));var state_31630__$1 = state_31630;if(inst_31613)
{var statearr_31639_31686 = state_31630__$1;(statearr_31639_31686[(1)] = (8));
} else
{var statearr_31640_31687 = state_31630__$1;(statearr_31640_31687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (3)))
{var inst_31628 = (state_31630[(2)]);var state_31630__$1 = state_31630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else
{if((state_val_31631 === (12)))
{var state_31630__$1 = state_31630;var statearr_31641_31688 = state_31630__$1;(statearr_31641_31688[(2)] = null);
(statearr_31641_31688[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (2)))
{var state_31630__$1 = state_31630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(4),lg_checkers.board.time_lord);
} else
{if((state_val_31631 === (11)))
{var inst_31618 = cljs.core.print.call(null,"The Doctor is in.");var state_31630__$1 = state_31630;var statearr_31642_31689 = state_31630__$1;(statearr_31642_31689[(2)] = inst_31618);
(statearr_31642_31689[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (9)))
{var state_31630__$1 = state_31630;var statearr_31643_31690 = state_31630__$1;(statearr_31643_31690[(1)] = (11));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (5)))
{var inst_31611 = cljs.core.print.call(null,"REWIND!");var state_31630__$1 = state_31630;var statearr_31645_31691 = state_31630__$1;(statearr_31645_31691[(2)] = inst_31611);
(statearr_31645_31691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (10)))
{var inst_31623 = (state_31630[(2)]);var state_31630__$1 = state_31630;var statearr_31646_31692 = state_31630__$1;(statearr_31646_31692[(2)] = inst_31623);
(statearr_31646_31692[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (8)))
{var inst_31615 = cljs.core.print.call(null,"FORWARD!");var state_31630__$1 = state_31630;var statearr_31647_31693 = state_31630__$1;(statearr_31647_31693[(2)] = inst_31615);
(statearr_31647_31693[(1)] = (10));
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
});})(c__13373__auto__))
;return ((function (switch__13358__auto__,c__13373__auto__){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_31651 = [null,null,null,null,null,null,null,null,null];(statearr_31651[(0)] = state_machine__13359__auto__);
(statearr_31651[(1)] = (1));
return statearr_31651;
});
var state_machine__13359__auto____1 = (function (state_31630){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_31630);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e31652){if((e31652 instanceof Object))
{var ex__13362__auto__ = e31652;var statearr_31653_31694 = state_31630;(statearr_31653_31694[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31652;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31695 = state_31630;
state_31630 = G__31695;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__))
})();var state__13375__auto__ = (function (){var statearr_31654 = f__13374__auto__.call(null);(statearr_31654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_31654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__))
);
return c__13373__auto__;
})();
}

//# sourceMappingURL=board.js.map