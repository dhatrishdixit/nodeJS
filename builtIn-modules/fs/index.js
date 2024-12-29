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


// we can use appendFile to append data to a file
fs.writeFile("greet.txt"," hi this is from async",{flag:"a"},(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("file written successfully");
})
fs.writeFileSync("greet.txt","hi this is from sync");