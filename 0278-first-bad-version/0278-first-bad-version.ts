/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

// EXAMPLE of BINARY SEARCH
var solution = function (isBadVersion: any) {
    // F F F F F T T T
    return function (n: number): number {
        let low = 1;
        let high = n;
        let ans = -1;
        if (n === 1) return 1;
        let mid;
        while (low <= high) {
            mid = Math.round((high + low) / 2);
            if (isBadVersion(mid) === true) {
                ans = mid;
                high = mid - 1;
                console.log(high, "high");
            } else {
                low = mid + 1;
                console.log(low, "low");
            }
        }
        return ans;
    };
};