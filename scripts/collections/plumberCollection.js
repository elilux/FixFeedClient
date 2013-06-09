define(['backbone', 'plumberModel'], function (Backbone, plumber) {
	var plumberCollection = Backbone.Collection.extend({
  		
		url: 'http://474c.localtunnel.com/plumbers.json',

  		model: plumber,

  		initialize: function () {
  			this.sync('read', this.model, {});
  		},

		sync: function(method, model, options){  
			options.dataType = "jsonp";  
		    return Backbone.sync(method, model, options);  
		},

  		parse: function(response) {
            return response;
        }

	});   
	return plumberCollection;
});