Ext.define('LocaleTest.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone', 'date'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", date: new Date() },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" , date: new Date()},
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" , date: new Date()},
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" , date: new Date()}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
