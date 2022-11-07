var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        const set = new Set();
        for (let j = i; j < s.length; j++) {
            const element = s[j];
            if(set.has(element)) break;
            else {
                set.add(element);
            }
        }
        if(set.size > longest) longest = set.size;
    }
    return longest;
};