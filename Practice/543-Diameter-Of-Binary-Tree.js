    var diameterOfBinaryTree = function(root) {
        if(root === null) return 0;
        let info = diameterRecurse(root);
        return Math.max(info.longestClosedPath - 1, info.longestLeftPath - 1, info.longestRightPath - 1);
    };

    function diameterRecurse(root) {
        let longestClosedPath = 1;
        let longestRightPath = 0;
        let longestLeftPath = 0;

        if(root.right) {
            right = diameterRecurse(root.right);
            longestRightPath = Math.max(right.longestLeftPath, right.longestRightPath);
            longestClosedPath = Math.max(right.longestClosedPath, longestClosedPath);
        }
        if(root.left) {
            left = diameterRecurse(root.left);
            longestLeftPath = Math.max(left.longestLeftPath, left.longestRightPath);
            longestClosedPath = Math.max(left.longestClosedPath, longestClosedPath);
        }
        longestClosedPath = Math.max(longestClosedPath, 1 + longestRightPath + longestLeftPath);
        return {
            longestClosedPath: longestClosedPath,
            longestRightPath: longestRightPath + 1,
            longestLeftPath: longestLeftPath + 1
        }
    }