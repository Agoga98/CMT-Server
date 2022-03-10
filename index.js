const express =  require('express')
const mongoose =  require('mongoose')
const dotenv = require('dotenv').config()
const colors =  require('colors')
const {connectDB} = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const customerRoutes =  require('./routes/customerRoutes.js')

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(errorHandler);

app.use('/api/customer', customerRoutes);

const PORT = process.env.PORT || 5000;
