// Promise.resolve().then(()=>console.log("this promise 1"));
// Promise.resolve().then(()=>console.log("this promise 2"));
// process.nextTick(()=>console.log("this process.nextTick 1"));
// process.nextTick(()=>console.log("this process.nextTick 2"));
// console.log("synchronous block 1");
// console.log("synchronous block 2");


Promise.resolve().then(()=>console.log("this promise 1"));
Promise.resolve().then(()=>{
    console.log("this promise 2")
    Promise.resolve().then(()=>console.log("this is promise inside promise"))
    process.nextTick(()=>console.log("this is process.nextTick inside Promise"))
});
Promise.resolve().then(()=>console.log("this promise 3"));


process.nextTick(()=>console.log("this process.nextTick 1"));
process.nextTick(()=>{
    console.log("this process.nextTick 2")
    process.nextTick(()=>console.log("this is process.nextTick inside Process.nextTick"))
});
process.nextTick(()=>console.log("this process.nextTick 3"));

// first all the call backs of  promises are added to the microTaskQueue , and then all the callbacks of process.nextTick are added to the microTaskQueue , and the callbacks will start getting Executed in FIFO order with priority to nextTick queue callbacks and so first nextTick 1 will log in console , then nextTick 2 and then callbock for inner nextTick will be added to the microTaskQueue and then nextTick 3 will log in console , and then the callback for inner nextTick will be logged before the promise callbacks due to the priority order , and then similar stuff will be done for the promise callbacks , only at the end there will be difference 

// when promise 2 callback runs it adds a callback to nextTick queue and one to promise queue , out of both of these callbacks added to the microTaskQueue , first Promise queue will execute as after completion of 3 callback of promise queue it will check whether there is any callback left in the promise queue and it will find the callback added from inside of the promise 2 callback , so then it will execute The inside Promise callback , after which the event loop will continue and loop for any callback left in the microtask queue and it will find the nextTick callback left so it will log it then , so promise callback will be logged before the nextTick callback in this case 

// process.nextTick is avoided in general as it can cause starvation of the event loop , as it will keep on adding the callbacks to the microTaskQueue and the event loop will keep on executing the callbacks from the microTaskQueue and the event loop will never get a chance to execute the callbacks from the call stack , so it is avoided in general , and it is used only when we want to make sure that the callback is executed before the event loop continues , and it is used in some edge cases only , and it is not used in general