class Solution {
    public int maxProduct(int[] nums) {
        if (nums.length == 0) return 0;
        int[] sortedArr = Arrays.copyOf(nums,nums.length);
        Arrays.sort(sortedArr);
        
        int res = sortedArr[sortedArr.length-1];
        
        int curMin,curMax;
        curMin = curMax = 1;
        for (int n :nums){
            if (n ==0){
                curMin = curMax = 1;
                continue;
            }
            
            int tmp = curMax *n;
            curMax = Math.max(Math.max(tmp,n*curMin),n);
            curMin = Math.min(Math.min(tmp,n*curMin),n);
            
            res = Math.max(curMax,res);
        }
        
        return res;
    }
}