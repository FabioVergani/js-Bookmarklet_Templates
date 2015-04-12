javascript:'use strict';void((function(w){
 var ns='fv',e=w[ns],k=typeof(e),Obj=Object;
 if(k==='undefined'||Obj.getOwnPropertyDescriptor(w,ns).writable===true){
	e={value:0,writable:true};
	e=Obj.preventExtensions(Obj.create(null,{
	 use:{
		value:function(i){
		 console.log(i);console.dir(e);
		}
	 },
	 calls:e,
	 run:e
	}));
	Obj.defineProperty(w,ns,{value:e});
	k=1;
 }else{
	k=(k==='object' && 'use' in e && Obj.isExtensible(e)===false)?2:0;
 };
 if(k!==0){e.use(k);};
})(window));
