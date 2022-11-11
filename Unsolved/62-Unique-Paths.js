var uniquePaths = function(m, n) {
    if(m === 1) {
        return Math.min(n, m);
    }
    if(n === 1) {
        return Math.min(n, m);
    }
    let pathCount = 0;
    for (let i = 0; i < n; i++) {
        pathCount += uniquePaths(m - 1, n - i)
    }
    return pathCount;
};