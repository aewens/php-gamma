require.config({
    urlArgs: "nocache=" + (new Date).getTime()
});

require([], function() {
    console.log("Working...");
})
