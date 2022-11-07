// ITERATIVE

var mergeTrees = function(t1, t2) {
    if(t1 === null) return t2;
    let stack = [];
    stack.push([t1, t2]);
    while(stack.length) {
        let t = stack.pop();
        if(t[0] === null || t[1] === null) continue;
        t[0].val += t[1].val;

        if(t[0].left === null) t[0].left = t[1].left;
        else stack.push([t[0].left, t[1].left]);

        if(t[0].right === null) t[0].right = t[1].right;
        else stack.push([t[0].right, t[1].right]);
    }
    return t1;
}




//RECURSION

// var mergeTrees = function(root1, root2) {
//     return mergeTreeRecurse(root1, root2);
    
// };

// function mergeTreeRecurse(root1, root2) {
//     if(!(root1 || root2)) return null;
//     if(!root1) return root2;
//     if(!root2) return root1;
//     let node = {
//         val: root1.val + root2.val,
//         left: mergeTreeRecurse(root1.left, root2.left),
//         right: mergeTreeRecurse(root1.right, root2.right)
//     }
//     return node;
// }