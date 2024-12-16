const superHero = {
    name : "Bruce Wayne"
}

const superHero2 = superHero ;
//object is store via reference so it will change 
superHero2.name = "superman";

console.log(superHero.name);
//output will be superman 

let superHero3 = superHero;

superHero3 = {
    name :"batman"
}

console.log(superHero.name);
// here also the output will remain as superman because we just change the address that superHero3 is pointing to another object so the original object which superhero is pointing to does not change
// that is reference breaks 

// same thing will happen in exports when instead of changing property of exports object we are directly assigning a new object to export there will be difference in our module.exports and exports object , and our module.exports object will remain empty then from there we will try to get property we will get undefined 