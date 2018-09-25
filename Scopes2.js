(w=>{
	const i='BookMarkletId';
	(w[i]||(w[i]=(w=>{
		const f=w=>{
			if(allow){
				allow=false;
				alert(2);
				allow=true
			}
		};
		with(f){allow=true}
		return f
	})(w)))(w)
})(window);

//console.dir(window.BookMarkletId);
