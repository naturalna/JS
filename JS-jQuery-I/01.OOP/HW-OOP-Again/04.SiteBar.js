Class = (function() {
    function createClass(properties) {
        var f = function() {
            this.init.apply(this, arguments);
        }
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        if (!f.prototype.init) {
            f.prototype.init = function() {}
        }
        return f;
    }

    return {
        create: createClass,
    }
})();

Function.prototype.inherit = function(parent) {
    var oldPrototype = this.prototype;
    this.prototype = new parent();
    this.prototype._super = parent.prototype;
    for (var prop in oldPrototype) {
        this.prototype[prop] = oldPrototype[prop];
    }
}

var SiteBar = Class.create({
    init : function  (setOffUrls, setOfFolders) {
        this.setOffUrls = setOffUrls;
        this.setOfFolders = setOfFolders;
    },
    drow : function () {

        var siteBar = document.createElement("div");
        for (var i = 0; i < this.setOfFolders.length; i++) {
            var currentFolder = this.setOfFolders[i].drow();
            siteBar.appendChild(currentFolder);
        }

        for (var i = 0; i < this.setOffUrls.length; i++) {
            var currentURL = this.setOffUrls[i].drow();
            siteBar.appendChild(currentURL);
        }
        var holder = document.getElementById("holder");
        holder.appendChild(siteBar);
    },
});

var URLs = Class.create({
    init : function (title, urlName) {
       this.title = title;
       this.urlName = urlName;
    },
    drow : function () {
        var createdURL = document.createElement("p");
        var createdAn = document.createElement("a");
        createdAn.innerHTML = this.title;
        createdAn.setAttribute("href", this.urlName);
        var newURL = createdURL.appendChild(createdAn);
        return newURL;
    },
});

var Folder = Class.create({
    init : function (title, setOfURLs) {
        this.title = title;
        this.setOfURLs = setOfURLs;
    },
    drow : function () {
        var createdFolder = document.createElement("div");
        createdFolder.innerHTML = this.title;
        createdFolder.setAttribute("class", "folder");

        for (var i = 0; i < this.setOfURLs.length; i++) {
            createdFolder.appendChild(this.setOfURLs[i].drow());
        }

    return createdFolder;    
    },
});

var url1 = new URLs("Title 1 ", "https://www.google.bg/");
var url2 = new URLs("Title 2 ", "http://zajivotniteslubov-admin.blogspot.com/");
var url3 = new URLs("Title 3 ", "http://bg.wikipedia.org");
var url4 = new URLs("Title 4 ", "http://vbox7.com/collection:602364");
var url5 = new URLs("Title 5 ", "http://vbox7.com/collection:602364");
var setUrl = [url1, url2, url3];
var folder1 = new Folder("folder1", setUrl);
var folder2 = new Folder("folder2", [url4, url5]);


var siteB = new SiteBar(setUrl, [folder1, folder2]);
siteB.drow();