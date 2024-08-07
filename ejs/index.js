// const express = require('express');
// const app = express();
// app.set('view engine','ejs');
// app.get('/welcome',(req,res)=>{
//     const empinfo = {
//         name:"virendra",
//         lName:"gangwar"
//     }
//     res.render("welcome",{empinfo});
// })

// const PORT = 2000;
// app.listen(PORT, ()=>{ console.log(`Server is running on port number ${PORT}`)})



const express = require('express')
const app = express();
app.set('view engine', 'ejs');
app.get('/welcome',(req, res)=>{

    const empinfo = {
        name:"virendra",
        lname:"gangwar"
    }
    res.render('welcome',{empinfo})
})
app.listen(1000, console.log("application running on port number 1000"))