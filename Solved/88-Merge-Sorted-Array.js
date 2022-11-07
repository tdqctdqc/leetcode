function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
var merge = function(nums1, m, nums2, n) {
    for (let i = m - 1; i >= 0; i--) {
        swap(nums1, i, i + n);
    }
    let mIndex = n;
    let nIndex = 0;
    let writeIndex = 0;
    while(mIndex < m + n && nIndex < n) {
        if(nums1[mIndex] < nums2[nIndex]) {
            nums1[writeIndex] = nums1[mIndex];
            mIndex++;
        } else {
            nums1[writeIndex] = nums2[nIndex];
            nIndex++;
        }
        writeIndex++;
    }
    while(mIndex < m + n) {
        nums1[writeIndex] = nums1[mIndex];
        mIndex++;
        writeIndex++;
    }
    while(nIndex < n) {
        nums1[writeIndex] = nums2[nIndex];
        nIndex++;
        writeIndex++;
    }
};

merge([1,2,3,0,0], 3, [1,2], 2)