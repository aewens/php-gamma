define([
    "modules/canvas",
    "collections/vertices",
    "models/vertex"
], function(canvas, Vertices, Vertex) {
    var ctx = canvas[1],
        $c =  canvas[0],
        tau = 2 * Math.PI;
    
    var render = function() {
        ctx.clearRect(0, 0, $c.width, $c.height);
        
        Vertices.each(function(curr) {
            var id = curr.get("id");
            
            var prev = ((id > 0)) ? Vertices.at(id - 1) : Vertices.last();
            ctx.beginPath();
            ctx.moveTo(prev.get("x"), prev.get("y"));
            ctx.lineTo(curr.get("x"), curr.get("y"));
            ctx.closePath();
            ctx.stroke();
        });
        Vertices.each(renderVertex);
    };
    
    var renderVertex = function(vertex) {
        var x = vertex.get("x"),
            y = vertex.get("y"),
            radius = vertex.get("radius");
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, tau);
        ctx.closePath();
        ctx.fill();
    };
    
    Vertices.on("add", render);
    Vertices.on("remove", render);
    Vertices.on("change", render);
});
