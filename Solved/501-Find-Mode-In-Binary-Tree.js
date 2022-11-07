var findModeRecursive = function (root) {
    let vals = {};
    findModeRecurse(root, vals);
    let valsByOccurrence = Object.keys(vals)
                .sort((a,b) => vals[b] - vals[a]);
    let maxOccurrence = vals[valsByOccurrence[0]];
    let index = 0;
    while(index < valsByOccurrence.length 
        && vals[valsByOccurrence[index]] === maxOccurrence) {
        index++;
    }
    return valsByOccurrence.slice(0, index);
}
var findModeRecurse = function (root, vals) {
    if(root === null) return;
    processNode(root, vals);
    findModeRecurse(root.left, vals);
    findModeRecurse(root.right, vals);
}
function processNode(node, vals) {
    if(node === null) return;
    vals[node.val] = (vals[node.val] || 0) + 1;
}


var findModeIterative = function(root) {
    if(root === null) return [];
    let vals = {};
    let stack = [];
    let curr = root;
    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        processNode(curr, vals);
        curr = curr.right;
    }
    let valsByOccurrence = Object.keys(vals)
                .sort((a,b) => vals[b] - vals[a]);
    let maxOccurrence = vals[valsByOccurrence[0]];
    let index = 0;
    while(index < valsByOccurrence.length 
        && vals[valsByOccurrence[index]] === maxOccurrence) {
        index++;
    }
    return valsByOccurrence.slice(0, index);
};

