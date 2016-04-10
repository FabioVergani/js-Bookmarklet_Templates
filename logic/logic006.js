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
	var e=this,
	env=e.ns,
	f=env[e.fn],
	at=env.when,
	log=env.consolelog,
	w=$, d=w.document,

	isReady=function(evt){var o=evt;log('isReady',o);},
	isComplete=function(evt){var o=evt;log('isComplete',o);},

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
//=============================================


	var env=this,
,

	endvar;
log(p);

	console.dir(env);




//document.body.onclick=
  (function(e,s){
	var e=s,r,c
	if(s!=='complete'){var f=at$;f('DOMContentLoaded',r);f('load',c);}else{r(false);c(false);};
  })(this,d.readyState);




	aRawObjectDescribed({
	 locked:{value:false,enumerable:false},

	 isReady:{value:function(evt){
		var o=evt;
		log('isReady',o);
	 }},

	 isComplete:{value:function(evt){
		var o=evt;
		log('isComplete',o);
	 }},

	}),







console.dir(aRawObjectDescribed({
name1:{value:'1',enumerable:false},
name2:{value:2},
name3:{value:false},
}));



$th=this,isReady,isComplete
	isReady=function(evt){var o=evt;console.log('isReady',o);},
	isComplete=function(evt){var o=evt;console.log('isComplete',o);},
	at$=Call.bind(at,w),



