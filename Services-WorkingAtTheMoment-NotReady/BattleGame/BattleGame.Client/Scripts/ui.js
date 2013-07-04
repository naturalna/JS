/// <reference path="class.js" />
var BattleGame = BattleGame || {};

BattleGame.ui = (function () {
    var startPage = function () {
        var htlmStart = '<div id="button-holder" class="statrPage-buttons">' +
                         '<button id="login-button">Login</button>' +
                         '<button id="register-button">Register</button>' +
                        '</div>';
        return htlmStart;
    };
    var registerPage = function () {

        var result = '<div id="register-container" class="hidden">' +
               '<label for="username">Username</label>' +
               '<input type="text" id="username" /></br>' +
               '<label for="nickname">Nickname</label>' +
               '<input type="text" id="nickname" /></br>' +
               '<label for="password">Password</label>' +
               '<input type="password" id="password" /></br>' +
               '<button id="reg-button">Register</button>' +
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
    var goodbye = function () {
        var html = '<div id="goodbye">' +
                   '<p> Goodbye</p>' +
                   '</div>';
        return html;
    };
    var getUsersScores = function (arrOfScores) {
        var list = "<ul>";
        for (var i = 0; i < arrOfScores.length; i++) {
            list += "<li>";
            list += arrOfScores[i].nickname + " : " + arrOfScores[i].score;
            list += "</li>";
        }
        list += "</ul>";
        return list;
    };

    var gamePage = function () {
       // var list = getUsersScores(arrOfScores);
        var html = '<div id="gameContainer">' +
        '<table>' +
            '<tr id="allGames">' +
                '<td id="active-games"></td>' +
                '<td id="current-game"></td>' +
               ' <td id="my-games"></td>' +
           ' </tr>' +
           ' <tr>' +
           '<td id="messages"></td>' +
                '<td id="cteateGame">'+
                '<label for="game-name">Game title</label>' +
               '<input type="text" id="game-name" /></br>'+
                '<button id = "create">Create game</button></td>' +
                
                '<td id="scores"></td>' +
            '</tr>' +
        '</table>' +
    '</div>';
        return html;
    };
    var openGames = function (arrOfGames) {
        var arr = arrOfGames;
        var list = "<p>Open games</p><ul>";
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                list += '<li id ="' + arr[i].id + '">' + arr[i].title + '</li>';
            }
        }
       
        list += "</ul>";
        return list;
    };

    var joinGame = function () {
        var html = '<div id="join-container">' +
        '<button id="join">Join Game</button>' +
    '</div>';
        return html;
    }
    var activeGame = function (arrOfOpenGames) {
        var list = "<p>Active Games<p><ul>";
        for (var i = 0; i < arrOfOpenGames.length; i++) {
            list += '<li id ="' + arrOfOpenGames[i].id + '">' + arrOfOpenGames[i].title + '</li>';
        }
        list += "</ul>";
        return list;
    }
    var startButton = function () {
        var html = '  <div id="start-game">' +
        '<button id="start">Start Game</button>' +
    '</div>';
        return html;
    }
    var loadAllMessages = function (data) {
        var html = '<ul id="messages">';
        for (var i = 0; i < data.length; i++) {
            html += '<li>';
            html += data[i].text;
            html += '</li>';
        }
        html += '</ul>';
    }

    var playField = function () {
        var html = '<div id="playfield"> '+
       '<table id ="field">                          '+
       '    <tr>                         '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '    </tr>                        '+
       '     <tr>                        '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '    </tr>                        '+
       '     <tr>                        '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '        <td></td>                '+
       '     </tr>                       '+
       '      <tr>                       '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '     </tr>                       '+
       '      <tr>                       '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
       '     </tr>                       '+
       '      <tr>                       '+
       '         <td></td>               '+
       '         <td></td>               '+
       '         <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '       </tr>                       '+
     '        <tr>                       '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '           <td></td>               '+
     '       </tr>                       '+
   '         <tr>                        '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '         </tr>                       '+
   '          <tr>                       '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '             <td></td>               '+
   '         </tr>                       '+
   '     </table>                        '+
   ' </div>'
        return html;
    }
    return {
        loadLogInPage: logInPage,
        loadStartPage: startPage,
        loadRegisterPage: registerPage,
        loadLogout: logOut,
        loadGoodBye: goodbye,
        loadGamePage: function (arrOfScores) { return gamePage(arrOfScores); },
        loadOpenGames: function (arrOfGames) { return openGames(arrOfGames); },
        loadJoinGame: joinGame,
        loadActiveGames: function (arrOfActive) { return activeGame(arrOfActive); },
        loadstartButton: startButton,
        loadMessages: function (arrOfMessages) { return loadAllMessages(arrOfMessages); },
        loadPlayfield: playField,
    };
}());