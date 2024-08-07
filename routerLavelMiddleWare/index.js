const express = require('express');
const reqFilter = require('./routerLavelMiddleware')
const app = express();

const route = express.Router();
route.use(reqFilter);
app.get('/',(req, res)=>{
    res.send("this is home page")
});
route.get('/about',(req, res)=>{
    res.send('this is about us page')
});
route.get('/contact',(req,res)=>{
    res.send('this is contact us page');
});
app.use('/',route)
app.listen(2000, ()=>{
    console.log("appication running on port number 2000")
})