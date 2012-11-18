var DEBUG = true;
(function(G){
  G.rgb2hex = function(rgb) {
    if (!rgb) {
        return '#FFFFFF'; //default color
    }
    var hex_rgb = toString(rgb).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {return ("0" + parseInt(x).toString(16)).slice(-2);}
    if (hex_rgb) {
        return "#" + hex(hex_rgb[1]) + hex(hex_rgb[2]) + hex(hex_rgb[3]);
    } else {
        return rgb;
    }
  }
})(this);
