/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let numlen = nums.length;
    let i = 0;
    let j = 1;
    while (j < numlen) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1;
};