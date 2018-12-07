void((w=>{
	(w.listLinks||(w.listLinks=(w=>{
		let allowMarklet;
		const once=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
		ready=event=>{console.dir(event);
			if(allowMarklet!==false){
				allowMarklet=false;

			}
		};
		return w=>{if(allowMarklet!==false){const d=w.document,c=ready;if(d.readyState!=='complete'){once(w,'DOMContentLoaded',c)}else{c({target:d,type:null})}}}
	})(w)))(w)
})(window));
