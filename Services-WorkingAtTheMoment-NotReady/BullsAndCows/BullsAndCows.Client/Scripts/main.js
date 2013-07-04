/// <reference path="data_parsister.js" />
/// <reference path="httpRequester.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="controller.js" />

(function () {
    var serviceRoot = "http://localhost:40643/api";
    var dataParse = bullsAndCows.dataParsister.baseParsester(serviceRoot);
    var controler = bullsAndCows.Controller.accessControler(dataParse);
    
}());