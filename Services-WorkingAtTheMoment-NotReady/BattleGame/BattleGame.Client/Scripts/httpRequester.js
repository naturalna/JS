/// <reference path="q.js" />
/// <reference path="jquery-2.0.2.js" />

var httpRequest = (function () {
    var makeHttpRequest = function (url, type, data) {
        var deferred = Q.defer();

        var stringifyData = "";
        if (data) {
            stringifyData = JSON.stringify(data);// must be stryngify and $.ajax --> return Object
        }
        $.ajax({
            url: url,
            data: stringifyData, // here must be string
            type: type, // get or set
            contentType: "application/json",
            data: stringifyData,
            success: function (result) {
                deferred.resolve(result);
            },
            error: function (errorData) {
                deferred.reject(errorData);
            }
        }); // data is parsed already

        return deferred.promise;
    }

    var makeGetRequest = function (url) { return makeHttpRequest(url, "GET"); }
    var makePostRequest = function (url, data) { return makeHttpRequest(url, "POST", data); }

    return {
        getRequest: makeGetRequest,
        postRequest: makePostRequest,
    };
}());

//httpRequest.getRequest(url);
//httpRequest.postRequest(url,dataForSend);