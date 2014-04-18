require('./UPPERCASE.IO/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'ChatExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true
	}
});
