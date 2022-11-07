var binaryTreePaths = function (root) {
    let stack = [];
    
}















//RECURSIVE

// var binaryTreePaths = function(root) {
//     let paths = [];
//     let path = '';
//     binaryTreePathsRecurse(root, path, paths);
//     return paths;
// };

// function binaryTreePathsRecurse(node, path, paths) {
//     if(node === null) return;

//     path += '' + node.val;

//     if(node.left === null && node.right === null) {
//         paths.push(path);
//         return;
//     }
//     path += '->' + node.val;
//     binaryTreePathsRecurse(node.left, path, paths);
//     binaryTreePathsRecurse(node.right, path, paths);
// }