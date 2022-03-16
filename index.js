const express =  require('express')
const mongoose =  require('mongoose')
const dotenv = require('dotenv').config()
const colors =  require('colors')
const {connectDB} = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const customerRoutes =  require('./routes/customerRoutes.js')
const userRoutes =  require('./routes/userRoutes.js')

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(errorHandler);

app.use('/api/customer', customerRoutes);
app.use('/api/users', userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
