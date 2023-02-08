class Solution {
    public int maxProfit(int[] prices) {
        int min =prices[0],ans=0;
        for (int i = 1; i < prices.length; i++){
            if (prices[i]<=min){
                min = prices[i];
            }else{
                if ((prices[i]-min) > ans){
                    ans = prices[i]-min;
                }
            }
        }
        
        return ans;
    }
}