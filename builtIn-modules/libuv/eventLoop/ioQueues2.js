const fs = require("node:fs");

fs.readFile(__filename,()=>console.log("readfile 1"));
setTimeout(()=>console.log("timeout 1"),0);
process.nextTick(()=>console.log("nextTick 1"));   
Promise.resolve().then(()=>console.log("promise 1"));

for(let i=0;i<=2000000000;i++){}
// this is for making sure cpu is engaged enough 
// so that there is no conflict between 