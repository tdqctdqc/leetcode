var setZeroes = function(matrix) {
    let n = matrix[0].length;
    let m = matrix.length;
    let firstRowZero = false;
    let firstColZero = false;
    for (let i = 0; i < n; i++) {
        if(matrix[0][i] === 0) {
            firstRowZero = true;
            break;
        }
    }
    for (let j = 0; j < m; j++) {
        if( matrix[j][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if(matrix[j][i] === 0) {
                matrix[0][i] = 0;
                matrix[j][0] = 0;
            }
        }
    }
    

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if(matrix[j][0] === 0
            || matrix[0][i] === 0) {
                matrix[j][i] = 0;
            }
        }
    }
    
    if(firstRowZero) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }
    if(firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
};

