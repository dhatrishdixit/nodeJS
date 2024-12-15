(function(intro){
    const superHero = "superman";
    console.log(`${intro} this is ${superHero}`);
    console.log("this is inside iife 1");
    // this is the way modules scope work 
})("hey");

(function(intro){
    const superHero = "batman";
    console.log(`${intro} this is ${superHero}`)
    console.log("this is inside iife 2");
    // this is the way modules scope work 
})("hello");

