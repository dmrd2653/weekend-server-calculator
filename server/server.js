const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('server/public'));
app.use(express.json());
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})

// function to solve the math problem and push
// it into an empty array for the client to get with 
// a GET method
let mathHistory = [];

app.post('/mathProblem', (req, res) => {
    mathProblem.push(req.body);


    let x = Number(mathProblem.firstNumber);
    let operator = mathProblem.mathOperator;    
    let y = Number(mathProblem.secondNumber);
    let z = Number(answer);
    let equation = {
        firstNumber: x,
        mathOperator: operator,
        secondNumber: y,
        answer: z
    };
    if (operator === "+") {
        z =  x + y;
    } else if (operator === "-") {
        z =  x - y;
    } else if (operator === "*") {
        z =  x * y;
    }else if (operator === "/") {
        z =  x / y;
    } else {
        undefined;
    }
    mathHistory.push(equation);
    res.sendStatus(201);
});



// app.get('/mathProblem', (req, res) => {
//     console.log(`Handling ${req.method} ${req.url}`);
//     res.send(mathProblem);
// });