(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		const once=(e,s,f)=>{const c=o=>{e.removeEventListener(s,c);f(o)};e.addEventListener(s,c)},
		when=(w,c,i)=>{const d=w.document;if(d.readyState!=='complete'){if(i!==1){once(w,'load',c)}else{once(d,'DOMContentLoaded',c)}}else{c({target:d})}};
		let opened,allow=true;
		return w=>{
			if(allow){
				allow=false;
				when(w,loaded=>{
					console.info('event:',loaded);
					allow=true;
				})
			}
		}
	})(w)))(w)
})(window);




/*




https://testdrive-archive.azurewebsites.net/HTML5/DOMContentLoaded/Default.html


*/
