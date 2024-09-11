let currentOperation = null;

    function setOperation(operation) {
        currentOperation = operation;
    }

    function calculate() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        let result = '';

        if (isNaN(number1) || isNaN(number2)) {
            result = 'Введіть числа';
        } else if (currentOperation === null) {
            result = 'Оберіть операцію';
        } else {
            switch (currentOperation) {
                case '+':
                    result = number1 + number2;
                    break;
                case '-':
                    result = number1 - number2;
                    break;
                case '*':
                    result = number1 * number2;
                    break;
                case '/':
                    result = number2 !== 0 ? number1 / number2 : 'Ділення на нуль';
                    break;
                default:
                    result = 'Невідома операція';
            }
        }

        document.getElementById('result').value = result;
    }