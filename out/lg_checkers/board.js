// Compiled by ClojureScript 0.0-2371
goog.provide('lg_checkers.board');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('datascript');
goog.require('datascript');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof lg_checkers.board.tx_cursor !== 'undefined')
{} else
{lg_checkers.board.tx_cursor = reagent.core.atom.call(null,(datascript.tx0 + (1)));
}
if(typeof lg_checkers.board.schema !== 'undefined')
{} else
{lg_checkers.board.schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
}
/**
* @param {...*} var_args
*/
lg_checkers.board.create_conn = (function() { 
var create_conn__delegate = function (p__9751){var vec__9753 = p__9751;var schema = cljs.core.nth.call(null,vec__9753,(0),null);return reagent.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__9751 = null;if (arguments.length > 0) {
  p__9751 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__9751);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__9754){
var p__9751 = cljs.core.seq(arglist__9754);
return create_conn__delegate(p__9751);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
if(typeof lg_checkers.board.conn !== 'undefined')
{} else
{lg_checkers.board.conn = lg_checkers.board.create_conn.call(null,lg_checkers.board.schema);
}
if(typeof lg_checkers.board.history !== 'undefined')
{} else
{lg_checkers.board.history = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.conn)),cljs.core.deref.call(null,lg_checkers.board.conn)], true, false));
}
lg_checkers.board.add_to_history_BANG_ = (function add_to_history_BANG_(db){return cljs.core.swap_BANG_.call(null,lg_checkers.board.history,cljs.core.assoc,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(db),db);
});
lg_checkers.board.rewind_mode_QMARK_ = (function rewind_mode_QMARK_(db,tx_c){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(db),tx_c);
});
lg_checkers.board.commit_time_BANG_ = (function commit_time_BANG_(){return cljs.core.reset_BANG_.call(null,lg_checkers.board.conn,cljs.core.deref.call(null,lg_checkers.board.history).call(null,cljs.core.deref.call(null,lg_checkers.board.tx_cursor)));
});
lg_checkers.board.init_board = (function init_board(){var pos_matrix = cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (i,row){if(cljs.core.even_QMARK_.call(null,i))
{return cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),row));
} else
{return cljs.core.take_nth.call(null,(2),row);
}
}),cljs.core.partition.call(null,(8),(function (){var iter__4379__auto__ = (function iter__9767(s__9768){return (new cljs.core.LazySeq(null,(function (){var s__9768__$1 = s__9768;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9768__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var y = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__9768__$1,y,xs__4624__auto__,temp__4126__auto__){
return (function iter__9769(s__9770){return (new cljs.core.LazySeq(null,((function (s__9768__$1,y,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__9770__$1 = s__9770;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__9770__$1);if(temp__4126__auto____$1)
{var s__9770__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__9770__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__9770__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__9772 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__9771 = (0);while(true){
if((i__9771 < size__4378__auto__))
{var x = cljs.core._nth.call(null,c__4377__auto__,i__9771);cljs.core.chunk_append.call(null,b__9772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__9779 = (i__9771 + (1));
i__9771 = G__9779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9772),iter__9769.call(null,cljs.core.chunk_rest.call(null,s__9770__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9772),null);
}
} else
{var x = cljs.core.first.call(null,s__9770__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__9769.call(null,cljs.core.rest.call(null,s__9770__$2)));
}
} else
{return null;
}
break;
}
});})(s__9768__$1,y,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__9768__$1,y,xs__4624__auto__,temp__4126__auto__))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,cljs.core.range.call(null,(8))));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__9767.call(null,cljs.core.rest.call(null,s__9768__$1)));
} else
{{
var G__9780 = cljs.core.rest.call(null,s__9768__$1);
s__9768__$1 = G__9780;
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
return (function (i,p__9773){var vec__9774 = p__9773;var x = cljs.core.nth.call(null,vec__9774,(0),null);var y = cljs.core.nth.call(null,vec__9774,(1),null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- (i + (1))),new cljs.core.Keyword("position","idx","position/idx",-247800494),(i + (1)),new cljs.core.Keyword("position","x","position/x",548414418),x,new cljs.core.Keyword("position","y","position/y",734696329),y], null);
});})(pos_matrix))
,pos_matrix));var red_pieces = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix,positions){
return (function (i,p__9775){var vec__9776 = p__9775;var x = cljs.core.nth.call(null,vec__9776,(0),null);var y = cljs.core.nth.call(null,vec__9776,(1),null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- ((100) + (i + (1)))),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),new cljs.core.Keyword("piece","position","piece/position",833802022),(- (i + (1)))], null);
});})(pos_matrix,positions))
,cljs.core.take.call(null,(12),pos_matrix)));var black_pieces = cljs.core.vec.call(null,cljs.core.map_indexed.call(null,((function (pos_matrix,positions,red_pieces){
return (function (i,p__9777){var vec__9778 = p__9777;var x = cljs.core.nth.call(null,vec__9778,(0),null);var y = cljs.core.nth.call(null,vec__9778,(1),null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(- ((200) + (i + (1)))),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),new cljs.core.Keyword("piece","position","piece/position",833802022),(- ((20) + (i + (1))))], null);
});})(pos_matrix,positions,red_pieces))
,cljs.core.drop.call(null,(20),pos_matrix)));return lg_checkers.board.add_to_history_BANG_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(datascript.transact_BANG_.call(null,lg_checkers.board.conn,cljs.core.vec.call(null,cljs.core.concat.call(null,positions,red_pieces,black_pieces)))));
});
lg_checkers.board.checkers_rules = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"coords","coords",1041102415,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","x","position/x",548414418),new cljs.core.Symbol(null,"?x","?x",-555096650,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"piece-position","piece-position",-169357316,null),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?in-direction","?in-direction",436166953,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?in-direction","?in-direction",436166953,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)),new cljs.core.Symbol(null,"?comp-fn","?comp-fn",-471161866,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?comp-fn","?comp-fn",-471161866,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null)),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null)),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null)),cljs.core.list(new cljs.core.Symbol(null,"coords","coords",1041102415,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?xx","?xx",-1701306311,null)),cljs.core.list(new cljs.core.Symbol(null,"inc-dec","inc-dec",2091801507,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null),new cljs.core.Keyword("position","x","position/x",548414418),new cljs.core.Symbol(null,"?xx","?xx",-1701306311,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"empty-pos","empty-pos",-1737780059,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("piece","_position","piece/_position",-1194713808))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"empty-neighbors","empty-neighbors",-1832531952,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null)),cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null)),cljs.core.list(new cljs.core.Symbol(null,"empty-pos","empty-pos",-1737780059,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"enemies","enemies",-540150047,null),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Symbol(null,"?enemy","?enemy",2069043598,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?enemy","?enemy",2069043598,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?enemy-color","?enemy-color",553596923,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Symbol(null,"?enemy-color","?enemy-color",553596923,null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc2-dec2","inc2-dec2",179829096,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),(2)),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"inc2-dec2","inc2-dec2",179829096,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"?i","?i",1333985104,null),(2)),new cljs.core.Symbol(null,"?ii","?ii",1164576054,null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"jump-neighbors","jump-neighbors",1108978841,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null)),cljs.core.list(new cljs.core.Symbol(null,"coords","coords",1041102415,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null)),cljs.core.list(new cljs.core.Symbol(null,"inc2-dec2","inc2-dec2",179829096,null),new cljs.core.Symbol(null,"?x","?x",-555096650,null),new cljs.core.Symbol(null,"?xx","?xx",-1701306311,null)),cljs.core.list(new cljs.core.Symbol(null,"inc2-dec2","inc2-dec2",179829096,null),new cljs.core.Symbol(null,"?y","?y",-1454470631,null),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null),new cljs.core.Keyword("position","x","position/x",548414418),new cljs.core.Symbol(null,"?xx","?xx",-1701306311,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?neighbor","?neighbor",-2088674137,null),new cljs.core.Keyword("position","y","position/y",734696329),new cljs.core.Symbol(null,"?yy","?yy",-334992695,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pos-between","pos-between",-1387233834,null),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null),new cljs.core.Symbol(null,"?pos2","?pos2",-562117030,null),new cljs.core.Symbol(null,"?pos-between","?pos-between",1293879685,null)),cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null),new cljs.core.Symbol(null,"?pos-between","?pos-between",1293879685,null)),cljs.core.list(new cljs.core.Symbol(null,"neighbors","neighbors",-1223999296,null),new cljs.core.Symbol(null,"?pos2","?pos2",-562117030,null),new cljs.core.Symbol(null,"?pos-between","?pos-between",1293879685,null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"n-jumps","n-jumps",1000612464,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?jumping-piece","?jumping-piece",93266389,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null)),cljs.core.list(new cljs.core.Symbol(null,"jump-neighbors","jump-neighbors",1108978841,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null)),cljs.core.list(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?jumping-piece","?jumping-piece",93266389,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null)),cljs.core.list(new cljs.core.Symbol(null,"empty-pos","empty-pos",-1737780059,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null)),cljs.core.list(new cljs.core.Symbol(null,"pos-between","pos-between",-1387233834,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null),new cljs.core.Symbol(null,"?jumped","?jumped",288707917,null)),cljs.core.list(new cljs.core.Symbol(null,"piece-position","piece-position",-169357316,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null),new cljs.core.Symbol(null,"?jumped","?jumped",288707917,null)),cljs.core.list(new cljs.core.Symbol(null,"enemies","enemies",-540150047,null),new cljs.core.Symbol(null,"?jumping-piece","?jumping-piece",93266389,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"jumps","jumps",188195739,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null)),cljs.core.list(new cljs.core.Symbol(null,"piece-position","piece-position",-169357316,null),new cljs.core.Symbol(null,"?jumping-piece","?jumping-piece",93266389,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),cljs.core.list(new cljs.core.Symbol(null,"n-jumps","n-jumps",1000612464,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?jumping-piece","?jumping-piece",93266389,null),new cljs.core.Symbol(null,"?jumps","?jumps",-2043041570,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"moves","moves",-1726970514,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null)),cljs.core.list(new cljs.core.Symbol(null,"piece-position","piece-position",-169357316,null),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)),cljs.core.list(new cljs.core.Symbol(null,"empty-neighbors","empty-neighbors",-1832531952,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null)),cljs.core.list(new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"moves","moves",-1726970514,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null)),cljs.core.list(new cljs.core.Symbol(null,"jumps","jumps",188195739,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Symbol(null,"?moves","?moves",210649577,null),new cljs.core.Symbol(null,"?jumped-piece","?jumped-piece",1864268658,null))], null)], null);
/**
* @param {...*} var_args
*/
lg_checkers.board.board_contents_q = (function() { 
var board_contents_q__delegate = function (db,p__9781){var vec__9783 = p__9781;var tx_id = cljs.core.nth.call(null,vec__9783,(0),null);if(cljs.core.truth_((function (){var and__3628__auto__ = tx_id;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not_EQ_.call(null,tx_id,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(db));
} else
{return and__3628__auto__;
}
})()))
{return datascript.q.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),cljs.core.get.call(null,cljs.core.deref.call(null,lg_checkers.board.history),tx_id));
} else
{return datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?idx","?idx",687068061,null),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword("position","idx","position/idx",-247800494),new cljs.core.Symbol(null,"?idx","?idx",687068061,null)], null)], null),db);
}
};
var board_contents_q = function (db,var_args){
var p__9781 = null;if (arguments.length > 1) {
  p__9781 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return board_contents_q__delegate.call(this,db,p__9781);};
board_contents_q.cljs$lang$maxFixedArity = 1;
board_contents_q.cljs$lang$applyTo = (function (arglist__9784){
var db = cljs.core.first(arglist__9784);
var p__9781 = cljs.core.rest(arglist__9784);
return board_contents_q__delegate(db,p__9781);
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
var get_board__delegate = function (db,p__9785){var vec__9787 = p__9785;var tx_id = cljs.core.nth.call(null,vec__9787,(0),null);return lg_checkers.board.board_munge.call(null,lg_checkers.board.board_contents_q.call(null,db,tx_id));
};
var get_board = function (db,var_args){
var p__9785 = null;if (arguments.length > 1) {
  p__9785 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get_board__delegate.call(this,db,p__9785);};
get_board.cljs$lang$maxFixedArity = 1;
get_board.cljs$lang$applyTo = (function (arglist__9788){
var db = cljs.core.first(arglist__9788);
var p__9785 = cljs.core.rest(arglist__9788);
return get_board__delegate(db,p__9785);
});
get_board.cljs$core$IFn$_invoke$arity$variadic = get_board__delegate;
return get_board;
})()
;
lg_checkers.board.tx_queue = (function tx_queue(){return cljs.core.vec.call(null,cljs.core.range.call(null,datascript.tx0,(new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lg_checkers.board.conn)) + (1))));
});
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
* Given a db and a position, find a piece or return nil
*/
lg_checkers.board.get_piece_at_pos = (function get_piece_at_pos(db,pos){return cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null)], null),db,pos));
});
/**
* Given a db and a position, find a color or empty designation
*/
lg_checkers.board.get_color_at_pos = (function get_color_at_pos(db,pos){var or__3640__auto__ = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?color","?color",-2093558213,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?pos","?pos",535915688,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","position","piece/position",833802022),new cljs.core.Symbol(null,"?pos","?pos",535915688,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?piece","?piece",1305024426,null),new cljs.core.Keyword("piece","color","piece/color",914382103),new cljs.core.Symbol(null,"?color","?color",-2093558213,null)], null)], null),db,pos));if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"empty-piece","empty-piece",515714264);
}
});
/**
* Given a db and two positions, checks the legality of move. At present, the
* game is pretty boring as the only legal move is to an adjacent empty space.
* Passive agressive checkers
*/
lg_checkers.board.legal_move_QMARK_ = (function legal_move_QMARK_(db,pos1,pos2){var piece_color = lg_checkers.board.get_color_at_pos.call(null,db,pos1);var possible_moves = datascript.q.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?move","?move",-1971894373,null),new cljs.core.Symbol(null,"?jumped","?jumped",288707917,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Keyword(null,"where","where",-2044795965),cljs.core.list(new cljs.core.Symbol(null,"moves","moves",-1726970514,null),new cljs.core.Symbol(null,"?dir-fn","?dir-fn",1949610784,null),new cljs.core.Symbol(null,"?pos1","?pos1",-398103504,null),new cljs.core.Symbol(null,"?move","?move",-1971894373,null),new cljs.core.Symbol(null,"?jumped","?jumped",288707917,null))], null),db,lg_checkers.board.checkers_rules,pos1,((function (piece_color){
return (function (color){return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black-piece","black-piece",2048390247),cljs.core._GT_,new cljs.core.Keyword(null,"red-piece","red-piece",-398776236),cljs.core._LT_], null),color);
});})(piece_color))
);return cljs.core.first.call(null,cljs.core.filter.call(null,((function (piece_color,possible_moves){
return (function (p__9791){var vec__9792 = p__9791;var pos = cljs.core.nth.call(null,vec__9792,(0),null);var jumped = cljs.core.nth.call(null,vec__9792,(1),null);return cljs.core._EQ_.call(null,pos,pos2);
});})(piece_color,possible_moves))
,possible_moves));
});
/**
* Fires a transaction to move a piece to a position. In this context you could
* also check for piece jumping, kinging, or other game domain side effects and
* mutate the transaction accordingly.
*/
lg_checkers.board.move_BANG_ = (function move_BANG_(piece,position,jumped){var tx_data_9793 = (cljs.core.truth_(jumped)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),piece,new cljs.core.Keyword("piece","position","piece/position",833802022),position], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),jumped,new cljs.core.Keyword("piece","position","piece/position",833802022)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),piece,new cljs.core.Keyword("piece","position","piece/position",833802022),position], null)], null));var txn_9794 = datascript.transact_BANG_.call(null,lg_checkers.board.conn,tx_data_9793);lg_checkers.board.add_to_history_BANG_.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(txn_9794));
return cljs.core.reset_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.last.call(null,lg_checkers.board.tx_queue.call(null)));
});
lg_checkers.board.travel = (function travel(direction){if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"rewind","rewind",-669264915)))
{return cljs.core.swap_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.dec);
} else
{if(cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"forward","forward",-557345303)))
{return cljs.core.swap_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.inc);
} else
{return null;
}
}
});
lg_checkers.board.cursor_inc = (function cursor_inc(txc){if((txc < cljs.core.last.call(null,lg_checkers.board.tx_queue.call(null))))
{return (txc + (1));
} else
{return txc;
}
});
lg_checkers.board.cursor_dec = (function cursor_dec(txc){if((cljs.core.first.call(null,lg_checkers.board.tx_queue.call(null)) < txc))
{return (txc - (1));
} else
{return txc;
}
});
lg_checkers.board.rewind = (function rewind(){return cljs.core.swap_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.dec);
});
lg_checkers.board.forward = (function forward(){return cljs.core.swap_BANG_.call(null,lg_checkers.board.tx_cursor,cljs.core.inc);
});
if(typeof lg_checkers.board.mah_loops !== 'undefined')
{} else
{lg_checkers.board.mah_loops = (function (){var c__5823__auto___9963 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___9963){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___9963){
return (function (state_9840){var state_val_9841 = (state_9840[(1)]);if((state_val_9841 === (7)))
{var inst_9807 = (state_9840[(7)]);var inst_9795 = (state_9840[(8)]);var inst_9805 = (state_9840[(2)]);var inst_9806 = cljs.core.get.call(null,inst_9805,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_9807__$1 = cljs.core.deref.call(null,lg_checkers.board.conn);var inst_9808 = lg_checkers.board.get_piece_at_pos.call(null,inst_9807__$1,inst_9795);var state_9840__$1 = (function (){var statearr_9842 = state_9840;(statearr_9842[(7)] = inst_9807__$1);
(statearr_9842[(9)] = inst_9806);
(statearr_9842[(10)] = inst_9808);
return statearr_9842;
})();if(cljs.core.truth_(inst_9795))
{var statearr_9843_9964 = state_9840__$1;(statearr_9843_9964[(1)] = (8));
} else
{var statearr_9844_9965 = state_9840__$1;(statearr_9844_9965[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (1)))
{var inst_9795 = null;var state_9840__$1 = (function (){var statearr_9845 = state_9840;(statearr_9845[(8)] = inst_9795);
return statearr_9845;
})();var statearr_9846_9966 = state_9840__$1;(statearr_9846_9966[(2)] = null);
(statearr_9846_9966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (4)))
{var inst_9799 = (state_9840[(11)]);var inst_9799__$1 = (state_9840[(2)]);var inst_9800 = cljs.core.seq_QMARK_.call(null,inst_9799__$1);var state_9840__$1 = (function (){var statearr_9847 = state_9840;(statearr_9847[(11)] = inst_9799__$1);
return statearr_9847;
})();if(inst_9800)
{var statearr_9848_9967 = state_9840__$1;(statearr_9848_9967[(1)] = (5));
} else
{var statearr_9849_9968 = state_9840__$1;(statearr_9849_9968[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (15)))
{var inst_9806 = (state_9840[(9)]);var inst_9795 = inst_9806;var state_9840__$1 = (function (){var statearr_9850 = state_9840;(statearr_9850[(8)] = inst_9795);
return statearr_9850;
})();var statearr_9851_9969 = state_9840__$1;(statearr_9851_9969[(2)] = null);
(statearr_9851_9969[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (13)))
{var inst_9816 = (state_9840[(2)]);var state_9840__$1 = state_9840;var statearr_9852_9970 = state_9840__$1;(statearr_9852_9970[(2)] = inst_9816);
(statearr_9852_9970[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (6)))
{var inst_9799 = (state_9840[(11)]);var state_9840__$1 = state_9840;var statearr_9853_9971 = state_9840__$1;(statearr_9853_9971[(2)] = inst_9799);
(statearr_9853_9971[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (17)))
{var inst_9806 = (state_9840[(9)]);var inst_9808 = (state_9840[(10)]);var inst_9821 = (state_9840[(12)]);var inst_9823 = [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"jumped","jumped",31178883)];var inst_9824 = cljs.core.second.call(null,inst_9821);var inst_9825 = [new cljs.core.Keyword(null,"update-board-position","update-board-position",-522194238),inst_9806,inst_9808,inst_9824];var inst_9826 = cljs.core.PersistentHashMap.fromArrays(inst_9823,inst_9825);var inst_9827 = cljs.core.async.put_BANG_.call(null,lg_checkers.board.board_commands,inst_9826);var inst_9795 = null;var state_9840__$1 = (function (){var statearr_9854 = state_9840;(statearr_9854[(13)] = inst_9827);
(statearr_9854[(8)] = inst_9795);
return statearr_9854;
})();var statearr_9855_9972 = state_9840__$1;(statearr_9855_9972[(2)] = null);
(statearr_9855_9972[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (3)))
{var inst_9838 = (state_9840[(2)]);var state_9840__$1 = state_9840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9840__$1,inst_9838);
} else
{if((state_val_9841 === (12)))
{var inst_9808 = (state_9840[(10)]);var state_9840__$1 = state_9840;var statearr_9856_9973 = state_9840__$1;(statearr_9856_9973[(2)] = inst_9808);
(statearr_9856_9973[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (2)))
{var state_9840__$1 = state_9840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9840__$1,(4),lg_checkers.board.board_events);
} else
{if((state_val_9841 === (19)))
{var inst_9832 = (state_9840[(2)]);var state_9840__$1 = state_9840;var statearr_9857_9974 = state_9840__$1;(statearr_9857_9974[(2)] = inst_9832);
(statearr_9857_9974[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (11)))
{var inst_9807 = (state_9840[(7)]);var inst_9811 = cljs.core.deref.call(null,lg_checkers.board.tx_cursor);var inst_9812 = lg_checkers.board.rewind_mode_QMARK_.call(null,inst_9807,inst_9811);var inst_9813 = !(inst_9812);var state_9840__$1 = state_9840;var statearr_9858_9975 = state_9840__$1;(statearr_9858_9975[(2)] = inst_9813);
(statearr_9858_9975[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (9)))
{var inst_9795 = (state_9840[(8)]);var state_9840__$1 = state_9840;var statearr_9859_9976 = state_9840__$1;(statearr_9859_9976[(2)] = inst_9795);
(statearr_9859_9976[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (5)))
{var inst_9799 = (state_9840[(11)]);var inst_9802 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9799);var state_9840__$1 = state_9840;var statearr_9860_9977 = state_9840__$1;(statearr_9860_9977[(2)] = inst_9802);
(statearr_9860_9977[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (14)))
{var inst_9807 = (state_9840[(7)]);var inst_9795 = (state_9840[(8)]);var inst_9806 = (state_9840[(9)]);var inst_9821 = (state_9840[(12)]);var inst_9821__$1 = lg_checkers.board.legal_move_QMARK_.call(null,inst_9807,inst_9795,inst_9806);var state_9840__$1 = (function (){var statearr_9861 = state_9840;(statearr_9861[(12)] = inst_9821__$1);
return statearr_9861;
})();if(cljs.core.truth_(inst_9821__$1))
{var statearr_9862_9978 = state_9840__$1;(statearr_9862_9978[(1)] = (17));
} else
{var statearr_9863_9979 = state_9840__$1;(statearr_9863_9979[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (16)))
{var inst_9836 = (state_9840[(2)]);var state_9840__$1 = state_9840;var statearr_9864_9980 = state_9840__$1;(statearr_9864_9980[(2)] = inst_9836);
(statearr_9864_9980[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (10)))
{var inst_9819 = (state_9840[(2)]);var state_9840__$1 = state_9840;if(cljs.core.truth_(inst_9819))
{var statearr_9865_9981 = state_9840__$1;(statearr_9865_9981[(1)] = (14));
} else
{var statearr_9866_9982 = state_9840__$1;(statearr_9866_9982[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (18)))
{var inst_9795 = null;var state_9840__$1 = (function (){var statearr_9867 = state_9840;(statearr_9867[(8)] = inst_9795);
return statearr_9867;
})();var statearr_9868_9983 = state_9840__$1;(statearr_9868_9983[(2)] = null);
(statearr_9868_9983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9841 === (8)))
{var inst_9808 = (state_9840[(10)]);var state_9840__$1 = state_9840;if(cljs.core.truth_(inst_9808))
{var statearr_9869_9984 = state_9840__$1;(statearr_9869_9984[(1)] = (11));
} else
{var statearr_9870_9985 = state_9840__$1;(statearr_9870_9985[(1)] = (12));
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
}
}
}
}
}
}
});})(c__5823__auto___9963))
;return ((function (switch__5808__auto__,c__5823__auto___9963){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_9874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9874[(0)] = state_machine__5809__auto__);
(statearr_9874[(1)] = (1));
return statearr_9874;
});
var state_machine__5809__auto____1 = (function (state_9840){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_9840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e9875){if((e9875 instanceof Object))
{var ex__5812__auto__ = e9875;var statearr_9876_9986 = state_9840;(statearr_9876_9986[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9875;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9987 = state_9840;
state_9840 = G__9987;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_9840){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_9840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___9963))
})();var state__5825__auto__ = (function (){var statearr_9877 = f__5824__auto__.call(null);(statearr_9877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___9963);
return statearr_9877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___9963))
);
var c__5823__auto___9988 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___9988){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___9988){
return (function (state_9896){var state_val_9897 = (state_9896[(1)]);if((state_val_9897 === (7)))
{var inst_9887 = (state_9896[(2)]);var inst_9888 = cljs.core.get.call(null,inst_9887,new cljs.core.Keyword(null,"jumped","jumped",31178883));var inst_9889 = cljs.core.get.call(null,inst_9887,new cljs.core.Keyword(null,"position","position",-2011731912));var inst_9890 = cljs.core.get.call(null,inst_9887,new cljs.core.Keyword(null,"piece","piece",1396691784));var inst_9891 = lg_checkers.board.move_BANG_.call(null,inst_9890,inst_9889,inst_9888);var state_9896__$1 = (function (){var statearr_9898 = state_9896;(statearr_9898[(7)] = inst_9891);
return statearr_9898;
})();var statearr_9899_9989 = state_9896__$1;(statearr_9899_9989[(2)] = null);
(statearr_9899_9989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9897 === (6)))
{var inst_9881 = (state_9896[(8)]);var state_9896__$1 = state_9896;var statearr_9900_9990 = state_9896__$1;(statearr_9900_9990[(2)] = inst_9881);
(statearr_9900_9990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9897 === (5)))
{var inst_9881 = (state_9896[(8)]);var inst_9884 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9881);var state_9896__$1 = state_9896;var statearr_9901_9991 = state_9896__$1;(statearr_9901_9991[(2)] = inst_9884);
(statearr_9901_9991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9897 === (4)))
{var inst_9881 = (state_9896[(8)]);var inst_9881__$1 = (state_9896[(2)]);var inst_9882 = cljs.core.seq_QMARK_.call(null,inst_9881__$1);var state_9896__$1 = (function (){var statearr_9902 = state_9896;(statearr_9902[(8)] = inst_9881__$1);
return statearr_9902;
})();if(inst_9882)
{var statearr_9903_9992 = state_9896__$1;(statearr_9903_9992[(1)] = (5));
} else
{var statearr_9904_9993 = state_9896__$1;(statearr_9904_9993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9897 === (3)))
{var inst_9894 = (state_9896[(2)]);var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9896__$1,inst_9894);
} else
{if((state_val_9897 === (2)))
{var state_9896__$1 = state_9896;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9896__$1,(4),lg_checkers.board.board_commands);
} else
{if((state_val_9897 === (1)))
{var state_9896__$1 = state_9896;var statearr_9905_9994 = state_9896__$1;(statearr_9905_9994[(2)] = null);
(statearr_9905_9994[(1)] = (2));
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
});})(c__5823__auto___9988))
;return ((function (switch__5808__auto__,c__5823__auto___9988){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_9909 = [null,null,null,null,null,null,null,null,null];(statearr_9909[(0)] = state_machine__5809__auto__);
(statearr_9909[(1)] = (1));
return statearr_9909;
});
var state_machine__5809__auto____1 = (function (state_9896){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_9896);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e9910){if((e9910 instanceof Object))
{var ex__5812__auto__ = e9910;var statearr_9911_9995 = state_9896;(statearr_9911_9995[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9896);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9910;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9996 = state_9896;
state_9896 = G__9996;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_9896){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_9896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___9988))
})();var state__5825__auto__ = (function (){var statearr_9912 = f__5824__auto__.call(null);(statearr_9912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___9988);
return statearr_9912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___9988))
);
var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_9938){var state_val_9939 = (state_9938[(1)]);if((state_val_9939 === (7)))
{var inst_9933 = (state_9938[(2)]);var state_9938__$1 = (function (){var statearr_9940 = state_9938;(statearr_9940[(7)] = inst_9933);
return statearr_9940;
})();var statearr_9941_9997 = state_9938__$1;(statearr_9941_9997[(2)] = null);
(statearr_9941_9997[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (1)))
{var state_9938__$1 = state_9938;var statearr_9942_9998 = state_9938__$1;(statearr_9942_9998[(2)] = null);
(statearr_9942_9998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (4)))
{var inst_9915 = (state_9938[(8)]);var inst_9915__$1 = (state_9938[(2)]);var inst_9916 = cljs.core._EQ_.call(null,inst_9915__$1,new cljs.core.Keyword(null,"rewind","rewind",-669264915));var state_9938__$1 = (function (){var statearr_9943 = state_9938;(statearr_9943[(8)] = inst_9915__$1);
return statearr_9943;
})();if(inst_9916)
{var statearr_9944_9999 = state_9938__$1;(statearr_9944_9999[(1)] = (5));
} else
{var statearr_9945_10000 = state_9938__$1;(statearr_9945_10000[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (13)))
{var inst_9929 = (state_9938[(2)]);var state_9938__$1 = state_9938;var statearr_9946_10001 = state_9938__$1;(statearr_9946_10001[(2)] = inst_9929);
(statearr_9946_10001[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (6)))
{var inst_9915 = (state_9938[(8)]);var inst_9920 = cljs.core._EQ_.call(null,inst_9915,new cljs.core.Keyword(null,"forward","forward",-557345303));var state_9938__$1 = state_9938;if(inst_9920)
{var statearr_9947_10002 = state_9938__$1;(statearr_9947_10002[(1)] = (8));
} else
{var statearr_9948_10003 = state_9938__$1;(statearr_9948_10003[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (3)))
{var inst_9936 = (state_9938[(2)]);var state_9938__$1 = state_9938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9938__$1,inst_9936);
} else
{if((state_val_9939 === (12)))
{var state_9938__$1 = state_9938;var statearr_9949_10004 = state_9938__$1;(statearr_9949_10004[(2)] = null);
(statearr_9949_10004[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (2)))
{var state_9938__$1 = state_9938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9938__$1,(4),lg_checkers.board.time_lord);
} else
{if((state_val_9939 === (11)))
{var inst_9926 = lg_checkers.board.commit_time_BANG_.call(null);var state_9938__$1 = state_9938;var statearr_9950_10005 = state_9938__$1;(statearr_9950_10005[(2)] = inst_9926);
(statearr_9950_10005[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (9)))
{var inst_9915 = (state_9938[(8)]);var inst_9924 = cljs.core._EQ_.call(null,inst_9915,new cljs.core.Keyword(null,"commit","commit",113374389));var state_9938__$1 = state_9938;if(inst_9924)
{var statearr_9951_10006 = state_9938__$1;(statearr_9951_10006[(1)] = (11));
} else
{var statearr_9952_10007 = state_9938__$1;(statearr_9952_10007[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (5)))
{var inst_9918 = lg_checkers.board.rewind.call(null);var state_9938__$1 = state_9938;var statearr_9953_10008 = state_9938__$1;(statearr_9953_10008[(2)] = inst_9918);
(statearr_9953_10008[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (10)))
{var inst_9931 = (state_9938[(2)]);var state_9938__$1 = state_9938;var statearr_9954_10009 = state_9938__$1;(statearr_9954_10009[(2)] = inst_9931);
(statearr_9954_10009[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9939 === (8)))
{var inst_9922 = lg_checkers.board.forward.call(null);var state_9938__$1 = state_9938;var statearr_9955_10010 = state_9938__$1;(statearr_9955_10010[(2)] = inst_9922);
(statearr_9955_10010[(1)] = (10));
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
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_9959 = [null,null,null,null,null,null,null,null,null];(statearr_9959[(0)] = state_machine__5809__auto__);
(statearr_9959[(1)] = (1));
return statearr_9959;
});
var state_machine__5809__auto____1 = (function (state_9938){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_9938);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e9960){if((e9960 instanceof Object))
{var ex__5812__auto__ = e9960;var statearr_9961_10011 = state_9938;(statearr_9961_10011[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9938);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10012 = state_9938;
state_9938 = G__10012;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_9938){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_9938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_9962 = f__5824__auto__.call(null);(statearr_9962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_9962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
})();
}

//# sourceMappingURL=board.js.map