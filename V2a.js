javascript:void(function($){'use strict';
 var w=$,i='functionId',e=w.ƒ||(w.ƒ={});
 (e[i]||(e[i]=(function($,s){
	var w=$,e=w.ƒ,i,
	Call=e[i='Call']||(e[i]=w.Function.prototype.call),
	Slice=e[i='Slice']||(e[i]=Call.bind(w.Array.prototype.slice)),
	Create=e[i='Create']||(e[i]=Call.bind(w.Object.create,null,null));
	return function($){
	 var w=$,ƒ=this;
	 console.dir(ƒ);
	}.bind(e);
 })(w,i)))(w);
}(window));
