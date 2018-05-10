(d=>{
	const ƒ=(evt)=>{
		const d=evt.target;//w=d.defaultView
		if('type' in evt){d.removeEventListener(evt.type,ƒ)};
		console.log('ƒ');
	};
	if(d.readyState!=='complete'){
		console.warn('waitDom');
		d.addEventListener('DOMContentLoaded',ƒ);
	}else{
		console.info('isReady');
		ƒ({target:d})
	}
})(document);
