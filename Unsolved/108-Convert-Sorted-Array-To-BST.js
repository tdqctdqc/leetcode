    var sortedArrayToBST = function(nums) {
        return bstRecurse(nums, 0, nums.length - 1);
    };

    var bstRecurse = function (nums, left, right) {
        console.log(`from ${left} to ${right}`);
        if(left >= right) {
            return new TreeNode(nums[right]);
        }
        if(left === right - 1) {
            let root = new TreeNode(nums[left]);
            let child = new TreeNode(nums[right]);
            root.right = child;
            return root;
        }
        let mid = Math.floor( left + (right - left) / 2);
        console.log('mid ' + mid);
        console.log('mid val ' + nums[mid]);
        let nodeLeft = bstRecurse(nums, left, mid - 1);
        let nodeRight = bstRecurse(nums, mid + 1, right);
        let node = new TreeNode(nums[mid], nodeLeft, nodeRight);

        return node;
    }