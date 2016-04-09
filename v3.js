javascript:void(function($){'use strict';
 var w=$,o=w,p;
 ((o=o[p='id_ns'+Date.now()]||(function($,ns){

	var w=$,
	d=w.document,
	dummy=function(){},
	Call=w.Function.prototype.call,
	Create=w.Object.create,
	aRawObject=Call.bind(Create,null,null),
	aRawObjectDescribed=function(x){var e,o=x,p,i=this,t=i.t,f=i.f,d=f();for(p in o){i=d[p]=f(t);e=o[p];for(p in e){i[p]=e[p];};};return f(d);}.bind(w.Object.freeze((function(u){var c=Create,f=aRawObject,e=f(),o={value:true,writable:true,configurable:false,enumerable:true},p;for(p in o){e[p]=c(o)};e.value.value=u;return {t:e,f:f};})())),

	o=w[ns]=aRawObjectDescribed({
	 obj:{value:aRawObject},
	 describe:{value:aRawObjectDescribed},
	 consolelog:{value:(function(x){var e=x;return e?function(){var o=e;o.log.apply(o,arguments);}:dummy;})(w.console)},
	 when:{value:function(x,s,f,b){var e=x,i=function(o){f(o);e.removeEventListener(s,i);};e.addEventListener(s,i,b===true);}},
	}),

	endvar;
	return o;
 })(o,p))[p='id_favlet']||(o=o[p]=function($){

	var e=this, env=e.ns, self=env[e.fn], log=env.consolelog;
	log(self);

 }.bind({ns:o,fn:p}),o.locked=false,o))(w);
}(window));
