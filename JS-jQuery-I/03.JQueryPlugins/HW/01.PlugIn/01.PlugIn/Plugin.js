(function ($) {
    $.fn.treeView = function () {
        var elementsLi = this;// li
        this.css("listStyleType", "none");

        var tagA = elementsLi.children();
        var allTagsA = elementsLi.find("a")
            .css("textDecoration", "none");

        var allLiTags = $(this).find("li")
            .css("listStyleType", "none");
        

        $.each($(this), function () {
            $(this).find("ul")
                .css("display", "none");
        });
                      
        elementsLi.on("click", function (ev) {
            var target = ev.target;//a
            var child = $(target).next();// after a

            $.each(child, function () {
                if (this.nodeName === "UL") {
                    if ($(this).css("display") === "none") {
                        $(this).css("display", "");
                    } else {
                        $(this).css("display", "none");
                    }
                }
            });            
        })
    }
}(jQuery));