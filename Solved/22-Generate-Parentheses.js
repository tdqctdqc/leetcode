function generateParenthesis(n) {
    let stack = [];
    let ans = [];
    backtrack(ans, stack, 0, 0, n);
    return ans;
}
function backtrack(ans, stack, numOpen, numClose, max) {
    if(numOpen === max && numClose === max) {
        ans.push(stack.join(''));
        return;
    }
    if(numOpen < max) {
        stack.push('(');
        backtrack(ans, stack, numOpen + 1, numClose, max);
        stack.pop();
    }
    if(numClose < numOpen) {
        stack.push(')');
        backtrack(ans, stack, numOpen, numClose + 1, max);
        stack.pop();
    }
}


//SPECIAL
// var generateParenthesis = function(n) {
    
//     if(n === 1) return ['()'];
//     let single = '()';
//     let subs = generateParenthesis(n - 1);
//     let set = new Set();
//     for (let i = 0; i < subs.length; i++) {
//         let sub = subs[i];
//         for (let j = 0; j < sub.length + 1; j++) {
//             let newPerm = sub.slice(0, j) + single + sub.slice(j);
//             set.add(newPerm);
//         }
//     }
//     // console.log(set);
//     return Array.from(set);
// };

console.log(generateParenthesis(3));