var insert = function(intervals, newInterval) {
    let insertIndex = binarySearch(intervals, newInterval);
    intervals.splice(insertIndex, 0, newInterval);
    console.log(intervals);
    let ans = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        if(overlap(intervals[i], ans[ans.length - 1])) {
            let merged = mergeIntervals(ans[ans.length - 1], intervals[i]);
            ans.pop();
            ans.push(merged);
        } else {
            ans.push(intervals[i]);
        }
    }
    return ans;
};

function binarySearch(intervals, interval) {
    let left = 0; 
    let right = intervals.length - 1;
    let target = interval[0];
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let sample = intervals[mid][0];
        if(sample === target) return mid;
        if(sample < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
}
function overlap(i1, i2) {
    if(i1[0] <= i2[0]) {
        return i2[0] <= i1[1];  
    }
    return i1[0] <= i2[1];
}

function mergeIntervals(i1, i2) {
    return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])];
}