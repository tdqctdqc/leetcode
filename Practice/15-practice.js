var threeSum = function(nums) {
    let ans = [];
    let posSet = new Set();
    let posDoubles = new Set();
    let negSet = new Set();
    let negDoubles = new Set();
    let zeroCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if(el === 0) zeroCount++;
        else if(el < 0) {
            if(negSet.has(el)) negDoubles.add(el);
            else negSet.add(el);
        } else {
            if(posSet.has(el)) posDoubles.add(el);
            else posSet.add(el);
        }
    }
    if(zeroCount >= 3) ans.push([0,0,0]);

    if(zeroCount >= 1) {
        posSet.forEach(p => {
            if(negSet.has(-p)) {
                ans.push([-p, 0, p]);
            }
        })
    }

    negDoubles.forEach(n => {
        if(posSet.has(-n * 2)) {
            ans.push([n, n, -n * 2]);
        }
    })
    
    posDoubles.forEach(p => {
        if(negSet.has(-p * 2)) {
            ans.push([-p * 2, p, p]);
        }
    })

    negSet.forEach(n1 => {
        negSet.forEach(n2 => {
            if(n1 >= n2) return;
            if(posSet.has(-(n1 + n2))) {
                ans.push([n1, n2, -(n1 + n2)]);
            }
        })
    })

    posSet.forEach(p1 => {
        posSet.forEach(p2 => {
            if(p1 >= p2) return;
            if(negSet.has(-(p1 + p2))) {
                ans.push([-(p1 + p2), p1, p2]);
            }
        })
    })


    return ans;
}