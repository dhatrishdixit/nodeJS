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


// 5 parameters that are present in the iife function that wraps every modules is 
// 1. exports 2. require 3. module 4. __filename 5. __dirname
// here module caching causes issue to us 
// to get rid of it we should export class directly 
const superHero2 = require("./superHeroClass");

console.log(superHero2.getName());