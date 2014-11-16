// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20219 = (function (f,fn_handler,meta20220){
this.f = f;
this.fn_handler = fn_handler;
this.meta20220 = meta20220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20219.cljs$lang$type = true;
cljs.core.async.t20219.cljs$lang$ctorStr = "cljs.core.async/t20219";
cljs.core.async.t20219.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20219");
});
cljs.core.async.t20219.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20221){var self__ = this;
var _20221__$1 = this;return self__.meta20220;
});
cljs.core.async.t20219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20221,meta20220__$1){var self__ = this;
var _20221__$1 = this;return (new cljs.core.async.t20219(self__.f,self__.fn_handler,meta20220__$1));
});
cljs.core.async.__GT_t20219 = (function __GT_t20219(f__$1,fn_handler__$1,meta20220){return (new cljs.core.async.t20219(f__$1,fn_handler__$1,meta20220));
});
}
return (new cljs.core.async.t20219(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20223 = buff;if(G__20223)
{var bit__12159__auto__ = null;if(cljs.core.truth_((function (){var or__11495__auto__ = bit__12159__auto__;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return G__20223.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20223.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20223);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20223);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_20224 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_20224);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_20224,ret){
return (function (){return fn1.call(null,val_20224);
});})(val_20224,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__12365__auto___20225 = n;var x_20226 = (0);while(true){
if((x_20226 < n__12365__auto___20225))
{(a[x_20226] = (0));
{
var G__20227 = (x_20226 + (1));
x_20226 = G__20227;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__20228 = (i + (1));
i = G__20228;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t20232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20232 = (function (flag,alt_flag,meta20233){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20233 = meta20233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20232.cljs$lang$type = true;
cljs.core.async.t20232.cljs$lang$ctorStr = "cljs.core.async/t20232";
cljs.core.async.t20232.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20232");
});})(flag))
;
cljs.core.async.t20232.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t20232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t20232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20234){var self__ = this;
var _20234__$1 = this;return self__.meta20233;
});})(flag))
;
cljs.core.async.t20232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20234,meta20233__$1){var self__ = this;
var _20234__$1 = this;return (new cljs.core.async.t20232(self__.flag,self__.alt_flag,meta20233__$1));
});})(flag))
;
cljs.core.async.__GT_t20232 = ((function (flag){
return (function __GT_t20232(flag__$1,alt_flag__$1,meta20233){return (new cljs.core.async.t20232(flag__$1,alt_flag__$1,meta20233));
});})(flag))
;
}
return (new cljs.core.async.t20232(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20238 = (function (cb,flag,alt_handler,meta20239){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20239 = meta20239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20238.cljs$lang$type = true;
cljs.core.async.t20238.cljs$lang$ctorStr = "cljs.core.async/t20238";
cljs.core.async.t20238.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t20238");
});
cljs.core.async.t20238.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t20238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t20238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20240){var self__ = this;
var _20240__$1 = this;return self__.meta20239;
});
cljs.core.async.t20238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20240,meta20239__$1){var self__ = this;
var _20240__$1 = this;return (new cljs.core.async.t20238(self__.cb,self__.flag,self__.alt_handler,meta20239__$1));
});
cljs.core.async.__GT_t20238 = (function __GT_t20238(cb__$1,flag__$1,alt_handler__$1,meta20239){return (new cljs.core.async.t20238(cb__$1,flag__$1,alt_handler__$1,meta20239));
});
}
return (new cljs.core.async.t20238(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20241_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20241_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20242_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20242_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11495__auto__ = wport;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20243 = (i + (1));
i = G__20243;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__11495__auto__ = ret;if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__11483__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__11483__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__11483__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__20244){var map__20246 = p__20244;var map__20246__$1 = ((cljs.core.seq_QMARK_.call(null,map__20246))?cljs.core.apply.call(null,cljs.core.hash_map,map__20246):map__20246);var opts = map__20246__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20244 = null;if (arguments.length > 1) {
  p__20244 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20244);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20247){
var ports = cljs.core.first(arglist__20247);
var p__20244 = cljs.core.rest(arglist__20247);
return alts_BANG___delegate(ports,p__20244);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__13373__auto___20342 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___20342){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___20342){
return (function (state_20318){var state_val_20319 = (state_20318[(1)]);if((state_val_20319 === (7)))
{var inst_20314 = (state_20318[(2)]);var state_20318__$1 = state_20318;var statearr_20320_20343 = state_20318__$1;(statearr_20320_20343[(2)] = inst_20314);
(statearr_20320_20343[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (1)))
{var state_20318__$1 = state_20318;var statearr_20321_20344 = state_20318__$1;(statearr_20321_20344[(2)] = null);
(statearr_20321_20344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (4)))
{var inst_20297 = (state_20318[(7)]);var inst_20297__$1 = (state_20318[(2)]);var inst_20298 = (inst_20297__$1 == null);var state_20318__$1 = (function (){var statearr_20322 = state_20318;(statearr_20322[(7)] = inst_20297__$1);
return statearr_20322;
})();if(cljs.core.truth_(inst_20298))
{var statearr_20323_20345 = state_20318__$1;(statearr_20323_20345[(1)] = (5));
} else
{var statearr_20324_20346 = state_20318__$1;(statearr_20324_20346[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (13)))
{var state_20318__$1 = state_20318;var statearr_20325_20347 = state_20318__$1;(statearr_20325_20347[(2)] = null);
(statearr_20325_20347[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (6)))
{var inst_20297 = (state_20318[(7)]);var state_20318__$1 = state_20318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20318__$1,(11),to,inst_20297);
} else
{if((state_val_20319 === (3)))
{var inst_20316 = (state_20318[(2)]);var state_20318__$1 = state_20318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20318__$1,inst_20316);
} else
{if((state_val_20319 === (12)))
{var state_20318__$1 = state_20318;var statearr_20326_20348 = state_20318__$1;(statearr_20326_20348[(2)] = null);
(statearr_20326_20348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (2)))
{var state_20318__$1 = state_20318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20318__$1,(4),from);
} else
{if((state_val_20319 === (11)))
{var inst_20307 = (state_20318[(2)]);var state_20318__$1 = state_20318;if(cljs.core.truth_(inst_20307))
{var statearr_20327_20349 = state_20318__$1;(statearr_20327_20349[(1)] = (12));
} else
{var statearr_20328_20350 = state_20318__$1;(statearr_20328_20350[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (9)))
{var state_20318__$1 = state_20318;var statearr_20329_20351 = state_20318__$1;(statearr_20329_20351[(2)] = null);
(statearr_20329_20351[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (5)))
{var state_20318__$1 = state_20318;if(cljs.core.truth_(close_QMARK_))
{var statearr_20330_20352 = state_20318__$1;(statearr_20330_20352[(1)] = (8));
} else
{var statearr_20331_20353 = state_20318__$1;(statearr_20331_20353[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (14)))
{var inst_20312 = (state_20318[(2)]);var state_20318__$1 = state_20318;var statearr_20332_20354 = state_20318__$1;(statearr_20332_20354[(2)] = inst_20312);
(statearr_20332_20354[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (10)))
{var inst_20304 = (state_20318[(2)]);var state_20318__$1 = state_20318;var statearr_20333_20355 = state_20318__$1;(statearr_20333_20355[(2)] = inst_20304);
(statearr_20333_20355[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20319 === (8)))
{var inst_20301 = cljs.core.async.close_BANG_.call(null,to);var state_20318__$1 = state_20318;var statearr_20334_20356 = state_20318__$1;(statearr_20334_20356[(2)] = inst_20301);
(statearr_20334_20356[(1)] = (10));
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
});})(c__13373__auto___20342))
;return ((function (switch__13358__auto__,c__13373__auto___20342){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20338 = [null,null,null,null,null,null,null,null];(statearr_20338[(0)] = state_machine__13359__auto__);
(statearr_20338[(1)] = (1));
return statearr_20338;
});
var state_machine__13359__auto____1 = (function (state_20318){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20318);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20339){if((e20339 instanceof Object))
{var ex__13362__auto__ = e20339;var statearr_20340_20357 = state_20318;(statearr_20340_20357[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20339;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20358 = state_20318;
state_20318 = G__20358;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20318){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___20342))
})();var state__13375__auto__ = (function (){var statearr_20341 = f__13374__auto__.call(null);(statearr_20341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___20342);
return statearr_20341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___20342))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__20542){var vec__20543 = p__20542;var v = cljs.core.nth.call(null,vec__20543,(0),null);var p = cljs.core.nth.call(null,vec__20543,(1),null);var job = vec__20543;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__13373__auto___20725 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___20725,res,vec__20543,v,p,job,jobs,results){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___20725,res,vec__20543,v,p,job,jobs,results){
return (function (state_20548){var state_val_20549 = (state_20548[(1)]);if((state_val_20549 === (2)))
{var inst_20545 = (state_20548[(2)]);var inst_20546 = cljs.core.async.close_BANG_.call(null,res);var state_20548__$1 = (function (){var statearr_20550 = state_20548;(statearr_20550[(7)] = inst_20545);
return statearr_20550;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20548__$1,inst_20546);
} else
{if((state_val_20549 === (1)))
{var state_20548__$1 = state_20548;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20548__$1,(2),res,v);
} else
{return null;
}
}
});})(c__13373__auto___20725,res,vec__20543,v,p,job,jobs,results))
;return ((function (switch__13358__auto__,c__13373__auto___20725,res,vec__20543,v,p,job,jobs,results){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20554 = [null,null,null,null,null,null,null,null];(statearr_20554[(0)] = state_machine__13359__auto__);
(statearr_20554[(1)] = (1));
return statearr_20554;
});
var state_machine__13359__auto____1 = (function (state_20548){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20548);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20555){if((e20555 instanceof Object))
{var ex__13362__auto__ = e20555;var statearr_20556_20726 = state_20548;(statearr_20556_20726[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20548);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20727 = state_20548;
state_20548 = G__20727;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20548){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___20725,res,vec__20543,v,p,job,jobs,results))
})();var state__13375__auto__ = (function (){var statearr_20557 = f__13374__auto__.call(null);(statearr_20557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___20725);
return statearr_20557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___20725,res,vec__20543,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__20558){var vec__20559 = p__20558;var v = cljs.core.nth.call(null,vec__20559,(0),null);var p = cljs.core.nth.call(null,vec__20559,(1),null);var job = vec__20559;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__12365__auto___20728 = n;var __20729 = (0);while(true){
if((__20729 < n__12365__auto___20728))
{var G__20560_20730 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__20560_20730) {
case "async":
var c__13373__auto___20732 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__20729,c__13373__auto___20732,G__20560_20730,n__12365__auto___20728,jobs,results,process,async){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (__20729,c__13373__auto___20732,G__20560_20730,n__12365__auto___20728,jobs,results,process,async){
return (function (state_20573){var state_val_20574 = (state_20573[(1)]);if((state_val_20574 === (7)))
{var inst_20569 = (state_20573[(2)]);var state_20573__$1 = state_20573;var statearr_20575_20733 = state_20573__$1;(statearr_20575_20733[(2)] = inst_20569);
(statearr_20575_20733[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20574 === (6)))
{var state_20573__$1 = state_20573;var statearr_20576_20734 = state_20573__$1;(statearr_20576_20734[(2)] = null);
(statearr_20576_20734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20574 === (5)))
{var state_20573__$1 = state_20573;var statearr_20577_20735 = state_20573__$1;(statearr_20577_20735[(2)] = null);
(statearr_20577_20735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20574 === (4)))
{var inst_20563 = (state_20573[(2)]);var inst_20564 = async.call(null,inst_20563);var state_20573__$1 = state_20573;if(cljs.core.truth_(inst_20564))
{var statearr_20578_20736 = state_20573__$1;(statearr_20578_20736[(1)] = (5));
} else
{var statearr_20579_20737 = state_20573__$1;(statearr_20579_20737[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20574 === (3)))
{var inst_20571 = (state_20573[(2)]);var state_20573__$1 = state_20573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20573__$1,inst_20571);
} else
{if((state_val_20574 === (2)))
{var state_20573__$1 = state_20573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20573__$1,(4),jobs);
} else
{if((state_val_20574 === (1)))
{var state_20573__$1 = state_20573;var statearr_20580_20738 = state_20573__$1;(statearr_20580_20738[(2)] = null);
(statearr_20580_20738[(1)] = (2));
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
});})(__20729,c__13373__auto___20732,G__20560_20730,n__12365__auto___20728,jobs,results,process,async))
;return ((function (__20729,switch__13358__auto__,c__13373__auto___20732,G__20560_20730,n__12365__auto___20728,jobs,results,process,async){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20584 = [null,null,null,null,null,null,null];(statearr_20584[(0)] = state_machine__13359__auto__);
(statearr_20584[(1)] = (1));
return statearr_20584;
});
var state_machine__13359__auto____1 = (function (state_20573){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20573);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20585){if((e20585 instanceof Object))
{var ex__13362__auto__ = e20585;var statearr_20586_20739 = state_20573;(statearr_20586_20739[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20573);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20585;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20740 = state_20573;
state_20573 = G__20740;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20573){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(__20729,switch__13358__auto__,c__13373__auto___20732,G__20560_20730,n__12365__auto___20728,jobs,results,process,async))
})();var state__13375__auto__ = (function (){var statearr_20587 = f__13374__auto__.call(null);(statearr_20587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___20732);
return statearr_20587;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(__20729,c__13373__auto___20732,G__20560_20730,n__12365__auto___20728,jobs,results,process,async))
);

break;
case "compute":
var c__13373__auto___20741 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__20729,c__13373__auto___20741,G__20560_20730,n__12365__auto___20728,jobs,results,process,async){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (__20729,c__13373__auto___20741,G__20560_20730,n__12365__auto___20728,jobs,results,process,async){
return (function (state_20600){var state_val_20601 = (state_20600[(1)]);if((state_val_20601 === (7)))
{var inst_20596 = (state_20600[(2)]);var state_20600__$1 = state_20600;var statearr_20602_20742 = state_20600__$1;(statearr_20602_20742[(2)] = inst_20596);
(statearr_20602_20742[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20601 === (6)))
{var state_20600__$1 = state_20600;var statearr_20603_20743 = state_20600__$1;(statearr_20603_20743[(2)] = null);
(statearr_20603_20743[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20601 === (5)))
{var state_20600__$1 = state_20600;var statearr_20604_20744 = state_20600__$1;(statearr_20604_20744[(2)] = null);
(statearr_20604_20744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20601 === (4)))
{var inst_20590 = (state_20600[(2)]);var inst_20591 = process.call(null,inst_20590);var state_20600__$1 = state_20600;if(cljs.core.truth_(inst_20591))
{var statearr_20605_20745 = state_20600__$1;(statearr_20605_20745[(1)] = (5));
} else
{var statearr_20606_20746 = state_20600__$1;(statearr_20606_20746[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20601 === (3)))
{var inst_20598 = (state_20600[(2)]);var state_20600__$1 = state_20600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20600__$1,inst_20598);
} else
{if((state_val_20601 === (2)))
{var state_20600__$1 = state_20600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20600__$1,(4),jobs);
} else
{if((state_val_20601 === (1)))
{var state_20600__$1 = state_20600;var statearr_20607_20747 = state_20600__$1;(statearr_20607_20747[(2)] = null);
(statearr_20607_20747[(1)] = (2));
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
});})(__20729,c__13373__auto___20741,G__20560_20730,n__12365__auto___20728,jobs,results,process,async))
;return ((function (__20729,switch__13358__auto__,c__13373__auto___20741,G__20560_20730,n__12365__auto___20728,jobs,results,process,async){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20611 = [null,null,null,null,null,null,null];(statearr_20611[(0)] = state_machine__13359__auto__);
(statearr_20611[(1)] = (1));
return statearr_20611;
});
var state_machine__13359__auto____1 = (function (state_20600){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20600);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20612){if((e20612 instanceof Object))
{var ex__13362__auto__ = e20612;var statearr_20613_20748 = state_20600;(statearr_20613_20748[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20612;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20749 = state_20600;
state_20600 = G__20749;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20600){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(__20729,switch__13358__auto__,c__13373__auto___20741,G__20560_20730,n__12365__auto___20728,jobs,results,process,async))
})();var state__13375__auto__ = (function (){var statearr_20614 = f__13374__auto__.call(null);(statearr_20614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___20741);
return statearr_20614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(__20729,c__13373__auto___20741,G__20560_20730,n__12365__auto___20728,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__20750 = (__20729 + (1));
__20729 = G__20750;
continue;
}
} else
{}
break;
}
var c__13373__auto___20751 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___20751,jobs,results,process,async){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___20751,jobs,results,process,async){
return (function (state_20636){var state_val_20637 = (state_20636[(1)]);if((state_val_20637 === (9)))
{var inst_20629 = (state_20636[(2)]);var state_20636__$1 = (function (){var statearr_20638 = state_20636;(statearr_20638[(7)] = inst_20629);
return statearr_20638;
})();var statearr_20639_20752 = state_20636__$1;(statearr_20639_20752[(2)] = null);
(statearr_20639_20752[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20637 === (8)))
{var inst_20622 = (state_20636[(8)]);var inst_20627 = (state_20636[(2)]);var state_20636__$1 = (function (){var statearr_20640 = state_20636;(statearr_20640[(9)] = inst_20627);
return statearr_20640;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20636__$1,(9),results,inst_20622);
} else
{if((state_val_20637 === (7)))
{var inst_20632 = (state_20636[(2)]);var state_20636__$1 = state_20636;var statearr_20641_20753 = state_20636__$1;(statearr_20641_20753[(2)] = inst_20632);
(statearr_20641_20753[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20637 === (6)))
{var inst_20617 = (state_20636[(10)]);var inst_20622 = (state_20636[(8)]);var inst_20622__$1 = cljs.core.async.chan.call(null,(1));var inst_20623 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20624 = [inst_20617,inst_20622__$1];var inst_20625 = (new cljs.core.PersistentVector(null,2,(5),inst_20623,inst_20624,null));var state_20636__$1 = (function (){var statearr_20642 = state_20636;(statearr_20642[(8)] = inst_20622__$1);
return statearr_20642;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20636__$1,(8),jobs,inst_20625);
} else
{if((state_val_20637 === (5)))
{var inst_20620 = cljs.core.async.close_BANG_.call(null,jobs);var state_20636__$1 = state_20636;var statearr_20643_20754 = state_20636__$1;(statearr_20643_20754[(2)] = inst_20620);
(statearr_20643_20754[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20637 === (4)))
{var inst_20617 = (state_20636[(10)]);var inst_20617__$1 = (state_20636[(2)]);var inst_20618 = (inst_20617__$1 == null);var state_20636__$1 = (function (){var statearr_20644 = state_20636;(statearr_20644[(10)] = inst_20617__$1);
return statearr_20644;
})();if(cljs.core.truth_(inst_20618))
{var statearr_20645_20755 = state_20636__$1;(statearr_20645_20755[(1)] = (5));
} else
{var statearr_20646_20756 = state_20636__$1;(statearr_20646_20756[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20637 === (3)))
{var inst_20634 = (state_20636[(2)]);var state_20636__$1 = state_20636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20636__$1,inst_20634);
} else
{if((state_val_20637 === (2)))
{var state_20636__$1 = state_20636;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20636__$1,(4),from);
} else
{if((state_val_20637 === (1)))
{var state_20636__$1 = state_20636;var statearr_20647_20757 = state_20636__$1;(statearr_20647_20757[(2)] = null);
(statearr_20647_20757[(1)] = (2));
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
});})(c__13373__auto___20751,jobs,results,process,async))
;return ((function (switch__13358__auto__,c__13373__auto___20751,jobs,results,process,async){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20651 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20651[(0)] = state_machine__13359__auto__);
(statearr_20651[(1)] = (1));
return statearr_20651;
});
var state_machine__13359__auto____1 = (function (state_20636){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20636);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20652){if((e20652 instanceof Object))
{var ex__13362__auto__ = e20652;var statearr_20653_20758 = state_20636;(statearr_20653_20758[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20636);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20652;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20759 = state_20636;
state_20636 = G__20759;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20636){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___20751,jobs,results,process,async))
})();var state__13375__auto__ = (function (){var statearr_20654 = f__13374__auto__.call(null);(statearr_20654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___20751);
return statearr_20654;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___20751,jobs,results,process,async))
);
var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__,jobs,results,process,async){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__,jobs,results,process,async){
return (function (state_20692){var state_val_20693 = (state_20692[(1)]);if((state_val_20693 === (7)))
{var inst_20688 = (state_20692[(2)]);var state_20692__$1 = state_20692;var statearr_20694_20760 = state_20692__$1;(statearr_20694_20760[(2)] = inst_20688);
(statearr_20694_20760[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (20)))
{var state_20692__$1 = state_20692;var statearr_20695_20761 = state_20692__$1;(statearr_20695_20761[(2)] = null);
(statearr_20695_20761[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (1)))
{var state_20692__$1 = state_20692;var statearr_20696_20762 = state_20692__$1;(statearr_20696_20762[(2)] = null);
(statearr_20696_20762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (4)))
{var inst_20657 = (state_20692[(7)]);var inst_20657__$1 = (state_20692[(2)]);var inst_20658 = (inst_20657__$1 == null);var state_20692__$1 = (function (){var statearr_20697 = state_20692;(statearr_20697[(7)] = inst_20657__$1);
return statearr_20697;
})();if(cljs.core.truth_(inst_20658))
{var statearr_20698_20763 = state_20692__$1;(statearr_20698_20763[(1)] = (5));
} else
{var statearr_20699_20764 = state_20692__$1;(statearr_20699_20764[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (15)))
{var inst_20670 = (state_20692[(8)]);var state_20692__$1 = state_20692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20692__$1,(18),to,inst_20670);
} else
{if((state_val_20693 === (21)))
{var inst_20683 = (state_20692[(2)]);var state_20692__$1 = state_20692;var statearr_20700_20765 = state_20692__$1;(statearr_20700_20765[(2)] = inst_20683);
(statearr_20700_20765[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (13)))
{var inst_20685 = (state_20692[(2)]);var state_20692__$1 = (function (){var statearr_20701 = state_20692;(statearr_20701[(9)] = inst_20685);
return statearr_20701;
})();var statearr_20702_20766 = state_20692__$1;(statearr_20702_20766[(2)] = null);
(statearr_20702_20766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (6)))
{var inst_20657 = (state_20692[(7)]);var state_20692__$1 = state_20692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20692__$1,(11),inst_20657);
} else
{if((state_val_20693 === (17)))
{var inst_20678 = (state_20692[(2)]);var state_20692__$1 = state_20692;if(cljs.core.truth_(inst_20678))
{var statearr_20703_20767 = state_20692__$1;(statearr_20703_20767[(1)] = (19));
} else
{var statearr_20704_20768 = state_20692__$1;(statearr_20704_20768[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (3)))
{var inst_20690 = (state_20692[(2)]);var state_20692__$1 = state_20692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20692__$1,inst_20690);
} else
{if((state_val_20693 === (12)))
{var inst_20667 = (state_20692[(10)]);var state_20692__$1 = state_20692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20692__$1,(14),inst_20667);
} else
{if((state_val_20693 === (2)))
{var state_20692__$1 = state_20692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20692__$1,(4),results);
} else
{if((state_val_20693 === (19)))
{var state_20692__$1 = state_20692;var statearr_20705_20769 = state_20692__$1;(statearr_20705_20769[(2)] = null);
(statearr_20705_20769[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (11)))
{var inst_20667 = (state_20692[(2)]);var state_20692__$1 = (function (){var statearr_20706 = state_20692;(statearr_20706[(10)] = inst_20667);
return statearr_20706;
})();var statearr_20707_20770 = state_20692__$1;(statearr_20707_20770[(2)] = null);
(statearr_20707_20770[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (9)))
{var state_20692__$1 = state_20692;var statearr_20708_20771 = state_20692__$1;(statearr_20708_20771[(2)] = null);
(statearr_20708_20771[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (5)))
{var state_20692__$1 = state_20692;if(cljs.core.truth_(close_QMARK_))
{var statearr_20709_20772 = state_20692__$1;(statearr_20709_20772[(1)] = (8));
} else
{var statearr_20710_20773 = state_20692__$1;(statearr_20710_20773[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (14)))
{var inst_20670 = (state_20692[(8)]);var inst_20672 = (state_20692[(11)]);var inst_20670__$1 = (state_20692[(2)]);var inst_20671 = (inst_20670__$1 == null);var inst_20672__$1 = cljs.core.not.call(null,inst_20671);var state_20692__$1 = (function (){var statearr_20711 = state_20692;(statearr_20711[(8)] = inst_20670__$1);
(statearr_20711[(11)] = inst_20672__$1);
return statearr_20711;
})();if(inst_20672__$1)
{var statearr_20712_20774 = state_20692__$1;(statearr_20712_20774[(1)] = (15));
} else
{var statearr_20713_20775 = state_20692__$1;(statearr_20713_20775[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (16)))
{var inst_20672 = (state_20692[(11)]);var state_20692__$1 = state_20692;var statearr_20714_20776 = state_20692__$1;(statearr_20714_20776[(2)] = inst_20672);
(statearr_20714_20776[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (10)))
{var inst_20664 = (state_20692[(2)]);var state_20692__$1 = state_20692;var statearr_20715_20777 = state_20692__$1;(statearr_20715_20777[(2)] = inst_20664);
(statearr_20715_20777[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (18)))
{var inst_20675 = (state_20692[(2)]);var state_20692__$1 = state_20692;var statearr_20716_20778 = state_20692__$1;(statearr_20716_20778[(2)] = inst_20675);
(statearr_20716_20778[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20693 === (8)))
{var inst_20661 = cljs.core.async.close_BANG_.call(null,to);var state_20692__$1 = state_20692;var statearr_20717_20779 = state_20692__$1;(statearr_20717_20779[(2)] = inst_20661);
(statearr_20717_20779[(1)] = (10));
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
}
}
});})(c__13373__auto__,jobs,results,process,async))
;return ((function (switch__13358__auto__,c__13373__auto__,jobs,results,process,async){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20721 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20721[(0)] = state_machine__13359__auto__);
(statearr_20721[(1)] = (1));
return statearr_20721;
});
var state_machine__13359__auto____1 = (function (state_20692){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20692);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20722){if((e20722 instanceof Object))
{var ex__13362__auto__ = e20722;var statearr_20723_20780 = state_20692;(statearr_20723_20780[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20722;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20781 = state_20692;
state_20692 = G__20781;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20692){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__,jobs,results,process,async))
})();var state__13375__auto__ = (function (){var statearr_20724 = f__13374__auto__.call(null);(statearr_20724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_20724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__,jobs,results,process,async))
);
return c__13373__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13373__auto___20882 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___20882,tc,fc){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___20882,tc,fc){
return (function (state_20857){var state_val_20858 = (state_20857[(1)]);if((state_val_20858 === (7)))
{var inst_20853 = (state_20857[(2)]);var state_20857__$1 = state_20857;var statearr_20859_20883 = state_20857__$1;(statearr_20859_20883[(2)] = inst_20853);
(statearr_20859_20883[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (1)))
{var state_20857__$1 = state_20857;var statearr_20860_20884 = state_20857__$1;(statearr_20860_20884[(2)] = null);
(statearr_20860_20884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (4)))
{var inst_20834 = (state_20857[(7)]);var inst_20834__$1 = (state_20857[(2)]);var inst_20835 = (inst_20834__$1 == null);var state_20857__$1 = (function (){var statearr_20861 = state_20857;(statearr_20861[(7)] = inst_20834__$1);
return statearr_20861;
})();if(cljs.core.truth_(inst_20835))
{var statearr_20862_20885 = state_20857__$1;(statearr_20862_20885[(1)] = (5));
} else
{var statearr_20863_20886 = state_20857__$1;(statearr_20863_20886[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (13)))
{var state_20857__$1 = state_20857;var statearr_20864_20887 = state_20857__$1;(statearr_20864_20887[(2)] = null);
(statearr_20864_20887[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (6)))
{var inst_20834 = (state_20857[(7)]);var inst_20840 = p.call(null,inst_20834);var state_20857__$1 = state_20857;if(cljs.core.truth_(inst_20840))
{var statearr_20865_20888 = state_20857__$1;(statearr_20865_20888[(1)] = (9));
} else
{var statearr_20866_20889 = state_20857__$1;(statearr_20866_20889[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (3)))
{var inst_20855 = (state_20857[(2)]);var state_20857__$1 = state_20857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20857__$1,inst_20855);
} else
{if((state_val_20858 === (12)))
{var state_20857__$1 = state_20857;var statearr_20867_20890 = state_20857__$1;(statearr_20867_20890[(2)] = null);
(statearr_20867_20890[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (2)))
{var state_20857__$1 = state_20857;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20857__$1,(4),ch);
} else
{if((state_val_20858 === (11)))
{var inst_20834 = (state_20857[(7)]);var inst_20844 = (state_20857[(2)]);var state_20857__$1 = state_20857;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20857__$1,(8),inst_20844,inst_20834);
} else
{if((state_val_20858 === (9)))
{var state_20857__$1 = state_20857;var statearr_20868_20891 = state_20857__$1;(statearr_20868_20891[(2)] = tc);
(statearr_20868_20891[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (5)))
{var inst_20837 = cljs.core.async.close_BANG_.call(null,tc);var inst_20838 = cljs.core.async.close_BANG_.call(null,fc);var state_20857__$1 = (function (){var statearr_20869 = state_20857;(statearr_20869[(8)] = inst_20837);
return statearr_20869;
})();var statearr_20870_20892 = state_20857__$1;(statearr_20870_20892[(2)] = inst_20838);
(statearr_20870_20892[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (14)))
{var inst_20851 = (state_20857[(2)]);var state_20857__$1 = state_20857;var statearr_20871_20893 = state_20857__$1;(statearr_20871_20893[(2)] = inst_20851);
(statearr_20871_20893[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (10)))
{var state_20857__$1 = state_20857;var statearr_20872_20894 = state_20857__$1;(statearr_20872_20894[(2)] = fc);
(statearr_20872_20894[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20858 === (8)))
{var inst_20846 = (state_20857[(2)]);var state_20857__$1 = state_20857;if(cljs.core.truth_(inst_20846))
{var statearr_20873_20895 = state_20857__$1;(statearr_20873_20895[(1)] = (12));
} else
{var statearr_20874_20896 = state_20857__$1;(statearr_20874_20896[(1)] = (13));
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
});})(c__13373__auto___20882,tc,fc))
;return ((function (switch__13358__auto__,c__13373__auto___20882,tc,fc){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20878 = [null,null,null,null,null,null,null,null,null];(statearr_20878[(0)] = state_machine__13359__auto__);
(statearr_20878[(1)] = (1));
return statearr_20878;
});
var state_machine__13359__auto____1 = (function (state_20857){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20857);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20879){if((e20879 instanceof Object))
{var ex__13362__auto__ = e20879;var statearr_20880_20897 = state_20857;(statearr_20880_20897[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20879;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20898 = state_20857;
state_20857 = G__20898;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20857){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___20882,tc,fc))
})();var state__13375__auto__ = (function (){var statearr_20881 = f__13374__auto__.call(null);(statearr_20881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___20882);
return statearr_20881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___20882,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__){
return (function (state_20945){var state_val_20946 = (state_20945[(1)]);if((state_val_20946 === (7)))
{var inst_20941 = (state_20945[(2)]);var state_20945__$1 = state_20945;var statearr_20947_20963 = state_20945__$1;(statearr_20947_20963[(2)] = inst_20941);
(statearr_20947_20963[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (6)))
{var inst_20931 = (state_20945[(7)]);var inst_20934 = (state_20945[(8)]);var inst_20938 = f.call(null,inst_20931,inst_20934);var inst_20931__$1 = inst_20938;var state_20945__$1 = (function (){var statearr_20948 = state_20945;(statearr_20948[(7)] = inst_20931__$1);
return statearr_20948;
})();var statearr_20949_20964 = state_20945__$1;(statearr_20949_20964[(2)] = null);
(statearr_20949_20964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (5)))
{var inst_20931 = (state_20945[(7)]);var state_20945__$1 = state_20945;var statearr_20950_20965 = state_20945__$1;(statearr_20950_20965[(2)] = inst_20931);
(statearr_20950_20965[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (4)))
{var inst_20934 = (state_20945[(8)]);var inst_20934__$1 = (state_20945[(2)]);var inst_20935 = (inst_20934__$1 == null);var state_20945__$1 = (function (){var statearr_20951 = state_20945;(statearr_20951[(8)] = inst_20934__$1);
return statearr_20951;
})();if(cljs.core.truth_(inst_20935))
{var statearr_20952_20966 = state_20945__$1;(statearr_20952_20966[(1)] = (5));
} else
{var statearr_20953_20967 = state_20945__$1;(statearr_20953_20967[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20946 === (3)))
{var inst_20943 = (state_20945[(2)]);var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20945__$1,inst_20943);
} else
{if((state_val_20946 === (2)))
{var state_20945__$1 = state_20945;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20945__$1,(4),ch);
} else
{if((state_val_20946 === (1)))
{var inst_20931 = init;var state_20945__$1 = (function (){var statearr_20954 = state_20945;(statearr_20954[(7)] = inst_20931);
return statearr_20954;
})();var statearr_20955_20968 = state_20945__$1;(statearr_20955_20968[(2)] = null);
(statearr_20955_20968[(1)] = (2));
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
});})(c__13373__auto__))
;return ((function (switch__13358__auto__,c__13373__auto__){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_20959 = [null,null,null,null,null,null,null,null,null];(statearr_20959[(0)] = state_machine__13359__auto__);
(statearr_20959[(1)] = (1));
return statearr_20959;
});
var state_machine__13359__auto____1 = (function (state_20945){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_20945);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e20960){if((e20960 instanceof Object))
{var ex__13362__auto__ = e20960;var statearr_20961_20969 = state_20945;(statearr_20961_20969[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20945);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20960;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20970 = state_20945;
state_20945 = G__20970;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_20945){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_20945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__))
})();var state__13375__auto__ = (function (){var statearr_20962 = f__13374__auto__.call(null);(statearr_20962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_20962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__))
);
return c__13373__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__){
return (function (state_21044){var state_val_21045 = (state_21044[(1)]);if((state_val_21045 === (7)))
{var inst_21026 = (state_21044[(2)]);var state_21044__$1 = state_21044;var statearr_21046_21069 = state_21044__$1;(statearr_21046_21069[(2)] = inst_21026);
(statearr_21046_21069[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (1)))
{var inst_21020 = cljs.core.seq.call(null,coll);var inst_21021 = inst_21020;var state_21044__$1 = (function (){var statearr_21047 = state_21044;(statearr_21047[(7)] = inst_21021);
return statearr_21047;
})();var statearr_21048_21070 = state_21044__$1;(statearr_21048_21070[(2)] = null);
(statearr_21048_21070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (4)))
{var inst_21021 = (state_21044[(7)]);var inst_21024 = cljs.core.first.call(null,inst_21021);var state_21044__$1 = state_21044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21044__$1,(7),ch,inst_21024);
} else
{if((state_val_21045 === (13)))
{var inst_21038 = (state_21044[(2)]);var state_21044__$1 = state_21044;var statearr_21049_21071 = state_21044__$1;(statearr_21049_21071[(2)] = inst_21038);
(statearr_21049_21071[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (6)))
{var inst_21029 = (state_21044[(2)]);var state_21044__$1 = state_21044;if(cljs.core.truth_(inst_21029))
{var statearr_21050_21072 = state_21044__$1;(statearr_21050_21072[(1)] = (8));
} else
{var statearr_21051_21073 = state_21044__$1;(statearr_21051_21073[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (3)))
{var inst_21042 = (state_21044[(2)]);var state_21044__$1 = state_21044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21044__$1,inst_21042);
} else
{if((state_val_21045 === (12)))
{var state_21044__$1 = state_21044;var statearr_21052_21074 = state_21044__$1;(statearr_21052_21074[(2)] = null);
(statearr_21052_21074[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (2)))
{var inst_21021 = (state_21044[(7)]);var state_21044__$1 = state_21044;if(cljs.core.truth_(inst_21021))
{var statearr_21053_21075 = state_21044__$1;(statearr_21053_21075[(1)] = (4));
} else
{var statearr_21054_21076 = state_21044__$1;(statearr_21054_21076[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (11)))
{var inst_21035 = cljs.core.async.close_BANG_.call(null,ch);var state_21044__$1 = state_21044;var statearr_21055_21077 = state_21044__$1;(statearr_21055_21077[(2)] = inst_21035);
(statearr_21055_21077[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (9)))
{var state_21044__$1 = state_21044;if(cljs.core.truth_(close_QMARK_))
{var statearr_21056_21078 = state_21044__$1;(statearr_21056_21078[(1)] = (11));
} else
{var statearr_21057_21079 = state_21044__$1;(statearr_21057_21079[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (5)))
{var inst_21021 = (state_21044[(7)]);var state_21044__$1 = state_21044;var statearr_21058_21080 = state_21044__$1;(statearr_21058_21080[(2)] = inst_21021);
(statearr_21058_21080[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (10)))
{var inst_21040 = (state_21044[(2)]);var state_21044__$1 = state_21044;var statearr_21059_21081 = state_21044__$1;(statearr_21059_21081[(2)] = inst_21040);
(statearr_21059_21081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21045 === (8)))
{var inst_21021 = (state_21044[(7)]);var inst_21031 = cljs.core.next.call(null,inst_21021);var inst_21021__$1 = inst_21031;var state_21044__$1 = (function (){var statearr_21060 = state_21044;(statearr_21060[(7)] = inst_21021__$1);
return statearr_21060;
})();var statearr_21061_21082 = state_21044__$1;(statearr_21061_21082[(2)] = null);
(statearr_21061_21082[(1)] = (2));
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
var state_machine__13359__auto____0 = (function (){var statearr_21065 = [null,null,null,null,null,null,null,null];(statearr_21065[(0)] = state_machine__13359__auto__);
(statearr_21065[(1)] = (1));
return statearr_21065;
});
var state_machine__13359__auto____1 = (function (state_21044){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_21044);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e21066){if((e21066 instanceof Object))
{var ex__13362__auto__ = e21066;var statearr_21067_21083 = state_21044;(statearr_21067_21083[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21044);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21066;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21084 = state_21044;
state_21044 = G__21084;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_21044){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_21044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__))
})();var state__13375__auto__ = (function (){var statearr_21068 = f__13374__auto__.call(null);(statearr_21068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_21068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__))
);
return c__13373__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj21086 = {};return obj21086;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__11483__auto__ = _;if(and__11483__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__12132__auto__ = (((_ == null))?null:_);return (function (){var or__11495__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21088 = {};return obj21088;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21310 = (function (cs,ch,mult,meta21311){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21311 = meta21311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21310.cljs$lang$type = true;
cljs.core.async.t21310.cljs$lang$ctorStr = "cljs.core.async/t21310";
cljs.core.async.t21310.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21310");
});})(cs))
;
cljs.core.async.t21310.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21310.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21310.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21310.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21310.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21312){var self__ = this;
var _21312__$1 = this;return self__.meta21311;
});})(cs))
;
cljs.core.async.t21310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21312,meta21311__$1){var self__ = this;
var _21312__$1 = this;return (new cljs.core.async.t21310(self__.cs,self__.ch,self__.mult,meta21311__$1));
});})(cs))
;
cljs.core.async.__GT_t21310 = ((function (cs){
return (function __GT_t21310(cs__$1,ch__$1,mult__$1,meta21311){return (new cljs.core.async.t21310(cs__$1,ch__$1,mult__$1,meta21311));
});})(cs))
;
}
return (new cljs.core.async.t21310(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13373__auto___21531 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___21531,cs,m,dchan,dctr,done){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___21531,cs,m,dchan,dctr,done){
return (function (state_21443){var state_val_21444 = (state_21443[(1)]);if((state_val_21444 === (7)))
{var inst_21439 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21445_21532 = state_21443__$1;(statearr_21445_21532[(2)] = inst_21439);
(statearr_21445_21532[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (20)))
{var inst_21344 = (state_21443[(7)]);var inst_21354 = cljs.core.first.call(null,inst_21344);var inst_21355 = cljs.core.nth.call(null,inst_21354,(0),null);var inst_21356 = cljs.core.nth.call(null,inst_21354,(1),null);var state_21443__$1 = (function (){var statearr_21446 = state_21443;(statearr_21446[(8)] = inst_21355);
return statearr_21446;
})();if(cljs.core.truth_(inst_21356))
{var statearr_21447_21533 = state_21443__$1;(statearr_21447_21533[(1)] = (22));
} else
{var statearr_21448_21534 = state_21443__$1;(statearr_21448_21534[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (27)))
{var inst_21315 = (state_21443[(9)]);var inst_21386 = (state_21443[(10)]);var inst_21391 = (state_21443[(11)]);var inst_21384 = (state_21443[(12)]);var inst_21391__$1 = cljs.core._nth.call(null,inst_21384,inst_21386);var inst_21392 = cljs.core.async.put_BANG_.call(null,inst_21391__$1,inst_21315,done);var state_21443__$1 = (function (){var statearr_21449 = state_21443;(statearr_21449[(11)] = inst_21391__$1);
return statearr_21449;
})();if(cljs.core.truth_(inst_21392))
{var statearr_21450_21535 = state_21443__$1;(statearr_21450_21535[(1)] = (30));
} else
{var statearr_21451_21536 = state_21443__$1;(statearr_21451_21536[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (1)))
{var state_21443__$1 = state_21443;var statearr_21452_21537 = state_21443__$1;(statearr_21452_21537[(2)] = null);
(statearr_21452_21537[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (24)))
{var inst_21344 = (state_21443[(7)]);var inst_21361 = (state_21443[(2)]);var inst_21362 = cljs.core.next.call(null,inst_21344);var inst_21324 = inst_21362;var inst_21325 = null;var inst_21326 = (0);var inst_21327 = (0);var state_21443__$1 = (function (){var statearr_21453 = state_21443;(statearr_21453[(13)] = inst_21326);
(statearr_21453[(14)] = inst_21327);
(statearr_21453[(15)] = inst_21325);
(statearr_21453[(16)] = inst_21324);
(statearr_21453[(17)] = inst_21361);
return statearr_21453;
})();var statearr_21454_21538 = state_21443__$1;(statearr_21454_21538[(2)] = null);
(statearr_21454_21538[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (39)))
{var state_21443__$1 = state_21443;var statearr_21458_21539 = state_21443__$1;(statearr_21458_21539[(2)] = null);
(statearr_21458_21539[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (4)))
{var inst_21315 = (state_21443[(9)]);var inst_21315__$1 = (state_21443[(2)]);var inst_21316 = (inst_21315__$1 == null);var state_21443__$1 = (function (){var statearr_21459 = state_21443;(statearr_21459[(9)] = inst_21315__$1);
return statearr_21459;
})();if(cljs.core.truth_(inst_21316))
{var statearr_21460_21540 = state_21443__$1;(statearr_21460_21540[(1)] = (5));
} else
{var statearr_21461_21541 = state_21443__$1;(statearr_21461_21541[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (15)))
{var inst_21326 = (state_21443[(13)]);var inst_21327 = (state_21443[(14)]);var inst_21325 = (state_21443[(15)]);var inst_21324 = (state_21443[(16)]);var inst_21340 = (state_21443[(2)]);var inst_21341 = (inst_21327 + (1));var tmp21455 = inst_21326;var tmp21456 = inst_21325;var tmp21457 = inst_21324;var inst_21324__$1 = tmp21457;var inst_21325__$1 = tmp21456;var inst_21326__$1 = tmp21455;var inst_21327__$1 = inst_21341;var state_21443__$1 = (function (){var statearr_21462 = state_21443;(statearr_21462[(13)] = inst_21326__$1);
(statearr_21462[(14)] = inst_21327__$1);
(statearr_21462[(15)] = inst_21325__$1);
(statearr_21462[(16)] = inst_21324__$1);
(statearr_21462[(18)] = inst_21340);
return statearr_21462;
})();var statearr_21463_21542 = state_21443__$1;(statearr_21463_21542[(2)] = null);
(statearr_21463_21542[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (21)))
{var inst_21365 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21467_21543 = state_21443__$1;(statearr_21467_21543[(2)] = inst_21365);
(statearr_21467_21543[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (31)))
{var inst_21391 = (state_21443[(11)]);var inst_21395 = done.call(null,null);var inst_21396 = cljs.core.async.untap_STAR_.call(null,m,inst_21391);var state_21443__$1 = (function (){var statearr_21468 = state_21443;(statearr_21468[(19)] = inst_21395);
return statearr_21468;
})();var statearr_21469_21544 = state_21443__$1;(statearr_21469_21544[(2)] = inst_21396);
(statearr_21469_21544[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (32)))
{var inst_21386 = (state_21443[(10)]);var inst_21385 = (state_21443[(20)]);var inst_21383 = (state_21443[(21)]);var inst_21384 = (state_21443[(12)]);var inst_21398 = (state_21443[(2)]);var inst_21399 = (inst_21386 + (1));var tmp21464 = inst_21385;var tmp21465 = inst_21383;var tmp21466 = inst_21384;var inst_21383__$1 = tmp21465;var inst_21384__$1 = tmp21466;var inst_21385__$1 = tmp21464;var inst_21386__$1 = inst_21399;var state_21443__$1 = (function (){var statearr_21470 = state_21443;(statearr_21470[(22)] = inst_21398);
(statearr_21470[(10)] = inst_21386__$1);
(statearr_21470[(20)] = inst_21385__$1);
(statearr_21470[(21)] = inst_21383__$1);
(statearr_21470[(12)] = inst_21384__$1);
return statearr_21470;
})();var statearr_21471_21545 = state_21443__$1;(statearr_21471_21545[(2)] = null);
(statearr_21471_21545[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (40)))
{var inst_21411 = (state_21443[(23)]);var inst_21415 = done.call(null,null);var inst_21416 = cljs.core.async.untap_STAR_.call(null,m,inst_21411);var state_21443__$1 = (function (){var statearr_21472 = state_21443;(statearr_21472[(24)] = inst_21415);
return statearr_21472;
})();var statearr_21473_21546 = state_21443__$1;(statearr_21473_21546[(2)] = inst_21416);
(statearr_21473_21546[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (33)))
{var inst_21402 = (state_21443[(25)]);var inst_21404 = cljs.core.chunked_seq_QMARK_.call(null,inst_21402);var state_21443__$1 = state_21443;if(inst_21404)
{var statearr_21474_21547 = state_21443__$1;(statearr_21474_21547[(1)] = (36));
} else
{var statearr_21475_21548 = state_21443__$1;(statearr_21475_21548[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (13)))
{var inst_21334 = (state_21443[(26)]);var inst_21337 = cljs.core.async.close_BANG_.call(null,inst_21334);var state_21443__$1 = state_21443;var statearr_21476_21549 = state_21443__$1;(statearr_21476_21549[(2)] = inst_21337);
(statearr_21476_21549[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (22)))
{var inst_21355 = (state_21443[(8)]);var inst_21358 = cljs.core.async.close_BANG_.call(null,inst_21355);var state_21443__$1 = state_21443;var statearr_21477_21550 = state_21443__$1;(statearr_21477_21550[(2)] = inst_21358);
(statearr_21477_21550[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (36)))
{var inst_21402 = (state_21443[(25)]);var inst_21406 = cljs.core.chunk_first.call(null,inst_21402);var inst_21407 = cljs.core.chunk_rest.call(null,inst_21402);var inst_21408 = cljs.core.count.call(null,inst_21406);var inst_21383 = inst_21407;var inst_21384 = inst_21406;var inst_21385 = inst_21408;var inst_21386 = (0);var state_21443__$1 = (function (){var statearr_21478 = state_21443;(statearr_21478[(10)] = inst_21386);
(statearr_21478[(20)] = inst_21385);
(statearr_21478[(21)] = inst_21383);
(statearr_21478[(12)] = inst_21384);
return statearr_21478;
})();var statearr_21479_21551 = state_21443__$1;(statearr_21479_21551[(2)] = null);
(statearr_21479_21551[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (41)))
{var inst_21402 = (state_21443[(25)]);var inst_21418 = (state_21443[(2)]);var inst_21419 = cljs.core.next.call(null,inst_21402);var inst_21383 = inst_21419;var inst_21384 = null;var inst_21385 = (0);var inst_21386 = (0);var state_21443__$1 = (function (){var statearr_21480 = state_21443;(statearr_21480[(27)] = inst_21418);
(statearr_21480[(10)] = inst_21386);
(statearr_21480[(20)] = inst_21385);
(statearr_21480[(21)] = inst_21383);
(statearr_21480[(12)] = inst_21384);
return statearr_21480;
})();var statearr_21481_21552 = state_21443__$1;(statearr_21481_21552[(2)] = null);
(statearr_21481_21552[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (43)))
{var state_21443__$1 = state_21443;var statearr_21482_21553 = state_21443__$1;(statearr_21482_21553[(2)] = null);
(statearr_21482_21553[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (29)))
{var inst_21427 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21483_21554 = state_21443__$1;(statearr_21483_21554[(2)] = inst_21427);
(statearr_21483_21554[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (44)))
{var inst_21436 = (state_21443[(2)]);var state_21443__$1 = (function (){var statearr_21484 = state_21443;(statearr_21484[(28)] = inst_21436);
return statearr_21484;
})();var statearr_21485_21555 = state_21443__$1;(statearr_21485_21555[(2)] = null);
(statearr_21485_21555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (6)))
{var inst_21375 = (state_21443[(29)]);var inst_21374 = cljs.core.deref.call(null,cs);var inst_21375__$1 = cljs.core.keys.call(null,inst_21374);var inst_21376 = cljs.core.count.call(null,inst_21375__$1);var inst_21377 = cljs.core.reset_BANG_.call(null,dctr,inst_21376);var inst_21382 = cljs.core.seq.call(null,inst_21375__$1);var inst_21383 = inst_21382;var inst_21384 = null;var inst_21385 = (0);var inst_21386 = (0);var state_21443__$1 = (function (){var statearr_21486 = state_21443;(statearr_21486[(10)] = inst_21386);
(statearr_21486[(20)] = inst_21385);
(statearr_21486[(29)] = inst_21375__$1);
(statearr_21486[(21)] = inst_21383);
(statearr_21486[(12)] = inst_21384);
(statearr_21486[(30)] = inst_21377);
return statearr_21486;
})();var statearr_21487_21556 = state_21443__$1;(statearr_21487_21556[(2)] = null);
(statearr_21487_21556[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (28)))
{var inst_21402 = (state_21443[(25)]);var inst_21383 = (state_21443[(21)]);var inst_21402__$1 = cljs.core.seq.call(null,inst_21383);var state_21443__$1 = (function (){var statearr_21488 = state_21443;(statearr_21488[(25)] = inst_21402__$1);
return statearr_21488;
})();if(inst_21402__$1)
{var statearr_21489_21557 = state_21443__$1;(statearr_21489_21557[(1)] = (33));
} else
{var statearr_21490_21558 = state_21443__$1;(statearr_21490_21558[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (25)))
{var inst_21386 = (state_21443[(10)]);var inst_21385 = (state_21443[(20)]);var inst_21388 = (inst_21386 < inst_21385);var inst_21389 = inst_21388;var state_21443__$1 = state_21443;if(cljs.core.truth_(inst_21389))
{var statearr_21491_21559 = state_21443__$1;(statearr_21491_21559[(1)] = (27));
} else
{var statearr_21492_21560 = state_21443__$1;(statearr_21492_21560[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (34)))
{var state_21443__$1 = state_21443;var statearr_21493_21561 = state_21443__$1;(statearr_21493_21561[(2)] = null);
(statearr_21493_21561[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (17)))
{var state_21443__$1 = state_21443;var statearr_21494_21562 = state_21443__$1;(statearr_21494_21562[(2)] = null);
(statearr_21494_21562[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (3)))
{var inst_21441 = (state_21443[(2)]);var state_21443__$1 = state_21443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21443__$1,inst_21441);
} else
{if((state_val_21444 === (12)))
{var inst_21370 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21495_21563 = state_21443__$1;(statearr_21495_21563[(2)] = inst_21370);
(statearr_21495_21563[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (2)))
{var state_21443__$1 = state_21443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21443__$1,(4),ch);
} else
{if((state_val_21444 === (23)))
{var state_21443__$1 = state_21443;var statearr_21496_21564 = state_21443__$1;(statearr_21496_21564[(2)] = null);
(statearr_21496_21564[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (35)))
{var inst_21425 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21497_21565 = state_21443__$1;(statearr_21497_21565[(2)] = inst_21425);
(statearr_21497_21565[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (19)))
{var inst_21344 = (state_21443[(7)]);var inst_21348 = cljs.core.chunk_first.call(null,inst_21344);var inst_21349 = cljs.core.chunk_rest.call(null,inst_21344);var inst_21350 = cljs.core.count.call(null,inst_21348);var inst_21324 = inst_21349;var inst_21325 = inst_21348;var inst_21326 = inst_21350;var inst_21327 = (0);var state_21443__$1 = (function (){var statearr_21498 = state_21443;(statearr_21498[(13)] = inst_21326);
(statearr_21498[(14)] = inst_21327);
(statearr_21498[(15)] = inst_21325);
(statearr_21498[(16)] = inst_21324);
return statearr_21498;
})();var statearr_21499_21566 = state_21443__$1;(statearr_21499_21566[(2)] = null);
(statearr_21499_21566[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (11)))
{var inst_21324 = (state_21443[(16)]);var inst_21344 = (state_21443[(7)]);var inst_21344__$1 = cljs.core.seq.call(null,inst_21324);var state_21443__$1 = (function (){var statearr_21500 = state_21443;(statearr_21500[(7)] = inst_21344__$1);
return statearr_21500;
})();if(inst_21344__$1)
{var statearr_21501_21567 = state_21443__$1;(statearr_21501_21567[(1)] = (16));
} else
{var statearr_21502_21568 = state_21443__$1;(statearr_21502_21568[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (9)))
{var inst_21372 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21503_21569 = state_21443__$1;(statearr_21503_21569[(2)] = inst_21372);
(statearr_21503_21569[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (5)))
{var inst_21322 = cljs.core.deref.call(null,cs);var inst_21323 = cljs.core.seq.call(null,inst_21322);var inst_21324 = inst_21323;var inst_21325 = null;var inst_21326 = (0);var inst_21327 = (0);var state_21443__$1 = (function (){var statearr_21504 = state_21443;(statearr_21504[(13)] = inst_21326);
(statearr_21504[(14)] = inst_21327);
(statearr_21504[(15)] = inst_21325);
(statearr_21504[(16)] = inst_21324);
return statearr_21504;
})();var statearr_21505_21570 = state_21443__$1;(statearr_21505_21570[(2)] = null);
(statearr_21505_21570[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (14)))
{var state_21443__$1 = state_21443;var statearr_21506_21571 = state_21443__$1;(statearr_21506_21571[(2)] = null);
(statearr_21506_21571[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (45)))
{var inst_21433 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21507_21572 = state_21443__$1;(statearr_21507_21572[(2)] = inst_21433);
(statearr_21507_21572[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (26)))
{var inst_21375 = (state_21443[(29)]);var inst_21429 = (state_21443[(2)]);var inst_21430 = cljs.core.seq.call(null,inst_21375);var state_21443__$1 = (function (){var statearr_21508 = state_21443;(statearr_21508[(31)] = inst_21429);
return statearr_21508;
})();if(inst_21430)
{var statearr_21509_21573 = state_21443__$1;(statearr_21509_21573[(1)] = (42));
} else
{var statearr_21510_21574 = state_21443__$1;(statearr_21510_21574[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (16)))
{var inst_21344 = (state_21443[(7)]);var inst_21346 = cljs.core.chunked_seq_QMARK_.call(null,inst_21344);var state_21443__$1 = state_21443;if(inst_21346)
{var statearr_21511_21575 = state_21443__$1;(statearr_21511_21575[(1)] = (19));
} else
{var statearr_21512_21576 = state_21443__$1;(statearr_21512_21576[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (38)))
{var inst_21422 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21513_21577 = state_21443__$1;(statearr_21513_21577[(2)] = inst_21422);
(statearr_21513_21577[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (30)))
{var state_21443__$1 = state_21443;var statearr_21514_21578 = state_21443__$1;(statearr_21514_21578[(2)] = null);
(statearr_21514_21578[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (10)))
{var inst_21327 = (state_21443[(14)]);var inst_21325 = (state_21443[(15)]);var inst_21333 = cljs.core._nth.call(null,inst_21325,inst_21327);var inst_21334 = cljs.core.nth.call(null,inst_21333,(0),null);var inst_21335 = cljs.core.nth.call(null,inst_21333,(1),null);var state_21443__$1 = (function (){var statearr_21515 = state_21443;(statearr_21515[(26)] = inst_21334);
return statearr_21515;
})();if(cljs.core.truth_(inst_21335))
{var statearr_21516_21579 = state_21443__$1;(statearr_21516_21579[(1)] = (13));
} else
{var statearr_21517_21580 = state_21443__$1;(statearr_21517_21580[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (18)))
{var inst_21368 = (state_21443[(2)]);var state_21443__$1 = state_21443;var statearr_21518_21581 = state_21443__$1;(statearr_21518_21581[(2)] = inst_21368);
(statearr_21518_21581[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (42)))
{var state_21443__$1 = state_21443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21443__$1,(45),dchan);
} else
{if((state_val_21444 === (37)))
{var inst_21315 = (state_21443[(9)]);var inst_21411 = (state_21443[(23)]);var inst_21402 = (state_21443[(25)]);var inst_21411__$1 = cljs.core.first.call(null,inst_21402);var inst_21412 = cljs.core.async.put_BANG_.call(null,inst_21411__$1,inst_21315,done);var state_21443__$1 = (function (){var statearr_21519 = state_21443;(statearr_21519[(23)] = inst_21411__$1);
return statearr_21519;
})();if(cljs.core.truth_(inst_21412))
{var statearr_21520_21582 = state_21443__$1;(statearr_21520_21582[(1)] = (39));
} else
{var statearr_21521_21583 = state_21443__$1;(statearr_21521_21583[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21444 === (8)))
{var inst_21326 = (state_21443[(13)]);var inst_21327 = (state_21443[(14)]);var inst_21329 = (inst_21327 < inst_21326);var inst_21330 = inst_21329;var state_21443__$1 = state_21443;if(cljs.core.truth_(inst_21330))
{var statearr_21522_21584 = state_21443__$1;(statearr_21522_21584[(1)] = (10));
} else
{var statearr_21523_21585 = state_21443__$1;(statearr_21523_21585[(1)] = (11));
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
}
}
}
}
}
}
}
});})(c__13373__auto___21531,cs,m,dchan,dctr,done))
;return ((function (switch__13358__auto__,c__13373__auto___21531,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_21527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21527[(0)] = state_machine__13359__auto__);
(statearr_21527[(1)] = (1));
return statearr_21527;
});
var state_machine__13359__auto____1 = (function (state_21443){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_21443);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e21528){if((e21528 instanceof Object))
{var ex__13362__auto__ = e21528;var statearr_21529_21586 = state_21443;(statearr_21529_21586[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21443);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21528;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21587 = state_21443;
state_21443 = G__21587;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_21443){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_21443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___21531,cs,m,dchan,dctr,done))
})();var state__13375__auto__ = (function (){var statearr_21530 = f__13374__auto__.call(null);(statearr_21530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___21531);
return statearr_21530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___21531,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj21589 = {};return obj21589;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__11483__auto__ = m;if(and__11483__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__12132__auto__ = (((m == null))?null:m);return (function (){var or__11495__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21590){var map__21595 = p__21590;var map__21595__$1 = ((cljs.core.seq_QMARK_.call(null,map__21595))?cljs.core.apply.call(null,cljs.core.hash_map,map__21595):map__21595);var opts = map__21595__$1;var statearr_21596_21599 = state;(statearr_21596_21599[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21595,map__21595__$1,opts){
return (function (val){var statearr_21597_21600 = state;(statearr_21597_21600[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21595,map__21595__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_21598_21601 = state;(statearr_21598_21601[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21590 = null;if (arguments.length > 3) {
  p__21590 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21590);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21602){
var state = cljs.core.first(arglist__21602);
arglist__21602 = cljs.core.next(arglist__21602);
var cont_block = cljs.core.first(arglist__21602);
arglist__21602 = cljs.core.next(arglist__21602);
var ports = cljs.core.first(arglist__21602);
var p__21590 = cljs.core.rest(arglist__21602);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21590);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t21722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21722 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21723){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21723 = meta21723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21722.cljs$lang$type = true;
cljs.core.async.t21722.cljs$lang$ctorStr = "cljs.core.async/t21722";
cljs.core.async.t21722.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21722");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21722.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21722.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21724){var self__ = this;
var _21724__$1 = this;return self__.meta21723;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21724,meta21723__$1){var self__ = this;
var _21724__$1 = this;return (new cljs.core.async.t21722(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21723__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21722 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21722(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21723){return (new cljs.core.async.t21722(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21723));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21722(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__13373__auto___21841 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___21841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___21841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21794){var state_val_21795 = (state_21794[(1)]);if((state_val_21795 === (7)))
{var inst_21738 = (state_21794[(7)]);var inst_21743 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21738);var state_21794__$1 = state_21794;var statearr_21796_21842 = state_21794__$1;(statearr_21796_21842[(2)] = inst_21743);
(statearr_21796_21842[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (20)))
{var inst_21753 = (state_21794[(8)]);var state_21794__$1 = state_21794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21794__$1,(23),out,inst_21753);
} else
{if((state_val_21795 === (1)))
{var inst_21728 = (state_21794[(9)]);var inst_21728__$1 = calc_state.call(null);var inst_21729 = cljs.core.seq_QMARK_.call(null,inst_21728__$1);var state_21794__$1 = (function (){var statearr_21797 = state_21794;(statearr_21797[(9)] = inst_21728__$1);
return statearr_21797;
})();if(inst_21729)
{var statearr_21798_21843 = state_21794__$1;(statearr_21798_21843[(1)] = (2));
} else
{var statearr_21799_21844 = state_21794__$1;(statearr_21799_21844[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (24)))
{var inst_21746 = (state_21794[(10)]);var inst_21738 = inst_21746;var state_21794__$1 = (function (){var statearr_21800 = state_21794;(statearr_21800[(7)] = inst_21738);
return statearr_21800;
})();var statearr_21801_21845 = state_21794__$1;(statearr_21801_21845[(2)] = null);
(statearr_21801_21845[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (4)))
{var inst_21728 = (state_21794[(9)]);var inst_21734 = (state_21794[(2)]);var inst_21735 = cljs.core.get.call(null,inst_21734,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21736 = cljs.core.get.call(null,inst_21734,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21737 = cljs.core.get.call(null,inst_21734,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_21738 = inst_21728;var state_21794__$1 = (function (){var statearr_21802 = state_21794;(statearr_21802[(11)] = inst_21736);
(statearr_21802[(12)] = inst_21735);
(statearr_21802[(13)] = inst_21737);
(statearr_21802[(7)] = inst_21738);
return statearr_21802;
})();var statearr_21803_21846 = state_21794__$1;(statearr_21803_21846[(2)] = null);
(statearr_21803_21846[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (15)))
{var state_21794__$1 = state_21794;var statearr_21804_21847 = state_21794__$1;(statearr_21804_21847[(2)] = null);
(statearr_21804_21847[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (21)))
{var inst_21746 = (state_21794[(10)]);var inst_21738 = inst_21746;var state_21794__$1 = (function (){var statearr_21805 = state_21794;(statearr_21805[(7)] = inst_21738);
return statearr_21805;
})();var statearr_21806_21848 = state_21794__$1;(statearr_21806_21848[(2)] = null);
(statearr_21806_21848[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (13)))
{var inst_21790 = (state_21794[(2)]);var state_21794__$1 = state_21794;var statearr_21807_21849 = state_21794__$1;(statearr_21807_21849[(2)] = inst_21790);
(statearr_21807_21849[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (22)))
{var inst_21788 = (state_21794[(2)]);var state_21794__$1 = state_21794;var statearr_21808_21850 = state_21794__$1;(statearr_21808_21850[(2)] = inst_21788);
(statearr_21808_21850[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (6)))
{var inst_21792 = (state_21794[(2)]);var state_21794__$1 = state_21794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21794__$1,inst_21792);
} else
{if((state_val_21795 === (25)))
{var state_21794__$1 = state_21794;var statearr_21809_21851 = state_21794__$1;(statearr_21809_21851[(2)] = null);
(statearr_21809_21851[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (17)))
{var inst_21768 = (state_21794[(14)]);var state_21794__$1 = state_21794;var statearr_21810_21852 = state_21794__$1;(statearr_21810_21852[(2)] = inst_21768);
(statearr_21810_21852[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (3)))
{var inst_21728 = (state_21794[(9)]);var state_21794__$1 = state_21794;var statearr_21811_21853 = state_21794__$1;(statearr_21811_21853[(2)] = inst_21728);
(statearr_21811_21853[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (12)))
{var inst_21749 = (state_21794[(15)]);var inst_21754 = (state_21794[(16)]);var inst_21768 = (state_21794[(14)]);var inst_21768__$1 = inst_21749.call(null,inst_21754);var state_21794__$1 = (function (){var statearr_21812 = state_21794;(statearr_21812[(14)] = inst_21768__$1);
return statearr_21812;
})();if(cljs.core.truth_(inst_21768__$1))
{var statearr_21813_21854 = state_21794__$1;(statearr_21813_21854[(1)] = (17));
} else
{var statearr_21814_21855 = state_21794__$1;(statearr_21814_21855[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (2)))
{var inst_21728 = (state_21794[(9)]);var inst_21731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21728);var state_21794__$1 = state_21794;var statearr_21815_21856 = state_21794__$1;(statearr_21815_21856[(2)] = inst_21731);
(statearr_21815_21856[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (23)))
{var inst_21779 = (state_21794[(2)]);var state_21794__$1 = state_21794;if(cljs.core.truth_(inst_21779))
{var statearr_21816_21857 = state_21794__$1;(statearr_21816_21857[(1)] = (24));
} else
{var statearr_21817_21858 = state_21794__$1;(statearr_21817_21858[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (19)))
{var inst_21776 = (state_21794[(2)]);var state_21794__$1 = state_21794;if(cljs.core.truth_(inst_21776))
{var statearr_21818_21859 = state_21794__$1;(statearr_21818_21859[(1)] = (20));
} else
{var statearr_21819_21860 = state_21794__$1;(statearr_21819_21860[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (11)))
{var inst_21753 = (state_21794[(8)]);var inst_21759 = (inst_21753 == null);var state_21794__$1 = state_21794;if(cljs.core.truth_(inst_21759))
{var statearr_21820_21861 = state_21794__$1;(statearr_21820_21861[(1)] = (14));
} else
{var statearr_21821_21862 = state_21794__$1;(statearr_21821_21862[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (9)))
{var inst_21746 = (state_21794[(10)]);var inst_21746__$1 = (state_21794[(2)]);var inst_21747 = cljs.core.get.call(null,inst_21746__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_21748 = cljs.core.get.call(null,inst_21746__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_21749 = cljs.core.get.call(null,inst_21746__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_21794__$1 = (function (){var statearr_21822 = state_21794;(statearr_21822[(10)] = inst_21746__$1);
(statearr_21822[(15)] = inst_21749);
(statearr_21822[(17)] = inst_21748);
return statearr_21822;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_21794__$1,(10),inst_21747);
} else
{if((state_val_21795 === (5)))
{var inst_21738 = (state_21794[(7)]);var inst_21741 = cljs.core.seq_QMARK_.call(null,inst_21738);var state_21794__$1 = state_21794;if(inst_21741)
{var statearr_21823_21863 = state_21794__$1;(statearr_21823_21863[(1)] = (7));
} else
{var statearr_21824_21864 = state_21794__$1;(statearr_21824_21864[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (14)))
{var inst_21754 = (state_21794[(16)]);var inst_21761 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21754);var state_21794__$1 = state_21794;var statearr_21825_21865 = state_21794__$1;(statearr_21825_21865[(2)] = inst_21761);
(statearr_21825_21865[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (26)))
{var inst_21784 = (state_21794[(2)]);var state_21794__$1 = state_21794;var statearr_21826_21866 = state_21794__$1;(statearr_21826_21866[(2)] = inst_21784);
(statearr_21826_21866[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (16)))
{var inst_21764 = (state_21794[(2)]);var inst_21765 = calc_state.call(null);var inst_21738 = inst_21765;var state_21794__$1 = (function (){var statearr_21827 = state_21794;(statearr_21827[(18)] = inst_21764);
(statearr_21827[(7)] = inst_21738);
return statearr_21827;
})();var statearr_21828_21867 = state_21794__$1;(statearr_21828_21867[(2)] = null);
(statearr_21828_21867[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (10)))
{var inst_21753 = (state_21794[(8)]);var inst_21754 = (state_21794[(16)]);var inst_21752 = (state_21794[(2)]);var inst_21753__$1 = cljs.core.nth.call(null,inst_21752,(0),null);var inst_21754__$1 = cljs.core.nth.call(null,inst_21752,(1),null);var inst_21755 = (inst_21753__$1 == null);var inst_21756 = cljs.core._EQ_.call(null,inst_21754__$1,change);var inst_21757 = (inst_21755) || (inst_21756);var state_21794__$1 = (function (){var statearr_21829 = state_21794;(statearr_21829[(8)] = inst_21753__$1);
(statearr_21829[(16)] = inst_21754__$1);
return statearr_21829;
})();if(cljs.core.truth_(inst_21757))
{var statearr_21830_21868 = state_21794__$1;(statearr_21830_21868[(1)] = (11));
} else
{var statearr_21831_21869 = state_21794__$1;(statearr_21831_21869[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (18)))
{var inst_21749 = (state_21794[(15)]);var inst_21754 = (state_21794[(16)]);var inst_21748 = (state_21794[(17)]);var inst_21771 = cljs.core.empty_QMARK_.call(null,inst_21749);var inst_21772 = inst_21748.call(null,inst_21754);var inst_21773 = cljs.core.not.call(null,inst_21772);var inst_21774 = (inst_21771) && (inst_21773);var state_21794__$1 = state_21794;var statearr_21832_21870 = state_21794__$1;(statearr_21832_21870[(2)] = inst_21774);
(statearr_21832_21870[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21795 === (8)))
{var inst_21738 = (state_21794[(7)]);var state_21794__$1 = state_21794;var statearr_21833_21871 = state_21794__$1;(statearr_21833_21871[(2)] = inst_21738);
(statearr_21833_21871[(1)] = (9));
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
}
}
}
}
}
}
}
});})(c__13373__auto___21841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__13358__auto__,c__13373__auto___21841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_21837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21837[(0)] = state_machine__13359__auto__);
(statearr_21837[(1)] = (1));
return statearr_21837;
});
var state_machine__13359__auto____1 = (function (state_21794){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_21794);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e21838){if((e21838 instanceof Object))
{var ex__13362__auto__ = e21838;var statearr_21839_21872 = state_21794;(statearr_21839_21872[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21794);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21838;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21873 = state_21794;
state_21794 = G__21873;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_21794){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_21794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___21841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__13375__auto__ = (function (){var statearr_21840 = f__13374__auto__.call(null);(statearr_21840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___21841);
return statearr_21840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___21841,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj21875 = {};return obj21875;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__11483__auto__ = p;if(and__11483__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__11483__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__12132__auto__ = (((p == null))?null:p);return (function (){var or__11495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12132__auto__)]);if(or__11495__auto__)
{return or__11495__auto__;
} else
{var or__11495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__11495__auto____$1)
{return or__11495__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__11495__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__11495__auto__))
{return or__11495__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11495__auto__,mults){
return (function (p1__21876_SHARP_){if(cljs.core.truth_(p1__21876_SHARP_.call(null,topic)))
{return p1__21876_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__21876_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11495__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t21999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21999 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22000){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22000 = meta22000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21999.cljs$lang$type = true;
cljs.core.async.t21999.cljs$lang$ctorStr = "cljs.core.async/t21999";
cljs.core.async.t21999.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t21999");
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t21999.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21999.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22001){var self__ = this;
var _22001__$1 = this;return self__.meta22000;
});})(mults,ensure_mult))
;
cljs.core.async.t21999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22001,meta22000__$1){var self__ = this;
var _22001__$1 = this;return (new cljs.core.async.t21999(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22000__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t21999 = ((function (mults,ensure_mult){
return (function __GT_t21999(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22000){return (new cljs.core.async.t21999(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22000));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t21999(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13373__auto___22121 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___22121,mults,ensure_mult,p){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___22121,mults,ensure_mult,p){
return (function (state_22073){var state_val_22074 = (state_22073[(1)]);if((state_val_22074 === (7)))
{var inst_22069 = (state_22073[(2)]);var state_22073__$1 = state_22073;var statearr_22075_22122 = state_22073__$1;(statearr_22075_22122[(2)] = inst_22069);
(statearr_22075_22122[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (20)))
{var state_22073__$1 = state_22073;var statearr_22076_22123 = state_22073__$1;(statearr_22076_22123[(2)] = null);
(statearr_22076_22123[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (1)))
{var state_22073__$1 = state_22073;var statearr_22077_22124 = state_22073__$1;(statearr_22077_22124[(2)] = null);
(statearr_22077_22124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (24)))
{var inst_22052 = (state_22073[(7)]);var inst_22061 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22052);var state_22073__$1 = state_22073;var statearr_22078_22125 = state_22073__$1;(statearr_22078_22125[(2)] = inst_22061);
(statearr_22078_22125[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (4)))
{var inst_22004 = (state_22073[(8)]);var inst_22004__$1 = (state_22073[(2)]);var inst_22005 = (inst_22004__$1 == null);var state_22073__$1 = (function (){var statearr_22079 = state_22073;(statearr_22079[(8)] = inst_22004__$1);
return statearr_22079;
})();if(cljs.core.truth_(inst_22005))
{var statearr_22080_22126 = state_22073__$1;(statearr_22080_22126[(1)] = (5));
} else
{var statearr_22081_22127 = state_22073__$1;(statearr_22081_22127[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (15)))
{var inst_22046 = (state_22073[(2)]);var state_22073__$1 = state_22073;var statearr_22082_22128 = state_22073__$1;(statearr_22082_22128[(2)] = inst_22046);
(statearr_22082_22128[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (21)))
{var inst_22066 = (state_22073[(2)]);var state_22073__$1 = (function (){var statearr_22083 = state_22073;(statearr_22083[(9)] = inst_22066);
return statearr_22083;
})();var statearr_22084_22129 = state_22073__$1;(statearr_22084_22129[(2)] = null);
(statearr_22084_22129[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (13)))
{var inst_22028 = (state_22073[(10)]);var inst_22030 = cljs.core.chunked_seq_QMARK_.call(null,inst_22028);var state_22073__$1 = state_22073;if(inst_22030)
{var statearr_22085_22130 = state_22073__$1;(statearr_22085_22130[(1)] = (16));
} else
{var statearr_22086_22131 = state_22073__$1;(statearr_22086_22131[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (22)))
{var inst_22058 = (state_22073[(2)]);var state_22073__$1 = state_22073;if(cljs.core.truth_(inst_22058))
{var statearr_22087_22132 = state_22073__$1;(statearr_22087_22132[(1)] = (23));
} else
{var statearr_22088_22133 = state_22073__$1;(statearr_22088_22133[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (6)))
{var inst_22052 = (state_22073[(7)]);var inst_22054 = (state_22073[(11)]);var inst_22004 = (state_22073[(8)]);var inst_22052__$1 = topic_fn.call(null,inst_22004);var inst_22053 = cljs.core.deref.call(null,mults);var inst_22054__$1 = cljs.core.get.call(null,inst_22053,inst_22052__$1);var state_22073__$1 = (function (){var statearr_22089 = state_22073;(statearr_22089[(7)] = inst_22052__$1);
(statearr_22089[(11)] = inst_22054__$1);
return statearr_22089;
})();if(cljs.core.truth_(inst_22054__$1))
{var statearr_22090_22134 = state_22073__$1;(statearr_22090_22134[(1)] = (19));
} else
{var statearr_22091_22135 = state_22073__$1;(statearr_22091_22135[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (25)))
{var inst_22063 = (state_22073[(2)]);var state_22073__$1 = state_22073;var statearr_22092_22136 = state_22073__$1;(statearr_22092_22136[(2)] = inst_22063);
(statearr_22092_22136[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (17)))
{var inst_22028 = (state_22073[(10)]);var inst_22037 = cljs.core.first.call(null,inst_22028);var inst_22038 = cljs.core.async.muxch_STAR_.call(null,inst_22037);var inst_22039 = cljs.core.async.close_BANG_.call(null,inst_22038);var inst_22040 = cljs.core.next.call(null,inst_22028);var inst_22014 = inst_22040;var inst_22015 = null;var inst_22016 = (0);var inst_22017 = (0);var state_22073__$1 = (function (){var statearr_22093 = state_22073;(statearr_22093[(12)] = inst_22017);
(statearr_22093[(13)] = inst_22015);
(statearr_22093[(14)] = inst_22016);
(statearr_22093[(15)] = inst_22039);
(statearr_22093[(16)] = inst_22014);
return statearr_22093;
})();var statearr_22094_22137 = state_22073__$1;(statearr_22094_22137[(2)] = null);
(statearr_22094_22137[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (3)))
{var inst_22071 = (state_22073[(2)]);var state_22073__$1 = state_22073;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22073__$1,inst_22071);
} else
{if((state_val_22074 === (12)))
{var inst_22048 = (state_22073[(2)]);var state_22073__$1 = state_22073;var statearr_22095_22138 = state_22073__$1;(statearr_22095_22138[(2)] = inst_22048);
(statearr_22095_22138[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (2)))
{var state_22073__$1 = state_22073;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22073__$1,(4),ch);
} else
{if((state_val_22074 === (23)))
{var state_22073__$1 = state_22073;var statearr_22096_22139 = state_22073__$1;(statearr_22096_22139[(2)] = null);
(statearr_22096_22139[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (19)))
{var inst_22054 = (state_22073[(11)]);var inst_22004 = (state_22073[(8)]);var inst_22056 = cljs.core.async.muxch_STAR_.call(null,inst_22054);var state_22073__$1 = state_22073;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22073__$1,(22),inst_22056,inst_22004);
} else
{if((state_val_22074 === (11)))
{var inst_22028 = (state_22073[(10)]);var inst_22014 = (state_22073[(16)]);var inst_22028__$1 = cljs.core.seq.call(null,inst_22014);var state_22073__$1 = (function (){var statearr_22097 = state_22073;(statearr_22097[(10)] = inst_22028__$1);
return statearr_22097;
})();if(inst_22028__$1)
{var statearr_22098_22140 = state_22073__$1;(statearr_22098_22140[(1)] = (13));
} else
{var statearr_22099_22141 = state_22073__$1;(statearr_22099_22141[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (9)))
{var inst_22050 = (state_22073[(2)]);var state_22073__$1 = state_22073;var statearr_22100_22142 = state_22073__$1;(statearr_22100_22142[(2)] = inst_22050);
(statearr_22100_22142[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (5)))
{var inst_22011 = cljs.core.deref.call(null,mults);var inst_22012 = cljs.core.vals.call(null,inst_22011);var inst_22013 = cljs.core.seq.call(null,inst_22012);var inst_22014 = inst_22013;var inst_22015 = null;var inst_22016 = (0);var inst_22017 = (0);var state_22073__$1 = (function (){var statearr_22101 = state_22073;(statearr_22101[(12)] = inst_22017);
(statearr_22101[(13)] = inst_22015);
(statearr_22101[(14)] = inst_22016);
(statearr_22101[(16)] = inst_22014);
return statearr_22101;
})();var statearr_22102_22143 = state_22073__$1;(statearr_22102_22143[(2)] = null);
(statearr_22102_22143[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (14)))
{var state_22073__$1 = state_22073;var statearr_22106_22144 = state_22073__$1;(statearr_22106_22144[(2)] = null);
(statearr_22106_22144[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (16)))
{var inst_22028 = (state_22073[(10)]);var inst_22032 = cljs.core.chunk_first.call(null,inst_22028);var inst_22033 = cljs.core.chunk_rest.call(null,inst_22028);var inst_22034 = cljs.core.count.call(null,inst_22032);var inst_22014 = inst_22033;var inst_22015 = inst_22032;var inst_22016 = inst_22034;var inst_22017 = (0);var state_22073__$1 = (function (){var statearr_22107 = state_22073;(statearr_22107[(12)] = inst_22017);
(statearr_22107[(13)] = inst_22015);
(statearr_22107[(14)] = inst_22016);
(statearr_22107[(16)] = inst_22014);
return statearr_22107;
})();var statearr_22108_22145 = state_22073__$1;(statearr_22108_22145[(2)] = null);
(statearr_22108_22145[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (10)))
{var inst_22017 = (state_22073[(12)]);var inst_22015 = (state_22073[(13)]);var inst_22016 = (state_22073[(14)]);var inst_22014 = (state_22073[(16)]);var inst_22022 = cljs.core._nth.call(null,inst_22015,inst_22017);var inst_22023 = cljs.core.async.muxch_STAR_.call(null,inst_22022);var inst_22024 = cljs.core.async.close_BANG_.call(null,inst_22023);var inst_22025 = (inst_22017 + (1));var tmp22103 = inst_22015;var tmp22104 = inst_22016;var tmp22105 = inst_22014;var inst_22014__$1 = tmp22105;var inst_22015__$1 = tmp22103;var inst_22016__$1 = tmp22104;var inst_22017__$1 = inst_22025;var state_22073__$1 = (function (){var statearr_22109 = state_22073;(statearr_22109[(12)] = inst_22017__$1);
(statearr_22109[(13)] = inst_22015__$1);
(statearr_22109[(17)] = inst_22024);
(statearr_22109[(14)] = inst_22016__$1);
(statearr_22109[(16)] = inst_22014__$1);
return statearr_22109;
})();var statearr_22110_22146 = state_22073__$1;(statearr_22110_22146[(2)] = null);
(statearr_22110_22146[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (18)))
{var inst_22043 = (state_22073[(2)]);var state_22073__$1 = state_22073;var statearr_22111_22147 = state_22073__$1;(statearr_22111_22147[(2)] = inst_22043);
(statearr_22111_22147[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22074 === (8)))
{var inst_22017 = (state_22073[(12)]);var inst_22016 = (state_22073[(14)]);var inst_22019 = (inst_22017 < inst_22016);var inst_22020 = inst_22019;var state_22073__$1 = state_22073;if(cljs.core.truth_(inst_22020))
{var statearr_22112_22148 = state_22073__$1;(statearr_22112_22148[(1)] = (10));
} else
{var statearr_22113_22149 = state_22073__$1;(statearr_22113_22149[(1)] = (11));
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
}
}
}
}
}
}
});})(c__13373__auto___22121,mults,ensure_mult,p))
;return ((function (switch__13358__auto__,c__13373__auto___22121,mults,ensure_mult,p){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22117[(0)] = state_machine__13359__auto__);
(statearr_22117[(1)] = (1));
return statearr_22117;
});
var state_machine__13359__auto____1 = (function (state_22073){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22073);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22118){if((e22118 instanceof Object))
{var ex__13362__auto__ = e22118;var statearr_22119_22150 = state_22073;(statearr_22119_22150[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22073);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22118;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22151 = state_22073;
state_22073 = G__22151;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22073){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___22121,mults,ensure_mult,p))
})();var state__13375__auto__ = (function (){var statearr_22120 = f__13374__auto__.call(null);(statearr_22120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___22121);
return statearr_22120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___22121,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__13373__auto___22288 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___22288,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___22288,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22258){var state_val_22259 = (state_22258[(1)]);if((state_val_22259 === (7)))
{var state_22258__$1 = state_22258;var statearr_22260_22289 = state_22258__$1;(statearr_22260_22289[(2)] = null);
(statearr_22260_22289[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (1)))
{var state_22258__$1 = state_22258;var statearr_22261_22290 = state_22258__$1;(statearr_22261_22290[(2)] = null);
(statearr_22261_22290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (4)))
{var inst_22222 = (state_22258[(7)]);var inst_22224 = (inst_22222 < cnt);var state_22258__$1 = state_22258;if(cljs.core.truth_(inst_22224))
{var statearr_22262_22291 = state_22258__$1;(statearr_22262_22291[(1)] = (6));
} else
{var statearr_22263_22292 = state_22258__$1;(statearr_22263_22292[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (15)))
{var inst_22254 = (state_22258[(2)]);var state_22258__$1 = state_22258;var statearr_22264_22293 = state_22258__$1;(statearr_22264_22293[(2)] = inst_22254);
(statearr_22264_22293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (13)))
{var inst_22247 = cljs.core.async.close_BANG_.call(null,out);var state_22258__$1 = state_22258;var statearr_22265_22294 = state_22258__$1;(statearr_22265_22294[(2)] = inst_22247);
(statearr_22265_22294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (6)))
{var state_22258__$1 = state_22258;var statearr_22266_22295 = state_22258__$1;(statearr_22266_22295[(2)] = null);
(statearr_22266_22295[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (3)))
{var inst_22256 = (state_22258[(2)]);var state_22258__$1 = state_22258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22258__$1,inst_22256);
} else
{if((state_val_22259 === (12)))
{var inst_22244 = (state_22258[(8)]);var inst_22244__$1 = (state_22258[(2)]);var inst_22245 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22244__$1);var state_22258__$1 = (function (){var statearr_22267 = state_22258;(statearr_22267[(8)] = inst_22244__$1);
return statearr_22267;
})();if(cljs.core.truth_(inst_22245))
{var statearr_22268_22296 = state_22258__$1;(statearr_22268_22296[(1)] = (13));
} else
{var statearr_22269_22297 = state_22258__$1;(statearr_22269_22297[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (2)))
{var inst_22221 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22222 = (0);var state_22258__$1 = (function (){var statearr_22270 = state_22258;(statearr_22270[(9)] = inst_22221);
(statearr_22270[(7)] = inst_22222);
return statearr_22270;
})();var statearr_22271_22298 = state_22258__$1;(statearr_22271_22298[(2)] = null);
(statearr_22271_22298[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (11)))
{var inst_22222 = (state_22258[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22258,(10),Object,null,(9));var inst_22231 = chs__$1.call(null,inst_22222);var inst_22232 = done.call(null,inst_22222);var inst_22233 = cljs.core.async.take_BANG_.call(null,inst_22231,inst_22232);var state_22258__$1 = state_22258;var statearr_22272_22299 = state_22258__$1;(statearr_22272_22299[(2)] = inst_22233);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22258__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (9)))
{var inst_22222 = (state_22258[(7)]);var inst_22235 = (state_22258[(2)]);var inst_22236 = (inst_22222 + (1));var inst_22222__$1 = inst_22236;var state_22258__$1 = (function (){var statearr_22273 = state_22258;(statearr_22273[(10)] = inst_22235);
(statearr_22273[(7)] = inst_22222__$1);
return statearr_22273;
})();var statearr_22274_22300 = state_22258__$1;(statearr_22274_22300[(2)] = null);
(statearr_22274_22300[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (5)))
{var inst_22242 = (state_22258[(2)]);var state_22258__$1 = (function (){var statearr_22275 = state_22258;(statearr_22275[(11)] = inst_22242);
return statearr_22275;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22258__$1,(12),dchan);
} else
{if((state_val_22259 === (14)))
{var inst_22244 = (state_22258[(8)]);var inst_22249 = cljs.core.apply.call(null,f,inst_22244);var state_22258__$1 = state_22258;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22258__$1,(16),out,inst_22249);
} else
{if((state_val_22259 === (16)))
{var inst_22251 = (state_22258[(2)]);var state_22258__$1 = (function (){var statearr_22276 = state_22258;(statearr_22276[(12)] = inst_22251);
return statearr_22276;
})();var statearr_22277_22301 = state_22258__$1;(statearr_22277_22301[(2)] = null);
(statearr_22277_22301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (10)))
{var inst_22226 = (state_22258[(2)]);var inst_22227 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22258__$1 = (function (){var statearr_22278 = state_22258;(statearr_22278[(13)] = inst_22226);
return statearr_22278;
})();var statearr_22279_22302 = state_22258__$1;(statearr_22279_22302[(2)] = inst_22227);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22258__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22259 === (8)))
{var inst_22240 = (state_22258[(2)]);var state_22258__$1 = state_22258;var statearr_22280_22303 = state_22258__$1;(statearr_22280_22303[(2)] = inst_22240);
(statearr_22280_22303[(1)] = (5));
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
});})(c__13373__auto___22288,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__13358__auto__,c__13373__auto___22288,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22284[(0)] = state_machine__13359__auto__);
(statearr_22284[(1)] = (1));
return statearr_22284;
});
var state_machine__13359__auto____1 = (function (state_22258){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22258);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22285){if((e22285 instanceof Object))
{var ex__13362__auto__ = e22285;var statearr_22286_22304 = state_22258;(statearr_22286_22304[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22258);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22285;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22305 = state_22258;
state_22258 = G__22305;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22258){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___22288,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__13375__auto__ = (function (){var statearr_22287 = f__13374__auto__.call(null);(statearr_22287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___22288);
return statearr_22287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___22288,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13373__auto___22413 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___22413,out){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___22413,out){
return (function (state_22389){var state_val_22390 = (state_22389[(1)]);if((state_val_22390 === (7)))
{var inst_22368 = (state_22389[(7)]);var inst_22369 = (state_22389[(8)]);var inst_22368__$1 = (state_22389[(2)]);var inst_22369__$1 = cljs.core.nth.call(null,inst_22368__$1,(0),null);var inst_22370 = cljs.core.nth.call(null,inst_22368__$1,(1),null);var inst_22371 = (inst_22369__$1 == null);var state_22389__$1 = (function (){var statearr_22391 = state_22389;(statearr_22391[(7)] = inst_22368__$1);
(statearr_22391[(8)] = inst_22369__$1);
(statearr_22391[(9)] = inst_22370);
return statearr_22391;
})();if(cljs.core.truth_(inst_22371))
{var statearr_22392_22414 = state_22389__$1;(statearr_22392_22414[(1)] = (8));
} else
{var statearr_22393_22415 = state_22389__$1;(statearr_22393_22415[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (1)))
{var inst_22360 = cljs.core.vec.call(null,chs);var inst_22361 = inst_22360;var state_22389__$1 = (function (){var statearr_22394 = state_22389;(statearr_22394[(10)] = inst_22361);
return statearr_22394;
})();var statearr_22395_22416 = state_22389__$1;(statearr_22395_22416[(2)] = null);
(statearr_22395_22416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (4)))
{var inst_22361 = (state_22389[(10)]);var state_22389__$1 = state_22389;return cljs.core.async.ioc_alts_BANG_.call(null,state_22389__$1,(7),inst_22361);
} else
{if((state_val_22390 === (6)))
{var inst_22385 = (state_22389[(2)]);var state_22389__$1 = state_22389;var statearr_22396_22417 = state_22389__$1;(statearr_22396_22417[(2)] = inst_22385);
(statearr_22396_22417[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (3)))
{var inst_22387 = (state_22389[(2)]);var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22389__$1,inst_22387);
} else
{if((state_val_22390 === (2)))
{var inst_22361 = (state_22389[(10)]);var inst_22363 = cljs.core.count.call(null,inst_22361);var inst_22364 = (inst_22363 > (0));var state_22389__$1 = state_22389;if(cljs.core.truth_(inst_22364))
{var statearr_22398_22418 = state_22389__$1;(statearr_22398_22418[(1)] = (4));
} else
{var statearr_22399_22419 = state_22389__$1;(statearr_22399_22419[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (11)))
{var inst_22361 = (state_22389[(10)]);var inst_22378 = (state_22389[(2)]);var tmp22397 = inst_22361;var inst_22361__$1 = tmp22397;var state_22389__$1 = (function (){var statearr_22400 = state_22389;(statearr_22400[(10)] = inst_22361__$1);
(statearr_22400[(11)] = inst_22378);
return statearr_22400;
})();var statearr_22401_22420 = state_22389__$1;(statearr_22401_22420[(2)] = null);
(statearr_22401_22420[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (9)))
{var inst_22369 = (state_22389[(8)]);var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22389__$1,(11),out,inst_22369);
} else
{if((state_val_22390 === (5)))
{var inst_22383 = cljs.core.async.close_BANG_.call(null,out);var state_22389__$1 = state_22389;var statearr_22402_22421 = state_22389__$1;(statearr_22402_22421[(2)] = inst_22383);
(statearr_22402_22421[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (10)))
{var inst_22381 = (state_22389[(2)]);var state_22389__$1 = state_22389;var statearr_22403_22422 = state_22389__$1;(statearr_22403_22422[(2)] = inst_22381);
(statearr_22403_22422[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22390 === (8)))
{var inst_22368 = (state_22389[(7)]);var inst_22361 = (state_22389[(10)]);var inst_22369 = (state_22389[(8)]);var inst_22370 = (state_22389[(9)]);var inst_22373 = (function (){var c = inst_22370;var v = inst_22369;var vec__22366 = inst_22368;var cs = inst_22361;return ((function (c,v,vec__22366,cs,inst_22368,inst_22361,inst_22369,inst_22370,state_val_22390,c__13373__auto___22413,out){
return (function (p1__22306_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22306_SHARP_);
});
;})(c,v,vec__22366,cs,inst_22368,inst_22361,inst_22369,inst_22370,state_val_22390,c__13373__auto___22413,out))
})();var inst_22374 = cljs.core.filterv.call(null,inst_22373,inst_22361);var inst_22361__$1 = inst_22374;var state_22389__$1 = (function (){var statearr_22404 = state_22389;(statearr_22404[(10)] = inst_22361__$1);
return statearr_22404;
})();var statearr_22405_22423 = state_22389__$1;(statearr_22405_22423[(2)] = null);
(statearr_22405_22423[(1)] = (2));
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
});})(c__13373__auto___22413,out))
;return ((function (switch__13358__auto__,c__13373__auto___22413,out){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22409 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22409[(0)] = state_machine__13359__auto__);
(statearr_22409[(1)] = (1));
return statearr_22409;
});
var state_machine__13359__auto____1 = (function (state_22389){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22389);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22410){if((e22410 instanceof Object))
{var ex__13362__auto__ = e22410;var statearr_22411_22424 = state_22389;(statearr_22411_22424[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22389);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22410;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22425 = state_22389;
state_22389 = G__22425;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22389){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___22413,out))
})();var state__13375__auto__ = (function (){var statearr_22412 = f__13374__auto__.call(null);(statearr_22412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___22413);
return statearr_22412;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___22413,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13373__auto___22518 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___22518,out){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___22518,out){
return (function (state_22495){var state_val_22496 = (state_22495[(1)]);if((state_val_22496 === (7)))
{var inst_22477 = (state_22495[(7)]);var inst_22477__$1 = (state_22495[(2)]);var inst_22478 = (inst_22477__$1 == null);var inst_22479 = cljs.core.not.call(null,inst_22478);var state_22495__$1 = (function (){var statearr_22497 = state_22495;(statearr_22497[(7)] = inst_22477__$1);
return statearr_22497;
})();if(inst_22479)
{var statearr_22498_22519 = state_22495__$1;(statearr_22498_22519[(1)] = (8));
} else
{var statearr_22499_22520 = state_22495__$1;(statearr_22499_22520[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (1)))
{var inst_22472 = (0);var state_22495__$1 = (function (){var statearr_22500 = state_22495;(statearr_22500[(8)] = inst_22472);
return statearr_22500;
})();var statearr_22501_22521 = state_22495__$1;(statearr_22501_22521[(2)] = null);
(statearr_22501_22521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (4)))
{var state_22495__$1 = state_22495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22495__$1,(7),ch);
} else
{if((state_val_22496 === (6)))
{var inst_22490 = (state_22495[(2)]);var state_22495__$1 = state_22495;var statearr_22502_22522 = state_22495__$1;(statearr_22502_22522[(2)] = inst_22490);
(statearr_22502_22522[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (3)))
{var inst_22492 = (state_22495[(2)]);var inst_22493 = cljs.core.async.close_BANG_.call(null,out);var state_22495__$1 = (function (){var statearr_22503 = state_22495;(statearr_22503[(9)] = inst_22492);
return statearr_22503;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22495__$1,inst_22493);
} else
{if((state_val_22496 === (2)))
{var inst_22472 = (state_22495[(8)]);var inst_22474 = (inst_22472 < n);var state_22495__$1 = state_22495;if(cljs.core.truth_(inst_22474))
{var statearr_22504_22523 = state_22495__$1;(statearr_22504_22523[(1)] = (4));
} else
{var statearr_22505_22524 = state_22495__$1;(statearr_22505_22524[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (11)))
{var inst_22472 = (state_22495[(8)]);var inst_22482 = (state_22495[(2)]);var inst_22483 = (inst_22472 + (1));var inst_22472__$1 = inst_22483;var state_22495__$1 = (function (){var statearr_22506 = state_22495;(statearr_22506[(10)] = inst_22482);
(statearr_22506[(8)] = inst_22472__$1);
return statearr_22506;
})();var statearr_22507_22525 = state_22495__$1;(statearr_22507_22525[(2)] = null);
(statearr_22507_22525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (9)))
{var state_22495__$1 = state_22495;var statearr_22508_22526 = state_22495__$1;(statearr_22508_22526[(2)] = null);
(statearr_22508_22526[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (5)))
{var state_22495__$1 = state_22495;var statearr_22509_22527 = state_22495__$1;(statearr_22509_22527[(2)] = null);
(statearr_22509_22527[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (10)))
{var inst_22487 = (state_22495[(2)]);var state_22495__$1 = state_22495;var statearr_22510_22528 = state_22495__$1;(statearr_22510_22528[(2)] = inst_22487);
(statearr_22510_22528[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22496 === (8)))
{var inst_22477 = (state_22495[(7)]);var state_22495__$1 = state_22495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22495__$1,(11),out,inst_22477);
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
});})(c__13373__auto___22518,out))
;return ((function (switch__13358__auto__,c__13373__auto___22518,out){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22514 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22514[(0)] = state_machine__13359__auto__);
(statearr_22514[(1)] = (1));
return statearr_22514;
});
var state_machine__13359__auto____1 = (function (state_22495){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22495);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22515){if((e22515 instanceof Object))
{var ex__13362__auto__ = e22515;var statearr_22516_22529 = state_22495;(statearr_22516_22529[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22515;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22530 = state_22495;
state_22495 = G__22530;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22495){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___22518,out))
})();var state__13375__auto__ = (function (){var statearr_22517 = f__13374__auto__.call(null);(statearr_22517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___22518);
return statearr_22517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___22518,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22538 = (function (ch,f,map_LT_,meta22539){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22539 = meta22539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22538.cljs$lang$type = true;
cljs.core.async.t22538.cljs$lang$ctorStr = "cljs.core.async/t22538";
cljs.core.async.t22538.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t22538");
});
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t22541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22541 = (function (fn1,_,meta22539,ch,f,map_LT_,meta22542){
this.fn1 = fn1;
this._ = _;
this.meta22539 = meta22539;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22542 = meta22542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22541.cljs$lang$type = true;
cljs.core.async.t22541.cljs$lang$ctorStr = "cljs.core.async/t22541";
cljs.core.async.t22541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t22541");
});})(___$1))
;
cljs.core.async.t22541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t22541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__22531_SHARP_){return f1.call(null,(((p1__22531_SHARP_ == null))?null:self__.f.call(null,p1__22531_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t22541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22543){var self__ = this;
var _22543__$1 = this;return self__.meta22542;
});})(___$1))
;
cljs.core.async.t22541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22543,meta22542__$1){var self__ = this;
var _22543__$1 = this;return (new cljs.core.async.t22541(self__.fn1,self__._,self__.meta22539,self__.ch,self__.f,self__.map_LT_,meta22542__$1));
});})(___$1))
;
cljs.core.async.__GT_t22541 = ((function (___$1){
return (function __GT_t22541(fn1__$1,___$2,meta22539__$1,ch__$2,f__$2,map_LT___$2,meta22542){return (new cljs.core.async.t22541(fn1__$1,___$2,meta22539__$1,ch__$2,f__$2,map_LT___$2,meta22542));
});})(___$1))
;
}
return (new cljs.core.async.t22541(fn1,___$1,self__.meta22539,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__11483__auto__ = ret;if(cljs.core.truth_(and__11483__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__11483__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t22538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22540){var self__ = this;
var _22540__$1 = this;return self__.meta22539;
});
cljs.core.async.t22538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22540,meta22539__$1){var self__ = this;
var _22540__$1 = this;return (new cljs.core.async.t22538(self__.ch,self__.f,self__.map_LT_,meta22539__$1));
});
cljs.core.async.__GT_t22538 = (function __GT_t22538(ch__$1,f__$1,map_LT___$1,meta22539){return (new cljs.core.async.t22538(ch__$1,f__$1,map_LT___$1,meta22539));
});
}
return (new cljs.core.async.t22538(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22547 = (function (ch,f,map_GT_,meta22548){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22548 = meta22548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22547.cljs$lang$type = true;
cljs.core.async.t22547.cljs$lang$ctorStr = "cljs.core.async/t22547";
cljs.core.async.t22547.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t22547");
});
cljs.core.async.t22547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t22547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22547.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22549){var self__ = this;
var _22549__$1 = this;return self__.meta22548;
});
cljs.core.async.t22547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22549,meta22548__$1){var self__ = this;
var _22549__$1 = this;return (new cljs.core.async.t22547(self__.ch,self__.f,self__.map_GT_,meta22548__$1));
});
cljs.core.async.__GT_t22547 = (function __GT_t22547(ch__$1,f__$1,map_GT___$1,meta22548){return (new cljs.core.async.t22547(ch__$1,f__$1,map_GT___$1,meta22548));
});
}
return (new cljs.core.async.t22547(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22553 = (function (ch,p,filter_GT_,meta22554){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22554 = meta22554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22553.cljs$lang$type = true;
cljs.core.async.t22553.cljs$lang$ctorStr = "cljs.core.async/t22553";
cljs.core.async.t22553.cljs$lang$ctorPrWriter = (function (this__12072__auto__,writer__12073__auto__,opt__12074__auto__){return cljs.core._write.call(null,writer__12073__auto__,"cljs.core.async/t22553");
});
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t22553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22555){var self__ = this;
var _22555__$1 = this;return self__.meta22554;
});
cljs.core.async.t22553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22555,meta22554__$1){var self__ = this;
var _22555__$1 = this;return (new cljs.core.async.t22553(self__.ch,self__.p,self__.filter_GT_,meta22554__$1));
});
cljs.core.async.__GT_t22553 = (function __GT_t22553(ch__$1,p__$1,filter_GT___$1,meta22554){return (new cljs.core.async.t22553(ch__$1,p__$1,filter_GT___$1,meta22554));
});
}
return (new cljs.core.async.t22553(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13373__auto___22638 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___22638,out){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___22638,out){
return (function (state_22617){var state_val_22618 = (state_22617[(1)]);if((state_val_22618 === (7)))
{var inst_22613 = (state_22617[(2)]);var state_22617__$1 = state_22617;var statearr_22619_22639 = state_22617__$1;(statearr_22619_22639[(2)] = inst_22613);
(statearr_22619_22639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (1)))
{var state_22617__$1 = state_22617;var statearr_22620_22640 = state_22617__$1;(statearr_22620_22640[(2)] = null);
(statearr_22620_22640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (4)))
{var inst_22599 = (state_22617[(7)]);var inst_22599__$1 = (state_22617[(2)]);var inst_22600 = (inst_22599__$1 == null);var state_22617__$1 = (function (){var statearr_22621 = state_22617;(statearr_22621[(7)] = inst_22599__$1);
return statearr_22621;
})();if(cljs.core.truth_(inst_22600))
{var statearr_22622_22641 = state_22617__$1;(statearr_22622_22641[(1)] = (5));
} else
{var statearr_22623_22642 = state_22617__$1;(statearr_22623_22642[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (6)))
{var inst_22599 = (state_22617[(7)]);var inst_22604 = p.call(null,inst_22599);var state_22617__$1 = state_22617;if(cljs.core.truth_(inst_22604))
{var statearr_22624_22643 = state_22617__$1;(statearr_22624_22643[(1)] = (8));
} else
{var statearr_22625_22644 = state_22617__$1;(statearr_22625_22644[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (3)))
{var inst_22615 = (state_22617[(2)]);var state_22617__$1 = state_22617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22617__$1,inst_22615);
} else
{if((state_val_22618 === (2)))
{var state_22617__$1 = state_22617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22617__$1,(4),ch);
} else
{if((state_val_22618 === (11)))
{var inst_22607 = (state_22617[(2)]);var state_22617__$1 = state_22617;var statearr_22626_22645 = state_22617__$1;(statearr_22626_22645[(2)] = inst_22607);
(statearr_22626_22645[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (9)))
{var state_22617__$1 = state_22617;var statearr_22627_22646 = state_22617__$1;(statearr_22627_22646[(2)] = null);
(statearr_22627_22646[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (5)))
{var inst_22602 = cljs.core.async.close_BANG_.call(null,out);var state_22617__$1 = state_22617;var statearr_22628_22647 = state_22617__$1;(statearr_22628_22647[(2)] = inst_22602);
(statearr_22628_22647[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (10)))
{var inst_22610 = (state_22617[(2)]);var state_22617__$1 = (function (){var statearr_22629 = state_22617;(statearr_22629[(8)] = inst_22610);
return statearr_22629;
})();var statearr_22630_22648 = state_22617__$1;(statearr_22630_22648[(2)] = null);
(statearr_22630_22648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22618 === (8)))
{var inst_22599 = (state_22617[(7)]);var state_22617__$1 = state_22617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22617__$1,(11),out,inst_22599);
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
});})(c__13373__auto___22638,out))
;return ((function (switch__13358__auto__,c__13373__auto___22638,out){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22634 = [null,null,null,null,null,null,null,null,null];(statearr_22634[(0)] = state_machine__13359__auto__);
(statearr_22634[(1)] = (1));
return statearr_22634;
});
var state_machine__13359__auto____1 = (function (state_22617){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22617);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22635){if((e22635 instanceof Object))
{var ex__13362__auto__ = e22635;var statearr_22636_22649 = state_22617;(statearr_22636_22649[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22635;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22650 = state_22617;
state_22617 = G__22650;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22617){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___22638,out))
})();var state__13375__auto__ = (function (){var statearr_22637 = f__13374__auto__.call(null);(statearr_22637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___22638);
return statearr_22637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___22638,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13373__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto__){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto__){
return (function (state_22816){var state_val_22817 = (state_22816[(1)]);if((state_val_22817 === (7)))
{var inst_22812 = (state_22816[(2)]);var state_22816__$1 = state_22816;var statearr_22818_22859 = state_22816__$1;(statearr_22818_22859[(2)] = inst_22812);
(statearr_22818_22859[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (20)))
{var inst_22782 = (state_22816[(7)]);var inst_22793 = (state_22816[(2)]);var inst_22794 = cljs.core.next.call(null,inst_22782);var inst_22768 = inst_22794;var inst_22769 = null;var inst_22770 = (0);var inst_22771 = (0);var state_22816__$1 = (function (){var statearr_22819 = state_22816;(statearr_22819[(8)] = inst_22771);
(statearr_22819[(9)] = inst_22793);
(statearr_22819[(10)] = inst_22770);
(statearr_22819[(11)] = inst_22769);
(statearr_22819[(12)] = inst_22768);
return statearr_22819;
})();var statearr_22820_22860 = state_22816__$1;(statearr_22820_22860[(2)] = null);
(statearr_22820_22860[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (1)))
{var state_22816__$1 = state_22816;var statearr_22821_22861 = state_22816__$1;(statearr_22821_22861[(2)] = null);
(statearr_22821_22861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (4)))
{var inst_22757 = (state_22816[(13)]);var inst_22757__$1 = (state_22816[(2)]);var inst_22758 = (inst_22757__$1 == null);var state_22816__$1 = (function (){var statearr_22822 = state_22816;(statearr_22822[(13)] = inst_22757__$1);
return statearr_22822;
})();if(cljs.core.truth_(inst_22758))
{var statearr_22823_22862 = state_22816__$1;(statearr_22823_22862[(1)] = (5));
} else
{var statearr_22824_22863 = state_22816__$1;(statearr_22824_22863[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (15)))
{var state_22816__$1 = state_22816;var statearr_22828_22864 = state_22816__$1;(statearr_22828_22864[(2)] = null);
(statearr_22828_22864[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (21)))
{var state_22816__$1 = state_22816;var statearr_22829_22865 = state_22816__$1;(statearr_22829_22865[(2)] = null);
(statearr_22829_22865[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (13)))
{var inst_22771 = (state_22816[(8)]);var inst_22770 = (state_22816[(10)]);var inst_22769 = (state_22816[(11)]);var inst_22768 = (state_22816[(12)]);var inst_22778 = (state_22816[(2)]);var inst_22779 = (inst_22771 + (1));var tmp22825 = inst_22770;var tmp22826 = inst_22769;var tmp22827 = inst_22768;var inst_22768__$1 = tmp22827;var inst_22769__$1 = tmp22826;var inst_22770__$1 = tmp22825;var inst_22771__$1 = inst_22779;var state_22816__$1 = (function (){var statearr_22830 = state_22816;(statearr_22830[(8)] = inst_22771__$1);
(statearr_22830[(10)] = inst_22770__$1);
(statearr_22830[(14)] = inst_22778);
(statearr_22830[(11)] = inst_22769__$1);
(statearr_22830[(12)] = inst_22768__$1);
return statearr_22830;
})();var statearr_22831_22866 = state_22816__$1;(statearr_22831_22866[(2)] = null);
(statearr_22831_22866[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (22)))
{var state_22816__$1 = state_22816;var statearr_22832_22867 = state_22816__$1;(statearr_22832_22867[(2)] = null);
(statearr_22832_22867[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (6)))
{var inst_22757 = (state_22816[(13)]);var inst_22766 = f.call(null,inst_22757);var inst_22767 = cljs.core.seq.call(null,inst_22766);var inst_22768 = inst_22767;var inst_22769 = null;var inst_22770 = (0);var inst_22771 = (0);var state_22816__$1 = (function (){var statearr_22833 = state_22816;(statearr_22833[(8)] = inst_22771);
(statearr_22833[(10)] = inst_22770);
(statearr_22833[(11)] = inst_22769);
(statearr_22833[(12)] = inst_22768);
return statearr_22833;
})();var statearr_22834_22868 = state_22816__$1;(statearr_22834_22868[(2)] = null);
(statearr_22834_22868[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (17)))
{var inst_22782 = (state_22816[(7)]);var inst_22786 = cljs.core.chunk_first.call(null,inst_22782);var inst_22787 = cljs.core.chunk_rest.call(null,inst_22782);var inst_22788 = cljs.core.count.call(null,inst_22786);var inst_22768 = inst_22787;var inst_22769 = inst_22786;var inst_22770 = inst_22788;var inst_22771 = (0);var state_22816__$1 = (function (){var statearr_22835 = state_22816;(statearr_22835[(8)] = inst_22771);
(statearr_22835[(10)] = inst_22770);
(statearr_22835[(11)] = inst_22769);
(statearr_22835[(12)] = inst_22768);
return statearr_22835;
})();var statearr_22836_22869 = state_22816__$1;(statearr_22836_22869[(2)] = null);
(statearr_22836_22869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (3)))
{var inst_22814 = (state_22816[(2)]);var state_22816__$1 = state_22816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22816__$1,inst_22814);
} else
{if((state_val_22817 === (12)))
{var inst_22802 = (state_22816[(2)]);var state_22816__$1 = state_22816;var statearr_22837_22870 = state_22816__$1;(statearr_22837_22870[(2)] = inst_22802);
(statearr_22837_22870[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (2)))
{var state_22816__$1 = state_22816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22816__$1,(4),in$);
} else
{if((state_val_22817 === (23)))
{var inst_22810 = (state_22816[(2)]);var state_22816__$1 = state_22816;var statearr_22838_22871 = state_22816__$1;(statearr_22838_22871[(2)] = inst_22810);
(statearr_22838_22871[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (19)))
{var inst_22797 = (state_22816[(2)]);var state_22816__$1 = state_22816;var statearr_22839_22872 = state_22816__$1;(statearr_22839_22872[(2)] = inst_22797);
(statearr_22839_22872[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (11)))
{var inst_22782 = (state_22816[(7)]);var inst_22768 = (state_22816[(12)]);var inst_22782__$1 = cljs.core.seq.call(null,inst_22768);var state_22816__$1 = (function (){var statearr_22840 = state_22816;(statearr_22840[(7)] = inst_22782__$1);
return statearr_22840;
})();if(inst_22782__$1)
{var statearr_22841_22873 = state_22816__$1;(statearr_22841_22873[(1)] = (14));
} else
{var statearr_22842_22874 = state_22816__$1;(statearr_22842_22874[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (9)))
{var inst_22804 = (state_22816[(2)]);var inst_22805 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_22816__$1 = (function (){var statearr_22843 = state_22816;(statearr_22843[(15)] = inst_22804);
return statearr_22843;
})();if(cljs.core.truth_(inst_22805))
{var statearr_22844_22875 = state_22816__$1;(statearr_22844_22875[(1)] = (21));
} else
{var statearr_22845_22876 = state_22816__$1;(statearr_22845_22876[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (5)))
{var inst_22760 = cljs.core.async.close_BANG_.call(null,out);var state_22816__$1 = state_22816;var statearr_22846_22877 = state_22816__$1;(statearr_22846_22877[(2)] = inst_22760);
(statearr_22846_22877[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (14)))
{var inst_22782 = (state_22816[(7)]);var inst_22784 = cljs.core.chunked_seq_QMARK_.call(null,inst_22782);var state_22816__$1 = state_22816;if(inst_22784)
{var statearr_22847_22878 = state_22816__$1;(statearr_22847_22878[(1)] = (17));
} else
{var statearr_22848_22879 = state_22816__$1;(statearr_22848_22879[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (16)))
{var inst_22800 = (state_22816[(2)]);var state_22816__$1 = state_22816;var statearr_22849_22880 = state_22816__$1;(statearr_22849_22880[(2)] = inst_22800);
(statearr_22849_22880[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22817 === (10)))
{var inst_22771 = (state_22816[(8)]);var inst_22769 = (state_22816[(11)]);var inst_22776 = cljs.core._nth.call(null,inst_22769,inst_22771);var state_22816__$1 = state_22816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22816__$1,(13),out,inst_22776);
} else
{if((state_val_22817 === (18)))
{var inst_22782 = (state_22816[(7)]);var inst_22791 = cljs.core.first.call(null,inst_22782);var state_22816__$1 = state_22816;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22816__$1,(20),out,inst_22791);
} else
{if((state_val_22817 === (8)))
{var inst_22771 = (state_22816[(8)]);var inst_22770 = (state_22816[(10)]);var inst_22773 = (inst_22771 < inst_22770);var inst_22774 = inst_22773;var state_22816__$1 = state_22816;if(cljs.core.truth_(inst_22774))
{var statearr_22850_22881 = state_22816__$1;(statearr_22850_22881[(1)] = (10));
} else
{var statearr_22851_22882 = state_22816__$1;(statearr_22851_22882[(1)] = (11));
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
}
}
}
}
});})(c__13373__auto__))
;return ((function (switch__13358__auto__,c__13373__auto__){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22855[(0)] = state_machine__13359__auto__);
(statearr_22855[(1)] = (1));
return statearr_22855;
});
var state_machine__13359__auto____1 = (function (state_22816){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22816);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22856){if((e22856 instanceof Object))
{var ex__13362__auto__ = e22856;var statearr_22857_22883 = state_22816;(statearr_22857_22883[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22856;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22884 = state_22816;
state_22816 = G__22884;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22816){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto__))
})();var state__13375__auto__ = (function (){var statearr_22858 = f__13374__auto__.call(null);(statearr_22858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto__);
return statearr_22858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto__))
);
return c__13373__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13373__auto___22981 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___22981,out){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___22981,out){
return (function (state_22956){var state_val_22957 = (state_22956[(1)]);if((state_val_22957 === (7)))
{var inst_22951 = (state_22956[(2)]);var state_22956__$1 = state_22956;var statearr_22958_22982 = state_22956__$1;(statearr_22958_22982[(2)] = inst_22951);
(statearr_22958_22982[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (1)))
{var inst_22933 = null;var state_22956__$1 = (function (){var statearr_22959 = state_22956;(statearr_22959[(7)] = inst_22933);
return statearr_22959;
})();var statearr_22960_22983 = state_22956__$1;(statearr_22960_22983[(2)] = null);
(statearr_22960_22983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (4)))
{var inst_22936 = (state_22956[(8)]);var inst_22936__$1 = (state_22956[(2)]);var inst_22937 = (inst_22936__$1 == null);var inst_22938 = cljs.core.not.call(null,inst_22937);var state_22956__$1 = (function (){var statearr_22961 = state_22956;(statearr_22961[(8)] = inst_22936__$1);
return statearr_22961;
})();if(inst_22938)
{var statearr_22962_22984 = state_22956__$1;(statearr_22962_22984[(1)] = (5));
} else
{var statearr_22963_22985 = state_22956__$1;(statearr_22963_22985[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (6)))
{var state_22956__$1 = state_22956;var statearr_22964_22986 = state_22956__$1;(statearr_22964_22986[(2)] = null);
(statearr_22964_22986[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (3)))
{var inst_22953 = (state_22956[(2)]);var inst_22954 = cljs.core.async.close_BANG_.call(null,out);var state_22956__$1 = (function (){var statearr_22965 = state_22956;(statearr_22965[(9)] = inst_22953);
return statearr_22965;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22956__$1,inst_22954);
} else
{if((state_val_22957 === (2)))
{var state_22956__$1 = state_22956;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22956__$1,(4),ch);
} else
{if((state_val_22957 === (11)))
{var inst_22936 = (state_22956[(8)]);var inst_22945 = (state_22956[(2)]);var inst_22933 = inst_22936;var state_22956__$1 = (function (){var statearr_22966 = state_22956;(statearr_22966[(10)] = inst_22945);
(statearr_22966[(7)] = inst_22933);
return statearr_22966;
})();var statearr_22967_22987 = state_22956__$1;(statearr_22967_22987[(2)] = null);
(statearr_22967_22987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (9)))
{var inst_22936 = (state_22956[(8)]);var state_22956__$1 = state_22956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22956__$1,(11),out,inst_22936);
} else
{if((state_val_22957 === (5)))
{var inst_22936 = (state_22956[(8)]);var inst_22933 = (state_22956[(7)]);var inst_22940 = cljs.core._EQ_.call(null,inst_22936,inst_22933);var state_22956__$1 = state_22956;if(inst_22940)
{var statearr_22969_22988 = state_22956__$1;(statearr_22969_22988[(1)] = (8));
} else
{var statearr_22970_22989 = state_22956__$1;(statearr_22970_22989[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (10)))
{var inst_22948 = (state_22956[(2)]);var state_22956__$1 = state_22956;var statearr_22971_22990 = state_22956__$1;(statearr_22971_22990[(2)] = inst_22948);
(statearr_22971_22990[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (8)))
{var inst_22933 = (state_22956[(7)]);var tmp22968 = inst_22933;var inst_22933__$1 = tmp22968;var state_22956__$1 = (function (){var statearr_22972 = state_22956;(statearr_22972[(7)] = inst_22933__$1);
return statearr_22972;
})();var statearr_22973_22991 = state_22956__$1;(statearr_22973_22991[(2)] = null);
(statearr_22973_22991[(1)] = (2));
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
});})(c__13373__auto___22981,out))
;return ((function (switch__13358__auto__,c__13373__auto___22981,out){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_22977 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22977[(0)] = state_machine__13359__auto__);
(statearr_22977[(1)] = (1));
return statearr_22977;
});
var state_machine__13359__auto____1 = (function (state_22956){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_22956);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e22978){if((e22978 instanceof Object))
{var ex__13362__auto__ = e22978;var statearr_22979_22992 = state_22956;(statearr_22979_22992[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22956);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22978;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22993 = state_22956;
state_22956 = G__22993;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_22956){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_22956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___22981,out))
})();var state__13375__auto__ = (function (){var statearr_22980 = f__13374__auto__.call(null);(statearr_22980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___22981);
return statearr_22980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___22981,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13373__auto___23128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___23128,out){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___23128,out){
return (function (state_23098){var state_val_23099 = (state_23098[(1)]);if((state_val_23099 === (7)))
{var inst_23094 = (state_23098[(2)]);var state_23098__$1 = state_23098;var statearr_23100_23129 = state_23098__$1;(statearr_23100_23129[(2)] = inst_23094);
(statearr_23100_23129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (1)))
{var inst_23061 = (new Array(n));var inst_23062 = inst_23061;var inst_23063 = (0);var state_23098__$1 = (function (){var statearr_23101 = state_23098;(statearr_23101[(7)] = inst_23063);
(statearr_23101[(8)] = inst_23062);
return statearr_23101;
})();var statearr_23102_23130 = state_23098__$1;(statearr_23102_23130[(2)] = null);
(statearr_23102_23130[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (4)))
{var inst_23066 = (state_23098[(9)]);var inst_23066__$1 = (state_23098[(2)]);var inst_23067 = (inst_23066__$1 == null);var inst_23068 = cljs.core.not.call(null,inst_23067);var state_23098__$1 = (function (){var statearr_23103 = state_23098;(statearr_23103[(9)] = inst_23066__$1);
return statearr_23103;
})();if(inst_23068)
{var statearr_23104_23131 = state_23098__$1;(statearr_23104_23131[(1)] = (5));
} else
{var statearr_23105_23132 = state_23098__$1;(statearr_23105_23132[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (15)))
{var inst_23088 = (state_23098[(2)]);var state_23098__$1 = state_23098;var statearr_23106_23133 = state_23098__$1;(statearr_23106_23133[(2)] = inst_23088);
(statearr_23106_23133[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (13)))
{var state_23098__$1 = state_23098;var statearr_23107_23134 = state_23098__$1;(statearr_23107_23134[(2)] = null);
(statearr_23107_23134[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (6)))
{var inst_23063 = (state_23098[(7)]);var inst_23084 = (inst_23063 > (0));var state_23098__$1 = state_23098;if(cljs.core.truth_(inst_23084))
{var statearr_23108_23135 = state_23098__$1;(statearr_23108_23135[(1)] = (12));
} else
{var statearr_23109_23136 = state_23098__$1;(statearr_23109_23136[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (3)))
{var inst_23096 = (state_23098[(2)]);var state_23098__$1 = state_23098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23098__$1,inst_23096);
} else
{if((state_val_23099 === (12)))
{var inst_23062 = (state_23098[(8)]);var inst_23086 = cljs.core.vec.call(null,inst_23062);var state_23098__$1 = state_23098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23098__$1,(15),out,inst_23086);
} else
{if((state_val_23099 === (2)))
{var state_23098__$1 = state_23098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23098__$1,(4),ch);
} else
{if((state_val_23099 === (11)))
{var inst_23078 = (state_23098[(2)]);var inst_23079 = (new Array(n));var inst_23062 = inst_23079;var inst_23063 = (0);var state_23098__$1 = (function (){var statearr_23110 = state_23098;(statearr_23110[(10)] = inst_23078);
(statearr_23110[(7)] = inst_23063);
(statearr_23110[(8)] = inst_23062);
return statearr_23110;
})();var statearr_23111_23137 = state_23098__$1;(statearr_23111_23137[(2)] = null);
(statearr_23111_23137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (9)))
{var inst_23062 = (state_23098[(8)]);var inst_23076 = cljs.core.vec.call(null,inst_23062);var state_23098__$1 = state_23098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23098__$1,(11),out,inst_23076);
} else
{if((state_val_23099 === (5)))
{var inst_23066 = (state_23098[(9)]);var inst_23063 = (state_23098[(7)]);var inst_23062 = (state_23098[(8)]);var inst_23071 = (state_23098[(11)]);var inst_23070 = (inst_23062[inst_23063] = inst_23066);var inst_23071__$1 = (inst_23063 + (1));var inst_23072 = (inst_23071__$1 < n);var state_23098__$1 = (function (){var statearr_23112 = state_23098;(statearr_23112[(12)] = inst_23070);
(statearr_23112[(11)] = inst_23071__$1);
return statearr_23112;
})();if(cljs.core.truth_(inst_23072))
{var statearr_23113_23138 = state_23098__$1;(statearr_23113_23138[(1)] = (8));
} else
{var statearr_23114_23139 = state_23098__$1;(statearr_23114_23139[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (14)))
{var inst_23091 = (state_23098[(2)]);var inst_23092 = cljs.core.async.close_BANG_.call(null,out);var state_23098__$1 = (function (){var statearr_23116 = state_23098;(statearr_23116[(13)] = inst_23091);
return statearr_23116;
})();var statearr_23117_23140 = state_23098__$1;(statearr_23117_23140[(2)] = inst_23092);
(statearr_23117_23140[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (10)))
{var inst_23082 = (state_23098[(2)]);var state_23098__$1 = state_23098;var statearr_23118_23141 = state_23098__$1;(statearr_23118_23141[(2)] = inst_23082);
(statearr_23118_23141[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23099 === (8)))
{var inst_23062 = (state_23098[(8)]);var inst_23071 = (state_23098[(11)]);var tmp23115 = inst_23062;var inst_23062__$1 = tmp23115;var inst_23063 = inst_23071;var state_23098__$1 = (function (){var statearr_23119 = state_23098;(statearr_23119[(7)] = inst_23063);
(statearr_23119[(8)] = inst_23062__$1);
return statearr_23119;
})();var statearr_23120_23142 = state_23098__$1;(statearr_23120_23142[(2)] = null);
(statearr_23120_23142[(1)] = (2));
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
});})(c__13373__auto___23128,out))
;return ((function (switch__13358__auto__,c__13373__auto___23128,out){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_23124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23124[(0)] = state_machine__13359__auto__);
(statearr_23124[(1)] = (1));
return statearr_23124;
});
var state_machine__13359__auto____1 = (function (state_23098){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_23098);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e23125){if((e23125 instanceof Object))
{var ex__13362__auto__ = e23125;var statearr_23126_23143 = state_23098;(statearr_23126_23143[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23098);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23144 = state_23098;
state_23098 = G__23144;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_23098){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_23098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___23128,out))
})();var state__13375__auto__ = (function (){var statearr_23127 = f__13374__auto__.call(null);(statearr_23127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___23128);
return statearr_23127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___23128,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13373__auto___23287 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__13373__auto___23287,out){
return (function (){var f__13374__auto__ = (function (){var switch__13358__auto__ = ((function (c__13373__auto___23287,out){
return (function (state_23257){var state_val_23258 = (state_23257[(1)]);if((state_val_23258 === (7)))
{var inst_23253 = (state_23257[(2)]);var state_23257__$1 = state_23257;var statearr_23259_23288 = state_23257__$1;(statearr_23259_23288[(2)] = inst_23253);
(statearr_23259_23288[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (1)))
{var inst_23216 = [];var inst_23217 = inst_23216;var inst_23218 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_23257__$1 = (function (){var statearr_23260 = state_23257;(statearr_23260[(7)] = inst_23217);
(statearr_23260[(8)] = inst_23218);
return statearr_23260;
})();var statearr_23261_23289 = state_23257__$1;(statearr_23261_23289[(2)] = null);
(statearr_23261_23289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (4)))
{var inst_23221 = (state_23257[(9)]);var inst_23221__$1 = (state_23257[(2)]);var inst_23222 = (inst_23221__$1 == null);var inst_23223 = cljs.core.not.call(null,inst_23222);var state_23257__$1 = (function (){var statearr_23262 = state_23257;(statearr_23262[(9)] = inst_23221__$1);
return statearr_23262;
})();if(inst_23223)
{var statearr_23263_23290 = state_23257__$1;(statearr_23263_23290[(1)] = (5));
} else
{var statearr_23264_23291 = state_23257__$1;(statearr_23264_23291[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (15)))
{var inst_23247 = (state_23257[(2)]);var state_23257__$1 = state_23257;var statearr_23265_23292 = state_23257__$1;(statearr_23265_23292[(2)] = inst_23247);
(statearr_23265_23292[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (13)))
{var state_23257__$1 = state_23257;var statearr_23266_23293 = state_23257__$1;(statearr_23266_23293[(2)] = null);
(statearr_23266_23293[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (6)))
{var inst_23217 = (state_23257[(7)]);var inst_23242 = inst_23217.length;var inst_23243 = (inst_23242 > (0));var state_23257__$1 = state_23257;if(cljs.core.truth_(inst_23243))
{var statearr_23267_23294 = state_23257__$1;(statearr_23267_23294[(1)] = (12));
} else
{var statearr_23268_23295 = state_23257__$1;(statearr_23268_23295[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (3)))
{var inst_23255 = (state_23257[(2)]);var state_23257__$1 = state_23257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23257__$1,inst_23255);
} else
{if((state_val_23258 === (12)))
{var inst_23217 = (state_23257[(7)]);var inst_23245 = cljs.core.vec.call(null,inst_23217);var state_23257__$1 = state_23257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23257__$1,(15),out,inst_23245);
} else
{if((state_val_23258 === (2)))
{var state_23257__$1 = state_23257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23257__$1,(4),ch);
} else
{if((state_val_23258 === (11)))
{var inst_23225 = (state_23257[(10)]);var inst_23221 = (state_23257[(9)]);var inst_23235 = (state_23257[(2)]);var inst_23236 = [];var inst_23237 = inst_23236.push(inst_23221);var inst_23217 = inst_23236;var inst_23218 = inst_23225;var state_23257__$1 = (function (){var statearr_23269 = state_23257;(statearr_23269[(7)] = inst_23217);
(statearr_23269[(11)] = inst_23235);
(statearr_23269[(12)] = inst_23237);
(statearr_23269[(8)] = inst_23218);
return statearr_23269;
})();var statearr_23270_23296 = state_23257__$1;(statearr_23270_23296[(2)] = null);
(statearr_23270_23296[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (9)))
{var inst_23217 = (state_23257[(7)]);var inst_23233 = cljs.core.vec.call(null,inst_23217);var state_23257__$1 = state_23257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23257__$1,(11),out,inst_23233);
} else
{if((state_val_23258 === (5)))
{var inst_23225 = (state_23257[(10)]);var inst_23221 = (state_23257[(9)]);var inst_23218 = (state_23257[(8)]);var inst_23225__$1 = f.call(null,inst_23221);var inst_23226 = cljs.core._EQ_.call(null,inst_23225__$1,inst_23218);var inst_23227 = cljs.core.keyword_identical_QMARK_.call(null,inst_23218,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_23228 = (inst_23226) || (inst_23227);var state_23257__$1 = (function (){var statearr_23271 = state_23257;(statearr_23271[(10)] = inst_23225__$1);
return statearr_23271;
})();if(cljs.core.truth_(inst_23228))
{var statearr_23272_23297 = state_23257__$1;(statearr_23272_23297[(1)] = (8));
} else
{var statearr_23273_23298 = state_23257__$1;(statearr_23273_23298[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (14)))
{var inst_23250 = (state_23257[(2)]);var inst_23251 = cljs.core.async.close_BANG_.call(null,out);var state_23257__$1 = (function (){var statearr_23275 = state_23257;(statearr_23275[(13)] = inst_23250);
return statearr_23275;
})();var statearr_23276_23299 = state_23257__$1;(statearr_23276_23299[(2)] = inst_23251);
(statearr_23276_23299[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (10)))
{var inst_23240 = (state_23257[(2)]);var state_23257__$1 = state_23257;var statearr_23277_23300 = state_23257__$1;(statearr_23277_23300[(2)] = inst_23240);
(statearr_23277_23300[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23258 === (8)))
{var inst_23217 = (state_23257[(7)]);var inst_23225 = (state_23257[(10)]);var inst_23221 = (state_23257[(9)]);var inst_23230 = inst_23217.push(inst_23221);var tmp23274 = inst_23217;var inst_23217__$1 = tmp23274;var inst_23218 = inst_23225;var state_23257__$1 = (function (){var statearr_23278 = state_23257;(statearr_23278[(14)] = inst_23230);
(statearr_23278[(7)] = inst_23217__$1);
(statearr_23278[(8)] = inst_23218);
return statearr_23278;
})();var statearr_23279_23301 = state_23257__$1;(statearr_23279_23301[(2)] = null);
(statearr_23279_23301[(1)] = (2));
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
});})(c__13373__auto___23287,out))
;return ((function (switch__13358__auto__,c__13373__auto___23287,out){
return (function() {
var state_machine__13359__auto__ = null;
var state_machine__13359__auto____0 = (function (){var statearr_23283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23283[(0)] = state_machine__13359__auto__);
(statearr_23283[(1)] = (1));
return statearr_23283;
});
var state_machine__13359__auto____1 = (function (state_23257){while(true){
var ret_value__13360__auto__ = (function (){try{while(true){
var result__13361__auto__ = switch__13358__auto__.call(null,state_23257);if(cljs.core.keyword_identical_QMARK_.call(null,result__13361__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__13361__auto__;
}
break;
}
}catch (e23284){if((e23284 instanceof Object))
{var ex__13362__auto__ = e23284;var statearr_23285_23302 = state_23257;(statearr_23285_23302[(5)] = ex__13362__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23284;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23303 = state_23257;
state_23257 = G__23303;
continue;
}
} else
{return ret_value__13360__auto__;
}
break;
}
});
state_machine__13359__auto__ = function(state_23257){
switch(arguments.length){
case 0:
return state_machine__13359__auto____0.call(this);
case 1:
return state_machine__13359__auto____1.call(this,state_23257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13359__auto____0;
state_machine__13359__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13359__auto____1;
return state_machine__13359__auto__;
})()
;})(switch__13358__auto__,c__13373__auto___23287,out))
})();var state__13375__auto__ = (function (){var statearr_23286 = f__13374__auto__.call(null);(statearr_23286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13373__auto___23287);
return statearr_23286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13375__auto__);
});})(c__13373__auto___23287,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map