var permuteUnique = function(nums) {
    nums.sort((a,b) => a - b);
    let list = [];
    let tempIndices = new Set();
    let tempList = [];
    backtrack();
    function backtrack() {
        if(tempList.length === nums.length) {
            list.push(Array.from(tempList));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if(tempIndices.has(i)) continue;
            if(nums[i] === nums[i - 1] 
                && tempIndices.has(i - 1) === false) {
                continue;
            }
            tempIndices.add(i);
            tempList.push(nums[i]);
            backtrack();
            tempIndices.delete(i);
            tempList.pop();
        }
    }
    return list;
}