//SOLVED

var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right) {
        let area = (right - left) * Math.min(height[right], height[left]);
        maxArea = Math.max(maxArea, area);
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};