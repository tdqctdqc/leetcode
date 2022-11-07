function isSameTree(root1, root2) {

    let stack1 = [root1];
    let stack2 = [root2];
    while(stack1.length || stack2.length) {
        let curr1 = stack1.pop();
        let curr2 = stack2.pop();
        if(!(curr1 || curr2)) continue;
        if(!(curr1 && curr2)) return false;
        if(curr1.val != curr2.val) return false;
        stack1.push(curr1.left);
        stack1.push(curr1.right);
        stack2.push(curr2.left);
        stack2.push(curr2.right);
    }
    return true;
}


//RECURSIVE
var isSameTree = function(p, q) {
    
    return recurse(p,q);
};

function recurse(p, q) {
    if(p === null) {
        if(q === null) return true;
        return false;
    } 
    if(q === null) return false;
    if(p.val != q.val) return false;
    return recurse(p.left, q.left) && recurse(p.right, q.right);
}