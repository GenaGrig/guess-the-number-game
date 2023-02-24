// Define all variables that we need in our code
let randomNumberEasy = Math.floor(Math.random() * 10) + 1;
let randomNumberMedium = Math.floor(Math.random() * 100) + 1;
let randomNumberHard = Math.floor(Math.random() * 500) + 1;

let totalGuesses = document.getElementById('total-guesses');
let lastGuess = document.getElementById('last-guess');
let lessOrMore = document.getElementById('less-or-more');
let playerInput = document.getElementById('player-input');
let playerCheck = document.getElementById('submit-button')
let currentDifficulty = document.getElementById('show-difficulty');
let easyCheck = document.getElementById('easy-check');
let mediumCheck = document.getElementById('medium-check');
let hardCheck = document.getElementById('hard-check');

let guessCount = 1;
let resetButton = document.getElementById('new-game');

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
easyCheck.addEventListener('click', checkNumberEasy);

function checkNumberMedium () {
    let playerGuess = Number(playerInput.value);

    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
    }
    totalGuesses.textContent += playerGuess + ' ';

    if (playerGuess === randomNumberMedium) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberMedium}`;
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${10 - guessCount} guesses left!`;
        lastGuess.style.backgroundColor = 'red';
        if (playerGuess < randomNumberMedium) {
            lessOrMore.textContent = 'Your number was lower than guessed!';
            lessOrMore.style.backgroundColor = 'blue';
        } else if (playerGuess > randomNumberMedium) {
            lessOrMore.textContent = 'Your number was higher than guessed!';
            lessOrMore.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();
}
mediumCheck.addEventListener('click', checkNumberMedium);

function checkNumberHard () {
    let playerGuess = Number(playerInput.value);

    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
    }
    totalGuesses.textContent += playerGuess + ' ';

    if (playerGuess === randomNumberHard) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === 15) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberHard}`;
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${15 - guessCount} guesses left!`;
        lastGuess.style.backgroundColor = 'red';
        if (playerGuess < randomNumberHard) {
            lessOrMore.textContent = 'Your number was lower than guessed!';
            lessOrMore.style.backgroundColor = 'blue';
        } else if (playerGuess > randomNumberHard) {
            lessOrMore.textContent = 'Your number was higher than guessed!';
            lessOrMore.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();
}
hardCheck.addEventListener('click', checkNumberHard);



function setGameOver() {
    playerInput.disabled = true;
    playerCheck.disabled = true;
    easyCheck.disabled = true;
    mediumCheck.disabled = true;
  }

  function refreshPage(){
    window.location.reload();
} 