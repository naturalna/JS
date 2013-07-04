/// <reference path="data_parsister.js" />
/// <reference path="class.js" />
/// <reference path="data_parsister.js" />
/// <reference path="httpRequester.js" />
/// <reference path="jquery-2.0.2.js" />
/// <reference path="ui.js" />
// hodi i zakacha eventi prosto

var bullsAndCows = bullsAndCows || {};

bullsAndCows.Controller = (function () {

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
        loadGame: function (selectorParent) {
            

                  
        },
        loadLogOut: function (selectorParent, parsister) {
            //clear all
            var logoutPage = bullsAndCows.ui.loadLogout();
            $(selectorParent).html("").append(logoutPage);
            //attach event
            $(selectorParent).on("click", function (ev) {
                parsister.users.logout();
            });

        },
        loadLogIn: function (selectorParent, parsister) {
            var loginStartPage = bullsAndCows.ui.loadStartPage();
            $(selectorParent).append(loginStartPage);
            var self = this;
            // add event for login and start buttons
            $("#button-holder").on("click", function (ev) {
                $("#button-holder").hide().off("click");
                var pressedButtonId = ev.target.id;
                if (pressedButtonId == "login-button") {
                    var loginPage = bullsAndCows.ui.loadLogInPage();
                    $(selectorParent).append(loginPage);
                    // add event to login form 
                    var accessSelector = "#login-container";
                    accessEventListener(accessSelector, parsister);

                } else {
                    var registerPage = bullsAndCows.ui.loadRegisterPage();
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
                            parsister.users.logIn($(arr[0]).val(), $(arr[1]).val());
                        }
                        // start game
                        that.loadLogOut("#container", parsister);
                        that.loadGame("#container", parsister);
                    });
                };
            });
        },

    });
    return {
        accessControler: function (data) { return new AccsesControler(data);},
    };
}());