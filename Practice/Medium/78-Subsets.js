var subsets = function(nums) {
    let length = nums.length;
    let ans = [];
    for (let i = 0; i < 2 ** length; i++) {
        const subAns = [];
        let bitmask = i.toString(2);
        bitmask = bitmask.padStart(length, '0');
        for (let j = 0; j <= length; j++) {
            if(bitmask[j] === '1') subAns.push(nums[j]);
        }
        ans.push(subAns);
    }
    return ans;
};

subsets([1,2,3]);
