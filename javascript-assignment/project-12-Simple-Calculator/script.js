const numberOneInput = document.querySelector("#numberOne");
const numberTwoInput = document.querySelector("#numberTwo");
const resultElement = document.querySelector("#result");
const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");

function calculate(operator) {
    const numberOne = Number(numberOneInput.value);
    const numberTwo = Number(numberTwoInput.value);
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    } else if (operator === "-") {
        result = numberOne - numberTwo;
    } else if (operator === "*") {
        result = numberOne * numberTwo;
    } else if (operator === "/") {
        if (numberTwo === 0) {
            resultElement.textContent = "Result : Cannot divide by zero.";
            return;
        }
        result = numberOne / numberTwo;
    }
    resultElement.textContent = `Result : ${result}`;
}

addBtn.addEventListener("click", function () {
    calculate("+");
});

subtractBtn.addEventListener("click", function () {
    calculate("-");
});

multiplyBtn.addEventListener("click", function () {
    calculate("*");
});

divideBtn.addEventListener("click", function () {
    calculate("/");
});