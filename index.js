var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // random img from dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // random img from dice1.png to dice6.png

var image = document.querySelectorAll("img")[0]; // access to the first img

image.setAttribute("src", randomImageSource); //change the atribute src to randomImageSource

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Left player Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Right player Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}