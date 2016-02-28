javascript:void(function(w){'use strict';
 var $=w,i='domSnapshot',o=$.ƒ,f=Object.create;
 o=o||((o={})[i]={value:0,writable:true},$.ƒ=f(null,o));
 if((f=o[i])===0){
	f=o[i]=(function(global){

	 var callee=this, count=callee.calls++;
	 console.log(count);

	}).bind({calls:0});
 };
 f($);
}(window));
