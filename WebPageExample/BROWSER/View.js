WebPageExample.View = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		// div
		div,

		// close.
		close;

		div = DIV({
			style : {
				fontSize : 50
			},
			c : [SPAN({
				c : ['Hello UPPERCASE!']
			})]
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			div.remove();
		};
	}
});
