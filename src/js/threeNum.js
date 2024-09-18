const btnResult = document.getElementById('btn-result');

const getMaxNumber = () => {
  const firstNumber = parseFloat(document.getElementById('first-number').value);
  const secondNumber = parseFloat(
    document.getElementById('second-number').value
  );
  const thirdNumber = parseFloat(document.getElementById('third-number').value);

  if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
    const maxNumber = Math.max(firstNumber, secondNumber, thirdNumber);
    btnResult.textContent = `Найбільше число яке ви ввели - ${maxNumber} `;
  } else {
    btnResult.textContent = 'Будь ласка, введіть коректні числа';
  }
};

btnResult.addEventListener('click', function (event) {
  event.preventDefault();
  getMaxNumber();
});
