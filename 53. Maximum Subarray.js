/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // f[i] = (f[i-1] > 0) ? f[i-1] + nums[i] : nums[i]
    if (nums.length === 0) return 0;
    var f = [], ans = -Infinity;
    f[0] = nums[0];
    ans = nums[0];
    for (var i=1; i<nums.length; i++) {
        f[i] = (f[i-1] > 0)? f[i-1]+nums[i] : nums[i];
        ans = Math.max(ans, f[i]);
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    var result = -Infinity;
    var max = [];
    max[0] = nums[0];
    result = nums[0];
    for (var i=1; i<nums.length; i++) {
        // max[i] = Math.max(max[i-1]+nums[i], nums[i]);
        max[i] = (max[i-1]>0)? nums[i]+max[i-1] : nums[i];
        result = Math.max(max[i], result);
    }

    return result;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) throw new Error("input error");
    if (nums.length === 1) return nums[0];

    var dp = [], max = -Infinity;
    dp[0] = nums[0];
    max = Math.max(max, dp[0]);
    for (var i=1; i<nums.length; i++) {
        dp[i] = (dp[i-1]>0)? dp[i-1]+nums[i] : nums[i];
        max = Math.max(max, dp[i]);
    }

    return max;
};
