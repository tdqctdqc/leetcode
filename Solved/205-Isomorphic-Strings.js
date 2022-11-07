var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    let matchesByS = {};
    let matchesByT = {};
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        let sMatch = sChar in matchesByS;
        let tMatch = tChar in matchesByT;
        if(sMatch !== tMatch) return false;
        if(sChar in matchesByS === false) {
            matchesByS[sChar] = tChar;
            matchesByT[tChar] = sChar;
        } else if(tChar !== matchesByS[sChar]
                || sChar !== matchesByT[tChar]) {
            return false;
        } 
    }
    return true;
};