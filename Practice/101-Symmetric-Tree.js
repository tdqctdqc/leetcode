var isSymmetric = function(root) {
    let leftStack = [root];
    let rightStack = [root];
    while(leftStack.length > 0 
        || rightStack.length > 0) {
        let left = leftStack.pop();
        let right = rightStack.pop();
        if(!(left || right)) continue;
        else if (!(left && right)) return false;
        else if(left.val !== right.val) return false;
        leftStack.push(left.right);
        leftStack.push(left.left);
        rightStack.push(right.left);
        rightStack.push(right.right);
    }
    return true;
}



//RECURSIVE
// var isSymmetric = function(root) {
//     return root === null || recurse(root.left, root.right);
// }

// var recurse = function(left, right) {
//     if(left == null || right == null) {
//         return left == right;
//     }
//     if(left.val !== right.val) return false;
//     return recurse(left.left, right.right) && recurse(right.left, left.right);
// }