var search = function(nums, target) {
    if(nums.length === 0) return false;
    if(nums.length === 1) return nums[0] === target;
    let pivot = -1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i - 1] > nums[i]) {
            pivot = i;
            break;
        }
    }
    if(pivot === -1) return binarySearch(nums, 0, nums.length - 1, target);
    if(target <= nums[nums.length - 1]) {
        return binarySearch(nums, pivot, nums.length - 1, target);
    } else {
        return binarySearch(nums, 0, pivot - 1, target);
    }
};

function binarySearch(arr, start, end, target) {
    let left = start;
    let right = end;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target) return true;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}