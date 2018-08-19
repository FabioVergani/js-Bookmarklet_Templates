((o,p)=>{
	(o[p]||(o[p]=((w)=>{
		let k;
		const at=(e,s,x)=>{
			const f=e.removeEventListener;
			f(s,x);
			e.addEventListener(s,x);
			return f
		},
		once=(e,s,x)=>{const f=o=>{g(s,x);x(o)},g=at(e,s,f)};
		return w=>{
			if(k!==1){
				k=1;
				const d=w.document,f=loaded=>{

					console.dir(loaded);
					//doStuff..

					k=0;
				};
				d.readyState!=='complete'?once(w,'load',f):f({target:d})
			}
		}
	})(o)))(o)
})(window,'BookmarkLetId');
