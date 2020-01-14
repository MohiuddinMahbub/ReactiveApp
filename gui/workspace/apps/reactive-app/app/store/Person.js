Ext.define('ReactiveApp.store.Person', {
    extend: 'Ext.data.Store',
    alias: 'store.person',
    storeId: 'personStore',

	requires: [
		'ReactiveApp.model.Person'
	],

    model: 'ReactiveApp.model.Person'/*,

    data: {
    	items: [
	        { id: 1, firstName: 'Jean', lastName: 'Luc', comapny: "naztech.us.com" },
	        { id: 2, firstName: 'Jean', lastName: 'Luc', comapny: "naztech.us.com" },
	        { id: 3, firstName: 'Jean', lastName: 'Luc', comapny: "naztech.us.com" }
	    ]
	},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
});