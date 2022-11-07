var longestPalindrome = function(s) {
    if(s.length === 0) return '';
    let longest = s[0];
    //check even palindromes
    for (let i = 1; i < s.length; i++) {
        let l = i - 1;
        let r = i;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        l++;
        r--;
        if(l < r && (r - l + 1) > longest.length) {
            longest = s.slice(l, r+1);
        }
    }

    // check odd palindromes 
    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        while(l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        l++;
        r--;
        if(l < r && (r - l + 1) > longest.length) {
            longest = s.slice(l, r+1);
        }
    }
    return longest;
};

