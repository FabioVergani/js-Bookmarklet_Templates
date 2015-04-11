javascript:'use strict';void((function(w){
 var o=w.fv;
 if(!(o%20instanceof%20Object && 'use' in o)){
	o=w.fv={
	 calls:0,
	 run:false,
	 use:function(d){
		var o=this,play=function(i){
		 console.log(i,666,d,o);alert(i)
		};
		o.run=true;
		if(d.readyState==='complete'){play(1);}else{
		 var e='DOMContentLoaded',playafter=function(){d.removeEventListener(e,playafter);play(2);};
		 d.addEventListener(e,playafter);
		};
	 }
	};
 };
 if(o.run===false){o.use(w.document);};
})(window));
//------------
