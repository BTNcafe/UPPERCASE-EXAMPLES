// run: nodemon WebPageExample.js

require('./UPPERCASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'WebPageExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true
	}
});
