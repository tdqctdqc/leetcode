var invertTree = function(root) {
    if(root === null) return root;
    let temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.left);
    invertTree(root.right);

    return root;
}