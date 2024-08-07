const mongoose = require('mongoose');
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://helovirendra40:xxSpaO7AdXpi5YiR@cluster0.wwjkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("mongo db connected")
    }
    catch(err){
        console.log("connection failed", err)
    }
}
module.exports = connectDB;