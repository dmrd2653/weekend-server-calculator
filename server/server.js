const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;




app.use(express.static('server/public'));
app.use(express.json());
app.listen(PORT, () => {
    console.log('Listening on port', PORT);
})

// app.get('/mathProblem', (req, res) => {
//     console.log(`Handling ${req.method} ${req.url}`);
//     res.send(mathProblem);
//   });
  
  app.post('/mathProblem', (req, res) => {
    mathProblem.push(req.body);
    res.sendStatus(201);
  });



  