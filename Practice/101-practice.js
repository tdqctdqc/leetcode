var isSymmetric = function(root) {
    let leftStack = [root];
    let rightStack = [root];
    while(leftStack.length || rightStack.length) {
        let currLeft = leftStack.pop();
        let currRight = rightStack.pop();
        if(!(currLeft || currRight)) continue;
        if(!(currLeft && currRight)) return false;
        if(currLeft.val !== currRight.val) return false;

        leftStack.push(currLeft.left);
        leftStack.push(currLeft.right);
        rightStack.push(currRight.right);
        rightStack.push(currRight.right);
    }
    return true;
}