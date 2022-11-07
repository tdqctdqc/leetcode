var inorderTraversal = function(root) {
    let arr = [];
    let curr = root;
    let stack = [];
    while(curr != null || stack.length > 0) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        arr.push(curr.val);
        curr = curr.right;
    }
    return arr;
};