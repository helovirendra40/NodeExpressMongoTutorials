// const http = require('http');
// const data = require('./ApiData');
// http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type': 'application\json'})
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(1000)


const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {"content-type": 'application\json' })
    res.write(JSON.stringify({
            name:"virendra",
            age:29,        
    })
)
    res.end()
}).listen(1000)