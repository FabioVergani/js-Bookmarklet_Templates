(w=>{
		let k=true;
		(w=>{
			if(k){
				k=false;
				const f=(w)=>{
					console.dir(w);
					k=true
				};
				if(w.document.readyState!=='complete'){
					const g=()=>{w.removeEventListener('load',g);f(w)};
					w.addEventListener('load',g)
				}else{
					f(w)
				}
			}
		})(w)
})(window);
