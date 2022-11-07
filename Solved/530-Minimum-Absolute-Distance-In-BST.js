var getMinimumDifference = function(root) {


    return getInfo(root).minDiff;
};

function getInfo(root) {
    let minDiff = Infinity;
    let maxVal = -Infinity;
    let minVal = Infinity;

    if(root.left) {
        let leftInfo = getInfo(root.left);
        minVal = leftInfo.minVal;
        let leftMinDiff = Math.abs(root.val - leftInfo.maxVal);
        minDiff = Math.min(minDiff, leftMinDiff, leftInfo.minDiff);
    } else {
        minVal = root.val;
    }

    if(root.right) {
        let rightInfo = getInfo(root.right);
        maxVal = rightInfo.maxVal;
        let rightMinDiff = Math.abs(root.val - rightInfo.minVal);
        minDiff = Math.min(minDiff, rightMinDiff, rightInfo.minDiff);
    } else {
        maxVal = root.val;
    }
    return {
        minDiff: minDiff,
        minVal: minVal,
        maxVal: maxVal
    };
}

function getLeftmostVal(root) {
    while(root.left) root = root.left;
    console.log('leftmost ' + root.val);
    return root.val;
}

function getRightmostVal(root) {
    while(root.right) root = root.right;
    console.log('rightmost ' + root.val);

    return root.val;
}