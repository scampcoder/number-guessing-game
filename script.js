/*delcare/assign main vars*/
let randomNumber = Math.floor(Math.random() * 500) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

/*call focus method on guessField*/
guessField.focus();
