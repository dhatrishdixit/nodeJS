const crypto = require("node:crypto");

const start = Date.now();
const totalHash = 6;

for(let i=1;i<=totalHash;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`hash ${i}: ${Date.now()-start} ms`);
    })
}

// in this multiple threads are created to handle the async operations apart from main thread 
// and you can see the limitation of this as my compute has only 2 cores and that is 4 threads so after that it will be queued and will be executed after the previous ones are done.