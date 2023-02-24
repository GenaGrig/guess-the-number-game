// Define all variables that we need in our code

let randomNumberEasy = Math.floor(Math.random() * 10) + 1;
let randomNumberMedium = Math.floor(Math.random() * 100) + 1;
let randomNumberHard = Math.random(Math.random() * 500) + 1;

let totalGuesses = document.getElementById('total-guesses');
let lastGuess = document.getElementById('last-guess');
let lessOrMore = document.getElementById('less-or-more');
let playerInput = document.getElementById('player-input');
let playerCheck = document.getElementById('submit-button')
let currentDifficulty = document.getElementById('show-difficulty');

let guessCount = 1;
let resetButton;

function checkNumberEasy () {
    let playerGuess = Number(playerInput.value);

    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
    }
    totalGuesses.textContent += playerGuess + ' ';

    if (playerGuess === randomNumberEasy) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === 3) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberEasy}`;
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${3 - guessCount} guesses left!`;
        lastGuess.style.backgroundColor = 'red';
        if (playerGuess < randomNumberEasy) {
            lessOrMore.textContent = 'Your number was lower than guessed!';
            lessOrMore.style.backgroundColor = 'blue';
        } else if (playerGuess > randomNumberEasy) {
            lessOrMore.textContent = 'Your number was higher than guessed!';
            lessOrMore.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();
}

playerCheck.addEventListener('click', checkNumberEasy);

function setGameOver() {
    playerInput.disabled = true;
    playerCheck.disabled = true;
  }