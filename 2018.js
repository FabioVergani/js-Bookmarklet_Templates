($=>{
	let k='MyUniqueID';
	($[k]||($[k]=(($=>{
		k=false;
		return $=>{
			if(k!==true){
				k=true;//locked
				const at=(e,s,x)=>{
					const f=e.removeEventListener;
					f(s,x),e.addEventListener(s,x);
					return f;
				},
				d=$.document,
				f=d=>{
					//
					console.dir(d);
					//
					k=false;
				};
				if(d.readyState!=='complete'){
					const g=at($,'load',e=>{g('load');f(e.target)});
				}else{
					f(d);
				};
			};
		};
	}))($)))($);
})(window);
//

/*
javascript:($=>{let k='MyUniqueID';($[k]||($[k]=(($=>{k=false;return$=>{if(k!==true){k=true;const at=(e,s,x)=>{const f=e.removeEventListener;f(s,x),e.addEventListener(s,x);return f},d=$.document,f=d=>{console.dir(d);k=false};if(d.readyState!=='complete'){const g=at($,'load',e=>{g('load');f(e.target)})}else{f(d)}}}}))($)))($)})(window);
*/
