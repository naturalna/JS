if (!Object.create) {
        Object.create = function (obj) {
            function f() { };
            f.prototype = obj;
            return new f();
        }
    }

    if (!Object.prototype.extend) {
        Object.prototype.extend = function (properties) {
            function f() { };
            f.prototype = Object.create(this);//this - obj
            for (var prop in properties) {
                f.prototype[prop] = properties[prop];
            }
            f.prototype._super = this;
            return new f();
        }
    }
    var Gallery ={
    init: function  () {
        Gallery.holder.addEventListener("click", function (ev) {
            var picTag = ev.target;
            
            var picture = Object.create(Picture);
            picture.init(picTag);
            picture.drawBig();

        }, false);

        var leftArrow = document.querySelector("#larrow");

        leftArrow.addEventListener("click", function  (ev) {

            var allPics = document.querySelectorAll("#smallImageHolder > img");
            if (Gallery.clicksCount >= allPics.length) {Gallery.clicksCount = allPics.length - 1;}
            allPics[Gallery.clicksCount].style.display ="none";
            Gallery.clicksCount++;
        }, false);

         var rightArrow = document.querySelector("#rarrow");

        rightArrow.addEventListener("click", function  (ev) {

            var allPics = document.querySelectorAll("#smallImageHolder > img");
            Gallery.clicksCount--;
            if (Gallery.clicksCount < 0 ) {Gallery.clicksCount = 0;}
            allPics[Gallery.clicksCount].style.display ="";
            
        }, false);
    },
}
Gallery.holder = document.getElementById("smallImageHolder");
Gallery.oldClickedPicTag = undefined;
Gallery.clicksCount = 0;

var Picture = {  
    init : function (picTag) {
        this.img = picTag;
        this.picSrc = this.img.getAttribute("src");

    },
    drawBig : function  () {
        if (Gallery.oldClickedPicTag !== undefined) { Gallery.oldClickedPicTag.style.display = ""; }
        Gallery.oldClickedPicTag = this.img;
        this.img.style.display = "none";
        //find big pic name
        var picName = this.picSrc.split("img/smallImg/s");
        var newImg = document.createElement("img");
        newImg.setAttribute("src", "img/" + picName[1]);
        newImg.style.width = 400 +"px";
        newImg.style.height = 400 +"px";
        var bigHolder = document.getElementById("bigHolder");
        while(bigHolder.hasChildNodes()){
            bigHolder.removeChild(bigHolder.firstChild);
        }

        bigHolder.appendChild(newImg);
    },
}

var gallery = Object.create(Gallery);
gallery.init();


