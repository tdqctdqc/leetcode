var threeSum = function(nums) {
    let posSet = new Set();
    let posDoublesSet = new Set();
    let zeroCount = 0;
    let negSet = new Set();
    let negDoublesSet = new Set();
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if(n > 0){ 
            if(posSet.has(n)) posDoublesSet.add(n);
            else posSet.add(n);
        }
        else if(n < 0){ 
            if(negSet.has(n)) negDoublesSet.add(n);
            else negSet.add(n);
        }
        else zeroCount++;
    }

    if(zeroCount >= 3) ans.push([0,0,0]);
    if(zeroCount >= 1) {
        posSet.forEach(p => {
            if(negSet.has(-p)) {
                ans.push([-p, 0, p]);
            }
        })
    }
    posDoublesSet.forEach(p =>{
        if(negSet.has(-p * 2)) {
            ans.push([-p*2, p, p]);
        }
    })
    negDoublesSet.forEach(n => {
        if(posSet.has(-n * 2)) {
            ans.push([n, n, -n * 2]);
        }
    })

    posSet.forEach(p1 => {
        posSet.forEach(p2 => {
            if(p1 >= p2) return;
            if(negSet.has(-(p1 + p2))) {
                ans.push([-(p1 + p2), p1, p2]);
            }
        });
    });
    negSet.forEach(n1 => {
        negSet.forEach(n2 => {
            if(n1 >= n2) return;
            if(posSet.has(-(n1 + n2))) {
                ans.push([n1, n2, -(n1 + n2)]);
            }
        });
    });


    return ans;
};