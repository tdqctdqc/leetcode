var countAndSay = function(n) {
    if(n === 1) return "1";

    let prevAns = countAndSay(n - 1);
    let ans = "";
    for (let index = 0; index < prevAns.length; index++) {
        let start = index;
        let count = 1;
        while(index < prevAns.length - 1 
            && prevAns[index] === prevAns[index + 1]) {
            count++;
            index++;
        }
        ans += count + prevAns[start];
    }
    return ans;
};

console.log(countAndSay(4));

function getDigitCounts (str) {

}