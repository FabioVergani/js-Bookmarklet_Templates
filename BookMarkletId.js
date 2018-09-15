(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		const once=(e,s,f)=>{const c=o=>{e.removeEventListener(s,c);f(o)};e.addEventListener(s,c)},
		when=(d,c,i)=>{if(d.readyState!=='complete'){once(d,i!==1?'load':'DOMContentLoaded',c)}else{c({target:d})}};
		let opened,allow=true;
		return w=>{
			if(allow){
				allow=false;
				const d=w.document;
				when(d,loaded=>{
					console.info('event:',loaded);
					allow=true;
				})
			}
		}
	})(w)))(w)
})(window);
