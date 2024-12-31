const http = require("node:http");

const server = http.createServer((req,res)=>{
    // this callback function is request listener 
    console.log(req);
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Hello world")
});


server.listen(3000,()=>{
    console.log("server is running on port 3000")
})