var inorderTraversal = function(root) {
    let arr = [];
    let stack = [];
    let curr = root;
    while(curr != null || stack.length > 0) {
        while(curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        arr.push(curr.val);
        curr = curr.right;
    }
};