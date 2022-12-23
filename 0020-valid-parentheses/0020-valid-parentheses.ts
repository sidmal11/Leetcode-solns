function isValid(s: string): boolean {
        let st  = [];
    for (let i = 0 ; i < s.length; i++){
        switch(s[i]){
            case "(": st.push(")");
                      break;
            case "{": st.push("}")
                      break;
            case "[": st.push("]")
                      break;
            default: if (!st.length){
                         return false;
                    }else if (st.pop() !== s[i]){
                         return false;    
                    }
        }
    }
    
    return !st.length
};