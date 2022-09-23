require('dotenv').config({debug:true})
const bp = require('body-parser')
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.NODE_PORT || 5000;
const mongoose = require('mongoose')
const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')
connectDB()

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use(errorHandler)

app.use('/users', require('./routes/userRoutes'))
app.use('/talents', require('./routes/talentRoutes'))

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

