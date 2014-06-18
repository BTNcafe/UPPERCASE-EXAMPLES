require('./UPPERCASE.IO/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'ChatExample',
		isDevMode : true
	},
	NODE_CONFIG : {
		isNotUsingDB : true
	}
});
