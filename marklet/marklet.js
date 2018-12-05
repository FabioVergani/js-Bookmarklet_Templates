void((w=>{
	(w.marklet||(w.marklet=(w=>{
		let allow;
		const ready=o=>{
			if(allow!==false){
				allow=false;
				const d=o.target;

				console.dir(d);

			}
		};
		return w=>{
			if(allow!==false){
				const d=w.document,f=ready;
				if(d.readyState!=='complete'){
					const s='DOMContentLoaded',x=o=>{w.removeEventListener(s,x);f(o)};
					w.addEventListener(s,x)
				}else{
					f({target:d})
				}
			}
		}
	})(w)))(w)
})(window));
