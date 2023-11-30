"use strict";
function findMeanSortedArrays(nums1, nums2) {
    let mergeArray = [];
    for (let i of nums1) {
        mergeArray.push(i);
    }
    for (let i of nums2) {
        mergeArray.push(i);
    }
    mergeArray.sort((a, b) => a - b);
    let sum = 0;
    for (let i of mergeArray) {
        sum += i;
    }
    let mean = sum / mergeArray.length;
    return '[ ' + mergeArray + ' ]' + ' Mean is: ' + mean;
}
;
let result = findMeanSortedArrays([1, 2, 5, 6, 9, 11], [3, 4, 7, 8, 10]);
console.log(result);
