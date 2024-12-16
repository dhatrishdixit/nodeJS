const callBackFn = () => "this is from inside of callBackFn"

const higherOrderFn = (callBackFn) => {
    console.log("this is from inside of higherOrderFn");
    console.log(callBackFn());
    return null;
};

higherOrderFn(callBackFn);

// two types of call backs - synchronous and asynchronous