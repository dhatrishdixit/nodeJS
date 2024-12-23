const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter{

    constructor(){
        super();
        this.orderNumber = 0;
    } 

    order(size,topping){
        this.orderNumber++;
        this.emit("order",size,topping);
        this.displayOrderNumber();
    }

    displayOrderNumber(){
        console.log(`current order Number : ${this.orderNumber}`);
    }

}

module.exports = PizzaShop;