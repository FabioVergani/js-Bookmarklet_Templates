
(function($w){'use strict';
 function dummy(){}
 function Slice(m,a,b){return ARp.slice.call(m,a,b);}

 function $first(a,b){return a.getElementsByTagName(b)[0];}

 function at(e,s,f,c){e.addEventListener(s,function x(o){e.removeEventListener(s,x,c);f(o);},c);}

 function isReady(evt){
  let o=evt,p;
  const d=o.target||o, Body=d[p='body']||(d[p]=$first(d,p));
  o=p=null;
  log('isReady');
  return d;
 }

 function isLoad(evt){
  let o=evt;
  const d=o.target||o, w=d.defaultView, Body=d.body;
  o=null;
  log('isLoad');
 }

 let f,i='prototype';
 const w=$w,
 ARp=w.Array[i],
 CallBind=f=(i=w.Function[i]).call.bind(i.bind),
 log=(i=w.console)?f(i.log,i):dummy,
 d=w.document,
 Html= d[i='documentElement']||(d[i]=$first(d,'html'));

 d[i='defaultView']||(d[i]=w);
 dummy.doNothing=true;
 i=isReady;f=isLoad;
 if(d.readyState!=='complete'){at(w,'DOMContentLoaded',i);at(w,'load',f);}else{f(i(d));};
})(window);
