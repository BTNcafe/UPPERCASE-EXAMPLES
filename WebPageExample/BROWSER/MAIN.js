WebPageExample.MAIN = METHOD({

	run : function(m, params) {'use strict';

		// localhost:8888 or localhost:8888/#View
		WebPageExample.MATCH_VIEW({
			uris : ['', 'View'],
			target : WebPageExample.View
		});
	}
});
