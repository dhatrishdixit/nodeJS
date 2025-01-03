const crypto = require("node:crypto");
const os = require('node:os');

console.log(os.cpus().length);
process.env.UV_THREADPOOL_SIZE = 6;
const start = Date.now();
const totalHash = 6;

for(let i=1;i<=totalHash;i++){
    crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
        console.log(`hash ${i}: ${Date.now()-start} ms`);
    })
}

// in this multiple threads are created to handle the async operations apart from main thread 
// and you can see the limitation of this as my computer has only 2 cores and that is 4 threads at max so after that it will be queued and will be executed after the previous ones are done , when we increase max threads more than the number of cores performance will degrade 

// at max a core can handle two threads 

// libuv is by default set at 4 threads and we can increase it by setting the environment variable UV_THREADPOOL_SIZE to the number of threads we want to use

// A few async methods like fs.readFile and crypto.pbkdf2 run on a separate thread in lubuv's thread pool. They do run synchronously in their own thread, but as far as the main thread is concerned they appear non blocking in nature .