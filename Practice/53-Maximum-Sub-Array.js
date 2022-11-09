var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
};