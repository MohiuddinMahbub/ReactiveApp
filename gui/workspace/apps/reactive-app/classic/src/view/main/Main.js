/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ReactiveApp.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'ReactiveApp.view.main.MainController',
		'ReactiveApp.view.main.MainModel',
		'ReactiveApp.view.main.List'
	],

	controller: 'main',
	viewModel: 'main',

	ui: 'navigation',

	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-th-list'
	},

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		bodyPadding: 20,
		tabConfig: {
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},

	items: [
		{
			title: 'Home',
			iconCls: 'fa-home',
			// The following grid shares a store with the classic version's grid as well!
			items: [{
				xtype: 'mainlist'
			}]
		},
		/*{
			title: 'Users',
			iconCls: 'fa-user',
			bind: {
				html: '{loremIpsum}'
			}
		},
		{
			title: 'Groups',
			iconCls: 'fa-users',
			bind: {
				html: '{loremIpsum}'
			}
		},*/
		{
			title: 'Settings',
			iconCls: 'fa-cog',        
			items:[
				{
					xtype: 'panel',
					items: [
						{
							xtype: 'form',
							title: 'Reactive Connection',
							//width: 500,
							bodyPadding: 20,
		
							items: [
								{
									margin: '0 0 20 0',
									xtype: 'component',
									html: [
										'Click the CLOSE button for closing sse and OPEN button for connecting again.'
									]
								},
								{
									xtype: 'container',
									layout: {
										type: 'hbox',
										pack: 'center'
									},
									items: [
										{
											xtype: 'button',
											cls: 'contactBtn',
											scale: 'large',
											text: 'Close connection',
											listeners: {
												click: 'onClose'
											}
										},
										{
											xtype: 'button',
											cls: 'contactBtn',
											scale: 'large',
											text: 'Open connection',
											listeners: {
												click: 'onOpen'
											}
										}
									]
								}
							]
						}
					]	
				}
			]
		}
	]
});
