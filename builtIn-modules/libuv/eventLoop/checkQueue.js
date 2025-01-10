setImmediate(()=>console.log("setImmediate 1"));
setImmediate(()=>{
    console.log("setImmediate 2");
    process.nextTick(()=>console.log("nextTick inside setImmediate"));
    Promise.resolve().then(()=>console.log("Promise inside setImmediate"));
});
setImmediate(()=>console.log("setImmediate 3"));

// microtask queues are checked and executed between any two callback execution 