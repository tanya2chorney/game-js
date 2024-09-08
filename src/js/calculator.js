let operation = "";

function setOperation(op) {
  operation = op;
}

function calculate() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  let result = "";

  if (!isNaN(number1) && !isNaN(number2)) {
    switch (operation) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        result = "Выберите операцию";
    }
  } else {
    result = "Введите числа";
  }

  document.getElementById("result").value = result;
}