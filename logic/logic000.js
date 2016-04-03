javascript:void(function($){'use strict';console.clear();
 var w=$, i='framework_id', e=i in w, o, p='boopmarplet_id';

 if(e){
	o=w[i];console.log(i+':found');
	e=p in o;
	if(e){
		e=o[p];console.log('with:'+p,typeof(e));
	}else{
		console.log('need:'+p);
	};
 }else{
	o=(function(w,i){
	 var o=w[i]={ciao:'mondo'};
	 return o;
	})(w,i);
	console.log('creato:',o);
 };

 if(e===false){
	e=o[p]=function($){
	 console.log('running @:'+$,this);
	}.bind(o);
 };

 e(w);
}(window));
