var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    let temp = [];
    let ans = [[]];
    let activeIndices = new Set();
    helper(0);
    function helper(index) {
        if(index > nums.length - 1){
            return;
        }
        let add = true;
        if(index > 0 
            && nums[index] === nums[index - 1]
            && activeIndices.has(index - 1) === false) {
            add = false;
        }
        
        if(add) {
            temp.push(nums[index]);
            activeIndices.add(index);
            ans.push(Array.from(temp));
            helper(index + 1);
            activeIndices.delete(index);
            temp.pop();
        }
        
        helper(index + 1);
    }

    return ans;
};