window.onload = function() {

// create arrays
let letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let wrongLetter = []; //array of users previous guesses
let winCounter = 0; 
let lossCounter = 0; 
let guessesLeftCounter = 9; 
let letterToGuess = null;
// define variables userGuess, computerGuess

//computer picks a random number and assigns it to an index number in the letterBank, thus chosing a letter for the user to guess
//tl;dr computers guess
let computerGuess = letterBank[Math.floor(Math.random() * letterBank.length)];

console.log(computerGuess);

//k so user starts off with 9 guesses
//function that changes guessesLeftCounter displayed on document
function updateGuessesLeftCounter() {
  // writes the number of guesses we have left in the document
  document.getElementById('guessesLeft').innerHTML = guessesLeftCounter;
};

//makes the computer choose another random letter to guess
function updateLetterToGuess() {
  letterToGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
};

//function that changes wrongLetter array displayed in document
function updateWrongLetterArray() {
	document.getElementById('wrong').innerHTML = wrongLetter.join(' ');
}


//reset errythang
let roundReset = function() {
	wrongLetter = [];
	guessesLeftCounter = 9;
	computerGuess = letterBank[Math.floor(Math.random() * letterBank.length)];
	console.log(computerGuess);

	updateGuessesLeftCounter();
	updateLetterToGuess();

}

	updateGuessesLeftCounter();
	updateLetterToGuess();


//When key is pressed it becomes the users guess
document.onkeyup = function(event) {
  	let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  	
  	guessesLeftCounter = guessesLeftCounter - 1;

    if (guessesLeftCounter > 0) {
        if (userGuess == computerGuess) {
            	winCounter = winCounter + 1;
            	document.querySelector('#wins').innerHTML = winCounter;
            	roundReset();
            } else {
                guessesLeft = guessesLeft - 1;
                updateGuessesLeftCounter();
            	wrongLetter.push(userGuess);
            	updateWrongLetterArray()
            }
    } else if (guessesLeftCounter == 0) {
        lossCounter = lossCounter + 1;
        document.querySelector('#losses').innerHTML = lossCounter;
        roundReset();
    }
};



		

}
