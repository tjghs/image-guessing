"use strict";
var playingTeam,
    playingTeams = [],
    goNext = false,
    game = false,
    zoomOut = true,
    dialogOn = false;

function setSettings() {
    var teams = {};
    var tempVal;
    for (var i = 1; i < 5; i++) {
        tempVal = document.getElementById("team-" + i).value;
        console.log(playingTeams);
        if (tempVal == "") {
            break;
        }
        if (teams[tempVal] == 0) {
            alert("Duplicate Team Names!");
            return;
        }
        teams[tempVal] = 0;
        playingTeams[i - 1] = document.getElementById("team-" + i).value;
    }
    localStorage.setItem("scores", JSON.stringify(teams));
    printTeams();
    var timer = document.getElementById("timer-toggle").checked;
    var german = document.getElementById("german-toggle").checked;
    console.log(timer);
    console.log(german);
    document.getElementById("settings-dialog").style.opacity = "0";
    window.setTimeout(function() {
        document.getElementById("settings-dialog").style.display = "none";
    }, 300);
    document.getElementById("next-button").disabled = false;
    startGame(teams, timer, german);
}

function addScore(team) {
    var teams = JSON.parse(localStorage.getItem("scores"));
    teams[team]++;
    //console.log(teams[team]);
    localStorage.setItem("scores", JSON.stringify(teams));
}

function printTeams() {
    var teams = JSON.parse(localStorage.getItem("scores"));
    for (var key in teams) {
        if (teams.hasOwnProperty(key)) {
            console.log(key + " : " + teams[key]);
        }
    }
}

function startGame(teams, timer, german) {
    game = true;
    var i = 0;
    var url = getRandomImage();
    document.getElementById("game-image").style.backgroundImage = "url('" + url + "')";

    if (timer) {
        window.setInterval(function() {
            playingTeam = playingTeams[i];
            getNext(false);
        }, 3000);
    } else {
        playingTeam = playingTeams[i];
        /*while(game) {
        }*/
    }
    /*while (true) {
        console.log(playingTeam);
        playingTeam = (i + 1) + "";
        if (timer) {
            window.setTimeout(function() {}, 30000);
            i++;
            url = getRandomImage();
            if(url == "end") {
                break;
            }
            document.getElementById("game-image").style.backgroundImage = "url('" + url + "')";
        }
        if (goNext) {
            i++;
            goNext = false;
            url = getRandomImage();
            if(url == "end") {
                break;
            }
            document.getElementById("game-image").style.backgroundImage = "url('" + url + "')";
            
        }
    }*/
    printTeams();
}

function getNext(scoreAdd) {
    if (zoomOut) {
        document.getElementById("game-image").style.transform = "scale(1)";
        var bgURL = document.getElementById("game-image").style.backgroundImage;
        console.log(bgURL);
        document.getElementById("answer").innerHTML = bgURL.substring(12, bgURL.length - 6);
        if (game) {
            dialog.showModal();
            dialogOn = true;
        }
        zoomOut = false;
    } else {
        addScore(playingTeam);
        if (dialogOn) {
            dialog.close();
            dialogOn = false;
        }
        var url = getRandomImage();
        if (url == "end") {
            var gameOver = document.createElement("h1");
            gameOver.style.marginLeft = "24px";
            gameOver.innerHTML = "Game Over!";
            document.getElementById("game").innerHTML = "";
            document.getElementById("game").appendChild(gameOver);
            var table = document.createElement("table");
            var tr, td0, td1;
            var teams = JSON.parse(localStorage.getItem("scores"));
            for (var key in teams) {
                if (teams.hasOwnProperty(key)) {
                    tr = document.createElement("tr");
                    td0 = document.createElement("td");
                    td0.innerHTML = key;
                    td1 = document.createElement("td");
                    td1.innerHTML = teams[key];
                    tr.appendChild(td0);
                    tr.appendChild(td1);
                    table.appendChild(tr);
                }
            }
            document.getElementById("game").appendChild(table);
            game = false;
            printTeams();
            return;
        }
        document.getElementById("game-image").style.transform = "scale(3.5)";
        document.getElementById("game-image").style.backgroundImage = "url('" + url + "')";
        zoomOut = true;
    }
}

function showAnswer() {

}

document.getElementById("next-button").addEventListener('click', function() {
    getNext(true);
});
document.getElementById("close-dialog").addEventListener('click', function() {
    dialogOn = false;
});
/*(function() {
    'use strict';
    window['counter'] = 0;
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#game-image');
    showToastButton.addEventListener('click', function() {
        'use strict';
        var data = {
            message: '<ANSWER>'
        };
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
}());*/

window.addEventListener("keyup", function(e) {
    if (e.keyCode == 39 && game) {
        getNext(true)
    }
}, true);

var dialog = document.querySelector('dialog');
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
});