var search = function(nums, target) {
    let pivoted = nums[0] > nums[nums.length - 1];
    if(pivoted === false) {
        return binarySearch(nums, 0, nums.length - 1, target);
    } else {
        let pivot = findPivot(nums);
        if(target === nums[pivot]) return pivot;
        if(target > nums[nums.length - 1]) {
            return binarySearch(nums, 0, pivot, target);
        } else {
            return binarySearch(nums, pivot + 1, nums.length - 1, target)
        }
    }
};

function binarySearch(arr, start, end, target) {
    let left = start;
    let right = end;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target) return mid;
        if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
function findPivot(arr) {
    let left = 0;
    let right = arr.length - 2;
    let firstVal = arr[0];
    let lastVal = arr[arr.length - 1];
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(isPivot(mid, arr)) return mid;
        if(arr[mid] < firstVal) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}

function isPivot(index, arr) {
    return arr[index] > arr[index + 1];
}