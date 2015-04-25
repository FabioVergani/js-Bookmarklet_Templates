javascript:'use strict';void((function(thewindow){
 var o=Object,p='use',w=thewindow,e=w.fv;
 ((typeof(e)==='object' && p in e && o.prototype.hasOwnProperty.call(e,p))?e:(p=function(x){x.__proto__=null;return x;},w.fv=o.preventExtensions(o.create(null,(e={value:0,writable:true},{
	use:{
	 value:function(awindow){
		var a=awindow;
		console.dir(a.fv)
	 },
	 configurable:true,
	 writable:true
	},
	calls:e,
	run:e,
	fn:{
	 value:(e=p({
		mouseover:function(x){},
		mouseout:function(x){},
		click:function(x){}
	 }),e)
	},
	events:{value:p(o.keys(e))}
 }))))).use(w,3);
})(window));
