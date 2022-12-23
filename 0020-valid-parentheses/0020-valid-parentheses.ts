function isValid(s: string): boolean {
        let st  = [];
      const map = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
for (const char of s) {/* Time O(N) */
        const isBracket = (char in map)
        if (!isBracket){
            st.push(char);
            continue;
        }else{
            if (map[char] !== st.pop()){
                return false;
            }
        }
    }
    
    return !st.length
};