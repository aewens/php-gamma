require.config({
    urlArgs: "nocache=" + (new Date).getTime()
});

require([
    "models/tweet",
    "collections/tweet-list",
    "views/tweets-view"
], function(Tweet, TweetList, TweetsView) {
    var tweets = new TweetList();
    
    $(document).ready(function() {
        $("#new-tweet").submit(function(e) {
            e.preventDefault();
            
            var tweet = new Tweet({
                author: $("#author").val(),
                status: $("#status").val()
            });
            
            tweets.add(tweet);
            console.log(tweets.toJSON());
            
            $("#status").val("");
            $("#author").val("").focus();
            
            return false;
        });
        
        var appView = new TweetsView({
            model: tweets
        });
    });
});
