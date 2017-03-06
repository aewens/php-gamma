define([], function() {
    return Backbone.Router.extend({
        routes: {
            "*default": "default"
        }
    });
});
