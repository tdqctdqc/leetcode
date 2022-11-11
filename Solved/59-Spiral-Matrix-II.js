var generateMatrix = function(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }

    let xStart = 0;
    let xEnd = n - 1;
    let yStart = 0;
    let yEnd = n - 1;
    let val = 1;
    let dir = 0;
    while(xStart <= xEnd && yStart <= yEnd) {
        if(dir === 0) {
            for (let i = xStart; i <= xEnd; i++) {
                matrix[yStart][i] = val;
                val++;
            }
            yStart++;
        } else if (dir === 1) {
            for (let i = yStart; i <= yEnd; i++) {
                matrix[i][xEnd] = val;
                val++;
            }
            xEnd--;
        } else if (dir === 2) {
            for (let i = xEnd; i >= xStart; i--) {
                matrix[yEnd][i] = val;
                val++;                
            }
            yEnd--;
        } else {
            for (let i = yEnd; i >= yStart; i--) {
                matrix[i][xStart] = val;
                val++;
            }
            xStart++;
        }
        dir = (dir + 1) % 4;
    }
    return matrix;
};