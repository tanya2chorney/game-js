const choices = ['stone', 'scissors', 'paper'];
const textResult = document.getElementById('text-result-js');
const resultComputer = document.querySelector('.comp-choice');
const computerNumber = document.getElementById('comp-result');
const myNumber = document.getElementById('my-result');

const getComputedChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const getComputer = computerChoice => {
  if (computerChoice === 'stone') {
    resultComputer.textContent = "Комп'ютер обрав камінь";
  }
  if (computerChoice === 'scissors') {
    resultComputer.textContent = "Комп'ютер обрав ножиці";
  }
  if (computerChoice === 'paper') {
    resultComputer.textContent = "Комп'ютер обрав папір";
  }
};

const getGameScore = textResult => {
  if (textResult.textContent === 'Комп’ютер виграв раунд!') {
    computerNumber.textContent = parseInt(computerNumber.textContent) + 1;
  } else if (textResult.textContent === 'Ви виграли раунд!') {
    myNumber.textContent = parseInt(myNumber.textContent) + 1;
  }
};

const getWinner = (myChoice, computerChoice) => {
  getComputer(computerChoice);
  getGameScore(textResult);

  if (myChoice === computerChoice) {
    return 'Нічия!';
  }
  if (
    (myChoice === 'stone' && computerChoice === 'scissors') ||
    (myChoice === 'scissors' && computerChoice === 'paper') ||
    (myChoice === 'paper' && computerChoice === 'stone')
  ) {
    return 'Ви виграли раунд!';
  }
  return 'Комп’ютер виграв раунд!';
};

const playGame = myChoice => {
  const computerChoice = getComputedChoice();
  textResult.textContent = getWinner(myChoice, computerChoice);
};

document
  .getElementById('stone')
  .addEventListener('click', () => playGame('stone'));
document
  .getElementById('scissors')
  .addEventListener('click', () => playGame('scissors'));
document
  .getElementById('paper')
  .addEventListener('click', () => playGame('paper'));
