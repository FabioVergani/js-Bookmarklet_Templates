(w=>{
	(w.BookMarkletId||(w.BookMarkletId=(w=>{
		let opened,allowed=true;
		return w=>{
			if(allowed){
				allowed=false;
				console.info(666);
				allowed=true;
			}
		}	
	})()))(w)
})(window);
