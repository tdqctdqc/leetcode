var reverseBits = function(n) {
    let result = 0;
    let exp = 31;
    while(n > 0) {
        let bit = n % 2;
        result += (bit * 2) ** exp;
        exp--;
        n = Math.floor( n / 2);
    }
    return result;
};