var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let currMin = intervals[0][0];
    let currMax = intervals[0][1];
    let ans = [];

    for (let i = 0; i < intervals.length; i++) {
        let candMin = intervals[i][0];
        let candMax = intervals[i][1];
        if(candMin <= currMax) {
            currMax = Math.max(currMax, candMax);
        } else {
            ans.push([currMin, currMax]);
            currMin = candMin;
            currMax = candMax;
        }
    }
    ans.push([currMin, currMax]);
    return ans;
};
