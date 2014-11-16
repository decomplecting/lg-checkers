// Compiled by ClojureScript 0.0-2371
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.query');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = datascript.core.tx0;
datascript.refs = (function refs(schema){return cljs.core.mapv.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__11878){var vec__11879 = p__11878;var _ = cljs.core.nth.call(null,vec__11879,(0),null);var v = cljs.core.nth.call(null,vec__11879,(1),null);return cljs.core._EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
}),schema));
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__11880){var vec__11882 = p__11880;var schema = cljs.core.nth.call(null,vec__11882,(0),null);return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var empty_db = function (var_args){
var p__11880 = null;if (arguments.length > 0) {
  p__11880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__11880);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__11883){
var p__11880 = cljs.core.seq(arglist__11883);
return empty_db__delegate(p__11880);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__11884){var vec__11886 = p__11884;var schema = cljs.core.nth.call(null,vec__11886,(0),null);return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__11884 = null;if (arguments.length > 0) {
  p__11884 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__11884);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__11887){
var p__11884 = cljs.core.seq(arglist__11887);
return create_conn__delegate(p__11884);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__11888){var vec__11890 = p__11888;var tx_meta = cljs.core.nth.call(null,vec__11890,(0),null);return datascript.core.transact_tx_data.call(null,datascript.core.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
};
var with$ = function (db,tx_data,var_args){
var p__11888 = null;if (arguments.length > 2) {
  p__11888 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return with$__delegate.call(this,db,tx_data,p__11888);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__11891){
var db = cljs.core.first(arglist__11891);
arglist__11891 = cljs.core.next(arglist__11891);
var tx_data = cljs.core.first(arglist__11891);
var p__11888 = cljs.core.rest(arglist__11891);
return with$__delegate(db,tx_data,p__11888);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){var report = cljs.core.atom.call(null,null);cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){var r = datascript.with$.call(null,db,tx_data,tx_meta);cljs.core.reset_BANG_.call(null,report,r);
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
return cljs.core.deref.call(null,report);
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__11892){var vec__11900 = p__11892;var tx_meta = cljs.core.nth.call(null,vec__11900,(0),null);var report = datascript._transact_BANG_.call(null,conn,tx_data,tx_meta);var seq__11901_11907 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));var chunk__11902_11908 = null;var count__11903_11909 = (0);var i__11904_11910 = (0);while(true){
if((i__11904_11910 < count__11903_11909))
{var vec__11905_11911 = cljs.core._nth.call(null,chunk__11902_11908,i__11904_11910);var __11912 = cljs.core.nth.call(null,vec__11905_11911,(0),null);var callback_11913 = cljs.core.nth.call(null,vec__11905_11911,(1),null);callback_11913.call(null,report);
{
var G__11914 = seq__11901_11907;
var G__11915 = chunk__11902_11908;
var G__11916 = count__11903_11909;
var G__11917 = (i__11904_11910 + (1));
seq__11901_11907 = G__11914;
chunk__11902_11908 = G__11915;
count__11903_11909 = G__11916;
i__11904_11910 = G__11917;
continue;
}
} else
{var temp__4126__auto___11918 = cljs.core.seq.call(null,seq__11901_11907);if(temp__4126__auto___11918)
{var seq__11901_11919__$1 = temp__4126__auto___11918;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11901_11919__$1))
{var c__4410__auto___11920 = cljs.core.chunk_first.call(null,seq__11901_11919__$1);{
var G__11921 = cljs.core.chunk_rest.call(null,seq__11901_11919__$1);
var G__11922 = c__4410__auto___11920;
var G__11923 = cljs.core.count.call(null,c__4410__auto___11920);
var G__11924 = (0);
seq__11901_11907 = G__11921;
chunk__11902_11908 = G__11922;
count__11903_11909 = G__11923;
i__11904_11910 = G__11924;
continue;
}
} else
{var vec__11906_11925 = cljs.core.first.call(null,seq__11901_11919__$1);var __11926 = cljs.core.nth.call(null,vec__11906_11925,(0),null);var callback_11927 = cljs.core.nth.call(null,vec__11906_11925,(1),null);callback_11927.call(null,report);
{
var G__11928 = cljs.core.next.call(null,seq__11901_11919__$1);
var G__11929 = null;
var G__11930 = (0);
var G__11931 = (0);
seq__11901_11907 = G__11928;
chunk__11902_11908 = G__11929;
count__11903_11909 = G__11930;
i__11904_11910 = G__11931;
continue;
}
}
} else
{}
}
break;
}
return report;
};
var transact_BANG_ = function (conn,tx_data,var_args){
var p__11892 = null;if (arguments.length > 2) {
  p__11892 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_BANG___delegate.call(this,conn,tx_data,p__11892);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__11932){
var conn = cljs.core.first(arglist__11932);
arglist__11932 = cljs.core.next(arglist__11932);
var tx_data = cljs.core.first(arglist__11932);
var p__11892 = cljs.core.rest(arglist__11932);
return transact_BANG___delegate(conn,tx_data,p__11892);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);
return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.components__GT_pattern = (function components__GT_pattern(index,p__11933){var vec__11936 = p__11933;var c0 = cljs.core.nth.call(null,vec__11936,(0),null);var c1 = cljs.core.nth.call(null,vec__11936,(1),null);var c2 = cljs.core.nth.call(null,vec__11936,(2),null);var c3 = cljs.core.nth.call(null,vec__11936,(3),null);var G__11937 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__11937) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){return datascript.btset.slice.call(null,cljs.core.get.call(null,db,index),datascript.components__GT_pattern.call(null,index,cs));
};
var datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__11939){
var db = cljs.core.first(arglist__11939);
arglist__11939 = cljs.core.next(arglist__11939);
var index = cljs.core.first(arglist__11939);
var cs = cljs.core.rest(arglist__11939);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){return datascript.btset.slice.call(null,cljs.core.get.call(null,db,index),datascript.components__GT_pattern.call(null,index,cs),(new datascript.core.Datom(null,null,null,null,null)));
};
var seek_datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__11940){
var db = cljs.core.first(arglist__11940);
arglist__11940 = cljs.core.next(arglist__11940);
var index = cljs.core.first(arglist__11940);
var cs = cljs.core.rest(arglist__11940);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){return datascript.btset.slice.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(db),(new datascript.core.Datom(null,attr,start,null,null)),(new datascript.core.Datom(null,attr,end,null,null)));
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){var d__$1 = this;return cljs.core.pr_sequential_writer.call(null,w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
datascript.datom_from_reader = (function datom_from_reader(p__11941){var vec__11943 = p__11941;var e = cljs.core.nth.call(null,vec__11943,(0),null);var a = cljs.core.nth.call(null,vec__11943,(1),null);var v = cljs.core.nth.call(null,vec__11943,(2),null);var tx = cljs.core.nth.call(null,vec__11943,(3),null);var added = cljs.core.nth.call(null,vec__11943,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){var db__$1 = this;cljs.core._write.call(null,w,"#datascript/DB {");
cljs.core._write.call(null,w,":schema ");
cljs.core.pr_writer.call(null,db__$1.schema,w,opts);
cljs.core._write.call(null,w,", :datoms ");
cljs.core.pr_sequential_writer.call(null,w,((function (db__$1){
return (function (d,w__$1,opts__$1){return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
});})(db__$1))
,"["," ","]",opts,db__$1.eavt);
return cljs.core._write.call(null,w,"}");
});
datascript.db_from_reader = (function db_from_reader(p__11944){var map__11948 = p__11944;var map__11948__$1 = ((cljs.core.seq_QMARK_.call(null,map__11948))?cljs.core.apply.call(null,cljs.core.hash_map,map__11948):map__11948);var datoms = cljs.core.get.call(null,map__11948__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema = cljs.core.get.call(null,map__11948__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.call(null,((function (map__11948,map__11948__$1,datoms,schema){
return (function (p__11949){var vec__11950 = p__11949;var e = cljs.core.nth.call(null,vec__11950,(0),null);var a = cljs.core.nth.call(null,vec__11950,(1),null);var v = cljs.core.nth.call(null,vec__11950,(2),null);var tx = cljs.core.nth.call(null,vec__11950,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__11948,map__11948__$1,datoms,schema))
,datoms);return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.reduce.call(null,cljs.core.max,datascript.tx0,cljs.core.map.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1)),new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
});
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (part){if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)))
{return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else
{return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
}
});
var tempid__2 = (function (part,x){if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213)))
{return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else
{return x;
}
});
tempid = function(part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,part);
case 2:
return tempid__2.call(this,part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = cljs.core.deref;
/**
* @param {...*} var_args
*/
datascript.transact = (function() { 
var transact__delegate = function (conn,tx_data,p__11951){var vec__11956 = p__11951;var tx_meta = cljs.core.nth.call(null,vec__11956,(0),null);var res = datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);if(typeof datascript.t11957 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t11957 = (function (res,tx_meta,vec__11956,p__11951,tx_data,conn,transact,meta11958){
this.res = res;
this.tx_meta = tx_meta;
this.vec__11956 = vec__11956;
this.p__11951 = p__11951;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta11958 = meta11958;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t11957.cljs$lang$type = true;
datascript.t11957.cljs$lang$ctorStr = "datascript/t11957";
datascript.t11957.cljs$lang$ctorPrWriter = ((function (res,vec__11956,tx_meta){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"datascript/t11957");
});})(res,vec__11956,tx_meta))
;
datascript.t11957.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__11956,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return true;
});})(res,vec__11956,tx_meta))
;
datascript.t11957.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__11956,tx_meta){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return self__.res;
});})(res,vec__11956,tx_meta))
;
datascript.t11957.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__11956,tx_meta){
return (function (_){var self__ = this;
var ___$1 = this;return self__.res;
});})(res,vec__11956,tx_meta))
;
datascript.t11957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__11956,tx_meta){
return (function (_11959){var self__ = this;
var _11959__$1 = this;return self__.meta11958;
});})(res,vec__11956,tx_meta))
;
datascript.t11957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__11956,tx_meta){
return (function (_11959,meta11958__$1){var self__ = this;
var _11959__$1 = this;return (new datascript.t11957(self__.res,self__.tx_meta,self__.vec__11956,self__.p__11951,self__.tx_data,self__.conn,self__.transact,meta11958__$1));
});})(res,vec__11956,tx_meta))
;
datascript.__GT_t11957 = ((function (res,vec__11956,tx_meta){
return (function __GT_t11957(res__$1,tx_meta__$1,vec__11956__$1,p__11951__$1,tx_data__$1,conn__$1,transact__$1,meta11958){return (new datascript.t11957(res__$1,tx_meta__$1,vec__11956__$1,p__11951__$1,tx_data__$1,conn__$1,transact__$1,meta11958));
});})(res,vec__11956,tx_meta))
;
}
return (new datascript.t11957(res,tx_meta,vec__11956,p__11951,tx_data,conn,transact,null));
};
var transact = function (conn,tx_data,var_args){
var p__11951 = null;if (arguments.length > 2) {
  p__11951 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact__delegate.call(this,conn,tx_data,p__11951);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__11960){
var conn = cljs.core.first(arglist__11960);
arglist__11960 = cljs.core.next(arglist__11960);
var tx_data = cljs.core.first(arglist__11960);
var p__11951 = cljs.core.rest(arglist__11960);
return transact__delegate(conn,tx_data,p__11951);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){var res = cljs.core.atom.call(null,null);var realized = cljs.core.atom.call(null,false);setTimeout(((function (res,realized){
return (function (){cljs.core.reset_BANG_.call(null,res,f.call(null));
return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));
if(typeof datascript.t11964 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t11964 = (function (realized,res,f,future_call,meta11965){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta11965 = meta11965;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t11964.cljs$lang$type = true;
datascript.t11964.cljs$lang$ctorStr = "datascript/t11964";
datascript.t11964.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"datascript/t11964");
});})(res,realized))
;
datascript.t11964.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;
datascript.t11964.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){var self__ = this;
var ___$2 = this;if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized)))
{return cljs.core.deref.call(null,self__.res);
} else
{return timeout_val;
}
});})(res,realized))
;
datascript.t11964.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;
datascript.t11964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_11966){var self__ = this;
var _11966__$1 = this;return self__.meta11965;
});})(res,realized))
;
datascript.t11964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_11966,meta11965__$1){var self__ = this;
var _11966__$1 = this;return (new datascript.t11964(self__.realized,self__.res,self__.f,self__.future_call,meta11965__$1));
});})(res,realized))
;
datascript.__GT_t11964 = ((function (res,realized){
return (function __GT_t11964(realized__$1,res__$1,f__$1,future_call__$1,meta11965){return (new datascript.t11964(realized__$1,res__$1,f__$1,future_call__$1,meta11965));
});})(res,realized))
;
}
return (new datascript.t11964(realized,res,f,future_call,null));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__11967){var vec__11969 = p__11967;var tx_meta = cljs.core.nth.call(null,vec__11969,(0),null);return datascript.future_call.call(null,((function (vec__11969,tx_meta){
return (function (){return datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
});})(vec__11969,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__11967 = null;if (arguments.length > 2) {
  p__11967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return transact_async__delegate.call(this,conn,tx_data,p__11967);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__11970){
var conn = cljs.core.first(arglist__11970);
arglist__11970 = cljs.core.next(arglist__11970);
var tx_data = cljs.core.first(arglist__11970);
var p__11967 = cljs.core.rest(arglist__11970);
return transact_async__delegate(conn,tx_data,p__11967);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.squuid = (function squuid(){return (new cljs.core.UUID((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round.call(null,((new Date()).getTime() / (1000))).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.rand_bits.call(null,(16)).toString((16))))));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){return (parseInt(cljs.core.subs.call(null,uuid.uuid,(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datascript.js.map