/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let myset = new Set();

    for (num of nums) {
        if (myset.has(num)) {
            return true;
        }
        else {
            myset.add(num);
        }
    }
    return false;
};