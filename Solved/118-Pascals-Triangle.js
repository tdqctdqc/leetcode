var generate = function(numRows) {
    let rows = [];
    for (let i = 0; i < numRows; i++) {
        rows.push(generateRow(i, rows));
    }
    return rows;
};

var generateRow = function(index, rows) {
    if(index === 0) return [1];
    if(index === 1) return [1,1];
    
    let row = [];
    for (let i = 0; i < index + 1; i++) {
        let entry = 0;
        if(i > 0) {
            entry += rows[index - 1][i - 1];
        } 
        if(i < index) {
            entry += rows[index - 1][i]
        }
        row.push(entry);
    }
    return row;
};
generate(4);
