javascript:'use strict';void((function(thewindow){
 var o,w=thewindow,e=w.fv,k1='undercursor',k2='selectedbyclick';
 ((typeof(e)==='object' && 'use' in e)?e:(o=Object,o=w.fv=o.preventExtensions(o.create(null,(o={value:0,writable:true},{

	use:{
	 value:function(awindow){
		var l,ø=o,win=awindow,d=win.document,s=d.readyState,
		play=function(w,n){

		 console.log(n);

		},
		f=function(i){var ƒ=play;Object.defineProperty(ø,'use',{value:ƒ});ƒ(win,i);};
		[ø.fn,ø.events].forEach(function(e){e.__proto__=null});
		if(s==='complete'){f(2);}else if(ø.run===0){ø.run=1;s='DOMContentLoaded';
			l=function(){d.removeEventListener(s,l);ø.run=0;f(1);};
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
 }))))).use(w,3);
})(window));
