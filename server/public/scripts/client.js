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
    // POST Method to send object to server
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
        // calls the math problem
        // mathProblem;
    }).catch((error) => {
        console.log('OH No......', error);
        alert('Something went wrong.');
    })
};

// module.exports = mathProblem;