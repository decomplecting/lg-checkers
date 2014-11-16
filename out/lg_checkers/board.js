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
if(typeof lg_checkers.board.txq !== 'undefined')
{} else
{lg_checkers.board.txq = cljs.core.atom.call(null,cljs.core.sorted_set.call(null,(datascript.tx0 + (1))));
}
if(typeof lg_checkers.board.tx_cursor !== 'undefined')
{} else
{lg_checkers.board.tx_cursor = cljs.core.atom.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,lg_checkers.board.txq)));
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
datascript.listen_BANG_.call(null,lg_checkers.board.conn,(function (tx_report){cljs.core.swap_BANG_.call(null,lg_checkers.board.txq,cljs.core.merge,cljs.core.get_in.call(null,tx_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null)));
return cljs.core.reset_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.last.call(null,cljs.core.deref.call(null,lg_checkers.board.txq)));
}));
if(typeof lg_checkers.board.checkers_rules !== 'undefined')
{} else
{lg_checkers.board.checkers_rules = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"coords","coords",1041102415,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","x","position/x",548414418),new cljs.core.Symbol(null,"?x","?x",-555096650,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"piece-position","piece-position",-169357316,null),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null)),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null)),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null)),cljs.core.list(new cljs.core.Symbol(null,"coords","coords",1041102415,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?xx","?xx",-1701306311,null)),cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null),new cljs.core.Keyword("position","x","position/x",548414418),new cljs.core.Symbol(null,"?xx","?xx",-1701306311,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"empty-pos","empty-pos",-1737780059,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("piece","_position","piece/_position",-1194713808))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"empty-neighbors","empty-neighbors",-1832531952,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null)),cljs.core.list(new cljs.core.Symbol(null,"empty-pos","empty-pos",-1737780059,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null))], null)], null);
}
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
/**
* Given a db and two positions, checks the legality of move. At present, the
* game is pretty boring as the only legal move is to an adjacent empty space.
* Passive agressive checkers
*/
lg_checkers.board.legal_move_QMARK_ = (function legal_move_QMARK_(db,pos1,pos2){var possible_moves = datascript.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?moves","?moves",210649577,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"empty-pos","empty-pos",-1737780059,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null)),cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null)], null)], null),db,lg_checkers.board.checkers_rules,pos1);return possible_moves.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos2], null));
});
/**
* Given a db and a position, find a piece or return nil
*/
lg_checkers.board.get_piece_at_pos = (function get_piece_at_pos(db,pos){return cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),db,pos));
});
lg_checkers.board.rewind = (function rewind(){cljs.core.swap_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.dec);
return cljs.core.print.call(null,lg_checkers.board.get_board.call(null,cljs.core.deref.call(null,lg_checkers.board.conn),cljs.core.deref.call(null,lg_checkers.board.tx_cursor)));
});
lg_checkers.board.forward = (function forward(){cljs.core.swap_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.inc);
return cljs.core.print.call(null,lg_checkers.board.get_board.call(null,cljs.core.deref.call(null,lg_checkers.board.conn),cljs.core.deref.call(null,lg_checkers.board.tx_cursor)));
});
if(typeof lg_checkers.board.mah_loops !== 'undefined')
{} else
{lg_checkers.board.mah_loops = (function (){var c__5849__auto___10590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___10590){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___10590){
return (function (state_10468){var state_val_10469 = (state_10468[(1)]);if((state_val_10469 === (7)))
{var inst_10431 = (state_10468[(7)]);var inst_10443 = (state_10468[(8)]);var inst_10441 = (state_10468[(2)]);var inst_10442 = cljs.core.get.call(null,inst_10441,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_10443__$1 = cljs.core.deref.call(null,lg_checkers.board.conn);var inst_10444 = lg_checkers.board.get_piece_at_pos.call(null,inst_10443__$1,inst_10431);var state_10468__$1 = (function (){var statearr_10470 = state_10468;(statearr_10470[(9)] = inst_10444);
(statearr_10470[(8)] = inst_10443__$1);
(statearr_10470[(10)] = inst_10442);
return statearr_10470;
})();if(cljs.core.truth_(inst_10431))
{var statearr_10471_10591 = state_10468__$1;(statearr_10471_10591[(1)] = (8));
} else
{var statearr_10472_10592 = state_10468__$1;(statearr_10472_10592[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (1)))
{var inst_10431 = null;var state_10468__$1 = (function (){var statearr_10473 = state_10468;(statearr_10473[(7)] = inst_10431);
return statearr_10473;
})();var statearr_10474_10593 = state_10468__$1;(statearr_10474_10593[(2)] = null);
(statearr_10474_10593[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (4)))
{var inst_10435 = (state_10468[(11)]);var inst_10435__$1 = (state_10468[(2)]);var inst_10436 = cljs.core.seq_QMARK_.call(null,inst_10435__$1);var state_10468__$1 = (function (){var statearr_10475 = state_10468;(statearr_10475[(11)] = inst_10435__$1);
return statearr_10475;
})();if(inst_10436)
{var statearr_10476_10594 = state_10468__$1;(statearr_10476_10594[(1)] = (5));
} else
{var statearr_10477_10595 = state_10468__$1;(statearr_10477_10595[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (15)))
{var inst_10431 = null;var state_10468__$1 = (function (){var statearr_10478 = state_10468;(statearr_10478[(7)] = inst_10431);
return statearr_10478;
})();var statearr_10479_10596 = state_10468__$1;(statearr_10479_10596[(2)] = null);
(statearr_10479_10596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (13)))
{var inst_10464 = (state_10468[(2)]);var state_10468__$1 = state_10468;var statearr_10480_10597 = state_10468__$1;(statearr_10480_10597[(2)] = inst_10464);
(statearr_10480_10597[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (6)))
{var inst_10435 = (state_10468[(11)]);var state_10468__$1 = state_10468;var statearr_10481_10598 = state_10468__$1;(statearr_10481_10598[(2)] = inst_10435);
(statearr_10481_10598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (3)))
{var inst_10466 = (state_10468[(2)]);var state_10468__$1 = state_10468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10468__$1,inst_10466);
} else
{if((state_val_10469 === (12)))
{var inst_10442 = (state_10468[(10)]);var inst_10431 = inst_10442;var state_10468__$1 = (function (){var statearr_10482 = state_10468;(statearr_10482[(7)] = inst_10431);
return statearr_10482;
})();var statearr_10483_10599 = state_10468__$1;(statearr_10483_10599[(2)] = null);
(statearr_10483_10599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (2)))
{var state_10468__$1 = state_10468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10468__$1,(4),lg_checkers.board.board_events);
} else
{if((state_val_10469 === (11)))
{var inst_10431 = (state_10468[(7)]);var inst_10443 = (state_10468[(8)]);var inst_10442 = (state_10468[(10)]);var inst_10450 = lg_checkers.board.legal_move_QMARK_.call(null,inst_10443,inst_10431,inst_10442);var state_10468__$1 = state_10468;if(cljs.core.truth_(inst_10450))
{var statearr_10484_10600 = state_10468__$1;(statearr_10484_10600[(1)] = (14));
} else
{var statearr_10485_10601 = state_10468__$1;(statearr_10485_10601[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (9)))
{var inst_10431 = (state_10468[(7)]);var state_10468__$1 = state_10468;var statearr_10486_10602 = state_10468__$1;(statearr_10486_10602[(2)] = inst_10431);
(statearr_10486_10602[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (5)))
{var inst_10435 = (state_10468[(11)]);var inst_10438 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10435);var state_10468__$1 = state_10468;var statearr_10487_10603 = state_10468__$1;(statearr_10487_10603[(2)] = inst_10438);
(statearr_10487_10603[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (14)))
{var inst_10444 = (state_10468[(9)]);var inst_10442 = (state_10468[(10)]);var inst_10452 = [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"piece","piece",1396691784)];var inst_10453 = [new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),inst_10442,inst_10444];var inst_10454 = cljs.core.PersistentHashMap.fromArrays(inst_10452,inst_10453);var inst_10455 = cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_commands,inst_10454);var inst_10431 = null;var state_10468__$1 = (function (){var statearr_10488 = state_10468;(statearr_10488[(7)] = inst_10431);
(statearr_10488[(12)] = inst_10455);
return statearr_10488;
})();var statearr_10489_10604 = state_10468__$1;(statearr_10489_10604[(2)] = null);
(statearr_10489_10604[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (16)))
{var inst_10460 = (state_10468[(2)]);var state_10468__$1 = state_10468;var statearr_10490_10605 = state_10468__$1;(statearr_10490_10605[(2)] = inst_10460);
(statearr_10490_10605[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (10)))
{var inst_10448 = (state_10468[(2)]);var state_10468__$1 = state_10468;if(cljs.core.truth_(inst_10448))
{var statearr_10491_10606 = state_10468__$1;(statearr_10491_10606[(1)] = (11));
} else
{var statearr_10492_10607 = state_10468__$1;(statearr_10492_10607[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10469 === (8)))
{var inst_10444 = (state_10468[(9)]);var state_10468__$1 = state_10468;var statearr_10493_10608 = state_10468__$1;(statearr_10493_10608[(2)] = inst_10444);
(statearr_10493_10608[(1)] = (10));
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
}
}
}
});})(c__5849__auto___10590))
;return ((function (switch__5834__auto__,c__5849__auto___10590){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_10497 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10497[(0)] = state_machine__5835__auto__);
(statearr_10497[(1)] = (1));
return statearr_10497;
});
var state_machine__5835__auto____1 = (function (state_10468){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_10468);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e10498){if((e10498 instanceof Object))
{var ex__5838__auto__ = e10498;var statearr_10499_10609 = state_10468;(statearr_10499_10609[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10468);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10498;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10610 = state_10468;
state_10468 = G__10610;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_10468){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_10468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___10590))
})();var state__5851__auto__ = (function (){var statearr_10500 = f__5850__auto__.call(null);(statearr_10500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___10590);
return statearr_10500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___10590))
);
var c__5849__auto___10611 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___10611){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___10611){
return (function (state_10524){var state_val_10525 = (state_10524[(1)]);if((state_val_10525 === (7)))
{var inst_10510 = (state_10524[(2)]);var inst_10511 = cljs.core.get.call(null,inst_10510,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_10512 = cljs.core.get.call(null,inst_10510,new cljs.core.Keyword(null,"piece","piece",1396691784));var inst_10513 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10514 = [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("piece","position","piece/position",833802022)];var inst_10515 = [inst_10512,inst_10511];var inst_10516 = cljs.core.PersistentHashMap.fromArrays(inst_10514,inst_10515);var inst_10517 = [inst_10516];var inst_10518 = (new cljs.core.PersistentVector(null,1,(5),inst_10513,inst_10517,null));var inst_10519 = datascript.transact_BANG_.call(null,lg_checkers.board.conn,inst_10518);var state_10524__$1 = (function (){var statearr_10526 = state_10524;(statearr_10526[(7)] = inst_10519);
return statearr_10526;
})();var statearr_10527_10612 = state_10524__$1;(statearr_10527_10612[(2)] = null);
(statearr_10527_10612[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10525 === (6)))
{var inst_10504 = (state_10524[(8)]);var state_10524__$1 = state_10524;var statearr_10528_10613 = state_10524__$1;(statearr_10528_10613[(2)] = inst_10504);
(statearr_10528_10613[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10525 === (5)))
{var inst_10504 = (state_10524[(8)]);var inst_10507 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10504);var state_10524__$1 = state_10524;var statearr_10529_10614 = state_10524__$1;(statearr_10529_10614[(2)] = inst_10507);
(statearr_10529_10614[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10525 === (4)))
{var inst_10504 = (state_10524[(8)]);var inst_10504__$1 = (state_10524[(2)]);var inst_10505 = cljs.core.seq_QMARK_.call(null,inst_10504__$1);var state_10524__$1 = (function (){var statearr_10530 = state_10524;(statearr_10530[(8)] = inst_10504__$1);
return statearr_10530;
})();if(inst_10505)
{var statearr_10531_10615 = state_10524__$1;(statearr_10531_10615[(1)] = (5));
} else
{var statearr_10532_10616 = state_10524__$1;(statearr_10532_10616[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10525 === (3)))
{var inst_10522 = (state_10524[(2)]);var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10524__$1,inst_10522);
} else
{if((state_val_10525 === (2)))
{var state_10524__$1 = state_10524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10524__$1,(4),lg_checkers.board.board_commands);
} else
{if((state_val_10525 === (1)))
{var state_10524__$1 = state_10524;var statearr_10533_10617 = state_10524__$1;(statearr_10533_10617[(2)] = null);
(statearr_10533_10617[(1)] = (2));
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
});})(c__5849__auto___10611))
;return ((function (switch__5834__auto__,c__5849__auto___10611){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_10537 = [null,null,null,null,null,null,null,null,null];(statearr_10537[(0)] = state_machine__5835__auto__);
(statearr_10537[(1)] = (1));
return statearr_10537;
});
var state_machine__5835__auto____1 = (function (state_10524){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_10524);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e10538){if((e10538 instanceof Object))
{var ex__5838__auto__ = e10538;var statearr_10539_10618 = state_10524;(statearr_10539_10618[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10524);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10538;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10619 = state_10524;
state_10524 = G__10619;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_10524){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_10524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___10611))
})();var state__5851__auto__ = (function (){var statearr_10540 = f__5850__auto__.call(null);(statearr_10540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___10611);
return statearr_10540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___10611))
);
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__){
return (function (state_10565){var state_val_10566 = (state_10565[(1)]);if((state_val_10566 === (7)))
{var inst_10560 = (state_10565[(2)]);var state_10565__$1 = (function (){var statearr_10567 = state_10565;(statearr_10567[(7)] = inst_10560);
return statearr_10567;
})();var statearr_10568_10620 = state_10565__$1;(statearr_10568_10620[(2)] = null);
(statearr_10568_10620[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (1)))
{var state_10565__$1 = state_10565;var statearr_10569_10621 = state_10565__$1;(statearr_10569_10621[(2)] = null);
(statearr_10569_10621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (4)))
{var inst_10543 = (state_10565[(8)]);var inst_10543__$1 = (state_10565[(2)]);var inst_10544 = cljs.core._EQ_.call(null,inst_10543__$1,new cljs.core.Keyword(null,"rewind","rewind",-669264915));var state_10565__$1 = (function (){var statearr_10570 = state_10565;(statearr_10570[(8)] = inst_10543__$1);
return statearr_10570;
})();if(inst_10544)
{var statearr_10571_10622 = state_10565__$1;(statearr_10571_10622[(1)] = (5));
} else
{var statearr_10572_10623 = state_10565__$1;(statearr_10572_10623[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (13)))
{var inst_10556 = (state_10565[(2)]);var state_10565__$1 = state_10565;var statearr_10573_10624 = state_10565__$1;(statearr_10573_10624[(2)] = inst_10556);
(statearr_10573_10624[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (6)))
{var inst_10543 = (state_10565[(8)]);var inst_10548 = cljs.core._EQ_.call(null,inst_10543,new cljs.core.Keyword(null,"forward","forward",-557345303));var state_10565__$1 = state_10565;if(inst_10548)
{var statearr_10574_10625 = state_10565__$1;(statearr_10574_10625[(1)] = (8));
} else
{var statearr_10575_10626 = state_10565__$1;(statearr_10575_10626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (3)))
{var inst_10563 = (state_10565[(2)]);var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10565__$1,inst_10563);
} else
{if((state_val_10566 === (12)))
{var state_10565__$1 = state_10565;var statearr_10576_10627 = state_10565__$1;(statearr_10576_10627[(2)] = null);
(statearr_10576_10627[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (2)))
{var state_10565__$1 = state_10565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10565__$1,(4),lg_checkers.board.time_lord);
} else
{if((state_val_10566 === (11)))
{var inst_10553 = cljs.core.print.call(null,"The Doctor is in.");var state_10565__$1 = state_10565;var statearr_10577_10628 = state_10565__$1;(statearr_10577_10628[(2)] = inst_10553);
(statearr_10577_10628[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (9)))
{var state_10565__$1 = state_10565;var statearr_10578_10629 = state_10565__$1;(statearr_10578_10629[(1)] = (11));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (5)))
{var inst_10546 = lg_checkers.board.rewind.call(null);var state_10565__$1 = state_10565;var statearr_10580_10630 = state_10565__$1;(statearr_10580_10630[(2)] = inst_10546);
(statearr_10580_10630[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (10)))
{var inst_10558 = (state_10565[(2)]);var state_10565__$1 = state_10565;var statearr_10581_10631 = state_10565__$1;(statearr_10581_10631[(2)] = inst_10558);
(statearr_10581_10631[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10566 === (8)))
{var inst_10550 = lg_checkers.board.forward.call(null);var state_10565__$1 = state_10565;var statearr_10582_10632 = state_10565__$1;(statearr_10582_10632[(2)] = inst_10550);
(statearr_10582_10632[(1)] = (10));
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
var state_machine__5835__auto____0 = (function (){var statearr_10586 = [null,null,null,null,null,null,null,null,null];(statearr_10586[(0)] = state_machine__5835__auto__);
(statearr_10586[(1)] = (1));
return statearr_10586;
});
var state_machine__5835__auto____1 = (function (state_10565){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_10565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e10587){if((e10587 instanceof Object))
{var ex__5838__auto__ = e10587;var statearr_10588_10633 = state_10565;(statearr_10588_10633[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10565);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10587;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10634 = state_10565;
state_10565 = G__10634;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_10565){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_10565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_10589 = f__5850__auto__.call(null);(statearr_10589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_10589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__))
);
return c__5849__auto__;
})();
}

//# sourceMappingURL=board.js.map