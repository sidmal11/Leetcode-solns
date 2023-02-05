/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length
    let cols = board[0].length
    
    let visited = Array(rows).fill().map(() => Array(cols).fill(false))
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            if (dfs(i,j,visited,0,word,board))
                return true
        }
    }  
    return false;
};




function dfs(r,c,visited,i,word,board){
        if (i === word.length)
        return true;
    
    if(
        r>= visited.length ||
        c>= visited[0].length ||
        r <0 ||
        c< 0 ||
        word[i] !== board [r][c] ||
        visited[r][c]
    ) 
    return false    
    
    visited[r][c] = true;
    let res =  dfs(r+1,c,visited,i+1,word,board) ||
               dfs(r-1,c,visited,i+1,word,board) ||                                dfs(r,c+1,visited,i+1,word,board) ||
               dfs(r,c-1,visited,i+1,word,board)
    
    visited[r][c] =false;
    return res
}