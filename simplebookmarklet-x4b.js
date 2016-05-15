 //javascript:
void(function($){'use strict';
 const o=$,p='uid-xyz';(o[p]||(o[p]=function($){
	const w=$,
	O=w.Object,Seal=O.seal,Freeze=O.freeze,Create=O.create,
	Call=w.Function.prototype.call,
	aRawObj=Freeze(Call.bind(Create,null,null)),
	aRawObjDescribed=Freeze(function(k){const o=k,f=aRawObj,d=f(),t=this;var p,i,e;for(p in o){i=d[p]=f(t);for(p in (e=o[p])){i[p]=e[p];};};return f(d);}.bind(function(u){var p=true;const f=Create,e=aRawObj(),s=Seal,o=s({value:p,writable:p,enumerable:p,configurable:false});for(p in o){e[p]=f(o);};e[p='value'][p]=u;return s(e);}())),
	on=Freeze(function(o,s,f,b){const e=o;e.addEventListener(s,f,b===true);return e;}),
	once=Freeze(function(o,s,f,b){const i=Freeze(function(x){f(x);o.removeEventListener(s,i);});on(s,i,b);}),
	inibit=Freeze(function(evt){const e=evt;e.preventDefault();e.stopPropagation();return false;}),
	console1=w.console,log=Freeze(Call.bind(console1.log,console1)),
	sealed=Seal(aRawObjDescribed({opened:{value:null},locked:{value:false},go:{writable:false,value:Freeze(function($){const o=sealed;if(o.locked===false){const w=$,d=w.document;o.locked=true;const f=process;if(d.readyState==='complete'){f({currentTarget:w});}else{once(w,'load',f);};};})}})),
	process=Freeze(function(evt){
	 const o=this,w1=evt.currentTarget,d1=w1.document;
	 var e=d1.documentElement;
	 if(e!==null){
		e=d1.createDocumentFragment().appendChild(e.cloneNode(true));
		const dE=e,w2=((e=o.opened)===null||e.closed)?on(on(on((o.opened=w1.open('about:blank')),'unload',function(){o.opened=null;}),'beforeunload',function(){log('xxxx?');}),'click',inibit):e,d2=w2.document,d2NodeIterator=d2.createNodeIterator(dE,128);
		while(e=d2.firstChild){d2.removeChild(e);};
		e=d1.doctype;if(e!==null){d2.appendChild(e.cloneNode());};
		while(e=d2NodeIterator.nextNode()){e.remove();};
		e=dE;
		e.normalize();
		e=d2.appendChild(e);

		log(1,this);


		w2.serializer=Freeze(new w.XMLSerializer());
		w2.showsource=function(){
		 const e=w2, o=e.console;
		 o.clear();
		 o.log(e.serializer.serializeToString(e.document));
		};

		w2.focus();
	 };
	 o.locked=false;
	}.bind(sealed));
	return sealed.go;
 }(o)))(o);
}(window));
