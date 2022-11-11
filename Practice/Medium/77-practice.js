var combine = function(n, k) {
    let ans = [];
    let tempList = [];
    helper(0);
    function helper(index)
    {
        if(tempList.length === k) {
            ans.push(Array.from(tempList));
            return;
        }
        if(index > n) return;
        if((n - index) + tempList.length < k) return;
        for (let i = index + 1; i <= n; i++) {
            tempList.push(i);
            helper(i);
            tempList.pop();
        }
    }
    return ans;
};