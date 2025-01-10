const fs = require("node:fs");

const readStream =  fs.createReadStream(__filename);
readStream.close();

readStream.on("close",()=>console.log("this callback will be passed to close queue"));

setImmediate(()=>console.log("immediate 1"));
process.nextTick(()=>console.log("next tick 1"));
Promise.resolve().then(()=>console.log("promise 1"));
setTimeout(()=>console.log("timeout 1"),0);

for(let i=0;i<20000000;i++){}
