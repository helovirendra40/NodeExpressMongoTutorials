const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send("Serveer is running on port number 1000")
});
app.get('/contact', (req,res)=>{
    res.send("contact")
});
app.listen(1000);