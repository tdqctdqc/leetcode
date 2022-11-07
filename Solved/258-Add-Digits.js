var addDigits = function(num) {
    while(num >= 10) {
        num = getDigitSum(num);
    }
    return num;
};

function getDigitSum(num) {
    let sum = 0;
    while(num >= 1) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

getDigitSum(38);