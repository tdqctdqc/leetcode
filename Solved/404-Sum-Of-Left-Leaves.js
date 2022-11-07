var sumOfLeftLeaves = function(root) {
    let stack = [];
    let curr = root;
    let sum = 0;
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop(); 
        if(isLeaf(curr.left)) {
            sum += curr.left.val;
        }
        curr = curr.right;
    }
    return sum;
};

function isLeaf(node) {
    if(node === null) return false;
    return !(node.left || node.right);
}