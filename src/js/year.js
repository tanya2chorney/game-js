const searchBtn = document
  .getElementById('year-btn-js')
  .addEventListener('click', function (event) {
    event.preventDefault();
    const yearOfBirth = document.getElementById('year-input-js').value;
    const textResult = document.getElementById('text-result');
    if (!isNaN(yearOfBirth) && yearOfBirth.trim() !== '') {
      filtringYears(yearOfBirth, textResult);
    } else {
      textResult.textContent = 'Будь ласка, введіть рік народження.';
      textResult.style.color = '#000000';
    }
  });

const filtringYears = (year, textResult) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    textResult.textContent = 'Ви народилися у високосний рік!';
    textResult.style.color = '#039900';
  } else {
    textResult.textContent = 'Ви народилися не у високосний рік.';
    textResult.style.color = '#990000';
  }
};
