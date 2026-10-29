class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArr = [...s]

        for(const char of sArr) {
            console.log('initia', s)
            console.log('before', t)
            
            if(t.indexOf(char) === -1) return false

            t = t.slice(0, t.indexOf(char)) + t.slice(t.indexOf(char) + 1)
            
            console.log('aftera', t)
        }
        return t.length === 0
    }
}
