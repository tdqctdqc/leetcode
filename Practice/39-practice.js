var combinationSum = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    let ans = [];
    let subset = [];
    helper(0, candidates, target, 0, ans, subset);
    return ans;
}

function helper(start, candidates, target, sum, ans, subset) {
    //checks
    if(sum === target) {
        ans.push(Array.from(subset));
        return;
    }
    
    if(start >= candidates.length) return;

    if(sum > target) return;

    //include
    sum += candidates[start];
    subset.push(candidates[start]);
    helper(start, candidates, target, sum, ans, subset);

    //exclude 
    sum -= candidates[start];
    subset.pop();
    helper(start + 1, candidates, target, sum, ans, subset);
}