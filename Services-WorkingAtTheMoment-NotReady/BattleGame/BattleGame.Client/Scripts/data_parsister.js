/// <reference path="class.js" />
/// <reference path="httpRequester.js" />
/// <reference path="Sha1Fun.js" />

var BattleGame = BattleGame || {};

BattleGame.dataParsister = (function () {

    var baseParser = Class.create({
        // base url http://localhost:22954/
        init: function (baseURL) {
            this.baseUrl = baseURL;
            this.users = new UserParsister(this.baseUrl + "/user");
            this.games = new GameParsister(this.baseUrl + "/game");
            this.battles = new BattleParsister(this.baseUrl + "/battle");
            this.messages = new MessageParsister(this.baseUrl + "/messages");
            this.score = [];
        },
        isLoggedIn: function () {
            var key = localStorage.getItem("sesionKey");
            if (key) {
                if (key != "") {
                    return true;
                }
            }
            return false;
        }
    });

    var UserParsister = Class.create({
        init: function (serviseUrl) {
            this.url = serviseUrl;
            this.score = [];
        },
        logIn: function (username, password) {
            var hash = CryptoJS.SHA1(password).toString();
            return httpRequest.postRequest(this.url + "/login", { username: username, authCode: hash }).
                then(function (data) {
                    localStorage.setItem("sesionKey", data.sessionKey);
                    localStorage.setItem("nickname", data.nickname);
                }, function (err) { console.log(err) });

        },
        // pri login da se prawi now kym lokal storage zaqwka
        logout: function () {
            //var key = localStorage.getItem(sessionKey);
            return httpRequest.getRequest(this.url + "/logout/" + localStorage.getItem("sesionKey")).
                then(function (data) {
                    localStorage.setItem("sesionKey", "");
                    sessionKey = "";
                    localStorage.setItem("nickname", "");
                }, function (er) {
                    console.log(er);
                });
        },
        register: function (username, nickname, password) {
            var hash = CryptoJS.SHA1(password).toString();
            console.log(hash);
            var self = this;
            return httpRequest.postRequest(this.url + "/register",
                {
                    username: username,
                    nickname: nickname,
                    authCode: hash,
                }).then(function (data) {
                    localStorage.setItem("sesionKey", data.sessionKey);
                    localStorage.setItem("nickname", data.nickname);
                }, function (err) { console.log(err); });
        },
        scores: function () {
            console.log(localStorage.getItem("sesionKey"));
            return httpRequest.getRequest(this.url + "/scores/" + localStorage.getItem("sesionKey")).done();                 
        }
    });

    var MessageParsister = Class.create({
        init: function (baseURL) {
            this.messageUrl = baseURL
        },
        unread: function () {
            return httpRequest.getRequest(this.messageUrl + "/unread/" + localStorage.getItem("sesionKey"));
        },
        all: function () {
            return httpRequest.getRequest(this.messageUrl + "/all/" + localStorage.getItem("sesionKey"))
                .then(function (data) { console.log(data); });// ili pri wikaneto 6te si wikam then nai dobre
        },
    });
    var BattleParsister = Class.create({
        init: function (serviceURL) {
            this.baseUrl = serviceURL;
        },
        move: function (unitId, position, gameId) {
            return httpRequest.postRequest(this.baseUrl + "/" + gameId + "/move/" + localStorage.getItem("sesionKey"), {
                unitId: unitId,
                position: position
            });
        },
        attack: function (unitId, position, gameId) { 
            return httpRequest.postRequest(this.baseUrl +"/"+ gameId +"/attack/" + localStorage.getItem("sesionKey"),{
                unitId: unitId,
                position: position
            });
        },
        defend: function (unitId, gameId) {
            return httpRequest.postRequest(this.baseUrl +"/"+ gameId +"/attack/" + localStorage.getItem("sesionKey"),{
                unitId: unitId
            });
        },
    });

    var GameParsister = Class.create({
        init: function (serviceUrl) {
            this.gameUrl = serviceUrl;
        },
        create: function (title) {
            return httpRequest.postRequest(this.gameUrl + "/create/" + localStorage.getItem("sesionKey"), { title: title }).
                then(function () { }, function (er) { console.log(err); });
        },
        join: function (gameId) {
                return httpRequest.postRequest(this.gameUrl + "/join/" + localStorage.getItem("sesionKey"),{ id: gameId});           
        },
        start: function (gameId) {
            return httpRequest.getRequest(this.gameUrl + "/" + gameId + "/start/" + localStorage.getItem("sesionKey"));
        },
        open: function () {
            return httpRequest.getRequest(this.gameUrl + "/open/" + localStorage.getItem("sesionKey"));
        },
        myActive: function () {
            return httpRequest.getRequest(this.gameUrl + "/my-active/" + localStorage.getItem("sesionKey"));
        },
        field: function (gameId) {
            return httpRequest.getRequest(this.gameUrl + "/" + gameId + "/field/" + localStorage.getItem("sesionKey"));
        },
    });
    return {
        baseParsester: function (url) {
            return new baseParser(url);
        },
    };
}());

// test 
//var parsister = BattleGame.dataParsister.baseParsester("http://localhost:22954/api");
//parsister.users.register("aaaaaa", "bbbbbb", "cccccc");
//parsister.users.logIn("aaaaaa", "cccccc");
//parsister.users.logout();
//parsister.users.scores();
//parsister.messages.all();
//parsister.games.create("proba6666");
