/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let nl = nums.length;
    let result = [];
    for (let i = 0; i < nl; i++) {
        let start = nums[i];
        while (i + 1 < nl && nums[i + 1] - nums[i] == 1) {
            i++;
        }
        if (start != nums[i]) {
            result.push(start + "->" + nums[i]);
        } else {
            result.push(start.toString());
        }
    }
    return result;
};