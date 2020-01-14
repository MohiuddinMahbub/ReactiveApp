/**
 * This view is an example list of people.
 */
Ext.define('LocaleTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'LocaleTest.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    
    plugins: [
        {
            ptype: 'gridfilters'
        }
    ],

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {   
            xtype: 'datecolumn',
            text: 'Date',
            dataIndex: 'date',
            flex: 1,
            renderer: Ext.util.Format.dateRenderer('d-M-y'),
            filter: {
                type: 'date'
            }
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
