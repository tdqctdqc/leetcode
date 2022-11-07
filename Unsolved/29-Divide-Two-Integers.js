var divide = function(dividend, divisor) {

    if(dividend === -2147483648 && divisor === -1)
        return 2147483647;

    let count = 0;
    let sum = 0;
    let sign = 1;
    let max = 2 ** 31 - 1;
    let min = -(2**31);
    if(!(dividend < 0 && divisor < 0) 
        && (dividend < 0 || divisor < 0)){
        sign = -1;
    }
    while(Math.abs(sum) <= Math.abs(dividend)) {
        // if(count === max - 1) return max;
        // if(count === min + 1) return min;
        count++;
        sum += divisor;
    }
    return sign * (count - 1);
};