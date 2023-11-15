function calculate(value) {
    // const inputValue = event.target.value;
    const inputValue = value;
    const expression = /\+|\*|\-|\//;


    const numbers = inputValue.split(expression);
    console.log(numbers);
    const numberA = +numbers[0];
    const numberB = +numbers[1];

    const operation = inputValue.match(expression);
    if (isNaN(numberA) || isNaN(numberB) || operation === null) {
        updateResult("Expression not recognized");
        return;
    }
    const operator = operation[0];

    const calculator = new Calculator();
    calculator.add(numberA);

    let result;
    switch (operator) {
        case '+':
            result = calculator.add(numberB);
            break;
        case '-':
            result = calculator.subtract(numberB);
            break;
        case '*':
            result = calculator.multiply(numberB);
            break;
        case '/':
            result = calculator.divide(numberB);
            break;
    }

    updateResult(result);


    //console.log(numberA+numberB);
}
function updateResult(result) {
    let element = document.getElementById('result');
    if (element) {
        element.innerText = result;
    }
}

function showVersion() {
    const calculator = new Calculator();
    const element = document.getElementById('version');

    if (element) {
        element.innerText = calculator.version;
    }
}

document.getElementById('inputValue') &&
    document.getElementById('inputValue').addEventListener('change', function (event) {
        calculate(event.target.value);
    });
