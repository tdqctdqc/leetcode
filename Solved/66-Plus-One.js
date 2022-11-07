var plusOne = function(digits) {
    let index = digits.length - 1;
    while(digits[index] === 9 && index > 0) {
        digits[index] = 0;
        index--;
    }
    if(index !== 0 || digits[0] !== 9) {
        digits[index]++;
        return digits;
    }
    digits[0] = 0;
    return [1, ...digits];
};
