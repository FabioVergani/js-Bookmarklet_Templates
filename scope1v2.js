(o=>{
	let p='BookMarkletId',f=o[p];
	if('function'!==typeof(f)){
		with(f=o[p]=w=>{
			if(allow){
				allow=false;
				console.warn(++counts);
				allow=true
			}
		}){
			allow=true;
			counts=0
		};
	}
	f(o)
})(window);
//
console.dir(window.BookMarkletId);
