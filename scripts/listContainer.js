var mainListContainer = Backbone.View.extend({

  events: {
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  }

  render: function() {
  }

});
