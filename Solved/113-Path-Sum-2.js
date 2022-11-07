var pathSum = function(root, targetSum) {
    if(root === null) return [];
    let goodPaths = [];
    let stack = [root];
    let path = [];
    while(stack.length > 0) {
        let curr = stack[stack.length - 1];
        if(path.length > 0 
            && path[path.length - 1] === curr) {
            if(!curr.left && !curr.right) {
                let pathSum = getPathSum(path);
                if(pathSum === targetSum) {
                    goodPaths.push([...path.map(p => p.val)]);
                }
            }
            stack.pop();
            path.pop()
        } else {
            path.push(curr);
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }
    }
    return goodPaths;
};


function getPathSum(path) {
    let pathSum = 0;
    for (let i = 0; i < path.length; i++) {
        pathSum += path[i].val;
    }
    return pathSum;
}