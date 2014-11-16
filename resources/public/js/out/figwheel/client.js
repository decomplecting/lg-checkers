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
var log__delegate = function (p__16257,args){var map__16259 = p__16257;var map__16259__$1 = ((cljs.core.seq_QMARK_.call(null,map__16259))?cljs.core.apply.call(null,cljs.core.hash_map,map__16259):map__16259);var debug = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__16257,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__16257,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__16260){
var p__16257 = cljs.core.first(arglist__16260);
var args = cljs.core.rest(arglist__16260);
return log__delegate(p__16257,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__16261){var map__16263 = p__16261;var map__16263__$1 = ((cljs.core.seq_QMARK_.call(null,map__16263))?cljs.core.apply.call(null,cljs.core.hash_map,map__16263):map__16263);var websocket_url = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__16264,callback){var map__16266 = p__16264;var map__16266__$1 = ((cljs.core.seq_QMARK_.call(null,map__16266))?cljs.core.apply.call(null,cljs.core.hash_map,map__16266):map__16266);var msg = map__16266__$1;var dependency_file = cljs.core.get.call(null,map__16266__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__16266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__16266__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3640__auto__ = dependency_file;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16266,map__16266__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16266,map__16266__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__16267,p__16268){var map__16271 = p__16267;var map__16271__$1 = ((cljs.core.seq_QMARK_.call(null,map__16271))?cljs.core.apply.call(null,cljs.core.hash_map,map__16271):map__16271);var opts = map__16271__$1;var url_rewriter = cljs.core.get.call(null,map__16271__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__16272 = p__16268;var map__16272__$1 = ((cljs.core.seq_QMARK_.call(null,map__16272))?cljs.core.apply.call(null,cljs.core.hash_map,map__16272):map__16272);var d = map__16272__$1;var file = cljs.core.get.call(null,map__16272__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16273,p__16274){var map__16316 = p__16273;var map__16316__$1 = ((cljs.core.seq_QMARK_.call(null,map__16316))?cljs.core.apply.call(null,cljs.core.hash_map,map__16316):map__16316);var opts = map__16316__$1;var on_jsload = cljs.core.get.call(null,map__16316__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__16316__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__16317 = p__16274;var map__16317__$1 = ((cljs.core.seq_QMARK_.call(null,map__16317))?cljs.core.apply.call(null,cljs.core.hash_map,map__16317):map__16317);var files = cljs.core.get.call(null,map__16317__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__,map__16316,map__16316__$1,opts,on_jsload,before_jsload,map__16317,map__16317__$1,files){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__,map__16316,map__16316__$1,opts,on_jsload,before_jsload,map__16317,map__16317__$1,files){
return (function (state_16340){var state_val_16341 = (state_16340[(1)]);if((state_val_16341 === (6)))
{var inst_16322 = (state_16340[(7)]);var inst_16331 = (state_16340[(2)]);var inst_16332 = cljs.core.PersistentVector.EMPTY_NODE;var inst_16333 = [inst_16322];var inst_16334 = (new cljs.core.PersistentVector(null,1,(5),inst_16332,inst_16333,null));var inst_16335 = cljs.core.apply.call(null,on_jsload,inst_16334);var state_16340__$1 = (function (){var statearr_16342 = state_16340;(statearr_16342[(8)] = inst_16331);
return statearr_16342;
})();var statearr_16343_16357 = state_16340__$1;(statearr_16343_16357[(2)] = inst_16335);
(statearr_16343_16357[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16341 === (5)))
{var inst_16338 = (state_16340[(2)]);var state_16340__$1 = state_16340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16340__$1,inst_16338);
} else
{if((state_val_16341 === (4)))
{var state_16340__$1 = state_16340;var statearr_16344_16358 = state_16340__$1;(statearr_16344_16358[(2)] = null);
(statearr_16344_16358[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16341 === (3)))
{var inst_16322 = (state_16340[(7)]);var inst_16325 = console.debug("Figwheel: loaded these files");var inst_16326 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16322);var inst_16327 = cljs.core.prn_str.call(null,inst_16326);var inst_16328 = console.log(inst_16327);var inst_16329 = cljs.core.async.timeout.call(null,(10));var state_16340__$1 = (function (){var statearr_16345 = state_16340;(statearr_16345[(9)] = inst_16328);
(statearr_16345[(10)] = inst_16325);
return statearr_16345;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16340__$1,(6),inst_16329);
} else
{if((state_val_16341 === (2)))
{var inst_16322 = (state_16340[(7)]);var inst_16322__$1 = (state_16340[(2)]);var inst_16323 = cljs.core.not_empty.call(null,inst_16322__$1);var state_16340__$1 = (function (){var statearr_16346 = state_16340;(statearr_16346[(7)] = inst_16322__$1);
return statearr_16346;
})();if(cljs.core.truth_(inst_16323))
{var statearr_16347_16359 = state_16340__$1;(statearr_16347_16359[(1)] = (3));
} else
{var statearr_16348_16360 = state_16340__$1;(statearr_16348_16360[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16341 === (1)))
{var inst_16318 = before_jsload.call(null,files);var inst_16319 = figwheel.client.add_request_urls.call(null,opts,files);var inst_16320 = figwheel.client.load_all_js_files.call(null,inst_16319);var state_16340__$1 = (function (){var statearr_16349 = state_16340;(statearr_16349[(11)] = inst_16318);
return statearr_16349;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16340__$1,(2),inst_16320);
} else
{return null;
}
}
}
}
}
}
});})(c__5849__auto__,map__16316,map__16316__$1,opts,on_jsload,before_jsload,map__16317,map__16317__$1,files))
;return ((function (switch__5834__auto__,c__5849__auto__,map__16316,map__16316__$1,opts,on_jsload,before_jsload,map__16317,map__16317__$1,files){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_16353 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16353[(0)] = state_machine__5835__auto__);
(statearr_16353[(1)] = (1));
return statearr_16353;
});
var state_machine__5835__auto____1 = (function (state_16340){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_16340);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e16354){if((e16354 instanceof Object))
{var ex__5838__auto__ = e16354;var statearr_16355_16361 = state_16340;(statearr_16355_16361[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16362 = state_16340;
state_16340 = G__16362;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_16340){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_16340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__,map__16316,map__16316__$1,opts,on_jsload,before_jsload,map__16317,map__16317__$1,files))
})();var state__5851__auto__ = (function (){var statearr_16356 = f__5850__auto__.call(null);(statearr_16356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_16356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__,map__16316,map__16316__$1,opts,on_jsload,before_jsload,map__16317,map__16317__$1,files))
);
return c__5849__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16363,link_href){var map__16365 = p__16363;var map__16365__$1 = ((cljs.core.seq_QMARK_.call(null,map__16365))?cljs.core.apply.call(null,cljs.core.hash_map,map__16365):map__16365);var request_url = cljs.core.get.call(null,map__16365__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__16365__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__,parent){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__,parent){
return (function (state_16386){var state_val_16387 = (state_16386[(1)]);if((state_val_16387 === (2)))
{var inst_16383 = (state_16386[(2)]);var inst_16384 = parent.removeChild(orig_link);var state_16386__$1 = (function (){var statearr_16388 = state_16386;(statearr_16388[(7)] = inst_16383);
return statearr_16388;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16386__$1,inst_16384);
} else
{if((state_val_16387 === (1)))
{var inst_16381 = cljs.core.async.timeout.call(null,(200));var state_16386__$1 = state_16386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16386__$1,(2),inst_16381);
} else
{return null;
}
}
});})(c__5849__auto__,parent))
;return ((function (switch__5834__auto__,c__5849__auto__,parent){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_16392 = [null,null,null,null,null,null,null,null];(statearr_16392[(0)] = state_machine__5835__auto__);
(statearr_16392[(1)] = (1));
return statearr_16392;
});
var state_machine__5835__auto____1 = (function (state_16386){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_16386);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e16393){if((e16393 instanceof Object))
{var ex__5838__auto__ = e16393;var statearr_16394_16396 = state_16386;(statearr_16394_16396[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16393;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16397 = state_16386;
state_16386 = G__16397;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_16386){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_16386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__,parent))
})();var state__5851__auto__ = (function (){var statearr_16395 = f__5850__auto__.call(null);(statearr_16395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_16395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__,parent))
);
return c__5849__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__16398){var map__16400 = p__16398;var map__16400__$1 = ((cljs.core.seq_QMARK_.call(null,map__16400))?cljs.core.apply.call(null,cljs.core.hash_map,map__16400):map__16400);var f_data = map__16400__$1;var request_url = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16401,files_msg){var map__16423 = p__16401;var map__16423__$1 = ((cljs.core.seq_QMARK_.call(null,map__16423))?cljs.core.apply.call(null,cljs.core.hash_map,map__16423):map__16423);var opts = map__16423__$1;var on_cssload = cljs.core.get.call(null,map__16423__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__16424_16444 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__16425_16445 = null;var count__16426_16446 = (0);var i__16427_16447 = (0);while(true){
if((i__16427_16447 < count__16426_16446))
{var f_16448 = cljs.core._nth.call(null,chunk__16425_16445,i__16427_16447);figwheel.client.reload_css_file.call(null,f_16448);
{
var G__16449 = seq__16424_16444;
var G__16450 = chunk__16425_16445;
var G__16451 = count__16426_16446;
var G__16452 = (i__16427_16447 + (1));
seq__16424_16444 = G__16449;
chunk__16425_16445 = G__16450;
count__16426_16446 = G__16451;
i__16427_16447 = G__16452;
continue;
}
} else
{var temp__4126__auto___16453 = cljs.core.seq.call(null,seq__16424_16444);if(temp__4126__auto___16453)
{var seq__16424_16454__$1 = temp__4126__auto___16453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16424_16454__$1))
{var c__4410__auto___16455 = cljs.core.chunk_first.call(null,seq__16424_16454__$1);{
var G__16456 = cljs.core.chunk_rest.call(null,seq__16424_16454__$1);
var G__16457 = c__4410__auto___16455;
var G__16458 = cljs.core.count.call(null,c__4410__auto___16455);
var G__16459 = (0);
seq__16424_16444 = G__16456;
chunk__16425_16445 = G__16457;
count__16426_16446 = G__16458;
i__16427_16447 = G__16459;
continue;
}
} else
{var f_16460 = cljs.core.first.call(null,seq__16424_16454__$1);figwheel.client.reload_css_file.call(null,f_16460);
{
var G__16461 = cljs.core.next.call(null,seq__16424_16454__$1);
var G__16462 = null;
var G__16463 = (0);
var G__16464 = (0);
seq__16424_16444 = G__16461;
chunk__16425_16445 = G__16462;
count__16426_16446 = G__16463;
i__16427_16447 = G__16464;
continue;
}
}
} else
{}
}
break;
}
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__,map__16423,map__16423__$1,opts,on_cssload){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__,map__16423,map__16423__$1,opts,on_cssload){
return (function (state_16434){var state_val_16435 = (state_16434[(1)]);if((state_val_16435 === (2)))
{var inst_16430 = (state_16434[(2)]);var inst_16431 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_16432 = on_cssload.call(null,inst_16431);var state_16434__$1 = (function (){var statearr_16436 = state_16434;(statearr_16436[(7)] = inst_16430);
return statearr_16436;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16434__$1,inst_16432);
} else
{if((state_val_16435 === (1)))
{var inst_16428 = cljs.core.async.timeout.call(null,(100));var state_16434__$1 = state_16434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16434__$1,(2),inst_16428);
} else
{return null;
}
}
});})(c__5849__auto__,map__16423,map__16423__$1,opts,on_cssload))
;return ((function (switch__5834__auto__,c__5849__auto__,map__16423,map__16423__$1,opts,on_cssload){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_16440 = [null,null,null,null,null,null,null,null];(statearr_16440[(0)] = state_machine__5835__auto__);
(statearr_16440[(1)] = (1));
return statearr_16440;
});
var state_machine__5835__auto____1 = (function (state_16434){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_16434);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e16441){if((e16441 instanceof Object))
{var ex__5838__auto__ = e16441;var statearr_16442_16465 = state_16434;(statearr_16442_16465[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16441;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16466 = state_16434;
state_16434 = G__16466;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_16434){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_16434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__,map__16423,map__16423__$1,opts,on_cssload))
})();var state__5851__auto__ = (function (){var statearr_16443 = f__5850__auto__.call(null);(statearr_16443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_16443;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__,map__16423,map__16423__$1,opts,on_cssload))
);
return c__5849__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__16467){var map__16472 = p__16467;var map__16472__$1 = ((cljs.core.seq_QMARK_.call(null,map__16472))?cljs.core.apply.call(null,cljs.core.hash_map,map__16472):map__16472);var opts = map__16472__$1;var on_compile_fail = cljs.core.get.call(null,map__16472__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__16472__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__16472__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__16472__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__16473 = cljs.core._EQ_;var expr__16474 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__16473.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__16474)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16473.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__16474)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__16473.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16474)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__16472,map__16472__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16479 = {"detail":url};return obj16479;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16480){var map__16482 = p__16480;var map__16482__$1 = ((cljs.core.seq_QMARK_.call(null,map__16482))?cljs.core.apply.call(null,cljs.core.hash_map,map__16482):map__16482);var class$ = cljs.core.get.call(null,map__16482__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__16482__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__16483){var map__16489 = p__16483;var map__16489__$1 = ((cljs.core.seq_QMARK_.call(null,map__16489))?cljs.core.apply.call(null,cljs.core.hash_map,map__16489):map__16489);var ed = map__16489__$1;var exception_data = cljs.core.get.call(null,map__16489__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__16489__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__16490_16494 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__16491_16495 = null;var count__16492_16496 = (0);var i__16493_16497 = (0);while(true){
if((i__16493_16497 < count__16492_16496))
{var msg_16498 = cljs.core._nth.call(null,chunk__16491_16495,i__16493_16497);console.log(msg_16498);
{
var G__16499 = seq__16490_16494;
var G__16500 = chunk__16491_16495;
var G__16501 = count__16492_16496;
var G__16502 = (i__16493_16497 + (1));
seq__16490_16494 = G__16499;
chunk__16491_16495 = G__16500;
count__16492_16496 = G__16501;
i__16493_16497 = G__16502;
continue;
}
} else
{var temp__4126__auto___16503 = cljs.core.seq.call(null,seq__16490_16494);if(temp__4126__auto___16503)
{var seq__16490_16504__$1 = temp__4126__auto___16503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16490_16504__$1))
{var c__4410__auto___16505 = cljs.core.chunk_first.call(null,seq__16490_16504__$1);{
var G__16506 = cljs.core.chunk_rest.call(null,seq__16490_16504__$1);
var G__16507 = c__4410__auto___16505;
var G__16508 = cljs.core.count.call(null,c__4410__auto___16505);
var G__16509 = (0);
seq__16490_16494 = G__16506;
chunk__16491_16495 = G__16507;
count__16492_16496 = G__16508;
i__16493_16497 = G__16509;
continue;
}
} else
{var msg_16510 = cljs.core.first.call(null,seq__16490_16504__$1);console.log(msg_16510);
{
var G__16511 = cljs.core.next.call(null,seq__16490_16504__$1);
var G__16512 = null;
var G__16513 = (0);
var G__16514 = (0);
seq__16490_16494 = G__16511;
chunk__16491_16495 = G__16512;
count__16492_16496 = G__16513;
i__16493_16497 = G__16514;
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
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3640__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
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
var watch_and_reload__delegate = function (p__16515){var map__16517 = p__16515;var map__16517__$1 = ((cljs.core.seq_QMARK_.call(null,map__16517))?cljs.core.apply.call(null,cljs.core.hash_map,map__16517):map__16517);var opts = map__16517__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__16515 = null;if (arguments.length > 0) {
  p__16515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__16515);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__16518){
var p__16515 = cljs.core.seq(arglist__16518);
return watch_and_reload__delegate(p__16515);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map