var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0';
    let indProducts = [];
    for (let i = 0; i < num1.length; i++) {
        const digit1 = parseInt(num1[num1.length - 1 - i]); 
        for (let j = 0; j < num2.length; j++) {
            const digit2 = parseInt(num2[num2.length - 1 - j]);
            let numZeroes = i + j;
            if(numZeroes in indProducts === false) {
                indProducts[numZeroes] = 0;
            }
            indProducts[numZeroes] += (digit1 * digit2);
        }
    }  
    
    let finalDigits = [];
    let maxZeroes = (num1.length - 1) + (num2.length - 1);
    let carry = 0;
    let iter = 0;
    while(carry !== 0 || iter <= maxZeroes) {
        let digit = iter in indProducts ? indProducts[iter] : 0;
        let digitSum = digit + carry;
        finalDigits[iter] = digitSum % 10;
        carry = Math.floor(digitSum / 10);
        iter++;
    }
    return finalDigits.reverse().join('');
};