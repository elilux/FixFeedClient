define(['backbone'], function (Backbone) {
	var plumber = Backbone.Model.extend({
		defaults: {
			"created_at":"2013-06-08T19:50:52Z",
			"id":1,
			"name":"He-Man Plumbing",
			"nextavaliable":"2013-06-08T19:50:00Z",
			"phone":"(650) 222-7953",
			"photo":"",
			"premium":false,
			"rating":2,
			"updated_at":"2013-06-08T19:50:52Z"
		}
	});
	return plumber;
});