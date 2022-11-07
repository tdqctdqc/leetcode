var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
     function isFirstBadVersion(n) {
        if(isBadVersion(n)) {
            if(n === 1) return n;
            else return (!isBadVersion(n - 1));
        }
        return false;
    }
    return function(n) {
        let left = 1;
        let right = n;
        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if(isFirstBadVersion(mid)) return mid;
            else if(isBadVersion(mid)) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    };
};

