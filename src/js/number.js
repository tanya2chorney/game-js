const searchBtn = document
  .getElementById('number-btn-js')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const number = document.getElementById('number-js').value;
    const textResult = document.getElementById('number-result-js');
    if (!isNaN(number) && number.trim() !== '') {
      checkNumber(number, textResult);
    } else {
      textResult.textContent = 'Будь ласка, введіть число.';
      textResult.style.color = '#000000';
    }
  });

const checkNumber = (number, textResult) => {
  const randomNumber = Math.floor(Math.random() * 101);
  if (number === randomNumber) {
    textResult.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
    textResult.style.color = '#039900';
  } else {
    textResult.textContent = `Ви програли, комп’ютер загадав  ${randomNumber}`;
    textResult.style.color = '#990000';
  }
};
