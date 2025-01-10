const fs = require("node:fs");

fs.readFile(__filename,()=>{
    console.log("readFile 1");
    setImmediate(()=>console.log("setImmediate inside readFile"))
    process.nextTick(()=>console.log("nextTick inside readFile"));
    Promise.resolve().then(()=>console.log("promise inside readFile"));
})


setTimeout(()=>console.log("timeout 1"),0);
process.nextTick(()=>console.log("nextTick 1"));
Promise.resolve().then(()=>console.log("promise 1"));

for(let i=0;i<2000000000;i++){}