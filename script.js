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

/*main game function*/
function checkGuess() {
  let userGuess = Number(guessField.value); /*user's input*/
  if(guessCount === 1) { /*if this is user's first guess*/
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' '; /*user's guesses*/
  guesses.style.backgroundColor = 'blue'; /*when user guesses are appended, give blue background*/
  if(userGuess === randomNumber) { /*if user guesses correctly*/
    lastResult.textContent = "Congratulations! You got it right!"; /*Game won message (with green background)*/
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = ''; /*clear low or high values*/
    setGameOver(); /*run game over*/
  }else if (guessCount === 10) { /*if user guesses 10 times the game is over*/
    lastResult.textContent = "***GAME OVER***";
    lowOrHi.textContent = '';
    setGameOver();
  }else {
    lastResult.textContent = 'Wrong!'; /*if guesses are under 10 and incorrect*/
    lastResult.style.backgroundColor = "red";
    if(userGuess < randomNumber) { /*alert user if guess too low*/
      lowOrHi.textContent = "Last guess too low!";
    }else if(userGuess > randomNumber) { /*alert user if guess too high*/
      lowOrHi.textContent = "Last guess too high!";
    }
  }
  guessCount++; /*increment guessCount each guess*/
  guessField.value = ''; /*clear input field*/
  guessField.focus(); /*run focus method on input field*/
}

guessSubmit.addEventListener('click', checkGuess); /*listen for click event on Submit to run checkGuess*/
