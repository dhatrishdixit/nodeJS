const superHeroClass = require("./superHeroClassToGetRidOfCaching");

const superHero1 = new superHeroClass("batman");

console.log(superHero1.getName());
console.log(superHero1.setName("superman"));
console.log(superHero1.getName());

const superHero2 = new superHeroClass("batman");

console.log(superHero2.getName());   