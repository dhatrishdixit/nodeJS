setTimeout(()=>console.log("setTimeout 1"),1000);
setTimeout(()=>console.log("setTimeout 2"),500);
setTimeout(()=>console.log("setTimeout 3"),0);

// timer queue is actually min heap but understanding it as queue makes it simpler 