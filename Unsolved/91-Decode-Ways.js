var numDecodings = function(s) {
    for (let i = 0; i < s.length; i++) {
        const digit = parseInt(s[i]);
        if(digit === 0) {
            if(i === 0) return 0;
            let prevDigit = parseInt(s[i - 1]);
            if( !(prevDigit === 1 || prevDigit === 2)) return 0;
        }
    }
    let count = 0;
    helper(0);
    function helper(index) {
        if(index > s.length - 1) {
            count++;
            return;
        }
        let digit = parseInt(s[index]);
        if(digit === 0) return;
        if(index < s.length - 1) {
            let nextDigit = parseInt(s[index + 1]);
            if(digit === 1) {
                helper(index + 2);
            } else if(digit === 2) {
                if(nextDigit < 7) helper(index + 2);
            }
            if(nextDigit !== 0) helper(index + 1);
        } else helper(index + 1);
    }
    return count;
};