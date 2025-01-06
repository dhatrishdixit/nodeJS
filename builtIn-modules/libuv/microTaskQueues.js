Promise.resolve().then(()=>console.log("this promise 1"));
Promise.resolve().then(()=>console.log("this promise 2"));
process.nextTick(()=>console.log("this process.nextTick 1"));
process.nextTick(()=>console.log("this process.nextTick 2"));
console.log("synchronous block 1");
console.log("synchronous block 2");
