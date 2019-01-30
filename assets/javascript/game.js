//Array with the choices available
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that hold the number of wins, losses, guesses left, user guesses
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessChoices = [];

//Variables that hold references to the places in the HTML

var directionsText = document.getElementById("directions-txt");
var winsText = document.getElementById("wins-txt");
var lossesText = document.getElementById("losses-txt");
var guessesLeftText = document.getElementById("left-txt");
var yourGuessesText = document.getElementById("your-guesses");

//Function to be run when user presses a key
document.onkeyup = function(event) {

    //Determines which key was pressed
    var yourGuesses = event.key;

    //Randomly choooses from the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Logic of the game 
    if (yourGuesses === computerChoices) {
        wins++;
        guessesLeft = 9;
        guessChoices = [];
    }

    if (yourGuesses !== computerChoices) {
        guessesLeft--;
        guessChoices = [];
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
    }

    //Display the user and computer guesses with wins and losses
    winsText.innerHTML = "wins: " + wins;
    lossesText.innerHTML = "losses: " + losses;
    guessesLeftText.innerHTML = "guesses left: " + guessesLeft;
    yourGuessesText.innerHTML = guessChoices;
}