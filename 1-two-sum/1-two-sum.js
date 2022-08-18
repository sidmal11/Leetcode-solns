/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
    let ans;
    nums.forEach((num,numIdx) => {
        let comp = target-num;
        if ( mp.has(num)){
             ans = [mp.get(num), numIdx]
        }
        mp.set(comp,numIdx);
    })
    
    return ans;
};