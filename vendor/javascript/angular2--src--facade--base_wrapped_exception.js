var e={};var t=e&&e.__extends||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);function __(){this.constructor=e}e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)};var r=function(e){t(BaseWrappedException,e);function BaseWrappedException(t){e.call(this,t)}Object.defineProperty(BaseWrappedException.prototype,"wrapperMessage",{get:function(){return""},enumerable:true,configurable:true});Object.defineProperty(BaseWrappedException.prototype,"wrapperStack",{get:function(){return null},enumerable:true,configurable:true});Object.defineProperty(BaseWrappedException.prototype,"originalException",{get:function(){return null},enumerable:true,configurable:true});Object.defineProperty(BaseWrappedException.prototype,"originalStack",{get:function(){return null},enumerable:true,configurable:true});Object.defineProperty(BaseWrappedException.prototype,"context",{get:function(){return null},enumerable:true,configurable:true});Object.defineProperty(BaseWrappedException.prototype,"message",{get:function(){return""},enumerable:true,configurable:true});return BaseWrappedException}(Error);e.BaseWrappedException=r;const n=e.BaseWrappedException;export default e;export{n as BaseWrappedException};
