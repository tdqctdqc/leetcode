var combinationSum2 = function(candidates, target) {
    let ans = [];
    let subset = [];
    let sum = 0;
    candidates.sort((a,b) => a - b);

    function helper(start) {
        if(sum === target) {
            ans.push(Array.from(subset));
            return;
        }
        if(start > candidates.length - 1) return;
        if(sum > target) return;
        let count = 1;
        let index = start;
        while(index < candidates.length - 1
                && candidates[index + 1] === candidates[start]) {
            count++;
            index++;
        }
        for (let i = 0; i < count; i++) {
            sum += candidates[start];
            subset.push(candidates[start]);
            helper(start + count);
        }

        // sum += candidates[start];
        // subset.push(candidates[start]);
        // helper(start + 1);

        

        for (let i = 0; i < count; i++) {
            sum -= candidates[start];
            subset.pop();
        }
        helper(start + count);
    }
    helper(0);
    return ans;
};


