const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;
const connectDB = require('./config/db')
require('dotenv').config() // Load environment variables from .env file
const userRoute = require('./routes/userRoutes')


connectDB(process.env.DB_URL) //Connect to the database

app.use(express.json()) //Parse incoming JSON data
app.use(cors()) //Enable CORS for all routes
app.use('/api/users', userRoute)

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})