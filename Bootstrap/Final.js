javascript:void(function($){'use strict';
 var o=$,p='uid';
 (o[p]||(o[p]=(function($){
	var w=$,
	Obj=w.Object,
	Seal=Obj.seal,
	Crea=Obj.create,
	Call=w.Function.prototype.call,
	aRawObj=Call.bind(Crea,null,null),

	aRawObjDescribed=function(k){
	 var p,o=k,f=aRawObj,d=f(),i,e,t=this;
	 for(p in o){i=d[p]=f(t);for(p in (e=o[p])){i[p]=e[p];};};
	 return f(d);
	}.bind(function(u){
	 var f=Crea,s=Seal,e=aRawObj(),p=true,o=s({value:p,writable:p,enumerable:p,configurable:false});
	 for(p in o){e[p]=f(o)};
	 e[p='value'][p]=u;
	 return s(e);
	}()),

	end;

	return Seal(aRawObjDescribed({
	 go:{
		value:function($){
		 var o=this;
		 if(o.locked){
			console.log('locked!');
		 }else{
			o.locked=true;
			console.dir(o);
		 };
			
		}
	 },
	 locked:{value:false}
	}));

 })(o))).go(o);
}(window));
//END.
