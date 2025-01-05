const https = require("node:https");

process.env.UV_THREADPOOL_SIZE = 2;
const start = Date.now();
const maxCalls = 6;

for(let i=1;i<=maxCalls;i++){
    https.get("https://www.google.com",(res)=>{
        res.on("data",(chunk)=>{
        //    console.log(chunk.toString())
        });
        res.on("end",()=>{
            console.log(`${i}th call : ${Date.now()-start} ms`)
        })
    }).on("error",(err) => console.log(err)).end()
}

// https.request is a network input/output operation and not a cpu bound operation 

// it does not use the threadpool 

// libuv instead delegates the work to the OS kernel and whenever possible , it will poll the kernel and see if the request has completed 

// in Node.js , async methods are handled  by libuv 

// they are handled in two different ways - 1) native async mechanism 2) threadpool mechanism 

// native async mechanism is used , whenever possible for cases like network io , as it uses the OS kernel to handle the async operation and it is more efficient than using the threadpool mechanism , as there is no bottle neck of the threadpool

// if there is no native async support and the task is file I/o or CPU intensive , libuv uses the thread pool to avoid blocking the main thread 
// although the thread pool preserves asynchronicity with respect to Nodes's main thread , it can still become a bottleneck if all the threads are busy 

