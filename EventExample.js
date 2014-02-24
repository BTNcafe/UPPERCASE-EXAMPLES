// run: nodemon WebPageExample.js

require('./UPPERCASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'EventExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true
	}
});
