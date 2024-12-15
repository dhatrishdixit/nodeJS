// const addFn = require("./modules/modules.js");
// const addFn2 = require("./modules/modules.js");

// console.log(__filename);
// console.log(addFn(1,2));
// console.log("inside index.js"); 


//this showcases caching in modulation 
const superHero = require("./superHeroClass");

console.log(superHero.getName());
console.log(superHero.setName("superman"));
console.log(superHero.getName());

// here module caching causes issue to us 
// to get rid of it we should export class directly 
const superHero2 = require("./superHeroClass");

console.log(superHero2.getName());