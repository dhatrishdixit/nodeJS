const http = require("node:http");

const server = http.createServer((req,res)=>{
    
    const url = req.url;
    if(url =="/"){
        res.writeHead("200",{"Content-Type":"text/plain"});
        res.end("Home")
    }
    else if(url == "/slow-page"){
        for(let i=0;i<=10000000000;i++){}

        res.writeHead("200",{"Content-Type":"text/plain"});
        res.end("Slow page")
    }
})

server.listen(3000,()=>console.log("server is running on port 3000"))