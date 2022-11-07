var majorityElement = function(nums) {
    let majority = Math.floor(nums.length / 2);
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        counts[num] = (counts[num] || 0) + 1;
        if(counts[num] > majority) return num;
    }
};