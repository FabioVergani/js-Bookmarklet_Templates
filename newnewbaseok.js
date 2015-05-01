javascript:'use strict';void((function(thewindow){
 var w=thewindow,e=w.fv,o=Object,p='play';
 ((typeof(e)==='object' && p in e && o.prototype.hasOwnProperty.call(e,p))?e:(
  e={writable:true,value:0},(e=w.fv=o.create(null,{calls:e,run:e,use:{value:function(awindow){

	 console.log(123);console.dir(e);

  }}

}))[p]=function(mywindow){

	var w=mywindow;

	o.defineProperty(e,p,{value:function(x){var e=this;e.calls++;e.run=1;e.use(x);e.run=0;}});

	e[p](w);

  },
 o.seal(e)))[p](w);})(window));
//----------------------------------
