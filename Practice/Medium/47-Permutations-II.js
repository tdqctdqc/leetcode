var permuteUnique = function(nums) {
    let list = [];
    nums.sort((a,b) => a - b);
    let used = [];
    for (let i = 0; i < nums.length; i++) {
        used.push(false);
    }
    backtrack(list, [], nums, used);
    return list;
};

function backtrack(list, tempList, nums, used) {
    if(tempList.length === nums.length) {
        list.push(Array.from(tempList));
    } else {
        for (let i = 0; i < nums.length; i++) {
            if(used[i] 
                || (nums[i] === nums[i - 1] && !used[i - 1])) {
                continue;
            }
            used[i] = true;
            tempList.push(nums[i]);
            backtrack(list, tempList, nums, used);
            tempList.pop();
            used[i] = false;
        }
    }
}