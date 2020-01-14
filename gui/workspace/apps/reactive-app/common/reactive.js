var evtSource;
var messageObservable;
function createEventSource(){
	
	if (!!window.EventSource) {
		const { Observable } = rxjs;
		messageObservable = Observable.create(observer => {
			evtSource = new EventSource(live_server);
			evtSource.onmessage = e => {
				const message = JSON.parse(e.data);
				observer.next(message);
			}
			evtSource.onerror = e => observer.error(e);
		});

		messageObservable.subscribe(
			message => console.log(message.id),
			error => console.log('Gotten error in observable stream ' + error),
			() => console.log('Observable stream got closed.')
		);
	} else {
		alert("The browser doesn't support SSE");
	}
}


function closeEvtSource() {
	if(evtSource.readyState !== EventSource.CLOSED){
		evtSource.close();
		console.log('EventSource state', evtSource.readyState);
	}
}