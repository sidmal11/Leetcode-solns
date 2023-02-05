/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums,permutations = [],answer = []) {
//     base case 
    if(nums.length === 0){
        answer.push([...permutations]) 
    }
    
    
    for (let i=0 ; i<nums.length;i++){
        permutations.push(nums[i]);
        let choices = nums.filter((nums,idx) => {
            return idx !== i
        })
        
        permute(choices,permutations,answer)
        
//         once used pop from further permutations
        permutations.pop();
    }
    return answer
};