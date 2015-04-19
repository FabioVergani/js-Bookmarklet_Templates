javascript:'use strict';void((function(thewindow){
 var o={value:0,writable:true},w=thewindow, e=w.fv;
 o=((typeof(e)==='object' && 'use' in e)?e:(w.fv=Object.preventExtensions(Object.create(null,{
	use:{
	 value:function(doc){}
	},
	calls:o,
	run:o
 })))).use(w);

 console.log(o,w.fv);

})(window));
//-------------
