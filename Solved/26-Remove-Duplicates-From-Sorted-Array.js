var removeDuplicates = function (nums) {
    let placeIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums [i - 1]) {
            nums[placeIndex] = nums[i];
            placeIndex++;
        }
    }
    return placeIndex;
};

