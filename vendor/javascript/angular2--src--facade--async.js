import r from"angular2/src/facade/lang";import e from"angular2/src/facade/promise";import t from"rxjs/Subject";import n from"rxjs/observable/PromiseObservable";import o from"rxjs/operator/toPromise";import i from"rxjs/Observable";"use strict";var s={};var a=s&&s.__extends||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);function __(){this.constructor=r}r.prototype=null===e?Object.create(e):(__.prototype=e.prototype,new __)};var u=r;var c=e;s.PromiseWrapper=c.PromiseWrapper;s.PromiseCompleter=c.PromiseCompleter;var p=t;var l=n;var b=o;var m=i;s.Observable=m.Observable;var f=t;s.Subject=f.Subject;var v=function(){function TimerWrapper(){}TimerWrapper.setTimeout=function(r,e){return u.global.setTimeout(r,e)};TimerWrapper.clearTimeout=function(r){u.global.clearTimeout(r)};TimerWrapper.setInterval=function(r,e){return u.global.setInterval(r,e)};TimerWrapper.clearInterval=function(r){u.global.clearInterval(r)};return TimerWrapper}();s.TimerWrapper=v;var W=function(){function ObservableWrapper(){}ObservableWrapper.subscribe=function(r,e,t,n){void 0===n&&(n=function(){});t="function"===typeof t&&t||u.noop;n="function"===typeof n&&n||u.noop;return r.subscribe({next:e,error:t,complete:n})};ObservableWrapper.isObservable=function(r){return!!r.subscribe};ObservableWrapper.hasSubscribers=function(r){return r.observers.length>0};ObservableWrapper.dispose=function(r){r.unsubscribe()};ObservableWrapper.callNext=function(r,e){r.next(e)};ObservableWrapper.callEmit=function(r,e){r.emit(e)};ObservableWrapper.callError=function(r,e){r.error(e)};ObservableWrapper.callComplete=function(r){r.complete()};ObservableWrapper.fromPromise=function(r){return l.PromiseObservable.create(r)};ObservableWrapper.toPromise=function(r){return b.toPromise.call(r)};return ObservableWrapper}();s.ObservableWrapper=W;var O=function(r){a(EventEmitter,r);function EventEmitter(e){void 0===e&&(e=true);r.call(this);this._isAsync=e}EventEmitter.prototype.emit=function(e){r.prototype.next.call(this,e)};EventEmitter.prototype.next=function(e){r.prototype.next.call(this,e)};EventEmitter.prototype.subscribe=function(e,t,n){var o;var errorFn=function(r){return null};var completeFn=function(){return null};if(e&&"object"===typeof e){o=this._isAsync?function(r){setTimeout((function(){return e.next(r)}))}:function(r){e.next(r)};e.error&&(errorFn=this._isAsync?function(r){setTimeout((function(){return e.error(r)}))}:function(r){e.error(r)});e.complete&&(completeFn=this._isAsync?function(){setTimeout((function(){return e.complete()}))}:function(){e.complete()})}else{o=this._isAsync?function(r){setTimeout((function(){return e(r)}))}:function(r){e(r)};t&&(errorFn=this._isAsync?function(r){setTimeout((function(){return t(r)}))}:function(r){t(r)});n&&(completeFn=this._isAsync?function(){setTimeout((function(){return n()}))}:function(){n()})}return r.prototype.subscribe.call(this,o,errorFn,completeFn)};return EventEmitter}(p.Subject);s.EventEmitter=O;const y=s.PromiseWrapper,E=s.PromiseCompleter,T=s.Observable,h=s.Subject;const x=s.TimerWrapper,_=s.ObservableWrapper,P=s.EventEmitter;export default s;export{P as EventEmitter,T as Observable,_ as ObservableWrapper,E as PromiseCompleter,y as PromiseWrapper,h as Subject,x as TimerWrapper};
