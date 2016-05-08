javascript:
void(function($){'use strict';
 var o=$,p='uid-x';
 (o[p]||(o[p]=(function($){
	var w=$,
	Obj=w.Object,
	Seal=Obj.seal,
	Freeze=Obj.freeze,
	Create=Obj.create,
	Call=w.Function.prototype.call,
	aRawObj=Freeze(Call.bind(Create,null,null)),
	aRawObjDescribed=Freeze(function(k){var p,o=k,f=aRawObj,d=f(),i,e,t=this;for(p in o){i=d[p]=f(t);for(p in (e=o[p])){i[p]=e[p];};};return f(d);}.bind(function(u){var f=Create,s=Seal,e=aRawObj(),p=true,o=s({value:p,writable:p,enumerable:p,configurable:false});for(p in o){e[p]=f(o)};e[p='value'][p]=u;return s(e);}())),
	on=Freeze(function(o,s,f,b){var e=o;e.addEventListener(s,f,b===true);return e;}),
	once=Freeze(function(o,s,f,b){var e=o,i=function(x){f(x);e.removeEventListener(s,i);};return on(s,i,b);}),
	console=w.console,
	log=Freeze(Call.bind(console.log,console)),
	sealed=Seal(aRawObjDescribed({
	 locked:{value:false},
	 opened:{value:null},
	 go:{
		writable:false,
		value:function($){
		 var o=sealed,f,w;
		 if(o.locked===false){
			o.locked=true;
			f=function(evt){
			 var w1=evt.currentTarget,d1=w1.document,w2=o.opened,d2, s='about:blank',e=d1.createDocumentFragment().appendChild(d1.documentElement.cloneNode(true));
			 e.normalize();
			 if(w2===null||w2.closed){w2=o.opened=on(w1.open(s),'beforeunload',function(){o.opened=null;});};
			 d2=w2.document;
			 while(e=d2.firstChild){d2.removeChild(e);};
			 d2.appendChild((e=d1.doctype)!==null?e.cloneNode():d1.implementation.createDocumentType('html','',''));
			 if(e=d1.documentElement){
				e=d1.createDocumentFragment().appendChild(e.cloneNode(true));
				e.normalize();

				d2.appendChild(e);
			 };
			 o.locked=e=false;
			 w2.focus();
			};
			w=$;
			if(w.document.readyState==='complete'){f({currentTarget:w});}else{once(w,'load',f);};
		 };
		}
	 }
	}));
	return sealed.go;
 })(o)))(o);
}(window));
