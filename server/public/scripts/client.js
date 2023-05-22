// Javascript

let mathProblem = {};

// function to submit math problem
function sendMathProb(event) {
    event.preventDefault();

    let firstInput = document.querySelector('#input1').value;
    let operate = document.querySelector('#mathOp').value;
    let secondInput = document.querySelector('#input2').value;
    mathProblem = {
        firstNumber: firstInput,
        mathOperator: operate,
        secondNumber: secondInput
    }
    // POST Method
    fetch('/mathProblem', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(mathProblem),
    }).then((response) => {
        console.log('POST Response:', response);
        // Clear the form
        document.querySelector('#input1').value = '';
        document.querySelector('#mathOp').value = '';
        document.querySelector('#input2').value = '';
        // calls the function to solve
        solve(mathProblem);
    }).catch((error) => {
        console.log('OH No......', error);
        alert('Something went wrong.');
    })
};

// function to solve the math problem
function solve(mathProblem) {
    let sum;
    let operator = mathProblem.mathOperator;
    if (operator === "+") {
        let x = Number(mathProblem.firstNumber);
        let y = Number(mathProblem.secondNumber);
        sum =  x + y;
        console.log(sum);
    } else if (operator === "-") {
        let x = Number(mathProblem.firstNumber);
        let y = Number(mathProblem.secondNumber);
        sum =  x - y;
        console.log(sum);
    } else if (operator === "*") {
        let x = Number(mathProblem.firstNumber);
        let y = Number(mathProblem.secondNumber);
        sum =  x * y;
        console.log(sum);
    }else if (operator === "/") {
        let x = Number(mathProblem.firstNumber);
        let y = Number(mathProblem.secondNumber);
        sum =  x / y;
        console.log(sum);
    } else {
        undefined;
    }
    return sum;
};