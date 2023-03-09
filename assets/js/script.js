// Define all variables that we need in our code

let totalGuesses = document.getElementById('total-guesses');
let lastGuess = document.getElementById('last-guess');
let lessOrMore = document.getElementById('less-or-more');
let playerInput = document.getElementById('player-input');
let submitButton = document.getElementById('submit-button');
let difficultyLevel = document.getElementById('difficultyLevel')

let guessCount = 1;
let newGameButton = document.getElementById('new-game');

function welcome() {
    document.getElementById('new-game').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
}

function startGameView() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    difficultyLevel.textContent = `Your difficulty level is ${selectedLevel}`;
}

let selectedLevel;
let randomNumber;
let playerGuess;

const levelMap = {
    Easy:10,
    Medium:100,
    Hard:500,
    Hardest:1000    
};

const levelAttemptsMap = {
    Easy:3,
    Medium:10,
    Hard:9,
    Hardest:8
}

function getRandomNumber () {
    if (selectedLevel) {
        randomNumber = Math.floor(Math.random() * levelMap[selectedLevel]) + 1;
    } 
}

function startGame (level) {
selectedLevel = level;
getRandomNumber();
startGameView();
testLevel();
}

function testLevel() {
    console.log(selectedLevel, 'level');
    console.log(randomNumber, 'randomNumber');
}

function compareValues() {

    let playerGuess = Number(playerInput.value);
    if (playerInput.value === '') {
        lastGuess.textContent = 'Please enter a valid number!';
        lastGuess.style.backgroundColor = 'red';
        playerInput.focus();
        return
    }
    console.log(playerGuess, 'guess')

    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
    }
    totalGuesses.textContent += playerGuess + ' ';

    console.log(playerGuess===randomNumber, 'is equal')
    if (playerGuess === randomNumber) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === levelAttemptsMap[selectedLevel]) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumber}`;
        lessOrMore.textContent = '';
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${levelAttemptsMap[selectedLevel] - guessCount} guesses left!`;
        lastGuess.style.backgroundColor = 'red';
        if (playerGuess < randomNumber) {
            lessOrMore.textContent = 'Your guess number is too low!';
            lessOrMore.style.backgroundColor = 'blue';
        } else if (playerGuess > randomNumber) {
            lessOrMore.textContent = 'Your guess number is too high!';
            lessOrMore.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();

} 

submitButton.addEventListener('click', compareValues);


function compareValuessss() {

    let playerGuess = Number(playerInput.value);
    if (playerGuess === '') {
        alert('Please enter a valid number!');
        return
    }    

    if (guessCount === 1) {
        totalGuesses.textContent = "Your previous guesses are: ";
        totalGuesses.style.backgroundColor = 'violet';
    }
    totalGuesses.textContent += playerGuess + ' ';

    if (playerGuess === randomNumber) {
        lastGuess.textContent = "Congratulations! You guessed the right number!";
        lastGuess.style.backgroundColor = 'green';
        lessOrMore.textContent = '';
        setGameOver();
    } else if (guessCount === levelAttemptsMap[selectedLevel]) {
        lastGuess.textContent = `Your attempts are over! Try again! The correct number is ${randomNumber}`;
        lessOrMore.textContent = '';
        setGameOver();
    } else {
        lastGuess.textContent = `Nope! Next attempt! You have ${levelAttemptsMap[selectedLevel] - guessCount} guesses left!`;
        lastGuess.style.backgroundColor = 'red';
        if (playerGuess < randomNumber) {
            lessOrMore.textContent = 'Your guess number is too low!';
            lessOrMore.style.backgroundColor = 'blue';
        } else if (playerGuess > randomNumber) {
            lessOrMore.textContent = 'Your guess number is too high!';
            lessOrMore.style.backgroundColor = 'red';
        }
    }

    guessCount++;
    playerInput.value = '';
    playerInput.focus();

}

function setGameOver() {
    playerInput.disabled = true;
    submitButton.disabled = true;
    document.getElementById('new-game').style.display = 'inline';
}

function refreshPage() {
    window.location.reload();
}