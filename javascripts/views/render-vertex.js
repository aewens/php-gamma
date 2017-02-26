define([
    "dom/canvas",
    "collections/vertices",
    "models/vertex"
], function(canvas, Vertices, Vertex) {
    var ctx = canvas[1],
        radius = 10,
        tau = 2 * Math.PI;
    
    var render = function() {
        Vertices.each(renderVertex);
    };
    
    var renderVertex = function(vertex) {
        var x = vertex.get("x"),
            y = vertex.get("y");
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, tau);
        ctx.closePath();
        ctx.fill();
    };
    
    Vertices.on("add", render);
});
