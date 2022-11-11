var grayCode = function(n) {
    let combs = getCombs(n);
    return combs.map(c => parseInt(c, 2));
};

function getCombs(n) {
    if(n === 1) return ['0','1'];
    let prev = getCombs(n - 1);
    let prevRev = [...prev].reverse();
    return [...prev.map(p => '0' + p),...prevRev.map(p => '1' + p), 
            ];
}