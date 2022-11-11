var numTrees = function(n) {
    return catalanFactorial(n);
};

function catalanFactorial(n) {
    return factorial(2 * n) / (factorial(n) * factorial(n + 1));
}

function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n - 1);
}