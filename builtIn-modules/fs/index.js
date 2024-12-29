const fs = require("node:fs");

// const fileContents = fs.readFileSync("text.txt","utf-8");
// console.log(fileContents);

console.log("first");
fs.readFile("text.txt","utf-8",(err,data)=>{
    // error first callback pattern 
    if(err){
        console.log(err);
        return ;
    }
    console.log(data);
})
// console.log("second");


// to write new data we use writeFile method
fs.appendFile("greet.txt"," hi this is from async",(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("file written successfully");
})
fs.appendFileSync("greet.txt","hi this is from sync");