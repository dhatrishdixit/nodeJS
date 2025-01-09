const fs = require("node:fs");

const start = Date.now();
fs.readFile(__dirname+'/rulesForOrderOfExecutionInEventLoop.md',()=>{
    console.log("readFile 1");
})

setTimeout(()=>console.log("setTimeout 1"),0)

// in the case of 0 ms delay in timer queue we cant tell which will be executed first file io or timer queue , as by default if timer option is less than 1 ms nodejs adds a 1ms delay to the timer queue so if our cpu is not busy it will enter the timer queue at 0.2 ms it will enter the io queue then and execute it first and then enter the timer queue , but if it is busy enough it will enter timer queue after 1ms and execute it before io queue 


