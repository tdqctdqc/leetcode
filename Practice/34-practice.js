var searchRange = function(nums, target) {
    let floor = binarySearchLeftmost(nums, target);
    if(floor > nums.length - 1 || nums[floor] !== target) 
        return [-1, -1];
    let ceil = binarySearchLeftmost(nums, target + 1);
    return [floor, ceil - 1];
}

function binarySearchLeftmost(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}