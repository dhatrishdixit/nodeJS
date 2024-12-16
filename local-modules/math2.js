const add = (a,b) => a + b ;

const subtract = (a,b) => Math.abs(a-b);

exports = {
    add,
    subtract
}

// this explains why should not directly reassign an object to exports directly as both exports and module.exports are different and this will only change exports as it will be assigned new object / reference whereas module.exports will remain as it is 