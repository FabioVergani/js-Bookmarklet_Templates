javascript:void(function($){'use strict';
 var w=$,i='zzz',e=w.ƒ||(w.ƒ={});
 (e[i]||(e[i]=(function($,s){
	var w=$,e=w.ƒ,i,
	Call=e[i='Call']||(e[i]=w.Function.prototype.call),
	Slice=e[i='Slice']||(e[i]=Call.bind(w.Array.prototype.slice)),
	Create=e[i='Create']||(e[i]=Call.bind(w.Object.create,null,null));
	return function($){
	 var ƒ=this,w=$,d=w.document,f=function(evt){
		console.dir(ƒ);
		console.dir(evt);
	 };
	if(d.readyState==='complete'){f(false);}else{w.addEventListener('load',f);};
	}.bind(e);
 })(w,i)))(w);
}(window));
