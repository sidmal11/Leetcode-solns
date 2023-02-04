/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let res = [];
    
    let curr=[]
    
    dfs(0,curr,nums,res);

    return res; 

};

 let dfs = (i,curr,nums,res) => {
     if (i === nums.length){
         res.push([...curr]);
         return ;
     }
     
//      if accepting it
     curr.push(nums[i]);
     dfs(i+1,curr,nums,res);
     
//      if not accepting it
     curr.pop(nums[i]);
     dfs(i+1,curr,nums,res);
     
 }  