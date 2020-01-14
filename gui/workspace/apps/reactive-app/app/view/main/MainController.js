/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ReactiveApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	onItemSelected: function (sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm: function (choice) {
		if (choice === 'yes') {
			//
		}
	},

	onClose: function (choice) {
		
		if(source.readyState !== EventSource.CLOSED){
			source.close();

			console.log('Event CLOSED: ', + source.readyState);
		}
	},

	onOpen: function (choice) {
		var me = this;
		
		if (!window.EventSource) {
			// IE or an old browser
			alert("The browser doesn't support EventSource.");
			return;
		}

		source = new EventSource(live_server);
		
		source.onopen = function(e) {
			console.log("Event: OPEN");
		};

		source.onerror = e => {
			console.log("Event: ERROR");
			if (this.readyState == EventSource.CONNECTING) {
				console.log('Reconnecting (readyState=${this.readyState})...');
			}/* else {
				console.log("Error has occured.", e);
			}*/
		};

		//custom events
		source.addEventListener('bye', function(e) {
			console.log("Event: bye, data: " + e.data);
		});
		
		source.onmessage = e => {
			console.log("Event: message, data: " + e.data);
			var items = [];
			items[0] = JSON.parse(e.data);

			var store = Ext.data.StoreManager.lookup('personStore');

			var exists = me.dataCheck(store, items[0]);
			
			if(exists === 0 || Ext.isEmpty(exists)){
				store.add(items);
			}
			else if(exists !== 0 && exists !== 1){
				var rec = store.getById(items[0].id);
				store.remove(rec);
				store.add(items);
				store.sync();
			}
		}
	},

	dataCheck: function(store, data){
		var isFound;
		var recordIndex = store.findBy(
			function(record, id){
				if(record.get('id') === data.id && 
					record.get('firstName') === data.firstName &&
					record.get('lastName') === data.lastName &&
					record.get('company') === data.company){
					isFound = 1;
					return true;  // a record with this data exists
				}
				else if(record.get('id') === data.id && 
					record.get('firstName') !== data.firstName &&
					record.get('lastName') === data.lastName &&
					record.get('company') === data.company){
					isFound = 2;
					return true;// first name updated
				}
				else if(record.get('id') === data.id && 
					record.get('firstName') === data.firstName &&
					record.get('lastName') !== data.lastName &&
					record.get('company') === data.company){
					isFound = 3;
					return true;// last name updated
				}
				else if(record.get('id') === data.id && 
					record.get('firstName') === data.firstName &&
					record.get('lastName') === data.lastName &&
					record.get('company') !== data.company){
					isFound = 4;
					return true;// company updated
				}

				return false;  // there is no record in the store with this data
			}
		);

		return isFound;
	}
});
