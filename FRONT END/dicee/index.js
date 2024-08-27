var randomNumber1 = Math.floor(Math.random() * 6) + 1;


var randomImageSource1 = "images/dice" + randomNumber1 + ".png";


var image1 = document.querySelector("img");
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.getElementsByClassName("img2")[0].setAttribute("src", randomImageSource2);

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🎈";
} else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw 🎈";
} else {
    document.querySelector("h1").innerHTML = "Player 1 wins 🎈";
}