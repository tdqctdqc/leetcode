var insert = function(intervals, newInterval) {
    if(intervals.length === 0) return [newInterval];
    let insertIndex = binarySearch(intervals, newInterval[0]);
    console.log(insertIndex);
    intervals.splice(insertIndex, 0, newInterval);

    while(intervals.length > insertIndex + 1
        && overlap(newInterval, intervals[insertIndex + 1]))
    {
        let mergeInterval = intervals[insertIndex + 1];
        newInterval[1] = Math.max(newInterval[1], mergeInterval[1]);
        intervals.splice(insertIndex + 1, 1);
    }
    let backIter = insertIndex - 1;

    while(backIter >= 0 && overlap(newInterval, intervals[backIter])) {
        let mergeInterval = intervals[backIter];
        newInterval[0] = mergeInterval[0];
        newInterval[1] = Math.max(newInterval[1], mergeInterval[1]);
        intervals.splice(insertIndex - 1, 1);
        insertIndex--;
        backIter--;
    }
    // console.log(intervals);
    return intervals;
}
    console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],
        [4,8]))
function overlap(i1, i2) {
    if(i1[0] <= i2[0]) {
        return i1[1] >= i2[0];
    }
    return i2[1] >= i1[0];
}
function binarySearch(intervals, insertMin) {
    let left = 0;
    let right = intervals.length - 1;

    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(intervals[mid][0] === insertMin) return mid;
        if(intervals[mid][0] < insertMin) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}