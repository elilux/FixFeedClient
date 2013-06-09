define(['backbone', 'plumberModel'], function (Backbone, plumber) {

	var plumberCollection = Backbone.Collection.extend({
  		
		//url: 'http://search.twitter.com/search.json?q=NYC&callback=?',
        //url: 'http://evening-cliffs-9425.herokuapp.com/plumbers.json&callback=?',
        //url: 'http://4k7q.localtunnel.com/plumbers.json&callback=?',
        //url: 'http://3fsp.localtunnel.com/plumbers.json&callback=?',
        url: '/plumbers.json'

        model: plumber,

  		initialize: function () {
  			this.fetch();
  		},

        parse: function(response) {
            console.log('parsing ...: ' + JSON.stringify(response));
            return response;
            //return response.results;
        },

        wrapError: function(error) {
        	console.log('error: ' + error);
        },

		sync: function (method, model, options) {
		    var self = this;

		    var success = options.success;
		    options.success = function(resp) {
		      if (success) success(resp);
		      model.trigger('sync', model, resp, options);
		    };
		    var params = _.extend({
		        type: 'GET',
		        dataType: 'json',
		        url: self.url,
		        processData: false,
		        contentType:"text/javascript; charset=utf-8"
		    }, options);

		    return $.ajax(params);
		},

	});   
	return plumberCollection;
});