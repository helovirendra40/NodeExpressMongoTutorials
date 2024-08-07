const fs = require('fs');
const path = require('path');
const allFiles = path.join(__dirname,"allfiles");

for(let i = 0; i < 3;i++){
    fs.writeFileSync(`${allFiles}/dynamicFileName${i}.text`,`this is dynamic code by loop ${i}`)
}
fs.readdir(allFiles,(err, items)=>{
    // console.log(items)
    items.forEach((curElem)=>{
        console.log(curElem)
    })    
})