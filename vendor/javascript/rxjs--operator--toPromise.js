import o from"../util/root.js";var r={};var t=o;function toPromise(o){var r=this;o||(t.root.Rx&&t.root.Rx.config&&t.root.Rx.config.Promise?o=t.root.Rx.config.Promise:t.root.Promise&&(o=t.root.Promise));if(!o)throw new Error("no Promise impl found");return new o((function(o,t){var i;r.subscribe((function(o){return i=o}),(function(o){return t(o)}),(function(){return o(i)}))}))}r.toPromise=toPromise;const i=r.toPromise;export default r;export{i as toPromise};

