const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// console.log(emitter);

console.log("before the work even started ");

// helps us to write code in a non blocking manner 

emitter.on("order-pizza",(...args)=>{
    console.log(args);
    const [size,topping] = args;
    console.log(`pizza is ordered of size ${size} and with ${topping} as toppings`)
})

emitter.on("order-pizza",(size)=>{
    if(size === "large") console.log("serve complementary drink")
})

emitter.emit("order-pizza","large","mushroom");