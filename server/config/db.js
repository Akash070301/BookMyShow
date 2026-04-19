const mongoose = require('mongoose');

async function connectDB(DB_URL){
    try{
        await mongoose.connect(DB_URL)
        console.log("Connected to Databse")
    }catch(err){
        console.log("Error connecting to database", err)
    }
}

module.exports = connectDB;