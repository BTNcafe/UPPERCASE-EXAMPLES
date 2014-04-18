// run: nodemon WebPageExample.js

require('./UPPERCASE.IO/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'WebPageExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true
	}
});
