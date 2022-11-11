var permute = function(nums) {
    let list = [];
    let tempList = [];
    let tempIndices = new Set();
    backtrack();
    function backtrack() {
        if(tempList.length === nums.length) {
            list.push(Array.from(tempList));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if(tempIndices.has(i)) continue;
            tempList.push(nums[i]);
            tempIndices.add(i);            
            backtrack();
            tempList.pop();
            tempIndices.delete(i);
        }
    }
    return list;
}