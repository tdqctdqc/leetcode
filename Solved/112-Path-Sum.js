var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    let stack = [root];
    let path = [];
    let pathSum = 0;
    while(stack.length > 0) {
        let curr = stack[stack.length - 1];
        if(path.length > 0 && path[path.length - 1] === curr) {
            if(!curr.left && !curr.right) {
                if(pathSum === targetSum) return true;
            }
            stack.pop();
            path.pop();
            pathSum -= curr.val;
        } else {
            path.push(curr);
            pathSum += curr.val;
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }
    }
    return false;
}



var hasPathSumRecursive = function(root, targetSum) {
    return helper(root, targetSum, 0);
};

var helper = function(root, targetSum, runningSum) {
    if(root === null) return false;
    runningSum += root.val;
    if(root.left === null && root.right === null) {
        if(runningSum === targetSum) return true;
    }
    return helper(root.left, targetSum, runningSum)
        || helper(root.right, targetSum, runningSum);
}