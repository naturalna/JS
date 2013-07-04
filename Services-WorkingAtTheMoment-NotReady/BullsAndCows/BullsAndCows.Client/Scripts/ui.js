/// <reference path="class.js" />
var bullsAndCows = bullsAndCows || {};

bullsAndCows.ui = (function () {
    var startPage = function () {
        var htlmStart = '<div id="button-holder" class="statrPage-buttons">' +
                         '<button id="login-button">Login</button>' +
                         '<button id="register-button">Register</button>' +
                        '</div>';
        return htlmStart;
    };
    var registerPage = function () {
        
        var result=   '<div id="register-container" class="hidden">'+
               '<label for="username">Username</label>'+
               '<input type="text" id="username" /></br>'+
               '<label for="nickname">Nickname</label>'+
               '<input type="text" id="nickname" /></br>' +
               '<label for="password">Password</label>'+
               '<input type="password" id="password" /></br>' +
               '<button id="reg-button">Register</button>'+
               '</div>';
              
        return result;
    };
    var logInPage = function () {
        var htmlRegistyrPage = '<div id="login-container">' +
               '<label for="login-username">Username</label>' +
               '<input type="text" id="login-username" /></br>' +
               '<label for="login-password">Password</label>' +
               '<input type="password" id="login-password" /></br>' +
               '<button id="log-button">Login</button>' +
               '</div>';
        return htmlRegistyrPage;
    };

    var logOut = function () {
        var res = '<div id="logout">' +
           '<button id="logout-button">Logout</button>' +
       '</div>';
        return res;
    };
    return {
        loadLogInPage: logInPage,
        loadStartPage: startPage,
        loadRegisterPage: registerPage,
        loadLogout : logOut,
    };
}());