ChatExample.MAIN = METHOD({

	run : function() {'use strict';

		ChatExample.ROOM('chatRoom', function(room) {

			room.on('msg', function(data) {

				ChatExample.ROOMS('chatRoom').broadcast({
					methodName : 'msg',
					data : data
				});
			});
		});
	}
});
