/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let start = 0,far = 0;
    let maxFar = 0;
    let jump = 0
    
    while(far < nums.length-1 ){
        for (let i = start ; i <=far ; i++){
            if(maxFar < nums[i]+i){
                maxFar = nums[i]+i;
            }
        }
    //         set start as  next of far
        jump++
        start = far+1;
        far = maxFar;
    }

    return jump;
};