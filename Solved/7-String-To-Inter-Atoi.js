//PASSED

var myAtoi = function(s) {
    let iter = 0;
    let pos = true;
    let digRegEx = /\d/;
    let int32min = (-2) ** 31;
    let int32max = 2 ** 31 - 1;

    while(s[iter] === ' ') iter++;
    if(s[iter] === '-') {
        pos = false;
        iter++;
    } else if(s[iter] === '+'){
        iter++;
    }
    let numberStart = iter;
    let numLength = 0;
    while(iter < s.length 
        && digRegEx.test(s[iter])) {
        numLength++;
        iter++;
    }
    let numberEnd = iter;
    let numberString = s.slice(numberStart, numberEnd);
    let number = parseInt(numberString);
    if(isNaN(number)) return 0;
    if(pos === false) number *= -1;
    number = Math.min(number, int32max);
    number = Math.max(number, int32min);
    return number;
}

myAtoi('words and 987');