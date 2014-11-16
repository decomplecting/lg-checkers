// Compiled by ClojureScript 0.0-2371
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){if(datascript.core.multival_QMARK_.call(null,db,a))
{if(datascript.core.ref_QMARK_.call(null,db,a))
{return cljs.core.reduce.call(null,(function (p1__19578_SHARP_,p2__19579_SHARP_){return cljs.core.conj.call(null,p1__19578_SHARP_,datascript.impl.entity.entity.call(null,db,p2__19579_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else
{return cljs.core.reduce.call(null,(function (p1__19580_SHARP_,p2__19581_SHARP_){return cljs.core.conj.call(null,p1__19580_SHARP_,p2__19581_SHARP_.v);
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
{var temp__4126__auto___19582 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));if(cljs.core.truth_(temp__4126__auto___19582))
{var datoms_19583 = temp__4126__auto___19582;e.touched = true;
e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_19583);
} else
{}
}
return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){var temp__4124__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datoms = temp__4124__auto__;return cljs.core.reduce.call(null,((function (datoms,temp__4124__auto__){
return (function (p1__19584_SHARP_,p2__19585_SHARP_){return cljs.core.conj.call(null,p1__19584_SHARP_,datascript.impl.entity.entity.call(null,db,p2__19585_SHARP_.e));
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
var iter__12234__auto__ = (function iter__19594(s__19595){return (new cljs.core.LazySeq(null,(function (){var s__19595__$1 = s__19595;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19595__$1);if(temp__4126__auto__)
{var s__19595__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19595__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__19595__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__19597 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__19596 = (0);while(true){
if((i__19596 < size__12233__auto__))
{var vec__19600 = cljs.core._nth.call(null,c__12232__auto__,i__19596);var a = cljs.core.nth.call(null,vec__19600,(0),null);var v = cljs.core.nth.call(null,vec__19600,(1),null);cljs.core.chunk_append.call(null,b__19597,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));
{
var G__19602 = (i__19596 + (1));
i__19596 = G__19602;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19597),iter__19594.call(null,cljs.core.chunk_rest.call(null,s__19595__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19597),null);
}
} else
{var vec__19601 = cljs.core.first.call(null,s__19595__$2);var a = cljs.core.nth.call(null,vec__19601,(0),null);var v = cljs.core.nth.call(null,vec__19601,(1),null);return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__19594.call(null,cljs.core.rest.call(null,s__19595__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__12234__auto__.call(null,e.cache);
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
datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"datascript.impl.entity/Entity");
});
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});
datascript.impl.entity.Entity.prototype.call = (function() {
var G__19618 = null;
var G__19618__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__19618__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__19618 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__19618__2.call(this,self__,k);
case 3:
return G__19618__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19618.cljs$core$IFn$_invoke$arity$2 = G__19618__2;
G__19618.cljs$core$IFn$_invoke$arity$3 = G__19618__3;
return G__19618;
})()
;
datascript.impl.entity.Entity.prototype.apply = (function (self__,args19603){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19603)));
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
{var or__11495__auto__ = self__.cache.call(null,attr);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
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
var G__19619 = null;
var G__19619__1 = (function (f){var self__ = this;
var this$ = this;var seq__19604 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));var chunk__19605 = null;var count__19606 = (0);var i__19607 = (0);while(true){
if((i__19607 < count__19606))
{var vec__19608 = cljs.core._nth.call(null,chunk__19605,i__19607);var a = cljs.core.nth.call(null,vec__19608,(0),null);var v = cljs.core.nth.call(null,vec__19608,(1),null);f.call(null,v,a,this$);
{
var G__19620 = seq__19604;
var G__19621 = chunk__19605;
var G__19622 = count__19606;
var G__19623 = (i__19607 + (1));
seq__19604 = G__19620;
chunk__19605 = G__19621;
count__19606 = G__19622;
i__19607 = G__19623;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19604);if(temp__4126__auto__)
{var seq__19604__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19604__$1))
{var c__12265__auto__ = cljs.core.chunk_first.call(null,seq__19604__$1);{
var G__19624 = cljs.core.chunk_rest.call(null,seq__19604__$1);
var G__19625 = c__12265__auto__;
var G__19626 = cljs.core.count.call(null,c__12265__auto__);
var G__19627 = (0);
seq__19604 = G__19624;
chunk__19605 = G__19625;
count__19606 = G__19626;
i__19607 = G__19627;
continue;
}
} else
{var vec__19609 = cljs.core.first.call(null,seq__19604__$1);var a = cljs.core.nth.call(null,vec__19609,(0),null);var v = cljs.core.nth.call(null,vec__19609,(1),null);f.call(null,v,a,this$);
{
var G__19628 = cljs.core.next.call(null,seq__19604__$1);
var G__19629 = null;
var G__19630 = (0);
var G__19631 = (0);
seq__19604 = G__19628;
chunk__19605 = G__19629;
count__19606 = G__19630;
i__19607 = G__19631;
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
var G__19619__2 = (function (f,use_as_this){var self__ = this;
var this$ = this;var seq__19610 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));var chunk__19611 = null;var count__19612 = (0);var i__19613 = (0);while(true){
if((i__19613 < count__19612))
{var vec__19614 = cljs.core._nth.call(null,chunk__19611,i__19613);var a = cljs.core.nth.call(null,vec__19614,(0),null);var v = cljs.core.nth.call(null,vec__19614,(1),null);f.call(use_as_this,v,a,this$);
{
var G__19632 = seq__19610;
var G__19633 = chunk__19611;
var G__19634 = count__19612;
var G__19635 = (i__19613 + (1));
seq__19610 = G__19632;
chunk__19611 = G__19633;
count__19612 = G__19634;
i__19613 = G__19635;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19610);if(temp__4126__auto__)
{var seq__19610__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19610__$1))
{var c__12265__auto__ = cljs.core.chunk_first.call(null,seq__19610__$1);{
var G__19636 = cljs.core.chunk_rest.call(null,seq__19610__$1);
var G__19637 = c__12265__auto__;
var G__19638 = cljs.core.count.call(null,c__12265__auto__);
var G__19639 = (0);
seq__19610 = G__19636;
chunk__19611 = G__19637;
count__19612 = G__19638;
i__19613 = G__19639;
continue;
}
} else
{var vec__19615 = cljs.core.first.call(null,seq__19610__$1);var a = cljs.core.nth.call(null,vec__19615,(0),null);var v = cljs.core.nth.call(null,vec__19615,(1),null);f.call(use_as_this,v,a,this$);
{
var G__19640 = cljs.core.next.call(null,seq__19610__$1);
var G__19641 = null;
var G__19642 = (0);
var G__19643 = (0);
seq__19610 = G__19640;
chunk__19611 = G__19641;
count__19612 = G__19642;
i__19613 = G__19643;
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
G__19619 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__19619__1.call(this,f);
case 2:
return G__19619__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19619.cljs$core$IFn$_invoke$arity$1 = G__19619__1;
G__19619.cljs$core$IFn$_invoke$arity$2 = G__19619__2;
return G__19619;
})()
;
datascript.impl.entity.Entity.prototype.get = (function (attr){var self__ = this;
var this$ = this;if(cljs.core._EQ_.call(null,attr,":db/id"))
{return self__.eid;
} else
{var temp__4124__auto__ = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr);if(cljs.core.truth_(temp__4124__auto__))
{var vec__19616 = temp__4124__auto__;var _ = cljs.core.nth.call(null,vec__19616,(0),null);var ns = cljs.core.nth.call(null,vec__19616,(1),null);var name = cljs.core.nth.call(null,vec__19616,(2),null);var attr__$1 = (cljs.core.truth_(ns)?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):name);return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else
{var G__19617 = this$.cljs$core$ILookup$_lookup$arity$2(null,attr);var G__19617__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__19617):G__19617);return G__19617__$1;
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