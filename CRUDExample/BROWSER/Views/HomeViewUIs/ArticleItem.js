CRUDExample('HomeView').ArticleItem = CLASS({

	preset : function() {'use strict';
		return DIV;
	},

	params : function() {'use strict';
		return {
			style : {
				backgroundColor : '#fff',
				color : '#000',
				padding : 20,
				borderBottom : '1px solid #999'
			}
		};
	},

	init : function(cls, inner, self, data, funcs) {'use strict';
		//REQUIRED: data
		//REQUIRED: funcs
		//REQUIRED: funcs.update
		//REQUIRED: funcs.remove

		var
		// update.
		update = funcs.update,

		// remove.
		remove = funcs.remove,

		// create time calendar
		createTimeCalendar = CALENDAR(data.createTime);

		// content
		self.append(DIV({
			c : [

			// title
			H3({
				style : {
					fontSize : 15
				},
				c : [data.title, SPAN({
					style : {
						marginLeft : 10,
						fontSize : 12,
						color : '#999'
					},
					c : [createTimeCalendar.getYear() + '-' + createTimeCalendar.getMonth() + '-' + createTimeCalendar.getDate() + ' ' + createTimeCalendar.getHour() + ':' + createTimeCalendar.getMinute() + ':' + createTimeCalendar.getSecond()]
				})]
			}),

			// content
			P({
				style : {
					marginTop : 10,
					marginBottom : 10
				},
				c : [data.content]
			})]
		}));

		// edit button.
		self.append(UUI.TEXT_BUTTON({
			title : '[Edit]',
			onTap : function() {
				update(data);
			}
		}));

		// delete button.
		self.append(UUI.TEXT_BUTTON({
			style : {
				marginLeft : 10
			},
			title : '[Delete]',
			onTap : function() {
				remove(data);
			}
		}));
	}
});
