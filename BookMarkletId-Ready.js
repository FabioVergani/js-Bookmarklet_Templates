(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		const once=(e,s,f)=>{const c=o=>{e.removeEventListener(s,c);f(o)};e.addEventListener(s,c)},
		ready=(w,c,i)=>{const d=w.document;if(d.readyState!=='complete'){if(i!==1){once(w,'DOMContentLoaded',c)}else{once(d,'load',c)}}else{c({target:d})}};
		let opened,allow=true;
		return w=>{
			if(allow){
				allow=false;
				ready(w,loaded=>{
					const d=loaded.target;

 

					//Done:
					allow=true
				})
			}
		}
	})(w)))(w)
})(window);

/*
(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		const once=(e,s,f)=>{const c=o=>{e.removeEventListener(s,c);f(o)};e.addEventListener(s,c)},when=(w,c,i)=>{const d=w.document;if(d.readyState!=='complete'){if(i!==1){once(w,'load',c)}else{once(d,'DOMContentLoaded',c)}}else{c({target:d})}};
		let opened,allow=true;
		return w=>{
			if(allow){
				allow=false;
				when(w,ready=>{
					const d=ready.target;

					console.info('event:',ready);

					//Done:
					allow=true
				},1)
			}
		}
	})(w)))(w)
})(window);
