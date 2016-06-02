"use strict";
var playingTeam,
    playingImages = [],
    goNext = false,
    game = true,
    zoomOut = true;

function setSettings() {
    var teams = {};
    var tempVal;
    for (var i = 1; i < 5; i++) {
        tempVal = document.getElementById("team-" + i).value;
        if (tempVal == "") {
            break;
        }
        if (teams[tempVal] == 0) {
            alert("Duplicate Team Names!");
            return;
        }
        teams[tempVal] = 0;
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

function printTeams() {
    var teams = JSON.parse(localStorage.getItem("scores"));
    for (var key in teams) {
        if (teams.hasOwnProperty(key)) {
            console.log(key + " : " + teams[key]);
        }
    }
}

function startGame(teams, timer, german) {
    var i = 0;
    var url = getRandomImage();
    document.getElementById("game-image").style.backgroundImage = "url('" + url + "')";
    if(timer) {
        window.setInterval(function() {
            getNext();
        }, 3000);
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

function getNext() {
    if(zoomOut) {
        document.getElementById("game-image").style.transform = "scale(1)";
        zoomOut = false;
    } else {
        var url = getRandomImage();
        if (url == "end") {
            document.getElementById("game").innerHTML = '<h1 style="margin-left:24px;">Game Over!</h1>';
            game = false;
            printTeams();
            return;
        }
        document.getElementById("game-image").style.backgroundImage = "url('" + url + "')";
        zoomOut = true;
    }
    
}
function showAnswer() {
    
}

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