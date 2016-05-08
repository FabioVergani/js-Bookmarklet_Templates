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
	 opened:{value:null},
	 locked:{value:false},
	 go:{value:function($){
		 var w,d,f,o=sealed;
		 if(o.locked===false){
			o.locked=true;
			w=$;
			d=w.document;
			f=Freeze(function(evt){
			 var s='about:blank',w2=o.opened,d1=d,d2,e;

			 if(w2!==null){
				w2.location=s;
			 }else{
				w2=o.opened=on(w.open(s),'beforeunload',function(evt){o.opened=null;});
			 };
			 d2=w2.document;
			 while(e=d2.firstChild){d2.removeChild(e);};
			 d2.appendChild(d1.doctype.cloneNode());

			 e=d1.createDocumentFragment().appendChild(d1.documentElement.cloneNode(true));
			 e.normalize();

			 d2.appendChild(e);


console.dir(d2.childNodes);


			 w2.focus();
			 o.locked=false;
			});
			if(d.readyState==='complete'){f(false);}else{once(w,'load',f);};
		 };
		},
		writable:false
	 }
	}));
	return sealed.go;
 })(o)))(o);
}(window));
