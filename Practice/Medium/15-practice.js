var threeSum = function(nums) {
    let zeroCount = 0;
    let poses = new Set();
    let posDoubles = new Set();
    let negs = new Set();
    let negDoubles = new Set();
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if(n === 0) zeroCount++;
        else if(n > 0) {
            if(poses.has(n)) posDoubles.add(n);
            poses.add(n);
        } else {
            if(negs.has(n)) negDoubles.add(n);
            negs.add(n);
        }
    }

    if(zeroCount > 2) ans.push([0,0,0]);
    if(zeroCount > 0) {
        poses.forEach(p => {
            if(negs.has(-p)) ans.push([-p, 0, p]);
        })
    }
    poses.forEach(p1 => {
        poses.forEach(p2 => {
            if(p1 >= p2) return;
            let reverse = -(p1 + p2);
            if(negs.has(reverse)) ans.push([reverse, p1, p2]);
        })
    })
    negs.forEach(n1 => {
        negs.forEach(n2 => {
            if(n1 >= n2) return;
            let reverse = -(n1 + n2);
            if(poses.has(reverse)) ans.push([n1, n2, reverse]);
        })
    })
    posDoubles.forEach(p => {
        let reverse = -2 * p;
        if(negs.has(reverse)) ans.push([reverse, p, p]);
    })
    negDoubles.forEach(n => {
        let reverse = -2 * n;
        if(poses.has(reverse)) ans.push([n, n, reverse]);
    })
    return ans;
}