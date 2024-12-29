const fs = require("node:fs/promises");

// console.log("first");
// fs.readFile("text.txt","utf-8").then(data => console.log(data)).catch(err => console.log(err));
// console.log("second");


async function writeData(data){
   try{
      await fs.writeFile("greet.txt",data,{flag:"a"});

      console.log("data added to the file")
   }
   catch(err){
        throw new Error(err);
   }
}

writeData(" hi this is from promisified fs")