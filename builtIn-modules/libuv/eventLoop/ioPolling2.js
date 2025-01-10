// we have to do this to get the normal behaviour , and to negate io polling 

const fs = require("node:fs");

fs.readFile(__filename,()=>{
    console.log("readFile 1");
    setImmediate(()=>console.log("setImmediate inside readFile"))
})


setTimeout(()=>console.log("timeout 1"),0);
process.nextTick(()=>console.log("nextTick 1"));
Promise.resolve().then(()=>console.log("promise 1"));
