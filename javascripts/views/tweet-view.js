define([
    "models/tweet",
    "collections/tweet-list"
], function(Tweet, TweetList) {
    return Backbone.View.extend({
        model: new Tweet(),
        collection: new TweetList(),
        tagName: "div",
        className: "tweet",
        events: {
            "click .edit": "edit",
            "click .delete": "delete",
            "blur .status": "close",
            "keypress .status": "update"
        },
        initialize: function() {
            var tmplHTML = $("#tweet-tmpl").html();
            this.tmpl = _.template(tmplHTML);
        },
        edit: function(e) {
            e.preventDefault();
            
            this.$(".status").attr("contenteditable", true).focus();
        },
        close: function() {
            var $status = this.$(".status"),
                newStatus = $status.text();
            
            this.model.set("status", newStatus);
            $status.removeAttr("contenteditable")
        },
        update: function(e) {
            var self = this;
            if (e.keyCode === 13) {
                this.close();
                _.delay(function() {
                    self.$(".status").blur();
                }, 100);
            }
        },
        delete: function(e) {
            e.preventDefault();
            
            this.collection.remove(this.model);
        },
        render: function() {
            var data = this.model.toJSON(),
                view = this.tmpl(data);
            this.$el.html(view);
            
            return this;
        }
    });
});
