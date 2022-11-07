var reverseString = function(s) {
    let mid = Math.floor(s.length / 2);
    for (let i = 0; i < mid; i++) {
        swap(s, i, s.length - 1 - i);
    }
    return s;
};
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}