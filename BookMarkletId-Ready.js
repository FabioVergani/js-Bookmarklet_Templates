(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		const Exp=[],
		makeObject=w.Object.create,
		dummyEvent=x=>makeObject(null,{target:{value:x},type:{value:false}}),
		once=(e,s,c)=>{const f=o=>{e.removeEventListener(s,f);c(o)};e.addEventListener(s,f)},
		isLoading=d=>d.readyState!=='complete',
		onReady=(d,c)=>{if(isLoading(d)){once(d,'DOMContentLoaded',c)}else{c(dummyEvent(d))}},
		isReady=d=>{
			console.info('start');
		},
		isLoad=d=>{
			console.info('done');
			allow=true
		},
		atReady=e=>{const d=e.target,w=d.defaultView,f=e=>{isLoad(e.target)};isReady(d);if(e.type && isLoading(d)){once(w,'load',f)}else{f(dummyEvent(d))}};
		let allow=true,opened;
		return w=>{if(allow){allow=false;onReady(w.document,atReady)}}
	})(w)))(w)
})(window);


/*
(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		const Exp=[],
		makeObject=w.Object.create,
		dummyEvent=x=>makeObject(null,{target:{value:x}}),
		once=(e,s,c)=>{const f=o=>{e.removeEventListener(s,f);c(o)};e.addEventListener(s,f)},
		isLoading=d=>d.readyState!=='complete',
		onReady=(d,c)=>{if(isLoading(d)){once(d,'DOMContentLoaded',c)}else{c(dummyEvent(d))}},
		isReady=d=>{
			console.info('start');
		},
		isLoad=d=>{
			console.info('done');
			allow=true
		},
		atReady=e=>{const d=e.target,w=d.defaultView,f=e=>{isLoad(e.target)};isReady(d);if('type' in e && isLoading(d)){once(w,'load',f)}else{f(dummyEvent(d))}};
		let allow=true,opened;
		return w=>{if(allow){allow=false;onReady(w.document,atReady)}}
	})(w)))(w)
})(window);
*/
