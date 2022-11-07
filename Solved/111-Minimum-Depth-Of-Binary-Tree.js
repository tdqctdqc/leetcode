function minDepth(root) {
    if(root === null) return 0;
    let minDepth = Infinity;
    let stack = [root];
    let path = [];
    while(stack.length > 0) {
        let curr = stack[stack.length - 1];
        if(path.length > 0 
            && path[path.length - 1] === curr) {

            if(!curr.left && !curr.right) {
                minDepth = Math.min(minDepth, path.length);
            }
            stack.pop();
            path.pop();
        } else {
            path.push(curr);
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }
    }
    return minDepth;
}

//RECURSIVE

// var minDepth = function(root) {
//     return minDepthRecurse(root, 0);
// };

// var minDepthRecurse = function(root, depth) {
//     if(root == null) return depth;

//     if(root.left === null && root.right === null) 
//         return depth + 1;

//     return Math.min(
//         root.left ? minDepthRecurse(root.left, depth + 1) : Infinity, 
//         root.right ? minDepthRecurse(root.right, depth + 1) : Infinity
//     );
// }