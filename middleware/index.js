const express = require('express')
const app = express();
const reqFilter = (req, res, next)=>{
    const salary =req.query.salary;
    if(!salary){
        res.send("No salary provided")
    } 
    else if(salary < 10000){
        res.send("Your salary is above 10000")
    }
    else{
        next()
    }
}
app.use(reqFilter)
app.get('/',(req,res)=>{
    res.send("This is man page")
});

app.get('/about',(req,res)=>{
    res.send("This is about us page")
})


app.listen(1000, ()=>{
    console.log("server running on port number 1000")
})