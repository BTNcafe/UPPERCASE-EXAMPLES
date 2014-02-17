EventExample.MAIN = METHOD({

	run : function(m, params) {'use strict';

		// localhost:8888
		EventExample.MATCH_VIEW({
			uris : [''],
			target : EventExample.Home
		});
	}
});
