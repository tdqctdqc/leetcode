var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        if(validateRow(i, board) === false) return false;
        if(validateColumn(i, board) === false) return false;        
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(validateSquare(i,j,board) === false) return false;
        }
    }
    return true;
};

function validateRow(rowNum, board) {
    let row = board[rowNum];
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        if(set.has(row[i]) && row[i] !== '.') {
            return false;
        }
        set.add(row[i]);
    }
    return true;
}
function validateColumn(colNum, board) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        let el = board[i][colNum];
        if(set.has(el) && el !== '.') {
            return false;
        }        
        set.add(el);
    }
    return true;
}

function validateSquare(sqX, sqY, board) {
    let xStart = sqX * 3;
    let yStart = sqY * 3;
    let set = new Set();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const el = board[j + yStart][i + xStart];
            if(set.has(el) && el !== '.') return false;
            set.add(el);       
        }
    }
    return true;
}