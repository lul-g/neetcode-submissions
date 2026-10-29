class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.length ? strs.join('/-regex-/') : 'empty'
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str !== 'empty' ? str.split('/-regex-/') : []
    }
}
