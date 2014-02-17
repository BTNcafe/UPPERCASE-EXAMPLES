CRUDExample.HomeView = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		//IMPORT: CRUDExample.HomeView.ArticleItem
		ArticleItem = CRUDExample.HomeView.ArticleItem,

		// article model
		articleModel = CRUDExample.ArticleModel(),

		// wrapper
		wrapper,

		// list
		list,

		// update.
		update,

		// remove.
		remove,

		// close.
		close;

		wrapper = DIV({
			children : [

			// title
			H1({
				style : {
					fontSize : 30
				},
				children : ['UPPERCASE CRUD Example (Realtime!!)']
			}),

			// valid form
			UUI.VALID_FORM({

				// styles
				style : {
					marginTop : 10,
					backgroundColor : '#B25501',
					padding : 20
				},
				errorMsgStyle : {
					padding : 5,
					background : '#ffbaba',
					color : '#d8000c'
				},

				// error messages
				errorMsgs : {
					title : {
						notEmpty : '제목을 입력해주세요.',
						size : function(validParams) {
							return '최대 ' + validParams.max + '글자입니다.';
						}
					},
					content : {
						notEmpty : '내용을 입력해주세요.',
						size : function(validParams) {
							return '최대 ' + validParams.max + '글자입니다.';
						}
					}
				},
				children : [

				// form title
				H3({
					style : {
						fontSize : 20
					},
					children : ['Article Form']
				}),

				// title input
				UUI.FULL_INPUT({
					wrapperStyle : {
						marginTop : 10
					},
					name : 'title',
					placeholder : 'Article Title.'
				}),

				// content textarea
				UUI.FULL_TEXTAREA({
					wrapperStyle : {
						marginTop : 10
					},
					name : 'content',
					placeholder : 'Article Content.'
				}),

				// submit button
				UUI.FULL_SUBMIT({
					value : 'Done!'
				})],

				onSubmit : function(e, form) {

					var
					// loading
					loading = UUI.LOADING({
						wrapperStyle : {
							backgroundColor : RGBA([0, 0, 0, 0.5])
						},
						contentStyle : {
							padding : 20
						},
						msg : 'Loading...'
					});

					// create article.
					articleModel.create(form.getData(), function(result) {

						loading.remove();

						// when error.
						if (result.hasError === true) {
							form.showErrors(result.errors);
						}

						// when success.
						else {

							// clear form.
							form.setData({});

							// notice done.
							UUI.NOTICE({
								wrapperStyle : {
									backgroundColor : RGBA([0, 0, 0, 0.5])
								},
								contentStyle : {
									padding : 20
								},
								msg : 'Done!'
							});
						}
					});
				}
			}),

			// article list
			list = UUI.LIST()]
		}).appendTo(BODY);

		update = function(data) {

			var
			// form
			form,

			// modal
			modal = UUI.MODAL({
				wrapperStyle : {
					backgroundColor : RGBA([0, 0, 0, 0.5])
				},
				contentStyle : {
					padding : 20
				},
				children : [

				// valid form
				form = UUI.VALID_FORM({

					// styles
					errorMsgStyle : {
						padding : 5,
						background : '#ffbaba',
						color : '#d8000c'
					},

					// error messages
					errorMsgs : {
						title : {
							notEmpty : '제목을 입력해주세요.',
							size : function(validParams) {
								return '최대 ' + validParams.max + '글자입니다.';
							}
						},
						content : {
							notEmpty : '내용을 입력해주세요.',
							size : function(validParams) {
								return '최대 ' + validParams.max + '글자입니다.';
							}
						}
					},
					children : [

					// form title
					H3({
						style : {
							fontSize : 20
						},
						children : ['Article Form']
					}),

					// title input
					UUI.FULL_INPUT({
						wrapperStyle : {
							marginTop : 10
						},
						name : 'title',
						placeholder : 'Article Title.'
					}),

					// content textarea
					UUI.FULL_TEXTAREA({
						wrapperStyle : {
							marginTop : 10
						},
						name : 'content',
						placeholder : 'Article Content.'
					}),

					// submit button
					UUI.FULL_SUBMIT({
						value : 'Done!'
					})],

					onSubmit : function(e, form) {

						var
						// new data
						newData = form.getData(),

						// loading
						loading = UUI.LOADING({
							wrapperStyle : {
								backgroundColor : RGBA([0, 0, 0, 0.5])
							},
							contentStyle : {
								padding : 20
							},
							msg : 'Loading...'
						});

						newData.id = data.id;

						// update article.
						articleModel.update(newData, function(result) {

							loading.remove();

							// when error.
							if (result.hasError === true) {
								form.showErrors(result.errors);
							}

							// when success.
							else {

								modal.remove();

								// notice done.
								UUI.NOTICE({
									wrapperStyle : {
										backgroundColor : RGBA([0, 0, 0, 0.5])
									},
									contentStyle : {
										padding : 20
									},
									msg : 'Done!'
								});
							}
						});
					}
				}), UUI.BUTTON_H({
					style : {
						backgroundColor : '#016ECC',
						marginTop : 10,
						padding : 10
					},
					title : 'Cancel',
					onTap : function() {
						modal.remove();
					}
				})]
			});

			form.setData(data);
		};

		remove = function(data) {

			var
			// modal
			modal = UUI.MODAL({
				wrapperStyle : {
					backgroundColor : RGBA([0, 0, 0, 0.5])
				},
				contentStyle : {
					padding : 20
				},
				children : [P({
					children : ['Really remove [' + data.title + ']?']
				}), UUI.BUTTON_H({
					style : {
						backgroundColor : '#DE514C',
						marginTop : 10,
						padding : 10
					},
					title : 'Yes',
					onTap : function() {

						modal.remove();

						// remove article.
						articleModel.remove(data.id);
					}
				}), UUI.BUTTON_H({
					style : {
						backgroundColor : '#016ECC',
						marginTop : 10,
						padding : 10
					},
					title : 'No',
					onTap : function() {
						modal.remove();
					}
				})]
			});
		};

		articleModel.findDatasWatching({
			sort : {
				createTime : -1
			}
		}, function(result, addUpdateHandler, addRemoveHandler, closeWatching) {

			if (result.hasError === false) {

				EACH(result.savedDatas, function(data) {

					var
					// id
					id = data.id,

					// add article item.
					addArticleItem = function(data) {

						// add item.
						list.addItem({
							key : id,
							item : ArticleItem(data, {
								update : update,
								remove : remove
							})
						});
					};

					addArticleItem(data);

					// when update data.
					addUpdateHandler(id, addArticleItem);

					// when remove data.
					addRemoveHandler(id, function() {
						list.removeItem(id);
					});
				});
			}
		});

		//OVERRIDE: self.close
		self.close = close = function(params) {
			wrapper.remove();
		};
	}
});
