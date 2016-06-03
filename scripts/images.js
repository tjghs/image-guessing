"use strict";
var links = ["Allianz Arena.jpg", "Angela Merkel.jpg", "Autobahn.jpg", "Berlin Wall.jpg", "Black Forest Cake.jpg", "Brandenburg Gate.jpg", "German Shepherd.jpg", "Lederhosen.jpg", "Marienplatz.jpg", "Milka Chocolate.jpg", "Nymphenberg Palace Hall of Mirrors.jpg", "Reichstag Building.jpg","Wurst.jpg", "Mr. Williams.jpg"];

function getRandomImage() {
    if (links.length == 0) {
        return "end";
    }
    var i = Math.floor(Math.random() * links.length);
    var temp = links[i];
    links.splice(i, 1);
    return "images/" + temp;
}
