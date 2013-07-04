/// <reference path="class.js" />
/// <reference path="httpRequester.js" />
/// <reference path="Sha1Fun.js" />

var bullsAndCows = bullsAndCows || {};

bullsAndCows.dataParsister = (function () {
    
    var baseParser = Class.create({       
        init: function (baseURL) {
            this.baseUrl = baseURL;
            this.users = new userParsester(this.baseUrl + "/user");
            this.games = new GameParsister(this.baseUrl + "/game");
            this.guesses = new GuessParsister(this.baseUrl + "/guess");
            this.messages = new MessageParsister(this.baseUrl + "/messages");
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
 
    var userParsester = Class.create({
        init: function (serviseUrl) {
            this.url = serviseUrl;
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

        }
    });

    var MessageParsister = Class.create({
        init: function () {
        },
        unread: function () {
        },
        all: function () {
        },
    });
    var GuessParsister = Class.create({
        init: function () {
        },
        makeGuess: function () {
        },
    });

    var GameParsister = Class.create({
        init: function (gameURL) {
            this.gameUrl = gameURL;
        },
        create: function () { },
        join: function () { },
        start: function () { },
        open: function () { },
        myActive: function () { },
        state: function () { },
    });
    return {
        baseParsester: function (url) {
            return new baseParser(url);
        },
    };
}());

// test 
//var parsister = bullsAndCows.dataParsister.baseParsester("http://localhost:40643/api");
//parsister.users.register("a", "b", "c");
//parsister.users.logout();
//parsister.users.register("anna", "anna", "anna");