define([], function() {
    var $canvas = document.querySelector("canvas"),
        cmodel = JSON.parse($canvas.getAttribute("data-model"));
    $canvas.setAttribute("width", cmodel["width"]);
    $canvas.setAttribute("height", cmodel["height"]);
    
    $canvas.classList.add("visible");
    
    return [$canvas, $canvas.getContext("2d")];
});
