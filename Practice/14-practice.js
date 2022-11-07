var longestCommonPrefix = function(strs) {
    let first = strs[0];
    let prefixLength = 0;
    for (let i = 0; i < first.length; i++) {
        const char = array[i];
        let match = true;
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== char) {
                match = false;
                break;
            }
        }
        if(match === false) break;
        prefixLength++;
    }
    return first.slice(0, prefixLength);
};
