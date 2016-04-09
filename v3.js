javascript:void(function($){'use strict';
 var w=$,o=w,p;
 ((o=o[p='framework_id'+Date.now()]||(function($,id_framework){

	var w=$,
	d=w.document,
	dummy=function(){},
	Call=w.Function.prototype.call,
	log=(function(x){var e=x;return e?function(){var o=e;o.log.apply(o,arguments);}:dummy;})(w.console),

	at=function(x,s,f,b){var e=x,i=function(o){f(o);e.removeEventListener(s,i);};e.addEventListener(s,i,b===true);},

	Create=w.Object.create,
	aRawObject=Call.bind(Create,null,null),
	aRawObjectDescribed=function(x){var e,o=x,p,i=this,t=i.t,f=i.f,d=f();for(p in o){i=d[p]=f(t);e=o[p];for(p in e){i[p]=e[p];};};return f(d);}.bind(w.Object.freeze((function(u){var c=Create,f=aRawObject,e=f(),o={value:true,writable:true,configurable:false,enumerable:true},p;for(p in o){e[p]=c(o)};e.value.value=u;return {t:e,f:f};})())),

	o=w[id_framework]=aRawObject(),

	endvar;
	log(p);
	return o;
 })(o,p))[p='bookmarklet_id']||(o[p]=function($){

	var w=$,
	scope=this,
	d=w.document,
	endvar;

	console.dir(scope);

 }.bind(o)))(w);
}(window));
