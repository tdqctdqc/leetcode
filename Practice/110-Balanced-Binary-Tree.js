var isBalanced = function(root) {
    return getHeight(root, 1) > 0;
};

function getHeight(root, height) {
    if(root === null) return height;
    let leftHeight = getHeight(root.left, height + 1);
    let rightHeight = getHeight(root.right, height + 1);

    if(leftHeight < 0 
        || rightHeight < 0 
        || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    return Math.max(leftHeight, rightHeight);
}