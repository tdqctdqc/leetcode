var majorityElement = function(nums) {
    nums.sort((a,b) => a - b);
    let benchmark = Math.floor(nums.length / 3);
    let ans = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if(i > 0 && nums[i - 1] !== el) count = 0;
        if(count > benchmark) continue;
        count++;
        if(count > benchmark) ans.push(el);
        if(ans.length > 1) return ans;
    }
    return ans;
};  