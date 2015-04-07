javascript:'use strict';(function(w){
 var o=w.fv;
 if(!(o%20instanceof%20Object && 'use' in o)){
	o=w.fv={
	 calls:0,
	 run:false,
	 use:function(w2){
		var o=this,d=w2.document,f=o.play,playdeferred;
		o.run=true;
		if(d.readyState==='complete'){
			f();
		}else{
			playdeferred=function(){d.removeEventListener('load',playdeferred);f();};
			d.addEventListener('load',playdeferred);
		};
	 },
	 play:function(){
		var o=this;
		o.calls++;
		o.run=false;
		console.dir(o);
	 }
	};
 };
 if(o.run===false){o.use(w);};
})(window);
//------------
