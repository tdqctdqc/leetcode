



const judgeSquareSum = (c) => {
    let low = 0;
    let high = Math.ceil(Math.sqrt(c));

    while (low <= high) {
        const sum = low ** 2 + high ** 2;
        const mid = Math.floor(low + (high - low) / 2);

        if (c > sum) {
            // c is greater than sum, so we move low to right to increase

            // if c > mid**2 + high**2, then we know low is after mid + 1
            // otherwise, we know low is between mid and low, so low + 1
            low = c > mid ** 2 + high ** 2 ? mid + 1 : low + 1;
        } else if (c < sum) {
            //c is less than sum, so we move high to left to decrease

            // if c < mid ** 2 + low ** 2, we know high isn't to right of mid, so mid -1
            // otherwise, we know high is on that right side, so high - 1
            high = c < mid ** 2 + low ** 2 ? mid - 1 : high - 1;
        } else {
            return true;
        }
    }

    return false;
};