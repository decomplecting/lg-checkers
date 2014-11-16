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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12506 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12506 = (function (f,fn_handler,meta12507){
this.f = f;
this.fn_handler = fn_handler;
this.meta12507 = meta12507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12506.cljs$lang$type = true;
cljs.core.async.t12506.cljs$lang$ctorStr = "cljs.core.async/t12506";
cljs.core.async.t12506.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12506");
});
cljs.core.async.t12506.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12508){var self__ = this;
var _12508__$1 = this;return self__.meta12507;
});
cljs.core.async.t12506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12508,meta12507__$1){var self__ = this;
var _12508__$1 = this;return (new cljs.core.async.t12506(self__.f,self__.fn_handler,meta12507__$1));
});
cljs.core.async.__GT_t12506 = (function __GT_t12506(f__$1,fn_handler__$1,meta12507){return (new cljs.core.async.t12506(f__$1,fn_handler__$1,meta12507));
});
}
return (new cljs.core.async.t12506(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12510 = buff;if(G__12510)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12510.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12510.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12510);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12510);
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
{var val_12511 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12511);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12511,ret){
return (function (){return fn1.call(null,val_12511);
});})(val_12511,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12512 = n;var x_12513 = (0);while(true){
if((x_12513 < n__4510__auto___12512))
{(a[x_12513] = (0));
{
var G__12514 = (x_12513 + (1));
x_12513 = G__12514;
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
var G__12515 = (i + (1));
i = G__12515;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12519 = (function (flag,alt_flag,meta12520){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12520 = meta12520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12519.cljs$lang$type = true;
cljs.core.async.t12519.cljs$lang$ctorStr = "cljs.core.async/t12519";
cljs.core.async.t12519.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12519");
});})(flag))
;
cljs.core.async.t12519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12521){var self__ = this;
var _12521__$1 = this;return self__.meta12520;
});})(flag))
;
cljs.core.async.t12519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12521,meta12520__$1){var self__ = this;
var _12521__$1 = this;return (new cljs.core.async.t12519(self__.flag,self__.alt_flag,meta12520__$1));
});})(flag))
;
cljs.core.async.__GT_t12519 = ((function (flag){
return (function __GT_t12519(flag__$1,alt_flag__$1,meta12520){return (new cljs.core.async.t12519(flag__$1,alt_flag__$1,meta12520));
});})(flag))
;
}
return (new cljs.core.async.t12519(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12525 = (function (cb,flag,alt_handler,meta12526){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12526 = meta12526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12525.cljs$lang$type = true;
cljs.core.async.t12525.cljs$lang$ctorStr = "cljs.core.async/t12525";
cljs.core.async.t12525.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12525");
});
cljs.core.async.t12525.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12527){var self__ = this;
var _12527__$1 = this;return self__.meta12526;
});
cljs.core.async.t12525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12527,meta12526__$1){var self__ = this;
var _12527__$1 = this;return (new cljs.core.async.t12525(self__.cb,self__.flag,self__.alt_handler,meta12526__$1));
});
cljs.core.async.__GT_t12525 = (function __GT_t12525(cb__$1,flag__$1,alt_handler__$1,meta12526){return (new cljs.core.async.t12525(cb__$1,flag__$1,alt_handler__$1,meta12526));
});
}
return (new cljs.core.async.t12525(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12528_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12528_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12529_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12529_SHARP_,port], null));
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
var G__12530 = (i + (1));
i = G__12530;
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
var alts_BANG___delegate = function (ports,p__12531){var map__12533 = p__12531;var map__12533__$1 = ((cljs.core.seq_QMARK_.call(null,map__12533))?cljs.core.apply.call(null,cljs.core.hash_map,map__12533):map__12533);var opts = map__12533__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12531 = null;if (arguments.length > 1) {
  p__12531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12531);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12534){
var ports = cljs.core.first(arglist__12534);
var p__12531 = cljs.core.rest(arglist__12534);
return alts_BANG___delegate(ports,p__12531);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5849__auto___12629 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___12629){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___12629){
return (function (state_12605){var state_val_12606 = (state_12605[(1)]);if((state_val_12606 === (7)))
{var inst_12601 = (state_12605[(2)]);var state_12605__$1 = state_12605;var statearr_12607_12630 = state_12605__$1;(statearr_12607_12630[(2)] = inst_12601);
(statearr_12607_12630[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (1)))
{var state_12605__$1 = state_12605;var statearr_12608_12631 = state_12605__$1;(statearr_12608_12631[(2)] = null);
(statearr_12608_12631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (4)))
{var inst_12584 = (state_12605[(7)]);var inst_12584__$1 = (state_12605[(2)]);var inst_12585 = (inst_12584__$1 == null);var state_12605__$1 = (function (){var statearr_12609 = state_12605;(statearr_12609[(7)] = inst_12584__$1);
return statearr_12609;
})();if(cljs.core.truth_(inst_12585))
{var statearr_12610_12632 = state_12605__$1;(statearr_12610_12632[(1)] = (5));
} else
{var statearr_12611_12633 = state_12605__$1;(statearr_12611_12633[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (13)))
{var state_12605__$1 = state_12605;var statearr_12612_12634 = state_12605__$1;(statearr_12612_12634[(2)] = null);
(statearr_12612_12634[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (6)))
{var inst_12584 = (state_12605[(7)]);var state_12605__$1 = state_12605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12605__$1,(11),to,inst_12584);
} else
{if((state_val_12606 === (3)))
{var inst_12603 = (state_12605[(2)]);var state_12605__$1 = state_12605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12605__$1,inst_12603);
} else
{if((state_val_12606 === (12)))
{var state_12605__$1 = state_12605;var statearr_12613_12635 = state_12605__$1;(statearr_12613_12635[(2)] = null);
(statearr_12613_12635[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (2)))
{var state_12605__$1 = state_12605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12605__$1,(4),from);
} else
{if((state_val_12606 === (11)))
{var inst_12594 = (state_12605[(2)]);var state_12605__$1 = state_12605;if(cljs.core.truth_(inst_12594))
{var statearr_12614_12636 = state_12605__$1;(statearr_12614_12636[(1)] = (12));
} else
{var statearr_12615_12637 = state_12605__$1;(statearr_12615_12637[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (9)))
{var state_12605__$1 = state_12605;var statearr_12616_12638 = state_12605__$1;(statearr_12616_12638[(2)] = null);
(statearr_12616_12638[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (5)))
{var state_12605__$1 = state_12605;if(cljs.core.truth_(close_QMARK_))
{var statearr_12617_12639 = state_12605__$1;(statearr_12617_12639[(1)] = (8));
} else
{var statearr_12618_12640 = state_12605__$1;(statearr_12618_12640[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (14)))
{var inst_12599 = (state_12605[(2)]);var state_12605__$1 = state_12605;var statearr_12619_12641 = state_12605__$1;(statearr_12619_12641[(2)] = inst_12599);
(statearr_12619_12641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (10)))
{var inst_12591 = (state_12605[(2)]);var state_12605__$1 = state_12605;var statearr_12620_12642 = state_12605__$1;(statearr_12620_12642[(2)] = inst_12591);
(statearr_12620_12642[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12606 === (8)))
{var inst_12588 = cljs.core.async.close_BANG_.call(null,to);var state_12605__$1 = state_12605;var statearr_12621_12643 = state_12605__$1;(statearr_12621_12643[(2)] = inst_12588);
(statearr_12621_12643[(1)] = (10));
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
});})(c__5849__auto___12629))
;return ((function (switch__5834__auto__,c__5849__auto___12629){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12625 = [null,null,null,null,null,null,null,null];(statearr_12625[(0)] = state_machine__5835__auto__);
(statearr_12625[(1)] = (1));
return statearr_12625;
});
var state_machine__5835__auto____1 = (function (state_12605){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12605);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12626){if((e12626 instanceof Object))
{var ex__5838__auto__ = e12626;var statearr_12627_12644 = state_12605;(statearr_12627_12644[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12605);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12645 = state_12605;
state_12605 = G__12645;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12605){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___12629))
})();var state__5851__auto__ = (function (){var statearr_12628 = f__5850__auto__.call(null);(statearr_12628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___12629);
return statearr_12628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___12629))
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
return (function (p__12829){var vec__12830 = p__12829;var v = cljs.core.nth.call(null,vec__12830,(0),null);var p = cljs.core.nth.call(null,vec__12830,(1),null);var job = vec__12830;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5849__auto___13012 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13012,res,vec__12830,v,p,job,jobs,results){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13012,res,vec__12830,v,p,job,jobs,results){
return (function (state_12835){var state_val_12836 = (state_12835[(1)]);if((state_val_12836 === (2)))
{var inst_12832 = (state_12835[(2)]);var inst_12833 = cljs.core.async.close_BANG_.call(null,res);var state_12835__$1 = (function (){var statearr_12837 = state_12835;(statearr_12837[(7)] = inst_12832);
return statearr_12837;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12835__$1,inst_12833);
} else
{if((state_val_12836 === (1)))
{var state_12835__$1 = state_12835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12835__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5849__auto___13012,res,vec__12830,v,p,job,jobs,results))
;return ((function (switch__5834__auto__,c__5849__auto___13012,res,vec__12830,v,p,job,jobs,results){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12841 = [null,null,null,null,null,null,null,null];(statearr_12841[(0)] = state_machine__5835__auto__);
(statearr_12841[(1)] = (1));
return statearr_12841;
});
var state_machine__5835__auto____1 = (function (state_12835){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12835);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12842){if((e12842 instanceof Object))
{var ex__5838__auto__ = e12842;var statearr_12843_13013 = state_12835;(statearr_12843_13013[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12842;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13014 = state_12835;
state_12835 = G__13014;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12835){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13012,res,vec__12830,v,p,job,jobs,results))
})();var state__5851__auto__ = (function (){var statearr_12844 = f__5850__auto__.call(null);(statearr_12844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13012);
return statearr_12844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13012,res,vec__12830,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12845){var vec__12846 = p__12845;var v = cljs.core.nth.call(null,vec__12846,(0),null);var p = cljs.core.nth.call(null,vec__12846,(1),null);var job = vec__12846;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___13015 = n;var __13016 = (0);while(true){
if((__13016 < n__4510__auto___13015))
{var G__12847_13017 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12847_13017) {
case "async":
var c__5849__auto___13019 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13016,c__5849__auto___13019,G__12847_13017,n__4510__auto___13015,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (__13016,c__5849__auto___13019,G__12847_13017,n__4510__auto___13015,jobs,results,process,async){
return (function (state_12860){var state_val_12861 = (state_12860[(1)]);if((state_val_12861 === (7)))
{var inst_12856 = (state_12860[(2)]);var state_12860__$1 = state_12860;var statearr_12862_13020 = state_12860__$1;(statearr_12862_13020[(2)] = inst_12856);
(statearr_12862_13020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12861 === (6)))
{var state_12860__$1 = state_12860;var statearr_12863_13021 = state_12860__$1;(statearr_12863_13021[(2)] = null);
(statearr_12863_13021[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12861 === (5)))
{var state_12860__$1 = state_12860;var statearr_12864_13022 = state_12860__$1;(statearr_12864_13022[(2)] = null);
(statearr_12864_13022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12861 === (4)))
{var inst_12850 = (state_12860[(2)]);var inst_12851 = async.call(null,inst_12850);var state_12860__$1 = state_12860;if(cljs.core.truth_(inst_12851))
{var statearr_12865_13023 = state_12860__$1;(statearr_12865_13023[(1)] = (5));
} else
{var statearr_12866_13024 = state_12860__$1;(statearr_12866_13024[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12861 === (3)))
{var inst_12858 = (state_12860[(2)]);var state_12860__$1 = state_12860;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12860__$1,inst_12858);
} else
{if((state_val_12861 === (2)))
{var state_12860__$1 = state_12860;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12860__$1,(4),jobs);
} else
{if((state_val_12861 === (1)))
{var state_12860__$1 = state_12860;var statearr_12867_13025 = state_12860__$1;(statearr_12867_13025[(2)] = null);
(statearr_12867_13025[(1)] = (2));
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
});})(__13016,c__5849__auto___13019,G__12847_13017,n__4510__auto___13015,jobs,results,process,async))
;return ((function (__13016,switch__5834__auto__,c__5849__auto___13019,G__12847_13017,n__4510__auto___13015,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12871 = [null,null,null,null,null,null,null];(statearr_12871[(0)] = state_machine__5835__auto__);
(statearr_12871[(1)] = (1));
return statearr_12871;
});
var state_machine__5835__auto____1 = (function (state_12860){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12860);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12872){if((e12872 instanceof Object))
{var ex__5838__auto__ = e12872;var statearr_12873_13026 = state_12860;(statearr_12873_13026[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12860);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12872;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13027 = state_12860;
state_12860 = G__13027;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12860){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(__13016,switch__5834__auto__,c__5849__auto___13019,G__12847_13017,n__4510__auto___13015,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_12874 = f__5850__auto__.call(null);(statearr_12874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13019);
return statearr_12874;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(__13016,c__5849__auto___13019,G__12847_13017,n__4510__auto___13015,jobs,results,process,async))
);

break;
case "compute":
var c__5849__auto___13028 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13016,c__5849__auto___13028,G__12847_13017,n__4510__auto___13015,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (__13016,c__5849__auto___13028,G__12847_13017,n__4510__auto___13015,jobs,results,process,async){
return (function (state_12887){var state_val_12888 = (state_12887[(1)]);if((state_val_12888 === (7)))
{var inst_12883 = (state_12887[(2)]);var state_12887__$1 = state_12887;var statearr_12889_13029 = state_12887__$1;(statearr_12889_13029[(2)] = inst_12883);
(statearr_12889_13029[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12888 === (6)))
{var state_12887__$1 = state_12887;var statearr_12890_13030 = state_12887__$1;(statearr_12890_13030[(2)] = null);
(statearr_12890_13030[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12888 === (5)))
{var state_12887__$1 = state_12887;var statearr_12891_13031 = state_12887__$1;(statearr_12891_13031[(2)] = null);
(statearr_12891_13031[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12888 === (4)))
{var inst_12877 = (state_12887[(2)]);var inst_12878 = process.call(null,inst_12877);var state_12887__$1 = state_12887;if(cljs.core.truth_(inst_12878))
{var statearr_12892_13032 = state_12887__$1;(statearr_12892_13032[(1)] = (5));
} else
{var statearr_12893_13033 = state_12887__$1;(statearr_12893_13033[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12888 === (3)))
{var inst_12885 = (state_12887[(2)]);var state_12887__$1 = state_12887;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12887__$1,inst_12885);
} else
{if((state_val_12888 === (2)))
{var state_12887__$1 = state_12887;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12887__$1,(4),jobs);
} else
{if((state_val_12888 === (1)))
{var state_12887__$1 = state_12887;var statearr_12894_13034 = state_12887__$1;(statearr_12894_13034[(2)] = null);
(statearr_12894_13034[(1)] = (2));
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
});})(__13016,c__5849__auto___13028,G__12847_13017,n__4510__auto___13015,jobs,results,process,async))
;return ((function (__13016,switch__5834__auto__,c__5849__auto___13028,G__12847_13017,n__4510__auto___13015,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12898 = [null,null,null,null,null,null,null];(statearr_12898[(0)] = state_machine__5835__auto__);
(statearr_12898[(1)] = (1));
return statearr_12898;
});
var state_machine__5835__auto____1 = (function (state_12887){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12887);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12899){if((e12899 instanceof Object))
{var ex__5838__auto__ = e12899;var statearr_12900_13035 = state_12887;(statearr_12900_13035[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12887);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12899;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13036 = state_12887;
state_12887 = G__13036;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12887){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(__13016,switch__5834__auto__,c__5849__auto___13028,G__12847_13017,n__4510__auto___13015,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_12901 = f__5850__auto__.call(null);(statearr_12901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13028);
return statearr_12901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(__13016,c__5849__auto___13028,G__12847_13017,n__4510__auto___13015,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__13037 = (__13016 + (1));
__13016 = G__13037;
continue;
}
} else
{}
break;
}
var c__5849__auto___13038 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13038,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13038,jobs,results,process,async){
return (function (state_12923){var state_val_12924 = (state_12923[(1)]);if((state_val_12924 === (9)))
{var inst_12916 = (state_12923[(2)]);var state_12923__$1 = (function (){var statearr_12925 = state_12923;(statearr_12925[(7)] = inst_12916);
return statearr_12925;
})();var statearr_12926_13039 = state_12923__$1;(statearr_12926_13039[(2)] = null);
(statearr_12926_13039[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12924 === (8)))
{var inst_12909 = (state_12923[(8)]);var inst_12914 = (state_12923[(2)]);var state_12923__$1 = (function (){var statearr_12927 = state_12923;(statearr_12927[(9)] = inst_12914);
return statearr_12927;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12923__$1,(9),results,inst_12909);
} else
{if((state_val_12924 === (7)))
{var inst_12919 = (state_12923[(2)]);var state_12923__$1 = state_12923;var statearr_12928_13040 = state_12923__$1;(statearr_12928_13040[(2)] = inst_12919);
(statearr_12928_13040[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12924 === (6)))
{var inst_12904 = (state_12923[(10)]);var inst_12909 = (state_12923[(8)]);var inst_12909__$1 = cljs.core.async.chan.call(null,(1));var inst_12910 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12911 = [inst_12904,inst_12909__$1];var inst_12912 = (new cljs.core.PersistentVector(null,2,(5),inst_12910,inst_12911,null));var state_12923__$1 = (function (){var statearr_12929 = state_12923;(statearr_12929[(8)] = inst_12909__$1);
return statearr_12929;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12923__$1,(8),jobs,inst_12912);
} else
{if((state_val_12924 === (5)))
{var inst_12907 = cljs.core.async.close_BANG_.call(null,jobs);var state_12923__$1 = state_12923;var statearr_12930_13041 = state_12923__$1;(statearr_12930_13041[(2)] = inst_12907);
(statearr_12930_13041[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12924 === (4)))
{var inst_12904 = (state_12923[(10)]);var inst_12904__$1 = (state_12923[(2)]);var inst_12905 = (inst_12904__$1 == null);var state_12923__$1 = (function (){var statearr_12931 = state_12923;(statearr_12931[(10)] = inst_12904__$1);
return statearr_12931;
})();if(cljs.core.truth_(inst_12905))
{var statearr_12932_13042 = state_12923__$1;(statearr_12932_13042[(1)] = (5));
} else
{var statearr_12933_13043 = state_12923__$1;(statearr_12933_13043[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12924 === (3)))
{var inst_12921 = (state_12923[(2)]);var state_12923__$1 = state_12923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12923__$1,inst_12921);
} else
{if((state_val_12924 === (2)))
{var state_12923__$1 = state_12923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12923__$1,(4),from);
} else
{if((state_val_12924 === (1)))
{var state_12923__$1 = state_12923;var statearr_12934_13044 = state_12923__$1;(statearr_12934_13044[(2)] = null);
(statearr_12934_13044[(1)] = (2));
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
});})(c__5849__auto___13038,jobs,results,process,async))
;return ((function (switch__5834__auto__,c__5849__auto___13038,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12938 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12938[(0)] = state_machine__5835__auto__);
(statearr_12938[(1)] = (1));
return statearr_12938;
});
var state_machine__5835__auto____1 = (function (state_12923){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12939){if((e12939 instanceof Object))
{var ex__5838__auto__ = e12939;var statearr_12940_13045 = state_12923;(statearr_12940_13045[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12939;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13046 = state_12923;
state_12923 = G__13046;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12923){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13038,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_12941 = f__5850__auto__.call(null);(statearr_12941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13038);
return statearr_12941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13038,jobs,results,process,async))
);
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__,jobs,results,process,async){
return (function (state_12979){var state_val_12980 = (state_12979[(1)]);if((state_val_12980 === (7)))
{var inst_12975 = (state_12979[(2)]);var state_12979__$1 = state_12979;var statearr_12981_13047 = state_12979__$1;(statearr_12981_13047[(2)] = inst_12975);
(statearr_12981_13047[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (20)))
{var state_12979__$1 = state_12979;var statearr_12982_13048 = state_12979__$1;(statearr_12982_13048[(2)] = null);
(statearr_12982_13048[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (1)))
{var state_12979__$1 = state_12979;var statearr_12983_13049 = state_12979__$1;(statearr_12983_13049[(2)] = null);
(statearr_12983_13049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (4)))
{var inst_12944 = (state_12979[(7)]);var inst_12944__$1 = (state_12979[(2)]);var inst_12945 = (inst_12944__$1 == null);var state_12979__$1 = (function (){var statearr_12984 = state_12979;(statearr_12984[(7)] = inst_12944__$1);
return statearr_12984;
})();if(cljs.core.truth_(inst_12945))
{var statearr_12985_13050 = state_12979__$1;(statearr_12985_13050[(1)] = (5));
} else
{var statearr_12986_13051 = state_12979__$1;(statearr_12986_13051[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (15)))
{var inst_12957 = (state_12979[(8)]);var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12979__$1,(18),to,inst_12957);
} else
{if((state_val_12980 === (21)))
{var inst_12970 = (state_12979[(2)]);var state_12979__$1 = state_12979;var statearr_12987_13052 = state_12979__$1;(statearr_12987_13052[(2)] = inst_12970);
(statearr_12987_13052[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (13)))
{var inst_12972 = (state_12979[(2)]);var state_12979__$1 = (function (){var statearr_12988 = state_12979;(statearr_12988[(9)] = inst_12972);
return statearr_12988;
})();var statearr_12989_13053 = state_12979__$1;(statearr_12989_13053[(2)] = null);
(statearr_12989_13053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (6)))
{var inst_12944 = (state_12979[(7)]);var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12979__$1,(11),inst_12944);
} else
{if((state_val_12980 === (17)))
{var inst_12965 = (state_12979[(2)]);var state_12979__$1 = state_12979;if(cljs.core.truth_(inst_12965))
{var statearr_12990_13054 = state_12979__$1;(statearr_12990_13054[(1)] = (19));
} else
{var statearr_12991_13055 = state_12979__$1;(statearr_12991_13055[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (3)))
{var inst_12977 = (state_12979[(2)]);var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12979__$1,inst_12977);
} else
{if((state_val_12980 === (12)))
{var inst_12954 = (state_12979[(10)]);var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12979__$1,(14),inst_12954);
} else
{if((state_val_12980 === (2)))
{var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12979__$1,(4),results);
} else
{if((state_val_12980 === (19)))
{var state_12979__$1 = state_12979;var statearr_12992_13056 = state_12979__$1;(statearr_12992_13056[(2)] = null);
(statearr_12992_13056[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (11)))
{var inst_12954 = (state_12979[(2)]);var state_12979__$1 = (function (){var statearr_12993 = state_12979;(statearr_12993[(10)] = inst_12954);
return statearr_12993;
})();var statearr_12994_13057 = state_12979__$1;(statearr_12994_13057[(2)] = null);
(statearr_12994_13057[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (9)))
{var state_12979__$1 = state_12979;var statearr_12995_13058 = state_12979__$1;(statearr_12995_13058[(2)] = null);
(statearr_12995_13058[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (5)))
{var state_12979__$1 = state_12979;if(cljs.core.truth_(close_QMARK_))
{var statearr_12996_13059 = state_12979__$1;(statearr_12996_13059[(1)] = (8));
} else
{var statearr_12997_13060 = state_12979__$1;(statearr_12997_13060[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (14)))
{var inst_12957 = (state_12979[(8)]);var inst_12959 = (state_12979[(11)]);var inst_12957__$1 = (state_12979[(2)]);var inst_12958 = (inst_12957__$1 == null);var inst_12959__$1 = cljs.core.not.call(null,inst_12958);var state_12979__$1 = (function (){var statearr_12998 = state_12979;(statearr_12998[(8)] = inst_12957__$1);
(statearr_12998[(11)] = inst_12959__$1);
return statearr_12998;
})();if(inst_12959__$1)
{var statearr_12999_13061 = state_12979__$1;(statearr_12999_13061[(1)] = (15));
} else
{var statearr_13000_13062 = state_12979__$1;(statearr_13000_13062[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (16)))
{var inst_12959 = (state_12979[(11)]);var state_12979__$1 = state_12979;var statearr_13001_13063 = state_12979__$1;(statearr_13001_13063[(2)] = inst_12959);
(statearr_13001_13063[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (10)))
{var inst_12951 = (state_12979[(2)]);var state_12979__$1 = state_12979;var statearr_13002_13064 = state_12979__$1;(statearr_13002_13064[(2)] = inst_12951);
(statearr_13002_13064[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (18)))
{var inst_12962 = (state_12979[(2)]);var state_12979__$1 = state_12979;var statearr_13003_13065 = state_12979__$1;(statearr_13003_13065[(2)] = inst_12962);
(statearr_13003_13065[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12980 === (8)))
{var inst_12948 = cljs.core.async.close_BANG_.call(null,to);var state_12979__$1 = state_12979;var statearr_13004_13066 = state_12979__$1;(statearr_13004_13066[(2)] = inst_12948);
(statearr_13004_13066[(1)] = (10));
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
var state_machine__5835__auto____0 = (function (){var statearr_13008 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13008[(0)] = state_machine__5835__auto__);
(statearr_13008[(1)] = (1));
return statearr_13008;
});
var state_machine__5835__auto____1 = (function (state_12979){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13009){if((e13009 instanceof Object))
{var ex__5838__auto__ = e13009;var statearr_13010_13067 = state_12979;(statearr_13010_13067[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12979);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13009;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13068 = state_12979;
state_12979 = G__13068;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12979){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_13011 = f__5850__auto__.call(null);(statearr_13011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13011;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5849__auto___13169 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13169,tc,fc){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13169,tc,fc){
return (function (state_13144){var state_val_13145 = (state_13144[(1)]);if((state_val_13145 === (7)))
{var inst_13140 = (state_13144[(2)]);var state_13144__$1 = state_13144;var statearr_13146_13170 = state_13144__$1;(statearr_13146_13170[(2)] = inst_13140);
(statearr_13146_13170[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (1)))
{var state_13144__$1 = state_13144;var statearr_13147_13171 = state_13144__$1;(statearr_13147_13171[(2)] = null);
(statearr_13147_13171[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (4)))
{var inst_13121 = (state_13144[(7)]);var inst_13121__$1 = (state_13144[(2)]);var inst_13122 = (inst_13121__$1 == null);var state_13144__$1 = (function (){var statearr_13148 = state_13144;(statearr_13148[(7)] = inst_13121__$1);
return statearr_13148;
})();if(cljs.core.truth_(inst_13122))
{var statearr_13149_13172 = state_13144__$1;(statearr_13149_13172[(1)] = (5));
} else
{var statearr_13150_13173 = state_13144__$1;(statearr_13150_13173[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (13)))
{var state_13144__$1 = state_13144;var statearr_13151_13174 = state_13144__$1;(statearr_13151_13174[(2)] = null);
(statearr_13151_13174[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (6)))
{var inst_13121 = (state_13144[(7)]);var inst_13127 = p.call(null,inst_13121);var state_13144__$1 = state_13144;if(cljs.core.truth_(inst_13127))
{var statearr_13152_13175 = state_13144__$1;(statearr_13152_13175[(1)] = (9));
} else
{var statearr_13153_13176 = state_13144__$1;(statearr_13153_13176[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (3)))
{var inst_13142 = (state_13144[(2)]);var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13144__$1,inst_13142);
} else
{if((state_val_13145 === (12)))
{var state_13144__$1 = state_13144;var statearr_13154_13177 = state_13144__$1;(statearr_13154_13177[(2)] = null);
(statearr_13154_13177[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (2)))
{var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13144__$1,(4),ch);
} else
{if((state_val_13145 === (11)))
{var inst_13121 = (state_13144[(7)]);var inst_13131 = (state_13144[(2)]);var state_13144__$1 = state_13144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13144__$1,(8),inst_13131,inst_13121);
} else
{if((state_val_13145 === (9)))
{var state_13144__$1 = state_13144;var statearr_13155_13178 = state_13144__$1;(statearr_13155_13178[(2)] = tc);
(statearr_13155_13178[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (5)))
{var inst_13124 = cljs.core.async.close_BANG_.call(null,tc);var inst_13125 = cljs.core.async.close_BANG_.call(null,fc);var state_13144__$1 = (function (){var statearr_13156 = state_13144;(statearr_13156[(8)] = inst_13124);
return statearr_13156;
})();var statearr_13157_13179 = state_13144__$1;(statearr_13157_13179[(2)] = inst_13125);
(statearr_13157_13179[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (14)))
{var inst_13138 = (state_13144[(2)]);var state_13144__$1 = state_13144;var statearr_13158_13180 = state_13144__$1;(statearr_13158_13180[(2)] = inst_13138);
(statearr_13158_13180[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (10)))
{var state_13144__$1 = state_13144;var statearr_13159_13181 = state_13144__$1;(statearr_13159_13181[(2)] = fc);
(statearr_13159_13181[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13145 === (8)))
{var inst_13133 = (state_13144[(2)]);var state_13144__$1 = state_13144;if(cljs.core.truth_(inst_13133))
{var statearr_13160_13182 = state_13144__$1;(statearr_13160_13182[(1)] = (12));
} else
{var statearr_13161_13183 = state_13144__$1;(statearr_13161_13183[(1)] = (13));
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
});})(c__5849__auto___13169,tc,fc))
;return ((function (switch__5834__auto__,c__5849__auto___13169,tc,fc){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13165 = [null,null,null,null,null,null,null,null,null];(statearr_13165[(0)] = state_machine__5835__auto__);
(statearr_13165[(1)] = (1));
return statearr_13165;
});
var state_machine__5835__auto____1 = (function (state_13144){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13166){if((e13166 instanceof Object))
{var ex__5838__auto__ = e13166;var statearr_13167_13184 = state_13144;(statearr_13167_13184[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13166;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13185 = state_13144;
state_13144 = G__13185;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13144){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13169,tc,fc))
})();var state__5851__auto__ = (function (){var statearr_13168 = f__5850__auto__.call(null);(statearr_13168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13169);
return statearr_13168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13169,tc,fc))
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
return (function (state_13232){var state_val_13233 = (state_13232[(1)]);if((state_val_13233 === (7)))
{var inst_13228 = (state_13232[(2)]);var state_13232__$1 = state_13232;var statearr_13234_13250 = state_13232__$1;(statearr_13234_13250[(2)] = inst_13228);
(statearr_13234_13250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (6)))
{var inst_13221 = (state_13232[(7)]);var inst_13218 = (state_13232[(8)]);var inst_13225 = f.call(null,inst_13218,inst_13221);var inst_13218__$1 = inst_13225;var state_13232__$1 = (function (){var statearr_13235 = state_13232;(statearr_13235[(8)] = inst_13218__$1);
return statearr_13235;
})();var statearr_13236_13251 = state_13232__$1;(statearr_13236_13251[(2)] = null);
(statearr_13236_13251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (5)))
{var inst_13218 = (state_13232[(8)]);var state_13232__$1 = state_13232;var statearr_13237_13252 = state_13232__$1;(statearr_13237_13252[(2)] = inst_13218);
(statearr_13237_13252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (4)))
{var inst_13221 = (state_13232[(7)]);var inst_13221__$1 = (state_13232[(2)]);var inst_13222 = (inst_13221__$1 == null);var state_13232__$1 = (function (){var statearr_13238 = state_13232;(statearr_13238[(7)] = inst_13221__$1);
return statearr_13238;
})();if(cljs.core.truth_(inst_13222))
{var statearr_13239_13253 = state_13232__$1;(statearr_13239_13253[(1)] = (5));
} else
{var statearr_13240_13254 = state_13232__$1;(statearr_13240_13254[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13233 === (3)))
{var inst_13230 = (state_13232[(2)]);var state_13232__$1 = state_13232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13232__$1,inst_13230);
} else
{if((state_val_13233 === (2)))
{var state_13232__$1 = state_13232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13232__$1,(4),ch);
} else
{if((state_val_13233 === (1)))
{var inst_13218 = init;var state_13232__$1 = (function (){var statearr_13241 = state_13232;(statearr_13241[(8)] = inst_13218);
return statearr_13241;
})();var statearr_13242_13255 = state_13232__$1;(statearr_13242_13255[(2)] = null);
(statearr_13242_13255[(1)] = (2));
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
var state_machine__5835__auto____0 = (function (){var statearr_13246 = [null,null,null,null,null,null,null,null,null];(statearr_13246[(0)] = state_machine__5835__auto__);
(statearr_13246[(1)] = (1));
return statearr_13246;
});
var state_machine__5835__auto____1 = (function (state_13232){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13247){if((e13247 instanceof Object))
{var ex__5838__auto__ = e13247;var statearr_13248_13256 = state_13232;(statearr_13248_13256[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13232);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13247;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13257 = state_13232;
state_13232 = G__13257;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13232){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_13249 = f__5850__auto__.call(null);(statearr_13249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13249;
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
return (function (state_13331){var state_val_13332 = (state_13331[(1)]);if((state_val_13332 === (7)))
{var inst_13313 = (state_13331[(2)]);var state_13331__$1 = state_13331;var statearr_13333_13356 = state_13331__$1;(statearr_13333_13356[(2)] = inst_13313);
(statearr_13333_13356[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (1)))
{var inst_13307 = cljs.core.seq.call(null,coll);var inst_13308 = inst_13307;var state_13331__$1 = (function (){var statearr_13334 = state_13331;(statearr_13334[(7)] = inst_13308);
return statearr_13334;
})();var statearr_13335_13357 = state_13331__$1;(statearr_13335_13357[(2)] = null);
(statearr_13335_13357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (4)))
{var inst_13308 = (state_13331[(7)]);var inst_13311 = cljs.core.first.call(null,inst_13308);var state_13331__$1 = state_13331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13331__$1,(7),ch,inst_13311);
} else
{if((state_val_13332 === (13)))
{var inst_13325 = (state_13331[(2)]);var state_13331__$1 = state_13331;var statearr_13336_13358 = state_13331__$1;(statearr_13336_13358[(2)] = inst_13325);
(statearr_13336_13358[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (6)))
{var inst_13316 = (state_13331[(2)]);var state_13331__$1 = state_13331;if(cljs.core.truth_(inst_13316))
{var statearr_13337_13359 = state_13331__$1;(statearr_13337_13359[(1)] = (8));
} else
{var statearr_13338_13360 = state_13331__$1;(statearr_13338_13360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (3)))
{var inst_13329 = (state_13331[(2)]);var state_13331__$1 = state_13331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13331__$1,inst_13329);
} else
{if((state_val_13332 === (12)))
{var state_13331__$1 = state_13331;var statearr_13339_13361 = state_13331__$1;(statearr_13339_13361[(2)] = null);
(statearr_13339_13361[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (2)))
{var inst_13308 = (state_13331[(7)]);var state_13331__$1 = state_13331;if(cljs.core.truth_(inst_13308))
{var statearr_13340_13362 = state_13331__$1;(statearr_13340_13362[(1)] = (4));
} else
{var statearr_13341_13363 = state_13331__$1;(statearr_13341_13363[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (11)))
{var inst_13322 = cljs.core.async.close_BANG_.call(null,ch);var state_13331__$1 = state_13331;var statearr_13342_13364 = state_13331__$1;(statearr_13342_13364[(2)] = inst_13322);
(statearr_13342_13364[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (9)))
{var state_13331__$1 = state_13331;if(cljs.core.truth_(close_QMARK_))
{var statearr_13343_13365 = state_13331__$1;(statearr_13343_13365[(1)] = (11));
} else
{var statearr_13344_13366 = state_13331__$1;(statearr_13344_13366[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (5)))
{var inst_13308 = (state_13331[(7)]);var state_13331__$1 = state_13331;var statearr_13345_13367 = state_13331__$1;(statearr_13345_13367[(2)] = inst_13308);
(statearr_13345_13367[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (10)))
{var inst_13327 = (state_13331[(2)]);var state_13331__$1 = state_13331;var statearr_13346_13368 = state_13331__$1;(statearr_13346_13368[(2)] = inst_13327);
(statearr_13346_13368[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13332 === (8)))
{var inst_13308 = (state_13331[(7)]);var inst_13318 = cljs.core.next.call(null,inst_13308);var inst_13308__$1 = inst_13318;var state_13331__$1 = (function (){var statearr_13347 = state_13331;(statearr_13347[(7)] = inst_13308__$1);
return statearr_13347;
})();var statearr_13348_13369 = state_13331__$1;(statearr_13348_13369[(2)] = null);
(statearr_13348_13369[(1)] = (2));
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
var state_machine__5835__auto____0 = (function (){var statearr_13352 = [null,null,null,null,null,null,null,null];(statearr_13352[(0)] = state_machine__5835__auto__);
(statearr_13352[(1)] = (1));
return statearr_13352;
});
var state_machine__5835__auto____1 = (function (state_13331){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13331);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13353){if((e13353 instanceof Object))
{var ex__5838__auto__ = e13353;var statearr_13354_13370 = state_13331;(statearr_13354_13370[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13331);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13353;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13371 = state_13331;
state_13331 = G__13371;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13331){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_13355 = f__5850__auto__.call(null);(statearr_13355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13355;
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
cljs.core.async.Mux = (function (){var obj13373 = {};return obj13373;
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
cljs.core.async.Mult = (function (){var obj13375 = {};return obj13375;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13597 = (function (cs,ch,mult,meta13598){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13598 = meta13598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13597.cljs$lang$type = true;
cljs.core.async.t13597.cljs$lang$ctorStr = "cljs.core.async/t13597";
cljs.core.async.t13597.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13597");
});})(cs))
;
cljs.core.async.t13597.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13597.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13597.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13597.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13597.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13599){var self__ = this;
var _13599__$1 = this;return self__.meta13598;
});})(cs))
;
cljs.core.async.t13597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13599,meta13598__$1){var self__ = this;
var _13599__$1 = this;return (new cljs.core.async.t13597(self__.cs,self__.ch,self__.mult,meta13598__$1));
});})(cs))
;
cljs.core.async.__GT_t13597 = ((function (cs){
return (function __GT_t13597(cs__$1,ch__$1,mult__$1,meta13598){return (new cljs.core.async.t13597(cs__$1,ch__$1,mult__$1,meta13598));
});})(cs))
;
}
return (new cljs.core.async.t13597(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5849__auto___13818 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13818,cs,m,dchan,dctr,done){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13818,cs,m,dchan,dctr,done){
return (function (state_13730){var state_val_13731 = (state_13730[(1)]);if((state_val_13731 === (7)))
{var inst_13726 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13732_13819 = state_13730__$1;(statearr_13732_13819[(2)] = inst_13726);
(statearr_13732_13819[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (20)))
{var inst_13631 = (state_13730[(7)]);var inst_13641 = cljs.core.first.call(null,inst_13631);var inst_13642 = cljs.core.nth.call(null,inst_13641,(0),null);var inst_13643 = cljs.core.nth.call(null,inst_13641,(1),null);var state_13730__$1 = (function (){var statearr_13733 = state_13730;(statearr_13733[(8)] = inst_13642);
return statearr_13733;
})();if(cljs.core.truth_(inst_13643))
{var statearr_13734_13820 = state_13730__$1;(statearr_13734_13820[(1)] = (22));
} else
{var statearr_13735_13821 = state_13730__$1;(statearr_13735_13821[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (27)))
{var inst_13671 = (state_13730[(9)]);var inst_13602 = (state_13730[(10)]);var inst_13678 = (state_13730[(11)]);var inst_13673 = (state_13730[(12)]);var inst_13678__$1 = cljs.core._nth.call(null,inst_13671,inst_13673);var inst_13679 = cljs.core.async.put_BANG_.call(null,inst_13678__$1,inst_13602,done);var state_13730__$1 = (function (){var statearr_13736 = state_13730;(statearr_13736[(11)] = inst_13678__$1);
return statearr_13736;
})();if(cljs.core.truth_(inst_13679))
{var statearr_13737_13822 = state_13730__$1;(statearr_13737_13822[(1)] = (30));
} else
{var statearr_13738_13823 = state_13730__$1;(statearr_13738_13823[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (1)))
{var state_13730__$1 = state_13730;var statearr_13739_13824 = state_13730__$1;(statearr_13739_13824[(2)] = null);
(statearr_13739_13824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (24)))
{var inst_13631 = (state_13730[(7)]);var inst_13648 = (state_13730[(2)]);var inst_13649 = cljs.core.next.call(null,inst_13631);var inst_13611 = inst_13649;var inst_13612 = null;var inst_13613 = (0);var inst_13614 = (0);var state_13730__$1 = (function (){var statearr_13740 = state_13730;(statearr_13740[(13)] = inst_13648);
(statearr_13740[(14)] = inst_13614);
(statearr_13740[(15)] = inst_13611);
(statearr_13740[(16)] = inst_13612);
(statearr_13740[(17)] = inst_13613);
return statearr_13740;
})();var statearr_13741_13825 = state_13730__$1;(statearr_13741_13825[(2)] = null);
(statearr_13741_13825[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (39)))
{var state_13730__$1 = state_13730;var statearr_13745_13826 = state_13730__$1;(statearr_13745_13826[(2)] = null);
(statearr_13745_13826[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (4)))
{var inst_13602 = (state_13730[(10)]);var inst_13602__$1 = (state_13730[(2)]);var inst_13603 = (inst_13602__$1 == null);var state_13730__$1 = (function (){var statearr_13746 = state_13730;(statearr_13746[(10)] = inst_13602__$1);
return statearr_13746;
})();if(cljs.core.truth_(inst_13603))
{var statearr_13747_13827 = state_13730__$1;(statearr_13747_13827[(1)] = (5));
} else
{var statearr_13748_13828 = state_13730__$1;(statearr_13748_13828[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (15)))
{var inst_13614 = (state_13730[(14)]);var inst_13611 = (state_13730[(15)]);var inst_13612 = (state_13730[(16)]);var inst_13613 = (state_13730[(17)]);var inst_13627 = (state_13730[(2)]);var inst_13628 = (inst_13614 + (1));var tmp13742 = inst_13611;var tmp13743 = inst_13612;var tmp13744 = inst_13613;var inst_13611__$1 = tmp13742;var inst_13612__$1 = tmp13743;var inst_13613__$1 = tmp13744;var inst_13614__$1 = inst_13628;var state_13730__$1 = (function (){var statearr_13749 = state_13730;(statearr_13749[(14)] = inst_13614__$1);
(statearr_13749[(15)] = inst_13611__$1);
(statearr_13749[(18)] = inst_13627);
(statearr_13749[(16)] = inst_13612__$1);
(statearr_13749[(17)] = inst_13613__$1);
return statearr_13749;
})();var statearr_13750_13829 = state_13730__$1;(statearr_13750_13829[(2)] = null);
(statearr_13750_13829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (21)))
{var inst_13652 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13754_13830 = state_13730__$1;(statearr_13754_13830[(2)] = inst_13652);
(statearr_13754_13830[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (31)))
{var inst_13678 = (state_13730[(11)]);var inst_13682 = done.call(null,null);var inst_13683 = cljs.core.async.untap_STAR_.call(null,m,inst_13678);var state_13730__$1 = (function (){var statearr_13755 = state_13730;(statearr_13755[(19)] = inst_13682);
return statearr_13755;
})();var statearr_13756_13831 = state_13730__$1;(statearr_13756_13831[(2)] = inst_13683);
(statearr_13756_13831[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (32)))
{var inst_13671 = (state_13730[(9)]);var inst_13672 = (state_13730[(20)]);var inst_13670 = (state_13730[(21)]);var inst_13673 = (state_13730[(12)]);var inst_13685 = (state_13730[(2)]);var inst_13686 = (inst_13673 + (1));var tmp13751 = inst_13671;var tmp13752 = inst_13672;var tmp13753 = inst_13670;var inst_13670__$1 = tmp13753;var inst_13671__$1 = tmp13751;var inst_13672__$1 = tmp13752;var inst_13673__$1 = inst_13686;var state_13730__$1 = (function (){var statearr_13757 = state_13730;(statearr_13757[(9)] = inst_13671__$1);
(statearr_13757[(20)] = inst_13672__$1);
(statearr_13757[(21)] = inst_13670__$1);
(statearr_13757[(22)] = inst_13685);
(statearr_13757[(12)] = inst_13673__$1);
return statearr_13757;
})();var statearr_13758_13832 = state_13730__$1;(statearr_13758_13832[(2)] = null);
(statearr_13758_13832[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (40)))
{var inst_13698 = (state_13730[(23)]);var inst_13702 = done.call(null,null);var inst_13703 = cljs.core.async.untap_STAR_.call(null,m,inst_13698);var state_13730__$1 = (function (){var statearr_13759 = state_13730;(statearr_13759[(24)] = inst_13702);
return statearr_13759;
})();var statearr_13760_13833 = state_13730__$1;(statearr_13760_13833[(2)] = inst_13703);
(statearr_13760_13833[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (33)))
{var inst_13689 = (state_13730[(25)]);var inst_13691 = cljs.core.chunked_seq_QMARK_.call(null,inst_13689);var state_13730__$1 = state_13730;if(inst_13691)
{var statearr_13761_13834 = state_13730__$1;(statearr_13761_13834[(1)] = (36));
} else
{var statearr_13762_13835 = state_13730__$1;(statearr_13762_13835[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (13)))
{var inst_13621 = (state_13730[(26)]);var inst_13624 = cljs.core.async.close_BANG_.call(null,inst_13621);var state_13730__$1 = state_13730;var statearr_13763_13836 = state_13730__$1;(statearr_13763_13836[(2)] = inst_13624);
(statearr_13763_13836[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (22)))
{var inst_13642 = (state_13730[(8)]);var inst_13645 = cljs.core.async.close_BANG_.call(null,inst_13642);var state_13730__$1 = state_13730;var statearr_13764_13837 = state_13730__$1;(statearr_13764_13837[(2)] = inst_13645);
(statearr_13764_13837[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (36)))
{var inst_13689 = (state_13730[(25)]);var inst_13693 = cljs.core.chunk_first.call(null,inst_13689);var inst_13694 = cljs.core.chunk_rest.call(null,inst_13689);var inst_13695 = cljs.core.count.call(null,inst_13693);var inst_13670 = inst_13694;var inst_13671 = inst_13693;var inst_13672 = inst_13695;var inst_13673 = (0);var state_13730__$1 = (function (){var statearr_13765 = state_13730;(statearr_13765[(9)] = inst_13671);
(statearr_13765[(20)] = inst_13672);
(statearr_13765[(21)] = inst_13670);
(statearr_13765[(12)] = inst_13673);
return statearr_13765;
})();var statearr_13766_13838 = state_13730__$1;(statearr_13766_13838[(2)] = null);
(statearr_13766_13838[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (41)))
{var inst_13689 = (state_13730[(25)]);var inst_13705 = (state_13730[(2)]);var inst_13706 = cljs.core.next.call(null,inst_13689);var inst_13670 = inst_13706;var inst_13671 = null;var inst_13672 = (0);var inst_13673 = (0);var state_13730__$1 = (function (){var statearr_13767 = state_13730;(statearr_13767[(9)] = inst_13671);
(statearr_13767[(20)] = inst_13672);
(statearr_13767[(27)] = inst_13705);
(statearr_13767[(21)] = inst_13670);
(statearr_13767[(12)] = inst_13673);
return statearr_13767;
})();var statearr_13768_13839 = state_13730__$1;(statearr_13768_13839[(2)] = null);
(statearr_13768_13839[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (43)))
{var state_13730__$1 = state_13730;var statearr_13769_13840 = state_13730__$1;(statearr_13769_13840[(2)] = null);
(statearr_13769_13840[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (29)))
{var inst_13714 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13770_13841 = state_13730__$1;(statearr_13770_13841[(2)] = inst_13714);
(statearr_13770_13841[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (44)))
{var inst_13723 = (state_13730[(2)]);var state_13730__$1 = (function (){var statearr_13771 = state_13730;(statearr_13771[(28)] = inst_13723);
return statearr_13771;
})();var statearr_13772_13842 = state_13730__$1;(statearr_13772_13842[(2)] = null);
(statearr_13772_13842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (6)))
{var inst_13662 = (state_13730[(29)]);var inst_13661 = cljs.core.deref.call(null,cs);var inst_13662__$1 = cljs.core.keys.call(null,inst_13661);var inst_13663 = cljs.core.count.call(null,inst_13662__$1);var inst_13664 = cljs.core.reset_BANG_.call(null,dctr,inst_13663);var inst_13669 = cljs.core.seq.call(null,inst_13662__$1);var inst_13670 = inst_13669;var inst_13671 = null;var inst_13672 = (0);var inst_13673 = (0);var state_13730__$1 = (function (){var statearr_13773 = state_13730;(statearr_13773[(9)] = inst_13671);
(statearr_13773[(29)] = inst_13662__$1);
(statearr_13773[(20)] = inst_13672);
(statearr_13773[(30)] = inst_13664);
(statearr_13773[(21)] = inst_13670);
(statearr_13773[(12)] = inst_13673);
return statearr_13773;
})();var statearr_13774_13843 = state_13730__$1;(statearr_13774_13843[(2)] = null);
(statearr_13774_13843[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (28)))
{var inst_13689 = (state_13730[(25)]);var inst_13670 = (state_13730[(21)]);var inst_13689__$1 = cljs.core.seq.call(null,inst_13670);var state_13730__$1 = (function (){var statearr_13775 = state_13730;(statearr_13775[(25)] = inst_13689__$1);
return statearr_13775;
})();if(inst_13689__$1)
{var statearr_13776_13844 = state_13730__$1;(statearr_13776_13844[(1)] = (33));
} else
{var statearr_13777_13845 = state_13730__$1;(statearr_13777_13845[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (25)))
{var inst_13672 = (state_13730[(20)]);var inst_13673 = (state_13730[(12)]);var inst_13675 = (inst_13673 < inst_13672);var inst_13676 = inst_13675;var state_13730__$1 = state_13730;if(cljs.core.truth_(inst_13676))
{var statearr_13778_13846 = state_13730__$1;(statearr_13778_13846[(1)] = (27));
} else
{var statearr_13779_13847 = state_13730__$1;(statearr_13779_13847[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (34)))
{var state_13730__$1 = state_13730;var statearr_13780_13848 = state_13730__$1;(statearr_13780_13848[(2)] = null);
(statearr_13780_13848[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (17)))
{var state_13730__$1 = state_13730;var statearr_13781_13849 = state_13730__$1;(statearr_13781_13849[(2)] = null);
(statearr_13781_13849[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (3)))
{var inst_13728 = (state_13730[(2)]);var state_13730__$1 = state_13730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13730__$1,inst_13728);
} else
{if((state_val_13731 === (12)))
{var inst_13657 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13782_13850 = state_13730__$1;(statearr_13782_13850[(2)] = inst_13657);
(statearr_13782_13850[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (2)))
{var state_13730__$1 = state_13730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13730__$1,(4),ch);
} else
{if((state_val_13731 === (23)))
{var state_13730__$1 = state_13730;var statearr_13783_13851 = state_13730__$1;(statearr_13783_13851[(2)] = null);
(statearr_13783_13851[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (35)))
{var inst_13712 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13784_13852 = state_13730__$1;(statearr_13784_13852[(2)] = inst_13712);
(statearr_13784_13852[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (19)))
{var inst_13631 = (state_13730[(7)]);var inst_13635 = cljs.core.chunk_first.call(null,inst_13631);var inst_13636 = cljs.core.chunk_rest.call(null,inst_13631);var inst_13637 = cljs.core.count.call(null,inst_13635);var inst_13611 = inst_13636;var inst_13612 = inst_13635;var inst_13613 = inst_13637;var inst_13614 = (0);var state_13730__$1 = (function (){var statearr_13785 = state_13730;(statearr_13785[(14)] = inst_13614);
(statearr_13785[(15)] = inst_13611);
(statearr_13785[(16)] = inst_13612);
(statearr_13785[(17)] = inst_13613);
return statearr_13785;
})();var statearr_13786_13853 = state_13730__$1;(statearr_13786_13853[(2)] = null);
(statearr_13786_13853[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (11)))
{var inst_13611 = (state_13730[(15)]);var inst_13631 = (state_13730[(7)]);var inst_13631__$1 = cljs.core.seq.call(null,inst_13611);var state_13730__$1 = (function (){var statearr_13787 = state_13730;(statearr_13787[(7)] = inst_13631__$1);
return statearr_13787;
})();if(inst_13631__$1)
{var statearr_13788_13854 = state_13730__$1;(statearr_13788_13854[(1)] = (16));
} else
{var statearr_13789_13855 = state_13730__$1;(statearr_13789_13855[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (9)))
{var inst_13659 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13790_13856 = state_13730__$1;(statearr_13790_13856[(2)] = inst_13659);
(statearr_13790_13856[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (5)))
{var inst_13609 = cljs.core.deref.call(null,cs);var inst_13610 = cljs.core.seq.call(null,inst_13609);var inst_13611 = inst_13610;var inst_13612 = null;var inst_13613 = (0);var inst_13614 = (0);var state_13730__$1 = (function (){var statearr_13791 = state_13730;(statearr_13791[(14)] = inst_13614);
(statearr_13791[(15)] = inst_13611);
(statearr_13791[(16)] = inst_13612);
(statearr_13791[(17)] = inst_13613);
return statearr_13791;
})();var statearr_13792_13857 = state_13730__$1;(statearr_13792_13857[(2)] = null);
(statearr_13792_13857[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (14)))
{var state_13730__$1 = state_13730;var statearr_13793_13858 = state_13730__$1;(statearr_13793_13858[(2)] = null);
(statearr_13793_13858[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (45)))
{var inst_13720 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13794_13859 = state_13730__$1;(statearr_13794_13859[(2)] = inst_13720);
(statearr_13794_13859[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (26)))
{var inst_13662 = (state_13730[(29)]);var inst_13716 = (state_13730[(2)]);var inst_13717 = cljs.core.seq.call(null,inst_13662);var state_13730__$1 = (function (){var statearr_13795 = state_13730;(statearr_13795[(31)] = inst_13716);
return statearr_13795;
})();if(inst_13717)
{var statearr_13796_13860 = state_13730__$1;(statearr_13796_13860[(1)] = (42));
} else
{var statearr_13797_13861 = state_13730__$1;(statearr_13797_13861[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (16)))
{var inst_13631 = (state_13730[(7)]);var inst_13633 = cljs.core.chunked_seq_QMARK_.call(null,inst_13631);var state_13730__$1 = state_13730;if(inst_13633)
{var statearr_13798_13862 = state_13730__$1;(statearr_13798_13862[(1)] = (19));
} else
{var statearr_13799_13863 = state_13730__$1;(statearr_13799_13863[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (38)))
{var inst_13709 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13800_13864 = state_13730__$1;(statearr_13800_13864[(2)] = inst_13709);
(statearr_13800_13864[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (30)))
{var state_13730__$1 = state_13730;var statearr_13801_13865 = state_13730__$1;(statearr_13801_13865[(2)] = null);
(statearr_13801_13865[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (10)))
{var inst_13614 = (state_13730[(14)]);var inst_13612 = (state_13730[(16)]);var inst_13620 = cljs.core._nth.call(null,inst_13612,inst_13614);var inst_13621 = cljs.core.nth.call(null,inst_13620,(0),null);var inst_13622 = cljs.core.nth.call(null,inst_13620,(1),null);var state_13730__$1 = (function (){var statearr_13802 = state_13730;(statearr_13802[(26)] = inst_13621);
return statearr_13802;
})();if(cljs.core.truth_(inst_13622))
{var statearr_13803_13866 = state_13730__$1;(statearr_13803_13866[(1)] = (13));
} else
{var statearr_13804_13867 = state_13730__$1;(statearr_13804_13867[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (18)))
{var inst_13655 = (state_13730[(2)]);var state_13730__$1 = state_13730;var statearr_13805_13868 = state_13730__$1;(statearr_13805_13868[(2)] = inst_13655);
(statearr_13805_13868[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (42)))
{var state_13730__$1 = state_13730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13730__$1,(45),dchan);
} else
{if((state_val_13731 === (37)))
{var inst_13698 = (state_13730[(23)]);var inst_13602 = (state_13730[(10)]);var inst_13689 = (state_13730[(25)]);var inst_13698__$1 = cljs.core.first.call(null,inst_13689);var inst_13699 = cljs.core.async.put_BANG_.call(null,inst_13698__$1,inst_13602,done);var state_13730__$1 = (function (){var statearr_13806 = state_13730;(statearr_13806[(23)] = inst_13698__$1);
return statearr_13806;
})();if(cljs.core.truth_(inst_13699))
{var statearr_13807_13869 = state_13730__$1;(statearr_13807_13869[(1)] = (39));
} else
{var statearr_13808_13870 = state_13730__$1;(statearr_13808_13870[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13731 === (8)))
{var inst_13614 = (state_13730[(14)]);var inst_13613 = (state_13730[(17)]);var inst_13616 = (inst_13614 < inst_13613);var inst_13617 = inst_13616;var state_13730__$1 = state_13730;if(cljs.core.truth_(inst_13617))
{var statearr_13809_13871 = state_13730__$1;(statearr_13809_13871[(1)] = (10));
} else
{var statearr_13810_13872 = state_13730__$1;(statearr_13810_13872[(1)] = (11));
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
});})(c__5849__auto___13818,cs,m,dchan,dctr,done))
;return ((function (switch__5834__auto__,c__5849__auto___13818,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13814[(0)] = state_machine__5835__auto__);
(statearr_13814[(1)] = (1));
return statearr_13814;
});
var state_machine__5835__auto____1 = (function (state_13730){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13815){if((e13815 instanceof Object))
{var ex__5838__auto__ = e13815;var statearr_13816_13873 = state_13730;(statearr_13816_13873[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13815;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13874 = state_13730;
state_13730 = G__13874;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13730){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13818,cs,m,dchan,dctr,done))
})();var state__5851__auto__ = (function (){var statearr_13817 = f__5850__auto__.call(null);(statearr_13817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13818);
return statearr_13817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13818,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13876 = {};return obj13876;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13877){var map__13882 = p__13877;var map__13882__$1 = ((cljs.core.seq_QMARK_.call(null,map__13882))?cljs.core.apply.call(null,cljs.core.hash_map,map__13882):map__13882);var opts = map__13882__$1;var statearr_13883_13886 = state;(statearr_13883_13886[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13882,map__13882__$1,opts){
return (function (val){var statearr_13884_13887 = state;(statearr_13884_13887[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13882,map__13882__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13885_13888 = state;(statearr_13885_13888[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13877 = null;if (arguments.length > 3) {
  p__13877 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13877);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13889){
var state = cljs.core.first(arglist__13889);
arglist__13889 = cljs.core.next(arglist__13889);
var cont_block = cljs.core.first(arglist__13889);
arglist__13889 = cljs.core.next(arglist__13889);
var ports = cljs.core.first(arglist__13889);
var p__13877 = cljs.core.rest(arglist__13889);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13877);
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
;var m = (function (){if(typeof cljs.core.async.t14009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14009 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14010){
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
this.meta14010 = meta14010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14009.cljs$lang$type = true;
cljs.core.async.t14009.cljs$lang$ctorStr = "cljs.core.async/t14009";
cljs.core.async.t14009.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14009");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14009.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14011){var self__ = this;
var _14011__$1 = this;return self__.meta14010;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14011,meta14010__$1){var self__ = this;
var _14011__$1 = this;return (new cljs.core.async.t14009(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14010__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14009 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14009(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14010){return (new cljs.core.async.t14009(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14010));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14009(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5849__auto___14128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14081){var state_val_14082 = (state_14081[(1)]);if((state_val_14082 === (7)))
{var inst_14025 = (state_14081[(7)]);var inst_14030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14025);var state_14081__$1 = state_14081;var statearr_14083_14129 = state_14081__$1;(statearr_14083_14129[(2)] = inst_14030);
(statearr_14083_14129[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (20)))
{var inst_14040 = (state_14081[(8)]);var state_14081__$1 = state_14081;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14081__$1,(23),out,inst_14040);
} else
{if((state_val_14082 === (1)))
{var inst_14015 = (state_14081[(9)]);var inst_14015__$1 = calc_state.call(null);var inst_14016 = cljs.core.seq_QMARK_.call(null,inst_14015__$1);var state_14081__$1 = (function (){var statearr_14084 = state_14081;(statearr_14084[(9)] = inst_14015__$1);
return statearr_14084;
})();if(inst_14016)
{var statearr_14085_14130 = state_14081__$1;(statearr_14085_14130[(1)] = (2));
} else
{var statearr_14086_14131 = state_14081__$1;(statearr_14086_14131[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (24)))
{var inst_14033 = (state_14081[(10)]);var inst_14025 = inst_14033;var state_14081__$1 = (function (){var statearr_14087 = state_14081;(statearr_14087[(7)] = inst_14025);
return statearr_14087;
})();var statearr_14088_14132 = state_14081__$1;(statearr_14088_14132[(2)] = null);
(statearr_14088_14132[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (4)))
{var inst_14015 = (state_14081[(9)]);var inst_14021 = (state_14081[(2)]);var inst_14022 = cljs.core.get.call(null,inst_14021,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14023 = cljs.core.get.call(null,inst_14021,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14024 = cljs.core.get.call(null,inst_14021,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14025 = inst_14015;var state_14081__$1 = (function (){var statearr_14089 = state_14081;(statearr_14089[(11)] = inst_14022);
(statearr_14089[(12)] = inst_14023);
(statearr_14089[(13)] = inst_14024);
(statearr_14089[(7)] = inst_14025);
return statearr_14089;
})();var statearr_14090_14133 = state_14081__$1;(statearr_14090_14133[(2)] = null);
(statearr_14090_14133[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (15)))
{var state_14081__$1 = state_14081;var statearr_14091_14134 = state_14081__$1;(statearr_14091_14134[(2)] = null);
(statearr_14091_14134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (21)))
{var inst_14033 = (state_14081[(10)]);var inst_14025 = inst_14033;var state_14081__$1 = (function (){var statearr_14092 = state_14081;(statearr_14092[(7)] = inst_14025);
return statearr_14092;
})();var statearr_14093_14135 = state_14081__$1;(statearr_14093_14135[(2)] = null);
(statearr_14093_14135[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (13)))
{var inst_14077 = (state_14081[(2)]);var state_14081__$1 = state_14081;var statearr_14094_14136 = state_14081__$1;(statearr_14094_14136[(2)] = inst_14077);
(statearr_14094_14136[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (22)))
{var inst_14075 = (state_14081[(2)]);var state_14081__$1 = state_14081;var statearr_14095_14137 = state_14081__$1;(statearr_14095_14137[(2)] = inst_14075);
(statearr_14095_14137[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (6)))
{var inst_14079 = (state_14081[(2)]);var state_14081__$1 = state_14081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14081__$1,inst_14079);
} else
{if((state_val_14082 === (25)))
{var state_14081__$1 = state_14081;var statearr_14096_14138 = state_14081__$1;(statearr_14096_14138[(2)] = null);
(statearr_14096_14138[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (17)))
{var inst_14055 = (state_14081[(14)]);var state_14081__$1 = state_14081;var statearr_14097_14139 = state_14081__$1;(statearr_14097_14139[(2)] = inst_14055);
(statearr_14097_14139[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (3)))
{var inst_14015 = (state_14081[(9)]);var state_14081__$1 = state_14081;var statearr_14098_14140 = state_14081__$1;(statearr_14098_14140[(2)] = inst_14015);
(statearr_14098_14140[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (12)))
{var inst_14041 = (state_14081[(15)]);var inst_14036 = (state_14081[(16)]);var inst_14055 = (state_14081[(14)]);var inst_14055__$1 = inst_14036.call(null,inst_14041);var state_14081__$1 = (function (){var statearr_14099 = state_14081;(statearr_14099[(14)] = inst_14055__$1);
return statearr_14099;
})();if(cljs.core.truth_(inst_14055__$1))
{var statearr_14100_14141 = state_14081__$1;(statearr_14100_14141[(1)] = (17));
} else
{var statearr_14101_14142 = state_14081__$1;(statearr_14101_14142[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (2)))
{var inst_14015 = (state_14081[(9)]);var inst_14018 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14015);var state_14081__$1 = state_14081;var statearr_14102_14143 = state_14081__$1;(statearr_14102_14143[(2)] = inst_14018);
(statearr_14102_14143[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (23)))
{var inst_14066 = (state_14081[(2)]);var state_14081__$1 = state_14081;if(cljs.core.truth_(inst_14066))
{var statearr_14103_14144 = state_14081__$1;(statearr_14103_14144[(1)] = (24));
} else
{var statearr_14104_14145 = state_14081__$1;(statearr_14104_14145[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (19)))
{var inst_14063 = (state_14081[(2)]);var state_14081__$1 = state_14081;if(cljs.core.truth_(inst_14063))
{var statearr_14105_14146 = state_14081__$1;(statearr_14105_14146[(1)] = (20));
} else
{var statearr_14106_14147 = state_14081__$1;(statearr_14106_14147[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (11)))
{var inst_14040 = (state_14081[(8)]);var inst_14046 = (inst_14040 == null);var state_14081__$1 = state_14081;if(cljs.core.truth_(inst_14046))
{var statearr_14107_14148 = state_14081__$1;(statearr_14107_14148[(1)] = (14));
} else
{var statearr_14108_14149 = state_14081__$1;(statearr_14108_14149[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (9)))
{var inst_14033 = (state_14081[(10)]);var inst_14033__$1 = (state_14081[(2)]);var inst_14034 = cljs.core.get.call(null,inst_14033__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14035 = cljs.core.get.call(null,inst_14033__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14036 = cljs.core.get.call(null,inst_14033__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14081__$1 = (function (){var statearr_14109 = state_14081;(statearr_14109[(17)] = inst_14035);
(statearr_14109[(16)] = inst_14036);
(statearr_14109[(10)] = inst_14033__$1);
return statearr_14109;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_14081__$1,(10),inst_14034);
} else
{if((state_val_14082 === (5)))
{var inst_14025 = (state_14081[(7)]);var inst_14028 = cljs.core.seq_QMARK_.call(null,inst_14025);var state_14081__$1 = state_14081;if(inst_14028)
{var statearr_14110_14150 = state_14081__$1;(statearr_14110_14150[(1)] = (7));
} else
{var statearr_14111_14151 = state_14081__$1;(statearr_14111_14151[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (14)))
{var inst_14041 = (state_14081[(15)]);var inst_14048 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14041);var state_14081__$1 = state_14081;var statearr_14112_14152 = state_14081__$1;(statearr_14112_14152[(2)] = inst_14048);
(statearr_14112_14152[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (26)))
{var inst_14071 = (state_14081[(2)]);var state_14081__$1 = state_14081;var statearr_14113_14153 = state_14081__$1;(statearr_14113_14153[(2)] = inst_14071);
(statearr_14113_14153[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (16)))
{var inst_14051 = (state_14081[(2)]);var inst_14052 = calc_state.call(null);var inst_14025 = inst_14052;var state_14081__$1 = (function (){var statearr_14114 = state_14081;(statearr_14114[(18)] = inst_14051);
(statearr_14114[(7)] = inst_14025);
return statearr_14114;
})();var statearr_14115_14154 = state_14081__$1;(statearr_14115_14154[(2)] = null);
(statearr_14115_14154[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (10)))
{var inst_14041 = (state_14081[(15)]);var inst_14040 = (state_14081[(8)]);var inst_14039 = (state_14081[(2)]);var inst_14040__$1 = cljs.core.nth.call(null,inst_14039,(0),null);var inst_14041__$1 = cljs.core.nth.call(null,inst_14039,(1),null);var inst_14042 = (inst_14040__$1 == null);var inst_14043 = cljs.core._EQ_.call(null,inst_14041__$1,change);var inst_14044 = (inst_14042) || (inst_14043);var state_14081__$1 = (function (){var statearr_14116 = state_14081;(statearr_14116[(15)] = inst_14041__$1);
(statearr_14116[(8)] = inst_14040__$1);
return statearr_14116;
})();if(cljs.core.truth_(inst_14044))
{var statearr_14117_14155 = state_14081__$1;(statearr_14117_14155[(1)] = (11));
} else
{var statearr_14118_14156 = state_14081__$1;(statearr_14118_14156[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (18)))
{var inst_14035 = (state_14081[(17)]);var inst_14041 = (state_14081[(15)]);var inst_14036 = (state_14081[(16)]);var inst_14058 = cljs.core.empty_QMARK_.call(null,inst_14036);var inst_14059 = inst_14035.call(null,inst_14041);var inst_14060 = cljs.core.not.call(null,inst_14059);var inst_14061 = (inst_14058) && (inst_14060);var state_14081__$1 = state_14081;var statearr_14119_14157 = state_14081__$1;(statearr_14119_14157[(2)] = inst_14061);
(statearr_14119_14157[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14082 === (8)))
{var inst_14025 = (state_14081[(7)]);var state_14081__$1 = state_14081;var statearr_14120_14158 = state_14081__$1;(statearr_14120_14158[(2)] = inst_14025);
(statearr_14120_14158[(1)] = (9));
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
});})(c__5849__auto___14128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5834__auto__,c__5849__auto___14128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14124[(0)] = state_machine__5835__auto__);
(statearr_14124[(1)] = (1));
return statearr_14124;
});
var state_machine__5835__auto____1 = (function (state_14081){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14125){if((e14125 instanceof Object))
{var ex__5838__auto__ = e14125;var statearr_14126_14159 = state_14081;(statearr_14126_14159[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14081);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14125;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14160 = state_14081;
state_14081 = G__14160;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14081){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5851__auto__ = (function (){var statearr_14127 = f__5850__auto__.call(null);(statearr_14127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14128);
return statearr_14127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14128,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj14162 = {};return obj14162;
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
return (function (p1__14163_SHARP_){if(cljs.core.truth_(p1__14163_SHARP_.call(null,topic)))
{return p1__14163_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14163_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14286 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14287){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14287 = meta14287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14286.cljs$lang$type = true;
cljs.core.async.t14286.cljs$lang$ctorStr = "cljs.core.async/t14286";
cljs.core.async.t14286.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14286");
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14286.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14288){var self__ = this;
var _14288__$1 = this;return self__.meta14287;
});})(mults,ensure_mult))
;
cljs.core.async.t14286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14288,meta14287__$1){var self__ = this;
var _14288__$1 = this;return (new cljs.core.async.t14286(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14287__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14286 = ((function (mults,ensure_mult){
return (function __GT_t14286(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14287){return (new cljs.core.async.t14286(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14287));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14286(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5849__auto___14408 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14408,mults,ensure_mult,p){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14408,mults,ensure_mult,p){
return (function (state_14360){var state_val_14361 = (state_14360[(1)]);if((state_val_14361 === (7)))
{var inst_14356 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14362_14409 = state_14360__$1;(statearr_14362_14409[(2)] = inst_14356);
(statearr_14362_14409[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (20)))
{var state_14360__$1 = state_14360;var statearr_14363_14410 = state_14360__$1;(statearr_14363_14410[(2)] = null);
(statearr_14363_14410[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (1)))
{var state_14360__$1 = state_14360;var statearr_14364_14411 = state_14360__$1;(statearr_14364_14411[(2)] = null);
(statearr_14364_14411[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (24)))
{var inst_14339 = (state_14360[(7)]);var inst_14348 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14339);var state_14360__$1 = state_14360;var statearr_14365_14412 = state_14360__$1;(statearr_14365_14412[(2)] = inst_14348);
(statearr_14365_14412[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (4)))
{var inst_14291 = (state_14360[(8)]);var inst_14291__$1 = (state_14360[(2)]);var inst_14292 = (inst_14291__$1 == null);var state_14360__$1 = (function (){var statearr_14366 = state_14360;(statearr_14366[(8)] = inst_14291__$1);
return statearr_14366;
})();if(cljs.core.truth_(inst_14292))
{var statearr_14367_14413 = state_14360__$1;(statearr_14367_14413[(1)] = (5));
} else
{var statearr_14368_14414 = state_14360__$1;(statearr_14368_14414[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (15)))
{var inst_14333 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14369_14415 = state_14360__$1;(statearr_14369_14415[(2)] = inst_14333);
(statearr_14369_14415[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (21)))
{var inst_14353 = (state_14360[(2)]);var state_14360__$1 = (function (){var statearr_14370 = state_14360;(statearr_14370[(9)] = inst_14353);
return statearr_14370;
})();var statearr_14371_14416 = state_14360__$1;(statearr_14371_14416[(2)] = null);
(statearr_14371_14416[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (13)))
{var inst_14315 = (state_14360[(10)]);var inst_14317 = cljs.core.chunked_seq_QMARK_.call(null,inst_14315);var state_14360__$1 = state_14360;if(inst_14317)
{var statearr_14372_14417 = state_14360__$1;(statearr_14372_14417[(1)] = (16));
} else
{var statearr_14373_14418 = state_14360__$1;(statearr_14373_14418[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (22)))
{var inst_14345 = (state_14360[(2)]);var state_14360__$1 = state_14360;if(cljs.core.truth_(inst_14345))
{var statearr_14374_14419 = state_14360__$1;(statearr_14374_14419[(1)] = (23));
} else
{var statearr_14375_14420 = state_14360__$1;(statearr_14375_14420[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (6)))
{var inst_14291 = (state_14360[(8)]);var inst_14341 = (state_14360[(11)]);var inst_14339 = (state_14360[(7)]);var inst_14339__$1 = topic_fn.call(null,inst_14291);var inst_14340 = cljs.core.deref.call(null,mults);var inst_14341__$1 = cljs.core.get.call(null,inst_14340,inst_14339__$1);var state_14360__$1 = (function (){var statearr_14376 = state_14360;(statearr_14376[(11)] = inst_14341__$1);
(statearr_14376[(7)] = inst_14339__$1);
return statearr_14376;
})();if(cljs.core.truth_(inst_14341__$1))
{var statearr_14377_14421 = state_14360__$1;(statearr_14377_14421[(1)] = (19));
} else
{var statearr_14378_14422 = state_14360__$1;(statearr_14378_14422[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (25)))
{var inst_14350 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14379_14423 = state_14360__$1;(statearr_14379_14423[(2)] = inst_14350);
(statearr_14379_14423[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (17)))
{var inst_14315 = (state_14360[(10)]);var inst_14324 = cljs.core.first.call(null,inst_14315);var inst_14325 = cljs.core.async.muxch_STAR_.call(null,inst_14324);var inst_14326 = cljs.core.async.close_BANG_.call(null,inst_14325);var inst_14327 = cljs.core.next.call(null,inst_14315);var inst_14301 = inst_14327;var inst_14302 = null;var inst_14303 = (0);var inst_14304 = (0);var state_14360__$1 = (function (){var statearr_14380 = state_14360;(statearr_14380[(12)] = inst_14326);
(statearr_14380[(13)] = inst_14301);
(statearr_14380[(14)] = inst_14303);
(statearr_14380[(15)] = inst_14304);
(statearr_14380[(16)] = inst_14302);
return statearr_14380;
})();var statearr_14381_14424 = state_14360__$1;(statearr_14381_14424[(2)] = null);
(statearr_14381_14424[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (3)))
{var inst_14358 = (state_14360[(2)]);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14360__$1,inst_14358);
} else
{if((state_val_14361 === (12)))
{var inst_14335 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14382_14425 = state_14360__$1;(statearr_14382_14425[(2)] = inst_14335);
(statearr_14382_14425[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (2)))
{var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14360__$1,(4),ch);
} else
{if((state_val_14361 === (23)))
{var state_14360__$1 = state_14360;var statearr_14383_14426 = state_14360__$1;(statearr_14383_14426[(2)] = null);
(statearr_14383_14426[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (19)))
{var inst_14291 = (state_14360[(8)]);var inst_14341 = (state_14360[(11)]);var inst_14343 = cljs.core.async.muxch_STAR_.call(null,inst_14341);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14360__$1,(22),inst_14343,inst_14291);
} else
{if((state_val_14361 === (11)))
{var inst_14301 = (state_14360[(13)]);var inst_14315 = (state_14360[(10)]);var inst_14315__$1 = cljs.core.seq.call(null,inst_14301);var state_14360__$1 = (function (){var statearr_14384 = state_14360;(statearr_14384[(10)] = inst_14315__$1);
return statearr_14384;
})();if(inst_14315__$1)
{var statearr_14385_14427 = state_14360__$1;(statearr_14385_14427[(1)] = (13));
} else
{var statearr_14386_14428 = state_14360__$1;(statearr_14386_14428[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (9)))
{var inst_14337 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14387_14429 = state_14360__$1;(statearr_14387_14429[(2)] = inst_14337);
(statearr_14387_14429[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (5)))
{var inst_14298 = cljs.core.deref.call(null,mults);var inst_14299 = cljs.core.vals.call(null,inst_14298);var inst_14300 = cljs.core.seq.call(null,inst_14299);var inst_14301 = inst_14300;var inst_14302 = null;var inst_14303 = (0);var inst_14304 = (0);var state_14360__$1 = (function (){var statearr_14388 = state_14360;(statearr_14388[(13)] = inst_14301);
(statearr_14388[(14)] = inst_14303);
(statearr_14388[(15)] = inst_14304);
(statearr_14388[(16)] = inst_14302);
return statearr_14388;
})();var statearr_14389_14430 = state_14360__$1;(statearr_14389_14430[(2)] = null);
(statearr_14389_14430[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (14)))
{var state_14360__$1 = state_14360;var statearr_14393_14431 = state_14360__$1;(statearr_14393_14431[(2)] = null);
(statearr_14393_14431[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (16)))
{var inst_14315 = (state_14360[(10)]);var inst_14319 = cljs.core.chunk_first.call(null,inst_14315);var inst_14320 = cljs.core.chunk_rest.call(null,inst_14315);var inst_14321 = cljs.core.count.call(null,inst_14319);var inst_14301 = inst_14320;var inst_14302 = inst_14319;var inst_14303 = inst_14321;var inst_14304 = (0);var state_14360__$1 = (function (){var statearr_14394 = state_14360;(statearr_14394[(13)] = inst_14301);
(statearr_14394[(14)] = inst_14303);
(statearr_14394[(15)] = inst_14304);
(statearr_14394[(16)] = inst_14302);
return statearr_14394;
})();var statearr_14395_14432 = state_14360__$1;(statearr_14395_14432[(2)] = null);
(statearr_14395_14432[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (10)))
{var inst_14301 = (state_14360[(13)]);var inst_14303 = (state_14360[(14)]);var inst_14304 = (state_14360[(15)]);var inst_14302 = (state_14360[(16)]);var inst_14309 = cljs.core._nth.call(null,inst_14302,inst_14304);var inst_14310 = cljs.core.async.muxch_STAR_.call(null,inst_14309);var inst_14311 = cljs.core.async.close_BANG_.call(null,inst_14310);var inst_14312 = (inst_14304 + (1));var tmp14390 = inst_14301;var tmp14391 = inst_14303;var tmp14392 = inst_14302;var inst_14301__$1 = tmp14390;var inst_14302__$1 = tmp14392;var inst_14303__$1 = tmp14391;var inst_14304__$1 = inst_14312;var state_14360__$1 = (function (){var statearr_14396 = state_14360;(statearr_14396[(17)] = inst_14311);
(statearr_14396[(13)] = inst_14301__$1);
(statearr_14396[(14)] = inst_14303__$1);
(statearr_14396[(15)] = inst_14304__$1);
(statearr_14396[(16)] = inst_14302__$1);
return statearr_14396;
})();var statearr_14397_14433 = state_14360__$1;(statearr_14397_14433[(2)] = null);
(statearr_14397_14433[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (18)))
{var inst_14330 = (state_14360[(2)]);var state_14360__$1 = state_14360;var statearr_14398_14434 = state_14360__$1;(statearr_14398_14434[(2)] = inst_14330);
(statearr_14398_14434[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14361 === (8)))
{var inst_14303 = (state_14360[(14)]);var inst_14304 = (state_14360[(15)]);var inst_14306 = (inst_14304 < inst_14303);var inst_14307 = inst_14306;var state_14360__$1 = state_14360;if(cljs.core.truth_(inst_14307))
{var statearr_14399_14435 = state_14360__$1;(statearr_14399_14435[(1)] = (10));
} else
{var statearr_14400_14436 = state_14360__$1;(statearr_14400_14436[(1)] = (11));
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
});})(c__5849__auto___14408,mults,ensure_mult,p))
;return ((function (switch__5834__auto__,c__5849__auto___14408,mults,ensure_mult,p){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14404[(0)] = state_machine__5835__auto__);
(statearr_14404[(1)] = (1));
return statearr_14404;
});
var state_machine__5835__auto____1 = (function (state_14360){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14405){if((e14405 instanceof Object))
{var ex__5838__auto__ = e14405;var statearr_14406_14437 = state_14360;(statearr_14406_14437[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14405;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14438 = state_14360;
state_14360 = G__14438;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14360){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14408,mults,ensure_mult,p))
})();var state__5851__auto__ = (function (){var statearr_14407 = f__5850__auto__.call(null);(statearr_14407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14408);
return statearr_14407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14408,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5849__auto___14575 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14575,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14575,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14545){var state_val_14546 = (state_14545[(1)]);if((state_val_14546 === (7)))
{var state_14545__$1 = state_14545;var statearr_14547_14576 = state_14545__$1;(statearr_14547_14576[(2)] = null);
(statearr_14547_14576[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (1)))
{var state_14545__$1 = state_14545;var statearr_14548_14577 = state_14545__$1;(statearr_14548_14577[(2)] = null);
(statearr_14548_14577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (4)))
{var inst_14509 = (state_14545[(7)]);var inst_14511 = (inst_14509 < cnt);var state_14545__$1 = state_14545;if(cljs.core.truth_(inst_14511))
{var statearr_14549_14578 = state_14545__$1;(statearr_14549_14578[(1)] = (6));
} else
{var statearr_14550_14579 = state_14545__$1;(statearr_14550_14579[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (15)))
{var inst_14541 = (state_14545[(2)]);var state_14545__$1 = state_14545;var statearr_14551_14580 = state_14545__$1;(statearr_14551_14580[(2)] = inst_14541);
(statearr_14551_14580[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (13)))
{var inst_14534 = cljs.core.async.close_BANG_.call(null,out);var state_14545__$1 = state_14545;var statearr_14552_14581 = state_14545__$1;(statearr_14552_14581[(2)] = inst_14534);
(statearr_14552_14581[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (6)))
{var state_14545__$1 = state_14545;var statearr_14553_14582 = state_14545__$1;(statearr_14553_14582[(2)] = null);
(statearr_14553_14582[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (3)))
{var inst_14543 = (state_14545[(2)]);var state_14545__$1 = state_14545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14545__$1,inst_14543);
} else
{if((state_val_14546 === (12)))
{var inst_14531 = (state_14545[(8)]);var inst_14531__$1 = (state_14545[(2)]);var inst_14532 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14531__$1);var state_14545__$1 = (function (){var statearr_14554 = state_14545;(statearr_14554[(8)] = inst_14531__$1);
return statearr_14554;
})();if(cljs.core.truth_(inst_14532))
{var statearr_14555_14583 = state_14545__$1;(statearr_14555_14583[(1)] = (13));
} else
{var statearr_14556_14584 = state_14545__$1;(statearr_14556_14584[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (2)))
{var inst_14508 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14509 = (0);var state_14545__$1 = (function (){var statearr_14557 = state_14545;(statearr_14557[(9)] = inst_14508);
(statearr_14557[(7)] = inst_14509);
return statearr_14557;
})();var statearr_14558_14585 = state_14545__$1;(statearr_14558_14585[(2)] = null);
(statearr_14558_14585[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (11)))
{var inst_14509 = (state_14545[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14545,(10),Object,null,(9));var inst_14518 = chs__$1.call(null,inst_14509);var inst_14519 = done.call(null,inst_14509);var inst_14520 = cljs.core.async.take_BANG_.call(null,inst_14518,inst_14519);var state_14545__$1 = state_14545;var statearr_14559_14586 = state_14545__$1;(statearr_14559_14586[(2)] = inst_14520);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14545__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (9)))
{var inst_14509 = (state_14545[(7)]);var inst_14522 = (state_14545[(2)]);var inst_14523 = (inst_14509 + (1));var inst_14509__$1 = inst_14523;var state_14545__$1 = (function (){var statearr_14560 = state_14545;(statearr_14560[(10)] = inst_14522);
(statearr_14560[(7)] = inst_14509__$1);
return statearr_14560;
})();var statearr_14561_14587 = state_14545__$1;(statearr_14561_14587[(2)] = null);
(statearr_14561_14587[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (5)))
{var inst_14529 = (state_14545[(2)]);var state_14545__$1 = (function (){var statearr_14562 = state_14545;(statearr_14562[(11)] = inst_14529);
return statearr_14562;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14545__$1,(12),dchan);
} else
{if((state_val_14546 === (14)))
{var inst_14531 = (state_14545[(8)]);var inst_14536 = cljs.core.apply.call(null,f,inst_14531);var state_14545__$1 = state_14545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14545__$1,(16),out,inst_14536);
} else
{if((state_val_14546 === (16)))
{var inst_14538 = (state_14545[(2)]);var state_14545__$1 = (function (){var statearr_14563 = state_14545;(statearr_14563[(12)] = inst_14538);
return statearr_14563;
})();var statearr_14564_14588 = state_14545__$1;(statearr_14564_14588[(2)] = null);
(statearr_14564_14588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (10)))
{var inst_14513 = (state_14545[(2)]);var inst_14514 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14545__$1 = (function (){var statearr_14565 = state_14545;(statearr_14565[(13)] = inst_14513);
return statearr_14565;
})();var statearr_14566_14589 = state_14545__$1;(statearr_14566_14589[(2)] = inst_14514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14545__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14546 === (8)))
{var inst_14527 = (state_14545[(2)]);var state_14545__$1 = state_14545;var statearr_14567_14590 = state_14545__$1;(statearr_14567_14590[(2)] = inst_14527);
(statearr_14567_14590[(1)] = (5));
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
});})(c__5849__auto___14575,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5834__auto__,c__5849__auto___14575,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14571[(0)] = state_machine__5835__auto__);
(statearr_14571[(1)] = (1));
return statearr_14571;
});
var state_machine__5835__auto____1 = (function (state_14545){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14545);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14572){if((e14572 instanceof Object))
{var ex__5838__auto__ = e14572;var statearr_14573_14591 = state_14545;(statearr_14573_14591[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14572;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14592 = state_14545;
state_14545 = G__14592;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14545){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14575,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5851__auto__ = (function (){var statearr_14574 = f__5850__auto__.call(null);(statearr_14574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14575);
return statearr_14574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14575,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14700 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14700,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14700,out){
return (function (state_14676){var state_val_14677 = (state_14676[(1)]);if((state_val_14677 === (7)))
{var inst_14656 = (state_14676[(7)]);var inst_14655 = (state_14676[(8)]);var inst_14655__$1 = (state_14676[(2)]);var inst_14656__$1 = cljs.core.nth.call(null,inst_14655__$1,(0),null);var inst_14657 = cljs.core.nth.call(null,inst_14655__$1,(1),null);var inst_14658 = (inst_14656__$1 == null);var state_14676__$1 = (function (){var statearr_14678 = state_14676;(statearr_14678[(7)] = inst_14656__$1);
(statearr_14678[(9)] = inst_14657);
(statearr_14678[(8)] = inst_14655__$1);
return statearr_14678;
})();if(cljs.core.truth_(inst_14658))
{var statearr_14679_14701 = state_14676__$1;(statearr_14679_14701[(1)] = (8));
} else
{var statearr_14680_14702 = state_14676__$1;(statearr_14680_14702[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (1)))
{var inst_14647 = cljs.core.vec.call(null,chs);var inst_14648 = inst_14647;var state_14676__$1 = (function (){var statearr_14681 = state_14676;(statearr_14681[(10)] = inst_14648);
return statearr_14681;
})();var statearr_14682_14703 = state_14676__$1;(statearr_14682_14703[(2)] = null);
(statearr_14682_14703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (4)))
{var inst_14648 = (state_14676[(10)]);var state_14676__$1 = state_14676;return cljs.core.async.ioc_alts_BANG_.call(null,state_14676__$1,(7),inst_14648);
} else
{if((state_val_14677 === (6)))
{var inst_14672 = (state_14676[(2)]);var state_14676__$1 = state_14676;var statearr_14683_14704 = state_14676__$1;(statearr_14683_14704[(2)] = inst_14672);
(statearr_14683_14704[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (3)))
{var inst_14674 = (state_14676[(2)]);var state_14676__$1 = state_14676;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14676__$1,inst_14674);
} else
{if((state_val_14677 === (2)))
{var inst_14648 = (state_14676[(10)]);var inst_14650 = cljs.core.count.call(null,inst_14648);var inst_14651 = (inst_14650 > (0));var state_14676__$1 = state_14676;if(cljs.core.truth_(inst_14651))
{var statearr_14685_14705 = state_14676__$1;(statearr_14685_14705[(1)] = (4));
} else
{var statearr_14686_14706 = state_14676__$1;(statearr_14686_14706[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (11)))
{var inst_14648 = (state_14676[(10)]);var inst_14665 = (state_14676[(2)]);var tmp14684 = inst_14648;var inst_14648__$1 = tmp14684;var state_14676__$1 = (function (){var statearr_14687 = state_14676;(statearr_14687[(10)] = inst_14648__$1);
(statearr_14687[(11)] = inst_14665);
return statearr_14687;
})();var statearr_14688_14707 = state_14676__$1;(statearr_14688_14707[(2)] = null);
(statearr_14688_14707[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (9)))
{var inst_14656 = (state_14676[(7)]);var state_14676__$1 = state_14676;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14676__$1,(11),out,inst_14656);
} else
{if((state_val_14677 === (5)))
{var inst_14670 = cljs.core.async.close_BANG_.call(null,out);var state_14676__$1 = state_14676;var statearr_14689_14708 = state_14676__$1;(statearr_14689_14708[(2)] = inst_14670);
(statearr_14689_14708[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (10)))
{var inst_14668 = (state_14676[(2)]);var state_14676__$1 = state_14676;var statearr_14690_14709 = state_14676__$1;(statearr_14690_14709[(2)] = inst_14668);
(statearr_14690_14709[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14677 === (8)))
{var inst_14656 = (state_14676[(7)]);var inst_14657 = (state_14676[(9)]);var inst_14648 = (state_14676[(10)]);var inst_14655 = (state_14676[(8)]);var inst_14660 = (function (){var c = inst_14657;var v = inst_14656;var vec__14653 = inst_14655;var cs = inst_14648;return ((function (c,v,vec__14653,cs,inst_14656,inst_14657,inst_14648,inst_14655,state_val_14677,c__5849__auto___14700,out){
return (function (p1__14593_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14593_SHARP_);
});
;})(c,v,vec__14653,cs,inst_14656,inst_14657,inst_14648,inst_14655,state_val_14677,c__5849__auto___14700,out))
})();var inst_14661 = cljs.core.filterv.call(null,inst_14660,inst_14648);var inst_14648__$1 = inst_14661;var state_14676__$1 = (function (){var statearr_14691 = state_14676;(statearr_14691[(10)] = inst_14648__$1);
return statearr_14691;
})();var statearr_14692_14710 = state_14676__$1;(statearr_14692_14710[(2)] = null);
(statearr_14692_14710[(1)] = (2));
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
});})(c__5849__auto___14700,out))
;return ((function (switch__5834__auto__,c__5849__auto___14700,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14696 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14696[(0)] = state_machine__5835__auto__);
(statearr_14696[(1)] = (1));
return statearr_14696;
});
var state_machine__5835__auto____1 = (function (state_14676){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14676);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14697){if((e14697 instanceof Object))
{var ex__5838__auto__ = e14697;var statearr_14698_14711 = state_14676;(statearr_14698_14711[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14676);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14697;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14712 = state_14676;
state_14676 = G__14712;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14676){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14700,out))
})();var state__5851__auto__ = (function (){var statearr_14699 = f__5850__auto__.call(null);(statearr_14699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14700);
return statearr_14699;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14700,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14805,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14805,out){
return (function (state_14782){var state_val_14783 = (state_14782[(1)]);if((state_val_14783 === (7)))
{var inst_14764 = (state_14782[(7)]);var inst_14764__$1 = (state_14782[(2)]);var inst_14765 = (inst_14764__$1 == null);var inst_14766 = cljs.core.not.call(null,inst_14765);var state_14782__$1 = (function (){var statearr_14784 = state_14782;(statearr_14784[(7)] = inst_14764__$1);
return statearr_14784;
})();if(inst_14766)
{var statearr_14785_14806 = state_14782__$1;(statearr_14785_14806[(1)] = (8));
} else
{var statearr_14786_14807 = state_14782__$1;(statearr_14786_14807[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (1)))
{var inst_14759 = (0);var state_14782__$1 = (function (){var statearr_14787 = state_14782;(statearr_14787[(8)] = inst_14759);
return statearr_14787;
})();var statearr_14788_14808 = state_14782__$1;(statearr_14788_14808[(2)] = null);
(statearr_14788_14808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (4)))
{var state_14782__$1 = state_14782;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14782__$1,(7),ch);
} else
{if((state_val_14783 === (6)))
{var inst_14777 = (state_14782[(2)]);var state_14782__$1 = state_14782;var statearr_14789_14809 = state_14782__$1;(statearr_14789_14809[(2)] = inst_14777);
(statearr_14789_14809[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (3)))
{var inst_14779 = (state_14782[(2)]);var inst_14780 = cljs.core.async.close_BANG_.call(null,out);var state_14782__$1 = (function (){var statearr_14790 = state_14782;(statearr_14790[(9)] = inst_14779);
return statearr_14790;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14782__$1,inst_14780);
} else
{if((state_val_14783 === (2)))
{var inst_14759 = (state_14782[(8)]);var inst_14761 = (inst_14759 < n);var state_14782__$1 = state_14782;if(cljs.core.truth_(inst_14761))
{var statearr_14791_14810 = state_14782__$1;(statearr_14791_14810[(1)] = (4));
} else
{var statearr_14792_14811 = state_14782__$1;(statearr_14792_14811[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (11)))
{var inst_14759 = (state_14782[(8)]);var inst_14769 = (state_14782[(2)]);var inst_14770 = (inst_14759 + (1));var inst_14759__$1 = inst_14770;var state_14782__$1 = (function (){var statearr_14793 = state_14782;(statearr_14793[(10)] = inst_14769);
(statearr_14793[(8)] = inst_14759__$1);
return statearr_14793;
})();var statearr_14794_14812 = state_14782__$1;(statearr_14794_14812[(2)] = null);
(statearr_14794_14812[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (9)))
{var state_14782__$1 = state_14782;var statearr_14795_14813 = state_14782__$1;(statearr_14795_14813[(2)] = null);
(statearr_14795_14813[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (5)))
{var state_14782__$1 = state_14782;var statearr_14796_14814 = state_14782__$1;(statearr_14796_14814[(2)] = null);
(statearr_14796_14814[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (10)))
{var inst_14774 = (state_14782[(2)]);var state_14782__$1 = state_14782;var statearr_14797_14815 = state_14782__$1;(statearr_14797_14815[(2)] = inst_14774);
(statearr_14797_14815[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14783 === (8)))
{var inst_14764 = (state_14782[(7)]);var state_14782__$1 = state_14782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14782__$1,(11),out,inst_14764);
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
});})(c__5849__auto___14805,out))
;return ((function (switch__5834__auto__,c__5849__auto___14805,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14801 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14801[(0)] = state_machine__5835__auto__);
(statearr_14801[(1)] = (1));
return statearr_14801;
});
var state_machine__5835__auto____1 = (function (state_14782){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14802){if((e14802 instanceof Object))
{var ex__5838__auto__ = e14802;var statearr_14803_14816 = state_14782;(statearr_14803_14816[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14782);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14817 = state_14782;
state_14782 = G__14817;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14782){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14805,out))
})();var state__5851__auto__ = (function (){var statearr_14804 = f__5850__auto__.call(null);(statearr_14804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14805);
return statearr_14804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14805,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14825 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14825 = (function (ch,f,map_LT_,meta14826){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14826 = meta14826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14825.cljs$lang$type = true;
cljs.core.async.t14825.cljs$lang$ctorStr = "cljs.core.async/t14825";
cljs.core.async.t14825.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14825");
});
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14828 = (function (fn1,_,meta14826,ch,f,map_LT_,meta14829){
this.fn1 = fn1;
this._ = _;
this.meta14826 = meta14826;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14829 = meta14829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14828.cljs$lang$type = true;
cljs.core.async.t14828.cljs$lang$ctorStr = "cljs.core.async/t14828";
cljs.core.async.t14828.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14828");
});})(___$1))
;
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14818_SHARP_){return f1.call(null,(((p1__14818_SHARP_ == null))?null:self__.f.call(null,p1__14818_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14830){var self__ = this;
var _14830__$1 = this;return self__.meta14829;
});})(___$1))
;
cljs.core.async.t14828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14830,meta14829__$1){var self__ = this;
var _14830__$1 = this;return (new cljs.core.async.t14828(self__.fn1,self__._,self__.meta14826,self__.ch,self__.f,self__.map_LT_,meta14829__$1));
});})(___$1))
;
cljs.core.async.__GT_t14828 = ((function (___$1){
return (function __GT_t14828(fn1__$1,___$2,meta14826__$1,ch__$2,f__$2,map_LT___$2,meta14829){return (new cljs.core.async.t14828(fn1__$1,___$2,meta14826__$1,ch__$2,f__$2,map_LT___$2,meta14829));
});})(___$1))
;
}
return (new cljs.core.async.t14828(fn1,___$1,self__.meta14826,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14825.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14827){var self__ = this;
var _14827__$1 = this;return self__.meta14826;
});
cljs.core.async.t14825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14827,meta14826__$1){var self__ = this;
var _14827__$1 = this;return (new cljs.core.async.t14825(self__.ch,self__.f,self__.map_LT_,meta14826__$1));
});
cljs.core.async.__GT_t14825 = (function __GT_t14825(ch__$1,f__$1,map_LT___$1,meta14826){return (new cljs.core.async.t14825(ch__$1,f__$1,map_LT___$1,meta14826));
});
}
return (new cljs.core.async.t14825(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14834 = (function (ch,f,map_GT_,meta14835){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14836){var self__ = this;
var _14836__$1 = this;return self__.meta14835;
});
cljs.core.async.t14834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14836,meta14835__$1){var self__ = this;
var _14836__$1 = this;return (new cljs.core.async.t14834(self__.ch,self__.f,self__.map_GT_,meta14835__$1));
});
cljs.core.async.__GT_t14834 = (function __GT_t14834(ch__$1,f__$1,map_GT___$1,meta14835){return (new cljs.core.async.t14834(ch__$1,f__$1,map_GT___$1,meta14835));
});
}
return (new cljs.core.async.t14834(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14840 = (function (ch,p,filter_GT_,meta14841){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14841 = meta14841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14840.cljs$lang$type = true;
cljs.core.async.t14840.cljs$lang$ctorStr = "cljs.core.async/t14840";
cljs.core.async.t14840.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14840");
});
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14840.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14842){var self__ = this;
var _14842__$1 = this;return self__.meta14841;
});
cljs.core.async.t14840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14842,meta14841__$1){var self__ = this;
var _14842__$1 = this;return (new cljs.core.async.t14840(self__.ch,self__.p,self__.filter_GT_,meta14841__$1));
});
cljs.core.async.__GT_t14840 = (function __GT_t14840(ch__$1,p__$1,filter_GT___$1,meta14841){return (new cljs.core.async.t14840(ch__$1,p__$1,filter_GT___$1,meta14841));
});
}
return (new cljs.core.async.t14840(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14925,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14925,out){
return (function (state_14904){var state_val_14905 = (state_14904[(1)]);if((state_val_14905 === (7)))
{var inst_14900 = (state_14904[(2)]);var state_14904__$1 = state_14904;var statearr_14906_14926 = state_14904__$1;(statearr_14906_14926[(2)] = inst_14900);
(statearr_14906_14926[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (1)))
{var state_14904__$1 = state_14904;var statearr_14907_14927 = state_14904__$1;(statearr_14907_14927[(2)] = null);
(statearr_14907_14927[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (4)))
{var inst_14886 = (state_14904[(7)]);var inst_14886__$1 = (state_14904[(2)]);var inst_14887 = (inst_14886__$1 == null);var state_14904__$1 = (function (){var statearr_14908 = state_14904;(statearr_14908[(7)] = inst_14886__$1);
return statearr_14908;
})();if(cljs.core.truth_(inst_14887))
{var statearr_14909_14928 = state_14904__$1;(statearr_14909_14928[(1)] = (5));
} else
{var statearr_14910_14929 = state_14904__$1;(statearr_14910_14929[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (6)))
{var inst_14886 = (state_14904[(7)]);var inst_14891 = p.call(null,inst_14886);var state_14904__$1 = state_14904;if(cljs.core.truth_(inst_14891))
{var statearr_14911_14930 = state_14904__$1;(statearr_14911_14930[(1)] = (8));
} else
{var statearr_14912_14931 = state_14904__$1;(statearr_14912_14931[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (3)))
{var inst_14902 = (state_14904[(2)]);var state_14904__$1 = state_14904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14904__$1,inst_14902);
} else
{if((state_val_14905 === (2)))
{var state_14904__$1 = state_14904;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14904__$1,(4),ch);
} else
{if((state_val_14905 === (11)))
{var inst_14894 = (state_14904[(2)]);var state_14904__$1 = state_14904;var statearr_14913_14932 = state_14904__$1;(statearr_14913_14932[(2)] = inst_14894);
(statearr_14913_14932[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (9)))
{var state_14904__$1 = state_14904;var statearr_14914_14933 = state_14904__$1;(statearr_14914_14933[(2)] = null);
(statearr_14914_14933[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (5)))
{var inst_14889 = cljs.core.async.close_BANG_.call(null,out);var state_14904__$1 = state_14904;var statearr_14915_14934 = state_14904__$1;(statearr_14915_14934[(2)] = inst_14889);
(statearr_14915_14934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (10)))
{var inst_14897 = (state_14904[(2)]);var state_14904__$1 = (function (){var statearr_14916 = state_14904;(statearr_14916[(8)] = inst_14897);
return statearr_14916;
})();var statearr_14917_14935 = state_14904__$1;(statearr_14917_14935[(2)] = null);
(statearr_14917_14935[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14905 === (8)))
{var inst_14886 = (state_14904[(7)]);var state_14904__$1 = state_14904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14904__$1,(11),out,inst_14886);
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
});})(c__5849__auto___14925,out))
;return ((function (switch__5834__auto__,c__5849__auto___14925,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14921 = [null,null,null,null,null,null,null,null,null];(statearr_14921[(0)] = state_machine__5835__auto__);
(statearr_14921[(1)] = (1));
return statearr_14921;
});
var state_machine__5835__auto____1 = (function (state_14904){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14904);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14922){if((e14922 instanceof Object))
{var ex__5838__auto__ = e14922;var statearr_14923_14936 = state_14904;(statearr_14923_14936[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14904);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14922;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14937 = state_14904;
state_14904 = G__14937;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14904){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14925,out))
})();var state__5851__auto__ = (function (){var statearr_14924 = f__5850__auto__.call(null);(statearr_14924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14925);
return statearr_14924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14925,out))
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
return (function (state_15103){var state_val_15104 = (state_15103[(1)]);if((state_val_15104 === (7)))
{var inst_15099 = (state_15103[(2)]);var state_15103__$1 = state_15103;var statearr_15105_15146 = state_15103__$1;(statearr_15105_15146[(2)] = inst_15099);
(statearr_15105_15146[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (20)))
{var inst_15069 = (state_15103[(7)]);var inst_15080 = (state_15103[(2)]);var inst_15081 = cljs.core.next.call(null,inst_15069);var inst_15055 = inst_15081;var inst_15056 = null;var inst_15057 = (0);var inst_15058 = (0);var state_15103__$1 = (function (){var statearr_15106 = state_15103;(statearr_15106[(8)] = inst_15057);
(statearr_15106[(9)] = inst_15058);
(statearr_15106[(10)] = inst_15080);
(statearr_15106[(11)] = inst_15056);
(statearr_15106[(12)] = inst_15055);
return statearr_15106;
})();var statearr_15107_15147 = state_15103__$1;(statearr_15107_15147[(2)] = null);
(statearr_15107_15147[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (1)))
{var state_15103__$1 = state_15103;var statearr_15108_15148 = state_15103__$1;(statearr_15108_15148[(2)] = null);
(statearr_15108_15148[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (4)))
{var inst_15044 = (state_15103[(13)]);var inst_15044__$1 = (state_15103[(2)]);var inst_15045 = (inst_15044__$1 == null);var state_15103__$1 = (function (){var statearr_15109 = state_15103;(statearr_15109[(13)] = inst_15044__$1);
return statearr_15109;
})();if(cljs.core.truth_(inst_15045))
{var statearr_15110_15149 = state_15103__$1;(statearr_15110_15149[(1)] = (5));
} else
{var statearr_15111_15150 = state_15103__$1;(statearr_15111_15150[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (15)))
{var state_15103__$1 = state_15103;var statearr_15115_15151 = state_15103__$1;(statearr_15115_15151[(2)] = null);
(statearr_15115_15151[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (21)))
{var state_15103__$1 = state_15103;var statearr_15116_15152 = state_15103__$1;(statearr_15116_15152[(2)] = null);
(statearr_15116_15152[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (13)))
{var inst_15057 = (state_15103[(8)]);var inst_15058 = (state_15103[(9)]);var inst_15056 = (state_15103[(11)]);var inst_15055 = (state_15103[(12)]);var inst_15065 = (state_15103[(2)]);var inst_15066 = (inst_15058 + (1));var tmp15112 = inst_15057;var tmp15113 = inst_15056;var tmp15114 = inst_15055;var inst_15055__$1 = tmp15114;var inst_15056__$1 = tmp15113;var inst_15057__$1 = tmp15112;var inst_15058__$1 = inst_15066;var state_15103__$1 = (function (){var statearr_15117 = state_15103;(statearr_15117[(8)] = inst_15057__$1);
(statearr_15117[(9)] = inst_15058__$1);
(statearr_15117[(14)] = inst_15065);
(statearr_15117[(11)] = inst_15056__$1);
(statearr_15117[(12)] = inst_15055__$1);
return statearr_15117;
})();var statearr_15118_15153 = state_15103__$1;(statearr_15118_15153[(2)] = null);
(statearr_15118_15153[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (22)))
{var state_15103__$1 = state_15103;var statearr_15119_15154 = state_15103__$1;(statearr_15119_15154[(2)] = null);
(statearr_15119_15154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (6)))
{var inst_15044 = (state_15103[(13)]);var inst_15053 = f.call(null,inst_15044);var inst_15054 = cljs.core.seq.call(null,inst_15053);var inst_15055 = inst_15054;var inst_15056 = null;var inst_15057 = (0);var inst_15058 = (0);var state_15103__$1 = (function (){var statearr_15120 = state_15103;(statearr_15120[(8)] = inst_15057);
(statearr_15120[(9)] = inst_15058);
(statearr_15120[(11)] = inst_15056);
(statearr_15120[(12)] = inst_15055);
return statearr_15120;
})();var statearr_15121_15155 = state_15103__$1;(statearr_15121_15155[(2)] = null);
(statearr_15121_15155[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (17)))
{var inst_15069 = (state_15103[(7)]);var inst_15073 = cljs.core.chunk_first.call(null,inst_15069);var inst_15074 = cljs.core.chunk_rest.call(null,inst_15069);var inst_15075 = cljs.core.count.call(null,inst_15073);var inst_15055 = inst_15074;var inst_15056 = inst_15073;var inst_15057 = inst_15075;var inst_15058 = (0);var state_15103__$1 = (function (){var statearr_15122 = state_15103;(statearr_15122[(8)] = inst_15057);
(statearr_15122[(9)] = inst_15058);
(statearr_15122[(11)] = inst_15056);
(statearr_15122[(12)] = inst_15055);
return statearr_15122;
})();var statearr_15123_15156 = state_15103__$1;(statearr_15123_15156[(2)] = null);
(statearr_15123_15156[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (3)))
{var inst_15101 = (state_15103[(2)]);var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15103__$1,inst_15101);
} else
{if((state_val_15104 === (12)))
{var inst_15089 = (state_15103[(2)]);var state_15103__$1 = state_15103;var statearr_15124_15157 = state_15103__$1;(statearr_15124_15157[(2)] = inst_15089);
(statearr_15124_15157[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (2)))
{var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15103__$1,(4),in$);
} else
{if((state_val_15104 === (23)))
{var inst_15097 = (state_15103[(2)]);var state_15103__$1 = state_15103;var statearr_15125_15158 = state_15103__$1;(statearr_15125_15158[(2)] = inst_15097);
(statearr_15125_15158[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (19)))
{var inst_15084 = (state_15103[(2)]);var state_15103__$1 = state_15103;var statearr_15126_15159 = state_15103__$1;(statearr_15126_15159[(2)] = inst_15084);
(statearr_15126_15159[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (11)))
{var inst_15069 = (state_15103[(7)]);var inst_15055 = (state_15103[(12)]);var inst_15069__$1 = cljs.core.seq.call(null,inst_15055);var state_15103__$1 = (function (){var statearr_15127 = state_15103;(statearr_15127[(7)] = inst_15069__$1);
return statearr_15127;
})();if(inst_15069__$1)
{var statearr_15128_15160 = state_15103__$1;(statearr_15128_15160[(1)] = (14));
} else
{var statearr_15129_15161 = state_15103__$1;(statearr_15129_15161[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (9)))
{var inst_15091 = (state_15103[(2)]);var inst_15092 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15103__$1 = (function (){var statearr_15130 = state_15103;(statearr_15130[(15)] = inst_15091);
return statearr_15130;
})();if(cljs.core.truth_(inst_15092))
{var statearr_15131_15162 = state_15103__$1;(statearr_15131_15162[(1)] = (21));
} else
{var statearr_15132_15163 = state_15103__$1;(statearr_15132_15163[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (5)))
{var inst_15047 = cljs.core.async.close_BANG_.call(null,out);var state_15103__$1 = state_15103;var statearr_15133_15164 = state_15103__$1;(statearr_15133_15164[(2)] = inst_15047);
(statearr_15133_15164[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (14)))
{var inst_15069 = (state_15103[(7)]);var inst_15071 = cljs.core.chunked_seq_QMARK_.call(null,inst_15069);var state_15103__$1 = state_15103;if(inst_15071)
{var statearr_15134_15165 = state_15103__$1;(statearr_15134_15165[(1)] = (17));
} else
{var statearr_15135_15166 = state_15103__$1;(statearr_15135_15166[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (16)))
{var inst_15087 = (state_15103[(2)]);var state_15103__$1 = state_15103;var statearr_15136_15167 = state_15103__$1;(statearr_15136_15167[(2)] = inst_15087);
(statearr_15136_15167[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15104 === (10)))
{var inst_15058 = (state_15103[(9)]);var inst_15056 = (state_15103[(11)]);var inst_15063 = cljs.core._nth.call(null,inst_15056,inst_15058);var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15103__$1,(13),out,inst_15063);
} else
{if((state_val_15104 === (18)))
{var inst_15069 = (state_15103[(7)]);var inst_15078 = cljs.core.first.call(null,inst_15069);var state_15103__$1 = state_15103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15103__$1,(20),out,inst_15078);
} else
{if((state_val_15104 === (8)))
{var inst_15057 = (state_15103[(8)]);var inst_15058 = (state_15103[(9)]);var inst_15060 = (inst_15058 < inst_15057);var inst_15061 = inst_15060;var state_15103__$1 = state_15103;if(cljs.core.truth_(inst_15061))
{var statearr_15137_15168 = state_15103__$1;(statearr_15137_15168[(1)] = (10));
} else
{var statearr_15138_15169 = state_15103__$1;(statearr_15138_15169[(1)] = (11));
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
var state_machine__5835__auto____0 = (function (){var statearr_15142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15142[(0)] = state_machine__5835__auto__);
(statearr_15142[(1)] = (1));
return statearr_15142;
});
var state_machine__5835__auto____1 = (function (state_15103){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15143){if((e15143 instanceof Object))
{var ex__5838__auto__ = e15143;var statearr_15144_15170 = state_15103;(statearr_15144_15170[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15103);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15143;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15171 = state_15103;
state_15103 = G__15171;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15103){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_15145 = f__5850__auto__.call(null);(statearr_15145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_15145;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15268,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15268,out){
return (function (state_15243){var state_val_15244 = (state_15243[(1)]);if((state_val_15244 === (7)))
{var inst_15238 = (state_15243[(2)]);var state_15243__$1 = state_15243;var statearr_15245_15269 = state_15243__$1;(statearr_15245_15269[(2)] = inst_15238);
(statearr_15245_15269[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (1)))
{var inst_15220 = null;var state_15243__$1 = (function (){var statearr_15246 = state_15243;(statearr_15246[(7)] = inst_15220);
return statearr_15246;
})();var statearr_15247_15270 = state_15243__$1;(statearr_15247_15270[(2)] = null);
(statearr_15247_15270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (4)))
{var inst_15223 = (state_15243[(8)]);var inst_15223__$1 = (state_15243[(2)]);var inst_15224 = (inst_15223__$1 == null);var inst_15225 = cljs.core.not.call(null,inst_15224);var state_15243__$1 = (function (){var statearr_15248 = state_15243;(statearr_15248[(8)] = inst_15223__$1);
return statearr_15248;
})();if(inst_15225)
{var statearr_15249_15271 = state_15243__$1;(statearr_15249_15271[(1)] = (5));
} else
{var statearr_15250_15272 = state_15243__$1;(statearr_15250_15272[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (6)))
{var state_15243__$1 = state_15243;var statearr_15251_15273 = state_15243__$1;(statearr_15251_15273[(2)] = null);
(statearr_15251_15273[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (3)))
{var inst_15240 = (state_15243[(2)]);var inst_15241 = cljs.core.async.close_BANG_.call(null,out);var state_15243__$1 = (function (){var statearr_15252 = state_15243;(statearr_15252[(9)] = inst_15240);
return statearr_15252;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15243__$1,inst_15241);
} else
{if((state_val_15244 === (2)))
{var state_15243__$1 = state_15243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15243__$1,(4),ch);
} else
{if((state_val_15244 === (11)))
{var inst_15223 = (state_15243[(8)]);var inst_15232 = (state_15243[(2)]);var inst_15220 = inst_15223;var state_15243__$1 = (function (){var statearr_15253 = state_15243;(statearr_15253[(7)] = inst_15220);
(statearr_15253[(10)] = inst_15232);
return statearr_15253;
})();var statearr_15254_15274 = state_15243__$1;(statearr_15254_15274[(2)] = null);
(statearr_15254_15274[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (9)))
{var inst_15223 = (state_15243[(8)]);var state_15243__$1 = state_15243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15243__$1,(11),out,inst_15223);
} else
{if((state_val_15244 === (5)))
{var inst_15220 = (state_15243[(7)]);var inst_15223 = (state_15243[(8)]);var inst_15227 = cljs.core._EQ_.call(null,inst_15223,inst_15220);var state_15243__$1 = state_15243;if(inst_15227)
{var statearr_15256_15275 = state_15243__$1;(statearr_15256_15275[(1)] = (8));
} else
{var statearr_15257_15276 = state_15243__$1;(statearr_15257_15276[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (10)))
{var inst_15235 = (state_15243[(2)]);var state_15243__$1 = state_15243;var statearr_15258_15277 = state_15243__$1;(statearr_15258_15277[(2)] = inst_15235);
(statearr_15258_15277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15244 === (8)))
{var inst_15220 = (state_15243[(7)]);var tmp15255 = inst_15220;var inst_15220__$1 = tmp15255;var state_15243__$1 = (function (){var statearr_15259 = state_15243;(statearr_15259[(7)] = inst_15220__$1);
return statearr_15259;
})();var statearr_15260_15278 = state_15243__$1;(statearr_15260_15278[(2)] = null);
(statearr_15260_15278[(1)] = (2));
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
});})(c__5849__auto___15268,out))
;return ((function (switch__5834__auto__,c__5849__auto___15268,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15264 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15264[(0)] = state_machine__5835__auto__);
(statearr_15264[(1)] = (1));
return statearr_15264;
});
var state_machine__5835__auto____1 = (function (state_15243){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15243);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15265){if((e15265 instanceof Object))
{var ex__5838__auto__ = e15265;var statearr_15266_15279 = state_15243;(statearr_15266_15279[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15280 = state_15243;
state_15243 = G__15280;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15243){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15268,out))
})();var state__5851__auto__ = (function (){var statearr_15267 = f__5850__auto__.call(null);(statearr_15267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15268);
return statearr_15267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15268,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15415 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15415,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15415,out){
return (function (state_15385){var state_val_15386 = (state_15385[(1)]);if((state_val_15386 === (7)))
{var inst_15381 = (state_15385[(2)]);var state_15385__$1 = state_15385;var statearr_15387_15416 = state_15385__$1;(statearr_15387_15416[(2)] = inst_15381);
(statearr_15387_15416[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (1)))
{var inst_15348 = (new Array(n));var inst_15349 = inst_15348;var inst_15350 = (0);var state_15385__$1 = (function (){var statearr_15388 = state_15385;(statearr_15388[(7)] = inst_15350);
(statearr_15388[(8)] = inst_15349);
return statearr_15388;
})();var statearr_15389_15417 = state_15385__$1;(statearr_15389_15417[(2)] = null);
(statearr_15389_15417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (4)))
{var inst_15353 = (state_15385[(9)]);var inst_15353__$1 = (state_15385[(2)]);var inst_15354 = (inst_15353__$1 == null);var inst_15355 = cljs.core.not.call(null,inst_15354);var state_15385__$1 = (function (){var statearr_15390 = state_15385;(statearr_15390[(9)] = inst_15353__$1);
return statearr_15390;
})();if(inst_15355)
{var statearr_15391_15418 = state_15385__$1;(statearr_15391_15418[(1)] = (5));
} else
{var statearr_15392_15419 = state_15385__$1;(statearr_15392_15419[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (15)))
{var inst_15375 = (state_15385[(2)]);var state_15385__$1 = state_15385;var statearr_15393_15420 = state_15385__$1;(statearr_15393_15420[(2)] = inst_15375);
(statearr_15393_15420[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (13)))
{var state_15385__$1 = state_15385;var statearr_15394_15421 = state_15385__$1;(statearr_15394_15421[(2)] = null);
(statearr_15394_15421[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (6)))
{var inst_15350 = (state_15385[(7)]);var inst_15371 = (inst_15350 > (0));var state_15385__$1 = state_15385;if(cljs.core.truth_(inst_15371))
{var statearr_15395_15422 = state_15385__$1;(statearr_15395_15422[(1)] = (12));
} else
{var statearr_15396_15423 = state_15385__$1;(statearr_15396_15423[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (3)))
{var inst_15383 = (state_15385[(2)]);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15385__$1,inst_15383);
} else
{if((state_val_15386 === (12)))
{var inst_15349 = (state_15385[(8)]);var inst_15373 = cljs.core.vec.call(null,inst_15349);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15385__$1,(15),out,inst_15373);
} else
{if((state_val_15386 === (2)))
{var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15385__$1,(4),ch);
} else
{if((state_val_15386 === (11)))
{var inst_15365 = (state_15385[(2)]);var inst_15366 = (new Array(n));var inst_15349 = inst_15366;var inst_15350 = (0);var state_15385__$1 = (function (){var statearr_15397 = state_15385;(statearr_15397[(7)] = inst_15350);
(statearr_15397[(10)] = inst_15365);
(statearr_15397[(8)] = inst_15349);
return statearr_15397;
})();var statearr_15398_15424 = state_15385__$1;(statearr_15398_15424[(2)] = null);
(statearr_15398_15424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (9)))
{var inst_15349 = (state_15385[(8)]);var inst_15363 = cljs.core.vec.call(null,inst_15349);var state_15385__$1 = state_15385;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15385__$1,(11),out,inst_15363);
} else
{if((state_val_15386 === (5)))
{var inst_15353 = (state_15385[(9)]);var inst_15358 = (state_15385[(11)]);var inst_15350 = (state_15385[(7)]);var inst_15349 = (state_15385[(8)]);var inst_15357 = (inst_15349[inst_15350] = inst_15353);var inst_15358__$1 = (inst_15350 + (1));var inst_15359 = (inst_15358__$1 < n);var state_15385__$1 = (function (){var statearr_15399 = state_15385;(statearr_15399[(12)] = inst_15357);
(statearr_15399[(11)] = inst_15358__$1);
return statearr_15399;
})();if(cljs.core.truth_(inst_15359))
{var statearr_15400_15425 = state_15385__$1;(statearr_15400_15425[(1)] = (8));
} else
{var statearr_15401_15426 = state_15385__$1;(statearr_15401_15426[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (14)))
{var inst_15378 = (state_15385[(2)]);var inst_15379 = cljs.core.async.close_BANG_.call(null,out);var state_15385__$1 = (function (){var statearr_15403 = state_15385;(statearr_15403[(13)] = inst_15378);
return statearr_15403;
})();var statearr_15404_15427 = state_15385__$1;(statearr_15404_15427[(2)] = inst_15379);
(statearr_15404_15427[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (10)))
{var inst_15369 = (state_15385[(2)]);var state_15385__$1 = state_15385;var statearr_15405_15428 = state_15385__$1;(statearr_15405_15428[(2)] = inst_15369);
(statearr_15405_15428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15386 === (8)))
{var inst_15358 = (state_15385[(11)]);var inst_15349 = (state_15385[(8)]);var tmp15402 = inst_15349;var inst_15349__$1 = tmp15402;var inst_15350 = inst_15358;var state_15385__$1 = (function (){var statearr_15406 = state_15385;(statearr_15406[(7)] = inst_15350);
(statearr_15406[(8)] = inst_15349__$1);
return statearr_15406;
})();var statearr_15407_15429 = state_15385__$1;(statearr_15407_15429[(2)] = null);
(statearr_15407_15429[(1)] = (2));
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
});})(c__5849__auto___15415,out))
;return ((function (switch__5834__auto__,c__5849__auto___15415,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15411[(0)] = state_machine__5835__auto__);
(statearr_15411[(1)] = (1));
return statearr_15411;
});
var state_machine__5835__auto____1 = (function (state_15385){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15385);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15412){if((e15412 instanceof Object))
{var ex__5838__auto__ = e15412;var statearr_15413_15430 = state_15385;(statearr_15413_15430[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15385);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15412;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15431 = state_15385;
state_15385 = G__15431;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15385){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15415,out))
})();var state__5851__auto__ = (function (){var statearr_15414 = f__5850__auto__.call(null);(statearr_15414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15415);
return statearr_15414;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15415,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15574,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15574,out){
return (function (state_15544){var state_val_15545 = (state_15544[(1)]);if((state_val_15545 === (7)))
{var inst_15540 = (state_15544[(2)]);var state_15544__$1 = state_15544;var statearr_15546_15575 = state_15544__$1;(statearr_15546_15575[(2)] = inst_15540);
(statearr_15546_15575[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (1)))
{var inst_15503 = [];var inst_15504 = inst_15503;var inst_15505 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15544__$1 = (function (){var statearr_15547 = state_15544;(statearr_15547[(7)] = inst_15505);
(statearr_15547[(8)] = inst_15504);
return statearr_15547;
})();var statearr_15548_15576 = state_15544__$1;(statearr_15548_15576[(2)] = null);
(statearr_15548_15576[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (4)))
{var inst_15508 = (state_15544[(9)]);var inst_15508__$1 = (state_15544[(2)]);var inst_15509 = (inst_15508__$1 == null);var inst_15510 = cljs.core.not.call(null,inst_15509);var state_15544__$1 = (function (){var statearr_15549 = state_15544;(statearr_15549[(9)] = inst_15508__$1);
return statearr_15549;
})();if(inst_15510)
{var statearr_15550_15577 = state_15544__$1;(statearr_15550_15577[(1)] = (5));
} else
{var statearr_15551_15578 = state_15544__$1;(statearr_15551_15578[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (15)))
{var inst_15534 = (state_15544[(2)]);var state_15544__$1 = state_15544;var statearr_15552_15579 = state_15544__$1;(statearr_15552_15579[(2)] = inst_15534);
(statearr_15552_15579[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (13)))
{var state_15544__$1 = state_15544;var statearr_15553_15580 = state_15544__$1;(statearr_15553_15580[(2)] = null);
(statearr_15553_15580[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (6)))
{var inst_15504 = (state_15544[(8)]);var inst_15529 = inst_15504.length;var inst_15530 = (inst_15529 > (0));var state_15544__$1 = state_15544;if(cljs.core.truth_(inst_15530))
{var statearr_15554_15581 = state_15544__$1;(statearr_15554_15581[(1)] = (12));
} else
{var statearr_15555_15582 = state_15544__$1;(statearr_15555_15582[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (3)))
{var inst_15542 = (state_15544[(2)]);var state_15544__$1 = state_15544;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15544__$1,inst_15542);
} else
{if((state_val_15545 === (12)))
{var inst_15504 = (state_15544[(8)]);var inst_15532 = cljs.core.vec.call(null,inst_15504);var state_15544__$1 = state_15544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15544__$1,(15),out,inst_15532);
} else
{if((state_val_15545 === (2)))
{var state_15544__$1 = state_15544;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15544__$1,(4),ch);
} else
{if((state_val_15545 === (11)))
{var inst_15512 = (state_15544[(10)]);var inst_15508 = (state_15544[(9)]);var inst_15522 = (state_15544[(2)]);var inst_15523 = [];var inst_15524 = inst_15523.push(inst_15508);var inst_15504 = inst_15523;var inst_15505 = inst_15512;var state_15544__$1 = (function (){var statearr_15556 = state_15544;(statearr_15556[(11)] = inst_15522);
(statearr_15556[(12)] = inst_15524);
(statearr_15556[(7)] = inst_15505);
(statearr_15556[(8)] = inst_15504);
return statearr_15556;
})();var statearr_15557_15583 = state_15544__$1;(statearr_15557_15583[(2)] = null);
(statearr_15557_15583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (9)))
{var inst_15504 = (state_15544[(8)]);var inst_15520 = cljs.core.vec.call(null,inst_15504);var state_15544__$1 = state_15544;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15544__$1,(11),out,inst_15520);
} else
{if((state_val_15545 === (5)))
{var inst_15512 = (state_15544[(10)]);var inst_15505 = (state_15544[(7)]);var inst_15508 = (state_15544[(9)]);var inst_15512__$1 = f.call(null,inst_15508);var inst_15513 = cljs.core._EQ_.call(null,inst_15512__$1,inst_15505);var inst_15514 = cljs.core.keyword_identical_QMARK_.call(null,inst_15505,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15515 = (inst_15513) || (inst_15514);var state_15544__$1 = (function (){var statearr_15558 = state_15544;(statearr_15558[(10)] = inst_15512__$1);
return statearr_15558;
})();if(cljs.core.truth_(inst_15515))
{var statearr_15559_15584 = state_15544__$1;(statearr_15559_15584[(1)] = (8));
} else
{var statearr_15560_15585 = state_15544__$1;(statearr_15560_15585[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (14)))
{var inst_15537 = (state_15544[(2)]);var inst_15538 = cljs.core.async.close_BANG_.call(null,out);var state_15544__$1 = (function (){var statearr_15562 = state_15544;(statearr_15562[(13)] = inst_15537);
return statearr_15562;
})();var statearr_15563_15586 = state_15544__$1;(statearr_15563_15586[(2)] = inst_15538);
(statearr_15563_15586[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (10)))
{var inst_15527 = (state_15544[(2)]);var state_15544__$1 = state_15544;var statearr_15564_15587 = state_15544__$1;(statearr_15564_15587[(2)] = inst_15527);
(statearr_15564_15587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15545 === (8)))
{var inst_15512 = (state_15544[(10)]);var inst_15504 = (state_15544[(8)]);var inst_15508 = (state_15544[(9)]);var inst_15517 = inst_15504.push(inst_15508);var tmp15561 = inst_15504;var inst_15504__$1 = tmp15561;var inst_15505 = inst_15512;var state_15544__$1 = (function (){var statearr_15565 = state_15544;(statearr_15565[(14)] = inst_15517);
(statearr_15565[(7)] = inst_15505);
(statearr_15565[(8)] = inst_15504__$1);
return statearr_15565;
})();var statearr_15566_15588 = state_15544__$1;(statearr_15566_15588[(2)] = null);
(statearr_15566_15588[(1)] = (2));
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
});})(c__5849__auto___15574,out))
;return ((function (switch__5834__auto__,c__5849__auto___15574,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15570[(0)] = state_machine__5835__auto__);
(statearr_15570[(1)] = (1));
return statearr_15570;
});
var state_machine__5835__auto____1 = (function (state_15544){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15544);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15571){if((e15571 instanceof Object))
{var ex__5838__auto__ = e15571;var statearr_15572_15589 = state_15544;(statearr_15572_15589[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15544);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15571;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15590 = state_15544;
state_15544 = G__15590;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15544){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15574,out))
})();var state__5851__auto__ = (function (){var statearr_15573 = f__5850__auto__.call(null);(statearr_15573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15574);
return statearr_15573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15574,out))
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