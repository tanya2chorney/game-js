const convertSeconds = seconds => {
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${days} дн. ${hours}:${minutes}:${seconds}`;
};

const calculateTime = () => {
  const userInput = document.getElementById('time-calculator-js').value;
  const result = convertSeconds(parseInt(userInput));
  document.getElementById('time-result').textContent = result;
};

document.getElementById('time-btn-js').addEventListener('click', calculateTime);
