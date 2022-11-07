var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    let letterLookup = {
        '2' : ['a', 'b', 'c'],
        '3' : ['d', 'e', 'f'],
        '4' : ['g', 'h', 'i'],
        '5' : ['j', 'k', 'l'],
        '6' : ['m', 'n', 'o'],
        '7' : ['p', 'q', 'r', 's'],
        '8' : ['t', 'u', 'v'],
        '9' : ['w', 'x', 'y', 'z']
    }
    let leaves = [];
    function expandNode(accumulatedLetters, index) {
        if(index === digits.length) {
            leaves.push(accumulatedLetters);
            return;
        }
        let possNextLetters = letterLookup[digits[index]];
        possNextLetters.forEach(nextLetter => {
            expandNode(accumulatedLetters + nextLetter, index + 1, digits, leaves);
        });
    }
    expandNode('', 0);
    return leaves;
}
letterCombinations('234');
