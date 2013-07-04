/// <reference path="data_parsister.js" />
/// <reference path="httpRequester.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="controller.js" />

(function () {
    var serviceRoot = "http://localhost:22954/api";
    var dataParse = BattleGame.dataParsister.baseParsester(serviceRoot);
    var controler = BattleGame.Controller.accessControler(dataParse);
    BattleGame.Controller.gameController(dataParse);
    
}());