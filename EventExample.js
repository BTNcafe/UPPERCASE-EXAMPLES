// run: nodemon WebPageExample.js

require('./UPPERCASE.IO/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'EventExample',
		isDevMode : true
	},
	NODE_CONFIG : {
		isNotUsingDB : true
	}
});
