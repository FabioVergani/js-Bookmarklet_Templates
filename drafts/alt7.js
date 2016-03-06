javascript:'use strict';void((function(thewindow){
 var o,w=thewindow,e=w.fv;
 ((typeof(e)==='object' && 'use' in e)?e:(o=Object,o=w.fv=o.preventExtensions(o.create(null,(o={value:0,writable:true},{

	use:{
	 value:function(awindow){
		var ø=o,win=awindow,d=win.document,s='style',l='__proto__',k1='undercursor',k2='selectedbyclick',
		play=function(w,n){

		 var g=w.fv;g.run=1;g.calls++;
		 console.log(n);console.dir(g);
		 g.run=0;

		},
		f=function(i){var ƒ=play;Object.defineProperty(ø,'use',{value:ƒ});ƒ(win,i);};
		ø.fn[l]=ø.events[l]=null;

		s=d.createElement(s);
		s.innerHTML=['.'+k1+':not(.','){cursor:crosshair;outline:2px solid #5166bb;}.','{cursor:initial;outline:2px outset red;}'].join(k2);
		d.head.appendChild(s);

		if(d.readyState==='complete'){f(2);}else if(ø.run===0){ø.run=1;s='DOMContentLoaded';
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
