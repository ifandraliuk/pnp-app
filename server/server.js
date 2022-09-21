const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
const {errorHandler} = require('./middleware/errorMiddleware')


app.use(errorHandler)

app.use('/login', require('./routes/loginRoutes'))


app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

