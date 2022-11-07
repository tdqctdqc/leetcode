var addBinary = function(a, b) {
    let sum = getNumFromBinaryString(a) + getNumFromBinaryString(b);
    if(sum === 0) return '0';
    let result = '';
    while(sum >= 1) {
        let bit = sum % 2 === 0 ? '0' : '1';
        result = bit + result;
        sum /= 2;
        sum = Math.floor(sum);
    }
    return result;
};

function getNumFromBinaryString(str) {
    let sum = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        sum += str[i] === '0' 
        ? 0
        : 2 ** (str.length - i - 1);
    }
    return sum;
}

// console.log(getNumFromBinaryString('10'));