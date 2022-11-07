var tree2str = function(root) {
    if(root === null) return '';
    return recurse(root, '');
};

function recurse(root) {
    let str = '' + root.val;
    if(!(root.left || root.right)) {
        return str;
    } 
    if(!root.left) {
        str += '()';
    } else {
        str += '(' + recurse(root.left) + ')';
    }
    if(root.right) {
        str += '(' + recurse(root.right) + ')'; 
    }
    return str;
}