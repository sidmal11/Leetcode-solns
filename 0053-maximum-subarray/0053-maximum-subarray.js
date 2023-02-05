/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = 0 ;
    let maxSum = nums[0];
    
    for (let i = 0 ; i < nums.length ; i++){
//         imp - if the currSum is -ve, forget it
        if (currSum<0){
            currSum = 0;
        }
        currSum = nums[i]+currSum
        if (currSum>maxSum){
             maxSum = currSum;
        }
    }
    
    return maxSum;
};