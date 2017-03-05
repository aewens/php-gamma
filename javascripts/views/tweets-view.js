define([
    "collections/tweet-list",
    "views/tweet-view"
], function(TweetList, TweetView) {
    return Backbone.View.extend({
        model: new TweetList(),
        el: $("#tweets-container"),
        initialize: function() {
            this.model.on("add", this.render, this);
            this.model.on("remove", this.render, this);
        },
        render: function() {
            var self = this;
            
            self.$el.html("");
            
            console.log(this.model, this.model.toArray());
            
            _.each(this.model.toArray(), function(tweet, t) {
                var view = new TweetView({
                        model: tweet,
                        collection: self.model
                    }),
                    content = view.render().$el;
                    
                self.$el.append(content);
            });
            
            return this;
        }
    });
});
