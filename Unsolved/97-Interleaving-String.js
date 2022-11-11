var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < s3.length; i++) {
        let char = s3[i];
        let match1 = index1 < s1.length 
            && s1[index1] === char;
        let match2 = index2 < s2.length 
            && s2[index2] === char;
        if(match1 && match2) {
            return isInterleave(s1.slice(index1 + 1), 
                                s2.slice(index2),
                                s3.slice(i + 1))
                    || 
                    isInterleave(s1.slice(index1), 
                                s2.slice(index2 + 1),
                                s3.slice(i + 1));
        } else if(match1) {
            index1++;
        } else if(match2) {
            index2++;
        } else {
            return false;
        }
    }
    return true;
};