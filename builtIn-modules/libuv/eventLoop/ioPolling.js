const fs = require("node:fs");

fs.readFile(__filename,()=>console.log("readfile 1"));
process.nextTick(()=>console.log("nextTick 1"));   
Promise.resolve().then(()=>console.log("promise 1"));
setTimeout(()=>console.log("timeout 1"),0);
setImmediate(()=>console.log("immediate 1"));


for(let i=0;i<=2000000000;i++){}