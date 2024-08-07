const reqFilter = (req,res,send)=>{
    const salary = req.query.salary;
    if(!salary){
        res.send("No Salary provided");
    }
    else if(salary < 50000){
        res.send("salary is below 50000")
    }
    else{
        send()
    }
}

module.exports = reqFilter;