var countBits = function(n) {
    if(n === 0) return [0];
    if(n === 1) return [0, 1];
    let ans = [0, 1];

    let index = 2;
    let newStored = [];
    let stored = [1];
    while(index <= n) {
        newStored.length = 0;
        for (let i = 0; i < stored.length; i++) {
            newStored.push(stored[i]);
            ans.push(stored[i]);
            index++;
        }
        for (let i = 0; i < stored.length; i++) {
            newStored.push(stored[i] + 1);
            ans.push(stored[i] + 1);
            index++;
        }
        let temp = stored;
        stored = newStored;
        newStored = temp;
    }
    return ans.slice(0, n + 1);
};

    