var recoverTree = function(root) {
    let arr = [];
    let curr = root;
    let stack = [];
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        arr.push(curr.val);
        curr = curr.right;
    }
    console.log(arr);
};