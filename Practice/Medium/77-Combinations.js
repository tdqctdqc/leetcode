var combine = function(n, k) {
    let ans = [];
    let temp = [];
    helper(0);
    function helper(place) {
        if(temp.length + (n - place) < k) return;
        if(place > n) return;
        if(temp.length === k) {
            ans.push(Array.from(temp));
            return;
        }
        for (let i = place + 1; i <= n; i++) {
            temp.push(i);
            helper(i);
            temp.pop(i);            
        }
    }
    return ans;
};