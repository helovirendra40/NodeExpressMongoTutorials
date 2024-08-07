const express = require('express');
const path = require('path');
const public = path.join(__dirname, 'public');

const app =express();

app.get('/',(req, res)=>{
    res.sendFile(`${public}/index.html`);
})
app.get('/about',(req, res)=>{
    res.sendFile(`${public}/about.html`);
});
app.get('*',(req,res)=>{
res.sendFile(`${public}/pagenotfound.html`);
})
app.listen(2000)
