var combinationSum = function(candidates, target) {
    let ans = [];
    let subset = [];
    let sum = 0;
    helper(0);
    function helper(start) {
        if(sum === target) {
            ans.push(Array.from(subset));
            return;
        }
        if(start >= candidates.length) return;
        if(sum > target) return;

        subset.push(candidates[start]);
        sum += candidates[start];
        helper(start);

        subset.pop();
        sum -= candidates[start];
        helper(start + 1);
    }
    return ans;
}