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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12720 = (function (f,fn_handler,meta12721){
this.f = f;
this.fn_handler = fn_handler;
this.meta12721 = meta12721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12720.cljs$lang$type = true;
cljs.core.async.t12720.cljs$lang$ctorStr = "cljs.core.async/t12720";
cljs.core.async.t12720.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12720");
});
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12722){var self__ = this;
var _12722__$1 = this;return self__.meta12721;
});
cljs.core.async.t12720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12722,meta12721__$1){var self__ = this;
var _12722__$1 = this;return (new cljs.core.async.t12720(self__.f,self__.fn_handler,meta12721__$1));
});
cljs.core.async.__GT_t12720 = (function __GT_t12720(f__$1,fn_handler__$1,meta12721){return (new cljs.core.async.t12720(f__$1,fn_handler__$1,meta12721));
});
}
return (new cljs.core.async.t12720(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12724 = buff;if(G__12724)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12724.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12724.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12724);
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
{var val_12725 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12725);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12725,ret){
return (function (){return fn1.call(null,val_12725);
});})(val_12725,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12726 = n;var x_12727 = (0);while(true){
if((x_12727 < n__4510__auto___12726))
{(a[x_12727] = (0));
{
var G__12728 = (x_12727 + (1));
x_12727 = G__12728;
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
var G__12729 = (i + (1));
i = G__12729;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12733 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12733 = (function (flag,alt_flag,meta12734){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12734 = meta12734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12733.cljs$lang$type = true;
cljs.core.async.t12733.cljs$lang$ctorStr = "cljs.core.async/t12733";
cljs.core.async.t12733.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12733");
});})(flag))
;
cljs.core.async.t12733.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12735){var self__ = this;
var _12735__$1 = this;return self__.meta12734;
});})(flag))
;
cljs.core.async.t12733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12735,meta12734__$1){var self__ = this;
var _12735__$1 = this;return (new cljs.core.async.t12733(self__.flag,self__.alt_flag,meta12734__$1));
});})(flag))
;
cljs.core.async.__GT_t12733 = ((function (flag){
return (function __GT_t12733(flag__$1,alt_flag__$1,meta12734){return (new cljs.core.async.t12733(flag__$1,alt_flag__$1,meta12734));
});})(flag))
;
}
return (new cljs.core.async.t12733(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12739 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12739 = (function (cb,flag,alt_handler,meta12740){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12740 = meta12740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12739.cljs$lang$type = true;
cljs.core.async.t12739.cljs$lang$ctorStr = "cljs.core.async/t12739";
cljs.core.async.t12739.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12739");
});
cljs.core.async.t12739.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12741){var self__ = this;
var _12741__$1 = this;return self__.meta12740;
});
cljs.core.async.t12739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12741,meta12740__$1){var self__ = this;
var _12741__$1 = this;return (new cljs.core.async.t12739(self__.cb,self__.flag,self__.alt_handler,meta12740__$1));
});
cljs.core.async.__GT_t12739 = (function __GT_t12739(cb__$1,flag__$1,alt_handler__$1,meta12740){return (new cljs.core.async.t12739(cb__$1,flag__$1,alt_handler__$1,meta12740));
});
}
return (new cljs.core.async.t12739(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12742_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12742_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12743_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12743_SHARP_,port], null));
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
var G__12744 = (i + (1));
i = G__12744;
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
var alts_BANG___delegate = function (ports,p__12745){var map__12747 = p__12745;var map__12747__$1 = ((cljs.core.seq_QMARK_.call(null,map__12747))?cljs.core.apply.call(null,cljs.core.hash_map,map__12747):map__12747);var opts = map__12747__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12745 = null;if (arguments.length > 1) {
  p__12745 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12745);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12748){
var ports = cljs.core.first(arglist__12748);
var p__12745 = cljs.core.rest(arglist__12748);
return alts_BANG___delegate(ports,p__12745);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5849__auto___12843 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___12843){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___12843){
return (function (state_12819){var state_val_12820 = (state_12819[(1)]);if((state_val_12820 === (7)))
{var inst_12815 = (state_12819[(2)]);var state_12819__$1 = state_12819;var statearr_12821_12844 = state_12819__$1;(statearr_12821_12844[(2)] = inst_12815);
(statearr_12821_12844[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (1)))
{var state_12819__$1 = state_12819;var statearr_12822_12845 = state_12819__$1;(statearr_12822_12845[(2)] = null);
(statearr_12822_12845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (4)))
{var inst_12798 = (state_12819[(7)]);var inst_12798__$1 = (state_12819[(2)]);var inst_12799 = (inst_12798__$1 == null);var state_12819__$1 = (function (){var statearr_12823 = state_12819;(statearr_12823[(7)] = inst_12798__$1);
return statearr_12823;
})();if(cljs.core.truth_(inst_12799))
{var statearr_12824_12846 = state_12819__$1;(statearr_12824_12846[(1)] = (5));
} else
{var statearr_12825_12847 = state_12819__$1;(statearr_12825_12847[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (13)))
{var state_12819__$1 = state_12819;var statearr_12826_12848 = state_12819__$1;(statearr_12826_12848[(2)] = null);
(statearr_12826_12848[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (6)))
{var inst_12798 = (state_12819[(7)]);var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12819__$1,(11),to,inst_12798);
} else
{if((state_val_12820 === (3)))
{var inst_12817 = (state_12819[(2)]);var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12819__$1,inst_12817);
} else
{if((state_val_12820 === (12)))
{var state_12819__$1 = state_12819;var statearr_12827_12849 = state_12819__$1;(statearr_12827_12849[(2)] = null);
(statearr_12827_12849[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (2)))
{var state_12819__$1 = state_12819;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12819__$1,(4),from);
} else
{if((state_val_12820 === (11)))
{var inst_12808 = (state_12819[(2)]);var state_12819__$1 = state_12819;if(cljs.core.truth_(inst_12808))
{var statearr_12828_12850 = state_12819__$1;(statearr_12828_12850[(1)] = (12));
} else
{var statearr_12829_12851 = state_12819__$1;(statearr_12829_12851[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (9)))
{var state_12819__$1 = state_12819;var statearr_12830_12852 = state_12819__$1;(statearr_12830_12852[(2)] = null);
(statearr_12830_12852[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (5)))
{var state_12819__$1 = state_12819;if(cljs.core.truth_(close_QMARK_))
{var statearr_12831_12853 = state_12819__$1;(statearr_12831_12853[(1)] = (8));
} else
{var statearr_12832_12854 = state_12819__$1;(statearr_12832_12854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (14)))
{var inst_12813 = (state_12819[(2)]);var state_12819__$1 = state_12819;var statearr_12833_12855 = state_12819__$1;(statearr_12833_12855[(2)] = inst_12813);
(statearr_12833_12855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (10)))
{var inst_12805 = (state_12819[(2)]);var state_12819__$1 = state_12819;var statearr_12834_12856 = state_12819__$1;(statearr_12834_12856[(2)] = inst_12805);
(statearr_12834_12856[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12820 === (8)))
{var inst_12802 = cljs.core.async.close_BANG_.call(null,to);var state_12819__$1 = state_12819;var statearr_12835_12857 = state_12819__$1;(statearr_12835_12857[(2)] = inst_12802);
(statearr_12835_12857[(1)] = (10));
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
});})(c__5849__auto___12843))
;return ((function (switch__5834__auto__,c__5849__auto___12843){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_12839 = [null,null,null,null,null,null,null,null];(statearr_12839[(0)] = state_machine__5835__auto__);
(statearr_12839[(1)] = (1));
return statearr_12839;
});
var state_machine__5835__auto____1 = (function (state_12819){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_12819);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e12840){if((e12840 instanceof Object))
{var ex__5838__auto__ = e12840;var statearr_12841_12858 = state_12819;(statearr_12841_12858[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12840;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12859 = state_12819;
state_12819 = G__12859;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_12819){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_12819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___12843))
})();var state__5851__auto__ = (function (){var statearr_12842 = f__5850__auto__.call(null);(statearr_12842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___12843);
return statearr_12842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___12843))
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
return (function (p__13043){var vec__13044 = p__13043;var v = cljs.core.nth.call(null,vec__13044,(0),null);var p = cljs.core.nth.call(null,vec__13044,(1),null);var job = vec__13044;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5849__auto___13226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13226,res,vec__13044,v,p,job,jobs,results){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13226,res,vec__13044,v,p,job,jobs,results){
return (function (state_13049){var state_val_13050 = (state_13049[(1)]);if((state_val_13050 === (2)))
{var inst_13046 = (state_13049[(2)]);var inst_13047 = cljs.core.async.close_BANG_.call(null,res);var state_13049__$1 = (function (){var statearr_13051 = state_13049;(statearr_13051[(7)] = inst_13046);
return statearr_13051;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13049__$1,inst_13047);
} else
{if((state_val_13050 === (1)))
{var state_13049__$1 = state_13049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13049__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5849__auto___13226,res,vec__13044,v,p,job,jobs,results))
;return ((function (switch__5834__auto__,c__5849__auto___13226,res,vec__13044,v,p,job,jobs,results){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13055 = [null,null,null,null,null,null,null,null];(statearr_13055[(0)] = state_machine__5835__auto__);
(statearr_13055[(1)] = (1));
return statearr_13055;
});
var state_machine__5835__auto____1 = (function (state_13049){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13056){if((e13056 instanceof Object))
{var ex__5838__auto__ = e13056;var statearr_13057_13227 = state_13049;(statearr_13057_13227[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13049);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13228 = state_13049;
state_13049 = G__13228;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13049){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13226,res,vec__13044,v,p,job,jobs,results))
})();var state__5851__auto__ = (function (){var statearr_13058 = f__5850__auto__.call(null);(statearr_13058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13226);
return statearr_13058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13226,res,vec__13044,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__13059){var vec__13060 = p__13059;var v = cljs.core.nth.call(null,vec__13060,(0),null);var p = cljs.core.nth.call(null,vec__13060,(1),null);var job = vec__13060;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___13229 = n;var __13230 = (0);while(true){
if((__13230 < n__4510__auto___13229))
{var G__13061_13231 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__13061_13231) {
case "async":
var c__5849__auto___13233 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13230,c__5849__auto___13233,G__13061_13231,n__4510__auto___13229,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (__13230,c__5849__auto___13233,G__13061_13231,n__4510__auto___13229,jobs,results,process,async){
return (function (state_13074){var state_val_13075 = (state_13074[(1)]);if((state_val_13075 === (7)))
{var inst_13070 = (state_13074[(2)]);var state_13074__$1 = state_13074;var statearr_13076_13234 = state_13074__$1;(statearr_13076_13234[(2)] = inst_13070);
(statearr_13076_13234[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13075 === (6)))
{var state_13074__$1 = state_13074;var statearr_13077_13235 = state_13074__$1;(statearr_13077_13235[(2)] = null);
(statearr_13077_13235[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13075 === (5)))
{var state_13074__$1 = state_13074;var statearr_13078_13236 = state_13074__$1;(statearr_13078_13236[(2)] = null);
(statearr_13078_13236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13075 === (4)))
{var inst_13064 = (state_13074[(2)]);var inst_13065 = async.call(null,inst_13064);var state_13074__$1 = state_13074;if(cljs.core.truth_(inst_13065))
{var statearr_13079_13237 = state_13074__$1;(statearr_13079_13237[(1)] = (5));
} else
{var statearr_13080_13238 = state_13074__$1;(statearr_13080_13238[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13075 === (3)))
{var inst_13072 = (state_13074[(2)]);var state_13074__$1 = state_13074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13074__$1,inst_13072);
} else
{if((state_val_13075 === (2)))
{var state_13074__$1 = state_13074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13074__$1,(4),jobs);
} else
{if((state_val_13075 === (1)))
{var state_13074__$1 = state_13074;var statearr_13081_13239 = state_13074__$1;(statearr_13081_13239[(2)] = null);
(statearr_13081_13239[(1)] = (2));
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
});})(__13230,c__5849__auto___13233,G__13061_13231,n__4510__auto___13229,jobs,results,process,async))
;return ((function (__13230,switch__5834__auto__,c__5849__auto___13233,G__13061_13231,n__4510__auto___13229,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13085 = [null,null,null,null,null,null,null];(statearr_13085[(0)] = state_machine__5835__auto__);
(statearr_13085[(1)] = (1));
return statearr_13085;
});
var state_machine__5835__auto____1 = (function (state_13074){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13074);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13086){if((e13086 instanceof Object))
{var ex__5838__auto__ = e13086;var statearr_13087_13240 = state_13074;(statearr_13087_13240[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13086;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13241 = state_13074;
state_13074 = G__13241;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13074){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(__13230,switch__5834__auto__,c__5849__auto___13233,G__13061_13231,n__4510__auto___13229,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_13088 = f__5850__auto__.call(null);(statearr_13088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13233);
return statearr_13088;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(__13230,c__5849__auto___13233,G__13061_13231,n__4510__auto___13229,jobs,results,process,async))
);

break;
case "compute":
var c__5849__auto___13242 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__13230,c__5849__auto___13242,G__13061_13231,n__4510__auto___13229,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (__13230,c__5849__auto___13242,G__13061_13231,n__4510__auto___13229,jobs,results,process,async){
return (function (state_13101){var state_val_13102 = (state_13101[(1)]);if((state_val_13102 === (7)))
{var inst_13097 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13103_13243 = state_13101__$1;(statearr_13103_13243[(2)] = inst_13097);
(statearr_13103_13243[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (6)))
{var state_13101__$1 = state_13101;var statearr_13104_13244 = state_13101__$1;(statearr_13104_13244[(2)] = null);
(statearr_13104_13244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (5)))
{var state_13101__$1 = state_13101;var statearr_13105_13245 = state_13101__$1;(statearr_13105_13245[(2)] = null);
(statearr_13105_13245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (4)))
{var inst_13091 = (state_13101[(2)]);var inst_13092 = process.call(null,inst_13091);var state_13101__$1 = state_13101;if(cljs.core.truth_(inst_13092))
{var statearr_13106_13246 = state_13101__$1;(statearr_13106_13246[(1)] = (5));
} else
{var statearr_13107_13247 = state_13101__$1;(statearr_13107_13247[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (3)))
{var inst_13099 = (state_13101[(2)]);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13101__$1,inst_13099);
} else
{if((state_val_13102 === (2)))
{var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13101__$1,(4),jobs);
} else
{if((state_val_13102 === (1)))
{var state_13101__$1 = state_13101;var statearr_13108_13248 = state_13101__$1;(statearr_13108_13248[(2)] = null);
(statearr_13108_13248[(1)] = (2));
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
});})(__13230,c__5849__auto___13242,G__13061_13231,n__4510__auto___13229,jobs,results,process,async))
;return ((function (__13230,switch__5834__auto__,c__5849__auto___13242,G__13061_13231,n__4510__auto___13229,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13112 = [null,null,null,null,null,null,null];(statearr_13112[(0)] = state_machine__5835__auto__);
(statearr_13112[(1)] = (1));
return statearr_13112;
});
var state_machine__5835__auto____1 = (function (state_13101){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13113){if((e13113 instanceof Object))
{var ex__5838__auto__ = e13113;var statearr_13114_13249 = state_13101;(statearr_13114_13249[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13113;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13250 = state_13101;
state_13101 = G__13250;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13101){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(__13230,switch__5834__auto__,c__5849__auto___13242,G__13061_13231,n__4510__auto___13229,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_13115 = f__5850__auto__.call(null);(statearr_13115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13242);
return statearr_13115;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(__13230,c__5849__auto___13242,G__13061_13231,n__4510__auto___13229,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__13251 = (__13230 + (1));
__13230 = G__13251;
continue;
}
} else
{}
break;
}
var c__5849__auto___13252 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13252,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13252,jobs,results,process,async){
return (function (state_13137){var state_val_13138 = (state_13137[(1)]);if((state_val_13138 === (9)))
{var inst_13130 = (state_13137[(2)]);var state_13137__$1 = (function (){var statearr_13139 = state_13137;(statearr_13139[(7)] = inst_13130);
return statearr_13139;
})();var statearr_13140_13253 = state_13137__$1;(statearr_13140_13253[(2)] = null);
(statearr_13140_13253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13138 === (8)))
{var inst_13123 = (state_13137[(8)]);var inst_13128 = (state_13137[(2)]);var state_13137__$1 = (function (){var statearr_13141 = state_13137;(statearr_13141[(9)] = inst_13128);
return statearr_13141;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13137__$1,(9),results,inst_13123);
} else
{if((state_val_13138 === (7)))
{var inst_13133 = (state_13137[(2)]);var state_13137__$1 = state_13137;var statearr_13142_13254 = state_13137__$1;(statearr_13142_13254[(2)] = inst_13133);
(statearr_13142_13254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13138 === (6)))
{var inst_13118 = (state_13137[(10)]);var inst_13123 = (state_13137[(8)]);var inst_13123__$1 = cljs.core.async.chan.call(null,(1));var inst_13124 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13125 = [inst_13118,inst_13123__$1];var inst_13126 = (new cljs.core.PersistentVector(null,2,(5),inst_13124,inst_13125,null));var state_13137__$1 = (function (){var statearr_13143 = state_13137;(statearr_13143[(8)] = inst_13123__$1);
return statearr_13143;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13137__$1,(8),jobs,inst_13126);
} else
{if((state_val_13138 === (5)))
{var inst_13121 = cljs.core.async.close_BANG_.call(null,jobs);var state_13137__$1 = state_13137;var statearr_13144_13255 = state_13137__$1;(statearr_13144_13255[(2)] = inst_13121);
(statearr_13144_13255[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13138 === (4)))
{var inst_13118 = (state_13137[(10)]);var inst_13118__$1 = (state_13137[(2)]);var inst_13119 = (inst_13118__$1 == null);var state_13137__$1 = (function (){var statearr_13145 = state_13137;(statearr_13145[(10)] = inst_13118__$1);
return statearr_13145;
})();if(cljs.core.truth_(inst_13119))
{var statearr_13146_13256 = state_13137__$1;(statearr_13146_13256[(1)] = (5));
} else
{var statearr_13147_13257 = state_13137__$1;(statearr_13147_13257[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13138 === (3)))
{var inst_13135 = (state_13137[(2)]);var state_13137__$1 = state_13137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13137__$1,inst_13135);
} else
{if((state_val_13138 === (2)))
{var state_13137__$1 = state_13137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13137__$1,(4),from);
} else
{if((state_val_13138 === (1)))
{var state_13137__$1 = state_13137;var statearr_13148_13258 = state_13137__$1;(statearr_13148_13258[(2)] = null);
(statearr_13148_13258[(1)] = (2));
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
});})(c__5849__auto___13252,jobs,results,process,async))
;return ((function (switch__5834__auto__,c__5849__auto___13252,jobs,results,process,async){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13152 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13152[(0)] = state_machine__5835__auto__);
(statearr_13152[(1)] = (1));
return statearr_13152;
});
var state_machine__5835__auto____1 = (function (state_13137){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13137);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13153){if((e13153 instanceof Object))
{var ex__5838__auto__ = e13153;var statearr_13154_13259 = state_13137;(statearr_13154_13259[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13153;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13260 = state_13137;
state_13137 = G__13260;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13137){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13252,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_13155 = f__5850__auto__.call(null);(statearr_13155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13252);
return statearr_13155;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13252,jobs,results,process,async))
);
var c__5849__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto__,jobs,results,process,async){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto__,jobs,results,process,async){
return (function (state_13193){var state_val_13194 = (state_13193[(1)]);if((state_val_13194 === (7)))
{var inst_13189 = (state_13193[(2)]);var state_13193__$1 = state_13193;var statearr_13195_13261 = state_13193__$1;(statearr_13195_13261[(2)] = inst_13189);
(statearr_13195_13261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (20)))
{var state_13193__$1 = state_13193;var statearr_13196_13262 = state_13193__$1;(statearr_13196_13262[(2)] = null);
(statearr_13196_13262[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (1)))
{var state_13193__$1 = state_13193;var statearr_13197_13263 = state_13193__$1;(statearr_13197_13263[(2)] = null);
(statearr_13197_13263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (4)))
{var inst_13158 = (state_13193[(7)]);var inst_13158__$1 = (state_13193[(2)]);var inst_13159 = (inst_13158__$1 == null);var state_13193__$1 = (function (){var statearr_13198 = state_13193;(statearr_13198[(7)] = inst_13158__$1);
return statearr_13198;
})();if(cljs.core.truth_(inst_13159))
{var statearr_13199_13264 = state_13193__$1;(statearr_13199_13264[(1)] = (5));
} else
{var statearr_13200_13265 = state_13193__$1;(statearr_13200_13265[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (15)))
{var inst_13171 = (state_13193[(8)]);var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13193__$1,(18),to,inst_13171);
} else
{if((state_val_13194 === (21)))
{var inst_13184 = (state_13193[(2)]);var state_13193__$1 = state_13193;var statearr_13201_13266 = state_13193__$1;(statearr_13201_13266[(2)] = inst_13184);
(statearr_13201_13266[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (13)))
{var inst_13186 = (state_13193[(2)]);var state_13193__$1 = (function (){var statearr_13202 = state_13193;(statearr_13202[(9)] = inst_13186);
return statearr_13202;
})();var statearr_13203_13267 = state_13193__$1;(statearr_13203_13267[(2)] = null);
(statearr_13203_13267[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (6)))
{var inst_13158 = (state_13193[(7)]);var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13193__$1,(11),inst_13158);
} else
{if((state_val_13194 === (17)))
{var inst_13179 = (state_13193[(2)]);var state_13193__$1 = state_13193;if(cljs.core.truth_(inst_13179))
{var statearr_13204_13268 = state_13193__$1;(statearr_13204_13268[(1)] = (19));
} else
{var statearr_13205_13269 = state_13193__$1;(statearr_13205_13269[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (3)))
{var inst_13191 = (state_13193[(2)]);var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13193__$1,inst_13191);
} else
{if((state_val_13194 === (12)))
{var inst_13168 = (state_13193[(10)]);var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13193__$1,(14),inst_13168);
} else
{if((state_val_13194 === (2)))
{var state_13193__$1 = state_13193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13193__$1,(4),results);
} else
{if((state_val_13194 === (19)))
{var state_13193__$1 = state_13193;var statearr_13206_13270 = state_13193__$1;(statearr_13206_13270[(2)] = null);
(statearr_13206_13270[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (11)))
{var inst_13168 = (state_13193[(2)]);var state_13193__$1 = (function (){var statearr_13207 = state_13193;(statearr_13207[(10)] = inst_13168);
return statearr_13207;
})();var statearr_13208_13271 = state_13193__$1;(statearr_13208_13271[(2)] = null);
(statearr_13208_13271[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (9)))
{var state_13193__$1 = state_13193;var statearr_13209_13272 = state_13193__$1;(statearr_13209_13272[(2)] = null);
(statearr_13209_13272[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (5)))
{var state_13193__$1 = state_13193;if(cljs.core.truth_(close_QMARK_))
{var statearr_13210_13273 = state_13193__$1;(statearr_13210_13273[(1)] = (8));
} else
{var statearr_13211_13274 = state_13193__$1;(statearr_13211_13274[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (14)))
{var inst_13173 = (state_13193[(11)]);var inst_13171 = (state_13193[(8)]);var inst_13171__$1 = (state_13193[(2)]);var inst_13172 = (inst_13171__$1 == null);var inst_13173__$1 = cljs.core.not.call(null,inst_13172);var state_13193__$1 = (function (){var statearr_13212 = state_13193;(statearr_13212[(11)] = inst_13173__$1);
(statearr_13212[(8)] = inst_13171__$1);
return statearr_13212;
})();if(inst_13173__$1)
{var statearr_13213_13275 = state_13193__$1;(statearr_13213_13275[(1)] = (15));
} else
{var statearr_13214_13276 = state_13193__$1;(statearr_13214_13276[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (16)))
{var inst_13173 = (state_13193[(11)]);var state_13193__$1 = state_13193;var statearr_13215_13277 = state_13193__$1;(statearr_13215_13277[(2)] = inst_13173);
(statearr_13215_13277[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (10)))
{var inst_13165 = (state_13193[(2)]);var state_13193__$1 = state_13193;var statearr_13216_13278 = state_13193__$1;(statearr_13216_13278[(2)] = inst_13165);
(statearr_13216_13278[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (18)))
{var inst_13176 = (state_13193[(2)]);var state_13193__$1 = state_13193;var statearr_13217_13279 = state_13193__$1;(statearr_13217_13279[(2)] = inst_13176);
(statearr_13217_13279[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13194 === (8)))
{var inst_13162 = cljs.core.async.close_BANG_.call(null,to);var state_13193__$1 = state_13193;var statearr_13218_13280 = state_13193__$1;(statearr_13218_13280[(2)] = inst_13162);
(statearr_13218_13280[(1)] = (10));
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
var state_machine__5835__auto____0 = (function (){var statearr_13222 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13222[(0)] = state_machine__5835__auto__);
(statearr_13222[(1)] = (1));
return statearr_13222;
});
var state_machine__5835__auto____1 = (function (state_13193){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13223){if((e13223 instanceof Object))
{var ex__5838__auto__ = e13223;var statearr_13224_13281 = state_13193;(statearr_13224_13281[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13223;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13282 = state_13193;
state_13193 = G__13282;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13193){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__,jobs,results,process,async))
})();var state__5851__auto__ = (function (){var statearr_13225 = f__5850__auto__.call(null);(statearr_13225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13225;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5849__auto___13383 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___13383,tc,fc){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___13383,tc,fc){
return (function (state_13358){var state_val_13359 = (state_13358[(1)]);if((state_val_13359 === (7)))
{var inst_13354 = (state_13358[(2)]);var state_13358__$1 = state_13358;var statearr_13360_13384 = state_13358__$1;(statearr_13360_13384[(2)] = inst_13354);
(statearr_13360_13384[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (1)))
{var state_13358__$1 = state_13358;var statearr_13361_13385 = state_13358__$1;(statearr_13361_13385[(2)] = null);
(statearr_13361_13385[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (4)))
{var inst_13335 = (state_13358[(7)]);var inst_13335__$1 = (state_13358[(2)]);var inst_13336 = (inst_13335__$1 == null);var state_13358__$1 = (function (){var statearr_13362 = state_13358;(statearr_13362[(7)] = inst_13335__$1);
return statearr_13362;
})();if(cljs.core.truth_(inst_13336))
{var statearr_13363_13386 = state_13358__$1;(statearr_13363_13386[(1)] = (5));
} else
{var statearr_13364_13387 = state_13358__$1;(statearr_13364_13387[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (13)))
{var state_13358__$1 = state_13358;var statearr_13365_13388 = state_13358__$1;(statearr_13365_13388[(2)] = null);
(statearr_13365_13388[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (6)))
{var inst_13335 = (state_13358[(7)]);var inst_13341 = p.call(null,inst_13335);var state_13358__$1 = state_13358;if(cljs.core.truth_(inst_13341))
{var statearr_13366_13389 = state_13358__$1;(statearr_13366_13389[(1)] = (9));
} else
{var statearr_13367_13390 = state_13358__$1;(statearr_13367_13390[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (3)))
{var inst_13356 = (state_13358[(2)]);var state_13358__$1 = state_13358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13358__$1,inst_13356);
} else
{if((state_val_13359 === (12)))
{var state_13358__$1 = state_13358;var statearr_13368_13391 = state_13358__$1;(statearr_13368_13391[(2)] = null);
(statearr_13368_13391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (2)))
{var state_13358__$1 = state_13358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13358__$1,(4),ch);
} else
{if((state_val_13359 === (11)))
{var inst_13335 = (state_13358[(7)]);var inst_13345 = (state_13358[(2)]);var state_13358__$1 = state_13358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13358__$1,(8),inst_13345,inst_13335);
} else
{if((state_val_13359 === (9)))
{var state_13358__$1 = state_13358;var statearr_13369_13392 = state_13358__$1;(statearr_13369_13392[(2)] = tc);
(statearr_13369_13392[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (5)))
{var inst_13338 = cljs.core.async.close_BANG_.call(null,tc);var inst_13339 = cljs.core.async.close_BANG_.call(null,fc);var state_13358__$1 = (function (){var statearr_13370 = state_13358;(statearr_13370[(8)] = inst_13338);
return statearr_13370;
})();var statearr_13371_13393 = state_13358__$1;(statearr_13371_13393[(2)] = inst_13339);
(statearr_13371_13393[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (14)))
{var inst_13352 = (state_13358[(2)]);var state_13358__$1 = state_13358;var statearr_13372_13394 = state_13358__$1;(statearr_13372_13394[(2)] = inst_13352);
(statearr_13372_13394[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (10)))
{var state_13358__$1 = state_13358;var statearr_13373_13395 = state_13358__$1;(statearr_13373_13395[(2)] = fc);
(statearr_13373_13395[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13359 === (8)))
{var inst_13347 = (state_13358[(2)]);var state_13358__$1 = state_13358;if(cljs.core.truth_(inst_13347))
{var statearr_13374_13396 = state_13358__$1;(statearr_13374_13396[(1)] = (12));
} else
{var statearr_13375_13397 = state_13358__$1;(statearr_13375_13397[(1)] = (13));
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
});})(c__5849__auto___13383,tc,fc))
;return ((function (switch__5834__auto__,c__5849__auto___13383,tc,fc){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_13379 = [null,null,null,null,null,null,null,null,null];(statearr_13379[(0)] = state_machine__5835__auto__);
(statearr_13379[(1)] = (1));
return statearr_13379;
});
var state_machine__5835__auto____1 = (function (state_13358){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13380){if((e13380 instanceof Object))
{var ex__5838__auto__ = e13380;var statearr_13381_13398 = state_13358;(statearr_13381_13398[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13358);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13399 = state_13358;
state_13358 = G__13399;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13358){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___13383,tc,fc))
})();var state__5851__auto__ = (function (){var statearr_13382 = f__5850__auto__.call(null);(statearr_13382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___13383);
return statearr_13382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___13383,tc,fc))
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
return (function (state_13446){var state_val_13447 = (state_13446[(1)]);if((state_val_13447 === (7)))
{var inst_13442 = (state_13446[(2)]);var state_13446__$1 = state_13446;var statearr_13448_13464 = state_13446__$1;(statearr_13448_13464[(2)] = inst_13442);
(statearr_13448_13464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13447 === (6)))
{var inst_13432 = (state_13446[(7)]);var inst_13435 = (state_13446[(8)]);var inst_13439 = f.call(null,inst_13432,inst_13435);var inst_13432__$1 = inst_13439;var state_13446__$1 = (function (){var statearr_13449 = state_13446;(statearr_13449[(7)] = inst_13432__$1);
return statearr_13449;
})();var statearr_13450_13465 = state_13446__$1;(statearr_13450_13465[(2)] = null);
(statearr_13450_13465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13447 === (5)))
{var inst_13432 = (state_13446[(7)]);var state_13446__$1 = state_13446;var statearr_13451_13466 = state_13446__$1;(statearr_13451_13466[(2)] = inst_13432);
(statearr_13451_13466[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13447 === (4)))
{var inst_13435 = (state_13446[(8)]);var inst_13435__$1 = (state_13446[(2)]);var inst_13436 = (inst_13435__$1 == null);var state_13446__$1 = (function (){var statearr_13452 = state_13446;(statearr_13452[(8)] = inst_13435__$1);
return statearr_13452;
})();if(cljs.core.truth_(inst_13436))
{var statearr_13453_13467 = state_13446__$1;(statearr_13453_13467[(1)] = (5));
} else
{var statearr_13454_13468 = state_13446__$1;(statearr_13454_13468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13447 === (3)))
{var inst_13444 = (state_13446[(2)]);var state_13446__$1 = state_13446;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13446__$1,inst_13444);
} else
{if((state_val_13447 === (2)))
{var state_13446__$1 = state_13446;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13446__$1,(4),ch);
} else
{if((state_val_13447 === (1)))
{var inst_13432 = init;var state_13446__$1 = (function (){var statearr_13455 = state_13446;(statearr_13455[(7)] = inst_13432);
return statearr_13455;
})();var statearr_13456_13469 = state_13446__$1;(statearr_13456_13469[(2)] = null);
(statearr_13456_13469[(1)] = (2));
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
var state_machine__5835__auto____0 = (function (){var statearr_13460 = [null,null,null,null,null,null,null,null,null];(statearr_13460[(0)] = state_machine__5835__auto__);
(statearr_13460[(1)] = (1));
return statearr_13460;
});
var state_machine__5835__auto____1 = (function (state_13446){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13446);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13461){if((e13461 instanceof Object))
{var ex__5838__auto__ = e13461;var statearr_13462_13470 = state_13446;(statearr_13462_13470[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13446);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13471 = state_13446;
state_13446 = G__13471;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13446){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_13463 = f__5850__auto__.call(null);(statearr_13463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13463;
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
return (function (state_13545){var state_val_13546 = (state_13545[(1)]);if((state_val_13546 === (7)))
{var inst_13527 = (state_13545[(2)]);var state_13545__$1 = state_13545;var statearr_13547_13570 = state_13545__$1;(statearr_13547_13570[(2)] = inst_13527);
(statearr_13547_13570[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (1)))
{var inst_13521 = cljs.core.seq.call(null,coll);var inst_13522 = inst_13521;var state_13545__$1 = (function (){var statearr_13548 = state_13545;(statearr_13548[(7)] = inst_13522);
return statearr_13548;
})();var statearr_13549_13571 = state_13545__$1;(statearr_13549_13571[(2)] = null);
(statearr_13549_13571[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (4)))
{var inst_13522 = (state_13545[(7)]);var inst_13525 = cljs.core.first.call(null,inst_13522);var state_13545__$1 = state_13545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13545__$1,(7),ch,inst_13525);
} else
{if((state_val_13546 === (13)))
{var inst_13539 = (state_13545[(2)]);var state_13545__$1 = state_13545;var statearr_13550_13572 = state_13545__$1;(statearr_13550_13572[(2)] = inst_13539);
(statearr_13550_13572[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (6)))
{var inst_13530 = (state_13545[(2)]);var state_13545__$1 = state_13545;if(cljs.core.truth_(inst_13530))
{var statearr_13551_13573 = state_13545__$1;(statearr_13551_13573[(1)] = (8));
} else
{var statearr_13552_13574 = state_13545__$1;(statearr_13552_13574[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (3)))
{var inst_13543 = (state_13545[(2)]);var state_13545__$1 = state_13545;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13545__$1,inst_13543);
} else
{if((state_val_13546 === (12)))
{var state_13545__$1 = state_13545;var statearr_13553_13575 = state_13545__$1;(statearr_13553_13575[(2)] = null);
(statearr_13553_13575[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (2)))
{var inst_13522 = (state_13545[(7)]);var state_13545__$1 = state_13545;if(cljs.core.truth_(inst_13522))
{var statearr_13554_13576 = state_13545__$1;(statearr_13554_13576[(1)] = (4));
} else
{var statearr_13555_13577 = state_13545__$1;(statearr_13555_13577[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (11)))
{var inst_13536 = cljs.core.async.close_BANG_.call(null,ch);var state_13545__$1 = state_13545;var statearr_13556_13578 = state_13545__$1;(statearr_13556_13578[(2)] = inst_13536);
(statearr_13556_13578[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (9)))
{var state_13545__$1 = state_13545;if(cljs.core.truth_(close_QMARK_))
{var statearr_13557_13579 = state_13545__$1;(statearr_13557_13579[(1)] = (11));
} else
{var statearr_13558_13580 = state_13545__$1;(statearr_13558_13580[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (5)))
{var inst_13522 = (state_13545[(7)]);var state_13545__$1 = state_13545;var statearr_13559_13581 = state_13545__$1;(statearr_13559_13581[(2)] = inst_13522);
(statearr_13559_13581[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (10)))
{var inst_13541 = (state_13545[(2)]);var state_13545__$1 = state_13545;var statearr_13560_13582 = state_13545__$1;(statearr_13560_13582[(2)] = inst_13541);
(statearr_13560_13582[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13546 === (8)))
{var inst_13522 = (state_13545[(7)]);var inst_13532 = cljs.core.next.call(null,inst_13522);var inst_13522__$1 = inst_13532;var state_13545__$1 = (function (){var statearr_13561 = state_13545;(statearr_13561[(7)] = inst_13522__$1);
return statearr_13561;
})();var statearr_13562_13583 = state_13545__$1;(statearr_13562_13583[(2)] = null);
(statearr_13562_13583[(1)] = (2));
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
var state_machine__5835__auto____0 = (function (){var statearr_13566 = [null,null,null,null,null,null,null,null];(statearr_13566[(0)] = state_machine__5835__auto__);
(statearr_13566[(1)] = (1));
return statearr_13566;
});
var state_machine__5835__auto____1 = (function (state_13545){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13545);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e13567){if((e13567 instanceof Object))
{var ex__5838__auto__ = e13567;var statearr_13568_13584 = state_13545;(statearr_13568_13584[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13567;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13585 = state_13545;
state_13545 = G__13585;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13545){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_13569 = f__5850__auto__.call(null);(statearr_13569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_13569;
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
cljs.core.async.Mux = (function (){var obj13587 = {};return obj13587;
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
cljs.core.async.Mult = (function (){var obj13589 = {};return obj13589;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13811 = (function (cs,ch,mult,meta13812){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13812 = meta13812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13811.cljs$lang$type = true;
cljs.core.async.t13811.cljs$lang$ctorStr = "cljs.core.async/t13811";
cljs.core.async.t13811.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13811");
});})(cs))
;
cljs.core.async.t13811.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13811.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13811.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13811.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13811.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13811.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13813){var self__ = this;
var _13813__$1 = this;return self__.meta13812;
});})(cs))
;
cljs.core.async.t13811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13813,meta13812__$1){var self__ = this;
var _13813__$1 = this;return (new cljs.core.async.t13811(self__.cs,self__.ch,self__.mult,meta13812__$1));
});})(cs))
;
cljs.core.async.__GT_t13811 = ((function (cs){
return (function __GT_t13811(cs__$1,ch__$1,mult__$1,meta13812){return (new cljs.core.async.t13811(cs__$1,ch__$1,mult__$1,meta13812));
});})(cs))
;
}
return (new cljs.core.async.t13811(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5849__auto___14032 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14032,cs,m,dchan,dctr,done){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14032,cs,m,dchan,dctr,done){
return (function (state_13944){var state_val_13945 = (state_13944[(1)]);if((state_val_13945 === (7)))
{var inst_13940 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_13946_14033 = state_13944__$1;(statearr_13946_14033[(2)] = inst_13940);
(statearr_13946_14033[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (20)))
{var inst_13845 = (state_13944[(7)]);var inst_13855 = cljs.core.first.call(null,inst_13845);var inst_13856 = cljs.core.nth.call(null,inst_13855,(0),null);var inst_13857 = cljs.core.nth.call(null,inst_13855,(1),null);var state_13944__$1 = (function (){var statearr_13947 = state_13944;(statearr_13947[(8)] = inst_13856);
return statearr_13947;
})();if(cljs.core.truth_(inst_13857))
{var statearr_13948_14034 = state_13944__$1;(statearr_13948_14034[(1)] = (22));
} else
{var statearr_13949_14035 = state_13944__$1;(statearr_13949_14035[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (27)))
{var inst_13885 = (state_13944[(9)]);var inst_13887 = (state_13944[(10)]);var inst_13892 = (state_13944[(11)]);var inst_13816 = (state_13944[(12)]);var inst_13892__$1 = cljs.core._nth.call(null,inst_13885,inst_13887);var inst_13893 = cljs.core.async.put_BANG_.call(null,inst_13892__$1,inst_13816,done);var state_13944__$1 = (function (){var statearr_13950 = state_13944;(statearr_13950[(11)] = inst_13892__$1);
return statearr_13950;
})();if(cljs.core.truth_(inst_13893))
{var statearr_13951_14036 = state_13944__$1;(statearr_13951_14036[(1)] = (30));
} else
{var statearr_13952_14037 = state_13944__$1;(statearr_13952_14037[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (1)))
{var state_13944__$1 = state_13944;var statearr_13953_14038 = state_13944__$1;(statearr_13953_14038[(2)] = null);
(statearr_13953_14038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (24)))
{var inst_13845 = (state_13944[(7)]);var inst_13862 = (state_13944[(2)]);var inst_13863 = cljs.core.next.call(null,inst_13845);var inst_13825 = inst_13863;var inst_13826 = null;var inst_13827 = (0);var inst_13828 = (0);var state_13944__$1 = (function (){var statearr_13954 = state_13944;(statearr_13954[(13)] = inst_13827);
(statearr_13954[(14)] = inst_13862);
(statearr_13954[(15)] = inst_13825);
(statearr_13954[(16)] = inst_13828);
(statearr_13954[(17)] = inst_13826);
return statearr_13954;
})();var statearr_13955_14039 = state_13944__$1;(statearr_13955_14039[(2)] = null);
(statearr_13955_14039[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (39)))
{var state_13944__$1 = state_13944;var statearr_13959_14040 = state_13944__$1;(statearr_13959_14040[(2)] = null);
(statearr_13959_14040[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (4)))
{var inst_13816 = (state_13944[(12)]);var inst_13816__$1 = (state_13944[(2)]);var inst_13817 = (inst_13816__$1 == null);var state_13944__$1 = (function (){var statearr_13960 = state_13944;(statearr_13960[(12)] = inst_13816__$1);
return statearr_13960;
})();if(cljs.core.truth_(inst_13817))
{var statearr_13961_14041 = state_13944__$1;(statearr_13961_14041[(1)] = (5));
} else
{var statearr_13962_14042 = state_13944__$1;(statearr_13962_14042[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (15)))
{var inst_13827 = (state_13944[(13)]);var inst_13825 = (state_13944[(15)]);var inst_13828 = (state_13944[(16)]);var inst_13826 = (state_13944[(17)]);var inst_13841 = (state_13944[(2)]);var inst_13842 = (inst_13828 + (1));var tmp13956 = inst_13827;var tmp13957 = inst_13825;var tmp13958 = inst_13826;var inst_13825__$1 = tmp13957;var inst_13826__$1 = tmp13958;var inst_13827__$1 = tmp13956;var inst_13828__$1 = inst_13842;var state_13944__$1 = (function (){var statearr_13963 = state_13944;(statearr_13963[(13)] = inst_13827__$1);
(statearr_13963[(15)] = inst_13825__$1);
(statearr_13963[(18)] = inst_13841);
(statearr_13963[(16)] = inst_13828__$1);
(statearr_13963[(17)] = inst_13826__$1);
return statearr_13963;
})();var statearr_13964_14043 = state_13944__$1;(statearr_13964_14043[(2)] = null);
(statearr_13964_14043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (21)))
{var inst_13866 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_13968_14044 = state_13944__$1;(statearr_13968_14044[(2)] = inst_13866);
(statearr_13968_14044[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (31)))
{var inst_13892 = (state_13944[(11)]);var inst_13896 = done.call(null,null);var inst_13897 = cljs.core.async.untap_STAR_.call(null,m,inst_13892);var state_13944__$1 = (function (){var statearr_13969 = state_13944;(statearr_13969[(19)] = inst_13896);
return statearr_13969;
})();var statearr_13970_14045 = state_13944__$1;(statearr_13970_14045[(2)] = inst_13897);
(statearr_13970_14045[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (32)))
{var inst_13885 = (state_13944[(9)]);var inst_13887 = (state_13944[(10)]);var inst_13886 = (state_13944[(20)]);var inst_13884 = (state_13944[(21)]);var inst_13899 = (state_13944[(2)]);var inst_13900 = (inst_13887 + (1));var tmp13965 = inst_13885;var tmp13966 = inst_13886;var tmp13967 = inst_13884;var inst_13884__$1 = tmp13967;var inst_13885__$1 = tmp13965;var inst_13886__$1 = tmp13966;var inst_13887__$1 = inst_13900;var state_13944__$1 = (function (){var statearr_13971 = state_13944;(statearr_13971[(9)] = inst_13885__$1);
(statearr_13971[(22)] = inst_13899);
(statearr_13971[(10)] = inst_13887__$1);
(statearr_13971[(20)] = inst_13886__$1);
(statearr_13971[(21)] = inst_13884__$1);
return statearr_13971;
})();var statearr_13972_14046 = state_13944__$1;(statearr_13972_14046[(2)] = null);
(statearr_13972_14046[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (40)))
{var inst_13912 = (state_13944[(23)]);var inst_13916 = done.call(null,null);var inst_13917 = cljs.core.async.untap_STAR_.call(null,m,inst_13912);var state_13944__$1 = (function (){var statearr_13973 = state_13944;(statearr_13973[(24)] = inst_13916);
return statearr_13973;
})();var statearr_13974_14047 = state_13944__$1;(statearr_13974_14047[(2)] = inst_13917);
(statearr_13974_14047[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (33)))
{var inst_13903 = (state_13944[(25)]);var inst_13905 = cljs.core.chunked_seq_QMARK_.call(null,inst_13903);var state_13944__$1 = state_13944;if(inst_13905)
{var statearr_13975_14048 = state_13944__$1;(statearr_13975_14048[(1)] = (36));
} else
{var statearr_13976_14049 = state_13944__$1;(statearr_13976_14049[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (13)))
{var inst_13835 = (state_13944[(26)]);var inst_13838 = cljs.core.async.close_BANG_.call(null,inst_13835);var state_13944__$1 = state_13944;var statearr_13977_14050 = state_13944__$1;(statearr_13977_14050[(2)] = inst_13838);
(statearr_13977_14050[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (22)))
{var inst_13856 = (state_13944[(8)]);var inst_13859 = cljs.core.async.close_BANG_.call(null,inst_13856);var state_13944__$1 = state_13944;var statearr_13978_14051 = state_13944__$1;(statearr_13978_14051[(2)] = inst_13859);
(statearr_13978_14051[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (36)))
{var inst_13903 = (state_13944[(25)]);var inst_13907 = cljs.core.chunk_first.call(null,inst_13903);var inst_13908 = cljs.core.chunk_rest.call(null,inst_13903);var inst_13909 = cljs.core.count.call(null,inst_13907);var inst_13884 = inst_13908;var inst_13885 = inst_13907;var inst_13886 = inst_13909;var inst_13887 = (0);var state_13944__$1 = (function (){var statearr_13979 = state_13944;(statearr_13979[(9)] = inst_13885);
(statearr_13979[(10)] = inst_13887);
(statearr_13979[(20)] = inst_13886);
(statearr_13979[(21)] = inst_13884);
return statearr_13979;
})();var statearr_13980_14052 = state_13944__$1;(statearr_13980_14052[(2)] = null);
(statearr_13980_14052[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (41)))
{var inst_13903 = (state_13944[(25)]);var inst_13919 = (state_13944[(2)]);var inst_13920 = cljs.core.next.call(null,inst_13903);var inst_13884 = inst_13920;var inst_13885 = null;var inst_13886 = (0);var inst_13887 = (0);var state_13944__$1 = (function (){var statearr_13981 = state_13944;(statearr_13981[(9)] = inst_13885);
(statearr_13981[(10)] = inst_13887);
(statearr_13981[(27)] = inst_13919);
(statearr_13981[(20)] = inst_13886);
(statearr_13981[(21)] = inst_13884);
return statearr_13981;
})();var statearr_13982_14053 = state_13944__$1;(statearr_13982_14053[(2)] = null);
(statearr_13982_14053[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (43)))
{var state_13944__$1 = state_13944;var statearr_13983_14054 = state_13944__$1;(statearr_13983_14054[(2)] = null);
(statearr_13983_14054[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (29)))
{var inst_13928 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_13984_14055 = state_13944__$1;(statearr_13984_14055[(2)] = inst_13928);
(statearr_13984_14055[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (44)))
{var inst_13937 = (state_13944[(2)]);var state_13944__$1 = (function (){var statearr_13985 = state_13944;(statearr_13985[(28)] = inst_13937);
return statearr_13985;
})();var statearr_13986_14056 = state_13944__$1;(statearr_13986_14056[(2)] = null);
(statearr_13986_14056[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (6)))
{var inst_13876 = (state_13944[(29)]);var inst_13875 = cljs.core.deref.call(null,cs);var inst_13876__$1 = cljs.core.keys.call(null,inst_13875);var inst_13877 = cljs.core.count.call(null,inst_13876__$1);var inst_13878 = cljs.core.reset_BANG_.call(null,dctr,inst_13877);var inst_13883 = cljs.core.seq.call(null,inst_13876__$1);var inst_13884 = inst_13883;var inst_13885 = null;var inst_13886 = (0);var inst_13887 = (0);var state_13944__$1 = (function (){var statearr_13987 = state_13944;(statearr_13987[(9)] = inst_13885);
(statearr_13987[(10)] = inst_13887);
(statearr_13987[(20)] = inst_13886);
(statearr_13987[(21)] = inst_13884);
(statearr_13987[(30)] = inst_13878);
(statearr_13987[(29)] = inst_13876__$1);
return statearr_13987;
})();var statearr_13988_14057 = state_13944__$1;(statearr_13988_14057[(2)] = null);
(statearr_13988_14057[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (28)))
{var inst_13903 = (state_13944[(25)]);var inst_13884 = (state_13944[(21)]);var inst_13903__$1 = cljs.core.seq.call(null,inst_13884);var state_13944__$1 = (function (){var statearr_13989 = state_13944;(statearr_13989[(25)] = inst_13903__$1);
return statearr_13989;
})();if(inst_13903__$1)
{var statearr_13990_14058 = state_13944__$1;(statearr_13990_14058[(1)] = (33));
} else
{var statearr_13991_14059 = state_13944__$1;(statearr_13991_14059[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (25)))
{var inst_13887 = (state_13944[(10)]);var inst_13886 = (state_13944[(20)]);var inst_13889 = (inst_13887 < inst_13886);var inst_13890 = inst_13889;var state_13944__$1 = state_13944;if(cljs.core.truth_(inst_13890))
{var statearr_13992_14060 = state_13944__$1;(statearr_13992_14060[(1)] = (27));
} else
{var statearr_13993_14061 = state_13944__$1;(statearr_13993_14061[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (34)))
{var state_13944__$1 = state_13944;var statearr_13994_14062 = state_13944__$1;(statearr_13994_14062[(2)] = null);
(statearr_13994_14062[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (17)))
{var state_13944__$1 = state_13944;var statearr_13995_14063 = state_13944__$1;(statearr_13995_14063[(2)] = null);
(statearr_13995_14063[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (3)))
{var inst_13942 = (state_13944[(2)]);var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13944__$1,inst_13942);
} else
{if((state_val_13945 === (12)))
{var inst_13871 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_13996_14064 = state_13944__$1;(statearr_13996_14064[(2)] = inst_13871);
(statearr_13996_14064[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (2)))
{var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13944__$1,(4),ch);
} else
{if((state_val_13945 === (23)))
{var state_13944__$1 = state_13944;var statearr_13997_14065 = state_13944__$1;(statearr_13997_14065[(2)] = null);
(statearr_13997_14065[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (35)))
{var inst_13926 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_13998_14066 = state_13944__$1;(statearr_13998_14066[(2)] = inst_13926);
(statearr_13998_14066[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (19)))
{var inst_13845 = (state_13944[(7)]);var inst_13849 = cljs.core.chunk_first.call(null,inst_13845);var inst_13850 = cljs.core.chunk_rest.call(null,inst_13845);var inst_13851 = cljs.core.count.call(null,inst_13849);var inst_13825 = inst_13850;var inst_13826 = inst_13849;var inst_13827 = inst_13851;var inst_13828 = (0);var state_13944__$1 = (function (){var statearr_13999 = state_13944;(statearr_13999[(13)] = inst_13827);
(statearr_13999[(15)] = inst_13825);
(statearr_13999[(16)] = inst_13828);
(statearr_13999[(17)] = inst_13826);
return statearr_13999;
})();var statearr_14000_14067 = state_13944__$1;(statearr_14000_14067[(2)] = null);
(statearr_14000_14067[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (11)))
{var inst_13825 = (state_13944[(15)]);var inst_13845 = (state_13944[(7)]);var inst_13845__$1 = cljs.core.seq.call(null,inst_13825);var state_13944__$1 = (function (){var statearr_14001 = state_13944;(statearr_14001[(7)] = inst_13845__$1);
return statearr_14001;
})();if(inst_13845__$1)
{var statearr_14002_14068 = state_13944__$1;(statearr_14002_14068[(1)] = (16));
} else
{var statearr_14003_14069 = state_13944__$1;(statearr_14003_14069[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (9)))
{var inst_13873 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_14004_14070 = state_13944__$1;(statearr_14004_14070[(2)] = inst_13873);
(statearr_14004_14070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (5)))
{var inst_13823 = cljs.core.deref.call(null,cs);var inst_13824 = cljs.core.seq.call(null,inst_13823);var inst_13825 = inst_13824;var inst_13826 = null;var inst_13827 = (0);var inst_13828 = (0);var state_13944__$1 = (function (){var statearr_14005 = state_13944;(statearr_14005[(13)] = inst_13827);
(statearr_14005[(15)] = inst_13825);
(statearr_14005[(16)] = inst_13828);
(statearr_14005[(17)] = inst_13826);
return statearr_14005;
})();var statearr_14006_14071 = state_13944__$1;(statearr_14006_14071[(2)] = null);
(statearr_14006_14071[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (14)))
{var state_13944__$1 = state_13944;var statearr_14007_14072 = state_13944__$1;(statearr_14007_14072[(2)] = null);
(statearr_14007_14072[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (45)))
{var inst_13934 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_14008_14073 = state_13944__$1;(statearr_14008_14073[(2)] = inst_13934);
(statearr_14008_14073[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (26)))
{var inst_13876 = (state_13944[(29)]);var inst_13930 = (state_13944[(2)]);var inst_13931 = cljs.core.seq.call(null,inst_13876);var state_13944__$1 = (function (){var statearr_14009 = state_13944;(statearr_14009[(31)] = inst_13930);
return statearr_14009;
})();if(inst_13931)
{var statearr_14010_14074 = state_13944__$1;(statearr_14010_14074[(1)] = (42));
} else
{var statearr_14011_14075 = state_13944__$1;(statearr_14011_14075[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (16)))
{var inst_13845 = (state_13944[(7)]);var inst_13847 = cljs.core.chunked_seq_QMARK_.call(null,inst_13845);var state_13944__$1 = state_13944;if(inst_13847)
{var statearr_14012_14076 = state_13944__$1;(statearr_14012_14076[(1)] = (19));
} else
{var statearr_14013_14077 = state_13944__$1;(statearr_14013_14077[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (38)))
{var inst_13923 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_14014_14078 = state_13944__$1;(statearr_14014_14078[(2)] = inst_13923);
(statearr_14014_14078[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (30)))
{var state_13944__$1 = state_13944;var statearr_14015_14079 = state_13944__$1;(statearr_14015_14079[(2)] = null);
(statearr_14015_14079[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (10)))
{var inst_13828 = (state_13944[(16)]);var inst_13826 = (state_13944[(17)]);var inst_13834 = cljs.core._nth.call(null,inst_13826,inst_13828);var inst_13835 = cljs.core.nth.call(null,inst_13834,(0),null);var inst_13836 = cljs.core.nth.call(null,inst_13834,(1),null);var state_13944__$1 = (function (){var statearr_14016 = state_13944;(statearr_14016[(26)] = inst_13835);
return statearr_14016;
})();if(cljs.core.truth_(inst_13836))
{var statearr_14017_14080 = state_13944__$1;(statearr_14017_14080[(1)] = (13));
} else
{var statearr_14018_14081 = state_13944__$1;(statearr_14018_14081[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (18)))
{var inst_13869 = (state_13944[(2)]);var state_13944__$1 = state_13944;var statearr_14019_14082 = state_13944__$1;(statearr_14019_14082[(2)] = inst_13869);
(statearr_14019_14082[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (42)))
{var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13944__$1,(45),dchan);
} else
{if((state_val_13945 === (37)))
{var inst_13903 = (state_13944[(25)]);var inst_13816 = (state_13944[(12)]);var inst_13912 = (state_13944[(23)]);var inst_13912__$1 = cljs.core.first.call(null,inst_13903);var inst_13913 = cljs.core.async.put_BANG_.call(null,inst_13912__$1,inst_13816,done);var state_13944__$1 = (function (){var statearr_14020 = state_13944;(statearr_14020[(23)] = inst_13912__$1);
return statearr_14020;
})();if(cljs.core.truth_(inst_13913))
{var statearr_14021_14083 = state_13944__$1;(statearr_14021_14083[(1)] = (39));
} else
{var statearr_14022_14084 = state_13944__$1;(statearr_14022_14084[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13945 === (8)))
{var inst_13827 = (state_13944[(13)]);var inst_13828 = (state_13944[(16)]);var inst_13830 = (inst_13828 < inst_13827);var inst_13831 = inst_13830;var state_13944__$1 = state_13944;if(cljs.core.truth_(inst_13831))
{var statearr_14023_14085 = state_13944__$1;(statearr_14023_14085[(1)] = (10));
} else
{var statearr_14024_14086 = state_13944__$1;(statearr_14024_14086[(1)] = (11));
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
});})(c__5849__auto___14032,cs,m,dchan,dctr,done))
;return ((function (switch__5834__auto__,c__5849__auto___14032,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14028[(0)] = state_machine__5835__auto__);
(statearr_14028[(1)] = (1));
return statearr_14028;
});
var state_machine__5835__auto____1 = (function (state_13944){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_13944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14029){if((e14029 instanceof Object))
{var ex__5838__auto__ = e14029;var statearr_14030_14087 = state_13944;(statearr_14030_14087[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13944);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14029;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14088 = state_13944;
state_13944 = G__14088;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_13944){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_13944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14032,cs,m,dchan,dctr,done))
})();var state__5851__auto__ = (function (){var statearr_14031 = f__5850__auto__.call(null);(statearr_14031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14032);
return statearr_14031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14032,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj14090 = {};return obj14090;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__14091){var map__14096 = p__14091;var map__14096__$1 = ((cljs.core.seq_QMARK_.call(null,map__14096))?cljs.core.apply.call(null,cljs.core.hash_map,map__14096):map__14096);var opts = map__14096__$1;var statearr_14097_14100 = state;(statearr_14097_14100[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14096,map__14096__$1,opts){
return (function (val){var statearr_14098_14101 = state;(statearr_14098_14101[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14096,map__14096__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_14099_14102 = state;(statearr_14099_14102[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__14091 = null;if (arguments.length > 3) {
  p__14091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__14091);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__14103){
var state = cljs.core.first(arglist__14103);
arglist__14103 = cljs.core.next(arglist__14103);
var cont_block = cljs.core.first(arglist__14103);
arglist__14103 = cljs.core.next(arglist__14103);
var ports = cljs.core.first(arglist__14103);
var p__14091 = cljs.core.rest(arglist__14103);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__14091);
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
;var m = (function (){if(typeof cljs.core.async.t14223 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14223 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14224){
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
this.meta14224 = meta14224;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14223.cljs$lang$type = true;
cljs.core.async.t14223.cljs$lang$ctorStr = "cljs.core.async/t14223";
cljs.core.async.t14223.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14223");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14223.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14225){var self__ = this;
var _14225__$1 = this;return self__.meta14224;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14225,meta14224__$1){var self__ = this;
var _14225__$1 = this;return (new cljs.core.async.t14223(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14224__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14223 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14223(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14224){return (new cljs.core.async.t14223(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14224));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14223(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5849__auto___14342 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14295){var state_val_14296 = (state_14295[(1)]);if((state_val_14296 === (7)))
{var inst_14239 = (state_14295[(7)]);var inst_14244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14239);var state_14295__$1 = state_14295;var statearr_14297_14343 = state_14295__$1;(statearr_14297_14343[(2)] = inst_14244);
(statearr_14297_14343[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (20)))
{var inst_14254 = (state_14295[(8)]);var state_14295__$1 = state_14295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14295__$1,(23),out,inst_14254);
} else
{if((state_val_14296 === (1)))
{var inst_14229 = (state_14295[(9)]);var inst_14229__$1 = calc_state.call(null);var inst_14230 = cljs.core.seq_QMARK_.call(null,inst_14229__$1);var state_14295__$1 = (function (){var statearr_14298 = state_14295;(statearr_14298[(9)] = inst_14229__$1);
return statearr_14298;
})();if(inst_14230)
{var statearr_14299_14344 = state_14295__$1;(statearr_14299_14344[(1)] = (2));
} else
{var statearr_14300_14345 = state_14295__$1;(statearr_14300_14345[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (24)))
{var inst_14247 = (state_14295[(10)]);var inst_14239 = inst_14247;var state_14295__$1 = (function (){var statearr_14301 = state_14295;(statearr_14301[(7)] = inst_14239);
return statearr_14301;
})();var statearr_14302_14346 = state_14295__$1;(statearr_14302_14346[(2)] = null);
(statearr_14302_14346[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (4)))
{var inst_14229 = (state_14295[(9)]);var inst_14235 = (state_14295[(2)]);var inst_14236 = cljs.core.get.call(null,inst_14235,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14237 = cljs.core.get.call(null,inst_14235,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14238 = cljs.core.get.call(null,inst_14235,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_14239 = inst_14229;var state_14295__$1 = (function (){var statearr_14303 = state_14295;(statearr_14303[(11)] = inst_14237);
(statearr_14303[(12)] = inst_14238);
(statearr_14303[(7)] = inst_14239);
(statearr_14303[(13)] = inst_14236);
return statearr_14303;
})();var statearr_14304_14347 = state_14295__$1;(statearr_14304_14347[(2)] = null);
(statearr_14304_14347[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (15)))
{var state_14295__$1 = state_14295;var statearr_14305_14348 = state_14295__$1;(statearr_14305_14348[(2)] = null);
(statearr_14305_14348[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (21)))
{var inst_14247 = (state_14295[(10)]);var inst_14239 = inst_14247;var state_14295__$1 = (function (){var statearr_14306 = state_14295;(statearr_14306[(7)] = inst_14239);
return statearr_14306;
})();var statearr_14307_14349 = state_14295__$1;(statearr_14307_14349[(2)] = null);
(statearr_14307_14349[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (13)))
{var inst_14291 = (state_14295[(2)]);var state_14295__$1 = state_14295;var statearr_14308_14350 = state_14295__$1;(statearr_14308_14350[(2)] = inst_14291);
(statearr_14308_14350[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (22)))
{var inst_14289 = (state_14295[(2)]);var state_14295__$1 = state_14295;var statearr_14309_14351 = state_14295__$1;(statearr_14309_14351[(2)] = inst_14289);
(statearr_14309_14351[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (6)))
{var inst_14293 = (state_14295[(2)]);var state_14295__$1 = state_14295;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14295__$1,inst_14293);
} else
{if((state_val_14296 === (25)))
{var state_14295__$1 = state_14295;var statearr_14310_14352 = state_14295__$1;(statearr_14310_14352[(2)] = null);
(statearr_14310_14352[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (17)))
{var inst_14269 = (state_14295[(14)]);var state_14295__$1 = state_14295;var statearr_14311_14353 = state_14295__$1;(statearr_14311_14353[(2)] = inst_14269);
(statearr_14311_14353[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (3)))
{var inst_14229 = (state_14295[(9)]);var state_14295__$1 = state_14295;var statearr_14312_14354 = state_14295__$1;(statearr_14312_14354[(2)] = inst_14229);
(statearr_14312_14354[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (12)))
{var inst_14255 = (state_14295[(15)]);var inst_14269 = (state_14295[(14)]);var inst_14250 = (state_14295[(16)]);var inst_14269__$1 = inst_14250.call(null,inst_14255);var state_14295__$1 = (function (){var statearr_14313 = state_14295;(statearr_14313[(14)] = inst_14269__$1);
return statearr_14313;
})();if(cljs.core.truth_(inst_14269__$1))
{var statearr_14314_14355 = state_14295__$1;(statearr_14314_14355[(1)] = (17));
} else
{var statearr_14315_14356 = state_14295__$1;(statearr_14315_14356[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (2)))
{var inst_14229 = (state_14295[(9)]);var inst_14232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14229);var state_14295__$1 = state_14295;var statearr_14316_14357 = state_14295__$1;(statearr_14316_14357[(2)] = inst_14232);
(statearr_14316_14357[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (23)))
{var inst_14280 = (state_14295[(2)]);var state_14295__$1 = state_14295;if(cljs.core.truth_(inst_14280))
{var statearr_14317_14358 = state_14295__$1;(statearr_14317_14358[(1)] = (24));
} else
{var statearr_14318_14359 = state_14295__$1;(statearr_14318_14359[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (19)))
{var inst_14277 = (state_14295[(2)]);var state_14295__$1 = state_14295;if(cljs.core.truth_(inst_14277))
{var statearr_14319_14360 = state_14295__$1;(statearr_14319_14360[(1)] = (20));
} else
{var statearr_14320_14361 = state_14295__$1;(statearr_14320_14361[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (11)))
{var inst_14254 = (state_14295[(8)]);var inst_14260 = (inst_14254 == null);var state_14295__$1 = state_14295;if(cljs.core.truth_(inst_14260))
{var statearr_14321_14362 = state_14295__$1;(statearr_14321_14362[(1)] = (14));
} else
{var statearr_14322_14363 = state_14295__$1;(statearr_14322_14363[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (9)))
{var inst_14247 = (state_14295[(10)]);var inst_14247__$1 = (state_14295[(2)]);var inst_14248 = cljs.core.get.call(null,inst_14247__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_14249 = cljs.core.get.call(null,inst_14247__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_14250 = cljs.core.get.call(null,inst_14247__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14295__$1 = (function (){var statearr_14323 = state_14295;(statearr_14323[(17)] = inst_14249);
(statearr_14323[(10)] = inst_14247__$1);
(statearr_14323[(16)] = inst_14250);
return statearr_14323;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_14295__$1,(10),inst_14248);
} else
{if((state_val_14296 === (5)))
{var inst_14239 = (state_14295[(7)]);var inst_14242 = cljs.core.seq_QMARK_.call(null,inst_14239);var state_14295__$1 = state_14295;if(inst_14242)
{var statearr_14324_14364 = state_14295__$1;(statearr_14324_14364[(1)] = (7));
} else
{var statearr_14325_14365 = state_14295__$1;(statearr_14325_14365[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (14)))
{var inst_14255 = (state_14295[(15)]);var inst_14262 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14255);var state_14295__$1 = state_14295;var statearr_14326_14366 = state_14295__$1;(statearr_14326_14366[(2)] = inst_14262);
(statearr_14326_14366[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (26)))
{var inst_14285 = (state_14295[(2)]);var state_14295__$1 = state_14295;var statearr_14327_14367 = state_14295__$1;(statearr_14327_14367[(2)] = inst_14285);
(statearr_14327_14367[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (16)))
{var inst_14265 = (state_14295[(2)]);var inst_14266 = calc_state.call(null);var inst_14239 = inst_14266;var state_14295__$1 = (function (){var statearr_14328 = state_14295;(statearr_14328[(18)] = inst_14265);
(statearr_14328[(7)] = inst_14239);
return statearr_14328;
})();var statearr_14329_14368 = state_14295__$1;(statearr_14329_14368[(2)] = null);
(statearr_14329_14368[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (10)))
{var inst_14255 = (state_14295[(15)]);var inst_14254 = (state_14295[(8)]);var inst_14253 = (state_14295[(2)]);var inst_14254__$1 = cljs.core.nth.call(null,inst_14253,(0),null);var inst_14255__$1 = cljs.core.nth.call(null,inst_14253,(1),null);var inst_14256 = (inst_14254__$1 == null);var inst_14257 = cljs.core._EQ_.call(null,inst_14255__$1,change);var inst_14258 = (inst_14256) || (inst_14257);var state_14295__$1 = (function (){var statearr_14330 = state_14295;(statearr_14330[(15)] = inst_14255__$1);
(statearr_14330[(8)] = inst_14254__$1);
return statearr_14330;
})();if(cljs.core.truth_(inst_14258))
{var statearr_14331_14369 = state_14295__$1;(statearr_14331_14369[(1)] = (11));
} else
{var statearr_14332_14370 = state_14295__$1;(statearr_14332_14370[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (18)))
{var inst_14255 = (state_14295[(15)]);var inst_14249 = (state_14295[(17)]);var inst_14250 = (state_14295[(16)]);var inst_14272 = cljs.core.empty_QMARK_.call(null,inst_14250);var inst_14273 = inst_14249.call(null,inst_14255);var inst_14274 = cljs.core.not.call(null,inst_14273);var inst_14275 = (inst_14272) && (inst_14274);var state_14295__$1 = state_14295;var statearr_14333_14371 = state_14295__$1;(statearr_14333_14371[(2)] = inst_14275);
(statearr_14333_14371[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14296 === (8)))
{var inst_14239 = (state_14295[(7)]);var state_14295__$1 = state_14295;var statearr_14334_14372 = state_14295__$1;(statearr_14334_14372[(2)] = inst_14239);
(statearr_14334_14372[(1)] = (9));
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
});})(c__5849__auto___14342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5834__auto__,c__5849__auto___14342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14338[(0)] = state_machine__5835__auto__);
(statearr_14338[(1)] = (1));
return statearr_14338;
});
var state_machine__5835__auto____1 = (function (state_14295){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14295);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14339){if((e14339 instanceof Object))
{var ex__5838__auto__ = e14339;var statearr_14340_14373 = state_14295;(statearr_14340_14373[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14339;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14374 = state_14295;
state_14295 = G__14374;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14295){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5851__auto__ = (function (){var statearr_14341 = f__5850__auto__.call(null);(statearr_14341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14342);
return statearr_14341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14342,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj14376 = {};return obj14376;
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
return (function (p1__14377_SHARP_){if(cljs.core.truth_(p1__14377_SHARP_.call(null,topic)))
{return p1__14377_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14377_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14500 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14501){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14501 = meta14501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14500.cljs$lang$type = true;
cljs.core.async.t14500.cljs$lang$ctorStr = "cljs.core.async/t14500";
cljs.core.async.t14500.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14500");
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14500.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14502){var self__ = this;
var _14502__$1 = this;return self__.meta14501;
});})(mults,ensure_mult))
;
cljs.core.async.t14500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14502,meta14501__$1){var self__ = this;
var _14502__$1 = this;return (new cljs.core.async.t14500(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14501__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14500 = ((function (mults,ensure_mult){
return (function __GT_t14500(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14501){return (new cljs.core.async.t14500(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14501));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14500(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5849__auto___14622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14622,mults,ensure_mult,p){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14622,mults,ensure_mult,p){
return (function (state_14574){var state_val_14575 = (state_14574[(1)]);if((state_val_14575 === (7)))
{var inst_14570 = (state_14574[(2)]);var state_14574__$1 = state_14574;var statearr_14576_14623 = state_14574__$1;(statearr_14576_14623[(2)] = inst_14570);
(statearr_14576_14623[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (20)))
{var state_14574__$1 = state_14574;var statearr_14577_14624 = state_14574__$1;(statearr_14577_14624[(2)] = null);
(statearr_14577_14624[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (1)))
{var state_14574__$1 = state_14574;var statearr_14578_14625 = state_14574__$1;(statearr_14578_14625[(2)] = null);
(statearr_14578_14625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (24)))
{var inst_14553 = (state_14574[(7)]);var inst_14562 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14553);var state_14574__$1 = state_14574;var statearr_14579_14626 = state_14574__$1;(statearr_14579_14626[(2)] = inst_14562);
(statearr_14579_14626[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (4)))
{var inst_14505 = (state_14574[(8)]);var inst_14505__$1 = (state_14574[(2)]);var inst_14506 = (inst_14505__$1 == null);var state_14574__$1 = (function (){var statearr_14580 = state_14574;(statearr_14580[(8)] = inst_14505__$1);
return statearr_14580;
})();if(cljs.core.truth_(inst_14506))
{var statearr_14581_14627 = state_14574__$1;(statearr_14581_14627[(1)] = (5));
} else
{var statearr_14582_14628 = state_14574__$1;(statearr_14582_14628[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (15)))
{var inst_14547 = (state_14574[(2)]);var state_14574__$1 = state_14574;var statearr_14583_14629 = state_14574__$1;(statearr_14583_14629[(2)] = inst_14547);
(statearr_14583_14629[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (21)))
{var inst_14567 = (state_14574[(2)]);var state_14574__$1 = (function (){var statearr_14584 = state_14574;(statearr_14584[(9)] = inst_14567);
return statearr_14584;
})();var statearr_14585_14630 = state_14574__$1;(statearr_14585_14630[(2)] = null);
(statearr_14585_14630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (13)))
{var inst_14529 = (state_14574[(10)]);var inst_14531 = cljs.core.chunked_seq_QMARK_.call(null,inst_14529);var state_14574__$1 = state_14574;if(inst_14531)
{var statearr_14586_14631 = state_14574__$1;(statearr_14586_14631[(1)] = (16));
} else
{var statearr_14587_14632 = state_14574__$1;(statearr_14587_14632[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (22)))
{var inst_14559 = (state_14574[(2)]);var state_14574__$1 = state_14574;if(cljs.core.truth_(inst_14559))
{var statearr_14588_14633 = state_14574__$1;(statearr_14588_14633[(1)] = (23));
} else
{var statearr_14589_14634 = state_14574__$1;(statearr_14589_14634[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (6)))
{var inst_14505 = (state_14574[(8)]);var inst_14553 = (state_14574[(7)]);var inst_14555 = (state_14574[(11)]);var inst_14553__$1 = topic_fn.call(null,inst_14505);var inst_14554 = cljs.core.deref.call(null,mults);var inst_14555__$1 = cljs.core.get.call(null,inst_14554,inst_14553__$1);var state_14574__$1 = (function (){var statearr_14590 = state_14574;(statearr_14590[(7)] = inst_14553__$1);
(statearr_14590[(11)] = inst_14555__$1);
return statearr_14590;
})();if(cljs.core.truth_(inst_14555__$1))
{var statearr_14591_14635 = state_14574__$1;(statearr_14591_14635[(1)] = (19));
} else
{var statearr_14592_14636 = state_14574__$1;(statearr_14592_14636[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (25)))
{var inst_14564 = (state_14574[(2)]);var state_14574__$1 = state_14574;var statearr_14593_14637 = state_14574__$1;(statearr_14593_14637[(2)] = inst_14564);
(statearr_14593_14637[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (17)))
{var inst_14529 = (state_14574[(10)]);var inst_14538 = cljs.core.first.call(null,inst_14529);var inst_14539 = cljs.core.async.muxch_STAR_.call(null,inst_14538);var inst_14540 = cljs.core.async.close_BANG_.call(null,inst_14539);var inst_14541 = cljs.core.next.call(null,inst_14529);var inst_14515 = inst_14541;var inst_14516 = null;var inst_14517 = (0);var inst_14518 = (0);var state_14574__$1 = (function (){var statearr_14594 = state_14574;(statearr_14594[(12)] = inst_14518);
(statearr_14594[(13)] = inst_14540);
(statearr_14594[(14)] = inst_14516);
(statearr_14594[(15)] = inst_14515);
(statearr_14594[(16)] = inst_14517);
return statearr_14594;
})();var statearr_14595_14638 = state_14574__$1;(statearr_14595_14638[(2)] = null);
(statearr_14595_14638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (3)))
{var inst_14572 = (state_14574[(2)]);var state_14574__$1 = state_14574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14574__$1,inst_14572);
} else
{if((state_val_14575 === (12)))
{var inst_14549 = (state_14574[(2)]);var state_14574__$1 = state_14574;var statearr_14596_14639 = state_14574__$1;(statearr_14596_14639[(2)] = inst_14549);
(statearr_14596_14639[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (2)))
{var state_14574__$1 = state_14574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14574__$1,(4),ch);
} else
{if((state_val_14575 === (23)))
{var state_14574__$1 = state_14574;var statearr_14597_14640 = state_14574__$1;(statearr_14597_14640[(2)] = null);
(statearr_14597_14640[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (19)))
{var inst_14505 = (state_14574[(8)]);var inst_14555 = (state_14574[(11)]);var inst_14557 = cljs.core.async.muxch_STAR_.call(null,inst_14555);var state_14574__$1 = state_14574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14574__$1,(22),inst_14557,inst_14505);
} else
{if((state_val_14575 === (11)))
{var inst_14529 = (state_14574[(10)]);var inst_14515 = (state_14574[(15)]);var inst_14529__$1 = cljs.core.seq.call(null,inst_14515);var state_14574__$1 = (function (){var statearr_14598 = state_14574;(statearr_14598[(10)] = inst_14529__$1);
return statearr_14598;
})();if(inst_14529__$1)
{var statearr_14599_14641 = state_14574__$1;(statearr_14599_14641[(1)] = (13));
} else
{var statearr_14600_14642 = state_14574__$1;(statearr_14600_14642[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (9)))
{var inst_14551 = (state_14574[(2)]);var state_14574__$1 = state_14574;var statearr_14601_14643 = state_14574__$1;(statearr_14601_14643[(2)] = inst_14551);
(statearr_14601_14643[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (5)))
{var inst_14512 = cljs.core.deref.call(null,mults);var inst_14513 = cljs.core.vals.call(null,inst_14512);var inst_14514 = cljs.core.seq.call(null,inst_14513);var inst_14515 = inst_14514;var inst_14516 = null;var inst_14517 = (0);var inst_14518 = (0);var state_14574__$1 = (function (){var statearr_14602 = state_14574;(statearr_14602[(12)] = inst_14518);
(statearr_14602[(14)] = inst_14516);
(statearr_14602[(15)] = inst_14515);
(statearr_14602[(16)] = inst_14517);
return statearr_14602;
})();var statearr_14603_14644 = state_14574__$1;(statearr_14603_14644[(2)] = null);
(statearr_14603_14644[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (14)))
{var state_14574__$1 = state_14574;var statearr_14607_14645 = state_14574__$1;(statearr_14607_14645[(2)] = null);
(statearr_14607_14645[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (16)))
{var inst_14529 = (state_14574[(10)]);var inst_14533 = cljs.core.chunk_first.call(null,inst_14529);var inst_14534 = cljs.core.chunk_rest.call(null,inst_14529);var inst_14535 = cljs.core.count.call(null,inst_14533);var inst_14515 = inst_14534;var inst_14516 = inst_14533;var inst_14517 = inst_14535;var inst_14518 = (0);var state_14574__$1 = (function (){var statearr_14608 = state_14574;(statearr_14608[(12)] = inst_14518);
(statearr_14608[(14)] = inst_14516);
(statearr_14608[(15)] = inst_14515);
(statearr_14608[(16)] = inst_14517);
return statearr_14608;
})();var statearr_14609_14646 = state_14574__$1;(statearr_14609_14646[(2)] = null);
(statearr_14609_14646[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (10)))
{var inst_14518 = (state_14574[(12)]);var inst_14516 = (state_14574[(14)]);var inst_14515 = (state_14574[(15)]);var inst_14517 = (state_14574[(16)]);var inst_14523 = cljs.core._nth.call(null,inst_14516,inst_14518);var inst_14524 = cljs.core.async.muxch_STAR_.call(null,inst_14523);var inst_14525 = cljs.core.async.close_BANG_.call(null,inst_14524);var inst_14526 = (inst_14518 + (1));var tmp14604 = inst_14516;var tmp14605 = inst_14515;var tmp14606 = inst_14517;var inst_14515__$1 = tmp14605;var inst_14516__$1 = tmp14604;var inst_14517__$1 = tmp14606;var inst_14518__$1 = inst_14526;var state_14574__$1 = (function (){var statearr_14610 = state_14574;(statearr_14610[(12)] = inst_14518__$1);
(statearr_14610[(17)] = inst_14525);
(statearr_14610[(14)] = inst_14516__$1);
(statearr_14610[(15)] = inst_14515__$1);
(statearr_14610[(16)] = inst_14517__$1);
return statearr_14610;
})();var statearr_14611_14647 = state_14574__$1;(statearr_14611_14647[(2)] = null);
(statearr_14611_14647[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (18)))
{var inst_14544 = (state_14574[(2)]);var state_14574__$1 = state_14574;var statearr_14612_14648 = state_14574__$1;(statearr_14612_14648[(2)] = inst_14544);
(statearr_14612_14648[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14575 === (8)))
{var inst_14518 = (state_14574[(12)]);var inst_14517 = (state_14574[(16)]);var inst_14520 = (inst_14518 < inst_14517);var inst_14521 = inst_14520;var state_14574__$1 = state_14574;if(cljs.core.truth_(inst_14521))
{var statearr_14613_14649 = state_14574__$1;(statearr_14613_14649[(1)] = (10));
} else
{var statearr_14614_14650 = state_14574__$1;(statearr_14614_14650[(1)] = (11));
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
});})(c__5849__auto___14622,mults,ensure_mult,p))
;return ((function (switch__5834__auto__,c__5849__auto___14622,mults,ensure_mult,p){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14618[(0)] = state_machine__5835__auto__);
(statearr_14618[(1)] = (1));
return statearr_14618;
});
var state_machine__5835__auto____1 = (function (state_14574){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14574);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14619){if((e14619 instanceof Object))
{var ex__5838__auto__ = e14619;var statearr_14620_14651 = state_14574;(statearr_14620_14651[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14574);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14619;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14652 = state_14574;
state_14574 = G__14652;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14574){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14622,mults,ensure_mult,p))
})();var state__5851__auto__ = (function (){var statearr_14621 = f__5850__auto__.call(null);(statearr_14621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14622);
return statearr_14621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14622,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5849__auto___14789 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14759){var state_val_14760 = (state_14759[(1)]);if((state_val_14760 === (7)))
{var state_14759__$1 = state_14759;var statearr_14761_14790 = state_14759__$1;(statearr_14761_14790[(2)] = null);
(statearr_14761_14790[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (1)))
{var state_14759__$1 = state_14759;var statearr_14762_14791 = state_14759__$1;(statearr_14762_14791[(2)] = null);
(statearr_14762_14791[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (4)))
{var inst_14723 = (state_14759[(7)]);var inst_14725 = (inst_14723 < cnt);var state_14759__$1 = state_14759;if(cljs.core.truth_(inst_14725))
{var statearr_14763_14792 = state_14759__$1;(statearr_14763_14792[(1)] = (6));
} else
{var statearr_14764_14793 = state_14759__$1;(statearr_14764_14793[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (15)))
{var inst_14755 = (state_14759[(2)]);var state_14759__$1 = state_14759;var statearr_14765_14794 = state_14759__$1;(statearr_14765_14794[(2)] = inst_14755);
(statearr_14765_14794[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (13)))
{var inst_14748 = cljs.core.async.close_BANG_.call(null,out);var state_14759__$1 = state_14759;var statearr_14766_14795 = state_14759__$1;(statearr_14766_14795[(2)] = inst_14748);
(statearr_14766_14795[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (6)))
{var state_14759__$1 = state_14759;var statearr_14767_14796 = state_14759__$1;(statearr_14767_14796[(2)] = null);
(statearr_14767_14796[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (3)))
{var inst_14757 = (state_14759[(2)]);var state_14759__$1 = state_14759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14759__$1,inst_14757);
} else
{if((state_val_14760 === (12)))
{var inst_14745 = (state_14759[(8)]);var inst_14745__$1 = (state_14759[(2)]);var inst_14746 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14745__$1);var state_14759__$1 = (function (){var statearr_14768 = state_14759;(statearr_14768[(8)] = inst_14745__$1);
return statearr_14768;
})();if(cljs.core.truth_(inst_14746))
{var statearr_14769_14797 = state_14759__$1;(statearr_14769_14797[(1)] = (13));
} else
{var statearr_14770_14798 = state_14759__$1;(statearr_14770_14798[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (2)))
{var inst_14722 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14723 = (0);var state_14759__$1 = (function (){var statearr_14771 = state_14759;(statearr_14771[(9)] = inst_14722);
(statearr_14771[(7)] = inst_14723);
return statearr_14771;
})();var statearr_14772_14799 = state_14759__$1;(statearr_14772_14799[(2)] = null);
(statearr_14772_14799[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (11)))
{var inst_14723 = (state_14759[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14759,(10),Object,null,(9));var inst_14732 = chs__$1.call(null,inst_14723);var inst_14733 = done.call(null,inst_14723);var inst_14734 = cljs.core.async.take_BANG_.call(null,inst_14732,inst_14733);var state_14759__$1 = state_14759;var statearr_14773_14800 = state_14759__$1;(statearr_14773_14800[(2)] = inst_14734);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (9)))
{var inst_14723 = (state_14759[(7)]);var inst_14736 = (state_14759[(2)]);var inst_14737 = (inst_14723 + (1));var inst_14723__$1 = inst_14737;var state_14759__$1 = (function (){var statearr_14774 = state_14759;(statearr_14774[(10)] = inst_14736);
(statearr_14774[(7)] = inst_14723__$1);
return statearr_14774;
})();var statearr_14775_14801 = state_14759__$1;(statearr_14775_14801[(2)] = null);
(statearr_14775_14801[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (5)))
{var inst_14743 = (state_14759[(2)]);var state_14759__$1 = (function (){var statearr_14776 = state_14759;(statearr_14776[(11)] = inst_14743);
return statearr_14776;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14759__$1,(12),dchan);
} else
{if((state_val_14760 === (14)))
{var inst_14745 = (state_14759[(8)]);var inst_14750 = cljs.core.apply.call(null,f,inst_14745);var state_14759__$1 = state_14759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14759__$1,(16),out,inst_14750);
} else
{if((state_val_14760 === (16)))
{var inst_14752 = (state_14759[(2)]);var state_14759__$1 = (function (){var statearr_14777 = state_14759;(statearr_14777[(12)] = inst_14752);
return statearr_14777;
})();var statearr_14778_14802 = state_14759__$1;(statearr_14778_14802[(2)] = null);
(statearr_14778_14802[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (10)))
{var inst_14727 = (state_14759[(2)]);var inst_14728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14759__$1 = (function (){var statearr_14779 = state_14759;(statearr_14779[(13)] = inst_14727);
return statearr_14779;
})();var statearr_14780_14803 = state_14759__$1;(statearr_14780_14803[(2)] = inst_14728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14760 === (8)))
{var inst_14741 = (state_14759[(2)]);var state_14759__$1 = state_14759;var statearr_14781_14804 = state_14759__$1;(statearr_14781_14804[(2)] = inst_14741);
(statearr_14781_14804[(1)] = (5));
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
});})(c__5849__auto___14789,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5834__auto__,c__5849__auto___14789,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14785[(0)] = state_machine__5835__auto__);
(statearr_14785[(1)] = (1));
return statearr_14785;
});
var state_machine__5835__auto____1 = (function (state_14759){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14786){if((e14786 instanceof Object))
{var ex__5838__auto__ = e14786;var statearr_14787_14805 = state_14759;(statearr_14787_14805[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14806 = state_14759;
state_14759 = G__14806;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14759){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14789,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5851__auto__ = (function (){var statearr_14788 = f__5850__auto__.call(null);(statearr_14788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14789);
return statearr_14788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14789,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___14914 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___14914,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___14914,out){
return (function (state_14890){var state_val_14891 = (state_14890[(1)]);if((state_val_14891 === (7)))
{var inst_14869 = (state_14890[(7)]);var inst_14870 = (state_14890[(8)]);var inst_14869__$1 = (state_14890[(2)]);var inst_14870__$1 = cljs.core.nth.call(null,inst_14869__$1,(0),null);var inst_14871 = cljs.core.nth.call(null,inst_14869__$1,(1),null);var inst_14872 = (inst_14870__$1 == null);var state_14890__$1 = (function (){var statearr_14892 = state_14890;(statearr_14892[(7)] = inst_14869__$1);
(statearr_14892[(8)] = inst_14870__$1);
(statearr_14892[(9)] = inst_14871);
return statearr_14892;
})();if(cljs.core.truth_(inst_14872))
{var statearr_14893_14915 = state_14890__$1;(statearr_14893_14915[(1)] = (8));
} else
{var statearr_14894_14916 = state_14890__$1;(statearr_14894_14916[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (1)))
{var inst_14861 = cljs.core.vec.call(null,chs);var inst_14862 = inst_14861;var state_14890__$1 = (function (){var statearr_14895 = state_14890;(statearr_14895[(10)] = inst_14862);
return statearr_14895;
})();var statearr_14896_14917 = state_14890__$1;(statearr_14896_14917[(2)] = null);
(statearr_14896_14917[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (4)))
{var inst_14862 = (state_14890[(10)]);var state_14890__$1 = state_14890;return cljs.core.async.ioc_alts_BANG_.call(null,state_14890__$1,(7),inst_14862);
} else
{if((state_val_14891 === (6)))
{var inst_14886 = (state_14890[(2)]);var state_14890__$1 = state_14890;var statearr_14897_14918 = state_14890__$1;(statearr_14897_14918[(2)] = inst_14886);
(statearr_14897_14918[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (3)))
{var inst_14888 = (state_14890[(2)]);var state_14890__$1 = state_14890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14890__$1,inst_14888);
} else
{if((state_val_14891 === (2)))
{var inst_14862 = (state_14890[(10)]);var inst_14864 = cljs.core.count.call(null,inst_14862);var inst_14865 = (inst_14864 > (0));var state_14890__$1 = state_14890;if(cljs.core.truth_(inst_14865))
{var statearr_14899_14919 = state_14890__$1;(statearr_14899_14919[(1)] = (4));
} else
{var statearr_14900_14920 = state_14890__$1;(statearr_14900_14920[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (11)))
{var inst_14862 = (state_14890[(10)]);var inst_14879 = (state_14890[(2)]);var tmp14898 = inst_14862;var inst_14862__$1 = tmp14898;var state_14890__$1 = (function (){var statearr_14901 = state_14890;(statearr_14901[(11)] = inst_14879);
(statearr_14901[(10)] = inst_14862__$1);
return statearr_14901;
})();var statearr_14902_14921 = state_14890__$1;(statearr_14902_14921[(2)] = null);
(statearr_14902_14921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (9)))
{var inst_14870 = (state_14890[(8)]);var state_14890__$1 = state_14890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14890__$1,(11),out,inst_14870);
} else
{if((state_val_14891 === (5)))
{var inst_14884 = cljs.core.async.close_BANG_.call(null,out);var state_14890__$1 = state_14890;var statearr_14903_14922 = state_14890__$1;(statearr_14903_14922[(2)] = inst_14884);
(statearr_14903_14922[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (10)))
{var inst_14882 = (state_14890[(2)]);var state_14890__$1 = state_14890;var statearr_14904_14923 = state_14890__$1;(statearr_14904_14923[(2)] = inst_14882);
(statearr_14904_14923[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14891 === (8)))
{var inst_14862 = (state_14890[(10)]);var inst_14869 = (state_14890[(7)]);var inst_14870 = (state_14890[(8)]);var inst_14871 = (state_14890[(9)]);var inst_14874 = (function (){var c = inst_14871;var v = inst_14870;var vec__14867 = inst_14869;var cs = inst_14862;return ((function (c,v,vec__14867,cs,inst_14862,inst_14869,inst_14870,inst_14871,state_val_14891,c__5849__auto___14914,out){
return (function (p1__14807_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14807_SHARP_);
});
;})(c,v,vec__14867,cs,inst_14862,inst_14869,inst_14870,inst_14871,state_val_14891,c__5849__auto___14914,out))
})();var inst_14875 = cljs.core.filterv.call(null,inst_14874,inst_14862);var inst_14862__$1 = inst_14875;var state_14890__$1 = (function (){var statearr_14905 = state_14890;(statearr_14905[(10)] = inst_14862__$1);
return statearr_14905;
})();var statearr_14906_14924 = state_14890__$1;(statearr_14906_14924[(2)] = null);
(statearr_14906_14924[(1)] = (2));
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
});})(c__5849__auto___14914,out))
;return ((function (switch__5834__auto__,c__5849__auto___14914,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_14910 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14910[(0)] = state_machine__5835__auto__);
(statearr_14910[(1)] = (1));
return statearr_14910;
});
var state_machine__5835__auto____1 = (function (state_14890){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14890);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e14911){if((e14911 instanceof Object))
{var ex__5838__auto__ = e14911;var statearr_14912_14925 = state_14890;(statearr_14912_14925[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14911;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14926 = state_14890;
state_14890 = G__14926;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14890){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___14914,out))
})();var state__5851__auto__ = (function (){var statearr_14913 = f__5850__auto__.call(null);(statearr_14913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___14914);
return statearr_14913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___14914,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15019 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15019,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15019,out){
return (function (state_14996){var state_val_14997 = (state_14996[(1)]);if((state_val_14997 === (7)))
{var inst_14978 = (state_14996[(7)]);var inst_14978__$1 = (state_14996[(2)]);var inst_14979 = (inst_14978__$1 == null);var inst_14980 = cljs.core.not.call(null,inst_14979);var state_14996__$1 = (function (){var statearr_14998 = state_14996;(statearr_14998[(7)] = inst_14978__$1);
return statearr_14998;
})();if(inst_14980)
{var statearr_14999_15020 = state_14996__$1;(statearr_14999_15020[(1)] = (8));
} else
{var statearr_15000_15021 = state_14996__$1;(statearr_15000_15021[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (1)))
{var inst_14973 = (0);var state_14996__$1 = (function (){var statearr_15001 = state_14996;(statearr_15001[(8)] = inst_14973);
return statearr_15001;
})();var statearr_15002_15022 = state_14996__$1;(statearr_15002_15022[(2)] = null);
(statearr_15002_15022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (4)))
{var state_14996__$1 = state_14996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14996__$1,(7),ch);
} else
{if((state_val_14997 === (6)))
{var inst_14991 = (state_14996[(2)]);var state_14996__$1 = state_14996;var statearr_15003_15023 = state_14996__$1;(statearr_15003_15023[(2)] = inst_14991);
(statearr_15003_15023[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (3)))
{var inst_14993 = (state_14996[(2)]);var inst_14994 = cljs.core.async.close_BANG_.call(null,out);var state_14996__$1 = (function (){var statearr_15004 = state_14996;(statearr_15004[(9)] = inst_14993);
return statearr_15004;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14996__$1,inst_14994);
} else
{if((state_val_14997 === (2)))
{var inst_14973 = (state_14996[(8)]);var inst_14975 = (inst_14973 < n);var state_14996__$1 = state_14996;if(cljs.core.truth_(inst_14975))
{var statearr_15005_15024 = state_14996__$1;(statearr_15005_15024[(1)] = (4));
} else
{var statearr_15006_15025 = state_14996__$1;(statearr_15006_15025[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (11)))
{var inst_14973 = (state_14996[(8)]);var inst_14983 = (state_14996[(2)]);var inst_14984 = (inst_14973 + (1));var inst_14973__$1 = inst_14984;var state_14996__$1 = (function (){var statearr_15007 = state_14996;(statearr_15007[(8)] = inst_14973__$1);
(statearr_15007[(10)] = inst_14983);
return statearr_15007;
})();var statearr_15008_15026 = state_14996__$1;(statearr_15008_15026[(2)] = null);
(statearr_15008_15026[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (9)))
{var state_14996__$1 = state_14996;var statearr_15009_15027 = state_14996__$1;(statearr_15009_15027[(2)] = null);
(statearr_15009_15027[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (5)))
{var state_14996__$1 = state_14996;var statearr_15010_15028 = state_14996__$1;(statearr_15010_15028[(2)] = null);
(statearr_15010_15028[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (10)))
{var inst_14988 = (state_14996[(2)]);var state_14996__$1 = state_14996;var statearr_15011_15029 = state_14996__$1;(statearr_15011_15029[(2)] = inst_14988);
(statearr_15011_15029[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14997 === (8)))
{var inst_14978 = (state_14996[(7)]);var state_14996__$1 = state_14996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14996__$1,(11),out,inst_14978);
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
});})(c__5849__auto___15019,out))
;return ((function (switch__5834__auto__,c__5849__auto___15019,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15015 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15015[(0)] = state_machine__5835__auto__);
(statearr_15015[(1)] = (1));
return statearr_15015;
});
var state_machine__5835__auto____1 = (function (state_14996){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_14996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15016){if((e15016 instanceof Object))
{var ex__5838__auto__ = e15016;var statearr_15017_15030 = state_14996;(statearr_15017_15030[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14996);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15016;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15031 = state_14996;
state_14996 = G__15031;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_14996){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_14996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15019,out))
})();var state__5851__auto__ = (function (){var statearr_15018 = f__5850__auto__.call(null);(statearr_15018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15019);
return statearr_15018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15019,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15039 = (function (ch,f,map_LT_,meta15040){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15040 = meta15040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15039.cljs$lang$type = true;
cljs.core.async.t15039.cljs$lang$ctorStr = "cljs.core.async/t15039";
cljs.core.async.t15039.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15039");
});
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15042 = (function (fn1,_,meta15040,ch,f,map_LT_,meta15043){
this.fn1 = fn1;
this._ = _;
this.meta15040 = meta15040;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15043 = meta15043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15042.cljs$lang$type = true;
cljs.core.async.t15042.cljs$lang$ctorStr = "cljs.core.async/t15042";
cljs.core.async.t15042.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15042");
});})(___$1))
;
cljs.core.async.t15042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15032_SHARP_){return f1.call(null,(((p1__15032_SHARP_ == null))?null:self__.f.call(null,p1__15032_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15044){var self__ = this;
var _15044__$1 = this;return self__.meta15043;
});})(___$1))
;
cljs.core.async.t15042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15044,meta15043__$1){var self__ = this;
var _15044__$1 = this;return (new cljs.core.async.t15042(self__.fn1,self__._,self__.meta15040,self__.ch,self__.f,self__.map_LT_,meta15043__$1));
});})(___$1))
;
cljs.core.async.__GT_t15042 = ((function (___$1){
return (function __GT_t15042(fn1__$1,___$2,meta15040__$1,ch__$2,f__$2,map_LT___$2,meta15043){return (new cljs.core.async.t15042(fn1__$1,___$2,meta15040__$1,ch__$2,f__$2,map_LT___$2,meta15043));
});})(___$1))
;
}
return (new cljs.core.async.t15042(fn1,___$1,self__.meta15040,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15041){var self__ = this;
var _15041__$1 = this;return self__.meta15040;
});
cljs.core.async.t15039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15041,meta15040__$1){var self__ = this;
var _15041__$1 = this;return (new cljs.core.async.t15039(self__.ch,self__.f,self__.map_LT_,meta15040__$1));
});
cljs.core.async.__GT_t15039 = (function __GT_t15039(ch__$1,f__$1,map_LT___$1,meta15040){return (new cljs.core.async.t15039(ch__$1,f__$1,map_LT___$1,meta15040));
});
}
return (new cljs.core.async.t15039(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15048 = (function (ch,f,map_GT_,meta15049){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15049 = meta15049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15048.cljs$lang$type = true;
cljs.core.async.t15048.cljs$lang$ctorStr = "cljs.core.async/t15048";
cljs.core.async.t15048.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15048");
});
cljs.core.async.t15048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t15048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15048.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15050){var self__ = this;
var _15050__$1 = this;return self__.meta15049;
});
cljs.core.async.t15048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15050,meta15049__$1){var self__ = this;
var _15050__$1 = this;return (new cljs.core.async.t15048(self__.ch,self__.f,self__.map_GT_,meta15049__$1));
});
cljs.core.async.__GT_t15048 = (function __GT_t15048(ch__$1,f__$1,map_GT___$1,meta15049){return (new cljs.core.async.t15048(ch__$1,f__$1,map_GT___$1,meta15049));
});
}
return (new cljs.core.async.t15048(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15054 = (function (ch,p,filter_GT_,meta15055){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15055 = meta15055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15054.cljs$lang$type = true;
cljs.core.async.t15054.cljs$lang$ctorStr = "cljs.core.async/t15054";
cljs.core.async.t15054.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t15054");
});
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15054.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t15054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15056){var self__ = this;
var _15056__$1 = this;return self__.meta15055;
});
cljs.core.async.t15054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15056,meta15055__$1){var self__ = this;
var _15056__$1 = this;return (new cljs.core.async.t15054(self__.ch,self__.p,self__.filter_GT_,meta15055__$1));
});
cljs.core.async.__GT_t15054 = (function __GT_t15054(ch__$1,p__$1,filter_GT___$1,meta15055){return (new cljs.core.async.t15054(ch__$1,p__$1,filter_GT___$1,meta15055));
});
}
return (new cljs.core.async.t15054(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15139,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15139,out){
return (function (state_15118){var state_val_15119 = (state_15118[(1)]);if((state_val_15119 === (7)))
{var inst_15114 = (state_15118[(2)]);var state_15118__$1 = state_15118;var statearr_15120_15140 = state_15118__$1;(statearr_15120_15140[(2)] = inst_15114);
(statearr_15120_15140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (1)))
{var state_15118__$1 = state_15118;var statearr_15121_15141 = state_15118__$1;(statearr_15121_15141[(2)] = null);
(statearr_15121_15141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (4)))
{var inst_15100 = (state_15118[(7)]);var inst_15100__$1 = (state_15118[(2)]);var inst_15101 = (inst_15100__$1 == null);var state_15118__$1 = (function (){var statearr_15122 = state_15118;(statearr_15122[(7)] = inst_15100__$1);
return statearr_15122;
})();if(cljs.core.truth_(inst_15101))
{var statearr_15123_15142 = state_15118__$1;(statearr_15123_15142[(1)] = (5));
} else
{var statearr_15124_15143 = state_15118__$1;(statearr_15124_15143[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (6)))
{var inst_15100 = (state_15118[(7)]);var inst_15105 = p.call(null,inst_15100);var state_15118__$1 = state_15118;if(cljs.core.truth_(inst_15105))
{var statearr_15125_15144 = state_15118__$1;(statearr_15125_15144[(1)] = (8));
} else
{var statearr_15126_15145 = state_15118__$1;(statearr_15126_15145[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (3)))
{var inst_15116 = (state_15118[(2)]);var state_15118__$1 = state_15118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15118__$1,inst_15116);
} else
{if((state_val_15119 === (2)))
{var state_15118__$1 = state_15118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15118__$1,(4),ch);
} else
{if((state_val_15119 === (11)))
{var inst_15108 = (state_15118[(2)]);var state_15118__$1 = state_15118;var statearr_15127_15146 = state_15118__$1;(statearr_15127_15146[(2)] = inst_15108);
(statearr_15127_15146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (9)))
{var state_15118__$1 = state_15118;var statearr_15128_15147 = state_15118__$1;(statearr_15128_15147[(2)] = null);
(statearr_15128_15147[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (5)))
{var inst_15103 = cljs.core.async.close_BANG_.call(null,out);var state_15118__$1 = state_15118;var statearr_15129_15148 = state_15118__$1;(statearr_15129_15148[(2)] = inst_15103);
(statearr_15129_15148[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (10)))
{var inst_15111 = (state_15118[(2)]);var state_15118__$1 = (function (){var statearr_15130 = state_15118;(statearr_15130[(8)] = inst_15111);
return statearr_15130;
})();var statearr_15131_15149 = state_15118__$1;(statearr_15131_15149[(2)] = null);
(statearr_15131_15149[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15119 === (8)))
{var inst_15100 = (state_15118[(7)]);var state_15118__$1 = state_15118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15118__$1,(11),out,inst_15100);
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
});})(c__5849__auto___15139,out))
;return ((function (switch__5834__auto__,c__5849__auto___15139,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15135 = [null,null,null,null,null,null,null,null,null];(statearr_15135[(0)] = state_machine__5835__auto__);
(statearr_15135[(1)] = (1));
return statearr_15135;
});
var state_machine__5835__auto____1 = (function (state_15118){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15136){if((e15136 instanceof Object))
{var ex__5838__auto__ = e15136;var statearr_15137_15150 = state_15118;(statearr_15137_15150[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15118);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15136;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15151 = state_15118;
state_15118 = G__15151;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15118){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15139,out))
})();var state__5851__auto__ = (function (){var statearr_15138 = f__5850__auto__.call(null);(statearr_15138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15139);
return statearr_15138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15139,out))
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
return (function (state_15317){var state_val_15318 = (state_15317[(1)]);if((state_val_15318 === (7)))
{var inst_15313 = (state_15317[(2)]);var state_15317__$1 = state_15317;var statearr_15319_15360 = state_15317__$1;(statearr_15319_15360[(2)] = inst_15313);
(statearr_15319_15360[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (20)))
{var inst_15283 = (state_15317[(7)]);var inst_15294 = (state_15317[(2)]);var inst_15295 = cljs.core.next.call(null,inst_15283);var inst_15269 = inst_15295;var inst_15270 = null;var inst_15271 = (0);var inst_15272 = (0);var state_15317__$1 = (function (){var statearr_15320 = state_15317;(statearr_15320[(8)] = inst_15272);
(statearr_15320[(9)] = inst_15269);
(statearr_15320[(10)] = inst_15271);
(statearr_15320[(11)] = inst_15270);
(statearr_15320[(12)] = inst_15294);
return statearr_15320;
})();var statearr_15321_15361 = state_15317__$1;(statearr_15321_15361[(2)] = null);
(statearr_15321_15361[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (1)))
{var state_15317__$1 = state_15317;var statearr_15322_15362 = state_15317__$1;(statearr_15322_15362[(2)] = null);
(statearr_15322_15362[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (4)))
{var inst_15258 = (state_15317[(13)]);var inst_15258__$1 = (state_15317[(2)]);var inst_15259 = (inst_15258__$1 == null);var state_15317__$1 = (function (){var statearr_15323 = state_15317;(statearr_15323[(13)] = inst_15258__$1);
return statearr_15323;
})();if(cljs.core.truth_(inst_15259))
{var statearr_15324_15363 = state_15317__$1;(statearr_15324_15363[(1)] = (5));
} else
{var statearr_15325_15364 = state_15317__$1;(statearr_15325_15364[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (15)))
{var state_15317__$1 = state_15317;var statearr_15329_15365 = state_15317__$1;(statearr_15329_15365[(2)] = null);
(statearr_15329_15365[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (21)))
{var state_15317__$1 = state_15317;var statearr_15330_15366 = state_15317__$1;(statearr_15330_15366[(2)] = null);
(statearr_15330_15366[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (13)))
{var inst_15272 = (state_15317[(8)]);var inst_15269 = (state_15317[(9)]);var inst_15271 = (state_15317[(10)]);var inst_15270 = (state_15317[(11)]);var inst_15279 = (state_15317[(2)]);var inst_15280 = (inst_15272 + (1));var tmp15326 = inst_15269;var tmp15327 = inst_15271;var tmp15328 = inst_15270;var inst_15269__$1 = tmp15326;var inst_15270__$1 = tmp15328;var inst_15271__$1 = tmp15327;var inst_15272__$1 = inst_15280;var state_15317__$1 = (function (){var statearr_15331 = state_15317;(statearr_15331[(8)] = inst_15272__$1);
(statearr_15331[(9)] = inst_15269__$1);
(statearr_15331[(10)] = inst_15271__$1);
(statearr_15331[(11)] = inst_15270__$1);
(statearr_15331[(14)] = inst_15279);
return statearr_15331;
})();var statearr_15332_15367 = state_15317__$1;(statearr_15332_15367[(2)] = null);
(statearr_15332_15367[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (22)))
{var state_15317__$1 = state_15317;var statearr_15333_15368 = state_15317__$1;(statearr_15333_15368[(2)] = null);
(statearr_15333_15368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (6)))
{var inst_15258 = (state_15317[(13)]);var inst_15267 = f.call(null,inst_15258);var inst_15268 = cljs.core.seq.call(null,inst_15267);var inst_15269 = inst_15268;var inst_15270 = null;var inst_15271 = (0);var inst_15272 = (0);var state_15317__$1 = (function (){var statearr_15334 = state_15317;(statearr_15334[(8)] = inst_15272);
(statearr_15334[(9)] = inst_15269);
(statearr_15334[(10)] = inst_15271);
(statearr_15334[(11)] = inst_15270);
return statearr_15334;
})();var statearr_15335_15369 = state_15317__$1;(statearr_15335_15369[(2)] = null);
(statearr_15335_15369[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (17)))
{var inst_15283 = (state_15317[(7)]);var inst_15287 = cljs.core.chunk_first.call(null,inst_15283);var inst_15288 = cljs.core.chunk_rest.call(null,inst_15283);var inst_15289 = cljs.core.count.call(null,inst_15287);var inst_15269 = inst_15288;var inst_15270 = inst_15287;var inst_15271 = inst_15289;var inst_15272 = (0);var state_15317__$1 = (function (){var statearr_15336 = state_15317;(statearr_15336[(8)] = inst_15272);
(statearr_15336[(9)] = inst_15269);
(statearr_15336[(10)] = inst_15271);
(statearr_15336[(11)] = inst_15270);
return statearr_15336;
})();var statearr_15337_15370 = state_15317__$1;(statearr_15337_15370[(2)] = null);
(statearr_15337_15370[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (3)))
{var inst_15315 = (state_15317[(2)]);var state_15317__$1 = state_15317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15317__$1,inst_15315);
} else
{if((state_val_15318 === (12)))
{var inst_15303 = (state_15317[(2)]);var state_15317__$1 = state_15317;var statearr_15338_15371 = state_15317__$1;(statearr_15338_15371[(2)] = inst_15303);
(statearr_15338_15371[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (2)))
{var state_15317__$1 = state_15317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15317__$1,(4),in$);
} else
{if((state_val_15318 === (23)))
{var inst_15311 = (state_15317[(2)]);var state_15317__$1 = state_15317;var statearr_15339_15372 = state_15317__$1;(statearr_15339_15372[(2)] = inst_15311);
(statearr_15339_15372[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (19)))
{var inst_15298 = (state_15317[(2)]);var state_15317__$1 = state_15317;var statearr_15340_15373 = state_15317__$1;(statearr_15340_15373[(2)] = inst_15298);
(statearr_15340_15373[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (11)))
{var inst_15283 = (state_15317[(7)]);var inst_15269 = (state_15317[(9)]);var inst_15283__$1 = cljs.core.seq.call(null,inst_15269);var state_15317__$1 = (function (){var statearr_15341 = state_15317;(statearr_15341[(7)] = inst_15283__$1);
return statearr_15341;
})();if(inst_15283__$1)
{var statearr_15342_15374 = state_15317__$1;(statearr_15342_15374[(1)] = (14));
} else
{var statearr_15343_15375 = state_15317__$1;(statearr_15343_15375[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (9)))
{var inst_15305 = (state_15317[(2)]);var inst_15306 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15317__$1 = (function (){var statearr_15344 = state_15317;(statearr_15344[(15)] = inst_15305);
return statearr_15344;
})();if(cljs.core.truth_(inst_15306))
{var statearr_15345_15376 = state_15317__$1;(statearr_15345_15376[(1)] = (21));
} else
{var statearr_15346_15377 = state_15317__$1;(statearr_15346_15377[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (5)))
{var inst_15261 = cljs.core.async.close_BANG_.call(null,out);var state_15317__$1 = state_15317;var statearr_15347_15378 = state_15317__$1;(statearr_15347_15378[(2)] = inst_15261);
(statearr_15347_15378[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (14)))
{var inst_15283 = (state_15317[(7)]);var inst_15285 = cljs.core.chunked_seq_QMARK_.call(null,inst_15283);var state_15317__$1 = state_15317;if(inst_15285)
{var statearr_15348_15379 = state_15317__$1;(statearr_15348_15379[(1)] = (17));
} else
{var statearr_15349_15380 = state_15317__$1;(statearr_15349_15380[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (16)))
{var inst_15301 = (state_15317[(2)]);var state_15317__$1 = state_15317;var statearr_15350_15381 = state_15317__$1;(statearr_15350_15381[(2)] = inst_15301);
(statearr_15350_15381[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15318 === (10)))
{var inst_15272 = (state_15317[(8)]);var inst_15270 = (state_15317[(11)]);var inst_15277 = cljs.core._nth.call(null,inst_15270,inst_15272);var state_15317__$1 = state_15317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15317__$1,(13),out,inst_15277);
} else
{if((state_val_15318 === (18)))
{var inst_15283 = (state_15317[(7)]);var inst_15292 = cljs.core.first.call(null,inst_15283);var state_15317__$1 = state_15317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15317__$1,(20),out,inst_15292);
} else
{if((state_val_15318 === (8)))
{var inst_15272 = (state_15317[(8)]);var inst_15271 = (state_15317[(10)]);var inst_15274 = (inst_15272 < inst_15271);var inst_15275 = inst_15274;var state_15317__$1 = state_15317;if(cljs.core.truth_(inst_15275))
{var statearr_15351_15382 = state_15317__$1;(statearr_15351_15382[(1)] = (10));
} else
{var statearr_15352_15383 = state_15317__$1;(statearr_15352_15383[(1)] = (11));
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
var state_machine__5835__auto____0 = (function (){var statearr_15356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15356[(0)] = state_machine__5835__auto__);
(statearr_15356[(1)] = (1));
return statearr_15356;
});
var state_machine__5835__auto____1 = (function (state_15317){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15317);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15357){if((e15357 instanceof Object))
{var ex__5838__auto__ = e15357;var statearr_15358_15384 = state_15317;(statearr_15358_15384[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15317);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15357;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15385 = state_15317;
state_15317 = G__15385;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15317){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto__))
})();var state__5851__auto__ = (function (){var statearr_15359 = f__5850__auto__.call(null);(statearr_15359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto__);
return statearr_15359;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15482 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15482,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15482,out){
return (function (state_15457){var state_val_15458 = (state_15457[(1)]);if((state_val_15458 === (7)))
{var inst_15452 = (state_15457[(2)]);var state_15457__$1 = state_15457;var statearr_15459_15483 = state_15457__$1;(statearr_15459_15483[(2)] = inst_15452);
(statearr_15459_15483[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (1)))
{var inst_15434 = null;var state_15457__$1 = (function (){var statearr_15460 = state_15457;(statearr_15460[(7)] = inst_15434);
return statearr_15460;
})();var statearr_15461_15484 = state_15457__$1;(statearr_15461_15484[(2)] = null);
(statearr_15461_15484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (4)))
{var inst_15437 = (state_15457[(8)]);var inst_15437__$1 = (state_15457[(2)]);var inst_15438 = (inst_15437__$1 == null);var inst_15439 = cljs.core.not.call(null,inst_15438);var state_15457__$1 = (function (){var statearr_15462 = state_15457;(statearr_15462[(8)] = inst_15437__$1);
return statearr_15462;
})();if(inst_15439)
{var statearr_15463_15485 = state_15457__$1;(statearr_15463_15485[(1)] = (5));
} else
{var statearr_15464_15486 = state_15457__$1;(statearr_15464_15486[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (6)))
{var state_15457__$1 = state_15457;var statearr_15465_15487 = state_15457__$1;(statearr_15465_15487[(2)] = null);
(statearr_15465_15487[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (3)))
{var inst_15454 = (state_15457[(2)]);var inst_15455 = cljs.core.async.close_BANG_.call(null,out);var state_15457__$1 = (function (){var statearr_15466 = state_15457;(statearr_15466[(9)] = inst_15454);
return statearr_15466;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15457__$1,inst_15455);
} else
{if((state_val_15458 === (2)))
{var state_15457__$1 = state_15457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15457__$1,(4),ch);
} else
{if((state_val_15458 === (11)))
{var inst_15437 = (state_15457[(8)]);var inst_15446 = (state_15457[(2)]);var inst_15434 = inst_15437;var state_15457__$1 = (function (){var statearr_15467 = state_15457;(statearr_15467[(10)] = inst_15446);
(statearr_15467[(7)] = inst_15434);
return statearr_15467;
})();var statearr_15468_15488 = state_15457__$1;(statearr_15468_15488[(2)] = null);
(statearr_15468_15488[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (9)))
{var inst_15437 = (state_15457[(8)]);var state_15457__$1 = state_15457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15457__$1,(11),out,inst_15437);
} else
{if((state_val_15458 === (5)))
{var inst_15437 = (state_15457[(8)]);var inst_15434 = (state_15457[(7)]);var inst_15441 = cljs.core._EQ_.call(null,inst_15437,inst_15434);var state_15457__$1 = state_15457;if(inst_15441)
{var statearr_15470_15489 = state_15457__$1;(statearr_15470_15489[(1)] = (8));
} else
{var statearr_15471_15490 = state_15457__$1;(statearr_15471_15490[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (10)))
{var inst_15449 = (state_15457[(2)]);var state_15457__$1 = state_15457;var statearr_15472_15491 = state_15457__$1;(statearr_15472_15491[(2)] = inst_15449);
(statearr_15472_15491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15458 === (8)))
{var inst_15434 = (state_15457[(7)]);var tmp15469 = inst_15434;var inst_15434__$1 = tmp15469;var state_15457__$1 = (function (){var statearr_15473 = state_15457;(statearr_15473[(7)] = inst_15434__$1);
return statearr_15473;
})();var statearr_15474_15492 = state_15457__$1;(statearr_15474_15492[(2)] = null);
(statearr_15474_15492[(1)] = (2));
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
});})(c__5849__auto___15482,out))
;return ((function (switch__5834__auto__,c__5849__auto___15482,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15478 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15478[(0)] = state_machine__5835__auto__);
(statearr_15478[(1)] = (1));
return statearr_15478;
});
var state_machine__5835__auto____1 = (function (state_15457){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15479){if((e15479 instanceof Object))
{var ex__5838__auto__ = e15479;var statearr_15480_15493 = state_15457;(statearr_15480_15493[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15457);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15479;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15494 = state_15457;
state_15457 = G__15494;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15457){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15482,out))
})();var state__5851__auto__ = (function (){var statearr_15481 = f__5850__auto__.call(null);(statearr_15481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15482);
return statearr_15481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15482,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15629 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15629,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15629,out){
return (function (state_15599){var state_val_15600 = (state_15599[(1)]);if((state_val_15600 === (7)))
{var inst_15595 = (state_15599[(2)]);var state_15599__$1 = state_15599;var statearr_15601_15630 = state_15599__$1;(statearr_15601_15630[(2)] = inst_15595);
(statearr_15601_15630[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (1)))
{var inst_15562 = (new Array(n));var inst_15563 = inst_15562;var inst_15564 = (0);var state_15599__$1 = (function (){var statearr_15602 = state_15599;(statearr_15602[(7)] = inst_15564);
(statearr_15602[(8)] = inst_15563);
return statearr_15602;
})();var statearr_15603_15631 = state_15599__$1;(statearr_15603_15631[(2)] = null);
(statearr_15603_15631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (4)))
{var inst_15567 = (state_15599[(9)]);var inst_15567__$1 = (state_15599[(2)]);var inst_15568 = (inst_15567__$1 == null);var inst_15569 = cljs.core.not.call(null,inst_15568);var state_15599__$1 = (function (){var statearr_15604 = state_15599;(statearr_15604[(9)] = inst_15567__$1);
return statearr_15604;
})();if(inst_15569)
{var statearr_15605_15632 = state_15599__$1;(statearr_15605_15632[(1)] = (5));
} else
{var statearr_15606_15633 = state_15599__$1;(statearr_15606_15633[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (15)))
{var inst_15589 = (state_15599[(2)]);var state_15599__$1 = state_15599;var statearr_15607_15634 = state_15599__$1;(statearr_15607_15634[(2)] = inst_15589);
(statearr_15607_15634[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (13)))
{var state_15599__$1 = state_15599;var statearr_15608_15635 = state_15599__$1;(statearr_15608_15635[(2)] = null);
(statearr_15608_15635[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (6)))
{var inst_15564 = (state_15599[(7)]);var inst_15585 = (inst_15564 > (0));var state_15599__$1 = state_15599;if(cljs.core.truth_(inst_15585))
{var statearr_15609_15636 = state_15599__$1;(statearr_15609_15636[(1)] = (12));
} else
{var statearr_15610_15637 = state_15599__$1;(statearr_15610_15637[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (3)))
{var inst_15597 = (state_15599[(2)]);var state_15599__$1 = state_15599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15599__$1,inst_15597);
} else
{if((state_val_15600 === (12)))
{var inst_15563 = (state_15599[(8)]);var inst_15587 = cljs.core.vec.call(null,inst_15563);var state_15599__$1 = state_15599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15599__$1,(15),out,inst_15587);
} else
{if((state_val_15600 === (2)))
{var state_15599__$1 = state_15599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15599__$1,(4),ch);
} else
{if((state_val_15600 === (11)))
{var inst_15579 = (state_15599[(2)]);var inst_15580 = (new Array(n));var inst_15563 = inst_15580;var inst_15564 = (0);var state_15599__$1 = (function (){var statearr_15611 = state_15599;(statearr_15611[(10)] = inst_15579);
(statearr_15611[(7)] = inst_15564);
(statearr_15611[(8)] = inst_15563);
return statearr_15611;
})();var statearr_15612_15638 = state_15599__$1;(statearr_15612_15638[(2)] = null);
(statearr_15612_15638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (9)))
{var inst_15563 = (state_15599[(8)]);var inst_15577 = cljs.core.vec.call(null,inst_15563);var state_15599__$1 = state_15599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15599__$1,(11),out,inst_15577);
} else
{if((state_val_15600 === (5)))
{var inst_15567 = (state_15599[(9)]);var inst_15572 = (state_15599[(11)]);var inst_15564 = (state_15599[(7)]);var inst_15563 = (state_15599[(8)]);var inst_15571 = (inst_15563[inst_15564] = inst_15567);var inst_15572__$1 = (inst_15564 + (1));var inst_15573 = (inst_15572__$1 < n);var state_15599__$1 = (function (){var statearr_15613 = state_15599;(statearr_15613[(11)] = inst_15572__$1);
(statearr_15613[(12)] = inst_15571);
return statearr_15613;
})();if(cljs.core.truth_(inst_15573))
{var statearr_15614_15639 = state_15599__$1;(statearr_15614_15639[(1)] = (8));
} else
{var statearr_15615_15640 = state_15599__$1;(statearr_15615_15640[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (14)))
{var inst_15592 = (state_15599[(2)]);var inst_15593 = cljs.core.async.close_BANG_.call(null,out);var state_15599__$1 = (function (){var statearr_15617 = state_15599;(statearr_15617[(13)] = inst_15592);
return statearr_15617;
})();var statearr_15618_15641 = state_15599__$1;(statearr_15618_15641[(2)] = inst_15593);
(statearr_15618_15641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (10)))
{var inst_15583 = (state_15599[(2)]);var state_15599__$1 = state_15599;var statearr_15619_15642 = state_15599__$1;(statearr_15619_15642[(2)] = inst_15583);
(statearr_15619_15642[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15600 === (8)))
{var inst_15572 = (state_15599[(11)]);var inst_15563 = (state_15599[(8)]);var tmp15616 = inst_15563;var inst_15563__$1 = tmp15616;var inst_15564 = inst_15572;var state_15599__$1 = (function (){var statearr_15620 = state_15599;(statearr_15620[(7)] = inst_15564);
(statearr_15620[(8)] = inst_15563__$1);
return statearr_15620;
})();var statearr_15621_15643 = state_15599__$1;(statearr_15621_15643[(2)] = null);
(statearr_15621_15643[(1)] = (2));
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
});})(c__5849__auto___15629,out))
;return ((function (switch__5834__auto__,c__5849__auto___15629,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15625[(0)] = state_machine__5835__auto__);
(statearr_15625[(1)] = (1));
return statearr_15625;
});
var state_machine__5835__auto____1 = (function (state_15599){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15626){if((e15626 instanceof Object))
{var ex__5838__auto__ = e15626;var statearr_15627_15644 = state_15599;(statearr_15627_15644[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15626;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15645 = state_15599;
state_15599 = G__15645;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15599){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15629,out))
})();var state__5851__auto__ = (function (){var statearr_15628 = f__5850__auto__.call(null);(statearr_15628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15629);
return statearr_15628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15629,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5849__auto___15788 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5849__auto___15788,out){
return (function (){var f__5850__auto__ = (function (){var switch__5834__auto__ = ((function (c__5849__auto___15788,out){
return (function (state_15758){var state_val_15759 = (state_15758[(1)]);if((state_val_15759 === (7)))
{var inst_15754 = (state_15758[(2)]);var state_15758__$1 = state_15758;var statearr_15760_15789 = state_15758__$1;(statearr_15760_15789[(2)] = inst_15754);
(statearr_15760_15789[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (1)))
{var inst_15717 = [];var inst_15718 = inst_15717;var inst_15719 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15758__$1 = (function (){var statearr_15761 = state_15758;(statearr_15761[(7)] = inst_15719);
(statearr_15761[(8)] = inst_15718);
return statearr_15761;
})();var statearr_15762_15790 = state_15758__$1;(statearr_15762_15790[(2)] = null);
(statearr_15762_15790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (4)))
{var inst_15722 = (state_15758[(9)]);var inst_15722__$1 = (state_15758[(2)]);var inst_15723 = (inst_15722__$1 == null);var inst_15724 = cljs.core.not.call(null,inst_15723);var state_15758__$1 = (function (){var statearr_15763 = state_15758;(statearr_15763[(9)] = inst_15722__$1);
return statearr_15763;
})();if(inst_15724)
{var statearr_15764_15791 = state_15758__$1;(statearr_15764_15791[(1)] = (5));
} else
{var statearr_15765_15792 = state_15758__$1;(statearr_15765_15792[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (15)))
{var inst_15748 = (state_15758[(2)]);var state_15758__$1 = state_15758;var statearr_15766_15793 = state_15758__$1;(statearr_15766_15793[(2)] = inst_15748);
(statearr_15766_15793[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (13)))
{var state_15758__$1 = state_15758;var statearr_15767_15794 = state_15758__$1;(statearr_15767_15794[(2)] = null);
(statearr_15767_15794[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (6)))
{var inst_15718 = (state_15758[(8)]);var inst_15743 = inst_15718.length;var inst_15744 = (inst_15743 > (0));var state_15758__$1 = state_15758;if(cljs.core.truth_(inst_15744))
{var statearr_15768_15795 = state_15758__$1;(statearr_15768_15795[(1)] = (12));
} else
{var statearr_15769_15796 = state_15758__$1;(statearr_15769_15796[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (3)))
{var inst_15756 = (state_15758[(2)]);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15758__$1,inst_15756);
} else
{if((state_val_15759 === (12)))
{var inst_15718 = (state_15758[(8)]);var inst_15746 = cljs.core.vec.call(null,inst_15718);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15758__$1,(15),out,inst_15746);
} else
{if((state_val_15759 === (2)))
{var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15758__$1,(4),ch);
} else
{if((state_val_15759 === (11)))
{var inst_15722 = (state_15758[(9)]);var inst_15726 = (state_15758[(10)]);var inst_15736 = (state_15758[(2)]);var inst_15737 = [];var inst_15738 = inst_15737.push(inst_15722);var inst_15718 = inst_15737;var inst_15719 = inst_15726;var state_15758__$1 = (function (){var statearr_15770 = state_15758;(statearr_15770[(7)] = inst_15719);
(statearr_15770[(11)] = inst_15736);
(statearr_15770[(12)] = inst_15738);
(statearr_15770[(8)] = inst_15718);
return statearr_15770;
})();var statearr_15771_15797 = state_15758__$1;(statearr_15771_15797[(2)] = null);
(statearr_15771_15797[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (9)))
{var inst_15718 = (state_15758[(8)]);var inst_15734 = cljs.core.vec.call(null,inst_15718);var state_15758__$1 = state_15758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15758__$1,(11),out,inst_15734);
} else
{if((state_val_15759 === (5)))
{var inst_15722 = (state_15758[(9)]);var inst_15719 = (state_15758[(7)]);var inst_15726 = (state_15758[(10)]);var inst_15726__$1 = f.call(null,inst_15722);var inst_15727 = cljs.core._EQ_.call(null,inst_15726__$1,inst_15719);var inst_15728 = cljs.core.keyword_identical_QMARK_.call(null,inst_15719,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15729 = (inst_15727) || (inst_15728);var state_15758__$1 = (function (){var statearr_15772 = state_15758;(statearr_15772[(10)] = inst_15726__$1);
return statearr_15772;
})();if(cljs.core.truth_(inst_15729))
{var statearr_15773_15798 = state_15758__$1;(statearr_15773_15798[(1)] = (8));
} else
{var statearr_15774_15799 = state_15758__$1;(statearr_15774_15799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (14)))
{var inst_15751 = (state_15758[(2)]);var inst_15752 = cljs.core.async.close_BANG_.call(null,out);var state_15758__$1 = (function (){var statearr_15776 = state_15758;(statearr_15776[(13)] = inst_15751);
return statearr_15776;
})();var statearr_15777_15800 = state_15758__$1;(statearr_15777_15800[(2)] = inst_15752);
(statearr_15777_15800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (10)))
{var inst_15741 = (state_15758[(2)]);var state_15758__$1 = state_15758;var statearr_15778_15801 = state_15758__$1;(statearr_15778_15801[(2)] = inst_15741);
(statearr_15778_15801[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15759 === (8)))
{var inst_15722 = (state_15758[(9)]);var inst_15726 = (state_15758[(10)]);var inst_15718 = (state_15758[(8)]);var inst_15731 = inst_15718.push(inst_15722);var tmp15775 = inst_15718;var inst_15718__$1 = tmp15775;var inst_15719 = inst_15726;var state_15758__$1 = (function (){var statearr_15779 = state_15758;(statearr_15779[(7)] = inst_15719);
(statearr_15779[(14)] = inst_15731);
(statearr_15779[(8)] = inst_15718__$1);
return statearr_15779;
})();var statearr_15780_15802 = state_15758__$1;(statearr_15780_15802[(2)] = null);
(statearr_15780_15802[(1)] = (2));
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
});})(c__5849__auto___15788,out))
;return ((function (switch__5834__auto__,c__5849__auto___15788,out){
return (function() {
var state_machine__5835__auto__ = null;
var state_machine__5835__auto____0 = (function (){var statearr_15784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15784[(0)] = state_machine__5835__auto__);
(statearr_15784[(1)] = (1));
return statearr_15784;
});
var state_machine__5835__auto____1 = (function (state_15758){while(true){
var ret_value__5836__auto__ = (function (){try{while(true){
var result__5837__auto__ = switch__5834__auto__.call(null,state_15758);if(cljs.core.keyword_identical_QMARK_.call(null,result__5837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5837__auto__;
}
break;
}
}catch (e15785){if((e15785 instanceof Object))
{var ex__5838__auto__ = e15785;var statearr_15786_15803 = state_15758;(statearr_15786_15803[(5)] = ex__5838__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15785;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15804 = state_15758;
state_15758 = G__15804;
continue;
}
} else
{return ret_value__5836__auto__;
}
break;
}
});
state_machine__5835__auto__ = function(state_15758){
switch(arguments.length){
case 0:
return state_machine__5835__auto____0.call(this);
case 1:
return state_machine__5835__auto____1.call(this,state_15758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5835__auto____0;
state_machine__5835__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5835__auto____1;
return state_machine__5835__auto__;
})()
;})(switch__5834__auto__,c__5849__auto___15788,out))
})();var state__5851__auto__ = (function (){var statearr_15787 = f__5850__auto__.call(null);(statearr_15787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5849__auto___15788);
return statearr_15787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5851__auto__);
});})(c__5849__auto___15788,out))
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