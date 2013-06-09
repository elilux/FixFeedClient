define(['backbone', 'listItem' ], function (Backbone, listItem) {
	var mainListContainer = Backbone.View.extend({

		tagName: '.main-list',

		events: {
		},

		initialize: function() {
			this.render();
			this.listenTo(this.collection, "change", this.render);
		},

		render: function() {
			$('.main-list').html('');
			_.each(this.collection.models, function(plumber) {       
				$(this.tagName).append(new listItem({model: plumber}).el);
			}, this);
		}

	});

	return mainListContainer;
});
