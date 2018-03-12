($=>{
	($.body2txt||($.body2txt=$=>{
		const at=(e,s,x)=>{
			const f=e.removeEventListener;
			f(s,x);
			e.addEventListener(s,x);
			return f
		};
		let Run=false;
		return($)=>{
			if(Run!==true){
				Run=true;
				const d=$.document, f=$d=>{
					//console.dir($);
					console.info($d);
					Run=false;
				};
				if(d.readyState!=='complete'){
					const g=at($,'load',e=>{
						g('load');
						f(e.target);
					});
				}else{
					f(d);
				};
			};
		};
	}))($);
})(window);
