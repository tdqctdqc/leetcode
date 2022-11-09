var spiralOrder = function(matrix) {
    let n = matrix[0].length;
    let m = matrix.length;
    let ans = [];

    let xStart = 0;
    let xEnd = n - 1;
    let yStart = 0;
    let yEnd = m - 1;

    let direction = 0;

    while(xStart <= xEnd && yStart <= yEnd) {
        if(direction === 0) {
            for (let i = xStart; i <= xEnd; i++) {
                ans.push(matrix[yStart][i]);
            }
            yStart++;
        } else if (direction === 1) {
            for (let i = yStart; i <= yEnd; i++) {
                ans.push(matrix[i][xEnd]);
            }
            xEnd--;
        } else if (direction === 2) {
            for (let i = xEnd; i >= xStart; i--) {
                ans.push(matrix[yEnd][i]);
            }
            yEnd--;
        } else {
            for (let i = yEnd; i >= yStart; i--) {
                ans.push(matrix[i][xStart]);
            }
            xStart++;
        }
        direction = (direction + 1) % 4;
    }
    return ans;
}
