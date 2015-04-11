javascript:'use strict';void((function(w){
 var o=w.fv,d=w.document;
 if(!(o%20instanceof%20Object && 'use' in o)){
	o=w.fv={
	 run:0,
	 use:function(d){
		var o=this,play=function(i){console.log(i,666,d,o);o.run=0;};
		o.run=1;
		if(d.readyState==='complete'){play(1);}else{var s='DOMContentLoaded',f=function(){d.removeEventListener(s,f);play(2);};d.addEventListener(s,f);};
	 }
	};
	var e=d.createElement('style');
	e.innerHTML='.undercursor{cursor:crosshair;outline:2px solid #5166bb;}.undercursor.clicked{cursor:initial;outline-color:red;}';
	d.head.appendChild(e);
 };
 if(o.run===0){o.use(d);};
})(window));
//------------
