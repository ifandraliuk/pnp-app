const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });