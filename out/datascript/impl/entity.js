// Compiled by ClojureScript 0.0-2371
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_.call(null,db,a))
{if(datascript.core.ref_QMARK_.call(null,db,a))
{return cljs.core.reduce.call(null,(function (p1__11541_SHARP_,p2__11542_SHARP_){return cljs.core.conj.call(null,p1__11541_SHARP_,datascript.impl.entity.entity.call(null,db,p2__11542_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.call(null,(function (p1__11543_SHARP_,p2__11544_SHARP_){return cljs.core.conj.call(null,p1__11543_SHARP_,p2__11544_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else
{if(datascript.core.ref_QMARK_.call(null,db,a))
{return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).v);
} else
{return cljs.core.first.call(null,datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){return cljs.core.reduce.call(null,(function (acc,part){var a = cljs.core.first.call(null,part).a;return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function touch(e){if(cljs.core.truth_(e.touched))
{} else
{var temp__4126__auto___11545 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___11545))
{var datoms_11546 = temp__4126__auto___11545;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_11546);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.call(null,((function (datoms,temp__4124__auto__){
return (function (p1__11547_SHARP_,p2__11548_SHARP_){return cljs.core.conj.call(null,p1__11547_SHARP_,datascript.impl.entity.entity.call(null,db,p2__11548_SHARP_.e));
});})(datoms,temp__4124__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){if(cljs.core.truth_(val))
{return cljs.core.to_array.call(null,val);
} else
{return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){datascript.impl.entity.touch.call(null,e);
var iter__4379__auto__ = (function iter__11557(s__11558){return (new cljs.core.LazySeq(null,(function (){var s__11558__$1 = s__11558;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11558__$1);if(temp__4126__auto__)
{var s__11558__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11558__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11558__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11560 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11559 = (0);while(true){
if((i__11559 < size__4378__auto__))
{var vec__11563 = cljs.core._nth.call(null,c__4377__auto__,i__11559);var a = cljs.core.nth.call(null,vec__11563,(0),null);var v = cljs.core.nth.call(null,vec__11563,(1),null);cljs.core.chunk_append.call(null,b__11560,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__11565 = (i__11559 + (1));
i__11559 = G__11565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11560),iter__11557.call(null,cljs.core.chunk_rest.call(null,s__11558__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11560),null);
}
} else
{var vec__11564 = cljs.core.first.call(null,s__11558__$2);var a = cljs.core.nth.call(null,vec__11564,(0),null);var v = cljs.core.nth.call(null,vec__11564,(1),null);return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__11557.call(null,cljs.core.rest.call(null,s__11558__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.cljs$lang$type = true;
datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__11581 = null;
var G__11581__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11581__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11581 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11581__2.call(this,self__,k);
case 3:
return G__11581__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11581.cljs$core$IFn$_invoke$arity$2 = G__11581__2;
G__11581.cljs$core$IFn$_invoke$arity$3 = G__11581__3;
return G__11581;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args11566){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11566)));
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),cljs.core._lookup.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,attr,null);
});
datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098)))
{return self__.eid;
} else
{var temp__4124__auto__ = datascript.core.reverse_ref.call(null,attr);if(cljs.core.truth_(temp__4124__auto__))
{var attr__$1 = temp__4124__auto__;return datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,not_found);
} else
{var or__3640__auto__ = self__.cache.call(null,attr);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.truth_(self__.touched))
{return not_found;
} else
{var temp__4124__auto____$1 = cljs.core.not_empty.call(null,datascript.core._search.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));if(cljs.core.truth_(temp__4124__auto____$1))
{var datoms = temp__4124__auto____$1;self__.cache = cljs.core.assoc.call(null,self__.cache,attr,datascript.impl.entity.entity_attr.call(null,self__.db,attr,datoms));
return self__.cache.call(null,attr);
} else
{return not_found;
}
}
}
}
}
});
datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch.call(null,this$__$1);
return cljs.core.count.call(null,self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;datascript.impl.entity.touch.call(null,this$__$1);
return cljs.core.seq.call(null,self__.cache);
});
datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,self__.eid);
});
datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,self__.eid,o.eid));
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});
datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__11582 = null;
var G__11582__1 = (function (f){var self__ = this;
var this$ = this;var seq__11567 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));var chunk__11568 = null;var count__11569 = (0);var i__11570 = (0);while(true){
if((i__11570 < count__11569))
{var vec__11571 = cljs.core._nth.call(null,chunk__11568,i__11570);var a = cljs.core.nth.call(null,vec__11571,(0),null);var v = cljs.core.nth.call(null,vec__11571,(1),null);f.call(null,v,a,this$);
{
var G__11583 = seq__11567;
var G__11584 = chunk__11568;
var G__11585 = count__11569;
var G__11586 = (i__11570 + (1));
seq__11567 = G__11583;
chunk__11568 = G__11584;
count__11569 = G__11585;
i__11570 = G__11586;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11567);if(temp__4126__auto__)
{var seq__11567__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11567__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11567__$1);{
var G__11587 = cljs.core.chunk_rest.call(null,seq__11567__$1);
var G__11588 = c__4410__auto__;
var G__11589 = cljs.core.count.call(null,c__4410__auto__);
var G__11590 = (0);
seq__11567 = G__11587;
chunk__11568 = G__11588;
count__11569 = G__11589;
i__11570 = G__11590;
continue;
}
} else
{var vec__11572 = cljs.core.first.call(null,seq__11567__$1);var a = cljs.core.nth.call(null,vec__11572,(0),null);var v = cljs.core.nth.call(null,vec__11572,(1),null);f.call(null,v,a,this$);
{
var G__11591 = cljs.core.next.call(null,seq__11567__$1);
var G__11592 = null;
var G__11593 = (0);
var G__11594 = (0);
seq__11567 = G__11591;
chunk__11568 = G__11592;
count__11569 = G__11593;
i__11570 = G__11594;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var G__11582__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__11573 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));var chunk__11574 = null;var count__11575 = (0);var i__11576 = (0);while(true){
if((i__11576 < count__11575))
{var vec__11577 = cljs.core._nth.call(null,chunk__11574,i__11576);var a = cljs.core.nth.call(null,vec__11577,(0),null);var v = cljs.core.nth.call(null,vec__11577,(1),null);f.call(use_as_this,v,a,this$);
{
var G__11595 = seq__11573;
var G__11596 = chunk__11574;
var G__11597 = count__11575;
var G__11598 = (i__11576 + (1));
seq__11573 = G__11595;
chunk__11574 = G__11596;
count__11575 = G__11597;
i__11576 = G__11598;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11573);if(temp__4126__auto__)
{var seq__11573__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11573__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11573__$1);{
var G__11599 = cljs.core.chunk_rest.call(null,seq__11573__$1);
var G__11600 = c__4410__auto__;
var G__11601 = cljs.core.count.call(null,c__4410__auto__);
var G__11602 = (0);
seq__11573 = G__11599;
chunk__11574 = G__11600;
count__11575 = G__11601;
i__11576 = G__11602;
continue;
}
} else
{var vec__11578 = cljs.core.first.call(null,seq__11573__$1);var a = cljs.core.nth.call(null,vec__11578,(0),null);var v = cljs.core.nth.call(null,vec__11578,(1),null);f.call(use_as_this,v,a,this$);
{
var G__11603 = cljs.core.next.call(null,seq__11573__$1);
var G__11604 = null;
var G__11605 = (0);
var G__11606 = (0);
seq__11573 = G__11603;
chunk__11574 = G__11604;
count__11575 = G__11605;
i__11576 = G__11606;
continue;
}
}
} else
{return null;
}
}
break;
}
});
G__11582 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__11582__1.call(this,f);
case 2:
return G__11582__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11582.cljs$core$IFn$_invoke$arity$1 = G__11582__1;
G__11582.cljs$core$IFn$_invoke$arity$2 = G__11582__2;
return G__11582;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.call(null,attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__11579 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__11579,(0),null);var ns = cljs.core.nth.call(null,vec__11579,(1),null);var name = cljs.core.nth.call(null,vec__11579,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else
{var G__11580 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__11580__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__11580):G__11580);return G__11580__$1;
}
}
});
datascript.impl.entity.Entity.prototype.key_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});
datascript.impl.entity.Entity.prototype.entries = (function (){var self__ = this;
var this$ = this;return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});
datascript.impl.entity.Entity.prototype.value_set = (function (){var self__ = this;
var this$ = this;return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});
datascript.impl.entity.Entity.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
datascript.impl.entity.Entity.prototype.keys = (function (){var self__ = this;
var this$ = this;return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});
datascript.impl.entity.Entity.prototype.values = (function (){var self__ = this;
var this$ = this;return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});
datascript.impl.entity.Entity.prototype.equiv = (function (other){var self__ = this;
var this$ = this;return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});
datascript.impl.entity.Entity.prototype.has = (function (attr){var self__ = this;
var this$ = this;return !((this$.get(attr) == null));
});
datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);
goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);
goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map