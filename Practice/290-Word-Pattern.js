var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if(words.length !== pattern.length) {
        return false;
    }
    let uniqueWords = new Set(words).size;
    let uniqueMarkers = new Set(pattern.split('')).size;
    if(uniqueWords !== uniqueMarkers) {
        return false;
    }
    let map = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word in map) {
            if(pattern[i] !== map[word]) {
                return false;
            }
        } else {
            map[word] = pattern[i];
        }
    }
    return true;
};