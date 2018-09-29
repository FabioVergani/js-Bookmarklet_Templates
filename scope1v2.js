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
/*

(w=>{
	let f=w.BookMarkletId;
	if('function'!==typeof f){
		with(f=w.BookMarkletId=w=>{
			if(allow){
				allow=false;
				console.warn(++counts);
				allow=true
			}
		}){
			allow=true;
			counts=0
		}
	};console.dir(f);
	f(w)
})(window);

*/
