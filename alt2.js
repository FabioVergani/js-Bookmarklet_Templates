javascript:'use strict';void((function(thewindow){
 var o,w=thewindow,e=w.fv;
 ((typeof(e)==='object' && 'use' in e)?e:(o=Object,o=w.fv=o.preventExtensions(o.create(null,(o={value:0,writable:true},{
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

 }},calls:o,run:o}))))).use(w);
})(window));
