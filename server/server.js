const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('server/public'));
app.use(express.json());
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})

// part of the POST request.
// function to solve the math problem and push
// it into an empty array for the client
let mathHistory = [];

app.post('/mathHistory', (req, res) => {
    let x = Number(req.body.firstNumber);
    let operator = req.body.mathOperator;    
    let y = Number(req.body.secondNumber);
    let answer;
    
    if (operator === "+") {
        answer =  x + y;
    } else if (operator === "-") {
        answer =  x - y;
    } else if (operator === "*") {
        answer =  x * y;
    }else if (operator === "/") {
        answer =  x / y;
    } else {
        undefined;
    }
    let equation = {
        firstNumber: x,
        mathOperator: operator,
        secondNumber: y,
        answer
    };
    mathHistory.push(equation);
    res.sendStatus(201);
});


// part of the GET request
app.get('/mathHistory', (req, res) => {
    res.send(mathHistory);
});