var findTilt = function(root) {
    let tilt = 0;
    function tiltRecurse(root) {
        if(root === null) return 0;
        let leftSum = tiltRecurse(root.left);
        let rightSum = tiltRecurse(root.right);
        tilt += Math.abs(leftSum - rightSum);
        return root.val + leftSum + rightSum;
    }
    tiltRecurse(root);
    return tilt;
};


