function search(nums: number[], target: number) {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    var search = function (nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let mid;
        while (low <= high) {
            mid = Math.floor((high + low) / 2);
            console.log(mid);
            if (target === nums[mid]) {
                return mid;
            }
            else if (target > nums[mid]) {
                low = mid + 1;
            } else if (target < nums[mid]) {
                high = mid - 1;
            }
        }
        return -1;
    };
    return search(nums, target);
};