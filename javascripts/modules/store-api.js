define([], function() {
    return {
        get: function(key) {
            var value = localStorage.getItem(key) || "{}";
            return JSON.parse(value);
        },
        set: function(key, val) {
            localStorage.setItem(key, JSON.stringify(val));
        }
    };
});
