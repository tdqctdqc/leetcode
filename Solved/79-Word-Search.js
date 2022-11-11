var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let visited = getVisitedMap(m,n);
    let temp = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if(board[j][i] === word[0])
            {
                if(helper(i,j)) return true;
            }
        }
    }
    return false;
    function helper(x,y) {
        let searchingFor = word[temp.length];
        if(board[y][x] !== searchingFor) return false;

        temp.push(board[y][x]);
        if(temp.length === word.length) return true;
        visit(x,y);

        if(legalMove(x, y - 1) && helper(x, y - 1)) {
            return true;
        }
        if(legalMove(x, y + 1) && helper(x, y + 1)) {
            return true;
        }
        if(legalMove(x - 1, y) && helper(x - 1, y)) {
            return true;
        }
        if(legalMove(x + 1, y) && helper(x + 1, y)) {
            return true;
        }
        unvisit(x,y);
        temp.pop();
        return false;
    }
    function legalMove(x,y) {
        if(x < 0 || x >= n || y < 0 || y >= m) {
            return false;
        }
        else if(visited[y][x] === 1) {
            return false;
        }
        else return true;
    }
    function visit(x,y) {
        visited[y][x] = 1;
        // console.log(visited);
    }
    function unvisit(x,y) {
        visited[y][x] = 0;
        // console.log(visited);
    }
};
function getVisitedMap(m,n) {
    let map = [];
    for (let j = 0; j < m; j++) {
        map.push(Array(n).fill(0));        
    }
    return map;
}
