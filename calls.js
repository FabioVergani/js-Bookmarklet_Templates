javascript:'use strict';(function(w){
 var o=w.fv;
 if(o%20instanceof%20Object && 'run' in o){
	o.run();
 }else{

	o=w.fv={
	 calls:0,
	 run:function(v){console.log(o.calls++);},
	};
	o.run(w);

 };
})(window);
