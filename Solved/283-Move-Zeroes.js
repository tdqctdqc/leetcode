var moveZeroes = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === 0) continue;
        let swapIndex = i;
        while(swapIndex > 0 && nums[swapIndex - 1] === 0) {
            swapIndex--;
        }
        if(swapIndex !== i) swap(nums, i, swapIndex);
    }
    return nums;
};

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}