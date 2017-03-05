define([], function() {
    return Backbone.Model.extend({
        defaults: function() {
            return {
                author: "",
                status: ""
            };
        }
    });
});
