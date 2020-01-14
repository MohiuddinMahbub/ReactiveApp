/**
 * This view is an example list of people.
 */
Ext.define('ReactiveApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        //'ReactiveApp.store.Personnel'
        'ReactiveApp.store.Person'
    ],

    title: 'Person',
    //title: 'Personnel',

    store: {
        type: 'person'
        //type: 'personnel'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'First Name',  dataIndex: 'firstName' },
        { text: 'Last Name',  dataIndex: 'lastName' },
        { text: 'Company',  dataIndex: 'company' }
    ]/*,

    listeners: {
        select: 'onItemSelected'
    }*/
});
