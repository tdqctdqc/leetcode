var jump = function(nums) {
    let curFarthest = 0;
    let curEnd = 0;
    let jumps = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        curFarthest = Math.max(curFarthest, i + nums[i]);
        if(i === curEnd) {
            jumps++;
            curEnd = curFarthest;
        }   
    }
    return jumps;
}