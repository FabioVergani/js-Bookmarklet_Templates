(o=>{
	const p='BookMarkLetUniqueIdentifier';
	(o[p]||(o[p]=(()=>{
		let go=true;
		return w=>{
			if(go){
				go=false;
				const ƒ=(evt)=>{
					const d=evt.target,dEC=d.createDocumentFragment().appendChild(d.documentElement.cloneNode(true));
					console.dir(d);
					d.removeEventListener('load',ƒ);
					go=true
				},d=w.document;
				if(d.readyState!=='complete'){d.addEventListener('load',ƒ)}else{ƒ({target:d})}
			}
		}
	})()))(o)
})(window);


/*
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
*/
