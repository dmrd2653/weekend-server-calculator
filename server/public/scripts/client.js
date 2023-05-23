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
    };
    // POST request to send object to server
    fetch('/mathHistory', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(mathProblem),
    }).then((response) => {
        console.log('POST Response:', response);
        // Clear the form
        document.querySelector('#input1').value = '';
        document.querySelector('#mathOp').value = '';
        document.querySelector('#input2').value = '';
        getEquation();
    }).catch((error) => {
        console.log('OH No......', error);
        alert('Something went wrong.');
    })
};
// a GET request to acquire mathProblem + answer from server 
// (i.e. mathHistory array) and place it in the history div
function getEquation() {
    fetch('/mathHistory').then ((response) =>
    {console.log('Response received', response);
    return response.json();
    }).then ((mathHistory) => {
        let contentOfDiv = document.querySelector('#history');
        contentOfDiv.innerHTML = "";
        for (let equation of mathHistory) {
        contentOfDiv.innerHTML += `
        <p> 
        ${equation.firstNumber} 
        ${equation.mathOperator} 
        ${equation.secondNumber} 
        = ${equation.answer} </p>`
        };
    }).catch((error) => {
        console.log('OH No......', error);
        alert('Something went wrong.');
    })
};

