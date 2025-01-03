const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{

    console.log(req.url);
    if(req?.url == "/" || req?.url == "/home"){
        res.writeHead(200,{"content-type":"text/html"});
        fs.createReadStream(__dirname + "/home.html").pipe(res);
    }else if(req?.url == "/about"){
        res.writeHead(200,{"content-type":"text/html"});
        fs.createReadStream(__dirname + "/about.html").pipe(res);
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>Page not found</h1>");
    }
    

})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})