var subsets = function(nums) {
    let ans = [[]];
    let tempList = [];
    helper(0);
    function helper(index) {
        if(index > nums.length - 1) return;
        tempList.push(nums[index]);
        ans.push(Array.from(tempList));
        helper(index + 1);
        tempList.pop();
        helper(index + 1);
    }
    return ans;
};