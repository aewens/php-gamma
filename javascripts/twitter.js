require.config({
    urlArgs: "nocache=" + (new Date).getTime()
});

require([
    "models/tweet",
    "collections/tweetlist"
], function(Tweet, TweetList) {
    var tweet1 = new Tweet({
            author: "aewens",
            status: "Making a web app"
        }),
        tweet2 = new Tweet({
            author: "someone",
            status: "What kind of web app"
        }),
        tweet3 = new Tweet({
            author: "aewens",
            status: "The web kind"
        });
    
    var tweets = new TweetList([tweet1, tweet2, tweet3]);
    
    console.log(tweets.toJSON());
});
