const fs = require("node:fs");

fs.readFile(__filename,()=>console.log("readfile 1"));
process.nextTick(()=>console.log("nextTick 1"));   
Promise.resolve().then(()=>console.log("promise 1"));
setTimeout(()=>console.log("timeout 1"),0);
setImmediate(()=>console.log("immediate 1"));


for(let i=0;i<=2000000000;i++){}

// io callback delay is due to io polling \
// fs.readFile execution is delayed because event loop has to check if the readFile work is done , before adding it to the queue , and this is done in io polling phase and once done the callback is added to the queue but as the context switches to check queue , io callback is then executed after the cycle only

// io polling happens between io queue and check queue  