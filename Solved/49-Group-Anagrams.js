var groupAnagrams = function(strs) {
    let sigs = {};
    let ans = [];
    for (let i = 0; i < strs.length; i++) {
        const sig = sortString(strs[i]);
        if(sig in sigs === false) {
            sigs[sig] = [];
            ans.push(sigs[sig]);
        }
        sigs[sig].push(strs[i]);
    }
    return ans;
};


function sortString(str) {
    return Array.from(str).sort().join('');
}
