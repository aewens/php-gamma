require.config({
    urlArgs: "nocache=" + (new Date).getTime()
});

require([
    "collections/vertices",
    "models/vertex",
    "views/render-vertex",
    "controllers/vertex-events"
], function(Vertices, Vertex, RenderVertex, VertexEvents) {
    
});
