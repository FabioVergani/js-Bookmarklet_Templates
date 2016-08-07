(function($w){'use strict';
 function dummy(){}
 function $first(a,b){return a.getElementsByTagName(b)[0];}

 function at(e,s,f,c){e.addEventListener(s,function x(o){e.removeEventListener(s,x,c);f(o);},c);}

 let f,e,i;
 const w=$w,
 BindCall=f=(e=w.Function[i='prototype']).bind.bind(e.call),
 e=w.Array[i],
 Slice=f(e.slice),
 d=w.document,
 d$first=f($first,d),
 Html=d[i='documentElement']||(d[i]=d$first('html'));
 d[i='defaultView']||(d[i]=w);
 dummy.doNothing=true;

 e=null;

 i=function(evt){
	let o=evt,p;
	const d=o.target||o,Body=d[p='body']||(d[p]=d$first(p));
	o=p=null;
	log('isReady');
	return d;
 };

 f=function(evt){
	let o=evt;
	const d=o.target||o,w=d.defaultView,Body=d.body;
	o=null;
	log('isLoad');
 };
 if(d.readyState!=='complete'){at(w,'DOMContentLoaded',i);at(w,'load',f);}else{f(i(d));};
})(window);
//END.
