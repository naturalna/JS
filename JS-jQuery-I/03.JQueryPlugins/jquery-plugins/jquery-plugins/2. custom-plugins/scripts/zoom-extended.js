(function($) {
  $.fn.zoom = function(size) {
    size = parseInt(size);
    var elements = this;
    elements.on("mouseover", function() {
      var oldWidth = parseInt($(this).css("width"));
      var oldHeight = parseInt($(this).css("height"));
      $(this).css("width", (oldWidth * size) + "px");
      $(this).css("height", (oldHeight * size) + "px");
    });

    elements.on("mouseout", function() {
      var oldWidth = parseInt($(this).css("width"));
      var oldHeight = parseInt($(this).css("height"));
      $(this).css("width", (oldWidth / size) + "px");
      $(this).css("height", (oldHeight / size) + "px");
    });
    return this;
  }
}(jQuery))