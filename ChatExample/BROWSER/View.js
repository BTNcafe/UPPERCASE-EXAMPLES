ChatExample.View = CLASS({

	preset : function() {
		return VIEW;
	},

	init : function(cls, inner, self) {

		var
		// room
		room = ChatExample.ROOM('chatRoom'),

		// div
		div,

		// list
		list,

		// form
		form,

		// close.
		close;

		div = DIV({

			c : [

			// list
			list = UL({
				style : {
					paddingBottom : 30
				}
			}),

			// form
			form = FORM({
				style : {
					position : 'fixed',
					bottom : 0,
					width : '100%'
				},
				c : [UUI.FULL_INPUT({
					name : 'msg',
					placeholder : 'Message.'
				})],
				on : {
					submit : function(e, form) {
						room.send({
							methodName : 'msg',
							data : form.getData()
						});
						form.setData('');
					}
				}
			})]
		}).appendTo(BODY);

		room.on('msg', function(data) {
			list.append(LI({
				c : [data.msg]
			}));
		});

		self.close = close = function() {
			room.exit();
			div.remove();
		};
	}
});
