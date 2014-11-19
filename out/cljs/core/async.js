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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12076 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12076 = (function (f,fn_handler,meta12077){
this.f = f;
this.fn_handler = fn_handler;
this.meta12077 = meta12077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12076.cljs$lang$type = true;
cljs.core.async.t12076.cljs$lang$ctorStr = "cljs.core.async/t12076";
cljs.core.async.t12076.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12076");
});
cljs.core.async.t12076.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12078){var self__ = this;
var _12078__$1 = this;return self__.meta12077;
});
cljs.core.async.t12076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12078,meta12077__$1){var self__ = this;
var _12078__$1 = this;return (new cljs.core.async.t12076(self__.f,self__.fn_handler,meta12077__$1));
});
cljs.core.async.__GT_t12076 = (function __GT_t12076(f__$1,fn_handler__$1,meta12077){return (new cljs.core.async.t12076(f__$1,fn_handler__$1,meta12077));
});
}
return (new cljs.core.async.t12076(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12080 = buff;if(G__12080)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12080.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12080.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12080);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12080);
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
{var val_12081 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12081);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12081,ret){
return (function (){return fn1.call(null,val_12081);
});})(val_12081,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12082 = n;var x_12083 = (0);while(true){
if((x_12083 < n__4510__auto___12082))
{(a[x_12083] = (0));
{
var G__12084 = (x_12083 + (1));
x_12083 = G__12084;
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
var G__12085 = (i + (1));
i = G__12085;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12089 = (function (flag,alt_flag,meta12090){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12090 = meta12090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12089.cljs$lang$type = true;
cljs.core.async.t12089.cljs$lang$ctorStr = "cljs.core.async/t12089";
cljs.core.async.t12089.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12089");
});})(flag))
;
cljs.core.async.t12089.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12091){var self__ = this;
var _12091__$1 = this;return self__.meta12090;
});})(flag))
;
cljs.core.async.t12089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12091,meta12090__$1){var self__ = this;
var _12091__$1 = this;return (new cljs.core.async.t12089(self__.flag,self__.alt_flag,meta12090__$1));
});})(flag))
;
cljs.core.async.__GT_t12089 = ((function (flag){
return (function __GT_t12089(flag__$1,alt_flag__$1,meta12090){return (new cljs.core.async.t12089(flag__$1,alt_flag__$1,meta12090));
});})(flag))
;
}
return (new cljs.core.async.t12089(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12095 = (function (cb,flag,alt_handler,meta12096){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12096 = meta12096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12095.cljs$lang$type = true;
cljs.core.async.t12095.cljs$lang$ctorStr = "cljs.core.async/t12095";
cljs.core.async.t12095.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12095");
});
cljs.core.async.t12095.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12097){var self__ = this;
var _12097__$1 = this;return self__.meta12096;
});
cljs.core.async.t12095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12097,meta12096__$1){var self__ = this;
var _12097__$1 = this;return (new cljs.core.async.t12095(self__.cb,self__.flag,self__.alt_handler,meta12096__$1));
});
cljs.core.async.__GT_t12095 = (function __GT_t12095(cb__$1,flag__$1,alt_handler__$1,meta12096){return (new cljs.core.async.t12095(cb__$1,flag__$1,alt_handler__$1,meta12096));
});
}
return (new cljs.core.async.t12095(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12098_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12098_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12099_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12099_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12100 = (i + (1));
i = G__12100;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
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
var alts_BANG___delegate = function (ports,p__12101){var map__12103 = p__12101;var map__12103__$1 = ((cljs.core.seq_QMARK_.call(null,map__12103))?cljs.core.apply.call(null,cljs.core.hash_map,map__12103):map__12103);var opts = map__12103__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12101 = null;if (arguments.length > 1) {
  p__12101 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12101);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12104){
var ports = cljs.core.first(arglist__12104);
var p__12101 = cljs.core.rest(arglist__12104);
return alts_BANG___delegate(ports,p__12101);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5823__auto___12199 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12199){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12199){
return (function (state_12175){var state_val_12176 = (state_12175[(1)]);if((state_val_12176 === (7)))
{var inst_12171 = (state_12175[(2)]);var state_12175__$1 = state_12175;var statearr_12177_12200 = state_12175__$1;(statearr_12177_12200[(2)] = inst_12171);
(statearr_12177_12200[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (1)))
{var state_12175__$1 = state_12175;var statearr_12178_12201 = state_12175__$1;(statearr_12178_12201[(2)] = null);
(statearr_12178_12201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (4)))
{var inst_12154 = (state_12175[(7)]);var inst_12154__$1 = (state_12175[(2)]);var inst_12155 = (inst_12154__$1 == null);var state_12175__$1 = (function (){var statearr_12179 = state_12175;(statearr_12179[(7)] = inst_12154__$1);
return statearr_12179;
})();if(cljs.core.truth_(inst_12155))
{var statearr_12180_12202 = state_12175__$1;(statearr_12180_12202[(1)] = (5));
} else
{var statearr_12181_12203 = state_12175__$1;(statearr_12181_12203[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (13)))
{var state_12175__$1 = state_12175;var statearr_12182_12204 = state_12175__$1;(statearr_12182_12204[(2)] = null);
(statearr_12182_12204[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (6)))
{var inst_12154 = (state_12175[(7)]);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12175__$1,(11),to,inst_12154);
} else
{if((state_val_12176 === (3)))
{var inst_12173 = (state_12175[(2)]);var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12175__$1,inst_12173);
} else
{if((state_val_12176 === (12)))
{var state_12175__$1 = state_12175;var statearr_12183_12205 = state_12175__$1;(statearr_12183_12205[(2)] = null);
(statearr_12183_12205[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (2)))
{var state_12175__$1 = state_12175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12175__$1,(4),from);
} else
{if((state_val_12176 === (11)))
{var inst_12164 = (state_12175[(2)]);var state_12175__$1 = state_12175;if(cljs.core.truth_(inst_12164))
{var statearr_12184_12206 = state_12175__$1;(statearr_12184_12206[(1)] = (12));
} else
{var statearr_12185_12207 = state_12175__$1;(statearr_12185_12207[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (9)))
{var state_12175__$1 = state_12175;var statearr_12186_12208 = state_12175__$1;(statearr_12186_12208[(2)] = null);
(statearr_12186_12208[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (5)))
{var state_12175__$1 = state_12175;if(cljs.core.truth_(close_QMARK_))
{var statearr_12187_12209 = state_12175__$1;(statearr_12187_12209[(1)] = (8));
} else
{var statearr_12188_12210 = state_12175__$1;(statearr_12188_12210[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (14)))
{var inst_12169 = (state_12175[(2)]);var state_12175__$1 = state_12175;var statearr_12189_12211 = state_12175__$1;(statearr_12189_12211[(2)] = inst_12169);
(statearr_12189_12211[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (10)))
{var inst_12161 = (state_12175[(2)]);var state_12175__$1 = state_12175;var statearr_12190_12212 = state_12175__$1;(statearr_12190_12212[(2)] = inst_12161);
(statearr_12190_12212[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12176 === (8)))
{var inst_12158 = cljs.core.async.close_BANG_.call(null,to);var state_12175__$1 = state_12175;var statearr_12191_12213 = state_12175__$1;(statearr_12191_12213[(2)] = inst_12158);
(statearr_12191_12213[(1)] = (10));
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
});})(c__5823__auto___12199))
;return ((function (switch__5808__auto__,c__5823__auto___12199){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12195 = [null,null,null,null,null,null,null,null];(statearr_12195[(0)] = state_machine__5809__auto__);
(statearr_12195[(1)] = (1));
return statearr_12195;
});
var state_machine__5809__auto____1 = (function (state_12175){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12196){if((e12196 instanceof Object))
{var ex__5812__auto__ = e12196;var statearr_12197_12214 = state_12175;(statearr_12197_12214[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12196;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12215 = state_12175;
state_12175 = G__12215;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12175){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12199))
})();var state__5825__auto__ = (function (){var statearr_12198 = f__5824__auto__.call(null);(statearr_12198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12199);
return statearr_12198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12199))
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
return (function (p__12399){var vec__12400 = p__12399;var v = cljs.core.nth.call(null,vec__12400,(0),null);var p = cljs.core.nth.call(null,vec__12400,(1),null);var job = vec__12400;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5823__auto___12582 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12582,res,vec__12400,v,p,job,jobs,results){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12582,res,vec__12400,v,p,job,jobs,results){
return (function (state_12405){var state_val_12406 = (state_12405[(1)]);if((state_val_12406 === (2)))
{var inst_12402 = (state_12405[(2)]);var inst_12403 = cljs.core.async.close_BANG_.call(null,res);var state_12405__$1 = (function (){var statearr_12407 = state_12405;(statearr_12407[(7)] = inst_12402);
return statearr_12407;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12405__$1,inst_12403);
} else
{if((state_val_12406 === (1)))
{var state_12405__$1 = state_12405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12405__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5823__auto___12582,res,vec__12400,v,p,job,jobs,results))
;return ((function (switch__5808__auto__,c__5823__auto___12582,res,vec__12400,v,p,job,jobs,results){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12411 = [null,null,null,null,null,null,null,null];(statearr_12411[(0)] = state_machine__5809__auto__);
(statearr_12411[(1)] = (1));
return statearr_12411;
});
var state_machine__5809__auto____1 = (function (state_12405){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12405);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12412){if((e12412 instanceof Object))
{var ex__5812__auto__ = e12412;var statearr_12413_12583 = state_12405;(statearr_12413_12583[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12412;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12584 = state_12405;
state_12405 = G__12584;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12405){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12582,res,vec__12400,v,p,job,jobs,results))
})();var state__5825__auto__ = (function (){var statearr_12414 = f__5824__auto__.call(null);(statearr_12414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12582);
return statearr_12414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12582,res,vec__12400,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12415){var vec__12416 = p__12415;var v = cljs.core.nth.call(null,vec__12416,(0),null);var p = cljs.core.nth.call(null,vec__12416,(1),null);var job = vec__12416;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___12585 = n;var __12586 = (0);while(true){
if((__12586 < n__4510__auto___12585))
{var G__12417_12587 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12417_12587) {
case "async":
var c__5823__auto___12589 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12586,c__5823__auto___12589,G__12417_12587,n__4510__auto___12585,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (__12586,c__5823__auto___12589,G__12417_12587,n__4510__auto___12585,jobs,results,process,async){
return (function (state_12430){var state_val_12431 = (state_12430[(1)]);if((state_val_12431 === (7)))
{var inst_12426 = (state_12430[(2)]);var state_12430__$1 = state_12430;var statearr_12432_12590 = state_12430__$1;(statearr_12432_12590[(2)] = inst_12426);
(statearr_12432_12590[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12431 === (6)))
{var state_12430__$1 = state_12430;var statearr_12433_12591 = state_12430__$1;(statearr_12433_12591[(2)] = null);
(statearr_12433_12591[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12431 === (5)))
{var state_12430__$1 = state_12430;var statearr_12434_12592 = state_12430__$1;(statearr_12434_12592[(2)] = null);
(statearr_12434_12592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12431 === (4)))
{var inst_12420 = (state_12430[(2)]);var inst_12421 = async.call(null,inst_12420);var state_12430__$1 = state_12430;if(cljs.core.truth_(inst_12421))
{var statearr_12435_12593 = state_12430__$1;(statearr_12435_12593[(1)] = (5));
} else
{var statearr_12436_12594 = state_12430__$1;(statearr_12436_12594[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12431 === (3)))
{var inst_12428 = (state_12430[(2)]);var state_12430__$1 = state_12430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12430__$1,inst_12428);
} else
{if((state_val_12431 === (2)))
{var state_12430__$1 = state_12430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12430__$1,(4),jobs);
} else
{if((state_val_12431 === (1)))
{var state_12430__$1 = state_12430;var statearr_12437_12595 = state_12430__$1;(statearr_12437_12595[(2)] = null);
(statearr_12437_12595[(1)] = (2));
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
});})(__12586,c__5823__auto___12589,G__12417_12587,n__4510__auto___12585,jobs,results,process,async))
;return ((function (__12586,switch__5808__auto__,c__5823__auto___12589,G__12417_12587,n__4510__auto___12585,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12441 = [null,null,null,null,null,null,null];(statearr_12441[(0)] = state_machine__5809__auto__);
(statearr_12441[(1)] = (1));
return statearr_12441;
});
var state_machine__5809__auto____1 = (function (state_12430){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12442){if((e12442 instanceof Object))
{var ex__5812__auto__ = e12442;var statearr_12443_12596 = state_12430;(statearr_12443_12596[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12442;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12597 = state_12430;
state_12430 = G__12597;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12430){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(__12586,switch__5808__auto__,c__5823__auto___12589,G__12417_12587,n__4510__auto___12585,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12444 = f__5824__auto__.call(null);(statearr_12444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12589);
return statearr_12444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(__12586,c__5823__auto___12589,G__12417_12587,n__4510__auto___12585,jobs,results,process,async))
);

break;
case "compute":
var c__5823__auto___12598 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12586,c__5823__auto___12598,G__12417_12587,n__4510__auto___12585,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (__12586,c__5823__auto___12598,G__12417_12587,n__4510__auto___12585,jobs,results,process,async){
return (function (state_12457){var state_val_12458 = (state_12457[(1)]);if((state_val_12458 === (7)))
{var inst_12453 = (state_12457[(2)]);var state_12457__$1 = state_12457;var statearr_12459_12599 = state_12457__$1;(statearr_12459_12599[(2)] = inst_12453);
(statearr_12459_12599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12458 === (6)))
{var state_12457__$1 = state_12457;var statearr_12460_12600 = state_12457__$1;(statearr_12460_12600[(2)] = null);
(statearr_12460_12600[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12458 === (5)))
{var state_12457__$1 = state_12457;var statearr_12461_12601 = state_12457__$1;(statearr_12461_12601[(2)] = null);
(statearr_12461_12601[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12458 === (4)))
{var inst_12447 = (state_12457[(2)]);var inst_12448 = process.call(null,inst_12447);var state_12457__$1 = state_12457;if(cljs.core.truth_(inst_12448))
{var statearr_12462_12602 = state_12457__$1;(statearr_12462_12602[(1)] = (5));
} else
{var statearr_12463_12603 = state_12457__$1;(statearr_12463_12603[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12458 === (3)))
{var inst_12455 = (state_12457[(2)]);var state_12457__$1 = state_12457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12457__$1,inst_12455);
} else
{if((state_val_12458 === (2)))
{var state_12457__$1 = state_12457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12457__$1,(4),jobs);
} else
{if((state_val_12458 === (1)))
{var state_12457__$1 = state_12457;var statearr_12464_12604 = state_12457__$1;(statearr_12464_12604[(2)] = null);
(statearr_12464_12604[(1)] = (2));
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
});})(__12586,c__5823__auto___12598,G__12417_12587,n__4510__auto___12585,jobs,results,process,async))
;return ((function (__12586,switch__5808__auto__,c__5823__auto___12598,G__12417_12587,n__4510__auto___12585,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12468 = [null,null,null,null,null,null,null];(statearr_12468[(0)] = state_machine__5809__auto__);
(statearr_12468[(1)] = (1));
return statearr_12468;
});
var state_machine__5809__auto____1 = (function (state_12457){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12469){if((e12469 instanceof Object))
{var ex__5812__auto__ = e12469;var statearr_12470_12605 = state_12457;(statearr_12470_12605[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12469;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12606 = state_12457;
state_12457 = G__12606;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12457){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(__12586,switch__5808__auto__,c__5823__auto___12598,G__12417_12587,n__4510__auto___12585,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12471 = f__5824__auto__.call(null);(statearr_12471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12598);
return statearr_12471;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(__12586,c__5823__auto___12598,G__12417_12587,n__4510__auto___12585,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12607 = (__12586 + (1));
__12586 = G__12607;
continue;
}
} else
{}
break;
}
var c__5823__auto___12608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12608,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12608,jobs,results,process,async){
return (function (state_12493){var state_val_12494 = (state_12493[(1)]);if((state_val_12494 === (9)))
{var inst_12486 = (state_12493[(2)]);var state_12493__$1 = (function (){var statearr_12495 = state_12493;(statearr_12495[(7)] = inst_12486);
return statearr_12495;
})();var statearr_12496_12609 = state_12493__$1;(statearr_12496_12609[(2)] = null);
(statearr_12496_12609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (8)))
{var inst_12479 = (state_12493[(8)]);var inst_12484 = (state_12493[(2)]);var state_12493__$1 = (function (){var statearr_12497 = state_12493;(statearr_12497[(9)] = inst_12484);
return statearr_12497;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12493__$1,(9),results,inst_12479);
} else
{if((state_val_12494 === (7)))
{var inst_12489 = (state_12493[(2)]);var state_12493__$1 = state_12493;var statearr_12498_12610 = state_12493__$1;(statearr_12498_12610[(2)] = inst_12489);
(statearr_12498_12610[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (6)))
{var inst_12474 = (state_12493[(10)]);var inst_12479 = (state_12493[(8)]);var inst_12479__$1 = cljs.core.async.chan.call(null,(1));var inst_12480 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12481 = [inst_12474,inst_12479__$1];var inst_12482 = (new cljs.core.PersistentVector(null,2,(5),inst_12480,inst_12481,null));var state_12493__$1 = (function (){var statearr_12499 = state_12493;(statearr_12499[(8)] = inst_12479__$1);
return statearr_12499;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12493__$1,(8),jobs,inst_12482);
} else
{if((state_val_12494 === (5)))
{var inst_12477 = cljs.core.async.close_BANG_.call(null,jobs);var state_12493__$1 = state_12493;var statearr_12500_12611 = state_12493__$1;(statearr_12500_12611[(2)] = inst_12477);
(statearr_12500_12611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (4)))
{var inst_12474 = (state_12493[(10)]);var inst_12474__$1 = (state_12493[(2)]);var inst_12475 = (inst_12474__$1 == null);var state_12493__$1 = (function (){var statearr_12501 = state_12493;(statearr_12501[(10)] = inst_12474__$1);
return statearr_12501;
})();if(cljs.core.truth_(inst_12475))
{var statearr_12502_12612 = state_12493__$1;(statearr_12502_12612[(1)] = (5));
} else
{var statearr_12503_12613 = state_12493__$1;(statearr_12503_12613[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12494 === (3)))
{var inst_12491 = (state_12493[(2)]);var state_12493__$1 = state_12493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12493__$1,inst_12491);
} else
{if((state_val_12494 === (2)))
{var state_12493__$1 = state_12493;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12493__$1,(4),from);
} else
{if((state_val_12494 === (1)))
{var state_12493__$1 = state_12493;var statearr_12504_12614 = state_12493__$1;(statearr_12504_12614[(2)] = null);
(statearr_12504_12614[(1)] = (2));
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
});})(c__5823__auto___12608,jobs,results,process,async))
;return ((function (switch__5808__auto__,c__5823__auto___12608,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12508 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12508[(0)] = state_machine__5809__auto__);
(statearr_12508[(1)] = (1));
return statearr_12508;
});
var state_machine__5809__auto____1 = (function (state_12493){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12509){if((e12509 instanceof Object))
{var ex__5812__auto__ = e12509;var statearr_12510_12615 = state_12493;(statearr_12510_12615[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12509;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12616 = state_12493;
state_12493 = G__12616;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12493){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12608,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12511 = f__5824__auto__.call(null);(statearr_12511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12608);
return statearr_12511;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12608,jobs,results,process,async))
);
var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__,jobs,results,process,async){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__,jobs,results,process,async){
return (function (state_12549){var state_val_12550 = (state_12549[(1)]);if((state_val_12550 === (7)))
{var inst_12545 = (state_12549[(2)]);var state_12549__$1 = state_12549;var statearr_12551_12617 = state_12549__$1;(statearr_12551_12617[(2)] = inst_12545);
(statearr_12551_12617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (20)))
{var state_12549__$1 = state_12549;var statearr_12552_12618 = state_12549__$1;(statearr_12552_12618[(2)] = null);
(statearr_12552_12618[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (1)))
{var state_12549__$1 = state_12549;var statearr_12553_12619 = state_12549__$1;(statearr_12553_12619[(2)] = null);
(statearr_12553_12619[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (4)))
{var inst_12514 = (state_12549[(7)]);var inst_12514__$1 = (state_12549[(2)]);var inst_12515 = (inst_12514__$1 == null);var state_12549__$1 = (function (){var statearr_12554 = state_12549;(statearr_12554[(7)] = inst_12514__$1);
return statearr_12554;
})();if(cljs.core.truth_(inst_12515))
{var statearr_12555_12620 = state_12549__$1;(statearr_12555_12620[(1)] = (5));
} else
{var statearr_12556_12621 = state_12549__$1;(statearr_12556_12621[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (15)))
{var inst_12527 = (state_12549[(8)]);var state_12549__$1 = state_12549;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12549__$1,(18),to,inst_12527);
} else
{if((state_val_12550 === (21)))
{var inst_12540 = (state_12549[(2)]);var state_12549__$1 = state_12549;var statearr_12557_12622 = state_12549__$1;(statearr_12557_12622[(2)] = inst_12540);
(statearr_12557_12622[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (13)))
{var inst_12542 = (state_12549[(2)]);var state_12549__$1 = (function (){var statearr_12558 = state_12549;(statearr_12558[(9)] = inst_12542);
return statearr_12558;
})();var statearr_12559_12623 = state_12549__$1;(statearr_12559_12623[(2)] = null);
(statearr_12559_12623[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (6)))
{var inst_12514 = (state_12549[(7)]);var state_12549__$1 = state_12549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12549__$1,(11),inst_12514);
} else
{if((state_val_12550 === (17)))
{var inst_12535 = (state_12549[(2)]);var state_12549__$1 = state_12549;if(cljs.core.truth_(inst_12535))
{var statearr_12560_12624 = state_12549__$1;(statearr_12560_12624[(1)] = (19));
} else
{var statearr_12561_12625 = state_12549__$1;(statearr_12561_12625[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (3)))
{var inst_12547 = (state_12549[(2)]);var state_12549__$1 = state_12549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12549__$1,inst_12547);
} else
{if((state_val_12550 === (12)))
{var inst_12524 = (state_12549[(10)]);var state_12549__$1 = state_12549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12549__$1,(14),inst_12524);
} else
{if((state_val_12550 === (2)))
{var state_12549__$1 = state_12549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12549__$1,(4),results);
} else
{if((state_val_12550 === (19)))
{var state_12549__$1 = state_12549;var statearr_12562_12626 = state_12549__$1;(statearr_12562_12626[(2)] = null);
(statearr_12562_12626[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (11)))
{var inst_12524 = (state_12549[(2)]);var state_12549__$1 = (function (){var statearr_12563 = state_12549;(statearr_12563[(10)] = inst_12524);
return statearr_12563;
})();var statearr_12564_12627 = state_12549__$1;(statearr_12564_12627[(2)] = null);
(statearr_12564_12627[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (9)))
{var state_12549__$1 = state_12549;var statearr_12565_12628 = state_12549__$1;(statearr_12565_12628[(2)] = null);
(statearr_12565_12628[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (5)))
{var state_12549__$1 = state_12549;if(cljs.core.truth_(close_QMARK_))
{var statearr_12566_12629 = state_12549__$1;(statearr_12566_12629[(1)] = (8));
} else
{var statearr_12567_12630 = state_12549__$1;(statearr_12567_12630[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (14)))
{var inst_12527 = (state_12549[(8)]);var inst_12529 = (state_12549[(11)]);var inst_12527__$1 = (state_12549[(2)]);var inst_12528 = (inst_12527__$1 == null);var inst_12529__$1 = cljs.core.not.call(null,inst_12528);var state_12549__$1 = (function (){var statearr_12568 = state_12549;(statearr_12568[(8)] = inst_12527__$1);
(statearr_12568[(11)] = inst_12529__$1);
return statearr_12568;
})();if(inst_12529__$1)
{var statearr_12569_12631 = state_12549__$1;(statearr_12569_12631[(1)] = (15));
} else
{var statearr_12570_12632 = state_12549__$1;(statearr_12570_12632[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (16)))
{var inst_12529 = (state_12549[(11)]);var state_12549__$1 = state_12549;var statearr_12571_12633 = state_12549__$1;(statearr_12571_12633[(2)] = inst_12529);
(statearr_12571_12633[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (10)))
{var inst_12521 = (state_12549[(2)]);var state_12549__$1 = state_12549;var statearr_12572_12634 = state_12549__$1;(statearr_12572_12634[(2)] = inst_12521);
(statearr_12572_12634[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (18)))
{var inst_12532 = (state_12549[(2)]);var state_12549__$1 = state_12549;var statearr_12573_12635 = state_12549__$1;(statearr_12573_12635[(2)] = inst_12532);
(statearr_12573_12635[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12550 === (8)))
{var inst_12518 = cljs.core.async.close_BANG_.call(null,to);var state_12549__$1 = state_12549;var statearr_12574_12636 = state_12549__$1;(statearr_12574_12636[(2)] = inst_12518);
(statearr_12574_12636[(1)] = (10));
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
});})(c__5823__auto__,jobs,results,process,async))
;return ((function (switch__5808__auto__,c__5823__auto__,jobs,results,process,async){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12578 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12578[(0)] = state_machine__5809__auto__);
(statearr_12578[(1)] = (1));
return statearr_12578;
});
var state_machine__5809__auto____1 = (function (state_12549){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12579){if((e12579 instanceof Object))
{var ex__5812__auto__ = e12579;var statearr_12580_12637 = state_12549;(statearr_12580_12637[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12549);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12638 = state_12549;
state_12549 = G__12638;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12549){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__,jobs,results,process,async))
})();var state__5825__auto__ = (function (){var statearr_12581 = f__5824__auto__.call(null);(statearr_12581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_12581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__,jobs,results,process,async))
);
return c__5823__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5823__auto___12739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___12739,tc,fc){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___12739,tc,fc){
return (function (state_12714){var state_val_12715 = (state_12714[(1)]);if((state_val_12715 === (7)))
{var inst_12710 = (state_12714[(2)]);var state_12714__$1 = state_12714;var statearr_12716_12740 = state_12714__$1;(statearr_12716_12740[(2)] = inst_12710);
(statearr_12716_12740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (1)))
{var state_12714__$1 = state_12714;var statearr_12717_12741 = state_12714__$1;(statearr_12717_12741[(2)] = null);
(statearr_12717_12741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (4)))
{var inst_12691 = (state_12714[(7)]);var inst_12691__$1 = (state_12714[(2)]);var inst_12692 = (inst_12691__$1 == null);var state_12714__$1 = (function (){var statearr_12718 = state_12714;(statearr_12718[(7)] = inst_12691__$1);
return statearr_12718;
})();if(cljs.core.truth_(inst_12692))
{var statearr_12719_12742 = state_12714__$1;(statearr_12719_12742[(1)] = (5));
} else
{var statearr_12720_12743 = state_12714__$1;(statearr_12720_12743[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (13)))
{var state_12714__$1 = state_12714;var statearr_12721_12744 = state_12714__$1;(statearr_12721_12744[(2)] = null);
(statearr_12721_12744[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (6)))
{var inst_12691 = (state_12714[(7)]);var inst_12697 = p.call(null,inst_12691);var state_12714__$1 = state_12714;if(cljs.core.truth_(inst_12697))
{var statearr_12722_12745 = state_12714__$1;(statearr_12722_12745[(1)] = (9));
} else
{var statearr_12723_12746 = state_12714__$1;(statearr_12723_12746[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (3)))
{var inst_12712 = (state_12714[(2)]);var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12714__$1,inst_12712);
} else
{if((state_val_12715 === (12)))
{var state_12714__$1 = state_12714;var statearr_12724_12747 = state_12714__$1;(statearr_12724_12747[(2)] = null);
(statearr_12724_12747[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (2)))
{var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12714__$1,(4),ch);
} else
{if((state_val_12715 === (11)))
{var inst_12691 = (state_12714[(7)]);var inst_12701 = (state_12714[(2)]);var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12714__$1,(8),inst_12701,inst_12691);
} else
{if((state_val_12715 === (9)))
{var state_12714__$1 = state_12714;var statearr_12725_12748 = state_12714__$1;(statearr_12725_12748[(2)] = tc);
(statearr_12725_12748[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (5)))
{var inst_12694 = cljs.core.async.close_BANG_.call(null,tc);var inst_12695 = cljs.core.async.close_BANG_.call(null,fc);var state_12714__$1 = (function (){var statearr_12726 = state_12714;(statearr_12726[(8)] = inst_12694);
return statearr_12726;
})();var statearr_12727_12749 = state_12714__$1;(statearr_12727_12749[(2)] = inst_12695);
(statearr_12727_12749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (14)))
{var inst_12708 = (state_12714[(2)]);var state_12714__$1 = state_12714;var statearr_12728_12750 = state_12714__$1;(statearr_12728_12750[(2)] = inst_12708);
(statearr_12728_12750[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (10)))
{var state_12714__$1 = state_12714;var statearr_12729_12751 = state_12714__$1;(statearr_12729_12751[(2)] = fc);
(statearr_12729_12751[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12715 === (8)))
{var inst_12703 = (state_12714[(2)]);var state_12714__$1 = state_12714;if(cljs.core.truth_(inst_12703))
{var statearr_12730_12752 = state_12714__$1;(statearr_12730_12752[(1)] = (12));
} else
{var statearr_12731_12753 = state_12714__$1;(statearr_12731_12753[(1)] = (13));
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
});})(c__5823__auto___12739,tc,fc))
;return ((function (switch__5808__auto__,c__5823__auto___12739,tc,fc){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12735 = [null,null,null,null,null,null,null,null,null];(statearr_12735[(0)] = state_machine__5809__auto__);
(statearr_12735[(1)] = (1));
return statearr_12735;
});
var state_machine__5809__auto____1 = (function (state_12714){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12736){if((e12736 instanceof Object))
{var ex__5812__auto__ = e12736;var statearr_12737_12754 = state_12714;(statearr_12737_12754[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12736;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12755 = state_12714;
state_12714 = G__12755;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12714){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___12739,tc,fc))
})();var state__5825__auto__ = (function (){var statearr_12738 = f__5824__auto__.call(null);(statearr_12738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___12739);
return statearr_12738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___12739,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_12802){var state_val_12803 = (state_12802[(1)]);if((state_val_12803 === (7)))
{var inst_12798 = (state_12802[(2)]);var state_12802__$1 = state_12802;var statearr_12804_12820 = state_12802__$1;(statearr_12804_12820[(2)] = inst_12798);
(statearr_12804_12820[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12803 === (6)))
{var inst_12791 = (state_12802[(7)]);var inst_12788 = (state_12802[(8)]);var inst_12795 = f.call(null,inst_12788,inst_12791);var inst_12788__$1 = inst_12795;var state_12802__$1 = (function (){var statearr_12805 = state_12802;(statearr_12805[(8)] = inst_12788__$1);
return statearr_12805;
})();var statearr_12806_12821 = state_12802__$1;(statearr_12806_12821[(2)] = null);
(statearr_12806_12821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12803 === (5)))
{var inst_12788 = (state_12802[(8)]);var state_12802__$1 = state_12802;var statearr_12807_12822 = state_12802__$1;(statearr_12807_12822[(2)] = inst_12788);
(statearr_12807_12822[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12803 === (4)))
{var inst_12791 = (state_12802[(7)]);var inst_12791__$1 = (state_12802[(2)]);var inst_12792 = (inst_12791__$1 == null);var state_12802__$1 = (function (){var statearr_12808 = state_12802;(statearr_12808[(7)] = inst_12791__$1);
return statearr_12808;
})();if(cljs.core.truth_(inst_12792))
{var statearr_12809_12823 = state_12802__$1;(statearr_12809_12823[(1)] = (5));
} else
{var statearr_12810_12824 = state_12802__$1;(statearr_12810_12824[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12803 === (3)))
{var inst_12800 = (state_12802[(2)]);var state_12802__$1 = state_12802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12802__$1,inst_12800);
} else
{if((state_val_12803 === (2)))
{var state_12802__$1 = state_12802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12802__$1,(4),ch);
} else
{if((state_val_12803 === (1)))
{var inst_12788 = init;var state_12802__$1 = (function (){var statearr_12811 = state_12802;(statearr_12811[(8)] = inst_12788);
return statearr_12811;
})();var statearr_12812_12825 = state_12802__$1;(statearr_12812_12825[(2)] = null);
(statearr_12812_12825[(1)] = (2));
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
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_12816 = [null,null,null,null,null,null,null,null,null];(statearr_12816[(0)] = state_machine__5809__auto__);
(statearr_12816[(1)] = (1));
return statearr_12816;
});
var state_machine__5809__auto____1 = (function (state_12802){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12802);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12817){if((e12817 instanceof Object))
{var ex__5812__auto__ = e12817;var statearr_12818_12826 = state_12802;(statearr_12818_12826[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12827 = state_12802;
state_12802 = G__12827;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12802){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_12819 = f__5824__auto__.call(null);(statearr_12819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_12819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_12901){var state_val_12902 = (state_12901[(1)]);if((state_val_12902 === (7)))
{var inst_12883 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12903_12926 = state_12901__$1;(statearr_12903_12926[(2)] = inst_12883);
(statearr_12903_12926[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (1)))
{var inst_12877 = cljs.core.seq.call(null,coll);var inst_12878 = inst_12877;var state_12901__$1 = (function (){var statearr_12904 = state_12901;(statearr_12904[(7)] = inst_12878);
return statearr_12904;
})();var statearr_12905_12927 = state_12901__$1;(statearr_12905_12927[(2)] = null);
(statearr_12905_12927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (4)))
{var inst_12878 = (state_12901[(7)]);var inst_12881 = cljs.core.first.call(null,inst_12878);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12901__$1,(7),ch,inst_12881);
} else
{if((state_val_12902 === (13)))
{var inst_12895 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12906_12928 = state_12901__$1;(statearr_12906_12928[(2)] = inst_12895);
(statearr_12906_12928[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (6)))
{var inst_12886 = (state_12901[(2)]);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12886))
{var statearr_12907_12929 = state_12901__$1;(statearr_12907_12929[(1)] = (8));
} else
{var statearr_12908_12930 = state_12901__$1;(statearr_12908_12930[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (3)))
{var inst_12899 = (state_12901[(2)]);var state_12901__$1 = state_12901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12901__$1,inst_12899);
} else
{if((state_val_12902 === (12)))
{var state_12901__$1 = state_12901;var statearr_12909_12931 = state_12901__$1;(statearr_12909_12931[(2)] = null);
(statearr_12909_12931[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (2)))
{var inst_12878 = (state_12901[(7)]);var state_12901__$1 = state_12901;if(cljs.core.truth_(inst_12878))
{var statearr_12910_12932 = state_12901__$1;(statearr_12910_12932[(1)] = (4));
} else
{var statearr_12911_12933 = state_12901__$1;(statearr_12911_12933[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (11)))
{var inst_12892 = cljs.core.async.close_BANG_.call(null,ch);var state_12901__$1 = state_12901;var statearr_12912_12934 = state_12901__$1;(statearr_12912_12934[(2)] = inst_12892);
(statearr_12912_12934[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (9)))
{var state_12901__$1 = state_12901;if(cljs.core.truth_(close_QMARK_))
{var statearr_12913_12935 = state_12901__$1;(statearr_12913_12935[(1)] = (11));
} else
{var statearr_12914_12936 = state_12901__$1;(statearr_12914_12936[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (5)))
{var inst_12878 = (state_12901[(7)]);var state_12901__$1 = state_12901;var statearr_12915_12937 = state_12901__$1;(statearr_12915_12937[(2)] = inst_12878);
(statearr_12915_12937[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (10)))
{var inst_12897 = (state_12901[(2)]);var state_12901__$1 = state_12901;var statearr_12916_12938 = state_12901__$1;(statearr_12916_12938[(2)] = inst_12897);
(statearr_12916_12938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12902 === (8)))
{var inst_12878 = (state_12901[(7)]);var inst_12888 = cljs.core.next.call(null,inst_12878);var inst_12878__$1 = inst_12888;var state_12901__$1 = (function (){var statearr_12917 = state_12901;(statearr_12917[(7)] = inst_12878__$1);
return statearr_12917;
})();var statearr_12918_12939 = state_12901__$1;(statearr_12918_12939[(2)] = null);
(statearr_12918_12939[(1)] = (2));
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
var state_machine__5809__auto____0 = (function (){var statearr_12922 = [null,null,null,null,null,null,null,null];(statearr_12922[(0)] = state_machine__5809__auto__);
(statearr_12922[(1)] = (1));
return statearr_12922;
});
var state_machine__5809__auto____1 = (function (state_12901){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_12901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e12923){if((e12923 instanceof Object))
{var ex__5812__auto__ = e12923;var statearr_12924_12940 = state_12901;(statearr_12924_12940[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12901);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12923;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12941 = state_12901;
state_12901 = G__12941;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_12901){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_12901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_12925 = f__5824__auto__.call(null);(statearr_12925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_12925;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
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
cljs.core.async.Mux = (function (){var obj12943 = {};return obj12943;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12945 = {};return obj12945;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13167 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13167 = (function (cs,ch,mult,meta13168){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13168 = meta13168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13167.cljs$lang$type = true;
cljs.core.async.t13167.cljs$lang$ctorStr = "cljs.core.async/t13167";
cljs.core.async.t13167.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13167");
});})(cs))
;
cljs.core.async.t13167.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13167.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13167.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13167.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13167.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13169){var self__ = this;
var _13169__$1 = this;return self__.meta13168;
});})(cs))
;
cljs.core.async.t13167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13169,meta13168__$1){var self__ = this;
var _13169__$1 = this;return (new cljs.core.async.t13167(self__.cs,self__.ch,self__.mult,meta13168__$1));
});})(cs))
;
cljs.core.async.__GT_t13167 = ((function (cs){
return (function __GT_t13167(cs__$1,ch__$1,mult__$1,meta13168){return (new cljs.core.async.t13167(cs__$1,ch__$1,mult__$1,meta13168));
});})(cs))
;
}
return (new cljs.core.async.t13167(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5823__auto___13388 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13388,cs,m,dchan,dctr,done){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13388,cs,m,dchan,dctr,done){
return (function (state_13300){var state_val_13301 = (state_13300[(1)]);if((state_val_13301 === (7)))
{var inst_13296 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13302_13389 = state_13300__$1;(statearr_13302_13389[(2)] = inst_13296);
(statearr_13302_13389[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (20)))
{var inst_13201 = (state_13300[(7)]);var inst_13211 = cljs.core.first.call(null,inst_13201);var inst_13212 = cljs.core.nth.call(null,inst_13211,(0),null);var inst_13213 = cljs.core.nth.call(null,inst_13211,(1),null);var state_13300__$1 = (function (){var statearr_13303 = state_13300;(statearr_13303[(8)] = inst_13212);
return statearr_13303;
})();if(cljs.core.truth_(inst_13213))
{var statearr_13304_13390 = state_13300__$1;(statearr_13304_13390[(1)] = (22));
} else
{var statearr_13305_13391 = state_13300__$1;(statearr_13305_13391[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (27)))
{var inst_13241 = (state_13300[(9)]);var inst_13248 = (state_13300[(10)]);var inst_13172 = (state_13300[(11)]);var inst_13243 = (state_13300[(12)]);var inst_13248__$1 = cljs.core._nth.call(null,inst_13241,inst_13243);var inst_13249 = cljs.core.async.put_BANG_.call(null,inst_13248__$1,inst_13172,done);var state_13300__$1 = (function (){var statearr_13306 = state_13300;(statearr_13306[(10)] = inst_13248__$1);
return statearr_13306;
})();if(cljs.core.truth_(inst_13249))
{var statearr_13307_13392 = state_13300__$1;(statearr_13307_13392[(1)] = (30));
} else
{var statearr_13308_13393 = state_13300__$1;(statearr_13308_13393[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (1)))
{var state_13300__$1 = state_13300;var statearr_13309_13394 = state_13300__$1;(statearr_13309_13394[(2)] = null);
(statearr_13309_13394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (24)))
{var inst_13201 = (state_13300[(7)]);var inst_13218 = (state_13300[(2)]);var inst_13219 = cljs.core.next.call(null,inst_13201);var inst_13181 = inst_13219;var inst_13182 = null;var inst_13183 = (0);var inst_13184 = (0);var state_13300__$1 = (function (){var statearr_13310 = state_13300;(statearr_13310[(13)] = inst_13184);
(statearr_13310[(14)] = inst_13182);
(statearr_13310[(15)] = inst_13181);
(statearr_13310[(16)] = inst_13183);
(statearr_13310[(17)] = inst_13218);
return statearr_13310;
})();var statearr_13311_13395 = state_13300__$1;(statearr_13311_13395[(2)] = null);
(statearr_13311_13395[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (39)))
{var state_13300__$1 = state_13300;var statearr_13315_13396 = state_13300__$1;(statearr_13315_13396[(2)] = null);
(statearr_13315_13396[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (4)))
{var inst_13172 = (state_13300[(11)]);var inst_13172__$1 = (state_13300[(2)]);var inst_13173 = (inst_13172__$1 == null);var state_13300__$1 = (function (){var statearr_13316 = state_13300;(statearr_13316[(11)] = inst_13172__$1);
return statearr_13316;
})();if(cljs.core.truth_(inst_13173))
{var statearr_13317_13397 = state_13300__$1;(statearr_13317_13397[(1)] = (5));
} else
{var statearr_13318_13398 = state_13300__$1;(statearr_13318_13398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (15)))
{var inst_13184 = (state_13300[(13)]);var inst_13182 = (state_13300[(14)]);var inst_13181 = (state_13300[(15)]);var inst_13183 = (state_13300[(16)]);var inst_13197 = (state_13300[(2)]);var inst_13198 = (inst_13184 + (1));var tmp13312 = inst_13182;var tmp13313 = inst_13181;var tmp13314 = inst_13183;var inst_13181__$1 = tmp13313;var inst_13182__$1 = tmp13312;var inst_13183__$1 = tmp13314;var inst_13184__$1 = inst_13198;var state_13300__$1 = (function (){var statearr_13319 = state_13300;(statearr_13319[(13)] = inst_13184__$1);
(statearr_13319[(14)] = inst_13182__$1);
(statearr_13319[(15)] = inst_13181__$1);
(statearr_13319[(16)] = inst_13183__$1);
(statearr_13319[(18)] = inst_13197);
return statearr_13319;
})();var statearr_13320_13399 = state_13300__$1;(statearr_13320_13399[(2)] = null);
(statearr_13320_13399[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (21)))
{var inst_13222 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13324_13400 = state_13300__$1;(statearr_13324_13400[(2)] = inst_13222);
(statearr_13324_13400[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (31)))
{var inst_13248 = (state_13300[(10)]);var inst_13252 = done.call(null,null);var inst_13253 = cljs.core.async.untap_STAR_.call(null,m,inst_13248);var state_13300__$1 = (function (){var statearr_13325 = state_13300;(statearr_13325[(19)] = inst_13252);
return statearr_13325;
})();var statearr_13326_13401 = state_13300__$1;(statearr_13326_13401[(2)] = inst_13253);
(statearr_13326_13401[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (32)))
{var inst_13241 = (state_13300[(9)]);var inst_13240 = (state_13300[(20)]);var inst_13242 = (state_13300[(21)]);var inst_13243 = (state_13300[(12)]);var inst_13255 = (state_13300[(2)]);var inst_13256 = (inst_13243 + (1));var tmp13321 = inst_13241;var tmp13322 = inst_13240;var tmp13323 = inst_13242;var inst_13240__$1 = tmp13322;var inst_13241__$1 = tmp13321;var inst_13242__$1 = tmp13323;var inst_13243__$1 = inst_13256;var state_13300__$1 = (function (){var statearr_13327 = state_13300;(statearr_13327[(9)] = inst_13241__$1);
(statearr_13327[(22)] = inst_13255);
(statearr_13327[(20)] = inst_13240__$1);
(statearr_13327[(21)] = inst_13242__$1);
(statearr_13327[(12)] = inst_13243__$1);
return statearr_13327;
})();var statearr_13328_13402 = state_13300__$1;(statearr_13328_13402[(2)] = null);
(statearr_13328_13402[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (40)))
{var inst_13268 = (state_13300[(23)]);var inst_13272 = done.call(null,null);var inst_13273 = cljs.core.async.untap_STAR_.call(null,m,inst_13268);var state_13300__$1 = (function (){var statearr_13329 = state_13300;(statearr_13329[(24)] = inst_13272);
return statearr_13329;
})();var statearr_13330_13403 = state_13300__$1;(statearr_13330_13403[(2)] = inst_13273);
(statearr_13330_13403[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (33)))
{var inst_13259 = (state_13300[(25)]);var inst_13261 = cljs.core.chunked_seq_QMARK_.call(null,inst_13259);var state_13300__$1 = state_13300;if(inst_13261)
{var statearr_13331_13404 = state_13300__$1;(statearr_13331_13404[(1)] = (36));
} else
{var statearr_13332_13405 = state_13300__$1;(statearr_13332_13405[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (13)))
{var inst_13191 = (state_13300[(26)]);var inst_13194 = cljs.core.async.close_BANG_.call(null,inst_13191);var state_13300__$1 = state_13300;var statearr_13333_13406 = state_13300__$1;(statearr_13333_13406[(2)] = inst_13194);
(statearr_13333_13406[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (22)))
{var inst_13212 = (state_13300[(8)]);var inst_13215 = cljs.core.async.close_BANG_.call(null,inst_13212);var state_13300__$1 = state_13300;var statearr_13334_13407 = state_13300__$1;(statearr_13334_13407[(2)] = inst_13215);
(statearr_13334_13407[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (36)))
{var inst_13259 = (state_13300[(25)]);var inst_13263 = cljs.core.chunk_first.call(null,inst_13259);var inst_13264 = cljs.core.chunk_rest.call(null,inst_13259);var inst_13265 = cljs.core.count.call(null,inst_13263);var inst_13240 = inst_13264;var inst_13241 = inst_13263;var inst_13242 = inst_13265;var inst_13243 = (0);var state_13300__$1 = (function (){var statearr_13335 = state_13300;(statearr_13335[(9)] = inst_13241);
(statearr_13335[(20)] = inst_13240);
(statearr_13335[(21)] = inst_13242);
(statearr_13335[(12)] = inst_13243);
return statearr_13335;
})();var statearr_13336_13408 = state_13300__$1;(statearr_13336_13408[(2)] = null);
(statearr_13336_13408[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (41)))
{var inst_13259 = (state_13300[(25)]);var inst_13275 = (state_13300[(2)]);var inst_13276 = cljs.core.next.call(null,inst_13259);var inst_13240 = inst_13276;var inst_13241 = null;var inst_13242 = (0);var inst_13243 = (0);var state_13300__$1 = (function (){var statearr_13337 = state_13300;(statearr_13337[(9)] = inst_13241);
(statearr_13337[(27)] = inst_13275);
(statearr_13337[(20)] = inst_13240);
(statearr_13337[(21)] = inst_13242);
(statearr_13337[(12)] = inst_13243);
return statearr_13337;
})();var statearr_13338_13409 = state_13300__$1;(statearr_13338_13409[(2)] = null);
(statearr_13338_13409[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (43)))
{var state_13300__$1 = state_13300;var statearr_13339_13410 = state_13300__$1;(statearr_13339_13410[(2)] = null);
(statearr_13339_13410[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (29)))
{var inst_13284 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13340_13411 = state_13300__$1;(statearr_13340_13411[(2)] = inst_13284);
(statearr_13340_13411[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (44)))
{var inst_13293 = (state_13300[(2)]);var state_13300__$1 = (function (){var statearr_13341 = state_13300;(statearr_13341[(28)] = inst_13293);
return statearr_13341;
})();var statearr_13342_13412 = state_13300__$1;(statearr_13342_13412[(2)] = null);
(statearr_13342_13412[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (6)))
{var inst_13232 = (state_13300[(29)]);var inst_13231 = cljs.core.deref.call(null,cs);var inst_13232__$1 = cljs.core.keys.call(null,inst_13231);var inst_13233 = cljs.core.count.call(null,inst_13232__$1);var inst_13234 = cljs.core.reset_BANG_.call(null,dctr,inst_13233);var inst_13239 = cljs.core.seq.call(null,inst_13232__$1);var inst_13240 = inst_13239;var inst_13241 = null;var inst_13242 = (0);var inst_13243 = (0);var state_13300__$1 = (function (){var statearr_13343 = state_13300;(statearr_13343[(9)] = inst_13241);
(statearr_13343[(30)] = inst_13234);
(statearr_13343[(29)] = inst_13232__$1);
(statearr_13343[(20)] = inst_13240);
(statearr_13343[(21)] = inst_13242);
(statearr_13343[(12)] = inst_13243);
return statearr_13343;
})();var statearr_13344_13413 = state_13300__$1;(statearr_13344_13413[(2)] = null);
(statearr_13344_13413[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (28)))
{var inst_13259 = (state_13300[(25)]);var inst_13240 = (state_13300[(20)]);var inst_13259__$1 = cljs.core.seq.call(null,inst_13240);var state_13300__$1 = (function (){var statearr_13345 = state_13300;(statearr_13345[(25)] = inst_13259__$1);
return statearr_13345;
})();if(inst_13259__$1)
{var statearr_13346_13414 = state_13300__$1;(statearr_13346_13414[(1)] = (33));
} else
{var statearr_13347_13415 = state_13300__$1;(statearr_13347_13415[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (25)))
{var inst_13242 = (state_13300[(21)]);var inst_13243 = (state_13300[(12)]);var inst_13245 = (inst_13243 < inst_13242);var inst_13246 = inst_13245;var state_13300__$1 = state_13300;if(cljs.core.truth_(inst_13246))
{var statearr_13348_13416 = state_13300__$1;(statearr_13348_13416[(1)] = (27));
} else
{var statearr_13349_13417 = state_13300__$1;(statearr_13349_13417[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (34)))
{var state_13300__$1 = state_13300;var statearr_13350_13418 = state_13300__$1;(statearr_13350_13418[(2)] = null);
(statearr_13350_13418[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (17)))
{var state_13300__$1 = state_13300;var statearr_13351_13419 = state_13300__$1;(statearr_13351_13419[(2)] = null);
(statearr_13351_13419[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (3)))
{var inst_13298 = (state_13300[(2)]);var state_13300__$1 = state_13300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13300__$1,inst_13298);
} else
{if((state_val_13301 === (12)))
{var inst_13227 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13352_13420 = state_13300__$1;(statearr_13352_13420[(2)] = inst_13227);
(statearr_13352_13420[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (2)))
{var state_13300__$1 = state_13300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13300__$1,(4),ch);
} else
{if((state_val_13301 === (23)))
{var state_13300__$1 = state_13300;var statearr_13353_13421 = state_13300__$1;(statearr_13353_13421[(2)] = null);
(statearr_13353_13421[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (35)))
{var inst_13282 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13354_13422 = state_13300__$1;(statearr_13354_13422[(2)] = inst_13282);
(statearr_13354_13422[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (19)))
{var inst_13201 = (state_13300[(7)]);var inst_13205 = cljs.core.chunk_first.call(null,inst_13201);var inst_13206 = cljs.core.chunk_rest.call(null,inst_13201);var inst_13207 = cljs.core.count.call(null,inst_13205);var inst_13181 = inst_13206;var inst_13182 = inst_13205;var inst_13183 = inst_13207;var inst_13184 = (0);var state_13300__$1 = (function (){var statearr_13355 = state_13300;(statearr_13355[(13)] = inst_13184);
(statearr_13355[(14)] = inst_13182);
(statearr_13355[(15)] = inst_13181);
(statearr_13355[(16)] = inst_13183);
return statearr_13355;
})();var statearr_13356_13423 = state_13300__$1;(statearr_13356_13423[(2)] = null);
(statearr_13356_13423[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (11)))
{var inst_13181 = (state_13300[(15)]);var inst_13201 = (state_13300[(7)]);var inst_13201__$1 = cljs.core.seq.call(null,inst_13181);var state_13300__$1 = (function (){var statearr_13357 = state_13300;(statearr_13357[(7)] = inst_13201__$1);
return statearr_13357;
})();if(inst_13201__$1)
{var statearr_13358_13424 = state_13300__$1;(statearr_13358_13424[(1)] = (16));
} else
{var statearr_13359_13425 = state_13300__$1;(statearr_13359_13425[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (9)))
{var inst_13229 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13360_13426 = state_13300__$1;(statearr_13360_13426[(2)] = inst_13229);
(statearr_13360_13426[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (5)))
{var inst_13179 = cljs.core.deref.call(null,cs);var inst_13180 = cljs.core.seq.call(null,inst_13179);var inst_13181 = inst_13180;var inst_13182 = null;var inst_13183 = (0);var inst_13184 = (0);var state_13300__$1 = (function (){var statearr_13361 = state_13300;(statearr_13361[(13)] = inst_13184);
(statearr_13361[(14)] = inst_13182);
(statearr_13361[(15)] = inst_13181);
(statearr_13361[(16)] = inst_13183);
return statearr_13361;
})();var statearr_13362_13427 = state_13300__$1;(statearr_13362_13427[(2)] = null);
(statearr_13362_13427[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (14)))
{var state_13300__$1 = state_13300;var statearr_13363_13428 = state_13300__$1;(statearr_13363_13428[(2)] = null);
(statearr_13363_13428[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (45)))
{var inst_13290 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13364_13429 = state_13300__$1;(statearr_13364_13429[(2)] = inst_13290);
(statearr_13364_13429[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (26)))
{var inst_13232 = (state_13300[(29)]);var inst_13286 = (state_13300[(2)]);var inst_13287 = cljs.core.seq.call(null,inst_13232);var state_13300__$1 = (function (){var statearr_13365 = state_13300;(statearr_13365[(31)] = inst_13286);
return statearr_13365;
})();if(inst_13287)
{var statearr_13366_13430 = state_13300__$1;(statearr_13366_13430[(1)] = (42));
} else
{var statearr_13367_13431 = state_13300__$1;(statearr_13367_13431[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (16)))
{var inst_13201 = (state_13300[(7)]);var inst_13203 = cljs.core.chunked_seq_QMARK_.call(null,inst_13201);var state_13300__$1 = state_13300;if(inst_13203)
{var statearr_13368_13432 = state_13300__$1;(statearr_13368_13432[(1)] = (19));
} else
{var statearr_13369_13433 = state_13300__$1;(statearr_13369_13433[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (38)))
{var inst_13279 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13370_13434 = state_13300__$1;(statearr_13370_13434[(2)] = inst_13279);
(statearr_13370_13434[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (30)))
{var state_13300__$1 = state_13300;var statearr_13371_13435 = state_13300__$1;(statearr_13371_13435[(2)] = null);
(statearr_13371_13435[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (10)))
{var inst_13184 = (state_13300[(13)]);var inst_13182 = (state_13300[(14)]);var inst_13190 = cljs.core._nth.call(null,inst_13182,inst_13184);var inst_13191 = cljs.core.nth.call(null,inst_13190,(0),null);var inst_13192 = cljs.core.nth.call(null,inst_13190,(1),null);var state_13300__$1 = (function (){var statearr_13372 = state_13300;(statearr_13372[(26)] = inst_13191);
return statearr_13372;
})();if(cljs.core.truth_(inst_13192))
{var statearr_13373_13436 = state_13300__$1;(statearr_13373_13436[(1)] = (13));
} else
{var statearr_13374_13437 = state_13300__$1;(statearr_13374_13437[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (18)))
{var inst_13225 = (state_13300[(2)]);var state_13300__$1 = state_13300;var statearr_13375_13438 = state_13300__$1;(statearr_13375_13438[(2)] = inst_13225);
(statearr_13375_13438[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (42)))
{var state_13300__$1 = state_13300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13300__$1,(45),dchan);
} else
{if((state_val_13301 === (37)))
{var inst_13259 = (state_13300[(25)]);var inst_13172 = (state_13300[(11)]);var inst_13268 = (state_13300[(23)]);var inst_13268__$1 = cljs.core.first.call(null,inst_13259);var inst_13269 = cljs.core.async.put_BANG_.call(null,inst_13268__$1,inst_13172,done);var state_13300__$1 = (function (){var statearr_13376 = state_13300;(statearr_13376[(23)] = inst_13268__$1);
return statearr_13376;
})();if(cljs.core.truth_(inst_13269))
{var statearr_13377_13439 = state_13300__$1;(statearr_13377_13439[(1)] = (39));
} else
{var statearr_13378_13440 = state_13300__$1;(statearr_13378_13440[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13301 === (8)))
{var inst_13184 = (state_13300[(13)]);var inst_13183 = (state_13300[(16)]);var inst_13186 = (inst_13184 < inst_13183);var inst_13187 = inst_13186;var state_13300__$1 = state_13300;if(cljs.core.truth_(inst_13187))
{var statearr_13379_13441 = state_13300__$1;(statearr_13379_13441[(1)] = (10));
} else
{var statearr_13380_13442 = state_13300__$1;(statearr_13380_13442[(1)] = (11));
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
});})(c__5823__auto___13388,cs,m,dchan,dctr,done))
;return ((function (switch__5808__auto__,c__5823__auto___13388,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13384[(0)] = state_machine__5809__auto__);
(statearr_13384[(1)] = (1));
return statearr_13384;
});
var state_machine__5809__auto____1 = (function (state_13300){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13385){if((e13385 instanceof Object))
{var ex__5812__auto__ = e13385;var statearr_13386_13443 = state_13300;(statearr_13386_13443[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13300);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13385;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13444 = state_13300;
state_13300 = G__13444;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13300){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13388,cs,m,dchan,dctr,done))
})();var state__5825__auto__ = (function (){var statearr_13387 = f__5824__auto__.call(null);(statearr_13387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13388);
return statearr_13387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13388,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13446 = {};return obj13446;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13447){var map__13452 = p__13447;var map__13452__$1 = ((cljs.core.seq_QMARK_.call(null,map__13452))?cljs.core.apply.call(null,cljs.core.hash_map,map__13452):map__13452);var opts = map__13452__$1;var statearr_13453_13456 = state;(statearr_13453_13456[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13452,map__13452__$1,opts){
return (function (val){var statearr_13454_13457 = state;(statearr_13454_13457[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13452,map__13452__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13455_13458 = state;(statearr_13455_13458[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13447 = null;if (arguments.length > 3) {
  p__13447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13447);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13459){
var state = cljs.core.first(arglist__13459);
arglist__13459 = cljs.core.next(arglist__13459);
var cont_block = cljs.core.first(arglist__13459);
arglist__13459 = cljs.core.next(arglist__13459);
var ports = cljs.core.first(arglist__13459);
var p__13447 = cljs.core.rest(arglist__13459);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13447);
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
;var m = (function (){if(typeof cljs.core.async.t13579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13579 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13580){
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
this.meta13580 = meta13580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13579.cljs$lang$type = true;
cljs.core.async.t13579.cljs$lang$ctorStr = "cljs.core.async/t13579";
cljs.core.async.t13579.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13579");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13581){var self__ = this;
var _13581__$1 = this;return self__.meta13580;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13581,meta13580__$1){var self__ = this;
var _13581__$1 = this;return (new cljs.core.async.t13579(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13580__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13579 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13579(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13580){return (new cljs.core.async.t13579(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13580));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13579(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5823__auto___13698 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13651){var state_val_13652 = (state_13651[(1)]);if((state_val_13652 === (7)))
{var inst_13595 = (state_13651[(7)]);var inst_13600 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13595);var state_13651__$1 = state_13651;var statearr_13653_13699 = state_13651__$1;(statearr_13653_13699[(2)] = inst_13600);
(statearr_13653_13699[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (20)))
{var inst_13610 = (state_13651[(8)]);var state_13651__$1 = state_13651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13651__$1,(23),out,inst_13610);
} else
{if((state_val_13652 === (1)))
{var inst_13585 = (state_13651[(9)]);var inst_13585__$1 = calc_state.call(null);var inst_13586 = cljs.core.seq_QMARK_.call(null,inst_13585__$1);var state_13651__$1 = (function (){var statearr_13654 = state_13651;(statearr_13654[(9)] = inst_13585__$1);
return statearr_13654;
})();if(inst_13586)
{var statearr_13655_13700 = state_13651__$1;(statearr_13655_13700[(1)] = (2));
} else
{var statearr_13656_13701 = state_13651__$1;(statearr_13656_13701[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (24)))
{var inst_13603 = (state_13651[(10)]);var inst_13595 = inst_13603;var state_13651__$1 = (function (){var statearr_13657 = state_13651;(statearr_13657[(7)] = inst_13595);
return statearr_13657;
})();var statearr_13658_13702 = state_13651__$1;(statearr_13658_13702[(2)] = null);
(statearr_13658_13702[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (4)))
{var inst_13585 = (state_13651[(9)]);var inst_13591 = (state_13651[(2)]);var inst_13592 = cljs.core.get.call(null,inst_13591,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13593 = cljs.core.get.call(null,inst_13591,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13594 = cljs.core.get.call(null,inst_13591,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13595 = inst_13585;var state_13651__$1 = (function (){var statearr_13659 = state_13651;(statearr_13659[(11)] = inst_13593);
(statearr_13659[(7)] = inst_13595);
(statearr_13659[(12)] = inst_13592);
(statearr_13659[(13)] = inst_13594);
return statearr_13659;
})();var statearr_13660_13703 = state_13651__$1;(statearr_13660_13703[(2)] = null);
(statearr_13660_13703[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (15)))
{var state_13651__$1 = state_13651;var statearr_13661_13704 = state_13651__$1;(statearr_13661_13704[(2)] = null);
(statearr_13661_13704[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (21)))
{var inst_13603 = (state_13651[(10)]);var inst_13595 = inst_13603;var state_13651__$1 = (function (){var statearr_13662 = state_13651;(statearr_13662[(7)] = inst_13595);
return statearr_13662;
})();var statearr_13663_13705 = state_13651__$1;(statearr_13663_13705[(2)] = null);
(statearr_13663_13705[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (13)))
{var inst_13647 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13664_13706 = state_13651__$1;(statearr_13664_13706[(2)] = inst_13647);
(statearr_13664_13706[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (22)))
{var inst_13645 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13665_13707 = state_13651__$1;(statearr_13665_13707[(2)] = inst_13645);
(statearr_13665_13707[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (6)))
{var inst_13649 = (state_13651[(2)]);var state_13651__$1 = state_13651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13651__$1,inst_13649);
} else
{if((state_val_13652 === (25)))
{var state_13651__$1 = state_13651;var statearr_13666_13708 = state_13651__$1;(statearr_13666_13708[(2)] = null);
(statearr_13666_13708[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (17)))
{var inst_13625 = (state_13651[(14)]);var state_13651__$1 = state_13651;var statearr_13667_13709 = state_13651__$1;(statearr_13667_13709[(2)] = inst_13625);
(statearr_13667_13709[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (3)))
{var inst_13585 = (state_13651[(9)]);var state_13651__$1 = state_13651;var statearr_13668_13710 = state_13651__$1;(statearr_13668_13710[(2)] = inst_13585);
(statearr_13668_13710[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (12)))
{var inst_13606 = (state_13651[(15)]);var inst_13625 = (state_13651[(14)]);var inst_13611 = (state_13651[(16)]);var inst_13625__$1 = inst_13606.call(null,inst_13611);var state_13651__$1 = (function (){var statearr_13669 = state_13651;(statearr_13669[(14)] = inst_13625__$1);
return statearr_13669;
})();if(cljs.core.truth_(inst_13625__$1))
{var statearr_13670_13711 = state_13651__$1;(statearr_13670_13711[(1)] = (17));
} else
{var statearr_13671_13712 = state_13651__$1;(statearr_13671_13712[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (2)))
{var inst_13585 = (state_13651[(9)]);var inst_13588 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13585);var state_13651__$1 = state_13651;var statearr_13672_13713 = state_13651__$1;(statearr_13672_13713[(2)] = inst_13588);
(statearr_13672_13713[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (23)))
{var inst_13636 = (state_13651[(2)]);var state_13651__$1 = state_13651;if(cljs.core.truth_(inst_13636))
{var statearr_13673_13714 = state_13651__$1;(statearr_13673_13714[(1)] = (24));
} else
{var statearr_13674_13715 = state_13651__$1;(statearr_13674_13715[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (19)))
{var inst_13633 = (state_13651[(2)]);var state_13651__$1 = state_13651;if(cljs.core.truth_(inst_13633))
{var statearr_13675_13716 = state_13651__$1;(statearr_13675_13716[(1)] = (20));
} else
{var statearr_13676_13717 = state_13651__$1;(statearr_13676_13717[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (11)))
{var inst_13610 = (state_13651[(8)]);var inst_13616 = (inst_13610 == null);var state_13651__$1 = state_13651;if(cljs.core.truth_(inst_13616))
{var statearr_13677_13718 = state_13651__$1;(statearr_13677_13718[(1)] = (14));
} else
{var statearr_13678_13719 = state_13651__$1;(statearr_13678_13719[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (9)))
{var inst_13603 = (state_13651[(10)]);var inst_13603__$1 = (state_13651[(2)]);var inst_13604 = cljs.core.get.call(null,inst_13603__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13605 = cljs.core.get.call(null,inst_13603__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13606 = cljs.core.get.call(null,inst_13603__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13651__$1 = (function (){var statearr_13679 = state_13651;(statearr_13679[(15)] = inst_13606);
(statearr_13679[(10)] = inst_13603__$1);
(statearr_13679[(17)] = inst_13605);
return statearr_13679;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13651__$1,(10),inst_13604);
} else
{if((state_val_13652 === (5)))
{var inst_13595 = (state_13651[(7)]);var inst_13598 = cljs.core.seq_QMARK_.call(null,inst_13595);var state_13651__$1 = state_13651;if(inst_13598)
{var statearr_13680_13720 = state_13651__$1;(statearr_13680_13720[(1)] = (7));
} else
{var statearr_13681_13721 = state_13651__$1;(statearr_13681_13721[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (14)))
{var inst_13611 = (state_13651[(16)]);var inst_13618 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13611);var state_13651__$1 = state_13651;var statearr_13682_13722 = state_13651__$1;(statearr_13682_13722[(2)] = inst_13618);
(statearr_13682_13722[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (26)))
{var inst_13641 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13683_13723 = state_13651__$1;(statearr_13683_13723[(2)] = inst_13641);
(statearr_13683_13723[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (16)))
{var inst_13621 = (state_13651[(2)]);var inst_13622 = calc_state.call(null);var inst_13595 = inst_13622;var state_13651__$1 = (function (){var statearr_13684 = state_13651;(statearr_13684[(18)] = inst_13621);
(statearr_13684[(7)] = inst_13595);
return statearr_13684;
})();var statearr_13685_13724 = state_13651__$1;(statearr_13685_13724[(2)] = null);
(statearr_13685_13724[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (10)))
{var inst_13610 = (state_13651[(8)]);var inst_13611 = (state_13651[(16)]);var inst_13609 = (state_13651[(2)]);var inst_13610__$1 = cljs.core.nth.call(null,inst_13609,(0),null);var inst_13611__$1 = cljs.core.nth.call(null,inst_13609,(1),null);var inst_13612 = (inst_13610__$1 == null);var inst_13613 = cljs.core._EQ_.call(null,inst_13611__$1,change);var inst_13614 = (inst_13612) || (inst_13613);var state_13651__$1 = (function (){var statearr_13686 = state_13651;(statearr_13686[(8)] = inst_13610__$1);
(statearr_13686[(16)] = inst_13611__$1);
return statearr_13686;
})();if(cljs.core.truth_(inst_13614))
{var statearr_13687_13725 = state_13651__$1;(statearr_13687_13725[(1)] = (11));
} else
{var statearr_13688_13726 = state_13651__$1;(statearr_13688_13726[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (18)))
{var inst_13606 = (state_13651[(15)]);var inst_13605 = (state_13651[(17)]);var inst_13611 = (state_13651[(16)]);var inst_13628 = cljs.core.empty_QMARK_.call(null,inst_13606);var inst_13629 = inst_13605.call(null,inst_13611);var inst_13630 = cljs.core.not.call(null,inst_13629);var inst_13631 = (inst_13628) && (inst_13630);var state_13651__$1 = state_13651;var statearr_13689_13727 = state_13651__$1;(statearr_13689_13727[(2)] = inst_13631);
(statearr_13689_13727[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (8)))
{var inst_13595 = (state_13651[(7)]);var state_13651__$1 = state_13651;var statearr_13690_13728 = state_13651__$1;(statearr_13690_13728[(2)] = inst_13595);
(statearr_13690_13728[(1)] = (9));
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
});})(c__5823__auto___13698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5808__auto__,c__5823__auto___13698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13694[(0)] = state_machine__5809__auto__);
(statearr_13694[(1)] = (1));
return statearr_13694;
});
var state_machine__5809__auto____1 = (function (state_13651){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13651);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13695){if((e13695 instanceof Object))
{var ex__5812__auto__ = e13695;var statearr_13696_13729 = state_13651;(statearr_13696_13729[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13730 = state_13651;
state_13651 = G__13730;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13651){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5825__auto__ = (function (){var statearr_13697 = f__5824__auto__.call(null);(statearr_13697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13698);
return statearr_13697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13732 = {};return obj13732;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
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
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13733_SHARP_){if(cljs.core.truth_(p1__13733_SHARP_.call(null,topic)))
{return p1__13733_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13733_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13856 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13857){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13857 = meta13857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13856.cljs$lang$type = true;
cljs.core.async.t13856.cljs$lang$ctorStr = "cljs.core.async/t13856";
cljs.core.async.t13856.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13856");
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13856.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13858){var self__ = this;
var _13858__$1 = this;return self__.meta13857;
});})(mults,ensure_mult))
;
cljs.core.async.t13856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13858,meta13857__$1){var self__ = this;
var _13858__$1 = this;return (new cljs.core.async.t13856(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13857__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13856 = ((function (mults,ensure_mult){
return (function __GT_t13856(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13857){return (new cljs.core.async.t13856(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13857));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13856(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5823__auto___13978 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___13978,mults,ensure_mult,p){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___13978,mults,ensure_mult,p){
return (function (state_13930){var state_val_13931 = (state_13930[(1)]);if((state_val_13931 === (7)))
{var inst_13926 = (state_13930[(2)]);var state_13930__$1 = state_13930;var statearr_13932_13979 = state_13930__$1;(statearr_13932_13979[(2)] = inst_13926);
(statearr_13932_13979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (20)))
{var state_13930__$1 = state_13930;var statearr_13933_13980 = state_13930__$1;(statearr_13933_13980[(2)] = null);
(statearr_13933_13980[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (1)))
{var state_13930__$1 = state_13930;var statearr_13934_13981 = state_13930__$1;(statearr_13934_13981[(2)] = null);
(statearr_13934_13981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (24)))
{var inst_13909 = (state_13930[(7)]);var inst_13918 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13909);var state_13930__$1 = state_13930;var statearr_13935_13982 = state_13930__$1;(statearr_13935_13982[(2)] = inst_13918);
(statearr_13935_13982[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (4)))
{var inst_13861 = (state_13930[(8)]);var inst_13861__$1 = (state_13930[(2)]);var inst_13862 = (inst_13861__$1 == null);var state_13930__$1 = (function (){var statearr_13936 = state_13930;(statearr_13936[(8)] = inst_13861__$1);
return statearr_13936;
})();if(cljs.core.truth_(inst_13862))
{var statearr_13937_13983 = state_13930__$1;(statearr_13937_13983[(1)] = (5));
} else
{var statearr_13938_13984 = state_13930__$1;(statearr_13938_13984[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (15)))
{var inst_13903 = (state_13930[(2)]);var state_13930__$1 = state_13930;var statearr_13939_13985 = state_13930__$1;(statearr_13939_13985[(2)] = inst_13903);
(statearr_13939_13985[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (21)))
{var inst_13923 = (state_13930[(2)]);var state_13930__$1 = (function (){var statearr_13940 = state_13930;(statearr_13940[(9)] = inst_13923);
return statearr_13940;
})();var statearr_13941_13986 = state_13930__$1;(statearr_13941_13986[(2)] = null);
(statearr_13941_13986[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (13)))
{var inst_13885 = (state_13930[(10)]);var inst_13887 = cljs.core.chunked_seq_QMARK_.call(null,inst_13885);var state_13930__$1 = state_13930;if(inst_13887)
{var statearr_13942_13987 = state_13930__$1;(statearr_13942_13987[(1)] = (16));
} else
{var statearr_13943_13988 = state_13930__$1;(statearr_13943_13988[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (22)))
{var inst_13915 = (state_13930[(2)]);var state_13930__$1 = state_13930;if(cljs.core.truth_(inst_13915))
{var statearr_13944_13989 = state_13930__$1;(statearr_13944_13989[(1)] = (23));
} else
{var statearr_13945_13990 = state_13930__$1;(statearr_13945_13990[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (6)))
{var inst_13911 = (state_13930[(11)]);var inst_13861 = (state_13930[(8)]);var inst_13909 = (state_13930[(7)]);var inst_13909__$1 = topic_fn.call(null,inst_13861);var inst_13910 = cljs.core.deref.call(null,mults);var inst_13911__$1 = cljs.core.get.call(null,inst_13910,inst_13909__$1);var state_13930__$1 = (function (){var statearr_13946 = state_13930;(statearr_13946[(11)] = inst_13911__$1);
(statearr_13946[(7)] = inst_13909__$1);
return statearr_13946;
})();if(cljs.core.truth_(inst_13911__$1))
{var statearr_13947_13991 = state_13930__$1;(statearr_13947_13991[(1)] = (19));
} else
{var statearr_13948_13992 = state_13930__$1;(statearr_13948_13992[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (25)))
{var inst_13920 = (state_13930[(2)]);var state_13930__$1 = state_13930;var statearr_13949_13993 = state_13930__$1;(statearr_13949_13993[(2)] = inst_13920);
(statearr_13949_13993[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (17)))
{var inst_13885 = (state_13930[(10)]);var inst_13894 = cljs.core.first.call(null,inst_13885);var inst_13895 = cljs.core.async.muxch_STAR_.call(null,inst_13894);var inst_13896 = cljs.core.async.close_BANG_.call(null,inst_13895);var inst_13897 = cljs.core.next.call(null,inst_13885);var inst_13871 = inst_13897;var inst_13872 = null;var inst_13873 = (0);var inst_13874 = (0);var state_13930__$1 = (function (){var statearr_13950 = state_13930;(statearr_13950[(12)] = inst_13872);
(statearr_13950[(13)] = inst_13896);
(statearr_13950[(14)] = inst_13874);
(statearr_13950[(15)] = inst_13873);
(statearr_13950[(16)] = inst_13871);
return statearr_13950;
})();var statearr_13951_13994 = state_13930__$1;(statearr_13951_13994[(2)] = null);
(statearr_13951_13994[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (3)))
{var inst_13928 = (state_13930[(2)]);var state_13930__$1 = state_13930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13930__$1,inst_13928);
} else
{if((state_val_13931 === (12)))
{var inst_13905 = (state_13930[(2)]);var state_13930__$1 = state_13930;var statearr_13952_13995 = state_13930__$1;(statearr_13952_13995[(2)] = inst_13905);
(statearr_13952_13995[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (2)))
{var state_13930__$1 = state_13930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13930__$1,(4),ch);
} else
{if((state_val_13931 === (23)))
{var state_13930__$1 = state_13930;var statearr_13953_13996 = state_13930__$1;(statearr_13953_13996[(2)] = null);
(statearr_13953_13996[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (19)))
{var inst_13911 = (state_13930[(11)]);var inst_13861 = (state_13930[(8)]);var inst_13913 = cljs.core.async.muxch_STAR_.call(null,inst_13911);var state_13930__$1 = state_13930;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13930__$1,(22),inst_13913,inst_13861);
} else
{if((state_val_13931 === (11)))
{var inst_13885 = (state_13930[(10)]);var inst_13871 = (state_13930[(16)]);var inst_13885__$1 = cljs.core.seq.call(null,inst_13871);var state_13930__$1 = (function (){var statearr_13954 = state_13930;(statearr_13954[(10)] = inst_13885__$1);
return statearr_13954;
})();if(inst_13885__$1)
{var statearr_13955_13997 = state_13930__$1;(statearr_13955_13997[(1)] = (13));
} else
{var statearr_13956_13998 = state_13930__$1;(statearr_13956_13998[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (9)))
{var inst_13907 = (state_13930[(2)]);var state_13930__$1 = state_13930;var statearr_13957_13999 = state_13930__$1;(statearr_13957_13999[(2)] = inst_13907);
(statearr_13957_13999[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (5)))
{var inst_13868 = cljs.core.deref.call(null,mults);var inst_13869 = cljs.core.vals.call(null,inst_13868);var inst_13870 = cljs.core.seq.call(null,inst_13869);var inst_13871 = inst_13870;var inst_13872 = null;var inst_13873 = (0);var inst_13874 = (0);var state_13930__$1 = (function (){var statearr_13958 = state_13930;(statearr_13958[(12)] = inst_13872);
(statearr_13958[(14)] = inst_13874);
(statearr_13958[(15)] = inst_13873);
(statearr_13958[(16)] = inst_13871);
return statearr_13958;
})();var statearr_13959_14000 = state_13930__$1;(statearr_13959_14000[(2)] = null);
(statearr_13959_14000[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (14)))
{var state_13930__$1 = state_13930;var statearr_13963_14001 = state_13930__$1;(statearr_13963_14001[(2)] = null);
(statearr_13963_14001[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (16)))
{var inst_13885 = (state_13930[(10)]);var inst_13889 = cljs.core.chunk_first.call(null,inst_13885);var inst_13890 = cljs.core.chunk_rest.call(null,inst_13885);var inst_13891 = cljs.core.count.call(null,inst_13889);var inst_13871 = inst_13890;var inst_13872 = inst_13889;var inst_13873 = inst_13891;var inst_13874 = (0);var state_13930__$1 = (function (){var statearr_13964 = state_13930;(statearr_13964[(12)] = inst_13872);
(statearr_13964[(14)] = inst_13874);
(statearr_13964[(15)] = inst_13873);
(statearr_13964[(16)] = inst_13871);
return statearr_13964;
})();var statearr_13965_14002 = state_13930__$1;(statearr_13965_14002[(2)] = null);
(statearr_13965_14002[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (10)))
{var inst_13872 = (state_13930[(12)]);var inst_13874 = (state_13930[(14)]);var inst_13873 = (state_13930[(15)]);var inst_13871 = (state_13930[(16)]);var inst_13879 = cljs.core._nth.call(null,inst_13872,inst_13874);var inst_13880 = cljs.core.async.muxch_STAR_.call(null,inst_13879);var inst_13881 = cljs.core.async.close_BANG_.call(null,inst_13880);var inst_13882 = (inst_13874 + (1));var tmp13960 = inst_13872;var tmp13961 = inst_13873;var tmp13962 = inst_13871;var inst_13871__$1 = tmp13962;var inst_13872__$1 = tmp13960;var inst_13873__$1 = tmp13961;var inst_13874__$1 = inst_13882;var state_13930__$1 = (function (){var statearr_13966 = state_13930;(statearr_13966[(12)] = inst_13872__$1);
(statearr_13966[(17)] = inst_13881);
(statearr_13966[(14)] = inst_13874__$1);
(statearr_13966[(15)] = inst_13873__$1);
(statearr_13966[(16)] = inst_13871__$1);
return statearr_13966;
})();var statearr_13967_14003 = state_13930__$1;(statearr_13967_14003[(2)] = null);
(statearr_13967_14003[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (18)))
{var inst_13900 = (state_13930[(2)]);var state_13930__$1 = state_13930;var statearr_13968_14004 = state_13930__$1;(statearr_13968_14004[(2)] = inst_13900);
(statearr_13968_14004[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13931 === (8)))
{var inst_13874 = (state_13930[(14)]);var inst_13873 = (state_13930[(15)]);var inst_13876 = (inst_13874 < inst_13873);var inst_13877 = inst_13876;var state_13930__$1 = state_13930;if(cljs.core.truth_(inst_13877))
{var statearr_13969_14005 = state_13930__$1;(statearr_13969_14005[(1)] = (10));
} else
{var statearr_13970_14006 = state_13930__$1;(statearr_13970_14006[(1)] = (11));
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
});})(c__5823__auto___13978,mults,ensure_mult,p))
;return ((function (switch__5808__auto__,c__5823__auto___13978,mults,ensure_mult,p){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_13974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13974[(0)] = state_machine__5809__auto__);
(statearr_13974[(1)] = (1));
return statearr_13974;
});
var state_machine__5809__auto____1 = (function (state_13930){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_13930);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e13975){if((e13975 instanceof Object))
{var ex__5812__auto__ = e13975;var statearr_13976_14007 = state_13930;(statearr_13976_14007[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13975;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14008 = state_13930;
state_13930 = G__14008;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_13930){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_13930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___13978,mults,ensure_mult,p))
})();var state__5825__auto__ = (function (){var statearr_13977 = f__5824__auto__.call(null);(statearr_13977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___13978);
return statearr_13977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___13978,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5823__auto___14145 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14115){var state_val_14116 = (state_14115[(1)]);if((state_val_14116 === (7)))
{var state_14115__$1 = state_14115;var statearr_14117_14146 = state_14115__$1;(statearr_14117_14146[(2)] = null);
(statearr_14117_14146[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (1)))
{var state_14115__$1 = state_14115;var statearr_14118_14147 = state_14115__$1;(statearr_14118_14147[(2)] = null);
(statearr_14118_14147[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (4)))
{var inst_14079 = (state_14115[(7)]);var inst_14081 = (inst_14079 < cnt);var state_14115__$1 = state_14115;if(cljs.core.truth_(inst_14081))
{var statearr_14119_14148 = state_14115__$1;(statearr_14119_14148[(1)] = (6));
} else
{var statearr_14120_14149 = state_14115__$1;(statearr_14120_14149[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (15)))
{var inst_14111 = (state_14115[(2)]);var state_14115__$1 = state_14115;var statearr_14121_14150 = state_14115__$1;(statearr_14121_14150[(2)] = inst_14111);
(statearr_14121_14150[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (13)))
{var inst_14104 = cljs.core.async.close_BANG_.call(null,out);var state_14115__$1 = state_14115;var statearr_14122_14151 = state_14115__$1;(statearr_14122_14151[(2)] = inst_14104);
(statearr_14122_14151[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (6)))
{var state_14115__$1 = state_14115;var statearr_14123_14152 = state_14115__$1;(statearr_14123_14152[(2)] = null);
(statearr_14123_14152[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (3)))
{var inst_14113 = (state_14115[(2)]);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14115__$1,inst_14113);
} else
{if((state_val_14116 === (12)))
{var inst_14101 = (state_14115[(8)]);var inst_14101__$1 = (state_14115[(2)]);var inst_14102 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14101__$1);var state_14115__$1 = (function (){var statearr_14124 = state_14115;(statearr_14124[(8)] = inst_14101__$1);
return statearr_14124;
})();if(cljs.core.truth_(inst_14102))
{var statearr_14125_14153 = state_14115__$1;(statearr_14125_14153[(1)] = (13));
} else
{var statearr_14126_14154 = state_14115__$1;(statearr_14126_14154[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (2)))
{var inst_14078 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14079 = (0);var state_14115__$1 = (function (){var statearr_14127 = state_14115;(statearr_14127[(9)] = inst_14078);
(statearr_14127[(7)] = inst_14079);
return statearr_14127;
})();var statearr_14128_14155 = state_14115__$1;(statearr_14128_14155[(2)] = null);
(statearr_14128_14155[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (11)))
{var inst_14079 = (state_14115[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14115,(10),Object,null,(9));var inst_14088 = chs__$1.call(null,inst_14079);var inst_14089 = done.call(null,inst_14079);var inst_14090 = cljs.core.async.take_BANG_.call(null,inst_14088,inst_14089);var state_14115__$1 = state_14115;var statearr_14129_14156 = state_14115__$1;(statearr_14129_14156[(2)] = inst_14090);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14115__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (9)))
{var inst_14079 = (state_14115[(7)]);var inst_14092 = (state_14115[(2)]);var inst_14093 = (inst_14079 + (1));var inst_14079__$1 = inst_14093;var state_14115__$1 = (function (){var statearr_14130 = state_14115;(statearr_14130[(7)] = inst_14079__$1);
(statearr_14130[(10)] = inst_14092);
return statearr_14130;
})();var statearr_14131_14157 = state_14115__$1;(statearr_14131_14157[(2)] = null);
(statearr_14131_14157[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (5)))
{var inst_14099 = (state_14115[(2)]);var state_14115__$1 = (function (){var statearr_14132 = state_14115;(statearr_14132[(11)] = inst_14099);
return statearr_14132;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14115__$1,(12),dchan);
} else
{if((state_val_14116 === (14)))
{var inst_14101 = (state_14115[(8)]);var inst_14106 = cljs.core.apply.call(null,f,inst_14101);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14115__$1,(16),out,inst_14106);
} else
{if((state_val_14116 === (16)))
{var inst_14108 = (state_14115[(2)]);var state_14115__$1 = (function (){var statearr_14133 = state_14115;(statearr_14133[(12)] = inst_14108);
return statearr_14133;
})();var statearr_14134_14158 = state_14115__$1;(statearr_14134_14158[(2)] = null);
(statearr_14134_14158[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (10)))
{var inst_14083 = (state_14115[(2)]);var inst_14084 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14115__$1 = (function (){var statearr_14135 = state_14115;(statearr_14135[(13)] = inst_14083);
return statearr_14135;
})();var statearr_14136_14159 = state_14115__$1;(statearr_14136_14159[(2)] = inst_14084);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14115__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (8)))
{var inst_14097 = (state_14115[(2)]);var state_14115__$1 = state_14115;var statearr_14137_14160 = state_14115__$1;(statearr_14137_14160[(2)] = inst_14097);
(statearr_14137_14160[(1)] = (5));
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
});})(c__5823__auto___14145,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5808__auto__,c__5823__auto___14145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14141[(0)] = state_machine__5809__auto__);
(statearr_14141[(1)] = (1));
return statearr_14141;
});
var state_machine__5809__auto____1 = (function (state_14115){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14115);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14142){if((e14142 instanceof Object))
{var ex__5812__auto__ = e14142;var statearr_14143_14161 = state_14115;(statearr_14143_14161[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14142;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14162 = state_14115;
state_14115 = G__14162;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14115){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14145,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5825__auto__ = (function (){var statearr_14144 = f__5824__auto__.call(null);(statearr_14144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14145);
return statearr_14144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14145,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14270 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14270,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14270,out){
return (function (state_14246){var state_val_14247 = (state_14246[(1)]);if((state_val_14247 === (7)))
{var inst_14225 = (state_14246[(7)]);var inst_14226 = (state_14246[(8)]);var inst_14225__$1 = (state_14246[(2)]);var inst_14226__$1 = cljs.core.nth.call(null,inst_14225__$1,(0),null);var inst_14227 = cljs.core.nth.call(null,inst_14225__$1,(1),null);var inst_14228 = (inst_14226__$1 == null);var state_14246__$1 = (function (){var statearr_14248 = state_14246;(statearr_14248[(7)] = inst_14225__$1);
(statearr_14248[(9)] = inst_14227);
(statearr_14248[(8)] = inst_14226__$1);
return statearr_14248;
})();if(cljs.core.truth_(inst_14228))
{var statearr_14249_14271 = state_14246__$1;(statearr_14249_14271[(1)] = (8));
} else
{var statearr_14250_14272 = state_14246__$1;(statearr_14250_14272[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (1)))
{var inst_14217 = cljs.core.vec.call(null,chs);var inst_14218 = inst_14217;var state_14246__$1 = (function (){var statearr_14251 = state_14246;(statearr_14251[(10)] = inst_14218);
return statearr_14251;
})();var statearr_14252_14273 = state_14246__$1;(statearr_14252_14273[(2)] = null);
(statearr_14252_14273[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (4)))
{var inst_14218 = (state_14246[(10)]);var state_14246__$1 = state_14246;return cljs.core.async.ioc_alts_BANG_.call(null,state_14246__$1,(7),inst_14218);
} else
{if((state_val_14247 === (6)))
{var inst_14242 = (state_14246[(2)]);var state_14246__$1 = state_14246;var statearr_14253_14274 = state_14246__$1;(statearr_14253_14274[(2)] = inst_14242);
(statearr_14253_14274[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (3)))
{var inst_14244 = (state_14246[(2)]);var state_14246__$1 = state_14246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14246__$1,inst_14244);
} else
{if((state_val_14247 === (2)))
{var inst_14218 = (state_14246[(10)]);var inst_14220 = cljs.core.count.call(null,inst_14218);var inst_14221 = (inst_14220 > (0));var state_14246__$1 = state_14246;if(cljs.core.truth_(inst_14221))
{var statearr_14255_14275 = state_14246__$1;(statearr_14255_14275[(1)] = (4));
} else
{var statearr_14256_14276 = state_14246__$1;(statearr_14256_14276[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (11)))
{var inst_14218 = (state_14246[(10)]);var inst_14235 = (state_14246[(2)]);var tmp14254 = inst_14218;var inst_14218__$1 = tmp14254;var state_14246__$1 = (function (){var statearr_14257 = state_14246;(statearr_14257[(11)] = inst_14235);
(statearr_14257[(10)] = inst_14218__$1);
return statearr_14257;
})();var statearr_14258_14277 = state_14246__$1;(statearr_14258_14277[(2)] = null);
(statearr_14258_14277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (9)))
{var inst_14226 = (state_14246[(8)]);var state_14246__$1 = state_14246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14246__$1,(11),out,inst_14226);
} else
{if((state_val_14247 === (5)))
{var inst_14240 = cljs.core.async.close_BANG_.call(null,out);var state_14246__$1 = state_14246;var statearr_14259_14278 = state_14246__$1;(statearr_14259_14278[(2)] = inst_14240);
(statearr_14259_14278[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (10)))
{var inst_14238 = (state_14246[(2)]);var state_14246__$1 = state_14246;var statearr_14260_14279 = state_14246__$1;(statearr_14260_14279[(2)] = inst_14238);
(statearr_14260_14279[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14247 === (8)))
{var inst_14225 = (state_14246[(7)]);var inst_14218 = (state_14246[(10)]);var inst_14227 = (state_14246[(9)]);var inst_14226 = (state_14246[(8)]);var inst_14230 = (function (){var c = inst_14227;var v = inst_14226;var vec__14223 = inst_14225;var cs = inst_14218;return ((function (c,v,vec__14223,cs,inst_14225,inst_14218,inst_14227,inst_14226,state_val_14247,c__5823__auto___14270,out){
return (function (p1__14163_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14163_SHARP_);
});
;})(c,v,vec__14223,cs,inst_14225,inst_14218,inst_14227,inst_14226,state_val_14247,c__5823__auto___14270,out))
})();var inst_14231 = cljs.core.filterv.call(null,inst_14230,inst_14218);var inst_14218__$1 = inst_14231;var state_14246__$1 = (function (){var statearr_14261 = state_14246;(statearr_14261[(10)] = inst_14218__$1);
return statearr_14261;
})();var statearr_14262_14280 = state_14246__$1;(statearr_14262_14280[(2)] = null);
(statearr_14262_14280[(1)] = (2));
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
});})(c__5823__auto___14270,out))
;return ((function (switch__5808__auto__,c__5823__auto___14270,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14266 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14266[(0)] = state_machine__5809__auto__);
(statearr_14266[(1)] = (1));
return statearr_14266;
});
var state_machine__5809__auto____1 = (function (state_14246){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14267){if((e14267 instanceof Object))
{var ex__5812__auto__ = e14267;var statearr_14268_14281 = state_14246;(statearr_14268_14281[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14282 = state_14246;
state_14246 = G__14282;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14246){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14270,out))
})();var state__5825__auto__ = (function (){var statearr_14269 = f__5824__auto__.call(null);(statearr_14269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14270);
return statearr_14269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14270,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14375 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14375,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14375,out){
return (function (state_14352){var state_val_14353 = (state_14352[(1)]);if((state_val_14353 === (7)))
{var inst_14334 = (state_14352[(7)]);var inst_14334__$1 = (state_14352[(2)]);var inst_14335 = (inst_14334__$1 == null);var inst_14336 = cljs.core.not.call(null,inst_14335);var state_14352__$1 = (function (){var statearr_14354 = state_14352;(statearr_14354[(7)] = inst_14334__$1);
return statearr_14354;
})();if(inst_14336)
{var statearr_14355_14376 = state_14352__$1;(statearr_14355_14376[(1)] = (8));
} else
{var statearr_14356_14377 = state_14352__$1;(statearr_14356_14377[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (1)))
{var inst_14329 = (0);var state_14352__$1 = (function (){var statearr_14357 = state_14352;(statearr_14357[(8)] = inst_14329);
return statearr_14357;
})();var statearr_14358_14378 = state_14352__$1;(statearr_14358_14378[(2)] = null);
(statearr_14358_14378[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (4)))
{var state_14352__$1 = state_14352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14352__$1,(7),ch);
} else
{if((state_val_14353 === (6)))
{var inst_14347 = (state_14352[(2)]);var state_14352__$1 = state_14352;var statearr_14359_14379 = state_14352__$1;(statearr_14359_14379[(2)] = inst_14347);
(statearr_14359_14379[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (3)))
{var inst_14349 = (state_14352[(2)]);var inst_14350 = cljs.core.async.close_BANG_.call(null,out);var state_14352__$1 = (function (){var statearr_14360 = state_14352;(statearr_14360[(9)] = inst_14349);
return statearr_14360;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14352__$1,inst_14350);
} else
{if((state_val_14353 === (2)))
{var inst_14329 = (state_14352[(8)]);var inst_14331 = (inst_14329 < n);var state_14352__$1 = state_14352;if(cljs.core.truth_(inst_14331))
{var statearr_14361_14380 = state_14352__$1;(statearr_14361_14380[(1)] = (4));
} else
{var statearr_14362_14381 = state_14352__$1;(statearr_14362_14381[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (11)))
{var inst_14329 = (state_14352[(8)]);var inst_14339 = (state_14352[(2)]);var inst_14340 = (inst_14329 + (1));var inst_14329__$1 = inst_14340;var state_14352__$1 = (function (){var statearr_14363 = state_14352;(statearr_14363[(10)] = inst_14339);
(statearr_14363[(8)] = inst_14329__$1);
return statearr_14363;
})();var statearr_14364_14382 = state_14352__$1;(statearr_14364_14382[(2)] = null);
(statearr_14364_14382[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (9)))
{var state_14352__$1 = state_14352;var statearr_14365_14383 = state_14352__$1;(statearr_14365_14383[(2)] = null);
(statearr_14365_14383[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (5)))
{var state_14352__$1 = state_14352;var statearr_14366_14384 = state_14352__$1;(statearr_14366_14384[(2)] = null);
(statearr_14366_14384[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (10)))
{var inst_14344 = (state_14352[(2)]);var state_14352__$1 = state_14352;var statearr_14367_14385 = state_14352__$1;(statearr_14367_14385[(2)] = inst_14344);
(statearr_14367_14385[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14353 === (8)))
{var inst_14334 = (state_14352[(7)]);var state_14352__$1 = state_14352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14352__$1,(11),out,inst_14334);
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
});})(c__5823__auto___14375,out))
;return ((function (switch__5808__auto__,c__5823__auto___14375,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14371 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14371[(0)] = state_machine__5809__auto__);
(statearr_14371[(1)] = (1));
return statearr_14371;
});
var state_machine__5809__auto____1 = (function (state_14352){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14352);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14372){if((e14372 instanceof Object))
{var ex__5812__auto__ = e14372;var statearr_14373_14386 = state_14352;(statearr_14373_14386[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14372;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14387 = state_14352;
state_14352 = G__14387;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14352){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14375,out))
})();var state__5825__auto__ = (function (){var statearr_14374 = f__5824__auto__.call(null);(statearr_14374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14375);
return statearr_14374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14375,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14395 = (function (ch,f,map_LT_,meta14396){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14396 = meta14396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14395.cljs$lang$type = true;
cljs.core.async.t14395.cljs$lang$ctorStr = "cljs.core.async/t14395";
cljs.core.async.t14395.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14395");
});
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14398 = (function (fn1,_,meta14396,ch,f,map_LT_,meta14399){
this.fn1 = fn1;
this._ = _;
this.meta14396 = meta14396;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14399 = meta14399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14398.cljs$lang$type = true;
cljs.core.async.t14398.cljs$lang$ctorStr = "cljs.core.async/t14398";
cljs.core.async.t14398.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14398");
});})(___$1))
;
cljs.core.async.t14398.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14388_SHARP_){return f1.call(null,(((p1__14388_SHARP_ == null))?null:self__.f.call(null,p1__14388_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14400){var self__ = this;
var _14400__$1 = this;return self__.meta14399;
});})(___$1))
;
cljs.core.async.t14398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14400,meta14399__$1){var self__ = this;
var _14400__$1 = this;return (new cljs.core.async.t14398(self__.fn1,self__._,self__.meta14396,self__.ch,self__.f,self__.map_LT_,meta14399__$1));
});})(___$1))
;
cljs.core.async.__GT_t14398 = ((function (___$1){
return (function __GT_t14398(fn1__$1,___$2,meta14396__$1,ch__$2,f__$2,map_LT___$2,meta14399){return (new cljs.core.async.t14398(fn1__$1,___$2,meta14396__$1,ch__$2,f__$2,map_LT___$2,meta14399));
});})(___$1))
;
}
return (new cljs.core.async.t14398(fn1,___$1,self__.meta14396,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14397){var self__ = this;
var _14397__$1 = this;return self__.meta14396;
});
cljs.core.async.t14395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14397,meta14396__$1){var self__ = this;
var _14397__$1 = this;return (new cljs.core.async.t14395(self__.ch,self__.f,self__.map_LT_,meta14396__$1));
});
cljs.core.async.__GT_t14395 = (function __GT_t14395(ch__$1,f__$1,map_LT___$1,meta14396){return (new cljs.core.async.t14395(ch__$1,f__$1,map_LT___$1,meta14396));
});
}
return (new cljs.core.async.t14395(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14404 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14404 = (function (ch,f,map_GT_,meta14405){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14405 = meta14405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14404.cljs$lang$type = true;
cljs.core.async.t14404.cljs$lang$ctorStr = "cljs.core.async/t14404";
cljs.core.async.t14404.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14404");
});
cljs.core.async.t14404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14404.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14406){var self__ = this;
var _14406__$1 = this;return self__.meta14405;
});
cljs.core.async.t14404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14406,meta14405__$1){var self__ = this;
var _14406__$1 = this;return (new cljs.core.async.t14404(self__.ch,self__.f,self__.map_GT_,meta14405__$1));
});
cljs.core.async.__GT_t14404 = (function __GT_t14404(ch__$1,f__$1,map_GT___$1,meta14405){return (new cljs.core.async.t14404(ch__$1,f__$1,map_GT___$1,meta14405));
});
}
return (new cljs.core.async.t14404(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14410 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14410 = (function (ch,p,filter_GT_,meta14411){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14411 = meta14411;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14410.cljs$lang$type = true;
cljs.core.async.t14410.cljs$lang$ctorStr = "cljs.core.async/t14410";
cljs.core.async.t14410.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14410");
});
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14412){var self__ = this;
var _14412__$1 = this;return self__.meta14411;
});
cljs.core.async.t14410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14412,meta14411__$1){var self__ = this;
var _14412__$1 = this;return (new cljs.core.async.t14410(self__.ch,self__.p,self__.filter_GT_,meta14411__$1));
});
cljs.core.async.__GT_t14410 = (function __GT_t14410(ch__$1,p__$1,filter_GT___$1,meta14411){return (new cljs.core.async.t14410(ch__$1,p__$1,filter_GT___$1,meta14411));
});
}
return (new cljs.core.async.t14410(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14495 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14495,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14495,out){
return (function (state_14474){var state_val_14475 = (state_14474[(1)]);if((state_val_14475 === (7)))
{var inst_14470 = (state_14474[(2)]);var state_14474__$1 = state_14474;var statearr_14476_14496 = state_14474__$1;(statearr_14476_14496[(2)] = inst_14470);
(statearr_14476_14496[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (1)))
{var state_14474__$1 = state_14474;var statearr_14477_14497 = state_14474__$1;(statearr_14477_14497[(2)] = null);
(statearr_14477_14497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (4)))
{var inst_14456 = (state_14474[(7)]);var inst_14456__$1 = (state_14474[(2)]);var inst_14457 = (inst_14456__$1 == null);var state_14474__$1 = (function (){var statearr_14478 = state_14474;(statearr_14478[(7)] = inst_14456__$1);
return statearr_14478;
})();if(cljs.core.truth_(inst_14457))
{var statearr_14479_14498 = state_14474__$1;(statearr_14479_14498[(1)] = (5));
} else
{var statearr_14480_14499 = state_14474__$1;(statearr_14480_14499[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (6)))
{var inst_14456 = (state_14474[(7)]);var inst_14461 = p.call(null,inst_14456);var state_14474__$1 = state_14474;if(cljs.core.truth_(inst_14461))
{var statearr_14481_14500 = state_14474__$1;(statearr_14481_14500[(1)] = (8));
} else
{var statearr_14482_14501 = state_14474__$1;(statearr_14482_14501[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (3)))
{var inst_14472 = (state_14474[(2)]);var state_14474__$1 = state_14474;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14474__$1,inst_14472);
} else
{if((state_val_14475 === (2)))
{var state_14474__$1 = state_14474;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14474__$1,(4),ch);
} else
{if((state_val_14475 === (11)))
{var inst_14464 = (state_14474[(2)]);var state_14474__$1 = state_14474;var statearr_14483_14502 = state_14474__$1;(statearr_14483_14502[(2)] = inst_14464);
(statearr_14483_14502[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (9)))
{var state_14474__$1 = state_14474;var statearr_14484_14503 = state_14474__$1;(statearr_14484_14503[(2)] = null);
(statearr_14484_14503[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (5)))
{var inst_14459 = cljs.core.async.close_BANG_.call(null,out);var state_14474__$1 = state_14474;var statearr_14485_14504 = state_14474__$1;(statearr_14485_14504[(2)] = inst_14459);
(statearr_14485_14504[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (10)))
{var inst_14467 = (state_14474[(2)]);var state_14474__$1 = (function (){var statearr_14486 = state_14474;(statearr_14486[(8)] = inst_14467);
return statearr_14486;
})();var statearr_14487_14505 = state_14474__$1;(statearr_14487_14505[(2)] = null);
(statearr_14487_14505[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14475 === (8)))
{var inst_14456 = (state_14474[(7)]);var state_14474__$1 = state_14474;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14474__$1,(11),out,inst_14456);
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
});})(c__5823__auto___14495,out))
;return ((function (switch__5808__auto__,c__5823__auto___14495,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14491 = [null,null,null,null,null,null,null,null,null];(statearr_14491[(0)] = state_machine__5809__auto__);
(statearr_14491[(1)] = (1));
return statearr_14491;
});
var state_machine__5809__auto____1 = (function (state_14474){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14474);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14492){if((e14492 instanceof Object))
{var ex__5812__auto__ = e14492;var statearr_14493_14506 = state_14474;(statearr_14493_14506[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14474);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14507 = state_14474;
state_14474 = G__14507;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14474){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14495,out))
})();var state__5825__auto__ = (function (){var statearr_14494 = f__5824__auto__.call(null);(statearr_14494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14495);
return statearr_14494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14495,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5823__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto__){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto__){
return (function (state_14673){var state_val_14674 = (state_14673[(1)]);if((state_val_14674 === (7)))
{var inst_14669 = (state_14673[(2)]);var state_14673__$1 = state_14673;var statearr_14675_14716 = state_14673__$1;(statearr_14675_14716[(2)] = inst_14669);
(statearr_14675_14716[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (20)))
{var inst_14639 = (state_14673[(7)]);var inst_14650 = (state_14673[(2)]);var inst_14651 = cljs.core.next.call(null,inst_14639);var inst_14625 = inst_14651;var inst_14626 = null;var inst_14627 = (0);var inst_14628 = (0);var state_14673__$1 = (function (){var statearr_14676 = state_14673;(statearr_14676[(8)] = inst_14627);
(statearr_14676[(9)] = inst_14650);
(statearr_14676[(10)] = inst_14626);
(statearr_14676[(11)] = inst_14628);
(statearr_14676[(12)] = inst_14625);
return statearr_14676;
})();var statearr_14677_14717 = state_14673__$1;(statearr_14677_14717[(2)] = null);
(statearr_14677_14717[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (1)))
{var state_14673__$1 = state_14673;var statearr_14678_14718 = state_14673__$1;(statearr_14678_14718[(2)] = null);
(statearr_14678_14718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (4)))
{var inst_14614 = (state_14673[(13)]);var inst_14614__$1 = (state_14673[(2)]);var inst_14615 = (inst_14614__$1 == null);var state_14673__$1 = (function (){var statearr_14679 = state_14673;(statearr_14679[(13)] = inst_14614__$1);
return statearr_14679;
})();if(cljs.core.truth_(inst_14615))
{var statearr_14680_14719 = state_14673__$1;(statearr_14680_14719[(1)] = (5));
} else
{var statearr_14681_14720 = state_14673__$1;(statearr_14681_14720[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (15)))
{var state_14673__$1 = state_14673;var statearr_14685_14721 = state_14673__$1;(statearr_14685_14721[(2)] = null);
(statearr_14685_14721[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (21)))
{var state_14673__$1 = state_14673;var statearr_14686_14722 = state_14673__$1;(statearr_14686_14722[(2)] = null);
(statearr_14686_14722[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (13)))
{var inst_14627 = (state_14673[(8)]);var inst_14626 = (state_14673[(10)]);var inst_14628 = (state_14673[(11)]);var inst_14625 = (state_14673[(12)]);var inst_14635 = (state_14673[(2)]);var inst_14636 = (inst_14628 + (1));var tmp14682 = inst_14627;var tmp14683 = inst_14626;var tmp14684 = inst_14625;var inst_14625__$1 = tmp14684;var inst_14626__$1 = tmp14683;var inst_14627__$1 = tmp14682;var inst_14628__$1 = inst_14636;var state_14673__$1 = (function (){var statearr_14687 = state_14673;(statearr_14687[(8)] = inst_14627__$1);
(statearr_14687[(10)] = inst_14626__$1);
(statearr_14687[(11)] = inst_14628__$1);
(statearr_14687[(14)] = inst_14635);
(statearr_14687[(12)] = inst_14625__$1);
return statearr_14687;
})();var statearr_14688_14723 = state_14673__$1;(statearr_14688_14723[(2)] = null);
(statearr_14688_14723[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (22)))
{var state_14673__$1 = state_14673;var statearr_14689_14724 = state_14673__$1;(statearr_14689_14724[(2)] = null);
(statearr_14689_14724[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (6)))
{var inst_14614 = (state_14673[(13)]);var inst_14623 = f.call(null,inst_14614);var inst_14624 = cljs.core.seq.call(null,inst_14623);var inst_14625 = inst_14624;var inst_14626 = null;var inst_14627 = (0);var inst_14628 = (0);var state_14673__$1 = (function (){var statearr_14690 = state_14673;(statearr_14690[(8)] = inst_14627);
(statearr_14690[(10)] = inst_14626);
(statearr_14690[(11)] = inst_14628);
(statearr_14690[(12)] = inst_14625);
return statearr_14690;
})();var statearr_14691_14725 = state_14673__$1;(statearr_14691_14725[(2)] = null);
(statearr_14691_14725[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (17)))
{var inst_14639 = (state_14673[(7)]);var inst_14643 = cljs.core.chunk_first.call(null,inst_14639);var inst_14644 = cljs.core.chunk_rest.call(null,inst_14639);var inst_14645 = cljs.core.count.call(null,inst_14643);var inst_14625 = inst_14644;var inst_14626 = inst_14643;var inst_14627 = inst_14645;var inst_14628 = (0);var state_14673__$1 = (function (){var statearr_14692 = state_14673;(statearr_14692[(8)] = inst_14627);
(statearr_14692[(10)] = inst_14626);
(statearr_14692[(11)] = inst_14628);
(statearr_14692[(12)] = inst_14625);
return statearr_14692;
})();var statearr_14693_14726 = state_14673__$1;(statearr_14693_14726[(2)] = null);
(statearr_14693_14726[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (3)))
{var inst_14671 = (state_14673[(2)]);var state_14673__$1 = state_14673;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14673__$1,inst_14671);
} else
{if((state_val_14674 === (12)))
{var inst_14659 = (state_14673[(2)]);var state_14673__$1 = state_14673;var statearr_14694_14727 = state_14673__$1;(statearr_14694_14727[(2)] = inst_14659);
(statearr_14694_14727[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (2)))
{var state_14673__$1 = state_14673;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14673__$1,(4),in$);
} else
{if((state_val_14674 === (23)))
{var inst_14667 = (state_14673[(2)]);var state_14673__$1 = state_14673;var statearr_14695_14728 = state_14673__$1;(statearr_14695_14728[(2)] = inst_14667);
(statearr_14695_14728[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (19)))
{var inst_14654 = (state_14673[(2)]);var state_14673__$1 = state_14673;var statearr_14696_14729 = state_14673__$1;(statearr_14696_14729[(2)] = inst_14654);
(statearr_14696_14729[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (11)))
{var inst_14639 = (state_14673[(7)]);var inst_14625 = (state_14673[(12)]);var inst_14639__$1 = cljs.core.seq.call(null,inst_14625);var state_14673__$1 = (function (){var statearr_14697 = state_14673;(statearr_14697[(7)] = inst_14639__$1);
return statearr_14697;
})();if(inst_14639__$1)
{var statearr_14698_14730 = state_14673__$1;(statearr_14698_14730[(1)] = (14));
} else
{var statearr_14699_14731 = state_14673__$1;(statearr_14699_14731[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (9)))
{var inst_14661 = (state_14673[(2)]);var inst_14662 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14673__$1 = (function (){var statearr_14700 = state_14673;(statearr_14700[(15)] = inst_14661);
return statearr_14700;
})();if(cljs.core.truth_(inst_14662))
{var statearr_14701_14732 = state_14673__$1;(statearr_14701_14732[(1)] = (21));
} else
{var statearr_14702_14733 = state_14673__$1;(statearr_14702_14733[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (5)))
{var inst_14617 = cljs.core.async.close_BANG_.call(null,out);var state_14673__$1 = state_14673;var statearr_14703_14734 = state_14673__$1;(statearr_14703_14734[(2)] = inst_14617);
(statearr_14703_14734[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (14)))
{var inst_14639 = (state_14673[(7)]);var inst_14641 = cljs.core.chunked_seq_QMARK_.call(null,inst_14639);var state_14673__$1 = state_14673;if(inst_14641)
{var statearr_14704_14735 = state_14673__$1;(statearr_14704_14735[(1)] = (17));
} else
{var statearr_14705_14736 = state_14673__$1;(statearr_14705_14736[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (16)))
{var inst_14657 = (state_14673[(2)]);var state_14673__$1 = state_14673;var statearr_14706_14737 = state_14673__$1;(statearr_14706_14737[(2)] = inst_14657);
(statearr_14706_14737[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14674 === (10)))
{var inst_14626 = (state_14673[(10)]);var inst_14628 = (state_14673[(11)]);var inst_14633 = cljs.core._nth.call(null,inst_14626,inst_14628);var state_14673__$1 = state_14673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14673__$1,(13),out,inst_14633);
} else
{if((state_val_14674 === (18)))
{var inst_14639 = (state_14673[(7)]);var inst_14648 = cljs.core.first.call(null,inst_14639);var state_14673__$1 = state_14673;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14673__$1,(20),out,inst_14648);
} else
{if((state_val_14674 === (8)))
{var inst_14627 = (state_14673[(8)]);var inst_14628 = (state_14673[(11)]);var inst_14630 = (inst_14628 < inst_14627);var inst_14631 = inst_14630;var state_14673__$1 = state_14673;if(cljs.core.truth_(inst_14631))
{var statearr_14707_14738 = state_14673__$1;(statearr_14707_14738[(1)] = (10));
} else
{var statearr_14708_14739 = state_14673__$1;(statearr_14708_14739[(1)] = (11));
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
});})(c__5823__auto__))
;return ((function (switch__5808__auto__,c__5823__auto__){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14712[(0)] = state_machine__5809__auto__);
(statearr_14712[(1)] = (1));
return statearr_14712;
});
var state_machine__5809__auto____1 = (function (state_14673){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14673);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14713){if((e14713 instanceof Object))
{var ex__5812__auto__ = e14713;var statearr_14714_14740 = state_14673;(statearr_14714_14740[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14673);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14713;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14741 = state_14673;
state_14673 = G__14741;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14673){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto__))
})();var state__5825__auto__ = (function (){var statearr_14715 = f__5824__auto__.call(null);(statearr_14715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto__);
return statearr_14715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto__))
);
return c__5823__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14838,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14838,out){
return (function (state_14813){var state_val_14814 = (state_14813[(1)]);if((state_val_14814 === (7)))
{var inst_14808 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14815_14839 = state_14813__$1;(statearr_14815_14839[(2)] = inst_14808);
(statearr_14815_14839[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (1)))
{var inst_14790 = null;var state_14813__$1 = (function (){var statearr_14816 = state_14813;(statearr_14816[(7)] = inst_14790);
return statearr_14816;
})();var statearr_14817_14840 = state_14813__$1;(statearr_14817_14840[(2)] = null);
(statearr_14817_14840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (4)))
{var inst_14793 = (state_14813[(8)]);var inst_14793__$1 = (state_14813[(2)]);var inst_14794 = (inst_14793__$1 == null);var inst_14795 = cljs.core.not.call(null,inst_14794);var state_14813__$1 = (function (){var statearr_14818 = state_14813;(statearr_14818[(8)] = inst_14793__$1);
return statearr_14818;
})();if(inst_14795)
{var statearr_14819_14841 = state_14813__$1;(statearr_14819_14841[(1)] = (5));
} else
{var statearr_14820_14842 = state_14813__$1;(statearr_14820_14842[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (6)))
{var state_14813__$1 = state_14813;var statearr_14821_14843 = state_14813__$1;(statearr_14821_14843[(2)] = null);
(statearr_14821_14843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (3)))
{var inst_14810 = (state_14813[(2)]);var inst_14811 = cljs.core.async.close_BANG_.call(null,out);var state_14813__$1 = (function (){var statearr_14822 = state_14813;(statearr_14822[(9)] = inst_14810);
return statearr_14822;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14813__$1,inst_14811);
} else
{if((state_val_14814 === (2)))
{var state_14813__$1 = state_14813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(4),ch);
} else
{if((state_val_14814 === (11)))
{var inst_14793 = (state_14813[(8)]);var inst_14802 = (state_14813[(2)]);var inst_14790 = inst_14793;var state_14813__$1 = (function (){var statearr_14823 = state_14813;(statearr_14823[(10)] = inst_14802);
(statearr_14823[(7)] = inst_14790);
return statearr_14823;
})();var statearr_14824_14844 = state_14813__$1;(statearr_14824_14844[(2)] = null);
(statearr_14824_14844[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (9)))
{var inst_14793 = (state_14813[(8)]);var state_14813__$1 = state_14813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14813__$1,(11),out,inst_14793);
} else
{if((state_val_14814 === (5)))
{var inst_14793 = (state_14813[(8)]);var inst_14790 = (state_14813[(7)]);var inst_14797 = cljs.core._EQ_.call(null,inst_14793,inst_14790);var state_14813__$1 = state_14813;if(inst_14797)
{var statearr_14826_14845 = state_14813__$1;(statearr_14826_14845[(1)] = (8));
} else
{var statearr_14827_14846 = state_14813__$1;(statearr_14827_14846[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (10)))
{var inst_14805 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14828_14847 = state_14813__$1;(statearr_14828_14847[(2)] = inst_14805);
(statearr_14828_14847[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (8)))
{var inst_14790 = (state_14813[(7)]);var tmp14825 = inst_14790;var inst_14790__$1 = tmp14825;var state_14813__$1 = (function (){var statearr_14829 = state_14813;(statearr_14829[(7)] = inst_14790__$1);
return statearr_14829;
})();var statearr_14830_14848 = state_14813__$1;(statearr_14830_14848[(2)] = null);
(statearr_14830_14848[(1)] = (2));
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
});})(c__5823__auto___14838,out))
;return ((function (switch__5808__auto__,c__5823__auto___14838,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14834 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14834[(0)] = state_machine__5809__auto__);
(statearr_14834[(1)] = (1));
return statearr_14834;
});
var state_machine__5809__auto____1 = (function (state_14813){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14813);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14835){if((e14835 instanceof Object))
{var ex__5812__auto__ = e14835;var statearr_14836_14849 = state_14813;(statearr_14836_14849[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14850 = state_14813;
state_14813 = G__14850;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14813){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14838,out))
})();var state__5825__auto__ = (function (){var statearr_14837 = f__5824__auto__.call(null);(statearr_14837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14838);
return statearr_14837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14838,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___14985 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___14985,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___14985,out){
return (function (state_14955){var state_val_14956 = (state_14955[(1)]);if((state_val_14956 === (7)))
{var inst_14951 = (state_14955[(2)]);var state_14955__$1 = state_14955;var statearr_14957_14986 = state_14955__$1;(statearr_14957_14986[(2)] = inst_14951);
(statearr_14957_14986[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (1)))
{var inst_14918 = (new Array(n));var inst_14919 = inst_14918;var inst_14920 = (0);var state_14955__$1 = (function (){var statearr_14958 = state_14955;(statearr_14958[(7)] = inst_14919);
(statearr_14958[(8)] = inst_14920);
return statearr_14958;
})();var statearr_14959_14987 = state_14955__$1;(statearr_14959_14987[(2)] = null);
(statearr_14959_14987[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (4)))
{var inst_14923 = (state_14955[(9)]);var inst_14923__$1 = (state_14955[(2)]);var inst_14924 = (inst_14923__$1 == null);var inst_14925 = cljs.core.not.call(null,inst_14924);var state_14955__$1 = (function (){var statearr_14960 = state_14955;(statearr_14960[(9)] = inst_14923__$1);
return statearr_14960;
})();if(inst_14925)
{var statearr_14961_14988 = state_14955__$1;(statearr_14961_14988[(1)] = (5));
} else
{var statearr_14962_14989 = state_14955__$1;(statearr_14962_14989[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (15)))
{var inst_14945 = (state_14955[(2)]);var state_14955__$1 = state_14955;var statearr_14963_14990 = state_14955__$1;(statearr_14963_14990[(2)] = inst_14945);
(statearr_14963_14990[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (13)))
{var state_14955__$1 = state_14955;var statearr_14964_14991 = state_14955__$1;(statearr_14964_14991[(2)] = null);
(statearr_14964_14991[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (6)))
{var inst_14920 = (state_14955[(8)]);var inst_14941 = (inst_14920 > (0));var state_14955__$1 = state_14955;if(cljs.core.truth_(inst_14941))
{var statearr_14965_14992 = state_14955__$1;(statearr_14965_14992[(1)] = (12));
} else
{var statearr_14966_14993 = state_14955__$1;(statearr_14966_14993[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (3)))
{var inst_14953 = (state_14955[(2)]);var state_14955__$1 = state_14955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14955__$1,inst_14953);
} else
{if((state_val_14956 === (12)))
{var inst_14919 = (state_14955[(7)]);var inst_14943 = cljs.core.vec.call(null,inst_14919);var state_14955__$1 = state_14955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14955__$1,(15),out,inst_14943);
} else
{if((state_val_14956 === (2)))
{var state_14955__$1 = state_14955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14955__$1,(4),ch);
} else
{if((state_val_14956 === (11)))
{var inst_14935 = (state_14955[(2)]);var inst_14936 = (new Array(n));var inst_14919 = inst_14936;var inst_14920 = (0);var state_14955__$1 = (function (){var statearr_14967 = state_14955;(statearr_14967[(7)] = inst_14919);
(statearr_14967[(10)] = inst_14935);
(statearr_14967[(8)] = inst_14920);
return statearr_14967;
})();var statearr_14968_14994 = state_14955__$1;(statearr_14968_14994[(2)] = null);
(statearr_14968_14994[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (9)))
{var inst_14919 = (state_14955[(7)]);var inst_14933 = cljs.core.vec.call(null,inst_14919);var state_14955__$1 = state_14955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14955__$1,(11),out,inst_14933);
} else
{if((state_val_14956 === (5)))
{var inst_14919 = (state_14955[(7)]);var inst_14923 = (state_14955[(9)]);var inst_14928 = (state_14955[(11)]);var inst_14920 = (state_14955[(8)]);var inst_14927 = (inst_14919[inst_14920] = inst_14923);var inst_14928__$1 = (inst_14920 + (1));var inst_14929 = (inst_14928__$1 < n);var state_14955__$1 = (function (){var statearr_14969 = state_14955;(statearr_14969[(11)] = inst_14928__$1);
(statearr_14969[(12)] = inst_14927);
return statearr_14969;
})();if(cljs.core.truth_(inst_14929))
{var statearr_14970_14995 = state_14955__$1;(statearr_14970_14995[(1)] = (8));
} else
{var statearr_14971_14996 = state_14955__$1;(statearr_14971_14996[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (14)))
{var inst_14948 = (state_14955[(2)]);var inst_14949 = cljs.core.async.close_BANG_.call(null,out);var state_14955__$1 = (function (){var statearr_14973 = state_14955;(statearr_14973[(13)] = inst_14948);
return statearr_14973;
})();var statearr_14974_14997 = state_14955__$1;(statearr_14974_14997[(2)] = inst_14949);
(statearr_14974_14997[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (10)))
{var inst_14939 = (state_14955[(2)]);var state_14955__$1 = state_14955;var statearr_14975_14998 = state_14955__$1;(statearr_14975_14998[(2)] = inst_14939);
(statearr_14975_14998[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14956 === (8)))
{var inst_14919 = (state_14955[(7)]);var inst_14928 = (state_14955[(11)]);var tmp14972 = inst_14919;var inst_14919__$1 = tmp14972;var inst_14920 = inst_14928;var state_14955__$1 = (function (){var statearr_14976 = state_14955;(statearr_14976[(7)] = inst_14919__$1);
(statearr_14976[(8)] = inst_14920);
return statearr_14976;
})();var statearr_14977_14999 = state_14955__$1;(statearr_14977_14999[(2)] = null);
(statearr_14977_14999[(1)] = (2));
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
});})(c__5823__auto___14985,out))
;return ((function (switch__5808__auto__,c__5823__auto___14985,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_14981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14981[(0)] = state_machine__5809__auto__);
(statearr_14981[(1)] = (1));
return statearr_14981;
});
var state_machine__5809__auto____1 = (function (state_14955){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_14955);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e14982){if((e14982 instanceof Object))
{var ex__5812__auto__ = e14982;var statearr_14983_15000 = state_14955;(statearr_14983_15000[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14982;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15001 = state_14955;
state_14955 = G__15001;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_14955){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_14955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___14985,out))
})();var state__5825__auto__ = (function (){var statearr_14984 = f__5824__auto__.call(null);(statearr_14984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___14985);
return statearr_14984;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___14985,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5823__auto___15144 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5823__auto___15144,out){
return (function (){var f__5824__auto__ = (function (){var switch__5808__auto__ = ((function (c__5823__auto___15144,out){
return (function (state_15114){var state_val_15115 = (state_15114[(1)]);if((state_val_15115 === (7)))
{var inst_15110 = (state_15114[(2)]);var state_15114__$1 = state_15114;var statearr_15116_15145 = state_15114__$1;(statearr_15116_15145[(2)] = inst_15110);
(statearr_15116_15145[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (1)))
{var inst_15073 = [];var inst_15074 = inst_15073;var inst_15075 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15114__$1 = (function (){var statearr_15117 = state_15114;(statearr_15117[(7)] = inst_15074);
(statearr_15117[(8)] = inst_15075);
return statearr_15117;
})();var statearr_15118_15146 = state_15114__$1;(statearr_15118_15146[(2)] = null);
(statearr_15118_15146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (4)))
{var inst_15078 = (state_15114[(9)]);var inst_15078__$1 = (state_15114[(2)]);var inst_15079 = (inst_15078__$1 == null);var inst_15080 = cljs.core.not.call(null,inst_15079);var state_15114__$1 = (function (){var statearr_15119 = state_15114;(statearr_15119[(9)] = inst_15078__$1);
return statearr_15119;
})();if(inst_15080)
{var statearr_15120_15147 = state_15114__$1;(statearr_15120_15147[(1)] = (5));
} else
{var statearr_15121_15148 = state_15114__$1;(statearr_15121_15148[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (15)))
{var inst_15104 = (state_15114[(2)]);var state_15114__$1 = state_15114;var statearr_15122_15149 = state_15114__$1;(statearr_15122_15149[(2)] = inst_15104);
(statearr_15122_15149[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (13)))
{var state_15114__$1 = state_15114;var statearr_15123_15150 = state_15114__$1;(statearr_15123_15150[(2)] = null);
(statearr_15123_15150[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (6)))
{var inst_15074 = (state_15114[(7)]);var inst_15099 = inst_15074.length;var inst_15100 = (inst_15099 > (0));var state_15114__$1 = state_15114;if(cljs.core.truth_(inst_15100))
{var statearr_15124_15151 = state_15114__$1;(statearr_15124_15151[(1)] = (12));
} else
{var statearr_15125_15152 = state_15114__$1;(statearr_15125_15152[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (3)))
{var inst_15112 = (state_15114[(2)]);var state_15114__$1 = state_15114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15114__$1,inst_15112);
} else
{if((state_val_15115 === (12)))
{var inst_15074 = (state_15114[(7)]);var inst_15102 = cljs.core.vec.call(null,inst_15074);var state_15114__$1 = state_15114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15114__$1,(15),out,inst_15102);
} else
{if((state_val_15115 === (2)))
{var state_15114__$1 = state_15114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15114__$1,(4),ch);
} else
{if((state_val_15115 === (11)))
{var inst_15082 = (state_15114[(10)]);var inst_15078 = (state_15114[(9)]);var inst_15092 = (state_15114[(2)]);var inst_15093 = [];var inst_15094 = inst_15093.push(inst_15078);var inst_15074 = inst_15093;var inst_15075 = inst_15082;var state_15114__$1 = (function (){var statearr_15126 = state_15114;(statearr_15126[(11)] = inst_15092);
(statearr_15126[(7)] = inst_15074);
(statearr_15126[(12)] = inst_15094);
(statearr_15126[(8)] = inst_15075);
return statearr_15126;
})();var statearr_15127_15153 = state_15114__$1;(statearr_15127_15153[(2)] = null);
(statearr_15127_15153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (9)))
{var inst_15074 = (state_15114[(7)]);var inst_15090 = cljs.core.vec.call(null,inst_15074);var state_15114__$1 = state_15114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15114__$1,(11),out,inst_15090);
} else
{if((state_val_15115 === (5)))
{var inst_15082 = (state_15114[(10)]);var inst_15078 = (state_15114[(9)]);var inst_15075 = (state_15114[(8)]);var inst_15082__$1 = f.call(null,inst_15078);var inst_15083 = cljs.core._EQ_.call(null,inst_15082__$1,inst_15075);var inst_15084 = cljs.core.keyword_identical_QMARK_.call(null,inst_15075,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15085 = (inst_15083) || (inst_15084);var state_15114__$1 = (function (){var statearr_15128 = state_15114;(statearr_15128[(10)] = inst_15082__$1);
return statearr_15128;
})();if(cljs.core.truth_(inst_15085))
{var statearr_15129_15154 = state_15114__$1;(statearr_15129_15154[(1)] = (8));
} else
{var statearr_15130_15155 = state_15114__$1;(statearr_15130_15155[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (14)))
{var inst_15107 = (state_15114[(2)]);var inst_15108 = cljs.core.async.close_BANG_.call(null,out);var state_15114__$1 = (function (){var statearr_15132 = state_15114;(statearr_15132[(13)] = inst_15107);
return statearr_15132;
})();var statearr_15133_15156 = state_15114__$1;(statearr_15133_15156[(2)] = inst_15108);
(statearr_15133_15156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (10)))
{var inst_15097 = (state_15114[(2)]);var state_15114__$1 = state_15114;var statearr_15134_15157 = state_15114__$1;(statearr_15134_15157[(2)] = inst_15097);
(statearr_15134_15157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15115 === (8)))
{var inst_15082 = (state_15114[(10)]);var inst_15078 = (state_15114[(9)]);var inst_15074 = (state_15114[(7)]);var inst_15087 = inst_15074.push(inst_15078);var tmp15131 = inst_15074;var inst_15074__$1 = tmp15131;var inst_15075 = inst_15082;var state_15114__$1 = (function (){var statearr_15135 = state_15114;(statearr_15135[(14)] = inst_15087);
(statearr_15135[(7)] = inst_15074__$1);
(statearr_15135[(8)] = inst_15075);
return statearr_15135;
})();var statearr_15136_15158 = state_15114__$1;(statearr_15136_15158[(2)] = null);
(statearr_15136_15158[(1)] = (2));
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
});})(c__5823__auto___15144,out))
;return ((function (switch__5808__auto__,c__5823__auto___15144,out){
return (function() {
var state_machine__5809__auto__ = null;
var state_machine__5809__auto____0 = (function (){var statearr_15140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15140[(0)] = state_machine__5809__auto__);
(statearr_15140[(1)] = (1));
return statearr_15140;
});
var state_machine__5809__auto____1 = (function (state_15114){while(true){
var ret_value__5810__auto__ = (function (){try{while(true){
var result__5811__auto__ = switch__5808__auto__.call(null,state_15114);if(cljs.core.keyword_identical_QMARK_.call(null,result__5811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5811__auto__;
}
break;
}
}catch (e15141){if((e15141 instanceof Object))
{var ex__5812__auto__ = e15141;var statearr_15142_15159 = state_15114;(statearr_15142_15159[(5)] = ex__5812__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15141;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15160 = state_15114;
state_15114 = G__15160;
continue;
}
} else
{return ret_value__5810__auto__;
}
break;
}
});
state_machine__5809__auto__ = function(state_15114){
switch(arguments.length){
case 0:
return state_machine__5809__auto____0.call(this);
case 1:
return state_machine__5809__auto____1.call(this,state_15114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5809__auto____0;
state_machine__5809__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5809__auto____1;
return state_machine__5809__auto__;
})()
;})(switch__5808__auto__,c__5823__auto___15144,out))
})();var state__5825__auto__ = (function (){var statearr_15143 = f__5824__auto__.call(null);(statearr_15143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5823__auto___15144);
return statearr_15143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5825__auto__);
});})(c__5823__auto___15144,out))
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