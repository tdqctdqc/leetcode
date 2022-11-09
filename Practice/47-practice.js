var permuteUnique = function(nums) {
    let list = [];
    nums.sort((a,b) => a - b);
    backtrack(list, [], new Set(), nums);
    return list;
}

function backtrack(list, tempList, tempIndices, nums) {
    if(tempList.length === nums.length) {
        list.push(Array.from(tempList));
    } else {
        for (let i = 0; i < nums.length; i++) {
            if(tempIndices.has(i) 
                || (tempIndices.has(i - 1) === false && nums[i] === nums[i - 1])) {
                    continue;
            }            
            tempIndices.add(i);
            tempList.push(nums[i]);
            backtrack(list, tempList, tempIndices, nums);
            tempList.pop();
            tempIndices.delete(i);
        }
    }
}