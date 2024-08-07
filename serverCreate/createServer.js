const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type': 'text/html'
    })
    res.write("<h1>server runing on port number 1000</h1>");
    res.end()
}).listen(1000)