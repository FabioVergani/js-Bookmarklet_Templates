javascript:'use strict';void((function(mywindow){
 var o,w=mywindow,e=w.fv,k1='undercursor',k2='selectedbyclick';
 ((typeof(e)==='object' && 'use' in e)?e:(o=Object,o=w.fv=o.preventExtensions(o.create(null,(o={value:0,writable:true},{

	use:{
	 value:function(awindow){
		var l,x=o,d=awindow.document,s=d.readyState,
		play=function(thewindow,i){
		 var x=thewindow.fv;
		 x.run=1;
		 console.log(i);console.dir(x);
		 x.run=0;
		},
		f=function(n){var ƒ=play;Object.defineProperty(x,'use',{value:ƒ});ƒ(awindow,n);};
		if(s==='complete'){
			f(1);
		}else if(x.run===0){
			x.run=1;
			s='DOMContentLoaded';
			l=function(){d.removeEventListener(s,l);x.run=0;f(2);};
			d.addEventListener(s,l);
		};
	 },
	 configurable:true,
	 writable:true
	},


	calls:o,
	run:o,
	fn:{
	 value:(o={
		mouseover:function(x){},
		mouseout:function(x){},
		click:function(x){}
	 },o)
	},
	events:{value:Object.keys(o)}
 }))))).use(w);
})(window));
