(w=>{
	(
		w.bookmarklet_id||(
			w.bookmarklet_id=(
				w=>{
					const onceWhen=(e,s,c)=>{
						const f=()=>{e.removeEventListener(s,g)},g=o=>{f();c(o)};
						e.addEventListener(s,g);
						return f
					},
					onceReady=(w,f)=>{
						if('complete'!==w.document.readyState){
							onceWhen(w,'load',f)
						}else{
							f({currentTarget:w})
						}
					};
					let canRunBookmarklet=true;
					return w=>{
						if(canRunBookmarklet){
							canRunBookmarklet=false;
							onceReady(w,eventReady=>{
								const w=eventReady.currentTarget;
								console.clear();
								//console.log(eventReady.type);
								//console.log('eventReady:%O,currentTarget:%O',eventReady,w);
								//getSelectionHtml
								//...
								canRunBookmarklet=true
							})
						}
					}
				}
			)(w)
		)
	)(w)
})(window);
