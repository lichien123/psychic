

// create arrays
let letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randNum = getRandomNumber(26);
let computerGuess = letterBank[randNum];
let wrongLetter = [];
let winCounter = 0;
let lossCounter = 0;
let guessesLeftCounter = 10;
// define variables userGuess, computerGuess

function getRandomNumber(upper) {
	var num = Math.floor(Math.random()*upper) + 1;
	return num;
}
;

console.log(computerGuess);

function roundReset() {
	let wrongLetter = [];
	let guessesLeftCounter = 10;
	return computerGuess;
}


// event function about pressing down a key
document.addEventListener('keypress', (event) => {
	let userGuess = String.fromCharCode(event.keyCode);

	if (userGuess == computerGuess) {
		document.getElementById('wins').innerHTML = winCounter++;
		roundReset();
	} else if (guessesLeftCounter == 0) {
			document.getElementById('losses').innerHTML = lossCounter++;
			document.getElementById('guessesLeft').innerHTML = guessesLeftCounter;
			roundReset();
	} else {
		wrongLetter.push(userGuess);
		document.getElementById('wrong').innerHTML = wrongLetter.join(' ');
		console.log(wrongLetter);
		document.getElementById('guessesLeft').innerHTML = guessesLeftCounter--;
	}

	
		

		
	});


// if userGuess === computerGuess, then add 1 to winCounter var


// else userGuess !== computerGuess, then add userGuess to wrongLetter array

// if var guessesLeftCounter = 0, then alert you lose sucker && add 1 to lossCounter var






