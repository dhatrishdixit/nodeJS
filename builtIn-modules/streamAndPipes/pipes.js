// pipes convert readable streams into writable streams

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./text.txt",{
    encoding:"utf-8",
});

const writeableStream = fs.createWriteStream("./write.txt");

readableStream.pipe(writeableStream);

// we can do chaining of pipes as well , 

// gzip creates a transform stream to compress the data into a zip file
// pipe is then used to chain three streams first , read stream then transform stream(gzip) and then write stream
// [text.txt] --> [ReadableStream] --> [Gzip Transform Stream] --> [write.txt.gz]
readableStream.pipe(gzip).pipe(fs.createWriteStream("./write.txt.gz"));

// this creates a pipe 