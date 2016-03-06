javascript:
void(function($){'use strict';
 var w=$,i='domSnapshot',e=w.ƒ||(w.ƒ={});
 (e[i]||(e[i]=(function($,s){
	var w=$,e=w.ƒ,i,c=e[i='Call']||(e[i]=w.Function.prototype.call);
	e[i='Slice']||(e[i]=c.bind(w.Array.prototype.slice));
	e[i='Create']||(e[i]=c.bind(w.Object.create,null,null));
	return function($){
	 var w=$,e=w.document,f=function(evt){

		var d=e,
		ƒ=w.ƒ,
		toArray=ƒ.Slice,
		dE=d.documentElement,
		frag=d.createDocumentFragment(),
		dom=frag.appendChild(dE.cloneNode(true));

		dom.normalize();

		toArray(dom.getElementsByTagName('script')).forEach(function(n){n.innerHTML='';if(n.hasAttribute('src')){n.setAttribute('data-src',n.src);n.removeAttribute('src');};});


		d.replaceChild(dom,dE);

		console.dir(evt);

	 };
	if(e.readyState==='complete'){f(false);}else{w.addEventListener('load',f);};
	};
 })(w,i)))(w);
}(window));

//===============================================================
/*dE=
console.dir(e);
console.dir(ƒ=this);.bind(e)
console.dir(Slice);
		var ƒ=w.ƒ,toArray=ƒ.Slice,
var ƒ=w.ƒ,toArray=ƒ.Slice,
		console.dir(w.ƒ);
		console.dir(evt);
*/
