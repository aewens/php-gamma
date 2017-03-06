require.config({
    urlArgs: "nocache=" + (new Date).getTime()
});

require([
    "modules/store-api",
    "modules/canvas",
    "routes/app-router"
], function(Store, Canvas, AppRouter) {
    var App = {
        start: function() {
            this.mount = window.MOUNT;
            this.router = new AppRouter();
            this.store = Store.get("store");
            
            var self = this;
            
            this.router.on("route:default", function() {
                console.log(self.store);
                
                var ctx = Canvas[1],
                    $c =  Canvas[0],
                    tau = 2 * Math.PI;
                    
                var pw = 10, // partition width
                    ph = 10, // partition height
                    s = 10; // size
                    
                for (var i = 0; i < pw; i++) {
                    for (var j = 0; j < ph; j++) {
                        var u = i / (pw - 1),
                            v = j / (ph - 1),
                            x = u * $c.width,
                            y = v * $c.height;
                            
                        ctx.beginPath();
                        ctx.arc(x, y, s, 0, tau);
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            });
            
            Backbone.history.start();
        }
    };
    
    App.start();
});
