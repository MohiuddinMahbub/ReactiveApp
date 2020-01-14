Ext.define('ReactiveApp.model.Person', {
	extend: 'Ext.data.Model',

	fields: [
	
		{
			type: 'int',
			name: 'id'
		},
		{
			type: 'string',
			name: 'firstName'
		},
		{
			type: 'string',
			name: 'lastName'
		},
		{
			type: 'string',
			name: 'company'
		}
	]

});