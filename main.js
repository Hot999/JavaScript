let randomNumber = Math.floor(Math.random() * 100) + 1;


let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


const checkGuess = () => {
  let valueGues = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = "Последний результат: ";
  }
  guesses.textContent += valueGues + ' ';

  if (valueGues === randomNumber) {
    lastResult.textContent = 'Вы угадали!';
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Вы проиграли!';
    lastResult.style.backgroundColor = "red";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Ошибочный!";
    lastResult.style.backgroundColor = "red";
    if (randomNumber > valueGues) {
      lowOrHi.textContent = 'Последнее предположение было слишком низким!';
    } else if (randomNumber < valueGues) {
      lowOrHi.textContent = 'Последнее предположение было слишком высоким!';
    }
  }
  guessField.value = "";
  guessCount++;
  guessField.focus();
};
const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начать заново!';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

const resetGame = () => {
  guessCount = 1;
  guessField.disabled = false;
  guessSubmit.disabled = false;
  lastResult.textContent = '';
  guesses.textContent = '';
  lastResult.style.backgroundColor = "white";
  resetButton.remove();
};
guessSubmit.addEventListener('click', () => {
  checkGuess();
});