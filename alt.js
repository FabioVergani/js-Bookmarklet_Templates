javascript:'use strict';void((function(thewindow){
 var O,o={value:0,writable:true},w=thewindow,e=w.fv;
 ((typeof(e)==='object' && 'use' in e)?e:(O=Object,o=w.fv=O.preventExtensions(O.create(null,{
	use:{
	 value:function(awindow){
		var d=awindow.document,s='complete',ƒ,f=function(n){

		 var obj=o;
		 obj.calls++;

		 console.dir(o);

		};
		if(d.readyState===s){
			f(1);
		}else{
			s='DOMContentLoaded';
			ƒ=function(){d.removeEventListener(s,ƒ);f(2);};
			d.addEventListener(s,ƒ);
		};

 }},calls:o,run:o})))).use(w);
})(window));
//-------------
