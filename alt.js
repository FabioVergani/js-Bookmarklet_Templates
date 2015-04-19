javascript:'use strict';void((function(thewindow){
 var O,o={value:0,writable:true},w=thewindow,e=w.fv;
 O=((typeof(e)==='object' && 'use' in e)?e:(O=Object,o=w.fv=O.preventExtensions(O.create(null,{
	use:{
	 value:function(awindow){
		var d=awindow.document,s='complete',f=function(n){

		 var obj=o;
		 obj.calls++;

		 return n;
		};
		if(d.readyState===s){
			f(1);
		}else{
			s='DOMContentLoaded';
			f=function(){d.removeEventListener(s,f);f(2);};
			d.addEventListener(s,f);
		};

 }},calls:o,run:o})))).use(w);
})(window));
//-------------
