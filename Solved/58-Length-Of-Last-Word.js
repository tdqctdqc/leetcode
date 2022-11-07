var lengthOfLastWord = function(s) {
    let length = 0;
    let iter = s.length - 1;
    while(iter >= 0 && s[iter] === ' ') {
        iter--;
    }
    while(iter >= 0 && s[iter] !== ' ') {
        length++; 
        iter--;
    }
    return length;
};