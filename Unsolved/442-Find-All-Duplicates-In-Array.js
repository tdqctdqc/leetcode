function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var findDuplicates = function(nums) {
    nums = nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        while(nums[i] != i + 1) {
            swap(arr, i, nums[i] - 1);
        }
    }
    return duplicates;
};