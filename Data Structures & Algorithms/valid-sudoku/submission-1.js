class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //row checker
        for(let i = 0; i < board.length; i++) {
            if(this.hasDuplicate(board[i])) {
                return false
            }
        }

        //col checker
        let colArr = []
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[i].length; j++) {
                colArr.push(board[j][i])
            }
            if(this.hasDuplicate(colArr)) {
                return false
            }
            colArr = []
        }

        //sq checker
        let sq = 0
        let sliceStart = 0
        let rowStart = 0
        while(sq < 9) {
            if(sq % 3 === 0 && sq !== 0) {
                rowStart+=3 
                sliceStart=0
            }
            let arr = []
            for(let i = rowStart; i < rowStart + 3; i++) {
                arr.push(...board[i].slice(sliceStart, sliceStart + 3))
            }
            console.log(arr)
            if(this.hasDuplicate(arr)) {
                    return false
            }
            sq+=1
            sliceStart+=3
        }
        return true
    }
    hasDuplicate(arr) {
        // console.log(arr)
        let map = new Map();
        for(const num of arr) {
            if(map.has(num) && num !== '.') {
                return true
            }
            else {
                map.set(num, 1)
            }
        }
        console.log('hi---',map)
        return false
    }
}
