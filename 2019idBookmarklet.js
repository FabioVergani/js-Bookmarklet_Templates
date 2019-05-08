console.clear();
(w=>{
	(
		w.idBookmarklet||(
			w.idBookmarklet=(
				w=>{
					const d=w.document,
					onceAt=(e,s,f)=>{
						let x=o=>{
							e.removeEventListener(s,x);
							x=null;
							f(o)
						};
						e.addEventListener(s,x)
					},
					onceReady=(w,f)=>{
						if('complete'!==w.document.readyState){
							onceAt(w,'load',f)
						}else{
							f(w)
						}
					};
					//
					let canRun=true;
					return w=>{
						if(canRun){
							canRun=false;
							onceReady(w,w=>{
								//...
								canRun=true;
							})
						}
					}
				}
			)(w)
		)
	)(w)
})(window);
