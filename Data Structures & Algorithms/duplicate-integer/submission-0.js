class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = {};

        for (let i = 0; i < nums.length; i++) {
            if (!count[nums[i]]) {
                count[nums[i]] = 1;
            } else {
                count[nums[i]] += 1;
                return true;
            }
        }
        return false;
    }
}
