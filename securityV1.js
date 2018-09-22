(w=>{
	const O=w.Object;
	let i=w.navigator,f=w[i='BookMarkletId_'+i.productSub];
	if('function'!==typeof f||O.getOwnPropertyDescriptor(w,i).writable){
		(f=O.defineProperty)(w,i,{value:f=f(w=>{
			if(allow){
				allow=false;

				console.info(allow);

				allow=true
			}
		},'id',{value:i}),configurable:true});
		with(f){allow=true}
	}else{
		const s=f.id;
		if('string'!==typeof s||i!==s){return}
	};
	f(w)
})(window);
