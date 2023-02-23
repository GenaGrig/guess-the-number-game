// Define all variables that we need in our code

let randomNumber10 = Math.floor(Math.random() * 10) + 1;
let randomNumber100 = Math.floor(Math.random() * 100) + 1;
let randomNumber500 = Math.random(Math.random() * 500) + 1;

let totalGuesses = document.getElementById('total-guesses');
let lastGuess = document.getElementById('last-guess');
let lessOrMore = document.getElementById('less-or-more');
let playerInput = document.getElementById('player-input');
let playerCheck = document.getElementById('submit-answer')

let guessCount = 1;
let resetGame;

function checkNumberEasy () {
    let playerGuess = Number(playerInput.value);
    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
        totalGuesses.style.fontSize = '20px';
    }
    totalGuesses.textContent += playerGuess + ' ';

    if (playerGuess === randomNumber10) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lastGuess.style.fontSize = '20px';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === 3) {
        lastGuess.textContent = "Your attempts are over! Try again!";
        lastGuess.style.fontSize = '20px';
        setGameOver();
    } else {
        lastGuess.textContent = "Nope! Next attempt!";
        lastGuess.style.backgroundColor = 'red';
        lastGuess.style.fontSize = '20px';
        if (playerGuess < randomNumber10) {
            lessOrMore.textContent = 'Your number was lower than guessed!';
            lessOrMore.style.backgroundColor = 'blue';
            lessOrMore.style.fontSize = '20px';
        } else if (playerGuess > randomNumber10) {
            lessOrMore.textContent = 'Your number was higher than guessed!';
            lessOrMore.style.backgroundColor = 'red';
            lessOrMore.style.fontSize = '20px';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();
}

playerCheck.addEventListener('click', checkNumberEasy);