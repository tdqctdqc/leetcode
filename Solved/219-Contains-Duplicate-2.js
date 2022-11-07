var containsNearbyDuplicate = function(nums, k) {
    let indices = {};
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if(el in indices) {
            let j = indices[el];
            if(Math.abs(i - j) <= k) return true;
        }
        indices[el] = i;
    }
    return false;
};