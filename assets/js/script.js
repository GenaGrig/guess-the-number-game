// Define all variables that we need in our code

let randomNumberEasy = Math.floor(Math.random() * 10) + 1;
let randomNumberMedium = Math.floor(Math.random() * 100) + 1;
let randomNumberHard = Math.floor(Math.random() * 500) + 1;
let randomNumberVeryHard = Math.floor(Math.random() * 1000) + 1;

let totalGuesses = document.getElementById('total-guesses');
let lastGuess = document.getElementById('last-guess');
let lessOrMore = document.getElementById('less-or-more');
let playerInput = document.getElementById('player-input');
let playerCheckEasy = document.getElementById('submit-button-easy');
let playerCheckMedium = document.getElementById('submit-button-medium');
let playerCheckHard = document.getElementById('submit-button-hard');
let playerCheckHardest = document.getElementById('submit-button-hardest');
let easyCheck = document.getElementById('easy-check');
let mediumCheck = document.getElementById('medium-check');
let hardCheck = document.getElementById('hard-check');
let veryHardCheck = document.getElementById('very-hard-check');


let guessCount = 1;
let newGameButton = document.getElementById('new-game');

function welcome() {
    document.getElementById('new-game').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
}

function startGameView() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
}

function easyLevel () {
    checkNumberEasy();
}
function checkNumberEasy () {
    
    startGameView();
    disableSubmitButtonMedium();
    disableSubmitButtonHard();
    disableSubmitButtonHardest();

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
    } else if (guessCount === 4) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberEasy}`;
        setGameOver();
    }  else {
        lastGuess.textContent = `Nope! Next attempt! You have ${4 - guessCount} guesses left!`;
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
playerCheckEasy.addEventListener('click', checkNumberEasy);

function mediumLevel() {
    checkNumberMedium();
}

function checkNumberMedium () {

    startGameView();
    disableSubmitButtonEasy();
    disableSubmitButtonHard();
    disableSubmitButtonHardest();

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
    } else if (guessCount === 11) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberMedium}`;
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${11 - guessCount} guesses left!`;
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
playerCheckMedium.addEventListener('click', checkNumberMedium);

function hardLevel() {
    checkNumberHard();
}

function checkNumberHard () {

    startGameView();
    disableSubmitButtonEasy();
    disableSubmitButtonMedium();
    disableSubmitButtonHardest();

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
    } else if (guessCount === 11) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberHard}`;
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${11 - guessCount} guesses left!`;
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
playerCheckHard.addEventListener('click', checkNumberHard);

function hardestLevel () {
    checkNumberHardest();
}

function checkNumberHardest () {

    startGameView();
    disableSubmitButtonEasy();
    disableSubmitButtonMedium();
    disableSubmitButtonHard();

    let playerGuess = Number(playerInput.value);

    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
    }
    totalGuesses.textContent += playerGuess + ' ';

    if (playerGuess === randomNumberVeryHard) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === 11) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumberVeryHard}`;
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${11 - guessCount} guesses left!`;
        lastGuess.style.backgroundColor = 'red';
        if (playerGuess < randomNumberVeryHard) {
            lessOrMore.textContent = 'Your number was lower than guessed!';
            lessOrMore.style.backgroundColor = 'blue';
        } else if (playerGuess > randomNumberVeryHard) {
            lessOrMore.textContent = 'Your number was higher than guessed!';
            lessOrMore.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();

}
playerCheckHardest.addEventListener('click', checkNumberHardest);

function setGameOver() {
    playerInput.disabled = true;
    playerCheckEasy.disabled = true;
    playerCheckMedium.disabled = true;
    playerCheckHard.disabled = true;
    playerCheckHardest.disabled = true;
    document.getElementById('new-game').style.display = 'inline';
  }

  function refreshPage(){
    window.location.reload();
} 

function disableSubmitButtonEasy() {
    document.getElementById('submit-button-easy').style.display = 'none';
}

function disableSubmitButtonMedium() {
    document.getElementById('submit-button-medium').style.display = 'none';
}

function disableSubmitButtonHard() {
    document.getElementById('submit-button-hard').style.display = 'none';
}

function disableSubmitButtonHardest() {
    document.getElementById('submit-button-hardest').style.display = 'none';
}

newGameButton.addEventListener('click', refreshPage);