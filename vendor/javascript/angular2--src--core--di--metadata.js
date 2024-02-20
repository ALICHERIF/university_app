import t from"angular2/src/facade/lang";"use strict";var a={};var e=a&&a.__decorate||function(t,a,e,n){var r=arguments.length,o=r<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,e):n,d;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,a,e,n);else for(var c=t.length-1;c>=0;c--)(d=t[c])&&(o=(r<3?d(o):r>3?d(a,e,o):d(a,e))||o);return r>3&&o&&Object.defineProperty(a,e,o),o};var n=a&&a.__metadata||function(t,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,a)};var r=t;var o=function(){function InjectMetadata(t){this.token=t}InjectMetadata.prototype.toString=function(){return"@Inject("+r.stringify(this.token)+")"};InjectMetadata=e([r.CONST(),n("design:paramtypes",[Object])],InjectMetadata);return InjectMetadata}();a.InjectMetadata=o;var d=function(){function OptionalMetadata(){}OptionalMetadata.prototype.toString=function(){return"@Optional()"};OptionalMetadata=e([r.CONST(),n("design:paramtypes",[])],OptionalMetadata);return OptionalMetadata}();a.OptionalMetadata=d;var c=function(){function DependencyMetadata(){}Object.defineProperty(DependencyMetadata.prototype,"token",{get:function(){return null},enumerable:true,configurable:true});DependencyMetadata=e([r.CONST(),n("design:paramtypes",[])],DependencyMetadata);return DependencyMetadata}();a.DependencyMetadata=c;var i=function(){function InjectableMetadata(){}InjectableMetadata=e([r.CONST(),n("design:paramtypes",[])],InjectableMetadata);return InjectableMetadata}();a.InjectableMetadata=i;var p=function(){function SelfMetadata(){}SelfMetadata.prototype.toString=function(){return"@Self()"};SelfMetadata=e([r.CONST(),n("design:paramtypes",[])],SelfMetadata);return SelfMetadata}();a.SelfMetadata=p;var f=function(){function SkipSelfMetadata(){}SkipSelfMetadata.prototype.toString=function(){return"@SkipSelf()"};SkipSelfMetadata=e([r.CONST(),n("design:paramtypes",[])],SkipSelfMetadata);return SkipSelfMetadata}();a.SkipSelfMetadata=f;var M=function(){function HostMetadata(){}HostMetadata.prototype.toString=function(){return"@Host()"};HostMetadata=e([r.CONST(),n("design:paramtypes",[])],HostMetadata);return HostMetadata}();a.HostMetadata=M;const l=a.InjectMetadata,u=a.OptionalMetadata,s=a.DependencyMetadata,S=a.InjectableMetadata,y=a.SelfMetadata,j=a.SkipSelfMetadata,O=a.HostMetadata;export default a;export{s as DependencyMetadata,O as HostMetadata,l as InjectMetadata,S as InjectableMetadata,u as OptionalMetadata,y as SelfMetadata,j as SkipSelfMetadata};
