var maxDepth = function(root) { 
    let stack = [root];
    let path = [];
    let maxDepth = 0;
    while(stack.length > 0) {
        let curr = stack[stack.length - 1];
        if(path.length > 0 
        && path[path.length - 1] === curr) {
            if(!curr.left && !curr.right) {
                maxDepth = Math.max(maxDepth, path.length);
            } 
            stack.pop();
            path.pop();
        } else {
            path.push(curr);
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }      
    }
    return maxDepth;
}


//RECURSIVE

// var maxDepth = function(root) {
//     return depthRecurse(0, root);
// };

// var depthRecurse = function(depth, root) {
//     if(root === null) return depth;
//     return Math.max(depthRecurse(depth + 1, root.left), depthRecurse(depth + 1, root.right));
// }