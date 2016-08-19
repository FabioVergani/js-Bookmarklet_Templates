javascript:void((function($){'use strict';
 const o=$,p='myId';//+String(Date.now()).substr(0,9);
 (o[p]||(o[p]=(function($){
	function at(o,s,f,b){function g(x){f(x);e.removeEventListener(t,g,b);}const e=o,t=s;e.addEventListener(t,g,b);}
	var o,w2=null;
	const w=$,//islocal=String(w.location).startsWith('file://'),
	O=w.Object,Create=O.create,Seal=O.seal,
	BindCall=(o=w.Function.prototype).bind.bind(o.call),
	aRawObj=BindCall(Create,(o=null),o),aRawObjProps=(function(u){const r=aRawObj,c=Create;var e=r(),p=true,o={value:p,writable:p,enumerable:p,configurable:false};for(p in o){e[p]=c(o);};e.value.value=u;const k=BindCall(c,null,null,Seal(e));e=p=o=null;return function(a){var e,p,o=a,f=r,b=f();for(p in o){e=o[p];const x=b[p]=k();for(p in x){if(p in e){x[p]=e[p];};};};return f(b);};})();
	return Seal(aRawObjProps({k:{value:false},f:{value:function($){
		function isReady(evt){//console.info('isReady');
		 const d=evt.target,w=d.defaultView;
		 var e=w2;
		 if(e===null||e.closed){
			e=w2=w.open('data:text/html;charset='+d.characterSet+',');//document.doctype.cloneNode()
		 }else{
			e.focus();
		 };
		}
		function isLoad(evt){//console.info('isLoad');
		 const d=evt.target, w=d.defaultView;
		 gs.k=false;
		}
		const gs=this;
		var o=gs;
		if(o.k===false){
			const a=isReady,b=isLoad;
			o.k=true;
			o=$.document;
			if(o.readyState!=='complete'){o=at;o(w,'DOMContentLoaded',a);o(w,'load',b);}else{a(o={target:o});b(o);};
		};
	},writable:false}}));
 })(o))).f(o);
})(window));
