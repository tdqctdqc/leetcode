var searchRange = function(nums, target) {
    let left = binarySearch(nums, target);
    if(left === nums.length || nums[left] !== target) return [-1,-1];
    let right = binarySearch(nums, target + 1);
    return [left, right - 1];
}


function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}