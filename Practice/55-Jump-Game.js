var canJump = function(nums) {
    if(nums.length === 1) return true;
    let curEnd = 0;
    let curFarthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let maxRange = nums[i] + i;
        if(maxRange > curFarthest) {
            curFarthest = maxRange;
        }
        if(curFarthest >= nums.length - 1) return true;
        if(i === curEnd){ 
            if(curEnd === curFarthest) return false;
            curEnd = curFarthest;
        }
    }
    return false;
};

