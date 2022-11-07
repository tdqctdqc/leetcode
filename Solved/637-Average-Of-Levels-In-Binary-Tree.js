var averageOfLevels = function(root) {
    let map = [];
    if(root === null) return map;
    let stack = [root];
    let path = [];
    while(stack.length) {
        let curr = stack[stack.length - 1];
        if(path.length && path[path.length - 1] === curr) {
            let level = path.length - 1;
            processNode(curr, level, map);
            stack.pop();
            path.pop();
        } else {
            path.push(curr);
            if(curr.right) stack.push(curr.right);
            if(curr.left) stack.push(curr.left);
        }
    }
    return map.map(n => n.avg);
};

function processNode(node, level, map) {
    if(node === null) return;
    if(level in map) {
        let prevNum = map[level].num;
        let prevAvg = map[level].avg;
        let newNum = prevNum + 1;
        let newAvg = (prevNum * prevAvg + node.val) / newNum;
        map[level].num = newNum;
        map[level].avg = newAvg; 
    } else {
        map[level] = {
            num: 1,
            avg: node.val
        }
    }
}