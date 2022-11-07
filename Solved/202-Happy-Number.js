var isHappy = function(n) {
    if(n === 1) return true;
    let fast = getDigitSquareSum(n);
    let slow = n;
    while(fast != slow) {
        slow = getDigitSquareSum(slow);
        fast = getDigitSquareSum(fast);
        fast = getDigitSquareSum(fast);
        if(slow === 1) return true;
    }
    return false;
};

function getDigitSquareSum(n) {
    let sum = 0;
    while(n > 0) {
        let d = n % 10;
        sum += d * d;
        n = Math.floor(n / 10);
    }
    return sum;
}