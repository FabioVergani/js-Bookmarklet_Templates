(d=>{
	let f=d.BookMarkletId;
	if('function'!==typeof f){
		with(f=d.BookMarkletId=d=>{
			if(allow){
				allow=false;
				const once=(e,s,c)=>{const f=o=>{e.removeEventListener(s,f);c(o)};e.addEventListener(s,f)},
				ƒ=d=>{
					alert(1);
					//...
					allow=true
				};
				if(d.readyState!=='complete'){once(d.defaultView,'load',o=>{ƒ(o.target)})}else{ƒ(d)}
			}
		}){allow=true}
	};
	f(d)
})(document);
