EventExample.Home = CLASS({

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
				c : ['Touch me Touch me Touch me now!']
			})],

			// event1
			on : {
				tap : function(e, div) {
					div.removeAllChildren();
					div.append('Ouch!');
				}
			}
		}).appendTo(BODY);

		// event2
		EVENT({
			node : div,
			name : 'mouseover'
		}, function(e, div) {
			console.log(e.getLeft(), e.getTop());
		});

		//OVERRIDE: self.close
		self.close = close = function(params) {
			div.remove();
		};
	}
});
