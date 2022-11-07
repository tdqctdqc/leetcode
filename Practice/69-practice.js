var mySqrt = function(x) {
    let start = 0;
    let end = x;
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let square = mid * mid;
        if(square === x) return mid;
        if(square < x) {
            if((mid+1) * (mid+1) > x) return mid;
            start = mid + 1;
        } else {
            if((mid - 1) * (mid - 1) < x) return mid - 1;
            end = mid - 1;
        }
    }
    return start;
}
