requirejs.config({
    baseUrl: "scripts/lib",
    paths: {
        jquery      : "jquery-1.10.0.min",
        backbone    : "backbone",
        underscore  : "underscore",
        listContainer: '../views/listContainer',
        listItem: '../views/listItem',
        plumberModel: '../models/plumberModel',
        plumberCollection: '../collections/plumberCollection'
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        }
    }
});

define(['backbone', 'listContainer', 'plumberCollection'], function (Backbone, listContainer, plumberCollection) {
    var plumberCollection = new plumberCollection();
    var plumberList = new listContainer({collection: plumberCollection});
});