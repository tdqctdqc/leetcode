var threeSumClosest = function(nums, target) {
    let minDiff = Infinity;
    let minSum = 0;
    nums.sort((a,b) => a - b);
    for (let i = 1; i < nums.length - 1; i++) {
        const mid = nums[i];
        let leftIndex = i - 1;
        let rightIndex = i + 1;
        while(leftIndex >= 0 && rightIndex < nums.length) {
            let sum = mid + nums[leftIndex] + nums[rightIndex];
            let diff = Math.abs(sum - target);
            if(diff === 0) return sum;
            if(diff < minDiff) {
                minDiff = diff;
                minSum = sum;
            }
            if(sum > target) leftIndex--;
            else rightIndex++;
        }
    }
    return minSum;
}