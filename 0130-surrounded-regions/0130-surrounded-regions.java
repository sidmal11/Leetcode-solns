class Solution {
    
    int rows;
    int cols;

    public void solve(char[][] board) {
        rows = board.length;
        cols = board[0].length;

        for (int i = 0 ; i < rows ; i++){
            for (int j = 0 ; j < cols ; j++){
                if(board[i][j] == 'O' && (i== 0 || i == rows-1 || j == 0 || j == cols-1 ))
                    capture(i,j,board);                    
            }
        }
        
        for (int i = 0 ; i < rows ; i++){
            for (int j = 0 ; j < cols ; j++){
                if(board[i][j] == 'O')
                    board[i][j] = 'X';
            }
        }
        
        for (int i = 0 ; i < rows ; i++){
            for (int j = 0 ; j < cols ; j++){
                if(board[i][j] == 'T')
                    board[i][j] = 'O';
            }
        }
    }
        
        
    public void capture(int r , int c,char[][] board){
        if (r < 0 || c < 0 || r==rows || c==cols || board[r][c] != 'O'  ) return;
        
        board[r][c] = 'T';
        
        capture(r+1,c,board);
        capture(r-1,c,board);
        capture(r,c+1,board);
        capture(r,c-1,board);

    }
}