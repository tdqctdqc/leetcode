var permute = function(nums) {
    let list = [];
    backtrack(list, [], new Set(), nums);
    return list;
}

function backtrack(list, tempList, tempIndices, nums) {
    if(tempList.length === nums.length) {
        list.push(Array.from(tempList));
    } else {
        for (let i = 0; i < nums.length; i++) {
            if(tempIndices.has(i)) continue;
            tempIndices.add(i);
            tempList.push(nums[i]);
            backtrack(list, tempList, tempIndices, nums);
            tempList.pop();
            tempIndices.delete(i);            
        }
    }
}