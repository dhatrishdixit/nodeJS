// we have to do this to get the normal behaviour , and to negate io polling 

const fs = require("node:fs");

fs.readFile(__filename,()=>{
    console.log("readFile 1");
    setImmediate(()=>console.log("setImmediate inside readFile"))
})


setTimeout(()=>console.log("timeout 1"),0);
process.nextTick(()=>console.log("nextTick 1"));
Promise.resolve().then(()=>console.log("promise 1"));

for(let i=0;i<2000000000;i++){}

// this for loop is added to remove any conflict 

//  we add setImmediate inside readFile so as to negate the effect of io polling 
// as readFile or other io operations are done during io polling phase only so the callback is then added to the queue and then executed in next event cycle only 
