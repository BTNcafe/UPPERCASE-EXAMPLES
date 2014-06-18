require('./UPPERCASE.IO/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'CRUDExample',
		isDevMode : true
	},
	NODE_CONFIG : {
		dbName : 'CRUDExample-test',
		isNotRequiringDBAuth : true
	}
});
