/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    let curr = [];
    
    nums.sort();
    
    dfs ( 0 , curr,nums,res);
    
    return res;
};

let dfs = (i,curr,nums,res) => {
    if (i === nums.length){
        res.push([...curr]);
        return;
    }
    
//     selecting it
    curr.push(nums[i]);
    dfs(i+1,curr,nums,res);
    
//     not selecting it 
    curr.pop(nums[i]);
    
    while(i+1<nums.length && nums[i] === nums[i+1] ){
          i++;
          }
    dfs(i+1,curr,nums,res);
}