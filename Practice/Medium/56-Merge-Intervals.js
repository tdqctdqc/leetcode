var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let ans = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if( overlap(intervals[i], ans[ans.length - 1]) ) {
            let merged = mergeIntervals(intervals[i], ans[ans.length - 1]);
            ans.pop();
            ans.push(merged);
        } else {
            ans.push(intervals[i]);
        }
    }
    return ans;
};


function overlap(i1, i2) {
    if(i1[0] <= i2[0]) {
        return i2[0] <= i1[1];
    }
    return i1[0] <= i2[1];
}
function mergeIntervals(i1, i2) {
    return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])];
}