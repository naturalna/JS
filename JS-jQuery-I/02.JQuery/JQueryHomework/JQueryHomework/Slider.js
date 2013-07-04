var Gallery = (function ($) {
    var Slide = {
        init: function (name) {
            this.imageHolder = $("#container").children();//img
            this.count = 0;
            this.draw($(this.imageHolder.get(0)));
        },
        draw: function(child)
        {
            $("#title").html("");
            var a = $("#imageHolder").get(0);
            var forRemove = $("#imageHolder img").get(0);
            if (forRemove) {
                a.removeChild(forRemove);
            }
        
            child.css("width", 300);
            child.css("height", 300);
            var parent = $("td");
            $(parent.get(0)).append("<p>" + child.attr("id") + "</p>").css("text-align", "center");
            var name = child.attr("id");
            $(parent.get(1)).load(name+ ".html");
            $(parent.get(2)).append(child);
        },

        callPrev: function () {
            this.count++;
            if (this.count > 3) {
                this.count = 3;
            }
            this.draw($(this.imageHolder.get(this.count)));
        },
        callNext: function () {
            this.count--;
            if (this.count < 0) {
                this.count = 0;
            }
            this.draw($(this.imageHolder.get(this.count)));
        },
    };

    return {
        Slide: function (name) {
            var createdClass = Object.create(Slide);
            createdClass.init(name);
            return createdClass;
        }
    }
}(jQuery));