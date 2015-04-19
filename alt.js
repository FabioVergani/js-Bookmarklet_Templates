javascript:'use strict';void((function(thewindow){
 var w=thewindow, e=w.fv, fn='use', result=(
 (typeof(e)==='object' && fn in e)?e[fn]:(w.fv=function(x){return x;})
 )(w);

 console.dir(w.fv);

})(window));
