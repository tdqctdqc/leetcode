var isPowerOfThree = function(n) {
    if(n < 1) return false;
    let tri = n.toString(3);
    let regex = /^10*$/;
    return regex.test(tri);
};