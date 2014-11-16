// Compiled by ClojureScript 0.0-2371
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.impl.entity');
goog.require('datascript.impl.entity');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('cljs.reader');

/**
* @constructor
* @param {*} rels
* @param {*} sources
* @param {*} rules
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12091__auto__,k__12092__auto__){var self__ = this;
var this__12091__auto____$1 = this;return cljs.core._lookup.call(null,this__12091__auto____$1,k__12092__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12093__auto__,k19803,else__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;var G__19805 = (((k19803 instanceof cljs.core.Keyword))?k19803.fqn:null);switch (G__19805) {
case "rules":
return self__.rules;

break;
case "sources":
return self__.sources;

break;
case "rels":
return self__.rels;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19803,else__12094__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12105__auto__,writer__12106__auto__,opts__12107__auto__){var self__ = this;
var this__12105__auto____$1 = this;var pr_pair__12108__auto__ = ((function (this__12105__auto____$1){
return (function (keyval__12109__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,cljs.core.pr_writer,""," ","",opts__12107__auto__,keyval__12109__auto__);
});})(this__12105__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,pr_pair__12108__auto__,"#datascript.query.Context{",", ","}",opts__12107__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12085__auto__){var self__ = this;
var this__12085__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12095__auto__){var self__ = this;
var this__12095__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12086__auto__){var self__ = this;
var this__12086__auto____$1 = this;var h__11906__auto__ = self__.__hash;if(!((h__11906__auto__ == null)))
{return h__11906__auto__;
} else
{var h__11906__auto____$1 = cljs.core.hash_imap.call(null,this__12086__auto____$1);self__.__hash = h__11906__auto____$1;
return h__11906__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12087__auto__,other__12088__auto__){var self__ = this;
var this__12087__auto____$1 = this;if(cljs.core.truth_((function (){var and__11483__auto__ = other__12088__auto__;if(cljs.core.truth_(and__11483__auto__))
{return ((this__12087__auto____$1.constructor === other__12088__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12087__auto____$1,other__12088__auto__));
} else
{return and__11483__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12100__auto__,k__12101__auto__){var self__ = this;
var this__12100__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__12101__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12100__auto____$1),self__.__meta),k__12101__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12101__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12098__auto__,k__12099__auto__,G__19802){var self__ = this;
var this__12098__auto____$1 = this;var pred__19806 = cljs.core.keyword_identical_QMARK_;var expr__19807 = k__12099__auto__;if(cljs.core.truth_(pred__19806.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__19807)))
{return (new datascript.query.Context(G__19802,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19806.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__19807)))
{return (new datascript.query.Context(self__.rels,G__19802,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19806.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__19807)))
{return (new datascript.query.Context(self__.rels,self__.sources,G__19802,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12099__auto__,G__19802),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12103__auto__){var self__ = this;
var this__12103__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12090__auto__,G__19802){var self__ = this;
var this__12090__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__19802,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12096__auto__,entry__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12097__auto__))
{return cljs.core._assoc.call(null,this__12096__auto____$1,cljs.core._nth.call(null,entry__12097__auto__,(0)),cljs.core._nth.call(null,entry__12097__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12096__auto____$1,entry__12097__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__12125__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__12125__auto__,writer__12126__auto__){return cljs.core._write.call(null,writer__12126__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__19804){return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__19804),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__19804),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__19804),null,cljs.core.dissoc.call(null,G__19804,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366))));
});

/**
* @constructor
* @param {*} attrs
* @param {*} tuples
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12091__auto__,k__12092__auto__){var self__ = this;
var this__12091__auto____$1 = this;return cljs.core._lookup.call(null,this__12091__auto____$1,k__12092__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12093__auto__,k19811,else__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;var G__19813 = (((k19811 instanceof cljs.core.Keyword))?k19811.fqn:null);switch (G__19813) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19811,else__12094__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12105__auto__,writer__12106__auto__,opts__12107__auto__){var self__ = this;
var this__12105__auto____$1 = this;var pr_pair__12108__auto__ = ((function (this__12105__auto____$1){
return (function (keyval__12109__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,cljs.core.pr_writer,""," ","",opts__12107__auto__,keyval__12109__auto__);
});})(this__12105__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12106__auto__,pr_pair__12108__auto__,"#datascript.query.Relation{",", ","}",opts__12107__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12089__auto__){var self__ = this;
var this__12089__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12085__auto__){var self__ = this;
var this__12085__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12095__auto__){var self__ = this;
var this__12095__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12086__auto__){var self__ = this;
var this__12086__auto____$1 = this;var h__11906__auto__ = self__.__hash;if(!((h__11906__auto__ == null)))
{return h__11906__auto__;
} else
{var h__11906__auto____$1 = cljs.core.hash_imap.call(null,this__12086__auto____$1);self__.__hash = h__11906__auto____$1;
return h__11906__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12087__auto__,other__12088__auto__){var self__ = this;
var this__12087__auto____$1 = this;if(cljs.core.truth_((function (){var and__11483__auto__ = other__12088__auto__;if(cljs.core.truth_(and__11483__auto__))
{return ((this__12087__auto____$1.constructor === other__12088__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12087__auto____$1,other__12088__auto__));
} else
{return and__11483__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12100__auto__,k__12101__auto__){var self__ = this;
var this__12100__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__12101__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12100__auto____$1),self__.__meta),k__12101__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12101__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12098__auto__,k__12099__auto__,G__19810){var self__ = this;
var this__12098__auto____$1 = this;var pred__19814 = cljs.core.keyword_identical_QMARK_;var expr__19815 = k__12099__auto__;if(cljs.core.truth_(pred__19814.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__19815)))
{return (new datascript.query.Relation(G__19810,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__19814.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__19815)))
{return (new datascript.query.Relation(self__.attrs,G__19810,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12099__auto__,G__19810),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12103__auto__){var self__ = this;
var this__12103__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12090__auto__,G__19810){var self__ = this;
var this__12090__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__19810,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12096__auto__,entry__12097__auto__){var self__ = this;
var this__12096__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12097__auto__))
{return cljs.core._assoc.call(null,this__12096__auto____$1,cljs.core._nth.call(null,entry__12097__auto__,(0)),cljs.core._nth.call(null,entry__12097__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12096__auto____$1,entry__12097__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__12125__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__12125__auto__,writer__12126__auto__){return cljs.core._write.call(null,writer__12126__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__19812){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__19812),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__19812),null,cljs.core.dissoc.call(null,G__19812,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639))));
});
datascript.query.intersect_keys = (function intersect_keys(attrs1,attrs2){return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
/**
* @param {...*} var_args
*/
datascript.query.concatv = (function() { 
var concatv__delegate = function (xs){return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,xs));
};
var concatv = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concatv__delegate.call(this,xs);};
concatv.cljs$lang$maxFixedArity = 0;
concatv.cljs$lang$applyTo = (function (arglist__19818){
var xs = cljs.core.seq(arglist__19818);
return concatv__delegate(xs);
});
concatv.cljs$core$IFn$_invoke$arity$variadic = concatv__delegate;
return concatv;
})()
;
datascript.query.source_QMARK_ = (function source_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.free_var_QMARK_ = (function free_var_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))) && (cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),sym));
});
datascript.query.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern))
{return cljs.core.sequential_QMARK_.call(null,form);
} else
{if(cljs.core.sequential_QMARK_.call(null,pattern))
{return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__19825){var vec__19826 = p__19825;var pattern_el = cljs.core.nth.call(null,vec__19826,(0),null);var form_el = cljs.core.nth.call(null,vec__19826,(1),null);return looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.call(null,form,pattern);
} else
{return pattern.call(null,form);

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__12365__auto___19827 = l1;var i_19828 = (0);while(true){
if((i_19828 < n__12365__auto___19827))
{(res[i_19828] = (t1[(idxs1[i_19828])]));
{
var G__19829 = (i_19828 + (1));
i_19828 = G__19829;
continue;
}
} else
{}
break;
}
var n__12365__auto___19830 = l2;var i_19831 = (0);while(true){
if((i_19831 < n__12365__auto___19830))
{(res[(l1 + i_19831)] = (t2[(idxs2[i_19831])]));
{
var G__19832 = (i_19831 + (1));
i_19831 = G__19832;
continue;
}
} else
{}
break;
}
return res;
});
datascript.query.sum_rel = (function sum_rel(a,b){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b))));
});
datascript.query.prod_rel = (function() {
var prod_rel = null;
var prod_rel__0 = (function (){return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[]], null)));
});
var prod_rel__2 = (function (rel1,rel2){var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),(function (){var iter__12234__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__19839(s__19840){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__19840__$1 = s__19840;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19840__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__19840__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__19841(s__19842){return (new cljs.core.LazySeq(null,((function (s__19840__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__19842__$1 = s__19842;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__19842__$1);if(temp__4126__auto____$1)
{var s__19842__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19842__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__19842__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__19844 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__19843 = (0);while(true){
if((i__19843 < size__12233__auto__))
{var t2 = cljs.core._nth.call(null,c__12232__auto__,i__19843);cljs.core.chunk_append.call(null,b__19844,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
{
var G__19845 = (i__19843 + (1));
i__19843 = G__19845;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19844),iter__19841.call(null,cljs.core.chunk_rest.call(null,s__19842__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19844),null);
}
} else
{var t2 = cljs.core.first.call(null,s__19842__$2);return cljs.core.cons.call(null,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2),iter__19841.call(null,cljs.core.rest.call(null,s__19842__$2)));
}
} else
{return null;
}
break;
}
});})(s__19840__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__19840__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__19839.call(null,cljs.core.rest.call(null,s__19840__$1)));
} else
{{
var G__19846 = cljs.core.rest.call(null,s__19840__$1);
s__19840__$1 = G__19846;
continue;
}
}
} else
{return null;
}
break;
}
});})(attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(attrs1,attrs2,idxs1,idxs2))
;return iter__12234__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
})()));
});
prod_rel = function(rel1,rel2){
switch(arguments.length){
case 0:
return prod_rel__0.call(this);
case 2:
return prod_rel__2.call(this,rel1,rel2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prod_rel.cljs$core$IFn$_invoke$arity$0 = prod_rel__0;
prod_rel.cljs$core$IFn$_invoke$arity$2 = prod_rel__2;
return prod_rel;
})()
;
/**
* @param {...*} var_args
*/
datascript.query._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count.call(null,xs);return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__19847){
var xs = cljs.core.seq(arglist__19847);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.query._get_else = (function _get_else(db,e,a,else_val){var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var datom = temp__4124__auto__;return datom.v;
} else
{return else_val;
}
});
/**
* @param {...*} var_args
*/
datascript.query._get_some = (function() { 
var _get_some__delegate = function (db,e,as){return cljs.core.reduce.call(null,(function (_,a){var temp__4126__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4126__auto__))
{var datom = temp__4126__auto__;return cljs.core.reduced.call(null,datom.v);
} else
{return null;
}
}),null,as);
};
var _get_some = function (db,e,var_args){
var as = null;if (arguments.length > 2) {
  as = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return _get_some__delegate.call(this,db,e,as);};
_get_some.cljs$lang$maxFixedArity = 2;
_get_some.cljs$lang$applyTo = (function (arglist__19848){
var db = cljs.core.first(arglist__19848);
arglist__19848 = cljs.core.next(arglist__19848);
var e = cljs.core.first(arglist__19848);
var as = cljs.core.rest(arglist__19848);
return _get_some__delegate(db,e,as);
});
_get_some.cljs$core$IFn$_invoke$arity$variadic = _get_some__delegate;
return _get_some;
})()
;
datascript.query._missing_QMARK_ = (function _missing_QMARK_(db,e,a){return (cljs.core.get.call(null,datascript.impl.entity.entity.call(null,db,e),a) == null);
});
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"get-else","get-else",1312024065,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"get-some","get-some",409442058,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"missing?","missing?",-1710383910,null),new cljs.core.Symbol(null,"ground","ground",-1460862835,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core._GT_,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",2085523049,null),(function() {
var G__19850 = null;
var G__19850__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.min,coll);
});
var G__19850__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x < cljs.core.last.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__19850 = function(n,coll){
switch(arguments.length){
case 1:
return G__19850__1.call(this,n);
case 2:
return G__19850__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19850.cljs$core$IFn$_invoke$arity$1 = G__19850__1;
G__19850.cljs$core$IFn$_invoke$arity$2 = G__19850__2;
return G__19850;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__19851 = null;
var G__19851__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.max,coll);
});
var G__19851__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x > cljs.core.first.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__19851 = function(n,coll){
switch(arguments.length){
case 1:
return G__19851__1.call(this,n);
case 2:
return G__19851__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19851.cljs$core$IFn$_invoke$arity$1 = G__19851__1;
G__19851.cljs$core$IFn$_invoke$arity$2 = G__19851__2;
return G__19851;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__19849_SHARP_){return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),p1__19849_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__19852 = null;
var G__19852__1 = (function (coll){return cljs.core.rand_nth.call(null,coll);
});
var G__19852__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_nth.call(null,coll);
})));
});
G__19852 = function(n,coll){
switch(arguments.length){
case 1:
return G__19852__1.call(this,n);
case 2:
return G__19852__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19852.cljs$core$IFn$_invoke$arity$1 = G__19852__1;
G__19852.cljs$core$IFn$_invoke$arity$2 = G__19852__2;
return G__19852;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__19860 = datascript.query.looks_like_QMARK_;var expr__19861 = form;if(cljs.core.truth_(pred__19860.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expr__19861)))
{return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (pred__19860,expr__19861){
return (function (p1__19853_SHARP_){return in__GT_rel.call(null,cljs.core.first.call(null,form),p1__19853_SHARP_);
});})(pred__19860,expr__19861))
,value));
} else
{if(cljs.core.truth_(pred__19860.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__19861)))
{return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (pred__19860,expr__19861){
return (function (p1__19854_SHARP_){return in__GT_rel.call(null,cljs.core.first.call(null,form),p1__19854_SHARP_);
});})(pred__19860,expr__19861))
,value));
} else
{if(cljs.core.truth_(pred__19860.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__19861)))
{return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (pred__19860,expr__19861){
return (function (p1__19855_SHARP_,p2__19856_SHARP_){return in__GT_rel.call(null,p1__19855_SHARP_,p2__19856_SHARP_);
});})(pred__19860,expr__19861))
,form,value));
} else
{if(cljs.core.truth_(pred__19860.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),expr__19861)))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19861))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__19863){var vec__19865 = p__19863;var in$ = cljs.core.nth.call(null,vec__19865,(0),null);var value = cljs.core.nth.call(null,vec__19865,(1),null);if(datascript.query.source_QMARK_.call(null,in$))
{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,in$,value);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),in$))
{return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else
{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datascript.query.in__GT_rel.call(null,in$,value));

}
}
});
datascript.query.parse_ins = (function parse_ins(context,ins,values){return cljs.core.reduce.call(null,datascript.query.parse_in,context,cljs.core.map.call(null,cljs.core.vector,ins,values));
});
datascript.query.tuple_key_fn = (function tuple_key_fn(idxs){if((cljs.core.count.call(null,idxs) === (1)))
{var idx = cljs.core.first.call(null,idxs);return ((function (idx){
return (function (tuple){return (tuple[idx]);
});
;})(idx))
} else
{var idxs__$1 = cljs.core.to_array.call(null,idxs);return ((function (idxs__$1){
return (function (tuple){return cljs.core.list_STAR_.call(null,idxs__$1.map(((function (idxs__$1){
return (function (p1__19866_SHARP_){return (tuple[p1__19866_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn.call(null,idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first.call(null,tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = key_fn.call(null,tuple);{
var G__19867 = cljs.core.next.call(null,tuples__$1);
var G__19868 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__19867;
hash_table = G__19868;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.call(null,attrs1,common_attrs);var common_idxs2 = cljs.core.map.call(null,attrs2,common_attrs);var keep_attrs1 = cljs.core.keys.call(null,attrs1);var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));var hash = datascript.query.hash_attrs.call(null,common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn.call(null,common_idxs2);var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = key_fn.call(null,tuple2);var temp__4124__auto__ = cljs.core.get.call(null,hash,key);if(cljs.core.truth_(temp__4124__auto__))
{var tuples1__$1 = temp__4124__auto__;return cljs.core.reduce.call(null,((function (tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc__$1,tuple1){return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,acc,tuples1__$1);
} else
{return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples));
});
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.call(null,(function (p1__19869_SHARP_){if((p1__19869_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__19869_SHARP_;
}
}),pattern);var datoms = datascript.core._search.call(null,db,search_pattern);var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__19872){var vec__19873 = p__19872;var s = cljs.core.nth.call(null,vec__19873,(0),null);var _ = cljs.core.nth.call(null,vec__19873,(1),null);return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__11483__auto__ = tuple__$1;if(cljs.core.truth_(and__11483__auto__))
{return pattern__$1;
} else
{return and__11483__auto__;
}
})()))
{var t = cljs.core.first.call(null,tuple__$1);var p = cljs.core.first.call(null,pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p)))
{{
var G__19874 = cljs.core.next.call(null,tuple__$1);
var G__19875 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__19874;
pattern__$1 = G__19875;
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.call(null,(function (p1__19876_SHARP_){return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__19876_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__19879){var vec__19880 = p__19879;var s = cljs.core.nth.call(null,vec__19880,(0),null);var _ = cljs.core.nth.call(null,vec__19880,(1),null);return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.call(null,cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__19882 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.call(null,vec__19882,(0),null);var pattern = cljs.core.nth.call(null,vec__19882,(1),null);var source = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else
{return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__19883 = cljs.core.next.call(null,rels__$1);
var G__19884 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__19885 = acc;
rels__$1 = G__19883;
new_rel__$1 = G__19884;
acc = G__19885;
continue;
}
} else
{{
var G__19886 = cljs.core.next.call(null,rels__$1);
var G__19887 = new_rel__$1;
var G__19888 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__19886;
new_rel__$1 = G__19887;
acc = G__19888;
continue;
}
}
} else
{return cljs.core.conj.call(null,acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19889_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__19889_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,attrs),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.call(null,(function (p1__19890_SHARP_){return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__19890_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__19891_SHARP_){return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__19891_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(context,rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.call(null,(function (p1__19892_SHARP_){if((p1__19892_SHARP_ instanceof cljs.core.Symbol))
{var or__11495__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),p1__19892_SHARP_);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return (tuple[cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__19892_SHARP_)]);
}
} else
{return p1__19892_SHARP_;
}
}),args);return cljs.core.apply.call(null,f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__19897 = clause;var vec__19898 = cljs.core.nth.call(null,vec__19897,(0),null);var f = cljs.core.nth.call(null,vec__19898,(0),null);var args = cljs.core.nthnext.call(null,vec__19898,(1));var pred = (function (){var or__11495__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();var vec__19899 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.call(null,vec__19899,(0),null);var production = cljs.core.nth.call(null,vec__19899,(1),null);var tuple_pred = datascript.query._call_fn.call(null,context__$1,production,pred,args);var new_rel = cljs.core.update_in.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (vec__19897,vec__19898,f,args,pred,vec__19899,context__$1,production,tuple_pred){
return (function (p1__19893_SHARP_){return cljs.core.filter.call(null,tuple_pred,p1__19893_SHARP_);
});})(vec__19897,vec__19898,f,args,pred,vec__19899,context__$1,production,tuple_pred))
);return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__19904 = clause;var vec__19905 = cljs.core.nth.call(null,vec__19904,(0),null);var f = cljs.core.nth.call(null,vec__19905,(0),null);var args = cljs.core.nthnext.call(null,vec__19905,(1));var out = cljs.core.nth.call(null,vec__19904,(1),null);var fun = (function (){var or__11495__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();var vec__19906 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.call(null,vec__19906,(0),null);var production = cljs.core.nth.call(null,vec__19906,(1),null);var tuple_fn = datascript.query._call_fn.call(null,context__$1,production,fun,args);var new_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (vec__19904,vec__19905,f,args,out,fun,vec__19906,context__$1,production,tuple_fn){
return (function (p1__19900_SHARP_){var val = tuple_fn.call(null,p1__19900_SHARP_);var rel = datascript.query.in__GT_rel.call(null,out,val);return datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19900_SHARP_], null))),rel);
});})(vec__19904,vec__19905,f,args,out,fun,vec__19906,context__$1,production,tuple_fn))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__19921 = clause;var rule = cljs.core.nth.call(null,vec__19921,(0),null);var call_args = cljs.core.nthnext.call(null,vec__19921,(1));var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);var iter__12234__auto__ = ((function (vec__19921,rule,call_args,seqid,branches){
return (function iter__19922(s__19923){return (new cljs.core.LazySeq(null,((function (vec__19921,rule,call_args,seqid,branches){
return (function (){var s__19923__$1 = s__19923;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19923__$1);if(temp__4126__auto__)
{var s__19923__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19923__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__19923__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__19925 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__19924 = (0);while(true){
if((i__19924 < size__12233__auto__))
{var branch = cljs.core._nth.call(null,c__12232__auto__,i__19924);var vec__19930 = branch;var vec__19931 = cljs.core.nth.call(null,vec__19930,(0),null);var _ = cljs.core.nth.call(null,vec__19931,(0),null);var rule_args = cljs.core.nthnext.call(null,vec__19931,(1));var clauses = cljs.core.nthnext.call(null,vec__19930,(1));var replacements = cljs.core.zipmap.call(null,rule_args,call_args);cljs.core.chunk_append.call(null,b__19925,clojure.walk.postwalk.call(null,((function (i__19924,vec__19930,vec__19931,_,rule_args,clauses,replacements,branch,c__12232__auto__,size__12233__auto__,b__19925,s__19923__$2,temp__4126__auto__,vec__19921,rule,call_args,seqid,branches){
return (function (p1__19907_SHARP_){if(datascript.query.free_var_QMARK_.call(null,p1__19907_SHARP_))
{var or__11495__auto__ = replacements.call(null,p1__19907_SHARP_);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.symbol.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__19907_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__19907_SHARP_;
}
});})(i__19924,vec__19930,vec__19931,_,rule_args,clauses,replacements,branch,c__12232__auto__,size__12233__auto__,b__19925,s__19923__$2,temp__4126__auto__,vec__19921,rule,call_args,seqid,branches))
,clauses));
{
var G__19934 = (i__19924 + (1));
i__19924 = G__19934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19925),iter__19922.call(null,cljs.core.chunk_rest.call(null,s__19923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19925),null);
}
} else
{var branch = cljs.core.first.call(null,s__19923__$2);var vec__19932 = branch;var vec__19933 = cljs.core.nth.call(null,vec__19932,(0),null);var _ = cljs.core.nth.call(null,vec__19933,(0),null);var rule_args = cljs.core.nthnext.call(null,vec__19933,(1));var clauses = cljs.core.nthnext.call(null,vec__19932,(1));var replacements = cljs.core.zipmap.call(null,rule_args,call_args);return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__19932,vec__19933,_,rule_args,clauses,replacements,branch,s__19923__$2,temp__4126__auto__,vec__19921,rule,call_args,seqid,branches){
return (function (p1__19907_SHARP_){if(datascript.query.free_var_QMARK_.call(null,p1__19907_SHARP_))
{var or__11495__auto__ = replacements.call(null,p1__19907_SHARP_);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.symbol.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__19907_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__19907_SHARP_;
}
});})(vec__19932,vec__19933,_,rule_args,clauses,replacements,branch,s__19923__$2,temp__4126__auto__,vec__19921,rule,call_args,seqid,branches))
,clauses),iter__19922.call(null,cljs.core.rest.call(null,s__19923__$2)));
}
} else
{return null;
}
break;
}
});})(vec__19921,rule,call_args,seqid,branches))
,null,null));
});})(vec__19921,rule,call_args,seqid,branches))
;return iter__12234__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.call(null,(function (p__19937){var vec__19938 = p__19937;var x = cljs.core.nth.call(null,vec__19938,(0),null);var y = cljs.core.nth.call(null,vec__19938,(1),null);return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__19948 = rule_clause;var rule = cljs.core.nth.call(null,vec__19948,(0),null);var call_args = cljs.core.nthnext.call(null,vec__19948,(1));var prev_call_args = cljs.core.get.call(null,used_args,rule);var iter__12234__auto__ = ((function (vec__19948,rule,call_args,prev_call_args){
return (function iter__19949(s__19950){return (new cljs.core.LazySeq(null,((function (vec__19948,rule,call_args,prev_call_args){
return (function (){var s__19950__$1 = s__19950;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19950__$1);if(temp__4126__auto__)
{var s__19950__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19950__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__19950__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__19952 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__19951 = (0);while(true){
if((i__19951 < size__12233__auto__))
{var prev_args = cljs.core._nth.call(null,c__12232__auto__,i__19951);var vec__19955 = datascript.query.remove_pairs.call(null,call_args,prev_args);var call_args__$1 = cljs.core.nth.call(null,vec__19955,(0),null);var prev_args__$1 = cljs.core.nth.call(null,vec__19955,(1),null);cljs.core.chunk_append.call(null,b__19952,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));
{
var G__19957 = (i__19951 + (1));
i__19951 = G__19957;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19952),iter__19949.call(null,cljs.core.chunk_rest.call(null,s__19950__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19952),null);
}
} else
{var prev_args = cljs.core.first.call(null,s__19950__$2);var vec__19956 = datascript.query.remove_pairs.call(null,call_args,prev_args);var call_args__$1 = cljs.core.nth.call(null,vec__19956,(0),null);var prev_args__$1 = cljs.core.nth.call(null,vec__19956,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),iter__19949.call(null,cljs.core.rest.call(null,s__19950__$2)));
}
} else
{return null;
}
break;
}
});})(vec__19948,rule,call_args,prev_call_args))
,null,null));
});})(vec__19948,rule,call_args,prev_call_args))
;return iter__12234__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);clojure.walk.postwalk.call(null,((function (res){
return (function (p1__19958_SHARP_){if(cljs.core.truth_(pred.call(null,p1__19958_SHARP_)))
{cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__19958_SHARP_);
} else
{}
return p1__19958_SHARP_;
});})(res))
,form);
return cljs.core.deref.call(null,res);
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set.call(null,datascript.query.walk_collect.call(null,clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__19962){var vec__19963 = p__19962;var vec__19964 = cljs.core.nth.call(null,vec__19963,(0),null);var _ = cljs.core.nth.call(null,vec__19964,(0),null);var vars = cljs.core.nthnext.call(null,vec__19964,(1));return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__19965_SHARP_){return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__19965_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first.call(null,stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__19976 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__19966_SHARP_){return !(datascript.query.rule_QMARK_.call(null,context,p1__19966_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.call(null,vec__19976,(0),null);var vec__19977 = cljs.core.nth.call(null,vec__19976,(1),null);var rule_clause = cljs.core.nth.call(null,vec__19977,(0),null);var next_clauses = cljs.core.nthnext.call(null,vec__19977,(1));if((rule_clause == null))
{var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = datascript.query._collect.call(null,context__$1,final_attrs);var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__19984 = cljs.core.next.call(null,stack);
var G__19985 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__19984;
rel = G__19985;
continue;
}
} else
{var vec__19978 = rule_clause;var rule = cljs.core.nth.call(null,vec__19978,(0),null);var call_args = cljs.core.nthnext.call(null,vec__19978,(1));var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__19979 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.call(null,vec__19979,(0),null);var pending_gs = cljs.core.nth.call(null,vec__19979,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__19978,rule,call_args,guards,vec__19979,active_gs,pending_gs,vec__19976,clauses,vec__19977,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__19967_SHARP_){return cljs.core._EQ_.call(null,p1__19967_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__19978,rule,call_args,guards,vec__19979,active_gs,pending_gs,vec__19976,clauses,vec__19977,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__19986 = cljs.core.next.call(null,stack);
var G__19987 = rel;
stack = G__19986;
rel = G__19987;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context)))
{{
var G__19988 = cljs.core.next.call(null,stack);
var G__19989 = rel;
stack = G__19988;
rel = G__19989;
continue;
}
} else
{var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);{
var G__19990 = cljs.core.concat.call(null,(function (){var iter__12234__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__19978,rule,call_args,guards,vec__19979,active_gs,pending_gs,vec__19976,clauses,vec__19977,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__19980(s__19981){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__19978,rule,call_args,guards,vec__19979,active_gs,pending_gs,vec__19976,clauses,vec__19977,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__19981__$1 = s__19981;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19981__$1);if(temp__4126__auto__)
{var s__19981__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19981__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__19981__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__19983 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__19982 = (0);while(true){
if((i__19982 < size__12233__auto__))
{var branch = cljs.core._nth.call(null,c__12232__auto__,i__19982);cljs.core.chunk_append.call(null,b__19983,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__19992 = (i__19982 + (1));
i__19982 = G__19992;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19983),iter__19980.call(null,cljs.core.chunk_rest.call(null,s__19981__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19983),null);
}
} else
{var branch = cljs.core.first.call(null,s__19981__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__19980.call(null,cljs.core.rest.call(null,s__19981__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__19978,rule,call_args,guards,vec__19979,active_gs,pending_gs,vec__19976,clauses,vec__19977,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__19978,rule,call_args,guards,vec__19979,active_gs,pending_gs,vec__19976,clauses,vec__19977,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__12234__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__19991 = rel;
stack = G__19990;
rel = G__19991;
continue;
}
}
}
}
} else
{return rel;
}
break;
}
});
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__19996 = datascript.query.looks_like_QMARK_;var expr__19997 = clause;if(cljs.core.truth_(pred__19996.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__19997)))
{return datascript.query.filter_by_pred.call(null,context,clause);
} else
{if(cljs.core.truth_(pred__19996.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__19997)))
{return datascript.query.bind_by_fn.call(null,context,clause);
} else
{if(cljs.core.truth_(pred__19996.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__19997)))
{var relation = datascript.query.lookup_pattern.call(null,context,clause);return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19997))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_.call(null,context,clause))
{var vec__20000 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.call(null,vec__20000,(0),null);var rule = cljs.core.nth.call(null,vec__20000,(1),null);var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var rel = datascript.query.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else
{return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function _q(context,clauses){return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function() {
var _collect = null;
var _collect__2 = (function (context,symbols){var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);return _collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Array(cljs.core.count.call(null,symbols)))], null),rels,symbols);
});
var _collect__3 = (function (acc,rels,symbols){while(true){
var temp__4124__auto__ = cljs.core.first.call(null,rels);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);if(cljs.core.empty_QMARK_.call(null,keep_attrs))
{{
var G__20014 = acc;
var G__20015 = cljs.core.next.call(null,rels);
var G__20016 = symbols;
acc = G__20014;
rels = G__20015;
symbols = G__20016;
continue;
}
} else
{var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__20001_SHARP_){return cljs.core.get.call(null,keep_attrs,p1__20001_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count.call(null,symbols);{
var G__20017 = (function (){var iter__12234__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__20008(s__20009){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__20009__$1 = s__20009;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20009__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__12230__auto__ = ((function (s__20009__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__20010(s__20011){return (new cljs.core.LazySeq(null,((function (s__20009__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__20011__$1 = s__20011;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__20011__$1);if(temp__4126__auto____$1)
{var s__20011__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__20011__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__20011__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__20013 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__20012 = (0);while(true){
if((i__20012 < size__12233__auto__))
{var t2 = cljs.core._nth.call(null,c__12232__auto__,i__20012);cljs.core.chunk_append.call(null,b__20013,(function (){var res = cljs.core.aclone.call(null,t1);var n__12365__auto___20020 = len;var i_20021 = (0);while(true){
if((i_20021 < n__12365__auto___20020))
{var temp__4126__auto___20022__$2 = (copy_map[i_20021]);if(cljs.core.truth_(temp__4126__auto___20022__$2))
{var idx_20023 = temp__4126__auto___20022__$2;(res[i_20021] = (t2[idx_20023]));
} else
{}
{
var G__20024 = (i_20021 + (1));
i_20021 = G__20024;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__20025 = (i__20012 + (1));
i__20012 = G__20025;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20013),iter__20010.call(null,cljs.core.chunk_rest.call(null,s__20011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20013),null);
}
} else
{var t2 = cljs.core.first.call(null,s__20011__$2);return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);var n__12365__auto___20026 = len;var i_20027 = (0);while(true){
if((i_20027 < n__12365__auto___20026))
{var temp__4126__auto___20028__$2 = (copy_map[i_20027]);if(cljs.core.truth_(temp__4126__auto___20028__$2))
{var idx_20029 = temp__4126__auto___20028__$2;(res[i_20027] = (t2[idx_20029]));
} else
{}
{
var G__20030 = (i_20027 + (1));
i_20027 = G__20030;
continue;
}
} else
{}
break;
}
return res;
})(),iter__20010.call(null,cljs.core.rest.call(null,s__20011__$2)));
}
} else
{return null;
}
break;
}
});})(s__20009__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__20009__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__12231__auto__ = cljs.core.seq.call(null,iterys__12230__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));if(fs__12231__auto__)
{return cljs.core.concat.call(null,fs__12231__auto__,iter__20008.call(null,cljs.core.rest.call(null,s__20009__$1)));
} else
{{
var G__20031 = cljs.core.rest.call(null,s__20009__$1);
s__20009__$1 = G__20031;
continue;
}
}
} else
{return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;return iter__12234__auto__.call(null,acc);
})();
var G__20018 = cljs.core.next.call(null,rels);
var G__20019 = symbols;
acc = G__20017;
rels = G__20018;
symbols = G__20019;
continue;
}
}
} else
{return acc;
}
break;
}
});
_collect = function(acc,rels,symbols){
switch(arguments.length){
case 2:
return _collect__2.call(this,acc,rels);
case 3:
return _collect__3.call(this,acc,rels,symbols);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_collect.cljs$core$IFn$_invoke$arity$2 = _collect__2;
_collect.cljs$core$IFn$_invoke$arity$3 = _collect__3;
return _collect;
})()
;
datascript.query.collect = (function collect(context,symbols){return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__20032_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__20032_SHARP_))
{return cljs.core.last.call(null,p1__20032_SHARP_);
} else
{return p1__20032_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.call(null,(function (form,fixed_value,i){if(cljs.core.sequential_QMARK_.call(null,form))
{var vec__20036 = form;var f = cljs.core.nth.call(null,vec__20036,(0),null);var args = cljs.core.nthnext.call(null,vec__20036,(1));var vals = cljs.core.map.call(null,((function (vec__20036,f,args){
return (function (p1__20033_SHARP_){return cljs.core.nth.call(null,p1__20033_SHARP_,i);
});})(vec__20036,f,args))
,tuples);var args__$1 = cljs.core.map.call(null,((function (vec__20036,f,args,vals){
return (function (p1__20034_SHARP_){if((p1__20034_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val.call(null,context,p1__20034_SHARP_);
} else
{return p1__20034_SHARP_;
}
});})(vec__20036,f,args,vals))
,cljs.core.butlast.call(null,args));var f__$1 = (function (){var or__11495__auto__ = datascript.query.built_in_aggregates.call(null,f);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();return cljs.core.apply.call(null,f__$1,cljs.core.concat.call(null,args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__20037_SHARP_,p2__20038_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__20037_SHARP_))
{return null;
} else
{return p2__20038_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.call(null)));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__20039_SHARP_){return cljs.core.nth.call(null,tuple,p1__20039_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by.call(null,group_fn,resultset);var iter__12234__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__20048(s__20049){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__20049__$1 = s__20049;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20049__$1);if(temp__4126__auto__)
{var s__20049__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__20049__$2))
{var c__12232__auto__ = cljs.core.chunk_first.call(null,s__20049__$2);var size__12233__auto__ = cljs.core.count.call(null,c__12232__auto__);var b__20051 = cljs.core.chunk_buffer.call(null,size__12233__auto__);if((function (){var i__20050 = (0);while(true){
if((i__20050 < size__12233__auto__))
{var vec__20054 = cljs.core._nth.call(null,c__12232__auto__,i__20050);var _ = cljs.core.nth.call(null,vec__20054,(0),null);var tuples = cljs.core.nth.call(null,vec__20054,(1),null);cljs.core.chunk_append.call(null,b__20051,datascript.query._aggregate.call(null,q,context,tuples));
{
var G__20056 = (i__20050 + (1));
i__20050 = G__20056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20051),iter__20048.call(null,cljs.core.chunk_rest.call(null,s__20049__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20051),null);
}
} else
{var vec__20055 = cljs.core.first.call(null,s__20049__$2);var _ = cljs.core.nth.call(null,vec__20055,(0),null);var tuples = cljs.core.nth.call(null,vec__20055,(1),null);return cljs.core.cons.call(null,datascript.query._aggregate.call(null,q,context,tuples),iter__20048.call(null,cljs.core.rest.call(null,s__20049__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__12234__auto__.call(null,grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__20057 = parsed;
var G__20058 = q;
var G__20059 = cljs.core.next.call(null,qs);
parsed = G__20057;
key = G__20058;
qs = G__20059;
continue;
}
} else
{{
var G__20060 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__20061 = key;
var G__20062 = cljs.core.next.call(null,qs);
parsed = G__20060;
key = G__20061;
qs = G__20062;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.query.q = (function() { 
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_.call(null,q__$1))?datascript.query.parse_query.call(null,q__$1):q__$1);var find = datascript.query.find_attrs.call(null,q__$2);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),find);var G__20065 = resultset;var G__20065__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.call(null,((function (G__20065,q__$2,find,ins,wheres,context,resultset){
return (function (p1__20063_SHARP_){return cljs.core.subvec.call(null,p1__20063_SHARP_,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__20065,q__$2,find,ins,wheres,context,resultset))
,G__20065):G__20065);var G__20065__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate.call(null,q__$2,context,G__20065__$1):G__20065__$1);return G__20065__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__20066){
var q__$1 = cljs.core.first(arglist__20066);
var inputs = cljs.core.rest(arglist__20066);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

//# sourceMappingURL=query.js.map