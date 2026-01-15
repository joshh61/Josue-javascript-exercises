const fibonacci = function(a) {
    if(a < 0){
        return "OOPS";
    }
    const goldenRatio = 1.618034;
    const fib = ((goldenRatio ** a) - (1 - goldenRatio)) / Math.sqrt(5);
    return Math.floor(fib);
};

// Do not edit below this line
module.exports = fibonacci;
