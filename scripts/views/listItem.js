define(['backbone', 'text!../../templates/listItem.html' ], function (Backbone, itemTemplate) {
	var listItem = Backbone.View.extend({

		initialize: function() {
			this.render();
		},

		render: function() {
			console.log('plumber item: ' + JSON.stringify(this.model.toJSON()));
			$(this.el).html(_.template(itemTemplate, {plumber: this.model.toJSON()}));
		}

	});

	return listItem;
});
