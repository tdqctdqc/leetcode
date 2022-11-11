var sortColors = function(nums) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroCount++;
            oneCount++;
        }
        else if(nums[i] === 1){ 
            oneCount++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if(i < zeroCount) nums[i] = 0;
        else if(i < oneCount) nums[i] = 1;
        else nums[i] = 2;
    }
};
// sortColors([1,2,0,2,1,2,0]);
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
//can just use quick sort in place too