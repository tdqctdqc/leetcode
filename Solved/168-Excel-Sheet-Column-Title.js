var convertToTitle = function(columnNumber) {
    let result = '';
    while(columnNumber > 0) {
        columnNumber--;
        let r = columnNumber % 26;
        console.log(r);
        let s = String.fromCharCode(65 + r);
        result = s + result;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};

convertToTitle(28);

