var mySqrt = function(x) {
    let start = 0;
    let end = x;
    let mid = Math.floor(start + (end-start)/2);
    let ans = -1;
    while(start<=end){
        let square = Math.floor(mid*mid);
        if(square == x){
            return mid;
        } else if (square > x){
            end = mid-1;
            mid = Math.floor(start + (end-start)/2);
        } else {
            start = mid+1;
            ans = mid;
            mid = Math.floor(start + (end-start)/2);
        }
    }
    return ans;
};