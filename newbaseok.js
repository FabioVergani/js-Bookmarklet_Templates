javascript:'use strict';void((function(thewindow){
 var w=thewindow,e=w.fv,o=Object,p='method';
 ((typeof(e)==='object' && p in e && o.prototype.hasOwnProperty.call(e,p))?e:(
	e={writable:true,value:0},
	e=w.fv=o.create(null,{calls:e,run:e}),
	e[p]=function(mywindow){
	 var w=mywindow,e=w.fv;
	 (e[p]=function(){
		e.run=1;
		console.dir(e);
		e.calls++;
		e.run=0;
	 })(w);
	},
	o.seal(e)
 ))[p](w);
})(window))
