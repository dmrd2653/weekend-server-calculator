// Javascript
function sendMathProb(event) {
    event.preventDefault();

    let firstInput = document.querySelector('#input1').value;
    let secondInput = document.querySelector('#input2').value;
    let mathProblem = {
        firstNumber: firstInput,
        mathOperator: operate,
        secondNumber: secondInput
    };
    
    math(mathProblem);
}
function math() {
        let result = firstNumber, mathOperator, secondNumber;
        return result;
    }

function addition(event) {
    event.target.mathOperator.operate = '+';
}
function sub(event) {
    mathOperator.operate = '-';
}
function multi(event) {
    mathOperator.operate = '*';
}
function divi(event) {
    mathOperator.operate = '/';
}