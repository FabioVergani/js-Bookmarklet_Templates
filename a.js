(function(){
	var d=document,e=d.getElementsByTagName('body')[0];
	(e=e.appendChild(d.createElement('script'))).src='http://path/file.js';
  console.log(e.src);
})();
