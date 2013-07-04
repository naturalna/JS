/// <reference path="data_parsister.js" />
/// <reference path="data_parsister.js" />
/// <reference path="class.js" />
/// <reference path="data_parsister.js" />
/// <reference path="httpRequester.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="ui.js" />
// hodi i zakacha eventi prosto

var BattleGame = BattleGame || {};

BattleGame.Controller = (function () {

    var AccsesControler = Class.create({
        init: function (dataParsister) {

            this.parsister = dataParsister;
            if (!this.parsister.isLoggedIn()) {
                this.loadLogIn("#container", this.parsister);
            } else {
                this.loadLogOut("#container", this.parsister);
                this.loadGame("#container", this.parsister);
            }
        },
        loadGame: function (selectorParent, parsister) {
            var gamePage = BattleGame.ui.loadGamePage();
            $(selectorParent).append(gamePage);
        },
        loadLogOut: function (selectorParent, parsister) {
            //clear all
            var logoutPage = BattleGame.ui.loadLogout();
            $(selectorParent).html("").append(logoutPage);
            //attach event
            $(selectorParent + " #logout-button").on("click", function (ev) {
                parsister.users.logout();
                $(selectorParent).html("").append(BattleGame.ui.loadGoodBye());
            });

        },
        loadLogIn: function (selectorParent, parsister) {
            var loginStartPage = BattleGame.ui.loadStartPage();
            $(selectorParent).append(loginStartPage);
            var self = this;
            // add event for login and start buttons
            $("#button-holder").on("click", function (ev) {
                $("#button-holder").hide().off("click");
                var pressedButtonId = ev.target.id;
                if (pressedButtonId == "login-button") {
                    var loginPage = BattleGame.ui.loadLogInPage();
                    $(selectorParent).append(loginPage);
                    // add event to login form 
                    var accessSelector = "#login-container";
                    accessEventListener(accessSelector, parsister);

                } else {
                    var registerPage = BattleGame.ui.loadRegisterPage();
                    $(selectorParent).append(registerPage);
                    //add event to register form
                    var accessSelector = "#register-container";
                    accessEventListener(accessSelector, parsister);
                }

                function accessEventListener(accessSelector, parsister) {
                    var that = self;
                    $(accessSelector + " > button").on("click", function (ev) {
                        var arr = [];
                        $(accessSelector + " > input").each(function () {
                            arr.push(this);
                        });
                        if (arr.length == 2) {
                            //login
                            parsister.users.logIn($(arr[0]).val(), $(arr[1]).val());
                        } else {
                            //register
                            parsister.users.register($(arr[0]).val(), $(arr[1]).val(), $(arr[2]).val());
                            //parsister.users.logIn($(arr[0]).val(), $(arr[1]).val());
                        }
                        // start game
                        that.loadLogOut("#container", parsister);
                        that.loadGame("#container", parsister);
                    });
                };
            });
        },

    });
    var GameController = Class.create({
        init: function (dataParsister) {
            this.parsister = dataParsister;
            this.handleOpenGame(dataParsister);
            this.handleActiveGames(dataParsister);
            this.refresh(dataParsister);
            this.handleCreateGame(dataParsister);
            this.userColor = "";
            this.loadGameBoard(dataParsister);
            this.handleMessages(dataParsister);
            this.loadGameBoard();

        },
        handleOpenGame: function (dataParsister) {
            var self = this;
            $("#active-games").html("");
            $("#current-game").html("");
            dataParsister.games.open().then(function (data) {
                var openGamesList = BattleGame.ui.loadOpenGames(data);
                $("#active-games").append(openGamesList).
                    on("click", function (ev) {
                        var list = BattleGame.ui.loadJoinGame();
                        var gameId = ev.target.id;
                        var other = self;
                        $("#current-game").append(list);
                        $("#join").on("click", function () {

                            dataParsister.games.join(parseInt(gameId));
                        });
                    });
            });
        },

        handleActiveGames: function (dataParsister) {
            var self = this;
            dataParsister.games.myActive().
                then(function (data) {
                    console.log(data);
                    var list = BattleGame.ui.loadActiveGames(data);
                    $("#my-games").html("");
                    $("#my-games").append(list).
                    on("click", function (ev) {
                        var gameId = ev.target.id;
                        self.findGameStates(dataParsister, gameId);
                    })
                }, function (err) { console.log(err); });
        },
        findGameStates: function (dataParsister, gameId) {
            var self = this;
            dataParsister.games.myActive().then(function(data){
                $(data).each(function(){
                    if(this.status === "full"){
                        if (this.creator === localStorage.getItem("nickname")) {
                            var list = loadstartButton();
                            this.userColor = "red";
                            $("#current-game").append(list).on("click", function () {
                                dataParsister.games.start(gameId);
                                self.loadGameBoard();
                            });
                        } else {
                            console.log("blue");
                            this.userColor = "blue";
                        }
                    }
                });
            
            });
        },

        loadGameBoard: function () {
            var line = BattleGame.ui.loadPlayfield();
            $("#current-game").html("").html(line);;
        },
        handleCreateGame: function (dataParsister) {
            var self = this;
            $("#create").on("click", function (ev) {
                var gameTitle = $("#game-name").val();
                dataParsister.games.create(gameTitle);
                self.handleOpenGame(dataParsister);
                self.handleActiveGames(dataParsister);
            });
        },
        handleMessages: function (dataParsister) {
            dataParsister.messages.all().then(function (data) {
                var messageText = BattleGame.ui.loadMessages(data);
                $("#messages").append(messageText);

            }, function (err) { console.log(err) });
            
        },
        refresh: function (dataParsister) {
            var self = this;
            $("#join").on("click", function () {
                self.handleOpenGame(dataParsister);
                self.handleActiveGames(dataParsister);
            });
        }

    });

    return {
        accessControler: function (data) { return new AccsesControler(data); },
        gameController: function (data) { return new GameController(data); },
    };
}());