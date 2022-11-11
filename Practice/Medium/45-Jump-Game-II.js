var jump = function(nums) {
    let jumps = 0;
    let curEnd = 0;
    let curFarthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        curFarthest = Math.max(curFarthest, i + nums[i]);
        if(i === curEnd) {
            jumps++;
            curEnd = curFarthest;
        }        
    }
    return jumps;
}



// var jump = function(nums) {
//     let minJumps = Infinity;
//     let jumps = 0;
//     let jumpRecord = {};
//     helper(0);
//     function helper(pos) {
//         if(pos > nums.length - 1) return;
//         if(pos === nums.length - 1) {
//             if(jumps < minJumps) minJumps = jumps;
//             return;
//         }
//         let range = nums[pos];
//         for (let i = range; i > 0; i--) {
//             if(pos + i in jumpRecord
//                 && jumpRecord[pos + i] <= jumps + 1) {
//                     continue;
//             }

//             jumps++;
//             jumpRecord[pos + i] = jumps;
//             helper(pos + i);
//             jumps--;
//         }
//     }
//     return minJumps;
// };