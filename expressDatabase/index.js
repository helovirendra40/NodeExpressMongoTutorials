const express = require('express');
const connectDB = require('./db/db_connection');
const app = express();
connectDB()
const user = require('./models/userModel')
const addUser = async ()=>{
    await user.create({
        name: "virendra",
        email: "virendragangwar88@gmail.com"
    })
}

addUser();
app.listen(2000, ()=>{
    console.log("your application running on port number 2000")
})