var cookies = (function() {
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(str) {
            if (this.length < str.length) {
                return false;
            }
            for (var i = 0; i < str.length; i++) {
                if (this[i] !== str[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    function readCookies(name) {
        var allCookies = document.cookie.split(";");
        var localStorageShimArr =[];

        for (var i = 0; i < allCookies.length; i++) {
            var cookie = allCookies[i];
            var trailingZeros = 0;
            for (var j = 0; j < cookie.length; j++) {
                if (cookie[j] !== " ") {
                    break;
                }
            }
            cookie = cookie.substring(j, cookie.length);
            var endOfCookieName = cookie.indexOf("=");
            var name = cookie.substring(0,endOfCookieName);
            var _value = cookie.substring(endOfCookieName+1, cookie.length);
            arr.push({key:name,value:_value});
        }
        return localStorageShimArr;
    }

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = " ; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function removeCookie(name) {
        createCookie(name, "", -1);
    }

    return {
    	read:readCookies,
    	create:createCookie,
    	remove:removeCookie
    };
}());
