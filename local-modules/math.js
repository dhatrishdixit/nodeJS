const add = (a,b) => a + b ;

const subtract = (a,b) => Math.abs(a-b);

module.exports = {
    add,
    subtract
}

// we can also do in the form of 
// module.exports.add = (a,b) => a + b;
// module.exports.subtract = (a,b) => Math.abs(a-b);
// OR 
// exports.add = (a,b) => a + b;
// exports.subtract = (a,b) => Math.abs(a-b);
// but module.exports is a better way to do it.
