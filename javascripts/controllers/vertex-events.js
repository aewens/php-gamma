define([
    "dom/canvas",
    "collections/vertices",
    "models/vertex"
], function(canvas, Vertices, Vertex) {
    var $canvas = canvas[0];
    
    var mousePos = function(e) {
        var rect = $canvas.getBoundingClientRect(),
            width = $canvas.width,
            height = $canvas.height;
        
        return {
            x: (e.clientX - rect.left) / (rect.right - rect.left) * width,
            y: (e.clientY - rect.top) / (rect.bottom - rect.top) * height
        };
    }
    
    $($canvas).on("mousedown", function(e) {
        var pos = mousePos(e);
        
        Vertices.add(new Vertex({
            x: pos.x,
            y: pos.y
        }))
    });
});
