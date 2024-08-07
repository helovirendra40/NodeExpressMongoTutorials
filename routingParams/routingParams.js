const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    const name = req.query.name;
    // res.send("Welcome to Express server");

    if(name){
        res.send(`Welcome ${name}`)
    }
    else{
        res.send("Plase send params")
    }
})
app.listen(1000,()=>{
    console.log("server is running on port number 1000")
})