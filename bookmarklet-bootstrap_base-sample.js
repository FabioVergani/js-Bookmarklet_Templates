javascript:void(function($){'use strict';
 var w=$,i='functionId',e=w.ƒ||(w.ƒ={});
 (e[i]||(e[i]=(function($,s){console.log('first-run');
	var w=$,e=w.ƒ,o,i;
	console.log('check-methods');
	o=e[i='requiredmethodId1']||(e[i]=666);
	o=e[i='requiredmethodId2']||(e[i]=999);
	return function($){
	 var w=$;
	 console.dir(w.ƒ);
	};
 })(w,i)))(w);
}(window));
