var generateTrees = function(n) {
    return getTrees(1, n);
};

function getTrees(min, max) {
    if(min > max) return null;
    if(min === max) return [new TreeNode(min)];
    let ans = [];
    for (let i = min; i <= max; i++) {
        if(i === min) {
            let rightTrees = getTrees(i + 1, max);
            rightTrees.forEach(rt => {
                let node = new TreeNode(i, null, rt);
                ans.push(node);
            })
        }
        else if(i === max) {
            let leftTrees = getTrees(min, i - 1);
            leftTrees.forEach(lt => {
                let node = new TreeNode(i, lt, null);
                ans.push(node);
            })
        } else {
            let leftTrees = getTrees(min, i - 1);
            leftTrees.forEach(lt => {
                let rightTrees = getTrees(i + 1, max);
                rightTrees.forEach(rt => {
                    let node = new TreeNode(i, lt, rt);
                    ans.push(node);
                })
            })
        }
    }
    return ans;
}
