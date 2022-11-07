var preorderTraversal = function(root) {
    if(root === null) return [];
    let vals = [];
    let stack = [];
    let curr = root;
    while(curr || stack.length > 0) {
        while(curr) {
            vals.push(curr.val);
            stack.push(curr.right);
            curr = curr.left;
        } 
        if(stack.length > 0) {
            curr = stack.pop();
        }
    }
    return vals;
};