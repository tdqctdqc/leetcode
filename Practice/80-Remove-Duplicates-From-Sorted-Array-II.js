var removeDuplicates = function(nums) {
    let startRun = 0;
    let endRun = 0;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            endRun++;
        } else {
            wipe(startRun, endRun);
            startRun = i;
            endRun = i;
        }
    }
    wipe(startRun, endRun);
    function wipe(startRun, endRun) {
        let count = endRun - startRun + 1;
        if(count < 3) return;
        for (let j = 0; j <= count - 3; j++) {
            nums[endRun - j] = null; 
        }
    }

    let switchIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(i !== switchIndex && num !== null) {
            swap(nums, i, switchIndex);
        }
        if(num !== null) switchIndex++;
    }
    return switchIndex;
};
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(removeDuplicates([1,2,2,2,3,3,3,3]))