// stream - is the sequence of data moved from one point to another over time

// contents arrive in chunks, not all at once and are processed as they arrive and transferred in chunks

// Buffers - temporary storage spot for a chunk of data that is being transferred from one place to another

// we can store chunks of data in a buffer while we process other data or to little data to process 

const buffer = new Buffer.from("dhatrish");

console.log(buffer);
// <Buffer 64 68 61 74 72 69 73 68> - this is the hexadecimal representation of the string "dhatrish"

console.log(buffer.toJSON());
// { type: 'Buffer', data: [ 100, 104, 97, 116, 114, 105, 115, 104 ] }
console.log(buffer.toString());

// so buffer holds the data in hexadecimal format of unicode values of the string

buffer.write("code");
console.log(buffer.toString());

buffer.write("codevolution");
console.log(buffer.toString());

// the buffer has a fixed size, so if we try to write more data than the buffer can hold, it will overwrite the data in the buffer