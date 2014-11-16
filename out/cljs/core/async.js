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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12500 = (function (f,fn_handler,meta12501){
this.f = f;
this.fn_handler = fn_handler;
this.meta12501 = meta12501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12500.cljs$lang$type = true;
cljs.core.async.t12500.cljs$lang$ctorStr = "cljs.core.async/t12500";
cljs.core.async.t12500.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12500");
});
cljs.core.async.t12500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12502){var self__ = this;
var _12502__$1 = this;return self__.meta12501;
});
cljs.core.async.t12500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12502,meta12501__$1){var self__ = this;
var _12502__$1 = this;return (new cljs.core.async.t12500(self__.f,self__.fn_handler,meta12501__$1));
});
cljs.core.async.__GT_t12500 = (function __GT_t12500(f__$1,fn_handler__$1,meta12501){return (new cljs.core.async.t12500(f__$1,fn_handler__$1,meta12501));
});
}
return (new cljs.core.async.t12500(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12504 = buff;if(G__12504)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12504.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12504.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12504);
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
{var val_12505 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12505);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12505,ret){
return (function (){return fn1.call(null,val_12505);
});})(val_12505,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12506 = n;var x_12507 = (0);while(true){
if((x_12507 < n__4510__auto___12506))
{(a[x_12507] = (0));
{
var G__12508 = (x_12507 + (1));
x_12507 = G__12508;
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
var G__12509 = (i + (1));
i = G__12509;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12513 = (function (flag,alt_flag,meta12514){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12514 = meta12514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12513.cljs$lang$type = true;
cljs.core.async.t12513.cljs$lang$ctorStr = "cljs.core.async/t12513";
cljs.core.async.t12513.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12513");
});})(flag))
;
cljs.core.async.t12513.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12515){var self__ = this;
var _12515__$1 = this;return self__.meta12514;
});})(flag))
;
cljs.core.async.t12513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12515,meta12514__$1){var self__ = this;
var _12515__$1 = this;return (new cljs.core.async.t12513(self__.flag,self__.alt_flag,meta12514__$1));
});})(flag))
;
cljs.core.async.__GT_t12513 = ((function (flag){
return (function __GT_t12513(flag__$1,alt_flag__$1,meta12514){return (new cljs.core.async.t12513(flag__$1,alt_flag__$1,meta12514));
});})(flag))
;
}
return (new cljs.core.async.t12513(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12519 = (function (cb,flag,alt_handler,meta12520){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12520 = meta12520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12519.cljs$lang$type = true;
cljs.core.async.t12519.cljs$lang$ctorStr = "cljs.core.async/t12519";
cljs.core.async.t12519.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12519");
});
cljs.core.async.t12519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12521){var self__ = this;
var _12521__$1 = this;return self__.meta12520;
});
cljs.core.async.t12519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12521,meta12520__$1){var self__ = this;
var _12521__$1 = this;return (new cljs.core.async.t12519(self__.cb,self__.flag,self__.alt_handler,meta12520__$1));
});
cljs.core.async.__GT_t12519 = (function __GT_t12519(cb__$1,flag__$1,alt_handler__$1,meta12520){return (new cljs.core.async.t12519(cb__$1,flag__$1,alt_handler__$1,meta12520));
});
}
return (new cljs.core.async.t12519(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12522_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12522_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12523_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12523_SHARP_,port], null));
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
var G__12524 = (i + (1));
i = G__12524;
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
var alts_BANG___delegate = function (ports,p__12525){var map__12527 = p__12525;var map__12527__$1 = ((cljs.core.seq_QMARK_.call(null,map__12527))?cljs.core.apply.call(null,cljs.core.hash_map,map__12527):map__12527);var opts = map__12527__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12525 = null;if (arguments.length > 1) {
  p__12525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12525);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12528){
var ports = cljs.core.first(arglist__12528);
var p__12525 = cljs.core.rest(arglist__12528);
return alts_BANG___delegate(ports,p__12525);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5849__auto___12623 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___12623){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___12623){
return (function (state_12599){var state_val_12600 = (state_12599[(1)]);if((state_val_12600 === (7)))
{var inst_12595 = (state_12599[(2)]);var state_12599__$1 = state_12599;var statearr_12601_12624 = state_12599__$1;(statearr_12601_12624[(2)] = inst_12595);
(statearr_12601_12624[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (1)))
{var state_12599__$1 = state_12599;var statearr_12602_12625 = state_12599__$1;(statearr_12602_12625[(2)] = null);
(statearr_12602_12625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (4)))
{var inst_12578 = (state_12599[(7)]);var inst_12578__$1 = (state_12599[(2)]);var inst_12579 = (inst_12578__$1 == null);var state_12599__$1 = (function (){var statearr_12603 = state_12599;(statearr_12603[(7)] = inst_12578__$1);
return statearr_12603;
})();if(cljs.core.truth_(inst_12579))
{var statearr_12604_12626 = state_12599__$1;(statearr_12604_12626[(1)] = (5));
} else
{var statearr_12605_12627 = state_12599__$1;(statearr_12605_12627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (13)))
{var state_12599__$1 = state_12599;var statearr_12606_12628 = state_12599__$1;(statearr_12606_12628[(2)] = null);
(statearr_12606_12628[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (6)))
{var inst_12578 = (state_12599[(7)]);var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12599__$1,(11),to,inst_12578);
} else
{if((state_val_12600 === (3)))
{var inst_12597 = (state_12599[(2)]);var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12599__$1,inst_12597);
} else
{if((state_val_12600 === (12)))
{var state_12599__$1 = state_12599;var statearr_12607_12629 = state_12599__$1;(statearr_12607_12629[(2)] = null);
(statearr_12607_12629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (2)))
{var state_12599__$1 = state_12599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12599__$1,(4),from);
} else
{if((state_val_12600 === (11)))
{var inst_12588 = (state_12599[(2)]);var state_12599__$1 = state_12599;if(cljs.core.truth_(inst_12588))
{var statearr_12608_12630 = state_12599__$1;(statearr_12608_12630[(1)] = (12));
} else
{var statearr_12609_12631 = state_12599__$1;(statearr_12609_12631[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (9)))
{var state_12599__$1 = state_12599;var statearr_12610_12632 = state_12599__$1;(statearr_12610_12632[(2)] = null);
(statearr_12610_12632[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (5)))
{var state_12599__$1 = state_12599;if(cljs.core.truth_(close_QMARK_))
{var statearr_12611_12633 = state_12599__$1;(statearr_12611_12633[(1)] = (8));
} else
{var statearr_12612_12634 = state_12599__$1;(statearr_12612_12634[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (14)))
{var inst_12593 = (state_12599[(2)]);var state_12599__$1 = state_12599;var statearr_12613_12635 = state_12599__$1;(statearr_12613_12635[(2)] = inst_12593);
(statearr_12613_12635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (10)))
{var inst_12585 = (state_12599[(2)]);var state_12599__$1 = state_12599;var statearr_12614_12636 = state_12599__$1;(statearr_12614_12636[(2)] = inst_12585);
(statearr_12614_12636[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12600 === (8)))
{var inst_12582 = cljs.core.async.close_BANG_.call(null,to);var state_12599__$1 = state_12599;var statearr_12615_12637 = state_12599__$1;(statearr_12615_12637[(2)] = inst_12582);
(statearr_12615_12637[(1)] = (10));
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
});})(c__5849__auto___12623))
;return ((function (switch__5834__auto__,c__5849__auto___12623){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12619 = [null,null,null,null,null,null,null,null];(statearr_12619[(0)] = state_machine__5835__auto__);
(statearr_12619[(1)] = (1));
return statearr_12619;
});
var state_machine__5835__auto____1 = (function (state_12599){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12620){if((e12620 instanceof Object))
{var ex__5838__auto__ = e12620;var statearr_12621_12638 = state_12599;(statearr_12621_12638[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12620;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12639 = state_12599;
state_12599 = G__12639;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12599){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___12623))
})();var state__5851__auto__ = (function (){var statearr_12622 = f__5850__auto__.call(null);(statearr_12622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___12623);
return statearr_12622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___12623))
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
return (function (p__12823){var vec__12824 = p__12823;var v = cljs.core.nth.call(null,vec__12824,(0),null);var p = cljs.core.nth.call(null,vec__12824,(1),null);var job = vec__12824;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5849__auto___13006 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13006,res,vec__12824,v,p,job,jobs,results){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13006,res,vec__12824,v,p,job,jobs,results){
return (function (state_12829){var state_val_12830 = (state_12829[(1)]);if((state_val_12830 === (2)))
{var inst_12826 = (state_12829[(2)]);var inst_12827 = cljs.core.async.close_BANG_.call(null,res);var state_12829__$1 = (function (){var statearr_12831 = state_12829;(statearr_12831[(7)] = inst_12826);
return statearr_12831;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12829__$1,inst_12827);
} else
{if((state_val_12830 === (1)))
{var state_12829__$1 = state_12829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12829__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5849__auto___13006,res,vec__12824,v,p,job,jobs,results))
;return ((function (switch__5834__auto__,c__5849__auto___13006,res,vec__12824,v,p,job,jobs,results){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12835 = [null,null,null,null,null,null,null,null];(statearr_12835[(0)] = state_machine__5835__auto__);
(statearr_12835[(1)] = (1));
return statearr_12835;
});
var state_machine__5835__auto____1 = (function (state_12829){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12829);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12836){if((e12836 instanceof Object))
{var ex__5838__auto__ = e12836;var statearr_12837_13007 = state_12829;(statearr_12837_13007[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12829);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12836;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13008 = state_12829;
state_12829 = G__13008;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12829){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13006,res,vec__12824,v,p,job,jobs,results))
})();var state__5851__auto__ = (function (){var statearr_12838 = f__5850__auto__.call(null);(statearr_12838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13006);
return statearr_12838;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13006,res,vec__12824,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12839){var vec__12840 = p__12839;var v = cljs.core.nth.call(null,vec__12840,(0),null);var p = cljs.core.nth.call(null,vec__12840,(1),null);var job = vec__12840;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___13009 = n;var __13010 = (0);while(true){
if((__13010 < n__4510__auto___13009))
{var G__12841_13011 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12841_13011) {
case "async":
var c__5849__auto___13013 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13010,c__5849__auto___13013,G__12841_13011,n__4510__auto___13009,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (__13010,c__5849__auto___13013,G__12841_13011,n__4510__auto___13009,jobs,results,process,async){
return (function (state_12854){var state_val_12855 = (state_12854[(1)]);if((state_val_12855 === (7)))
{var inst_12850 = (state_12854[(2)]);var state_12854__$1 = state_12854;var statearr_12856_13014 = state_12854__$1;(statearr_12856_13014[(2)] = inst_12850);
(statearr_12856_13014[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (6)))
{var state_12854__$1 = state_12854;var statearr_12857_13015 = state_12854__$1;(statearr_12857_13015[(2)] = null);
(statearr_12857_13015[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (5)))
{var state_12854__$1 = state_12854;var statearr_12858_13016 = state_12854__$1;(statearr_12858_13016[(2)] = null);
(statearr_12858_13016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (4)))
{var inst_12844 = (state_12854[(2)]);var inst_12845 = async.call(null,inst_12844);var state_12854__$1 = state_12854;if(cljs.core.truth_(inst_12845))
{var statearr_12859_13017 = state_12854__$1;(statearr_12859_13017[(1)] = (5));
} else
{var statearr_12860_13018 = state_12854__$1;(statearr_12860_13018[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (3)))
{var inst_12852 = (state_12854[(2)]);var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12854__$1,inst_12852);
} else
{if((state_val_12855 === (2)))
{var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12854__$1,(4),jobs);
} else
{if((state_val_12855 === (1)))
{var state_12854__$1 = state_12854;var statearr_12861_13019 = state_12854__$1;(statearr_12861_13019[(2)] = null);
(statearr_12861_13019[(1)] = (2));
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
});})(__13010,c__5849__auto___13013,G__12841_13011,n__4510__auto___13009,jobs,results,process,async))
;return ((function (__13010,switch__5834__auto__,c__5849__auto___13013,G__12841_13011,n__4510__auto___13009,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12865 = [null,null,null,null,null,null,null];(statearr_12865[(0)] = state_machine__5835__auto__);
(statearr_12865[(1)] = (1));
return statearr_12865;
});
var state_machine__5835__auto____1 = (function (state_12854){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12854);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12866){if((e12866 instanceof Object))
{var ex__5838__auto__ = e12866;var statearr_12867_13020 = state_12854;(statearr_12867_13020[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12866;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13021 = state_12854;
state_12854 = G__13021;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12854){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(__13010,switch__5834__auto__,c__5849__auto___13013,G__12841_13011,n__4510__auto___13009,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_12868 = f__5850__auto__.call(null);(statearr_12868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13013);
return statearr_12868;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(__13010,c__5849__auto___13013,G__12841_13011,n__4510__auto___13009,jobs,results,process,async))
);

break;
case "compute":
var c__5849__auto___13022 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13010,c__5849__auto___13022,G__12841_13011,n__4510__auto___13009,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (__13010,c__5849__auto___13022,G__12841_13011,n__4510__auto___13009,jobs,results,process,async){
return (function (state_12881){var state_val_12882 = (state_12881[(1)]);if((state_val_12882 === (7)))
{var inst_12877 = (state_12881[(2)]);var state_12881__$1 = state_12881;var statearr_12883_13023 = state_12881__$1;(statearr_12883_13023[(2)] = inst_12877);
(statearr_12883_13023[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12882 === (6)))
{var state_12881__$1 = state_12881;var statearr_12884_13024 = state_12881__$1;(statearr_12884_13024[(2)] = null);
(statearr_12884_13024[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12882 === (5)))
{var state_12881__$1 = state_12881;var statearr_12885_13025 = state_12881__$1;(statearr_12885_13025[(2)] = null);
(statearr_12885_13025[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12882 === (4)))
{var inst_12871 = (state_12881[(2)]);var inst_12872 = process.call(null,inst_12871);var state_12881__$1 = state_12881;if(cljs.core.truth_(inst_12872))
{var statearr_12886_13026 = state_12881__$1;(statearr_12886_13026[(1)] = (5));
} else
{var statearr_12887_13027 = state_12881__$1;(statearr_12887_13027[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12882 === (3)))
{var inst_12879 = (state_12881[(2)]);var state_12881__$1 = state_12881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12881__$1,inst_12879);
} else
{if((state_val_12882 === (2)))
{var state_12881__$1 = state_12881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12881__$1,(4),jobs);
} else
{if((state_val_12882 === (1)))
{var state_12881__$1 = state_12881;var statearr_12888_13028 = state_12881__$1;(statearr_12888_13028[(2)] = null);
(statearr_12888_13028[(1)] = (2));
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
});})(__13010,c__5849__auto___13022,G__12841_13011,n__4510__auto___13009,jobs,results,process,async))
;return ((function (__13010,switch__5834__auto__,c__5849__auto___13022,G__12841_13011,n__4510__auto___13009,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12892 = [null,null,null,null,null,null,null];(statearr_12892[(0)] = state_machine__5835__auto__);
(statearr_12892[(1)] = (1));
return statearr_12892;
});
var state_machine__5835__auto____1 = (function (state_12881){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12881);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12893){if((e12893 instanceof Object))
{var ex__5838__auto__ = e12893;var statearr_12894_13029 = state_12881;(statearr_12894_13029[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12881);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12893;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13030 = state_12881;
state_12881 = G__13030;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12881){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(__13010,switch__5834__auto__,c__5849__auto___13022,G__12841_13011,n__4510__auto___13009,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_12895 = f__5850__auto__.call(null);(statearr_12895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13022);
return statearr_12895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(__13010,c__5849__auto___13022,G__12841_13011,n__4510__auto___13009,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__13031 = (__13010 + (1));
__13010 = G__13031;
continue;
}
} else
{}
break;
}
var c__5849__auto___13032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13032,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13032,jobs,results,process,async){
return (function (state_12917){var state_val_12918 = (state_12917[(1)]);if((state_val_12918 === (9)))
{var inst_12910 = (state_12917[(2)]);var state_12917__$1 = (function (){var statearr_12919 = state_12917;(statearr_12919[(7)] = inst_12910);
return statearr_12919;
})();var statearr_12920_13033 = state_12917__$1;(statearr_12920_13033[(2)] = null);
(statearr_12920_13033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12918 === (8)))
{var inst_12903 = (state_12917[(8)]);var inst_12908 = (state_12917[(2)]);var state_12917__$1 = (function (){var statearr_12921 = state_12917;(statearr_12921[(9)] = inst_12908);
return statearr_12921;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12917__$1,(9),results,inst_12903);
} else
{if((state_val_12918 === (7)))
{var inst_12913 = (state_12917[(2)]);var state_12917__$1 = state_12917;var statearr_12922_13034 = state_12917__$1;(statearr_12922_13034[(2)] = inst_12913);
(statearr_12922_13034[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12918 === (6)))
{var inst_12898 = (state_12917[(10)]);var inst_12903 = (state_12917[(8)]);var inst_12903__$1 = cljs.core.async.chan.call(null,(1));var inst_12904 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12905 = [inst_12898,inst_12903__$1];var inst_12906 = (new cljs.core.PersistentVector(null,2,(5),inst_12904,inst_12905,null));var state_12917__$1 = (function (){var statearr_12923 = state_12917;(statearr_12923[(8)] = inst_12903__$1);
return statearr_12923;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12917__$1,(8),jobs,inst_12906);
} else
{if((state_val_12918 === (5)))
{var inst_12901 = cljs.core.async.close_BANG_.call(null,jobs);var state_12917__$1 = state_12917;var statearr_12924_13035 = state_12917__$1;(statearr_12924_13035[(2)] = inst_12901);
(statearr_12924_13035[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12918 === (4)))
{var inst_12898 = (state_12917[(10)]);var inst_12898__$1 = (state_12917[(2)]);var inst_12899 = (inst_12898__$1 == null);var state_12917__$1 = (function (){var statearr_12925 = state_12917;(statearr_12925[(10)] = inst_12898__$1);
return statearr_12925;
})();if(cljs.core.truth_(inst_12899))
{var statearr_12926_13036 = state_12917__$1;(statearr_12926_13036[(1)] = (5));
} else
{var statearr_12927_13037 = state_12917__$1;(statearr_12927_13037[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12918 === (3)))
{var inst_12915 = (state_12917[(2)]);var state_12917__$1 = state_12917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12917__$1,inst_12915);
} else
{if((state_val_12918 === (2)))
{var state_12917__$1 = state_12917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12917__$1,(4),from);
} else
{if((state_val_12918 === (1)))
{var state_12917__$1 = state_12917;var statearr_12928_13038 = state_12917__$1;(statearr_12928_13038[(2)] = null);
(statearr_12928_13038[(1)] = (2));
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
});})(c__5849__auto___13032,jobs,results,process,async))
;return ((function (switch__5834__auto__,c__5849__auto___13032,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12932 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12932[(0)] = state_machine__5835__auto__);
(statearr_12932[(1)] = (1));
return statearr_12932;
});
var state_machine__5835__auto____1 = (function (state_12917){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12933){if((e12933 instanceof Object))
{var ex__5838__auto__ = e12933;var statearr_12934_13039 = state_12917;(statearr_12934_13039[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12933;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13040 = state_12917;
state_12917 = G__13040;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12917){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13032,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_12935 = f__5850__auto__.call(null);(statearr_12935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13032);
return statearr_12935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13032,jobs,results,process,async))
);
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__,jobs,results,process,async){
return (function (state_12973){var state_val_12974 = (state_12973[(1)]);if((state_val_12974 === (7)))
{var inst_12969 = (state_12973[(2)]);var state_12973__$1 = state_12973;var statearr_12975_13041 = state_12973__$1;(statearr_12975_13041[(2)] = inst_12969);
(statearr_12975_13041[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (20)))
{var state_12973__$1 = state_12973;var statearr_12976_13042 = state_12973__$1;(statearr_12976_13042[(2)] = null);
(statearr_12976_13042[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (1)))
{var state_12973__$1 = state_12973;var statearr_12977_13043 = state_12973__$1;(statearr_12977_13043[(2)] = null);
(statearr_12977_13043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (4)))
{var inst_12938 = (state_12973[(7)]);var inst_12938__$1 = (state_12973[(2)]);var inst_12939 = (inst_12938__$1 == null);var state_12973__$1 = (function (){var statearr_12978 = state_12973;(statearr_12978[(7)] = inst_12938__$1);
return statearr_12978;
})();if(cljs.core.truth_(inst_12939))
{var statearr_12979_13044 = state_12973__$1;(statearr_12979_13044[(1)] = (5));
} else
{var statearr_12980_13045 = state_12973__$1;(statearr_12980_13045[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (15)))
{var inst_12951 = (state_12973[(8)]);var state_12973__$1 = state_12973;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12973__$1,(18),to,inst_12951);
} else
{if((state_val_12974 === (21)))
{var inst_12964 = (state_12973[(2)]);var state_12973__$1 = state_12973;var statearr_12981_13046 = state_12973__$1;(statearr_12981_13046[(2)] = inst_12964);
(statearr_12981_13046[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (13)))
{var inst_12966 = (state_12973[(2)]);var state_12973__$1 = (function (){var statearr_12982 = state_12973;(statearr_12982[(9)] = inst_12966);
return statearr_12982;
})();var statearr_12983_13047 = state_12973__$1;(statearr_12983_13047[(2)] = null);
(statearr_12983_13047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (6)))
{var inst_12938 = (state_12973[(7)]);var state_12973__$1 = state_12973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12973__$1,(11),inst_12938);
} else
{if((state_val_12974 === (17)))
{var inst_12959 = (state_12973[(2)]);var state_12973__$1 = state_12973;if(cljs.core.truth_(inst_12959))
{var statearr_12984_13048 = state_12973__$1;(statearr_12984_13048[(1)] = (19));
} else
{var statearr_12985_13049 = state_12973__$1;(statearr_12985_13049[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (3)))
{var inst_12971 = (state_12973[(2)]);var state_12973__$1 = state_12973;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12973__$1,inst_12971);
} else
{if((state_val_12974 === (12)))
{var inst_12948 = (state_12973[(10)]);var state_12973__$1 = state_12973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12973__$1,(14),inst_12948);
} else
{if((state_val_12974 === (2)))
{var state_12973__$1 = state_12973;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12973__$1,(4),results);
} else
{if((state_val_12974 === (19)))
{var state_12973__$1 = state_12973;var statearr_12986_13050 = state_12973__$1;(statearr_12986_13050[(2)] = null);
(statearr_12986_13050[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (11)))
{var inst_12948 = (state_12973[(2)]);var state_12973__$1 = (function (){var statearr_12987 = state_12973;(statearr_12987[(10)] = inst_12948);
return statearr_12987;
})();var statearr_12988_13051 = state_12973__$1;(statearr_12988_13051[(2)] = null);
(statearr_12988_13051[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (9)))
{var state_12973__$1 = state_12973;var statearr_12989_13052 = state_12973__$1;(statearr_12989_13052[(2)] = null);
(statearr_12989_13052[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (5)))
{var state_12973__$1 = state_12973;if(cljs.core.truth_(close_QMARK_))
{var statearr_12990_13053 = state_12973__$1;(statearr_12990_13053[(1)] = (8));
} else
{var statearr_12991_13054 = state_12973__$1;(statearr_12991_13054[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (14)))
{var inst_12953 = (state_12973[(11)]);var inst_12951 = (state_12973[(8)]);var inst_12951__$1 = (state_12973[(2)]);var inst_12952 = (inst_12951__$1 == null);var inst_12953__$1 = cljs.core.not.call(null,inst_12952);var state_12973__$1 = (function (){var statearr_12992 = state_12973;(statearr_12992[(11)] = inst_12953__$1);
(statearr_12992[(8)] = inst_12951__$1);
return statearr_12992;
})();if(inst_12953__$1)
{var statearr_12993_13055 = state_12973__$1;(statearr_12993_13055[(1)] = (15));
} else
{var statearr_12994_13056 = state_12973__$1;(statearr_12994_13056[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (16)))
{var inst_12953 = (state_12973[(11)]);var state_12973__$1 = state_12973;var statearr_12995_13057 = state_12973__$1;(statearr_12995_13057[(2)] = inst_12953);
(statearr_12995_13057[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (10)))
{var inst_12945 = (state_12973[(2)]);var state_12973__$1 = state_12973;var statearr_12996_13058 = state_12973__$1;(statearr_12996_13058[(2)] = inst_12945);
(statearr_12996_13058[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (18)))
{var inst_12956 = (state_12973[(2)]);var state_12973__$1 = state_12973;var statearr_12997_13059 = state_12973__$1;(statearr_12997_13059[(2)] = inst_12956);
(statearr_12997_13059[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12974 === (8)))
{var inst_12942 = cljs.core.async.close_BANG_.call(null,to);var state_12973__$1 = state_12973;var statearr_12998_13060 = state_12973__$1;(statearr_12998_13060[(2)] = inst_12942);
(statearr_12998_13060[(1)] = (10));
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
});})(c__5849__auto__,jobs,results,process,async))
;return ((function (switch__5834__auto__,c__5849__auto__,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13002 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13002[(0)] = state_machine__5835__auto__);
(statearr_13002[(1)] = (1));
return statearr_13002;
});
var state_machine__5835__auto____1 = (function (state_12973){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12973);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13003){if((e13003 instanceof Object))
{var ex__5838__auto__ = e13003;var statearr_13004_13061 = state_12973;(statearr_13004_13061[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12973);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13003;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13062 = state_12973;
state_12973 = G__13062;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12973){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_13005 = f__5850__auto__.call(null);(statearr_13005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__,jobs,results,process,async))
);
return c__5849__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5849__auto___13163 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13163,tc,fc){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13163,tc,fc){
return (function (state_13138){var state_val_13139 = (state_13138[(1)]);if((state_val_13139 === (7)))
{var inst_13134 = (state_13138[(2)]);var state_13138__$1 = state_13138;var statearr_13140_13164 = state_13138__$1;(statearr_13140_13164[(2)] = inst_13134);
(statearr_13140_13164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (1)))
{var state_13138__$1 = state_13138;var statearr_13141_13165 = state_13138__$1;(statearr_13141_13165[(2)] = null);
(statearr_13141_13165[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (4)))
{var inst_13115 = (state_13138[(7)]);var inst_13115__$1 = (state_13138[(2)]);var inst_13116 = (inst_13115__$1 == null);var state_13138__$1 = (function (){var statearr_13142 = state_13138;(statearr_13142[(7)] = inst_13115__$1);
return statearr_13142;
})();if(cljs.core.truth_(inst_13116))
{var statearr_13143_13166 = state_13138__$1;(statearr_13143_13166[(1)] = (5));
} else
{var statearr_13144_13167 = state_13138__$1;(statearr_13144_13167[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (13)))
{var state_13138__$1 = state_13138;var statearr_13145_13168 = state_13138__$1;(statearr_13145_13168[(2)] = null);
(statearr_13145_13168[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (6)))
{var inst_13115 = (state_13138[(7)]);var inst_13121 = p.call(null,inst_13115);var state_13138__$1 = state_13138;if(cljs.core.truth_(inst_13121))
{var statearr_13146_13169 = state_13138__$1;(statearr_13146_13169[(1)] = (9));
} else
{var statearr_13147_13170 = state_13138__$1;(statearr_13147_13170[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (3)))
{var inst_13136 = (state_13138[(2)]);var state_13138__$1 = state_13138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13138__$1,inst_13136);
} else
{if((state_val_13139 === (12)))
{var state_13138__$1 = state_13138;var statearr_13148_13171 = state_13138__$1;(statearr_13148_13171[(2)] = null);
(statearr_13148_13171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (2)))
{var state_13138__$1 = state_13138;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13138__$1,(4),ch);
} else
{if((state_val_13139 === (11)))
{var inst_13115 = (state_13138[(7)]);var inst_13125 = (state_13138[(2)]);var state_13138__$1 = state_13138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13138__$1,(8),inst_13125,inst_13115);
} else
{if((state_val_13139 === (9)))
{var state_13138__$1 = state_13138;var statearr_13149_13172 = state_13138__$1;(statearr_13149_13172[(2)] = tc);
(statearr_13149_13172[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (5)))
{var inst_13118 = cljs.core.async.close_BANG_.call(null,tc);var inst_13119 = cljs.core.async.close_BANG_.call(null,fc);var state_13138__$1 = (function (){var statearr_13150 = state_13138;(statearr_13150[(8)] = inst_13118);
return statearr_13150;
})();var statearr_13151_13173 = state_13138__$1;(statearr_13151_13173[(2)] = inst_13119);
(statearr_13151_13173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (14)))
{var inst_13132 = (state_13138[(2)]);var state_13138__$1 = state_13138;var statearr_13152_13174 = state_13138__$1;(statearr_13152_13174[(2)] = inst_13132);
(statearr_13152_13174[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (10)))
{var state_13138__$1 = state_13138;var statearr_13153_13175 = state_13138__$1;(statearr_13153_13175[(2)] = fc);
(statearr_13153_13175[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13139 === (8)))
{var inst_13127 = (state_13138[(2)]);var state_13138__$1 = state_13138;if(cljs.core.truth_(inst_13127))
{var statearr_13154_13176 = state_13138__$1;(statearr_13154_13176[(1)] = (12));
} else
{var statearr_13155_13177 = state_13138__$1;(statearr_13155_13177[(1)] = (13));
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
});})(c__5849__auto___13163,tc,fc))
;return ((function (switch__5834__auto__,c__5849__auto___13163,tc,fc){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13159 = [null,null,null,null,null,null,null,null,null];(statearr_13159[(0)] = state_machine__5835__auto__);
(statearr_13159[(1)] = (1));
return statearr_13159;
});
var state_machine__5835__auto____1 = (function (state_13138){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13138);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13160){if((e13160 instanceof Object))
{var ex__5838__auto__ = e13160;var statearr_13161_13178 = state_13138;(statearr_13161_13178[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13160;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13179 = state_13138;
state_13138 = G__13179;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13138){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13163,tc,fc))
})();var state__5851__auto__ = (function (){var statearr_13162 = f__5850__auto__.call(null);(statearr_13162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13163);
return statearr_13162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13163,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__){
return (function (state_13226){var state_val_13227 = (state_13226[(1)]);if((state_val_13227 === (7)))
{var inst_13222 = (state_13226[(2)]);var state_13226__$1 = state_13226;var statearr_13228_13244 = state_13226__$1;(statearr_13228_13244[(2)] = inst_13222);
(statearr_13228_13244[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13227 === (6)))
{var inst_13212 = (state_13226[(7)]);var inst_13215 = (state_13226[(8)]);var inst_13219 = f.call(null,inst_13212,inst_13215);var inst_13212__$1 = inst_13219;var state_13226__$1 = (function (){var statearr_13229 = state_13226;(statearr_13229[(7)] = inst_13212__$1);
return statearr_13229;
})();var statearr_13230_13245 = state_13226__$1;(statearr_13230_13245[(2)] = null);
(statearr_13230_13245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13227 === (5)))
{var inst_13212 = (state_13226[(7)]);var state_13226__$1 = state_13226;var statearr_13231_13246 = state_13226__$1;(statearr_13231_13246[(2)] = inst_13212);
(statearr_13231_13246[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13227 === (4)))
{var inst_13215 = (state_13226[(8)]);var inst_13215__$1 = (state_13226[(2)]);var inst_13216 = (inst_13215__$1 == null);var state_13226__$1 = (function (){var statearr_13232 = state_13226;(statearr_13232[(8)] = inst_13215__$1);
return statearr_13232;
})();if(cljs.core.truth_(inst_13216))
{var statearr_13233_13247 = state_13226__$1;(statearr_13233_13247[(1)] = (5));
} else
{var statearr_13234_13248 = state_13226__$1;(statearr_13234_13248[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13227 === (3)))
{var inst_13224 = (state_13226[(2)]);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13224);
} else
{if((state_val_13227 === (2)))
{var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,(4),ch);
} else
{if((state_val_13227 === (1)))
{var inst_13212 = init;var state_13226__$1 = (function (){var statearr_13235 = state_13226;(statearr_13235[(7)] = inst_13212);
return statearr_13235;
})();var statearr_13236_13249 = state_13226__$1;(statearr_13236_13249[(2)] = null);
(statearr_13236_13249[(1)] = (2));
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
});})(c__5849__auto__))
;return ((function (switch__5834__auto__,c__5849__auto__){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13240 = [null,null,null,null,null,null,null,null,null];(statearr_13240[(0)] = state_machine__5835__auto__);
(statearr_13240[(1)] = (1));
return statearr_13240;
});
var state_machine__5835__auto____1 = (function (state_13226){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13241){if((e13241 instanceof Object))
{var ex__5838__auto__ = e13241;var statearr_13242_13250 = state_13226;(statearr_13242_13250[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13241;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13251 = state_13226;
state_13226 = G__13251;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_13243 = f__5850__auto__.call(null);(statearr_13243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13243;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__))
);
return c__5849__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__){
return (function (state_13325){var state_val_13326 = (state_13325[(1)]);if((state_val_13326 === (7)))
{var inst_13307 = (state_13325[(2)]);var state_13325__$1 = state_13325;var statearr_13327_13350 = state_13325__$1;(statearr_13327_13350[(2)] = inst_13307);
(statearr_13327_13350[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (1)))
{var inst_13301 = cljs.core.seq.call(null,coll);var inst_13302 = inst_13301;var state_13325__$1 = (function (){var statearr_13328 = state_13325;(statearr_13328[(7)] = inst_13302);
return statearr_13328;
})();var statearr_13329_13351 = state_13325__$1;(statearr_13329_13351[(2)] = null);
(statearr_13329_13351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (4)))
{var inst_13302 = (state_13325[(7)]);var inst_13305 = cljs.core.first.call(null,inst_13302);var state_13325__$1 = state_13325;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13325__$1,(7),ch,inst_13305);
} else
{if((state_val_13326 === (13)))
{var inst_13319 = (state_13325[(2)]);var state_13325__$1 = state_13325;var statearr_13330_13352 = state_13325__$1;(statearr_13330_13352[(2)] = inst_13319);
(statearr_13330_13352[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (6)))
{var inst_13310 = (state_13325[(2)]);var state_13325__$1 = state_13325;if(cljs.core.truth_(inst_13310))
{var statearr_13331_13353 = state_13325__$1;(statearr_13331_13353[(1)] = (8));
} else
{var statearr_13332_13354 = state_13325__$1;(statearr_13332_13354[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (3)))
{var inst_13323 = (state_13325[(2)]);var state_13325__$1 = state_13325;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13325__$1,inst_13323);
} else
{if((state_val_13326 === (12)))
{var state_13325__$1 = state_13325;var statearr_13333_13355 = state_13325__$1;(statearr_13333_13355[(2)] = null);
(statearr_13333_13355[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (2)))
{var inst_13302 = (state_13325[(7)]);var state_13325__$1 = state_13325;if(cljs.core.truth_(inst_13302))
{var statearr_13334_13356 = state_13325__$1;(statearr_13334_13356[(1)] = (4));
} else
{var statearr_13335_13357 = state_13325__$1;(statearr_13335_13357[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (11)))
{var inst_13316 = cljs.core.async.close_BANG_.call(null,ch);var state_13325__$1 = state_13325;var statearr_13336_13358 = state_13325__$1;(statearr_13336_13358[(2)] = inst_13316);
(statearr_13336_13358[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (9)))
{var state_13325__$1 = state_13325;if(cljs.core.truth_(close_QMARK_))
{var statearr_13337_13359 = state_13325__$1;(statearr_13337_13359[(1)] = (11));
} else
{var statearr_13338_13360 = state_13325__$1;(statearr_13338_13360[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (5)))
{var inst_13302 = (state_13325[(7)]);var state_13325__$1 = state_13325;var statearr_13339_13361 = state_13325__$1;(statearr_13339_13361[(2)] = inst_13302);
(statearr_13339_13361[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (10)))
{var inst_13321 = (state_13325[(2)]);var state_13325__$1 = state_13325;var statearr_13340_13362 = state_13325__$1;(statearr_13340_13362[(2)] = inst_13321);
(statearr_13340_13362[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13326 === (8)))
{var inst_13302 = (state_13325[(7)]);var inst_13312 = cljs.core.next.call(null,inst_13302);var inst_13302__$1 = inst_13312;var state_13325__$1 = (function (){var statearr_13341 = state_13325;(statearr_13341[(7)] = inst_13302__$1);
return statearr_13341;
})();var statearr_13342_13363 = state_13325__$1;(statearr_13342_13363[(2)] = null);
(statearr_13342_13363[(1)] = (2));
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
var state_machine__5835__auto____0 = (function (){var statearr_13346 = [null,null,null,null,null,null,null,null];(statearr_13346[(0)] = state_machine__5835__auto__);
(statearr_13346[(1)] = (1));
return statearr_13346;
});
var state_machine__5835__auto____1 = (function (state_13325){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13325);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13347){if((e13347 instanceof Object))
{var ex__5838__auto__ = e13347;var statearr_13348_13364 = state_13325;(statearr_13348_13364[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13325);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13347;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13365 = state_13325;
state_13325 = G__13365;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13325){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_13349 = f__5850__auto__.call(null);(statearr_13349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__))
);
return c__5849__auto__;
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
cljs.core.async.Mux = (function (){var obj13367 = {};return obj13367;
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
cljs.core.async.Mult = (function (){var obj13369 = {};return obj13369;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13591 = (function (cs,ch,mult,meta13592){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13592 = meta13592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13591.cljs$lang$type = true;
cljs.core.async.t13591.cljs$lang$ctorStr = "cljs.core.async/t13591";
cljs.core.async.t13591.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13591");
});})(cs))
;
cljs.core.async.t13591.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13591.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13591.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13591.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13591.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13593){var self__ = this;
var _13593__$1 = this;return self__.meta13592;
});})(cs))
;
cljs.core.async.t13591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13593,meta13592__$1){var self__ = this;
var _13593__$1 = this;return (new cljs.core.async.t13591(self__.cs,self__.ch,self__.mult,meta13592__$1));
});})(cs))
;
cljs.core.async.__GT_t13591 = ((function (cs){
return (function __GT_t13591(cs__$1,ch__$1,mult__$1,meta13592){return (new cljs.core.async.t13591(cs__$1,ch__$1,mult__$1,meta13592));
});})(cs))
;
}
return (new cljs.core.async.t13591(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5849__auto___13812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13812,cs,m,dchan,dctr,done){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13812,cs,m,dchan,dctr,done){
return (function (state_13724){var state_val_13725 = (state_13724[(1)]);if((state_val_13725 === (7)))
{var inst_13720 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13726_13813 = state_13724__$1;(statearr_13726_13813[(2)] = inst_13720);
(statearr_13726_13813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (20)))
{var inst_13625 = (state_13724[(7)]);var inst_13635 = cljs.core.first.call(null,inst_13625);var inst_13636 = cljs.core.nth.call(null,inst_13635,(0),null);var inst_13637 = cljs.core.nth.call(null,inst_13635,(1),null);var state_13724__$1 = (function (){var statearr_13727 = state_13724;(statearr_13727[(8)] = inst_13636);
return statearr_13727;
})();if(cljs.core.truth_(inst_13637))
{var statearr_13728_13814 = state_13724__$1;(statearr_13728_13814[(1)] = (22));
} else
{var statearr_13729_13815 = state_13724__$1;(statearr_13729_13815[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (27)))
{var inst_13672 = (state_13724[(9)]);var inst_13665 = (state_13724[(10)]);var inst_13667 = (state_13724[(11)]);var inst_13596 = (state_13724[(12)]);var inst_13672__$1 = cljs.core._nth.call(null,inst_13665,inst_13667);var inst_13673 = cljs.core.async.put_BANG_.call(null,inst_13672__$1,inst_13596,done);var state_13724__$1 = (function (){var statearr_13730 = state_13724;(statearr_13730[(9)] = inst_13672__$1);
return statearr_13730;
})();if(cljs.core.truth_(inst_13673))
{var statearr_13731_13816 = state_13724__$1;(statearr_13731_13816[(1)] = (30));
} else
{var statearr_13732_13817 = state_13724__$1;(statearr_13732_13817[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (1)))
{var state_13724__$1 = state_13724;var statearr_13733_13818 = state_13724__$1;(statearr_13733_13818[(2)] = null);
(statearr_13733_13818[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (24)))
{var inst_13625 = (state_13724[(7)]);var inst_13642 = (state_13724[(2)]);var inst_13643 = cljs.core.next.call(null,inst_13625);var inst_13605 = inst_13643;var inst_13606 = null;var inst_13607 = (0);var inst_13608 = (0);var state_13724__$1 = (function (){var statearr_13734 = state_13724;(statearr_13734[(13)] = inst_13606);
(statearr_13734[(14)] = inst_13605);
(statearr_13734[(15)] = inst_13607);
(statearr_13734[(16)] = inst_13642);
(statearr_13734[(17)] = inst_13608);
return statearr_13734;
})();var statearr_13735_13819 = state_13724__$1;(statearr_13735_13819[(2)] = null);
(statearr_13735_13819[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (39)))
{var state_13724__$1 = state_13724;var statearr_13739_13820 = state_13724__$1;(statearr_13739_13820[(2)] = null);
(statearr_13739_13820[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (4)))
{var inst_13596 = (state_13724[(12)]);var inst_13596__$1 = (state_13724[(2)]);var inst_13597 = (inst_13596__$1 == null);var state_13724__$1 = (function (){var statearr_13740 = state_13724;(statearr_13740[(12)] = inst_13596__$1);
return statearr_13740;
})();if(cljs.core.truth_(inst_13597))
{var statearr_13741_13821 = state_13724__$1;(statearr_13741_13821[(1)] = (5));
} else
{var statearr_13742_13822 = state_13724__$1;(statearr_13742_13822[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (15)))
{var inst_13606 = (state_13724[(13)]);var inst_13605 = (state_13724[(14)]);var inst_13607 = (state_13724[(15)]);var inst_13608 = (state_13724[(17)]);var inst_13621 = (state_13724[(2)]);var inst_13622 = (inst_13608 + (1));var tmp13736 = inst_13606;var tmp13737 = inst_13605;var tmp13738 = inst_13607;var inst_13605__$1 = tmp13737;var inst_13606__$1 = tmp13736;var inst_13607__$1 = tmp13738;var inst_13608__$1 = inst_13622;var state_13724__$1 = (function (){var statearr_13743 = state_13724;(statearr_13743[(13)] = inst_13606__$1);
(statearr_13743[(18)] = inst_13621);
(statearr_13743[(14)] = inst_13605__$1);
(statearr_13743[(15)] = inst_13607__$1);
(statearr_13743[(17)] = inst_13608__$1);
return statearr_13743;
})();var statearr_13744_13823 = state_13724__$1;(statearr_13744_13823[(2)] = null);
(statearr_13744_13823[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (21)))
{var inst_13646 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13748_13824 = state_13724__$1;(statearr_13748_13824[(2)] = inst_13646);
(statearr_13748_13824[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (31)))
{var inst_13672 = (state_13724[(9)]);var inst_13676 = done.call(null,null);var inst_13677 = cljs.core.async.untap_STAR_.call(null,m,inst_13672);var state_13724__$1 = (function (){var statearr_13749 = state_13724;(statearr_13749[(19)] = inst_13676);
return statearr_13749;
})();var statearr_13750_13825 = state_13724__$1;(statearr_13750_13825[(2)] = inst_13677);
(statearr_13750_13825[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (32)))
{var inst_13665 = (state_13724[(10)]);var inst_13667 = (state_13724[(11)]);var inst_13664 = (state_13724[(20)]);var inst_13666 = (state_13724[(21)]);var inst_13679 = (state_13724[(2)]);var inst_13680 = (inst_13667 + (1));var tmp13745 = inst_13665;var tmp13746 = inst_13664;var tmp13747 = inst_13666;var inst_13664__$1 = tmp13746;var inst_13665__$1 = tmp13745;var inst_13666__$1 = tmp13747;var inst_13667__$1 = inst_13680;var state_13724__$1 = (function (){var statearr_13751 = state_13724;(statearr_13751[(10)] = inst_13665__$1);
(statearr_13751[(11)] = inst_13667__$1);
(statearr_13751[(20)] = inst_13664__$1);
(statearr_13751[(21)] = inst_13666__$1);
(statearr_13751[(22)] = inst_13679);
return statearr_13751;
})();var statearr_13752_13826 = state_13724__$1;(statearr_13752_13826[(2)] = null);
(statearr_13752_13826[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (40)))
{var inst_13692 = (state_13724[(23)]);var inst_13696 = done.call(null,null);var inst_13697 = cljs.core.async.untap_STAR_.call(null,m,inst_13692);var state_13724__$1 = (function (){var statearr_13753 = state_13724;(statearr_13753[(24)] = inst_13696);
return statearr_13753;
})();var statearr_13754_13827 = state_13724__$1;(statearr_13754_13827[(2)] = inst_13697);
(statearr_13754_13827[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (33)))
{var inst_13683 = (state_13724[(25)]);var inst_13685 = cljs.core.chunked_seq_QMARK_.call(null,inst_13683);var state_13724__$1 = state_13724;if(inst_13685)
{var statearr_13755_13828 = state_13724__$1;(statearr_13755_13828[(1)] = (36));
} else
{var statearr_13756_13829 = state_13724__$1;(statearr_13756_13829[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (13)))
{var inst_13615 = (state_13724[(26)]);var inst_13618 = cljs.core.async.close_BANG_.call(null,inst_13615);var state_13724__$1 = state_13724;var statearr_13757_13830 = state_13724__$1;(statearr_13757_13830[(2)] = inst_13618);
(statearr_13757_13830[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (22)))
{var inst_13636 = (state_13724[(8)]);var inst_13639 = cljs.core.async.close_BANG_.call(null,inst_13636);var state_13724__$1 = state_13724;var statearr_13758_13831 = state_13724__$1;(statearr_13758_13831[(2)] = inst_13639);
(statearr_13758_13831[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (36)))
{var inst_13683 = (state_13724[(25)]);var inst_13687 = cljs.core.chunk_first.call(null,inst_13683);var inst_13688 = cljs.core.chunk_rest.call(null,inst_13683);var inst_13689 = cljs.core.count.call(null,inst_13687);var inst_13664 = inst_13688;var inst_13665 = inst_13687;var inst_13666 = inst_13689;var inst_13667 = (0);var state_13724__$1 = (function (){var statearr_13759 = state_13724;(statearr_13759[(10)] = inst_13665);
(statearr_13759[(11)] = inst_13667);
(statearr_13759[(20)] = inst_13664);
(statearr_13759[(21)] = inst_13666);
return statearr_13759;
})();var statearr_13760_13832 = state_13724__$1;(statearr_13760_13832[(2)] = null);
(statearr_13760_13832[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (41)))
{var inst_13683 = (state_13724[(25)]);var inst_13699 = (state_13724[(2)]);var inst_13700 = cljs.core.next.call(null,inst_13683);var inst_13664 = inst_13700;var inst_13665 = null;var inst_13666 = (0);var inst_13667 = (0);var state_13724__$1 = (function (){var statearr_13761 = state_13724;(statearr_13761[(10)] = inst_13665);
(statearr_13761[(27)] = inst_13699);
(statearr_13761[(11)] = inst_13667);
(statearr_13761[(20)] = inst_13664);
(statearr_13761[(21)] = inst_13666);
return statearr_13761;
})();var statearr_13762_13833 = state_13724__$1;(statearr_13762_13833[(2)] = null);
(statearr_13762_13833[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (43)))
{var state_13724__$1 = state_13724;var statearr_13763_13834 = state_13724__$1;(statearr_13763_13834[(2)] = null);
(statearr_13763_13834[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (29)))
{var inst_13708 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13764_13835 = state_13724__$1;(statearr_13764_13835[(2)] = inst_13708);
(statearr_13764_13835[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (44)))
{var inst_13717 = (state_13724[(2)]);var state_13724__$1 = (function (){var statearr_13765 = state_13724;(statearr_13765[(28)] = inst_13717);
return statearr_13765;
})();var statearr_13766_13836 = state_13724__$1;(statearr_13766_13836[(2)] = null);
(statearr_13766_13836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (6)))
{var inst_13656 = (state_13724[(29)]);var inst_13655 = cljs.core.deref.call(null,cs);var inst_13656__$1 = cljs.core.keys.call(null,inst_13655);var inst_13657 = cljs.core.count.call(null,inst_13656__$1);var inst_13658 = cljs.core.reset_BANG_.call(null,dctr,inst_13657);var inst_13663 = cljs.core.seq.call(null,inst_13656__$1);var inst_13664 = inst_13663;var inst_13665 = null;var inst_13666 = (0);var inst_13667 = (0);var state_13724__$1 = (function (){var statearr_13767 = state_13724;(statearr_13767[(30)] = inst_13658);
(statearr_13767[(29)] = inst_13656__$1);
(statearr_13767[(10)] = inst_13665);
(statearr_13767[(11)] = inst_13667);
(statearr_13767[(20)] = inst_13664);
(statearr_13767[(21)] = inst_13666);
return statearr_13767;
})();var statearr_13768_13837 = state_13724__$1;(statearr_13768_13837[(2)] = null);
(statearr_13768_13837[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (28)))
{var inst_13664 = (state_13724[(20)]);var inst_13683 = (state_13724[(25)]);var inst_13683__$1 = cljs.core.seq.call(null,inst_13664);var state_13724__$1 = (function (){var statearr_13769 = state_13724;(statearr_13769[(25)] = inst_13683__$1);
return statearr_13769;
})();if(inst_13683__$1)
{var statearr_13770_13838 = state_13724__$1;(statearr_13770_13838[(1)] = (33));
} else
{var statearr_13771_13839 = state_13724__$1;(statearr_13771_13839[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (25)))
{var inst_13667 = (state_13724[(11)]);var inst_13666 = (state_13724[(21)]);var inst_13669 = (inst_13667 < inst_13666);var inst_13670 = inst_13669;var state_13724__$1 = state_13724;if(cljs.core.truth_(inst_13670))
{var statearr_13772_13840 = state_13724__$1;(statearr_13772_13840[(1)] = (27));
} else
{var statearr_13773_13841 = state_13724__$1;(statearr_13773_13841[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (34)))
{var state_13724__$1 = state_13724;var statearr_13774_13842 = state_13724__$1;(statearr_13774_13842[(2)] = null);
(statearr_13774_13842[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (17)))
{var state_13724__$1 = state_13724;var statearr_13775_13843 = state_13724__$1;(statearr_13775_13843[(2)] = null);
(statearr_13775_13843[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (3)))
{var inst_13722 = (state_13724[(2)]);var state_13724__$1 = state_13724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13724__$1,inst_13722);
} else
{if((state_val_13725 === (12)))
{var inst_13651 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13776_13844 = state_13724__$1;(statearr_13776_13844[(2)] = inst_13651);
(statearr_13776_13844[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (2)))
{var state_13724__$1 = state_13724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13724__$1,(4),ch);
} else
{if((state_val_13725 === (23)))
{var state_13724__$1 = state_13724;var statearr_13777_13845 = state_13724__$1;(statearr_13777_13845[(2)] = null);
(statearr_13777_13845[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (35)))
{var inst_13706 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13778_13846 = state_13724__$1;(statearr_13778_13846[(2)] = inst_13706);
(statearr_13778_13846[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (19)))
{var inst_13625 = (state_13724[(7)]);var inst_13629 = cljs.core.chunk_first.call(null,inst_13625);var inst_13630 = cljs.core.chunk_rest.call(null,inst_13625);var inst_13631 = cljs.core.count.call(null,inst_13629);var inst_13605 = inst_13630;var inst_13606 = inst_13629;var inst_13607 = inst_13631;var inst_13608 = (0);var state_13724__$1 = (function (){var statearr_13779 = state_13724;(statearr_13779[(13)] = inst_13606);
(statearr_13779[(14)] = inst_13605);
(statearr_13779[(15)] = inst_13607);
(statearr_13779[(17)] = inst_13608);
return statearr_13779;
})();var statearr_13780_13847 = state_13724__$1;(statearr_13780_13847[(2)] = null);
(statearr_13780_13847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (11)))
{var inst_13625 = (state_13724[(7)]);var inst_13605 = (state_13724[(14)]);var inst_13625__$1 = cljs.core.seq.call(null,inst_13605);var state_13724__$1 = (function (){var statearr_13781 = state_13724;(statearr_13781[(7)] = inst_13625__$1);
return statearr_13781;
})();if(inst_13625__$1)
{var statearr_13782_13848 = state_13724__$1;(statearr_13782_13848[(1)] = (16));
} else
{var statearr_13783_13849 = state_13724__$1;(statearr_13783_13849[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (9)))
{var inst_13653 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13784_13850 = state_13724__$1;(statearr_13784_13850[(2)] = inst_13653);
(statearr_13784_13850[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (5)))
{var inst_13603 = cljs.core.deref.call(null,cs);var inst_13604 = cljs.core.seq.call(null,inst_13603);var inst_13605 = inst_13604;var inst_13606 = null;var inst_13607 = (0);var inst_13608 = (0);var state_13724__$1 = (function (){var statearr_13785 = state_13724;(statearr_13785[(13)] = inst_13606);
(statearr_13785[(14)] = inst_13605);
(statearr_13785[(15)] = inst_13607);
(statearr_13785[(17)] = inst_13608);
return statearr_13785;
})();var statearr_13786_13851 = state_13724__$1;(statearr_13786_13851[(2)] = null);
(statearr_13786_13851[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (14)))
{var state_13724__$1 = state_13724;var statearr_13787_13852 = state_13724__$1;(statearr_13787_13852[(2)] = null);
(statearr_13787_13852[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (45)))
{var inst_13714 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13788_13853 = state_13724__$1;(statearr_13788_13853[(2)] = inst_13714);
(statearr_13788_13853[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (26)))
{var inst_13656 = (state_13724[(29)]);var inst_13710 = (state_13724[(2)]);var inst_13711 = cljs.core.seq.call(null,inst_13656);var state_13724__$1 = (function (){var statearr_13789 = state_13724;(statearr_13789[(31)] = inst_13710);
return statearr_13789;
})();if(inst_13711)
{var statearr_13790_13854 = state_13724__$1;(statearr_13790_13854[(1)] = (42));
} else
{var statearr_13791_13855 = state_13724__$1;(statearr_13791_13855[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (16)))
{var inst_13625 = (state_13724[(7)]);var inst_13627 = cljs.core.chunked_seq_QMARK_.call(null,inst_13625);var state_13724__$1 = state_13724;if(inst_13627)
{var statearr_13792_13856 = state_13724__$1;(statearr_13792_13856[(1)] = (19));
} else
{var statearr_13793_13857 = state_13724__$1;(statearr_13793_13857[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (38)))
{var inst_13703 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13794_13858 = state_13724__$1;(statearr_13794_13858[(2)] = inst_13703);
(statearr_13794_13858[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (30)))
{var state_13724__$1 = state_13724;var statearr_13795_13859 = state_13724__$1;(statearr_13795_13859[(2)] = null);
(statearr_13795_13859[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (10)))
{var inst_13606 = (state_13724[(13)]);var inst_13608 = (state_13724[(17)]);var inst_13614 = cljs.core._nth.call(null,inst_13606,inst_13608);var inst_13615 = cljs.core.nth.call(null,inst_13614,(0),null);var inst_13616 = cljs.core.nth.call(null,inst_13614,(1),null);var state_13724__$1 = (function (){var statearr_13796 = state_13724;(statearr_13796[(26)] = inst_13615);
return statearr_13796;
})();if(cljs.core.truth_(inst_13616))
{var statearr_13797_13860 = state_13724__$1;(statearr_13797_13860[(1)] = (13));
} else
{var statearr_13798_13861 = state_13724__$1;(statearr_13798_13861[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (18)))
{var inst_13649 = (state_13724[(2)]);var state_13724__$1 = state_13724;var statearr_13799_13862 = state_13724__$1;(statearr_13799_13862[(2)] = inst_13649);
(statearr_13799_13862[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (42)))
{var state_13724__$1 = state_13724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13724__$1,(45),dchan);
} else
{if((state_val_13725 === (37)))
{var inst_13596 = (state_13724[(12)]);var inst_13683 = (state_13724[(25)]);var inst_13692 = (state_13724[(23)]);var inst_13692__$1 = cljs.core.first.call(null,inst_13683);var inst_13693 = cljs.core.async.put_BANG_.call(null,inst_13692__$1,inst_13596,done);var state_13724__$1 = (function (){var statearr_13800 = state_13724;(statearr_13800[(23)] = inst_13692__$1);
return statearr_13800;
})();if(cljs.core.truth_(inst_13693))
{var statearr_13801_13863 = state_13724__$1;(statearr_13801_13863[(1)] = (39));
} else
{var statearr_13802_13864 = state_13724__$1;(statearr_13802_13864[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13725 === (8)))
{var inst_13607 = (state_13724[(15)]);var inst_13608 = (state_13724[(17)]);var inst_13610 = (inst_13608 < inst_13607);var inst_13611 = inst_13610;var state_13724__$1 = state_13724;if(cljs.core.truth_(inst_13611))
{var statearr_13803_13865 = state_13724__$1;(statearr_13803_13865[(1)] = (10));
} else
{var statearr_13804_13866 = state_13724__$1;(statearr_13804_13866[(1)] = (11));
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
});})(c__5849__auto___13812,cs,m,dchan,dctr,done))
;return ((function (switch__5834__auto__,c__5849__auto___13812,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13808[(0)] = state_machine__5835__auto__);
(statearr_13808[(1)] = (1));
return statearr_13808;
});
var state_machine__5835__auto____1 = (function (state_13724){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13724);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13809){if((e13809 instanceof Object))
{var ex__5838__auto__ = e13809;var statearr_13810_13867 = state_13724;(statearr_13810_13867[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13724);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13868 = state_13724;
state_13724 = G__13868;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13724){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13812,cs,m,dchan,dctr,done))
})();var state__5851__auto__ = (function (){var statearr_13811 = f__5850__auto__.call(null);(statearr_13811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13812);
return statearr_13811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13812,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13870 = {};return obj13870;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13871){var map__13876 = p__13871;var map__13876__$1 = ((cljs.core.seq_QMARK_.call(null,map__13876))?cljs.core.apply.call(null,cljs.core.hash_map,map__13876):map__13876);var opts = map__13876__$1;var statearr_13877_13880 = state;(statearr_13877_13880[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13876,map__13876__$1,opts){
return (function (val){var statearr_13878_13881 = state;(statearr_13878_13881[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13876,map__13876__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13879_13882 = state;(statearr_13879_13882[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13871 = null;if (arguments.length > 3) {
  p__13871 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13871);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13883){
var state = cljs.core.first(arglist__13883);
arglist__13883 = cljs.core.next(arglist__13883);
var cont_block = cljs.core.first(arglist__13883);
arglist__13883 = cljs.core.next(arglist__13883);
var ports = cljs.core.first(arglist__13883);
var p__13871 = cljs.core.rest(arglist__13883);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13871);
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
;var m = (function (){if(typeof cljs.core.async.t14003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14003 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14004){
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
this.meta14004 = meta14004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14003.cljs$lang$type = true;
cljs.core.async.t14003.cljs$lang$ctorStr = "cljs.core.async/t14003";
cljs.core.async.t14003.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14003");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14003.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14005){var self__ = this;
var _14005__$1 = this;return self__.meta14004;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14005,meta14004__$1){var self__ = this;
var _14005__$1 = this;return (new cljs.core.async.t14003(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14004__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14003 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14003(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14004){return (new cljs.core.async.t14003(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14004));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14003(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5849__auto___14122 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14075){var state_val_14076 = (state_14075[(1)]);if((state_val_14076 === (7)))
{var inst_14019 = (state_14075[(7)]);var inst_14024 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14019);var state_14075__$1 = state_14075;var statearr_14077_14123 = state_14075__$1;(statearr_14077_14123[(2)] = inst_14024);
(statearr_14077_14123[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (20)))
{var inst_14034 = (state_14075[(8)]);var state_14075__$1 = state_14075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14075__$1,(23),out,inst_14034);
} else
{if((state_val_14076 === (1)))
{var inst_14009 = (state_14075[(9)]);var inst_14009__$1 = calc_state.call(null);var inst_14010 = cljs.core.seq_QMARK_.call(null,inst_14009__$1);var state_14075__$1 = (function (){var statearr_14078 = state_14075;(statearr_14078[(9)] = inst_14009__$1);
return statearr_14078;
})();if(inst_14010)
{var statearr_14079_14124 = state_14075__$1;(statearr_14079_14124[(1)] = (2));
} else
{var statearr_14080_14125 = state_14075__$1;(statearr_14080_14125[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (24)))
{var inst_14027 = (state_14075[(10)]);var inst_14019 = inst_14027;var state_14075__$1 = (function (){var statearr_14081 = state_14075;(statearr_14081[(7)] = inst_14019);
return statearr_14081;
})();var statearr_14082_14126 = state_14075__$1;(statearr_14082_14126[(2)] = null);
(statearr_14082_14126[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (4)))
{var inst_14009 = (state_14075[(9)]);var inst_14015 = (state_14075[(2)]);var inst_14016 = cljs.core.get.call(null,inst_14015,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14017 = cljs.core.get.call(null,inst_14015,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14018 = cljs.core.get.call(null,inst_14015,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14019 = inst_14009;var state_14075__$1 = (function (){var statearr_14083 = state_14075;(statearr_14083[(7)] = inst_14019);
(statearr_14083[(11)] = inst_14018);
(statearr_14083[(12)] = inst_14016);
(statearr_14083[(13)] = inst_14017);
return statearr_14083;
})();var statearr_14084_14127 = state_14075__$1;(statearr_14084_14127[(2)] = null);
(statearr_14084_14127[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (15)))
{var state_14075__$1 = state_14075;var statearr_14085_14128 = state_14075__$1;(statearr_14085_14128[(2)] = null);
(statearr_14085_14128[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (21)))
{var inst_14027 = (state_14075[(10)]);var inst_14019 = inst_14027;var state_14075__$1 = (function (){var statearr_14086 = state_14075;(statearr_14086[(7)] = inst_14019);
return statearr_14086;
})();var statearr_14087_14129 = state_14075__$1;(statearr_14087_14129[(2)] = null);
(statearr_14087_14129[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (13)))
{var inst_14071 = (state_14075[(2)]);var state_14075__$1 = state_14075;var statearr_14088_14130 = state_14075__$1;(statearr_14088_14130[(2)] = inst_14071);
(statearr_14088_14130[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (22)))
{var inst_14069 = (state_14075[(2)]);var state_14075__$1 = state_14075;var statearr_14089_14131 = state_14075__$1;(statearr_14089_14131[(2)] = inst_14069);
(statearr_14089_14131[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (6)))
{var inst_14073 = (state_14075[(2)]);var state_14075__$1 = state_14075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14075__$1,inst_14073);
} else
{if((state_val_14076 === (25)))
{var state_14075__$1 = state_14075;var statearr_14090_14132 = state_14075__$1;(statearr_14090_14132[(2)] = null);
(statearr_14090_14132[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (17)))
{var inst_14049 = (state_14075[(14)]);var state_14075__$1 = state_14075;var statearr_14091_14133 = state_14075__$1;(statearr_14091_14133[(2)] = inst_14049);
(statearr_14091_14133[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (3)))
{var inst_14009 = (state_14075[(9)]);var state_14075__$1 = state_14075;var statearr_14092_14134 = state_14075__$1;(statearr_14092_14134[(2)] = inst_14009);
(statearr_14092_14134[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (12)))
{var inst_14035 = (state_14075[(15)]);var inst_14049 = (state_14075[(14)]);var inst_14030 = (state_14075[(16)]);var inst_14049__$1 = inst_14030.call(null,inst_14035);var state_14075__$1 = (function (){var statearr_14093 = state_14075;(statearr_14093[(14)] = inst_14049__$1);
return statearr_14093;
})();if(cljs.core.truth_(inst_14049__$1))
{var statearr_14094_14135 = state_14075__$1;(statearr_14094_14135[(1)] = (17));
} else
{var statearr_14095_14136 = state_14075__$1;(statearr_14095_14136[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (2)))
{var inst_14009 = (state_14075[(9)]);var inst_14012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14009);var state_14075__$1 = state_14075;var statearr_14096_14137 = state_14075__$1;(statearr_14096_14137[(2)] = inst_14012);
(statearr_14096_14137[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (23)))
{var inst_14060 = (state_14075[(2)]);var state_14075__$1 = state_14075;if(cljs.core.truth_(inst_14060))
{var statearr_14097_14138 = state_14075__$1;(statearr_14097_14138[(1)] = (24));
} else
{var statearr_14098_14139 = state_14075__$1;(statearr_14098_14139[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (19)))
{var inst_14057 = (state_14075[(2)]);var state_14075__$1 = state_14075;if(cljs.core.truth_(inst_14057))
{var statearr_14099_14140 = state_14075__$1;(statearr_14099_14140[(1)] = (20));
} else
{var statearr_14100_14141 = state_14075__$1;(statearr_14100_14141[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (11)))
{var inst_14034 = (state_14075[(8)]);var inst_14040 = (inst_14034 == null);var state_14075__$1 = state_14075;if(cljs.core.truth_(inst_14040))
{var statearr_14101_14142 = state_14075__$1;(statearr_14101_14142[(1)] = (14));
} else
{var statearr_14102_14143 = state_14075__$1;(statearr_14102_14143[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (9)))
{var inst_14027 = (state_14075[(10)]);var inst_14027__$1 = (state_14075[(2)]);var inst_14028 = cljs.core.get.call(null,inst_14027__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14029 = cljs.core.get.call(null,inst_14027__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14030 = cljs.core.get.call(null,inst_14027__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14075__$1 = (function (){var statearr_14103 = state_14075;(statearr_14103[(10)] = inst_14027__$1);
(statearr_14103[(16)] = inst_14030);
(statearr_14103[(17)] = inst_14029);
return statearr_14103;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_14075__$1,(10),inst_14028);
} else
{if((state_val_14076 === (5)))
{var inst_14019 = (state_14075[(7)]);var inst_14022 = cljs.core.seq_QMARK_.call(null,inst_14019);var state_14075__$1 = state_14075;if(inst_14022)
{var statearr_14104_14144 = state_14075__$1;(statearr_14104_14144[(1)] = (7));
} else
{var statearr_14105_14145 = state_14075__$1;(statearr_14105_14145[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (14)))
{var inst_14035 = (state_14075[(15)]);var inst_14042 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14035);var state_14075__$1 = state_14075;var statearr_14106_14146 = state_14075__$1;(statearr_14106_14146[(2)] = inst_14042);
(statearr_14106_14146[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (26)))
{var inst_14065 = (state_14075[(2)]);var state_14075__$1 = state_14075;var statearr_14107_14147 = state_14075__$1;(statearr_14107_14147[(2)] = inst_14065);
(statearr_14107_14147[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (16)))
{var inst_14045 = (state_14075[(2)]);var inst_14046 = calc_state.call(null);var inst_14019 = inst_14046;var state_14075__$1 = (function (){var statearr_14108 = state_14075;(statearr_14108[(18)] = inst_14045);
(statearr_14108[(7)] = inst_14019);
return statearr_14108;
})();var statearr_14109_14148 = state_14075__$1;(statearr_14109_14148[(2)] = null);
(statearr_14109_14148[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (10)))
{var inst_14035 = (state_14075[(15)]);var inst_14034 = (state_14075[(8)]);var inst_14033 = (state_14075[(2)]);var inst_14034__$1 = cljs.core.nth.call(null,inst_14033,(0),null);var inst_14035__$1 = cljs.core.nth.call(null,inst_14033,(1),null);var inst_14036 = (inst_14034__$1 == null);var inst_14037 = cljs.core._EQ_.call(null,inst_14035__$1,change);var inst_14038 = (inst_14036) || (inst_14037);var state_14075__$1 = (function (){var statearr_14110 = state_14075;(statearr_14110[(15)] = inst_14035__$1);
(statearr_14110[(8)] = inst_14034__$1);
return statearr_14110;
})();if(cljs.core.truth_(inst_14038))
{var statearr_14111_14149 = state_14075__$1;(statearr_14111_14149[(1)] = (11));
} else
{var statearr_14112_14150 = state_14075__$1;(statearr_14112_14150[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (18)))
{var inst_14035 = (state_14075[(15)]);var inst_14030 = (state_14075[(16)]);var inst_14029 = (state_14075[(17)]);var inst_14052 = cljs.core.empty_QMARK_.call(null,inst_14030);var inst_14053 = inst_14029.call(null,inst_14035);var inst_14054 = cljs.core.not.call(null,inst_14053);var inst_14055 = (inst_14052) && (inst_14054);var state_14075__$1 = state_14075;var statearr_14113_14151 = state_14075__$1;(statearr_14113_14151[(2)] = inst_14055);
(statearr_14113_14151[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14076 === (8)))
{var inst_14019 = (state_14075[(7)]);var state_14075__$1 = state_14075;var statearr_14114_14152 = state_14075__$1;(statearr_14114_14152[(2)] = inst_14019);
(statearr_14114_14152[(1)] = (9));
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
});})(c__5849__auto___14122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5834__auto__,c__5849__auto___14122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14118[(0)] = state_machine__5835__auto__);
(statearr_14118[(1)] = (1));
return statearr_14118;
});
var state_machine__5835__auto____1 = (function (state_14075){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14075);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14119){if((e14119 instanceof Object))
{var ex__5838__auto__ = e14119;var statearr_14120_14153 = state_14075;(statearr_14120_14153[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14119;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14154 = state_14075;
state_14075 = G__14154;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14075){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5851__auto__ = (function (){var statearr_14121 = f__5850__auto__.call(null);(statearr_14121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14122);
return statearr_14121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj14156 = {};return obj14156;
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
return (function (p1__14157_SHARP_){if(cljs.core.truth_(p1__14157_SHARP_.call(null,topic)))
{return p1__14157_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14157_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14280 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14281){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14281 = meta14281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14280.cljs$lang$type = true;
cljs.core.async.t14280.cljs$lang$ctorStr = "cljs.core.async/t14280";
cljs.core.async.t14280.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14280");
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14280.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14282){var self__ = this;
var _14282__$1 = this;return self__.meta14281;
});})(mults,ensure_mult))
;
cljs.core.async.t14280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14282,meta14281__$1){var self__ = this;
var _14282__$1 = this;return (new cljs.core.async.t14280(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14281__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14280 = ((function (mults,ensure_mult){
return (function __GT_t14280(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14281){return (new cljs.core.async.t14280(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14281));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14280(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5849__auto___14402 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14402,mults,ensure_mult,p){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14402,mults,ensure_mult,p){
return (function (state_14354){var state_val_14355 = (state_14354[(1)]);if((state_val_14355 === (7)))
{var inst_14350 = (state_14354[(2)]);var state_14354__$1 = state_14354;var statearr_14356_14403 = state_14354__$1;(statearr_14356_14403[(2)] = inst_14350);
(statearr_14356_14403[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (20)))
{var state_14354__$1 = state_14354;var statearr_14357_14404 = state_14354__$1;(statearr_14357_14404[(2)] = null);
(statearr_14357_14404[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (1)))
{var state_14354__$1 = state_14354;var statearr_14358_14405 = state_14354__$1;(statearr_14358_14405[(2)] = null);
(statearr_14358_14405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (24)))
{var inst_14333 = (state_14354[(7)]);var inst_14342 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14333);var state_14354__$1 = state_14354;var statearr_14359_14406 = state_14354__$1;(statearr_14359_14406[(2)] = inst_14342);
(statearr_14359_14406[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (4)))
{var inst_14285 = (state_14354[(8)]);var inst_14285__$1 = (state_14354[(2)]);var inst_14286 = (inst_14285__$1 == null);var state_14354__$1 = (function (){var statearr_14360 = state_14354;(statearr_14360[(8)] = inst_14285__$1);
return statearr_14360;
})();if(cljs.core.truth_(inst_14286))
{var statearr_14361_14407 = state_14354__$1;(statearr_14361_14407[(1)] = (5));
} else
{var statearr_14362_14408 = state_14354__$1;(statearr_14362_14408[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (15)))
{var inst_14327 = (state_14354[(2)]);var state_14354__$1 = state_14354;var statearr_14363_14409 = state_14354__$1;(statearr_14363_14409[(2)] = inst_14327);
(statearr_14363_14409[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (21)))
{var inst_14347 = (state_14354[(2)]);var state_14354__$1 = (function (){var statearr_14364 = state_14354;(statearr_14364[(9)] = inst_14347);
return statearr_14364;
})();var statearr_14365_14410 = state_14354__$1;(statearr_14365_14410[(2)] = null);
(statearr_14365_14410[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (13)))
{var inst_14309 = (state_14354[(10)]);var inst_14311 = cljs.core.chunked_seq_QMARK_.call(null,inst_14309);var state_14354__$1 = state_14354;if(inst_14311)
{var statearr_14366_14411 = state_14354__$1;(statearr_14366_14411[(1)] = (16));
} else
{var statearr_14367_14412 = state_14354__$1;(statearr_14367_14412[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (22)))
{var inst_14339 = (state_14354[(2)]);var state_14354__$1 = state_14354;if(cljs.core.truth_(inst_14339))
{var statearr_14368_14413 = state_14354__$1;(statearr_14368_14413[(1)] = (23));
} else
{var statearr_14369_14414 = state_14354__$1;(statearr_14369_14414[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (6)))
{var inst_14333 = (state_14354[(7)]);var inst_14285 = (state_14354[(8)]);var inst_14335 = (state_14354[(11)]);var inst_14333__$1 = topic_fn.call(null,inst_14285);var inst_14334 = cljs.core.deref.call(null,mults);var inst_14335__$1 = cljs.core.get.call(null,inst_14334,inst_14333__$1);var state_14354__$1 = (function (){var statearr_14370 = state_14354;(statearr_14370[(7)] = inst_14333__$1);
(statearr_14370[(11)] = inst_14335__$1);
return statearr_14370;
})();if(cljs.core.truth_(inst_14335__$1))
{var statearr_14371_14415 = state_14354__$1;(statearr_14371_14415[(1)] = (19));
} else
{var statearr_14372_14416 = state_14354__$1;(statearr_14372_14416[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (25)))
{var inst_14344 = (state_14354[(2)]);var state_14354__$1 = state_14354;var statearr_14373_14417 = state_14354__$1;(statearr_14373_14417[(2)] = inst_14344);
(statearr_14373_14417[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (17)))
{var inst_14309 = (state_14354[(10)]);var inst_14318 = cljs.core.first.call(null,inst_14309);var inst_14319 = cljs.core.async.muxch_STAR_.call(null,inst_14318);var inst_14320 = cljs.core.async.close_BANG_.call(null,inst_14319);var inst_14321 = cljs.core.next.call(null,inst_14309);var inst_14295 = inst_14321;var inst_14296 = null;var inst_14297 = (0);var inst_14298 = (0);var state_14354__$1 = (function (){var statearr_14374 = state_14354;(statearr_14374[(12)] = inst_14320);
(statearr_14374[(13)] = inst_14298);
(statearr_14374[(14)] = inst_14296);
(statearr_14374[(15)] = inst_14297);
(statearr_14374[(16)] = inst_14295);
return statearr_14374;
})();var statearr_14375_14418 = state_14354__$1;(statearr_14375_14418[(2)] = null);
(statearr_14375_14418[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (3)))
{var inst_14352 = (state_14354[(2)]);var state_14354__$1 = state_14354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14354__$1,inst_14352);
} else
{if((state_val_14355 === (12)))
{var inst_14329 = (state_14354[(2)]);var state_14354__$1 = state_14354;var statearr_14376_14419 = state_14354__$1;(statearr_14376_14419[(2)] = inst_14329);
(statearr_14376_14419[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (2)))
{var state_14354__$1 = state_14354;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14354__$1,(4),ch);
} else
{if((state_val_14355 === (23)))
{var state_14354__$1 = state_14354;var statearr_14377_14420 = state_14354__$1;(statearr_14377_14420[(2)] = null);
(statearr_14377_14420[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (19)))
{var inst_14285 = (state_14354[(8)]);var inst_14335 = (state_14354[(11)]);var inst_14337 = cljs.core.async.muxch_STAR_.call(null,inst_14335);var state_14354__$1 = state_14354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14354__$1,(22),inst_14337,inst_14285);
} else
{if((state_val_14355 === (11)))
{var inst_14295 = (state_14354[(16)]);var inst_14309 = (state_14354[(10)]);var inst_14309__$1 = cljs.core.seq.call(null,inst_14295);var state_14354__$1 = (function (){var statearr_14378 = state_14354;(statearr_14378[(10)] = inst_14309__$1);
return statearr_14378;
})();if(inst_14309__$1)
{var statearr_14379_14421 = state_14354__$1;(statearr_14379_14421[(1)] = (13));
} else
{var statearr_14380_14422 = state_14354__$1;(statearr_14380_14422[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (9)))
{var inst_14331 = (state_14354[(2)]);var state_14354__$1 = state_14354;var statearr_14381_14423 = state_14354__$1;(statearr_14381_14423[(2)] = inst_14331);
(statearr_14381_14423[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (5)))
{var inst_14292 = cljs.core.deref.call(null,mults);var inst_14293 = cljs.core.vals.call(null,inst_14292);var inst_14294 = cljs.core.seq.call(null,inst_14293);var inst_14295 = inst_14294;var inst_14296 = null;var inst_14297 = (0);var inst_14298 = (0);var state_14354__$1 = (function (){var statearr_14382 = state_14354;(statearr_14382[(13)] = inst_14298);
(statearr_14382[(14)] = inst_14296);
(statearr_14382[(15)] = inst_14297);
(statearr_14382[(16)] = inst_14295);
return statearr_14382;
})();var statearr_14383_14424 = state_14354__$1;(statearr_14383_14424[(2)] = null);
(statearr_14383_14424[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (14)))
{var state_14354__$1 = state_14354;var statearr_14387_14425 = state_14354__$1;(statearr_14387_14425[(2)] = null);
(statearr_14387_14425[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (16)))
{var inst_14309 = (state_14354[(10)]);var inst_14313 = cljs.core.chunk_first.call(null,inst_14309);var inst_14314 = cljs.core.chunk_rest.call(null,inst_14309);var inst_14315 = cljs.core.count.call(null,inst_14313);var inst_14295 = inst_14314;var inst_14296 = inst_14313;var inst_14297 = inst_14315;var inst_14298 = (0);var state_14354__$1 = (function (){var statearr_14388 = state_14354;(statearr_14388[(13)] = inst_14298);
(statearr_14388[(14)] = inst_14296);
(statearr_14388[(15)] = inst_14297);
(statearr_14388[(16)] = inst_14295);
return statearr_14388;
})();var statearr_14389_14426 = state_14354__$1;(statearr_14389_14426[(2)] = null);
(statearr_14389_14426[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (10)))
{var inst_14298 = (state_14354[(13)]);var inst_14296 = (state_14354[(14)]);var inst_14297 = (state_14354[(15)]);var inst_14295 = (state_14354[(16)]);var inst_14303 = cljs.core._nth.call(null,inst_14296,inst_14298);var inst_14304 = cljs.core.async.muxch_STAR_.call(null,inst_14303);var inst_14305 = cljs.core.async.close_BANG_.call(null,inst_14304);var inst_14306 = (inst_14298 + (1));var tmp14384 = inst_14296;var tmp14385 = inst_14297;var tmp14386 = inst_14295;var inst_14295__$1 = tmp14386;var inst_14296__$1 = tmp14384;var inst_14297__$1 = tmp14385;var inst_14298__$1 = inst_14306;var state_14354__$1 = (function (){var statearr_14390 = state_14354;(statearr_14390[(13)] = inst_14298__$1);
(statearr_14390[(14)] = inst_14296__$1);
(statearr_14390[(15)] = inst_14297__$1);
(statearr_14390[(17)] = inst_14305);
(statearr_14390[(16)] = inst_14295__$1);
return statearr_14390;
})();var statearr_14391_14427 = state_14354__$1;(statearr_14391_14427[(2)] = null);
(statearr_14391_14427[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (18)))
{var inst_14324 = (state_14354[(2)]);var state_14354__$1 = state_14354;var statearr_14392_14428 = state_14354__$1;(statearr_14392_14428[(2)] = inst_14324);
(statearr_14392_14428[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14355 === (8)))
{var inst_14298 = (state_14354[(13)]);var inst_14297 = (state_14354[(15)]);var inst_14300 = (inst_14298 < inst_14297);var inst_14301 = inst_14300;var state_14354__$1 = state_14354;if(cljs.core.truth_(inst_14301))
{var statearr_14393_14429 = state_14354__$1;(statearr_14393_14429[(1)] = (10));
} else
{var statearr_14394_14430 = state_14354__$1;(statearr_14394_14430[(1)] = (11));
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
});})(c__5849__auto___14402,mults,ensure_mult,p))
;return ((function (switch__5834__auto__,c__5849__auto___14402,mults,ensure_mult,p){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14398[(0)] = state_machine__5835__auto__);
(statearr_14398[(1)] = (1));
return statearr_14398;
});
var state_machine__5835__auto____1 = (function (state_14354){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14399){if((e14399 instanceof Object))
{var ex__5838__auto__ = e14399;var statearr_14400_14431 = state_14354;(statearr_14400_14431[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14354);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14399;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14432 = state_14354;
state_14354 = G__14432;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14354){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14402,mults,ensure_mult,p))
})();var state__5851__auto__ = (function (){var statearr_14401 = f__5850__auto__.call(null);(statearr_14401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14402);
return statearr_14401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14402,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5849__auto___14569 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14569,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14569,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14539){var state_val_14540 = (state_14539[(1)]);if((state_val_14540 === (7)))
{var state_14539__$1 = state_14539;var statearr_14541_14570 = state_14539__$1;(statearr_14541_14570[(2)] = null);
(statearr_14541_14570[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (1)))
{var state_14539__$1 = state_14539;var statearr_14542_14571 = state_14539__$1;(statearr_14542_14571[(2)] = null);
(statearr_14542_14571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (4)))
{var inst_14503 = (state_14539[(7)]);var inst_14505 = (inst_14503 < cnt);var state_14539__$1 = state_14539;if(cljs.core.truth_(inst_14505))
{var statearr_14543_14572 = state_14539__$1;(statearr_14543_14572[(1)] = (6));
} else
{var statearr_14544_14573 = state_14539__$1;(statearr_14544_14573[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (15)))
{var inst_14535 = (state_14539[(2)]);var state_14539__$1 = state_14539;var statearr_14545_14574 = state_14539__$1;(statearr_14545_14574[(2)] = inst_14535);
(statearr_14545_14574[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (13)))
{var inst_14528 = cljs.core.async.close_BANG_.call(null,out);var state_14539__$1 = state_14539;var statearr_14546_14575 = state_14539__$1;(statearr_14546_14575[(2)] = inst_14528);
(statearr_14546_14575[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (6)))
{var state_14539__$1 = state_14539;var statearr_14547_14576 = state_14539__$1;(statearr_14547_14576[(2)] = null);
(statearr_14547_14576[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (3)))
{var inst_14537 = (state_14539[(2)]);var state_14539__$1 = state_14539;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14539__$1,inst_14537);
} else
{if((state_val_14540 === (12)))
{var inst_14525 = (state_14539[(8)]);var inst_14525__$1 = (state_14539[(2)]);var inst_14526 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14525__$1);var state_14539__$1 = (function (){var statearr_14548 = state_14539;(statearr_14548[(8)] = inst_14525__$1);
return statearr_14548;
})();if(cljs.core.truth_(inst_14526))
{var statearr_14549_14577 = state_14539__$1;(statearr_14549_14577[(1)] = (13));
} else
{var statearr_14550_14578 = state_14539__$1;(statearr_14550_14578[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (2)))
{var inst_14502 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14503 = (0);var state_14539__$1 = (function (){var statearr_14551 = state_14539;(statearr_14551[(7)] = inst_14503);
(statearr_14551[(9)] = inst_14502);
return statearr_14551;
})();var statearr_14552_14579 = state_14539__$1;(statearr_14552_14579[(2)] = null);
(statearr_14552_14579[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (11)))
{var inst_14503 = (state_14539[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14539,(10),Object,null,(9));var inst_14512 = chs__$1.call(null,inst_14503);var inst_14513 = done.call(null,inst_14503);var inst_14514 = cljs.core.async.take_BANG_.call(null,inst_14512,inst_14513);var state_14539__$1 = state_14539;var statearr_14553_14580 = state_14539__$1;(statearr_14553_14580[(2)] = inst_14514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14539__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (9)))
{var inst_14503 = (state_14539[(7)]);var inst_14516 = (state_14539[(2)]);var inst_14517 = (inst_14503 + (1));var inst_14503__$1 = inst_14517;var state_14539__$1 = (function (){var statearr_14554 = state_14539;(statearr_14554[(7)] = inst_14503__$1);
(statearr_14554[(10)] = inst_14516);
return statearr_14554;
})();var statearr_14555_14581 = state_14539__$1;(statearr_14555_14581[(2)] = null);
(statearr_14555_14581[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (5)))
{var inst_14523 = (state_14539[(2)]);var state_14539__$1 = (function (){var statearr_14556 = state_14539;(statearr_14556[(11)] = inst_14523);
return statearr_14556;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14539__$1,(12),dchan);
} else
{if((state_val_14540 === (14)))
{var inst_14525 = (state_14539[(8)]);var inst_14530 = cljs.core.apply.call(null,f,inst_14525);var state_14539__$1 = state_14539;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14539__$1,(16),out,inst_14530);
} else
{if((state_val_14540 === (16)))
{var inst_14532 = (state_14539[(2)]);var state_14539__$1 = (function (){var statearr_14557 = state_14539;(statearr_14557[(12)] = inst_14532);
return statearr_14557;
})();var statearr_14558_14582 = state_14539__$1;(statearr_14558_14582[(2)] = null);
(statearr_14558_14582[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (10)))
{var inst_14507 = (state_14539[(2)]);var inst_14508 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14539__$1 = (function (){var statearr_14559 = state_14539;(statearr_14559[(13)] = inst_14507);
return statearr_14559;
})();var statearr_14560_14583 = state_14539__$1;(statearr_14560_14583[(2)] = inst_14508);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14539__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14540 === (8)))
{var inst_14521 = (state_14539[(2)]);var state_14539__$1 = state_14539;var statearr_14561_14584 = state_14539__$1;(statearr_14561_14584[(2)] = inst_14521);
(statearr_14561_14584[(1)] = (5));
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
});})(c__5849__auto___14569,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5834__auto__,c__5849__auto___14569,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14565[(0)] = state_machine__5835__auto__);
(statearr_14565[(1)] = (1));
return statearr_14565;
});
var state_machine__5835__auto____1 = (function (state_14539){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14539);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14566){if((e14566 instanceof Object))
{var ex__5838__auto__ = e14566;var statearr_14567_14585 = state_14539;(statearr_14567_14585[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14539);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14566;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14586 = state_14539;
state_14539 = G__14586;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14539){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14569,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5851__auto__ = (function (){var statearr_14568 = f__5850__auto__.call(null);(statearr_14568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14569);
return statearr_14568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14569,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14694 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14694,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14694,out){
return (function (state_14670){var state_val_14671 = (state_14670[(1)]);if((state_val_14671 === (7)))
{var inst_14650 = (state_14670[(7)]);var inst_14649 = (state_14670[(8)]);var inst_14649__$1 = (state_14670[(2)]);var inst_14650__$1 = cljs.core.nth.call(null,inst_14649__$1,(0),null);var inst_14651 = cljs.core.nth.call(null,inst_14649__$1,(1),null);var inst_14652 = (inst_14650__$1 == null);var state_14670__$1 = (function (){var statearr_14672 = state_14670;(statearr_14672[(7)] = inst_14650__$1);
(statearr_14672[(8)] = inst_14649__$1);
(statearr_14672[(9)] = inst_14651);
return statearr_14672;
})();if(cljs.core.truth_(inst_14652))
{var statearr_14673_14695 = state_14670__$1;(statearr_14673_14695[(1)] = (8));
} else
{var statearr_14674_14696 = state_14670__$1;(statearr_14674_14696[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (1)))
{var inst_14641 = cljs.core.vec.call(null,chs);var inst_14642 = inst_14641;var state_14670__$1 = (function (){var statearr_14675 = state_14670;(statearr_14675[(10)] = inst_14642);
return statearr_14675;
})();var statearr_14676_14697 = state_14670__$1;(statearr_14676_14697[(2)] = null);
(statearr_14676_14697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (4)))
{var inst_14642 = (state_14670[(10)]);var state_14670__$1 = state_14670;return cljs.core.async.ioc_alts_BANG_.call(null,state_14670__$1,(7),inst_14642);
} else
{if((state_val_14671 === (6)))
{var inst_14666 = (state_14670[(2)]);var state_14670__$1 = state_14670;var statearr_14677_14698 = state_14670__$1;(statearr_14677_14698[(2)] = inst_14666);
(statearr_14677_14698[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (3)))
{var inst_14668 = (state_14670[(2)]);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14670__$1,inst_14668);
} else
{if((state_val_14671 === (2)))
{var inst_14642 = (state_14670[(10)]);var inst_14644 = cljs.core.count.call(null,inst_14642);var inst_14645 = (inst_14644 > (0));var state_14670__$1 = state_14670;if(cljs.core.truth_(inst_14645))
{var statearr_14679_14699 = state_14670__$1;(statearr_14679_14699[(1)] = (4));
} else
{var statearr_14680_14700 = state_14670__$1;(statearr_14680_14700[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (11)))
{var inst_14642 = (state_14670[(10)]);var inst_14659 = (state_14670[(2)]);var tmp14678 = inst_14642;var inst_14642__$1 = tmp14678;var state_14670__$1 = (function (){var statearr_14681 = state_14670;(statearr_14681[(10)] = inst_14642__$1);
(statearr_14681[(11)] = inst_14659);
return statearr_14681;
})();var statearr_14682_14701 = state_14670__$1;(statearr_14682_14701[(2)] = null);
(statearr_14682_14701[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (9)))
{var inst_14650 = (state_14670[(7)]);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14670__$1,(11),out,inst_14650);
} else
{if((state_val_14671 === (5)))
{var inst_14664 = cljs.core.async.close_BANG_.call(null,out);var state_14670__$1 = state_14670;var statearr_14683_14702 = state_14670__$1;(statearr_14683_14702[(2)] = inst_14664);
(statearr_14683_14702[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (10)))
{var inst_14662 = (state_14670[(2)]);var state_14670__$1 = state_14670;var statearr_14684_14703 = state_14670__$1;(statearr_14684_14703[(2)] = inst_14662);
(statearr_14684_14703[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14671 === (8)))
{var inst_14642 = (state_14670[(10)]);var inst_14650 = (state_14670[(7)]);var inst_14649 = (state_14670[(8)]);var inst_14651 = (state_14670[(9)]);var inst_14654 = (function (){var c = inst_14651;var v = inst_14650;var vec__14647 = inst_14649;var cs = inst_14642;return ((function (c,v,vec__14647,cs,inst_14642,inst_14650,inst_14649,inst_14651,state_val_14671,c__5849__auto___14694,out){
return (function (p1__14587_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14587_SHARP_);
});
;})(c,v,vec__14647,cs,inst_14642,inst_14650,inst_14649,inst_14651,state_val_14671,c__5849__auto___14694,out))
})();var inst_14655 = cljs.core.filterv.call(null,inst_14654,inst_14642);var inst_14642__$1 = inst_14655;var state_14670__$1 = (function (){var statearr_14685 = state_14670;(statearr_14685[(10)] = inst_14642__$1);
return statearr_14685;
})();var statearr_14686_14704 = state_14670__$1;(statearr_14686_14704[(2)] = null);
(statearr_14686_14704[(1)] = (2));
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
});})(c__5849__auto___14694,out))
;return ((function (switch__5834__auto__,c__5849__auto___14694,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14690 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14690[(0)] = state_machine__5835__auto__);
(statearr_14690[(1)] = (1));
return statearr_14690;
});
var state_machine__5835__auto____1 = (function (state_14670){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14670);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14691){if((e14691 instanceof Object))
{var ex__5838__auto__ = e14691;var statearr_14692_14705 = state_14670;(statearr_14692_14705[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14691;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14706 = state_14670;
state_14670 = G__14706;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14670){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14694,out))
})();var state__5851__auto__ = (function (){var statearr_14693 = f__5850__auto__.call(null);(statearr_14693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14694);
return statearr_14693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14694,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14799,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14799,out){
return (function (state_14776){var state_val_14777 = (state_14776[(1)]);if((state_val_14777 === (7)))
{var inst_14758 = (state_14776[(7)]);var inst_14758__$1 = (state_14776[(2)]);var inst_14759 = (inst_14758__$1 == null);var inst_14760 = cljs.core.not.call(null,inst_14759);var state_14776__$1 = (function (){var statearr_14778 = state_14776;(statearr_14778[(7)] = inst_14758__$1);
return statearr_14778;
})();if(inst_14760)
{var statearr_14779_14800 = state_14776__$1;(statearr_14779_14800[(1)] = (8));
} else
{var statearr_14780_14801 = state_14776__$1;(statearr_14780_14801[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (1)))
{var inst_14753 = (0);var state_14776__$1 = (function (){var statearr_14781 = state_14776;(statearr_14781[(8)] = inst_14753);
return statearr_14781;
})();var statearr_14782_14802 = state_14776__$1;(statearr_14782_14802[(2)] = null);
(statearr_14782_14802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (4)))
{var state_14776__$1 = state_14776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14776__$1,(7),ch);
} else
{if((state_val_14777 === (6)))
{var inst_14771 = (state_14776[(2)]);var state_14776__$1 = state_14776;var statearr_14783_14803 = state_14776__$1;(statearr_14783_14803[(2)] = inst_14771);
(statearr_14783_14803[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (3)))
{var inst_14773 = (state_14776[(2)]);var inst_14774 = cljs.core.async.close_BANG_.call(null,out);var state_14776__$1 = (function (){var statearr_14784 = state_14776;(statearr_14784[(9)] = inst_14773);
return statearr_14784;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14776__$1,inst_14774);
} else
{if((state_val_14777 === (2)))
{var inst_14753 = (state_14776[(8)]);var inst_14755 = (inst_14753 < n);var state_14776__$1 = state_14776;if(cljs.core.truth_(inst_14755))
{var statearr_14785_14804 = state_14776__$1;(statearr_14785_14804[(1)] = (4));
} else
{var statearr_14786_14805 = state_14776__$1;(statearr_14786_14805[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (11)))
{var inst_14753 = (state_14776[(8)]);var inst_14763 = (state_14776[(2)]);var inst_14764 = (inst_14753 + (1));var inst_14753__$1 = inst_14764;var state_14776__$1 = (function (){var statearr_14787 = state_14776;(statearr_14787[(10)] = inst_14763);
(statearr_14787[(8)] = inst_14753__$1);
return statearr_14787;
})();var statearr_14788_14806 = state_14776__$1;(statearr_14788_14806[(2)] = null);
(statearr_14788_14806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (9)))
{var state_14776__$1 = state_14776;var statearr_14789_14807 = state_14776__$1;(statearr_14789_14807[(2)] = null);
(statearr_14789_14807[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (5)))
{var state_14776__$1 = state_14776;var statearr_14790_14808 = state_14776__$1;(statearr_14790_14808[(2)] = null);
(statearr_14790_14808[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (10)))
{var inst_14768 = (state_14776[(2)]);var state_14776__$1 = state_14776;var statearr_14791_14809 = state_14776__$1;(statearr_14791_14809[(2)] = inst_14768);
(statearr_14791_14809[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14777 === (8)))
{var inst_14758 = (state_14776[(7)]);var state_14776__$1 = state_14776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14776__$1,(11),out,inst_14758);
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
});})(c__5849__auto___14799,out))
;return ((function (switch__5834__auto__,c__5849__auto___14799,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14795 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14795[(0)] = state_machine__5835__auto__);
(statearr_14795[(1)] = (1));
return statearr_14795;
});
var state_machine__5835__auto____1 = (function (state_14776){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14796){if((e14796 instanceof Object))
{var ex__5838__auto__ = e14796;var statearr_14797_14810 = state_14776;(statearr_14797_14810[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14796;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14811 = state_14776;
state_14776 = G__14811;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14799,out))
})();var state__5851__auto__ = (function (){var statearr_14798 = f__5850__auto__.call(null);(statearr_14798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14799);
return statearr_14798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14799,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14819 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14819 = (function (ch,f,map_LT_,meta14820){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14820 = meta14820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14819.cljs$lang$type = true;
cljs.core.async.t14819.cljs$lang$ctorStr = "cljs.core.async/t14819";
cljs.core.async.t14819.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14819");
});
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14822 = (function (fn1,_,meta14820,ch,f,map_LT_,meta14823){
this.fn1 = fn1;
this._ = _;
this.meta14820 = meta14820;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14823 = meta14823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14822.cljs$lang$type = true;
cljs.core.async.t14822.cljs$lang$ctorStr = "cljs.core.async/t14822";
cljs.core.async.t14822.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14822");
});})(___$1))
;
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14812_SHARP_){return f1.call(null,(((p1__14812_SHARP_ == null))?null:self__.f.call(null,p1__14812_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14824){var self__ = this;
var _14824__$1 = this;return self__.meta14823;
});})(___$1))
;
cljs.core.async.t14822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14824,meta14823__$1){var self__ = this;
var _14824__$1 = this;return (new cljs.core.async.t14822(self__.fn1,self__._,self__.meta14820,self__.ch,self__.f,self__.map_LT_,meta14823__$1));
});})(___$1))
;
cljs.core.async.__GT_t14822 = ((function (___$1){
return (function __GT_t14822(fn1__$1,___$2,meta14820__$1,ch__$2,f__$2,map_LT___$2,meta14823){return (new cljs.core.async.t14822(fn1__$1,___$2,meta14820__$1,ch__$2,f__$2,map_LT___$2,meta14823));
});})(___$1))
;
}
return (new cljs.core.async.t14822(fn1,___$1,self__.meta14820,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14819.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14821){var self__ = this;
var _14821__$1 = this;return self__.meta14820;
});
cljs.core.async.t14819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14821,meta14820__$1){var self__ = this;
var _14821__$1 = this;return (new cljs.core.async.t14819(self__.ch,self__.f,self__.map_LT_,meta14820__$1));
});
cljs.core.async.__GT_t14819 = (function __GT_t14819(ch__$1,f__$1,map_LT___$1,meta14820){return (new cljs.core.async.t14819(ch__$1,f__$1,map_LT___$1,meta14820));
});
}
return (new cljs.core.async.t14819(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14828 = (function (ch,f,map_GT_,meta14829){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14829 = meta14829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14828.cljs$lang$type = true;
cljs.core.async.t14828.cljs$lang$ctorStr = "cljs.core.async/t14828";
cljs.core.async.t14828.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14828");
});
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14830){var self__ = this;
var _14830__$1 = this;return self__.meta14829;
});
cljs.core.async.t14828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14830,meta14829__$1){var self__ = this;
var _14830__$1 = this;return (new cljs.core.async.t14828(self__.ch,self__.f,self__.map_GT_,meta14829__$1));
});
cljs.core.async.__GT_t14828 = (function __GT_t14828(ch__$1,f__$1,map_GT___$1,meta14829){return (new cljs.core.async.t14828(ch__$1,f__$1,map_GT___$1,meta14829));
});
}
return (new cljs.core.async.t14828(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14834 = (function (ch,p,filter_GT_,meta14835){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14835 = meta14835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14834.cljs$lang$type = true;
cljs.core.async.t14834.cljs$lang$ctorStr = "cljs.core.async/t14834";
cljs.core.async.t14834.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14834");
});
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14836){var self__ = this;
var _14836__$1 = this;return self__.meta14835;
});
cljs.core.async.t14834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14836,meta14835__$1){var self__ = this;
var _14836__$1 = this;return (new cljs.core.async.t14834(self__.ch,self__.p,self__.filter_GT_,meta14835__$1));
});
cljs.core.async.__GT_t14834 = (function __GT_t14834(ch__$1,p__$1,filter_GT___$1,meta14835){return (new cljs.core.async.t14834(ch__$1,p__$1,filter_GT___$1,meta14835));
});
}
return (new cljs.core.async.t14834(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14919 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14919,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14919,out){
return (function (state_14898){var state_val_14899 = (state_14898[(1)]);if((state_val_14899 === (7)))
{var inst_14894 = (state_14898[(2)]);var state_14898__$1 = state_14898;var statearr_14900_14920 = state_14898__$1;(statearr_14900_14920[(2)] = inst_14894);
(statearr_14900_14920[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (1)))
{var state_14898__$1 = state_14898;var statearr_14901_14921 = state_14898__$1;(statearr_14901_14921[(2)] = null);
(statearr_14901_14921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (4)))
{var inst_14880 = (state_14898[(7)]);var inst_14880__$1 = (state_14898[(2)]);var inst_14881 = (inst_14880__$1 == null);var state_14898__$1 = (function (){var statearr_14902 = state_14898;(statearr_14902[(7)] = inst_14880__$1);
return statearr_14902;
})();if(cljs.core.truth_(inst_14881))
{var statearr_14903_14922 = state_14898__$1;(statearr_14903_14922[(1)] = (5));
} else
{var statearr_14904_14923 = state_14898__$1;(statearr_14904_14923[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (6)))
{var inst_14880 = (state_14898[(7)]);var inst_14885 = p.call(null,inst_14880);var state_14898__$1 = state_14898;if(cljs.core.truth_(inst_14885))
{var statearr_14905_14924 = state_14898__$1;(statearr_14905_14924[(1)] = (8));
} else
{var statearr_14906_14925 = state_14898__$1;(statearr_14906_14925[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (3)))
{var inst_14896 = (state_14898[(2)]);var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14898__$1,inst_14896);
} else
{if((state_val_14899 === (2)))
{var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14898__$1,(4),ch);
} else
{if((state_val_14899 === (11)))
{var inst_14888 = (state_14898[(2)]);var state_14898__$1 = state_14898;var statearr_14907_14926 = state_14898__$1;(statearr_14907_14926[(2)] = inst_14888);
(statearr_14907_14926[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (9)))
{var state_14898__$1 = state_14898;var statearr_14908_14927 = state_14898__$1;(statearr_14908_14927[(2)] = null);
(statearr_14908_14927[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (5)))
{var inst_14883 = cljs.core.async.close_BANG_.call(null,out);var state_14898__$1 = state_14898;var statearr_14909_14928 = state_14898__$1;(statearr_14909_14928[(2)] = inst_14883);
(statearr_14909_14928[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (10)))
{var inst_14891 = (state_14898[(2)]);var state_14898__$1 = (function (){var statearr_14910 = state_14898;(statearr_14910[(8)] = inst_14891);
return statearr_14910;
})();var statearr_14911_14929 = state_14898__$1;(statearr_14911_14929[(2)] = null);
(statearr_14911_14929[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14899 === (8)))
{var inst_14880 = (state_14898[(7)]);var state_14898__$1 = state_14898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14898__$1,(11),out,inst_14880);
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
});})(c__5849__auto___14919,out))
;return ((function (switch__5834__auto__,c__5849__auto___14919,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14915 = [null,null,null,null,null,null,null,null,null];(statearr_14915[(0)] = state_machine__5835__auto__);
(statearr_14915[(1)] = (1));
return statearr_14915;
});
var state_machine__5835__auto____1 = (function (state_14898){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14916){if((e14916 instanceof Object))
{var ex__5838__auto__ = e14916;var statearr_14917_14930 = state_14898;(statearr_14917_14930[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14898);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14916;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14931 = state_14898;
state_14898 = G__14931;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14898){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14919,out))
})();var state__5851__auto__ = (function (){var statearr_14918 = f__5850__auto__.call(null);(statearr_14918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14919);
return statearr_14918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14919,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__){
return (function (state_15097){var state_val_15098 = (state_15097[(1)]);if((state_val_15098 === (7)))
{var inst_15093 = (state_15097[(2)]);var state_15097__$1 = state_15097;var statearr_15099_15140 = state_15097__$1;(statearr_15099_15140[(2)] = inst_15093);
(statearr_15099_15140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (20)))
{var inst_15063 = (state_15097[(7)]);var inst_15074 = (state_15097[(2)]);var inst_15075 = cljs.core.next.call(null,inst_15063);var inst_15049 = inst_15075;var inst_15050 = null;var inst_15051 = (0);var inst_15052 = (0);var state_15097__$1 = (function (){var statearr_15100 = state_15097;(statearr_15100[(8)] = inst_15049);
(statearr_15100[(9)] = inst_15052);
(statearr_15100[(10)] = inst_15051);
(statearr_15100[(11)] = inst_15050);
(statearr_15100[(12)] = inst_15074);
return statearr_15100;
})();var statearr_15101_15141 = state_15097__$1;(statearr_15101_15141[(2)] = null);
(statearr_15101_15141[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (1)))
{var state_15097__$1 = state_15097;var statearr_15102_15142 = state_15097__$1;(statearr_15102_15142[(2)] = null);
(statearr_15102_15142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (4)))
{var inst_15038 = (state_15097[(13)]);var inst_15038__$1 = (state_15097[(2)]);var inst_15039 = (inst_15038__$1 == null);var state_15097__$1 = (function (){var statearr_15103 = state_15097;(statearr_15103[(13)] = inst_15038__$1);
return statearr_15103;
})();if(cljs.core.truth_(inst_15039))
{var statearr_15104_15143 = state_15097__$1;(statearr_15104_15143[(1)] = (5));
} else
{var statearr_15105_15144 = state_15097__$1;(statearr_15105_15144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (15)))
{var state_15097__$1 = state_15097;var statearr_15109_15145 = state_15097__$1;(statearr_15109_15145[(2)] = null);
(statearr_15109_15145[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (21)))
{var state_15097__$1 = state_15097;var statearr_15110_15146 = state_15097__$1;(statearr_15110_15146[(2)] = null);
(statearr_15110_15146[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (13)))
{var inst_15049 = (state_15097[(8)]);var inst_15052 = (state_15097[(9)]);var inst_15051 = (state_15097[(10)]);var inst_15050 = (state_15097[(11)]);var inst_15059 = (state_15097[(2)]);var inst_15060 = (inst_15052 + (1));var tmp15106 = inst_15049;var tmp15107 = inst_15051;var tmp15108 = inst_15050;var inst_15049__$1 = tmp15106;var inst_15050__$1 = tmp15108;var inst_15051__$1 = tmp15107;var inst_15052__$1 = inst_15060;var state_15097__$1 = (function (){var statearr_15111 = state_15097;(statearr_15111[(8)] = inst_15049__$1);
(statearr_15111[(14)] = inst_15059);
(statearr_15111[(9)] = inst_15052__$1);
(statearr_15111[(10)] = inst_15051__$1);
(statearr_15111[(11)] = inst_15050__$1);
return statearr_15111;
})();var statearr_15112_15147 = state_15097__$1;(statearr_15112_15147[(2)] = null);
(statearr_15112_15147[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (22)))
{var state_15097__$1 = state_15097;var statearr_15113_15148 = state_15097__$1;(statearr_15113_15148[(2)] = null);
(statearr_15113_15148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (6)))
{var inst_15038 = (state_15097[(13)]);var inst_15047 = f.call(null,inst_15038);var inst_15048 = cljs.core.seq.call(null,inst_15047);var inst_15049 = inst_15048;var inst_15050 = null;var inst_15051 = (0);var inst_15052 = (0);var state_15097__$1 = (function (){var statearr_15114 = state_15097;(statearr_15114[(8)] = inst_15049);
(statearr_15114[(9)] = inst_15052);
(statearr_15114[(10)] = inst_15051);
(statearr_15114[(11)] = inst_15050);
return statearr_15114;
})();var statearr_15115_15149 = state_15097__$1;(statearr_15115_15149[(2)] = null);
(statearr_15115_15149[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (17)))
{var inst_15063 = (state_15097[(7)]);var inst_15067 = cljs.core.chunk_first.call(null,inst_15063);var inst_15068 = cljs.core.chunk_rest.call(null,inst_15063);var inst_15069 = cljs.core.count.call(null,inst_15067);var inst_15049 = inst_15068;var inst_15050 = inst_15067;var inst_15051 = inst_15069;var inst_15052 = (0);var state_15097__$1 = (function (){var statearr_15116 = state_15097;(statearr_15116[(8)] = inst_15049);
(statearr_15116[(9)] = inst_15052);
(statearr_15116[(10)] = inst_15051);
(statearr_15116[(11)] = inst_15050);
return statearr_15116;
})();var statearr_15117_15150 = state_15097__$1;(statearr_15117_15150[(2)] = null);
(statearr_15117_15150[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (3)))
{var inst_15095 = (state_15097[(2)]);var state_15097__$1 = state_15097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15097__$1,inst_15095);
} else
{if((state_val_15098 === (12)))
{var inst_15083 = (state_15097[(2)]);var state_15097__$1 = state_15097;var statearr_15118_15151 = state_15097__$1;(statearr_15118_15151[(2)] = inst_15083);
(statearr_15118_15151[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (2)))
{var state_15097__$1 = state_15097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15097__$1,(4),in$);
} else
{if((state_val_15098 === (23)))
{var inst_15091 = (state_15097[(2)]);var state_15097__$1 = state_15097;var statearr_15119_15152 = state_15097__$1;(statearr_15119_15152[(2)] = inst_15091);
(statearr_15119_15152[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (19)))
{var inst_15078 = (state_15097[(2)]);var state_15097__$1 = state_15097;var statearr_15120_15153 = state_15097__$1;(statearr_15120_15153[(2)] = inst_15078);
(statearr_15120_15153[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (11)))
{var inst_15049 = (state_15097[(8)]);var inst_15063 = (state_15097[(7)]);var inst_15063__$1 = cljs.core.seq.call(null,inst_15049);var state_15097__$1 = (function (){var statearr_15121 = state_15097;(statearr_15121[(7)] = inst_15063__$1);
return statearr_15121;
})();if(inst_15063__$1)
{var statearr_15122_15154 = state_15097__$1;(statearr_15122_15154[(1)] = (14));
} else
{var statearr_15123_15155 = state_15097__$1;(statearr_15123_15155[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (9)))
{var inst_15085 = (state_15097[(2)]);var inst_15086 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15097__$1 = (function (){var statearr_15124 = state_15097;(statearr_15124[(15)] = inst_15085);
return statearr_15124;
})();if(cljs.core.truth_(inst_15086))
{var statearr_15125_15156 = state_15097__$1;(statearr_15125_15156[(1)] = (21));
} else
{var statearr_15126_15157 = state_15097__$1;(statearr_15126_15157[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (5)))
{var inst_15041 = cljs.core.async.close_BANG_.call(null,out);var state_15097__$1 = state_15097;var statearr_15127_15158 = state_15097__$1;(statearr_15127_15158[(2)] = inst_15041);
(statearr_15127_15158[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (14)))
{var inst_15063 = (state_15097[(7)]);var inst_15065 = cljs.core.chunked_seq_QMARK_.call(null,inst_15063);var state_15097__$1 = state_15097;if(inst_15065)
{var statearr_15128_15159 = state_15097__$1;(statearr_15128_15159[(1)] = (17));
} else
{var statearr_15129_15160 = state_15097__$1;(statearr_15129_15160[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (16)))
{var inst_15081 = (state_15097[(2)]);var state_15097__$1 = state_15097;var statearr_15130_15161 = state_15097__$1;(statearr_15130_15161[(2)] = inst_15081);
(statearr_15130_15161[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15098 === (10)))
{var inst_15052 = (state_15097[(9)]);var inst_15050 = (state_15097[(11)]);var inst_15057 = cljs.core._nth.call(null,inst_15050,inst_15052);var state_15097__$1 = state_15097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15097__$1,(13),out,inst_15057);
} else
{if((state_val_15098 === (18)))
{var inst_15063 = (state_15097[(7)]);var inst_15072 = cljs.core.first.call(null,inst_15063);var state_15097__$1 = state_15097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15097__$1,(20),out,inst_15072);
} else
{if((state_val_15098 === (8)))
{var inst_15052 = (state_15097[(9)]);var inst_15051 = (state_15097[(10)]);var inst_15054 = (inst_15052 < inst_15051);var inst_15055 = inst_15054;var state_15097__$1 = state_15097;if(cljs.core.truth_(inst_15055))
{var statearr_15131_15162 = state_15097__$1;(statearr_15131_15162[(1)] = (10));
} else
{var statearr_15132_15163 = state_15097__$1;(statearr_15132_15163[(1)] = (11));
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
});})(c__5849__auto__))
;return ((function (switch__5834__auto__,c__5849__auto__){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15136[(0)] = state_machine__5835__auto__);
(statearr_15136[(1)] = (1));
return statearr_15136;
});
var state_machine__5835__auto____1 = (function (state_15097){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15137){if((e15137 instanceof Object))
{var ex__5838__auto__ = e15137;var statearr_15138_15164 = state_15097;(statearr_15138_15164[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15097);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15165 = state_15097;
state_15097 = G__15165;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15097){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_15139 = f__5850__auto__.call(null);(statearr_15139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_15139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto__))
);
return c__5849__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15262 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15262,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15262,out){
return (function (state_15237){var state_val_15238 = (state_15237[(1)]);if((state_val_15238 === (7)))
{var inst_15232 = (state_15237[(2)]);var state_15237__$1 = state_15237;var statearr_15239_15263 = state_15237__$1;(statearr_15239_15263[(2)] = inst_15232);
(statearr_15239_15263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (1)))
{var inst_15214 = null;var state_15237__$1 = (function (){var statearr_15240 = state_15237;(statearr_15240[(7)] = inst_15214);
return statearr_15240;
})();var statearr_15241_15264 = state_15237__$1;(statearr_15241_15264[(2)] = null);
(statearr_15241_15264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (4)))
{var inst_15217 = (state_15237[(8)]);var inst_15217__$1 = (state_15237[(2)]);var inst_15218 = (inst_15217__$1 == null);var inst_15219 = cljs.core.not.call(null,inst_15218);var state_15237__$1 = (function (){var statearr_15242 = state_15237;(statearr_15242[(8)] = inst_15217__$1);
return statearr_15242;
})();if(inst_15219)
{var statearr_15243_15265 = state_15237__$1;(statearr_15243_15265[(1)] = (5));
} else
{var statearr_15244_15266 = state_15237__$1;(statearr_15244_15266[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (6)))
{var state_15237__$1 = state_15237;var statearr_15245_15267 = state_15237__$1;(statearr_15245_15267[(2)] = null);
(statearr_15245_15267[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (3)))
{var inst_15234 = (state_15237[(2)]);var inst_15235 = cljs.core.async.close_BANG_.call(null,out);var state_15237__$1 = (function (){var statearr_15246 = state_15237;(statearr_15246[(9)] = inst_15234);
return statearr_15246;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15237__$1,inst_15235);
} else
{if((state_val_15238 === (2)))
{var state_15237__$1 = state_15237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15237__$1,(4),ch);
} else
{if((state_val_15238 === (11)))
{var inst_15217 = (state_15237[(8)]);var inst_15226 = (state_15237[(2)]);var inst_15214 = inst_15217;var state_15237__$1 = (function (){var statearr_15247 = state_15237;(statearr_15247[(10)] = inst_15226);
(statearr_15247[(7)] = inst_15214);
return statearr_15247;
})();var statearr_15248_15268 = state_15237__$1;(statearr_15248_15268[(2)] = null);
(statearr_15248_15268[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (9)))
{var inst_15217 = (state_15237[(8)]);var state_15237__$1 = state_15237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15237__$1,(11),out,inst_15217);
} else
{if((state_val_15238 === (5)))
{var inst_15217 = (state_15237[(8)]);var inst_15214 = (state_15237[(7)]);var inst_15221 = cljs.core._EQ_.call(null,inst_15217,inst_15214);var state_15237__$1 = state_15237;if(inst_15221)
{var statearr_15250_15269 = state_15237__$1;(statearr_15250_15269[(1)] = (8));
} else
{var statearr_15251_15270 = state_15237__$1;(statearr_15251_15270[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (10)))
{var inst_15229 = (state_15237[(2)]);var state_15237__$1 = state_15237;var statearr_15252_15271 = state_15237__$1;(statearr_15252_15271[(2)] = inst_15229);
(statearr_15252_15271[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15238 === (8)))
{var inst_15214 = (state_15237[(7)]);var tmp15249 = inst_15214;var inst_15214__$1 = tmp15249;var state_15237__$1 = (function (){var statearr_15253 = state_15237;(statearr_15253[(7)] = inst_15214__$1);
return statearr_15253;
})();var statearr_15254_15272 = state_15237__$1;(statearr_15254_15272[(2)] = null);
(statearr_15254_15272[(1)] = (2));
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
});})(c__5849__auto___15262,out))
;return ((function (switch__5834__auto__,c__5849__auto___15262,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15258 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15258[(0)] = state_machine__5835__auto__);
(statearr_15258[(1)] = (1));
return statearr_15258;
});
var state_machine__5835__auto____1 = (function (state_15237){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15237);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15259){if((e15259 instanceof Object))
{var ex__5838__auto__ = e15259;var statearr_15260_15273 = state_15237;(statearr_15260_15273[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15259;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15274 = state_15237;
state_15237 = G__15274;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15237){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15262,out))
})();var state__5851__auto__ = (function (){var statearr_15261 = f__5850__auto__.call(null);(statearr_15261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15262);
return statearr_15261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15262,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15409 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15409,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15409,out){
return (function (state_15379){var state_val_15380 = (state_15379[(1)]);if((state_val_15380 === (7)))
{var inst_15375 = (state_15379[(2)]);var state_15379__$1 = state_15379;var statearr_15381_15410 = state_15379__$1;(statearr_15381_15410[(2)] = inst_15375);
(statearr_15381_15410[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (1)))
{var inst_15342 = (new Array(n));var inst_15343 = inst_15342;var inst_15344 = (0);var state_15379__$1 = (function (){var statearr_15382 = state_15379;(statearr_15382[(7)] = inst_15343);
(statearr_15382[(8)] = inst_15344);
return statearr_15382;
})();var statearr_15383_15411 = state_15379__$1;(statearr_15383_15411[(2)] = null);
(statearr_15383_15411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (4)))
{var inst_15347 = (state_15379[(9)]);var inst_15347__$1 = (state_15379[(2)]);var inst_15348 = (inst_15347__$1 == null);var inst_15349 = cljs.core.not.call(null,inst_15348);var state_15379__$1 = (function (){var statearr_15384 = state_15379;(statearr_15384[(9)] = inst_15347__$1);
return statearr_15384;
})();if(inst_15349)
{var statearr_15385_15412 = state_15379__$1;(statearr_15385_15412[(1)] = (5));
} else
{var statearr_15386_15413 = state_15379__$1;(statearr_15386_15413[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (15)))
{var inst_15369 = (state_15379[(2)]);var state_15379__$1 = state_15379;var statearr_15387_15414 = state_15379__$1;(statearr_15387_15414[(2)] = inst_15369);
(statearr_15387_15414[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (13)))
{var state_15379__$1 = state_15379;var statearr_15388_15415 = state_15379__$1;(statearr_15388_15415[(2)] = null);
(statearr_15388_15415[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (6)))
{var inst_15344 = (state_15379[(8)]);var inst_15365 = (inst_15344 > (0));var state_15379__$1 = state_15379;if(cljs.core.truth_(inst_15365))
{var statearr_15389_15416 = state_15379__$1;(statearr_15389_15416[(1)] = (12));
} else
{var statearr_15390_15417 = state_15379__$1;(statearr_15390_15417[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (3)))
{var inst_15377 = (state_15379[(2)]);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15379__$1,inst_15377);
} else
{if((state_val_15380 === (12)))
{var inst_15343 = (state_15379[(7)]);var inst_15367 = cljs.core.vec.call(null,inst_15343);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15379__$1,(15),out,inst_15367);
} else
{if((state_val_15380 === (2)))
{var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15379__$1,(4),ch);
} else
{if((state_val_15380 === (11)))
{var inst_15359 = (state_15379[(2)]);var inst_15360 = (new Array(n));var inst_15343 = inst_15360;var inst_15344 = (0);var state_15379__$1 = (function (){var statearr_15391 = state_15379;(statearr_15391[(7)] = inst_15343);
(statearr_15391[(8)] = inst_15344);
(statearr_15391[(10)] = inst_15359);
return statearr_15391;
})();var statearr_15392_15418 = state_15379__$1;(statearr_15392_15418[(2)] = null);
(statearr_15392_15418[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (9)))
{var inst_15343 = (state_15379[(7)]);var inst_15357 = cljs.core.vec.call(null,inst_15343);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15379__$1,(11),out,inst_15357);
} else
{if((state_val_15380 === (5)))
{var inst_15343 = (state_15379[(7)]);var inst_15344 = (state_15379[(8)]);var inst_15352 = (state_15379[(11)]);var inst_15347 = (state_15379[(9)]);var inst_15351 = (inst_15343[inst_15344] = inst_15347);var inst_15352__$1 = (inst_15344 + (1));var inst_15353 = (inst_15352__$1 < n);var state_15379__$1 = (function (){var statearr_15393 = state_15379;(statearr_15393[(12)] = inst_15351);
(statearr_15393[(11)] = inst_15352__$1);
return statearr_15393;
})();if(cljs.core.truth_(inst_15353))
{var statearr_15394_15419 = state_15379__$1;(statearr_15394_15419[(1)] = (8));
} else
{var statearr_15395_15420 = state_15379__$1;(statearr_15395_15420[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (14)))
{var inst_15372 = (state_15379[(2)]);var inst_15373 = cljs.core.async.close_BANG_.call(null,out);var state_15379__$1 = (function (){var statearr_15397 = state_15379;(statearr_15397[(13)] = inst_15372);
return statearr_15397;
})();var statearr_15398_15421 = state_15379__$1;(statearr_15398_15421[(2)] = inst_15373);
(statearr_15398_15421[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (10)))
{var inst_15363 = (state_15379[(2)]);var state_15379__$1 = state_15379;var statearr_15399_15422 = state_15379__$1;(statearr_15399_15422[(2)] = inst_15363);
(statearr_15399_15422[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (8)))
{var inst_15343 = (state_15379[(7)]);var inst_15352 = (state_15379[(11)]);var tmp15396 = inst_15343;var inst_15343__$1 = tmp15396;var inst_15344 = inst_15352;var state_15379__$1 = (function (){var statearr_15400 = state_15379;(statearr_15400[(7)] = inst_15343__$1);
(statearr_15400[(8)] = inst_15344);
return statearr_15400;
})();var statearr_15401_15423 = state_15379__$1;(statearr_15401_15423[(2)] = null);
(statearr_15401_15423[(1)] = (2));
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
});})(c__5849__auto___15409,out))
;return ((function (switch__5834__auto__,c__5849__auto___15409,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15405[(0)] = state_machine__5835__auto__);
(statearr_15405[(1)] = (1));
return statearr_15405;
});
var state_machine__5835__auto____1 = (function (state_15379){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15406){if((e15406 instanceof Object))
{var ex__5838__auto__ = e15406;var statearr_15407_15424 = state_15379;(statearr_15407_15424[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15406;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15425 = state_15379;
state_15379 = G__15425;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15379){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15409,out))
})();var state__5851__auto__ = (function (){var statearr_15408 = f__5850__auto__.call(null);(statearr_15408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15409);
return statearr_15408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15409,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15568 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15568,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15568,out){
return (function (state_15538){var state_val_15539 = (state_15538[(1)]);if((state_val_15539 === (7)))
{var inst_15534 = (state_15538[(2)]);var state_15538__$1 = state_15538;var statearr_15540_15569 = state_15538__$1;(statearr_15540_15569[(2)] = inst_15534);
(statearr_15540_15569[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (1)))
{var inst_15497 = [];var inst_15498 = inst_15497;var inst_15499 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15538__$1 = (function (){var statearr_15541 = state_15538;(statearr_15541[(7)] = inst_15499);
(statearr_15541[(8)] = inst_15498);
return statearr_15541;
})();var statearr_15542_15570 = state_15538__$1;(statearr_15542_15570[(2)] = null);
(statearr_15542_15570[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (4)))
{var inst_15502 = (state_15538[(9)]);var inst_15502__$1 = (state_15538[(2)]);var inst_15503 = (inst_15502__$1 == null);var inst_15504 = cljs.core.not.call(null,inst_15503);var state_15538__$1 = (function (){var statearr_15543 = state_15538;(statearr_15543[(9)] = inst_15502__$1);
return statearr_15543;
})();if(inst_15504)
{var statearr_15544_15571 = state_15538__$1;(statearr_15544_15571[(1)] = (5));
} else
{var statearr_15545_15572 = state_15538__$1;(statearr_15545_15572[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (15)))
{var inst_15528 = (state_15538[(2)]);var state_15538__$1 = state_15538;var statearr_15546_15573 = state_15538__$1;(statearr_15546_15573[(2)] = inst_15528);
(statearr_15546_15573[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (13)))
{var state_15538__$1 = state_15538;var statearr_15547_15574 = state_15538__$1;(statearr_15547_15574[(2)] = null);
(statearr_15547_15574[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (6)))
{var inst_15498 = (state_15538[(8)]);var inst_15523 = inst_15498.length;var inst_15524 = (inst_15523 > (0));var state_15538__$1 = state_15538;if(cljs.core.truth_(inst_15524))
{var statearr_15548_15575 = state_15538__$1;(statearr_15548_15575[(1)] = (12));
} else
{var statearr_15549_15576 = state_15538__$1;(statearr_15549_15576[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (3)))
{var inst_15536 = (state_15538[(2)]);var state_15538__$1 = state_15538;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15538__$1,inst_15536);
} else
{if((state_val_15539 === (12)))
{var inst_15498 = (state_15538[(8)]);var inst_15526 = cljs.core.vec.call(null,inst_15498);var state_15538__$1 = state_15538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15538__$1,(15),out,inst_15526);
} else
{if((state_val_15539 === (2)))
{var state_15538__$1 = state_15538;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15538__$1,(4),ch);
} else
{if((state_val_15539 === (11)))
{var inst_15506 = (state_15538[(10)]);var inst_15502 = (state_15538[(9)]);var inst_15516 = (state_15538[(2)]);var inst_15517 = [];var inst_15518 = inst_15517.push(inst_15502);var inst_15498 = inst_15517;var inst_15499 = inst_15506;var state_15538__$1 = (function (){var statearr_15550 = state_15538;(statearr_15550[(7)] = inst_15499);
(statearr_15550[(11)] = inst_15516);
(statearr_15550[(8)] = inst_15498);
(statearr_15550[(12)] = inst_15518);
return statearr_15550;
})();var statearr_15551_15577 = state_15538__$1;(statearr_15551_15577[(2)] = null);
(statearr_15551_15577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (9)))
{var inst_15498 = (state_15538[(8)]);var inst_15514 = cljs.core.vec.call(null,inst_15498);var state_15538__$1 = state_15538;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15538__$1,(11),out,inst_15514);
} else
{if((state_val_15539 === (5)))
{var inst_15506 = (state_15538[(10)]);var inst_15499 = (state_15538[(7)]);var inst_15502 = (state_15538[(9)]);var inst_15506__$1 = f.call(null,inst_15502);var inst_15507 = cljs.core._EQ_.call(null,inst_15506__$1,inst_15499);var inst_15508 = cljs.core.keyword_identical_QMARK_.call(null,inst_15499,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15509 = (inst_15507) || (inst_15508);var state_15538__$1 = (function (){var statearr_15552 = state_15538;(statearr_15552[(10)] = inst_15506__$1);
return statearr_15552;
})();if(cljs.core.truth_(inst_15509))
{var statearr_15553_15578 = state_15538__$1;(statearr_15553_15578[(1)] = (8));
} else
{var statearr_15554_15579 = state_15538__$1;(statearr_15554_15579[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (14)))
{var inst_15531 = (state_15538[(2)]);var inst_15532 = cljs.core.async.close_BANG_.call(null,out);var state_15538__$1 = (function (){var statearr_15556 = state_15538;(statearr_15556[(13)] = inst_15531);
return statearr_15556;
})();var statearr_15557_15580 = state_15538__$1;(statearr_15557_15580[(2)] = inst_15532);
(statearr_15557_15580[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (10)))
{var inst_15521 = (state_15538[(2)]);var state_15538__$1 = state_15538;var statearr_15558_15581 = state_15538__$1;(statearr_15558_15581[(2)] = inst_15521);
(statearr_15558_15581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15539 === (8)))
{var inst_15506 = (state_15538[(10)]);var inst_15498 = (state_15538[(8)]);var inst_15502 = (state_15538[(9)]);var inst_15511 = inst_15498.push(inst_15502);var tmp15555 = inst_15498;var inst_15498__$1 = tmp15555;var inst_15499 = inst_15506;var state_15538__$1 = (function (){var statearr_15559 = state_15538;(statearr_15559[(14)] = inst_15511);
(statearr_15559[(7)] = inst_15499);
(statearr_15559[(8)] = inst_15498__$1);
return statearr_15559;
})();var statearr_15560_15582 = state_15538__$1;(statearr_15560_15582[(2)] = null);
(statearr_15560_15582[(1)] = (2));
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
});})(c__5849__auto___15568,out))
;return ((function (switch__5834__auto__,c__5849__auto___15568,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15564[(0)] = state_machine__5835__auto__);
(statearr_15564[(1)] = (1));
return statearr_15564;
});
var state_machine__5835__auto____1 = (function (state_15538){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15538);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15565){if((e15565 instanceof Object))
{var ex__5838__auto__ = e15565;var statearr_15566_15583 = state_15538;(statearr_15566_15583[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15538);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15565;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15584 = state_15538;
state_15538 = G__15584;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15538){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15568,out))
})();var state__5851__auto__ = (function (){var statearr_15567 = f__5850__auto__.call(null);(statearr_15567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15568);
return statearr_15567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15568,out))
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