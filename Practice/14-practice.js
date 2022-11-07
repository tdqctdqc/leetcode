var longestCommonPrefix = function(strs) {
    const first = strs[0];
    let prefixLength = 0;
    for (let i = 0; i < first.length; i++) {
        const char = first[i];
        let match = true;
        for (let j = 1; j < strs.length; j++) {
            const comp = strs[j];
            if(comp[j] !== char){ match = false; break; }
        }
        if(match == false) break;
        prefixLength++;
    }
    return first.slice(0, prefixLength);
};
