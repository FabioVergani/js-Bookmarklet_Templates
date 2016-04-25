javascript:void(function($){'use strict';
 var o=$,p='uid'+Date.now();
 (o[p]||(o[p]=(function($){
	var w=$,
	Obj=w.Object,
	Seal=Obj.seal,
	Create=Obj.create,
	Call=w.Function.prototype.call,
	aRawObj=Call.bind(Create,null,null),
	aRawObjDescribed=function(k){var p,o=k,f=aRawObj,d=f(),i,e,t=this;for(p in o){i=d[p]=f(t);for(p in (e=o[p])){i[p]=e[p];};};return f(d);}.bind(function(u){var f=Create,s=Seal,e=aRawObj(),p=true,o=s({value:p,writable:p,enumerable:p,configurable:false});for(p in o){e[p]=f(o)};e[p='value'][p]=u;return s(e);}()),
	once=function(o,s,f,b){var e=o,i=function(x){f(x);e.removeEventListener(s,i);};e.addEventListener(s,i,b===true);},
	console=w.console,
	log=Call.bind(console.log,console),
	domSerializer=new XMLSerializer(),
	sealed=Seal(aRawObjDescribed({
	 locked:{value:false},
	 go:{
		value:function($){
		 var o=sealed;
		 if(o.locked===false){
			var w=$,d=w.document,at=once,f=function(evt){
			 var w2=w.open('data:text/html,'+domSerializer.serializeToString(d.doctype)), d2=w2.document;



			};
			o.locked=true;
			if(d.readyState==='complete'){f(false);}else{at(w,'load',f);};
		 };
		},
		writable:false
	 }
	}));
	return sealed.go;
 })(o)))(o);
}(window));
