setTimeout(()=>console.log("this is setTimeout 1"),0);
setTimeout(()=>{
    console.log("this is setTimeout 2")
    process.nextTick(()=>console.log("nextTick inside setTimeout"));
    Promise.resolve().then(()=>console.log("promise inside setTimeout"))

},0);
setTimeout(()=>console.log("this is setTimeout 3"),0);

process.nextTick(()=>console.log("this process.nextTick 1"));
process.nextTick(()=>{
    console.log("this process.nextTick 2")
    process.nextTick(()=>console.log("this is process.nextTick inside Process.nextTick"))
});
process.nextTick(()=>console.log("this process.nextTick 3"));

Promise.resolve().then(()=>console.log("this promise 1"));
Promise.resolve().then(()=>{
    console.log("this promise 2")
    Promise.resolve().then(()=>console.log("this is promise inside promise"))
    process.nextTick(()=>console.log("this is process.nextTick inside Promise"))
});
Promise.resolve().then(()=>console.log("this promise 3"));



// first everything from microtask queue is completed then other queues are entertained , so even after all the promises callbacks are executed event loop checks for any callback left in the microTaskQueue and then it will execute the setTimeout callbacks , so the setTimeout callbacks will be executed


// main inference - callbacks in microtask queues are executed in between the execution of callbacks in timer queue 

// after every callback execution in timer or any other queue event loop goes back and check the micro task queue 