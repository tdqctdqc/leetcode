var inorderTraversal = function(root) {
    let arr = [];
    let stack = [];
    let curr = root;
    while(curr || stack.length) {
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