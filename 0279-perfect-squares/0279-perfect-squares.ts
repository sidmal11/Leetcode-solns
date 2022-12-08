function numSquares(n: number): number {

    let dp = []

    dp[0] = 0;

    for (let target = 1; target <= n; target++) {
        dp[target] = Number.MAX_VALUE;
        for (let bpIdx = 1; bpIdx * bpIdx <= target; bpIdx++) {
            dp[target] = Math.min(dp[target - bpIdx * bpIdx] + 1, dp[target])
        }
    }
    return dp[n ];
};

