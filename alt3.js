javascript:'use strict';void((function(thewindow){
 var o,w=thewindow,e=w.fv;
 ((typeof(e)==='object' && 'use' in e)?e:(o=Object,o=w.fv=o.preventExtensions(o.create(null,(o={value:0,writable:true},{
	use:{
	 value:function(awindow){
		var d=awindow.document,s='complete',ƒ,f=function(n){
		 var obj=o;
		 if(o.run===0){
			o.run=1;
			obj.calls++;
			console.dir(o);
		 };
		 o.use=f;
		 console.dir(o.use);
		};
		if(d.readyState===s){
			Object.defineProperty(o,'use',{value:f});f(1);
		}else{
			s='DOMContentLoaded';
			ƒ=function(){d.removeEventListener(s,ƒ);f(2);};
			d.addEventListener(s,ƒ);
		};
	},
	configurable:true,
	writable:true
 },
 action:{
	value:{
		mouseover:function(x){},
		mouseout:function(x){},
		click:function(x){}
	}
 },

 calls:o,run:o}))))).use(w);
})(window));
//-------------
