define(['backbone', 'listItem' ], function (Backbone, listItem) {
	var mainListContainer = Backbone.View.extend({

		tagName: '.main-list',

		events: {
		},

		initialize: function() {
			this.render();
			this.listenTo(this.collection, "add", this.render);
		},

		render: function() {
			$('.main-list').html('');
			console.log('the collection: ' + JSON.stringify(this.collection.toJSON()));
			_.each(this.collection.models, function(plumber) {       
				$(this.tagName).append(new listItem({model: plumber}).el);
			}, this);
		}

	});

	return mainListContainer;
});
