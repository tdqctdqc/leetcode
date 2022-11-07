//PASSED

var convert = function(s, numRows) {
    const chars = [];
    if(numRows === 1) return s;
    const zagLength = 2 * numRows - 2;
    for (let r = 0; r < numRows; r++) {
        let iter = 0;
        if(r === 0) {
            while(iter * zagLength < s.length) {
                chars.push(s[iter * (zagLength)]);
                iter++;
            }
        } else if(r === numRows - 1) {
            while(iter * zagLength + numRows - 1 < s.length) {
                chars.push(s[iter * zagLength + numRows - 1]);
                iter++;
            }
        } else {
            while(iter * zagLength + r < s.length) {
                chars.push(s[iter * zagLength + r]);
                let crossIndex = iter * zagLength + (zagLength - r);
                if(crossIndex < s.length) {
                    chars.push(s[crossIndex]);
                }
                iter++;
            }
        }
    }
    return chars.join('');

}

// console.log(convert("PAYPALISHIRING", 3));