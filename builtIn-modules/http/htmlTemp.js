const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/html"});

    let html = fs.readFileSync(__dirname + "/template.html",{
        encoding : "utf-8"
    });
 
    const name = "dhatrish";
    html = html.replace("{{name}}",name);

    res.end(html);

})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})