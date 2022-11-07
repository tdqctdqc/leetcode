var maxProfit = function(prices) {
    let highestPriceToCome = getHighestPriceToCome(prices);
    let lowestPriceBefore = getLowestPriceBefore(prices);
    let profits = highestPriceToCome.map((v, i) => v - lowestPriceBefore[i]);
    return profits.reduce((a, b) => Math.max(a,b));
};
// maxProfit([3, 5, 1, 7, 3, 8, 4]);
function getHighestPriceToCome(prices) {
    let highs = [...prices];
    for (let i = highs.length - 1; i > 0; i--) {
        if(highs[i] > highs[i-1]) {
            highs[i - 1] = highs[i];
        }
    }
    return highs;
}
function getLowestPriceBefore(prices) {
    let lows = [...prices];
    for (let i = 0; i < lows.length - 1; i++) {
        if(lows[i] < lows[i+1]) {
            lows[i + 1] = lows[i];
        }
    }
    return lows;
}