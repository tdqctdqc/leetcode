var isValidBST = function(root) {
    return helper(root, -Infinity, Infinity);
};

function helper(root, minVal, maxVal) {
    if(root === null) return true;
    if(root.val <= minVal) return false;
    if(root.val >= maxVal) return false;
    if(root.left && root.left.val >= root.val) {
        return false;
    }
    if(root.right && root.right.val <= root.val) {
        return false;
    }
    let rightMinVal = Math.max(minVal, root.val);
    let leftMaxVal = Math.min(maxVal, root.val);
    return helper(root.left, minVal, leftMaxVal) 
                && helper(root.right, rightMinVal, maxVal);

}

// console.log(Math.max(5, Infinity));

