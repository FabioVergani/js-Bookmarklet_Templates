javascript:'use strict';(function(w){
 var o=w.fv;
 if(!(o%20instanceof%20Object && 'use' in o)){
	o=w.fv={
	 calls:0,
	 run:false,
	 use:function(v){
		var o=this;
		if(o.run===false){
		 o.run=true;
		 console.log(o.calls++);
		};
	 }
	};
 };
 o.use(w);
})(window);
