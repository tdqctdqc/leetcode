var spiralOrder = function(matrix) {
    let xStart = 0;
    let xEnd = matrix[0].length - 1;
    let yStart = 0;
    let yEnd = matrix.length - 1;
    let dir = 0;
    let ans = [];
    while(xStart <= xEnd && yStart <= yEnd) {
        if(dir === 0) {
            for (let i = xStart; i <= xEnd; i++) {
                ans.push(matrix[yStart][i]);                
            }            
            yStart++;
        } else if(dir === 1) {
            for (let i = yStart; i <= yEnd; i++) {
                ans.push(matrix[i][xEnd]);
            }
            xEnd--;
        } else if(dir === 2) {
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
        dir = (dir + 1) % 4;
    }
    return ans;
};