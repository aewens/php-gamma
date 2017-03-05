define(["models/tweet"], function(Tweet) {
    return Backbone.Collection.extend({
        model: Tweet
    });
});
