var searchMatrix = function(matrix, target) {
    let rowIndex = binarySearchRows(matrix, target);
    if(rowIndex < 0) return false;
    return binarySearch(matrix[rowIndex], target);
};
// console.log(binarySearchRows( [[1]], 0  ))
function binarySearchRows(matrix, target) {
    let top = 0;
    let bottom = matrix.length - 1;
    while(top <= bottom) {
        let mid = Math.floor(top + (bottom - top) / 2);
        if(matrix[mid][0] === target) return mid;
        else if(matrix[mid][0] < target) top = mid + 1;
        else bottom = mid - 1;
    }
    return top - 1;
}
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target) return true;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}