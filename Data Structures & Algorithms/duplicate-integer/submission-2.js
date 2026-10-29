class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let newNums = []
        for(const num of nums) {
            if(newNums.includes(num)) {
                return true
            }
            newNums.push(num)
        }
        return false
    }
}
