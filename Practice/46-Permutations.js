// https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)


var permute = function(nums) {
    let list = [];
    backtrack(list, [], new Set(), nums);
    return list;
};  

function backtrack(list, tempList, tempIndexSet, nums) {
    if(tempList.length === nums.length) {
        list.push(Array.from(tempList));
    } else {
        for (let i = 0; i < nums.length; i++) {
            if(tempIndexSet.has(i)) continue;
            tempIndexSet.add(i);
            tempList.push(nums[i]);
            backtrack(list, tempList, tempIndexSet, nums);
            tempList.pop();
            tempIndexSet.delete(i);
        }
    }
}




var perms = permute([1,2,3]);
perms.forEach(p => console.log(p));


