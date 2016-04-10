javascript:void(function($){'use strict';
 var w=$,o=w,p;
 ((o=o[p='id_ns'+Date.now()]||(function($,ns){

	var w=$,
	F=w.Function,
	Call=F.prototype.call,
	O=w.Object,
	Create=O.create,
	aRawObject=Call.bind(Create,null,null),
	aRawObjectDescribed=function(x){var e,o=x,p,i=this,t=i.t,f=i.f,d=f();for(p in o){i=d[p]=f(t);e=o[p];for(p in e){i[p]=e[p];};};return f(d);}.bind(O.freeze((function(u){var c=Create,f=aRawObject,e=f(),o={value:true,writable:true,configurable:false,enumerable:true},p;for(p in o){e[p]=c(o)};e.value.value=u;return {t:e,f:f};})())),
	o=w[ns]=aRawObjectDescribed({
	 obj:{value:aRawObject},
	 describe:{value:aRawObjectDescribed},
	 cns:{value:(function(x){var f,e=x,c=Call;if(e){f=c.bind(e.log,e);c=c.bind(e.dir,e);}else{c=F;f=c();c=c();};return aRawObjectDescribed({log:{value:f},dir:{value:c}});})(w.console)},
	 when:{value:function(x,s,f,b){var e=x,i=function(o){f(o);e.removeEventListener(s,i);};e.addEventListener(s,i,b===true);}},
	}),

	endvar;
	return o;
 })(o,p))[p='id_favlet']||(o=o[p]=function($){
	var e=this,
	env=e.ns,
	f=env[e.fn],
	at=env.when,
	cns=env.cns,
	log=cns.log,
	dir=cns.dir,
	w=$,
	d=w.document,

	isReady=function(evt){
	 var o=evt;
	 log('isReady',o);
	 dir(cns);
	},

	isComplete=function(evt){
	 var o=evt;
	 log('isComplete',o);
	},

	endvar;

	if(f.locked!==true){
	 f.locked=true;
	 if(d.readyState==='complete'){
	  isReady(false);
	  isComplete(false);
	 }else{
		at(w,'DOMContentLoaded',isReady);
		at(w,'load',isComplete);
	 };
	}else{
	 log('locked!');
	};
 }.bind({ns:o,fn:p}),o.locked=false,o))(w);
}(window));
