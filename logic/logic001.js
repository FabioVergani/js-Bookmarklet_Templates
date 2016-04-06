javascript:console.clear();
void(function(w,n,s){'use strict';
 var o=w,p=n;
 o=o[p]||(function(w,n){
	var o=w, p=n, e=o[p]={};
	console.log('builded:',p);
	return e;
 })(o,p);

 (o[p=s]||(console.log('building:',p),o[p]=function(xxx){
	 console.log('run:',xxx);
 }))(12345678);

}(window,'framework_id','bookmarklet_id'));
