/**
 * @param {string} digits
 * @return {string[]}
 */
    let obj = { 
        "2": ['a','b','c'],
        "3": ['d','e','f'],
        "4": ['g','h','i'],
        "5": ['j','k','l'],
        "6": ['m','n','o'],
        "7": ['p','q','r','s'],
        "8": ['t','u','v'],
        "9": ['w','x','y','z'],
    }
var letterCombinations = function(digits) {

    let ans = [];
    if (!digits.length){
        return []
    }
        
    backtrack(0,digits,[],ans);
    
    return ans
};
    function backtrack(i,digits,curr,ans){
        if (digits.length === curr.length){
            ans.push(curr);
            return;
            }
        
//         get the char and add it to curr
        let ch = obj[digits[i]]
        ch.forEach(c => {
            backtrack (i+1,digits,curr+c,ans);
        })
        
    }
