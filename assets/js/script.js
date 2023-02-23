// Define all variables that we need in our code

let randomNumber10 = Math.floor(Math.random() * 10) + 1;
let randomNumber100 = Math.floor(Math.random() * 100) + 1;
let randomNumber1000 = Math.random(Math.random() *1000) + 1;

let totalGuesses = document.getElementById('total-guesses');
let lastGuess = document.getElementById('last-guess');
let lessOrMore = document.getElementById('less-or-more');

let guessNumber = document.getElementById('guess-number');
let userGuess = document.getElementById('user-guess');
let checkNumber = document.getElementById('submit-answer')

let guessCount = 1;