/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   var map = {};
   for(let i=0;i<nums.length;i++)
   {
        const targetvalue =target-nums[i];

        if(targetvalue in map)
        {
            return [map[targetvalue],i];
        }

        map[nums[i]]=i;
   } 
   return null;
};