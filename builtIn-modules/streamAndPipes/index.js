const fs = require("node:fs");


// buffer that stream use has a default size of 64kb
const readableStream = fs.createReadStream("text.txt",{
    encoding: "utf-8",
    highWaterMark:2
});

const writeableStream = fs.createWriteStream("write.txt");

let charCount = 0;
readableStream.on("data",(chunk) => {
    console.log(chunk);
    writeableStream.write(chunk);
    // console.log(chunk.length)
    charCount += chunk.length;
})

readableStream.on("end",()=>{
    writeableStream.write(" "+charCount.toString());
})