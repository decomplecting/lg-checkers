// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__23415,args){var map__23417 = p__23415;var map__23417__$1 = ((cljs.core.seq_QMARK_.call(null,map__23417))?cljs.core.apply.call(null,cljs.core.hash_map,map__23417):map__23417);var debug = cljs.core.get.call(null,map__23417__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__23415,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__23415,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__23418){
var p__23415 = cljs.core.first(arglist__23418);
var args = cljs.core.rest(arglist__23418);
return log__delegate(p__23415,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__23419){var map__23421 = p__23419;var map__23421__$1 = ((cljs.core.seq_QMARK_.call(null,map__23421))?cljs.core.apply.call(null,cljs.core.hash_map,map__23421):map__23421);var websocket_url = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__23422,callback){var map__23424 = p__23422;var map__23424__$1 = ((cljs.core.seq_QMARK_.call(null,map__23424))?cljs.core.apply.call(null,cljs.core.hash_map,map__23424):map__23424);var msg = map__23424__$1;var dependency_file = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__23424__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__11495__auto__ = dependency_file;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__23424,map__23424__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__23424,map__23424__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__23425,p__23426){var map__23429 = p__23425;var map__23429__$1 = ((cljs.core.seq_QMARK_.call(null,map__23429))?cljs.core.apply.call(null,cljs.core.hash_map,map__23429):map__23429);var opts = map__23429__$1;var url_rewriter = cljs.core.get.call(null,map__23429__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__23430 = p__23426;var map__23430__$1 = ((cljs.core.seq_QMARK_.call(null,map__23430))?cljs.core.apply.call(null,cljs.core.hash_map,map__23430):map__23430);var d = map__23430__$1;var file = cljs.core.get.call(null,map__23430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__23431,p__23432){var map__23474 = p__23431;var map__23474__$1 = ((cljs.core.seq_QMARK_.call(null,map__23474))?cljs.core.apply.call(null,cljs.core.hash_map,map__23474):map__23474);var opts = map__23474__$1;var on_jsload = cljs.core.get.call(null,map__23474__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__23474__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__23475 = p__23432;var map__23475__$1 = ((cljs.core.seq_QMARK_.call(null,map__23475))?cljs.core.apply.call(null,cljs.core.hash_map,map__23475):map__23475);var files = cljs.core.get.call(null,map__23475__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__,map__23474,map__23474__$1,opts,on_jsload,before_jsload,map__23475,map__23475__$1,files){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__,map__23474,map__23474__$1,opts,on_jsload,before_jsload,map__23475,map__23475__$1,files){
return (function (state_23498){var state_val_23499 = (state_23498[(1)]);if((state_val_23499 === (6)))
{var inst_23480 = (state_23498[(7)]);var inst_23489 = (state_23498[(2)]);var inst_23490 = cljs.core.PersistentVector.EMPTY_NODE;var inst_23491 = [inst_23480];var inst_23492 = (new cljs.core.PersistentVector(null,1,(5),inst_23490,inst_23491,null));var inst_23493 = cljs.core.apply.call(null,on_jsload,inst_23492);var state_23498__$1 = (function (){var statearr_23500 = state_23498;(statearr_23500[(8)] = inst_23489);
return statearr_23500;
})();var statearr_23501_23515 = state_23498__$1;(statearr_23501_23515[(2)] = inst_23493);
(statearr_23501_23515[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23499 === (5)))
{var inst_23496 = (state_23498[(2)]);var state_23498__$1 = state_23498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23498__$1,inst_23496);
} else
{if((state_val_23499 === (4)))
{var state_23498__$1 = state_23498;var statearr_23502_23516 = state_23498__$1;(statearr_23502_23516[(2)] = null);
(statearr_23502_23516[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23499 === (3)))
{var inst_23480 = (state_23498[(7)]);var inst_23483 = console.debug("Figwheel: loaded these files");var inst_23484 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23480);var inst_23485 = cljs.core.prn_str.call(null,inst_23484);var inst_23486 = console.log(inst_23485);var inst_23487 = cljs.core.async.timeout.call(null,(10));var state_23498__$1 = (function (){var statearr_23503 = state_23498;(statearr_23503[(9)] = inst_23483);
(statearr_23503[(10)] = inst_23486);
return statearr_23503;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23498__$1,(6),inst_23487);
} else
{if((state_val_23499 === (2)))
{var inst_23480 = (state_23498[(7)]);var inst_23480__$1 = (state_23498[(2)]);var inst_23481 = cljs.core.not_empty.call(null,inst_23480__$1);var state_23498__$1 = (function (){var statearr_23504 = state_23498;(statearr_23504[(7)] = inst_23480__$1);
return statearr_23504;
})();if(cljs.core.truth_(inst_23481))
{var statearr_23505_23517 = state_23498__$1;(statearr_23505_23517[(1)] = (3));
} else
{var statearr_23506_23518 = state_23498__$1;(statearr_23506_23518[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23499 === (1)))
{var inst_23476 = before_jsload.call(null,files);var inst_23477 = figwheel.client.add_request_urls.call(null,opts,files);var inst_23478 = figwheel.client.load_all_js_files.call(null,inst_23477);var state_23498__$1 = (function (){var statearr_23507 = state_23498;(statearr_23507[(11)] = inst_23476);
return statearr_23507;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23498__$1,(2),inst_23478);
} else
{return null;
}
}
}
}
}
}
});})(c__13373__auto__,map__23474,map__23474__$1,opts,on_jsload,before_jsload,map__23475,map__23475__$1,files))
;return ((function (switch__13358__auto__,c__13373__auto__,map__23474,map__23474__$1,opts,on_jsload,before_jsload,map__23475,map__23475__$1,files){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_23511 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23511[(0)] = state_machine__13359__auto__);
(statearr_23511[(1)] = (1));
return statearr_23511;
});
var state_machine__13359__auto____1 = (function (state_23498){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_23498);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e23512){if((e23512 instanceof Object))
{var ex__13362__auto__ = e23512;var statearr_23513_23519 = state_23498;(statearr_23513_23519[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23512;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23520 = state_23498;
state_23498 = G__23520;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_23498){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_23498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__,map__23474,map__23474__$1,opts,on_jsload,before_jsload,map__23475,map__23475__$1,files))
})();var state__13375__auto__ = (function (){var statearr_23514 = f__13374__auto__.call(null);(statearr_23514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_23514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__,map__23474,map__23474__$1,opts,on_jsload,before_jsload,map__23475,map__23475__$1,files))
);
return c__13373__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__23521,link_href){var map__23523 = p__23521;var map__23523__$1 = ((cljs.core.seq_QMARK_.call(null,map__23523))?cljs.core.apply.call(null,cljs.core.hash_map,map__23523):map__23523);var request_url = cljs.core.get.call(null,map__23523__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__,parent){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__,parent){
return (function (state_23544){var state_val_23545 = (state_23544[(1)]);if((state_val_23545 === (2)))
{var inst_23541 = (state_23544[(2)]);var inst_23542 = parent.removeChild(orig_link);var state_23544__$1 = (function (){var statearr_23546 = state_23544;(statearr_23546[(7)] = inst_23541);
return statearr_23546;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23544__$1,inst_23542);
} else
{if((state_val_23545 === (1)))
{var inst_23539 = cljs.core.async.timeout.call(null,(200));var state_23544__$1 = state_23544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23544__$1,(2),inst_23539);
} else
{return null;
}
}
});})(c__13373__auto__,parent))
;return ((function (switch__13358__auto__,c__13373__auto__,parent){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_23550 = [null,null,null,null,null,null,null,null];(statearr_23550[(0)] = state_machine__13359__auto__);
(statearr_23550[(1)] = (1));
return statearr_23550;
});
var state_machine__13359__auto____1 = (function (state_23544){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_23544);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e23551){if((e23551 instanceof Object))
{var ex__13362__auto__ = e23551;var statearr_23552_23554 = state_23544;(statearr_23552_23554[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23551;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23555 = state_23544;
state_23544 = G__23555;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_23544){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_23544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__,parent))
})();var state__13375__auto__ = (function (){var statearr_23553 = f__13374__auto__.call(null);(statearr_23553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_23553;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__,parent))
);
return c__13373__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__23556){var map__23558 = p__23556;var map__23558__$1 = ((cljs.core.seq_QMARK_.call(null,map__23558))?cljs.core.apply.call(null,cljs.core.hash_map,map__23558):map__23558);var f_data = map__23558__$1;var request_url = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__23558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__23559,files_msg){var map__23581 = p__23559;var map__23581__$1 = ((cljs.core.seq_QMARK_.call(null,map__23581))?cljs.core.apply.call(null,cljs.core.hash_map,map__23581):map__23581);var opts = map__23581__$1;var on_cssload = cljs.core.get.call(null,map__23581__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__23582_23602 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__23583_23603 = null;var count__23584_23604 = (0);var i__23585_23605 = (0);while(true){
if((i__23585_23605 < count__23584_23604))
{var f_23606 = cljs.core._nth.call(null,chunk__23583_23603,i__23585_23605);figwheel.client.reload_css_file.call(null,f_23606);
{
var G__23607 = seq__23582_23602;
var G__23608 = chunk__23583_23603;
var G__23609 = count__23584_23604;
var G__23610 = (i__23585_23605 + (1));
seq__23582_23602 = G__23607;
chunk__23583_23603 = G__23608;
count__23584_23604 = G__23609;
i__23585_23605 = G__23610;
continue;
}
} else
{var temp__4126__auto___23611 = cljs.core.seq.call(null,seq__23582_23602);if(temp__4126__auto___23611)
{var seq__23582_23612__$1 = temp__4126__auto___23611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23582_23612__$1))
{var c__12265__auto___23613 = cljs.core.chunk_first.call(null,seq__23582_23612__$1);{
var G__23614 = cljs.core.chunk_rest.call(null,seq__23582_23612__$1);
var G__23615 = c__12265__auto___23613;
var G__23616 = cljs.core.count.call(null,c__12265__auto___23613);
var G__23617 = (0);
seq__23582_23602 = G__23614;
chunk__23583_23603 = G__23615;
count__23584_23604 = G__23616;
i__23585_23605 = G__23617;
continue;
}
} else
{var f_23618 = cljs.core.first.call(null,seq__23582_23612__$1);figwheel.client.reload_css_file.call(null,f_23618);
{
var G__23619 = cljs.core.next.call(null,seq__23582_23612__$1);
var G__23620 = null;
var G__23621 = (0);
var G__23622 = (0);
seq__23582_23602 = G__23619;
chunk__23583_23603 = G__23620;
count__23584_23604 = G__23621;
i__23585_23605 = G__23622;
continue;
}
}
} else
{}
}
break;
}
var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__,map__23581,map__23581__$1,opts,on_cssload){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__,map__23581,map__23581__$1,opts,on_cssload){
return (function (state_23592){var state_val_23593 = (state_23592[(1)]);if((state_val_23593 === (2)))
{var inst_23588 = (state_23592[(2)]);var inst_23589 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_23590 = on_cssload.call(null,inst_23589);var state_23592__$1 = (function (){var statearr_23594 = state_23592;(statearr_23594[(7)] = inst_23588);
return statearr_23594;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23592__$1,inst_23590);
} else
{if((state_val_23593 === (1)))
{var inst_23586 = cljs.core.async.timeout.call(null,(100));var state_23592__$1 = state_23592;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23592__$1,(2),inst_23586);
} else
{return null;
}
}
});})(c__13373__auto__,map__23581,map__23581__$1,opts,on_cssload))
;return ((function (switch__13358__auto__,c__13373__auto__,map__23581,map__23581__$1,opts,on_cssload){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_23598 = [null,null,null,null,null,null,null,null];(statearr_23598[(0)] = state_machine__13359__auto__);
(statearr_23598[(1)] = (1));
return statearr_23598;
});
var state_machine__13359__auto____1 = (function (state_23592){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_23592);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e23599){if((e23599 instanceof Object))
{var ex__13362__auto__ = e23599;var statearr_23600_23623 = state_23592;(statearr_23600_23623[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23592);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23599;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23624 = state_23592;
state_23592 = G__23624;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_23592){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_23592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__,map__23581,map__23581__$1,opts,on_cssload))
})();var state__13375__auto__ = (function (){var statearr_23601 = f__13374__auto__.call(null);(statearr_23601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_23601;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__,map__23581,map__23581__$1,opts,on_cssload))
);
return c__13373__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__23625){var map__23630 = p__23625;var map__23630__$1 = ((cljs.core.seq_QMARK_.call(null,map__23630))?cljs.core.apply.call(null,cljs.core.hash_map,map__23630):map__23630);var opts = map__23630__$1;var on_compile_fail = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__23631 = cljs.core._EQ_;var expr__23632 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__23631.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__23632)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__23631.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__23632)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__23631.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23632)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__23630,map__23630__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj23637 = {"detail":url};return obj23637;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__23638){var map__23640 = p__23638;var map__23640__$1 = ((cljs.core.seq_QMARK_.call(null,map__23640))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);var class$ = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__23641){var map__23647 = p__23641;var map__23647__$1 = ((cljs.core.seq_QMARK_.call(null,map__23647))?cljs.core.apply.call(null,cljs.core.hash_map,map__23647):map__23647);var ed = map__23647__$1;var exception_data = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__23648_23652 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__23649_23653 = null;var count__23650_23654 = (0);var i__23651_23655 = (0);while(true){
if((i__23651_23655 < count__23650_23654))
{var msg_23656 = cljs.core._nth.call(null,chunk__23649_23653,i__23651_23655);console.log(msg_23656);
{
var G__23657 = seq__23648_23652;
var G__23658 = chunk__23649_23653;
var G__23659 = count__23650_23654;
var G__23660 = (i__23651_23655 + (1));
seq__23648_23652 = G__23657;
chunk__23649_23653 = G__23658;
count__23650_23654 = G__23659;
i__23651_23655 = G__23660;
continue;
}
} else
{var temp__4126__auto___23661 = cljs.core.seq.call(null,seq__23648_23652);if(temp__4126__auto___23661)
{var seq__23648_23662__$1 = temp__4126__auto___23661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23648_23662__$1))
{var c__12265__auto___23663 = cljs.core.chunk_first.call(null,seq__23648_23662__$1);{
var G__23664 = cljs.core.chunk_rest.call(null,seq__23648_23662__$1);
var G__23665 = c__12265__auto___23663;
var G__23666 = cljs.core.count.call(null,c__12265__auto___23663);
var G__23667 = (0);
seq__23648_23652 = G__23664;
chunk__23649_23653 = G__23665;
count__23650_23654 = G__23666;
i__23651_23655 = G__23667;
continue;
}
} else
{var msg_23668 = cljs.core.first.call(null,seq__23648_23662__$1);console.log(msg_23668);
{
var G__23669 = cljs.core.next.call(null,seq__23648_23662__$1);
var G__23670 = null;
var G__23671 = (0);
var G__23672 = (0);
seq__23648_23652 = G__23669;
chunk__23649_23653 = G__23670;
count__23650_23654 = G__23671;
i__23651_23655 = G__23672;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__11495__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__23673){var map__23675 = p__23673;var map__23675__$1 = ((cljs.core.seq_QMARK_.call(null,map__23675))?cljs.core.apply.call(null,cljs.core.hash_map,map__23675):map__23675);var opts = map__23675__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__23673 = null;if (arguments.length > 0) {
  p__23673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__23673);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__23676){
var p__23673 = cljs.core.seq(arglist__23676);
return watch_and_reload__delegate(p__23673);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map