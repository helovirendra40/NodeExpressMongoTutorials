const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send(`
        <input type="text" placeholder="Please enter name" />
        <a href="/contact">Contact</a>
        `)
});

app.get("/contact",(req,res)=>{
    res.send(`
        <h1>This is contact use page</h1>
        <a href="/about">Go to about page</a>
        `);

    app.get('/about',(req, res)=>{
        res.send([
            {name:"virendra", age:"29"},
            {name:"Subhash", age:"24"},
            {name:"Bhanu", age:"27"}
        ])
    })
})

app.listen(2000);