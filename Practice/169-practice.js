var majorityElement = function(nums) {
    let counts = {};
    let majority = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        counts[el] = (counts[el] || 0) + 1;
        if(counts[el] > majority) return el;
    }
}