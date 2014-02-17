CRUDExample.MAIN = METHOD({

	run : function(m, params) {'use strict';

		CRUDExample.MATCH_VIEW({
			uris : ['', 'View'],
			target : CRUDExample.HomeView
		});
	}
});
