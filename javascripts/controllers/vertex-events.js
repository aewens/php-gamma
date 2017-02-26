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
    };
    
    var findVertex = function(pos) {
        return Vertices.find(function(vertex) {
            return vertex.contains(pos.x, pos.y);
        })
    };
    
    var beingDragged = null,
        draggedX = 0,
        draggedY = 0;
    
    $($canvas).on("mousedown", function(e) {
        var pos = mousePos(e);
        
        beingDragged = findVertex(pos);
        
        if (!beingDragged) {
            Vertices.add(new Vertex({
                id: Vertices.length,
                x: pos.x,
                y: pos.y,
                radius: 10
            }));
        } else {
            draggedX = beingDragged.get("x");
            draggedY = beingDragged.get("y");
        }
    });
    
    $($canvas).on("mousemove", function(e) {
        var pos = mousePos(e);
        
        if (beingDragged) {
            beingDragged.set({
                x: pos.x,
                y: pos.y
            });
        }
    });
    
    $($canvas).on("mouseup", function(e) {
        if (beingDragged) {
            if (draggedX === beingDragged.get("x") && 
                draggedY === beingDragged.get("y")) {
                var _id = beingDragged.get("id");
                Vertices.remove(beingDragged);
                Vertices.each(function(vertex) {
                    var id = vertex.get("id");
                    
                    if (id > _id) {
                        vertex.set({
                            id: id - 1
                        });
                    }
                });
            }
        }
        beingDragged = null;
    });
});
