javascript:'use strict';void((function(thewindow){var w=thewindow,e=w.fv,p='play',o=Object;
(typeof(e)==='object' && p in e && o.prototype.hasOwnProperty.call(e,p)?e:(
 e={writable:true,value:0},e={calls:e,run:e,use:{value:function(awindow,obj){

var e=obj;
console.dir(e);
e.run=0;

  }
 }},e[p]={value:function(x){var e=this;if(e.run===0){e.run=e.calls++;e.use(x,e);};}},
 w.fv=o.seal(o.create(null,e))
))[p](w);})(window));
