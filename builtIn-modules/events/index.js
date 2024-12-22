const PizzaShop = require('./pizzaShop');
const DrinkMachine = require('./drinkMachine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();


pizzaShop.on("order",(size,topping)=>{
    console.log(`order of ${size} with ${topping} is received`)
    drinkMachine.serveDrink(size);
})

pizzaShop.order("large","mushroom");



// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// // console.log(emitter);

// console.log("before the work even started ");

// // helps us to write code in a non blocking manner 

// emitter.on("order-pizza",(...args)=>{
//     console.log(args);
//     const [size,topping] = args;
//     console.log(`pizza is ordered of size ${size} and with ${topping} as toppings`)
// })

// emitter.on("order-pizza",(size)=>{
//     if(size === "large") console.log("serve complementary drink")
// })

// emitter.emit("order-pizza","large","mushroom");
