var searchRange = function(nums, target) {
    if(nums.length === 0) return [-1, -1];
    
    let targetIndex = binarySearchLeftmost(nums, target);
    if(nums[targetIndex] !== target) return [-1, -1];
    let aboveIndex = binarySearchLeftmost(nums, target + 1);
    if(nums[aboveIndex] > target) return [targetIndex, aboveIndex - 1];
    return [targetIndex, aboveIndex];
}
// console.log(binarySearchLeftmost([0,0,1,1,1,3,3], 2))

function binarySearchLeftmost(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}