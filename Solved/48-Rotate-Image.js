var rotate = function(matrix) {
    let n = matrix[0].length;
    for (let border = 0; 
        n - 2*border > 1; 
        border++) 
    {
        for (let iter = 0; 
            iter < n - (border * 2) - 1; 
            iter++) 
        {
            let first = matrix[border][border + iter];
            let second = matrix[border + iter][n - border - 1];

            let third = matrix[n - border - 1][n - border - 1 - iter];
            let fourth = matrix[n - border - 1 - iter][border];

            matrix[border][border + iter] = fourth;
            matrix[border + iter][n - border - 1] = first;
            matrix[n - border - 1][n - border - 1 - iter] = second;
            matrix[n - border - 1 - iter][border] = third;
        }
    }
};