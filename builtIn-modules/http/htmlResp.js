// res is a writable stream
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{

    // // this is basic way but in this the problem is that we have to read the entire file and then send it to the response
    // const htmlData =  fs.readFileSync("./index.html","utf-8"); 
    
    // res.writeHead(200,{"content-type":"text/html"});
    // res.end(htmlData);

   // this is using streams
   
   res.writeHead(200,{"content-type":"text/html"});
   fs.createReadStream(__dirname + "./index.html",{
      encoding:"utf-8"
   }).pipe(res);
});

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})