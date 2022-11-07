var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    let bin = n.toString(2);
    return n === 2 ** (bin.length - 1); 
};