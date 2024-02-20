import"angular2/src/facade/lang";import"angular2/src/facade/collection";import"../../facade/base_wrapped_exception.js";import"angular2/src/facade/base_wrapped_exception";import"../../facade/exception_handler.js";import e from"../../facade/exceptions.js";import n from"angular2/src/facade/async";import t from"./ng_zone_impl.js";"use strict";var r={};var o=n;var i=t;var a=e;var s=t;r.NgZoneError=s.NgZoneError;var u=function(){function NgZone(e){var n=this;var t=e.enableLongStackTrace,r=void 0!==t&&t;this._hasPendingMicrotasks=false;this._hasPendingMacrotasks=false;this._isStable=true;this._nesting=0;this._onUnstable=new o.EventEmitter(false);this._onMicrotaskEmpty=new o.EventEmitter(false);this._onStable=new o.EventEmitter(false);this._onErrorEvents=new o.EventEmitter(false);this._zoneImpl=new i.NgZoneImpl({trace:r,onEnter:function(){n._nesting++;if(n._isStable){n._isStable=false;n._onUnstable.emit(null)}},onLeave:function(){n._nesting--;n._checkStable()},setMicrotask:function(e){n._hasPendingMicrotasks=e;n._checkStable()},setMacrotask:function(e){n._hasPendingMacrotasks=e},onError:function(e){return n._onErrorEvents.emit(e)}})}NgZone.isInAngularZone=function(){return i.NgZoneImpl.isInAngularZone()};NgZone.assertInAngularZone=function(){if(!i.NgZoneImpl.isInAngularZone())throw new a.BaseException("Expected to be in Angular Zone, but it is not!")};NgZone.assertNotInAngularZone=function(){if(i.NgZoneImpl.isInAngularZone())throw new a.BaseException("Expected to not be in Angular Zone, but it is!")};NgZone.prototype._checkStable=function(){var e=this;if(0==this._nesting&&!this._hasPendingMicrotasks&&!this._isStable)try{this._nesting++;this._onMicrotaskEmpty.emit(null)}finally{this._nesting--;if(!this._hasPendingMicrotasks)try{this.runOutsideAngular((function(){return e._onStable.emit(null)}))}finally{this._isStable=true}}};Object.defineProperty(NgZone.prototype,"onUnstable",{get:function(){return this._onUnstable},enumerable:true,configurable:true});Object.defineProperty(NgZone.prototype,"onMicrotaskEmpty",{get:function(){return this._onMicrotaskEmpty},enumerable:true,configurable:true});Object.defineProperty(NgZone.prototype,"onStable",{get:function(){return this._onStable},enumerable:true,configurable:true});Object.defineProperty(NgZone.prototype,"onError",{get:function(){return this._onErrorEvents},enumerable:true,configurable:true});Object.defineProperty(NgZone.prototype,"hasPendingMicrotasks",{get:function(){return this._hasPendingMicrotasks},enumerable:true,configurable:true});Object.defineProperty(NgZone.prototype,"hasPendingMacrotasks",{get:function(){return this._hasPendingMacrotasks},enumerable:true,configurable:true});NgZone.prototype.run=function(e){return this._zoneImpl.runInner(e)};NgZone.prototype.runGuarded=function(e){return this._zoneImpl.runInnerGuarded(e)};NgZone.prototype.runOutsideAngular=function(e){return this._zoneImpl.runOuter(e)};return NgZone}();r.NgZone=u;const c=r.NgZoneError;const l=r.NgZone;export default r;export{l as NgZone,c as NgZoneError};

