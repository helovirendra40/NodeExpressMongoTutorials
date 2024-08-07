const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to our index page</h1>")
});

app.get('/welcome/:name/:id',(req,res)=>{
    const data={
        name:req.params.name,
        id:req.params.id,
        movie: ["Koi mil gya", "kris","Dhoom"]
    }
    res.render('welcome',{data})
})
const PORT = 1000;
app.listen(PORT, ()=>{console.log(`Server is runing on PORT number ${PORT}`)
})