function judgeSquareSum(c) {
    let left = 0;
    let right = Math.ceil(Math.sqrt(c));
    while(left <= right) {
        let val = left * left + right * right;
        let mid = Math.floor(left + (right - left) / 2);

        if(val < c) {
            let test = mid * mid + high * high;
            left = c > test ? mid + 1 : left + 1;
        } else if (val > c) {
            let test = mid * mid + low * low;
            right = c < test ? mid - 1 : right - 1;
        } else {
            return true;
        }
    }
    return false;
}