const http = require("node:http");

const server = http.createServer((req,res)=>{
    // this callback function is request listener
    
    const obj = {
        name:"dhatrish",
        age:23
    }
    
   // console.log(req);

    // different content type - "text/plain" , "text/html" , "application/json" , "image/jpg" , "image/png" , "image/gif" ,etc
    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify(obj));
});


server.listen(3000,()=>{
    console.log("server is running on port 3000")
})