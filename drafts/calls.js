javascript:'use strict';(function(w){
 var o=w.fv;
 if(!(o%20instanceof%20Object && 'use' in o)){
	o=w.fv={
	 calls:0,
	 run:false,
	 use:function(w){
		var o=this,d=w.document;
		o.run=true;
		o.calls++;
		o.run=false;
		console.dir(o);
	 }
	};
 };
 if(o.run===false){o.use(w);};
})(window);
