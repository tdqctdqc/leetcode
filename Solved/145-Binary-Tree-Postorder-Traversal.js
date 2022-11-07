var postorderTraversal = function(root) {
    if(root === null) return [];
    let stack = [root];
    let path = [];
    let vals = [];
    while(stack.length > 0) {
        let curr = stack[stack.length - 1];
        if(path.length > 0 && path[path.length - 1] === curr) {
            vals.push(curr.val);
            stack.pop();
            path.pop();
        } else {
            path.push(curr);
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }
    }
    return vals;
};