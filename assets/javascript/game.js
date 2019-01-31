//Array with the choices available
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables that hold the number of wins, losses, guesses left, user guesses
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessedLetters = [];

function restart() {
    guessesRemaining = 10;
    guessedLetters = [];
}

//Function to be run when user presses a key
document.onkeyup = function (event) {


    //Determines which key was pressed
    var playerGuess = event.key;

    guessedLetters.push(playerGuess);

    //Randomly choooses from the array
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Logic of the game 

    if (guessedLetters === computerPick) {
        wins++;
        guessesRemaining--;

    }

    if (guessedLetters !== computerPick) {
        guessesRemaining--;
        computerChoices.push(guessedLetters);
    }
    if (guessesRemaining === 0) {
        losses++;
        restart();
    }
    var htmlText = "<p> Guess what letter I'm thinking of...</p>" + "<p>Wins:" + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesRemaining + "</p>" + "<p>Your Guesses so far: " + guessedLetters.join(", ") + "</p>";

    document.getElementById("text").innerHTML = htmlText;

}





//Display the user and computer guesses with wins and losses
// winsText.innerHTML = "Wins: " + wins;
// lossesText.innerHTML = "Losses: " + losses;
// guessesLeftText.innerHTML = "Guesses left: " + guessesRemaining;
// yourGuessesText.innerHTML = guessedLetters;
