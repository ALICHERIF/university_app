import r from"./util/root.js";import o from"./symbol/observable.js";import"./util/isFunction.js";import"./util/isArray.js";import"./util/isObject.js";import"./util/errorObject.js";import"./util/tryCatch.js";import"./util/UnsubscriptionError.js";import"./Subscription.js";import"./symbol/rxSubscriber.js";import"./Observer.js";import"./Subscriber.js";import t from"./util/toSubscriber.js";var e={};var s=r;var i=o;var b=t;var n=function(){function Observable(r){this._isScalar=false;r&&(this._subscribe=r)}Observable.prototype.lift=function(r){var o=new Observable;o.source=this;o.operator=r;return o};Observable.prototype.subscribe=function(r,o,t){var e=this.operator;var s=b.toSubscriber(r,o,t);s.add(e?e.call(s,this):this._subscribe(s));if(s.syncErrorThrowable){s.syncErrorThrowable=false;if(s.syncErrorThrown)throw s.syncErrorValue}return s};Observable.prototype.forEach=function(r,o){var t=this;o||(s.root.Rx&&s.root.Rx.config&&s.root.Rx.config.Promise?o=s.root.Rx.config.Promise:s.root.Promise&&(o=s.root.Promise));if(!o)throw new Error("no Promise impl found");return new o((function(o,e){var s=t.subscribe((function(o){if(s)try{r(o)}catch(r){e(r);s.unsubscribe()}else r(o)}),e,o)}))};Observable.prototype._subscribe=function(r){return this.source.subscribe(r)};Observable.prototype[i.$$observable]=function(){return this};Observable.create=function(r){return new Observable(r)};return Observable}();e.Observable=n;const u=e.Observable;export default e;export{u as Observable};
