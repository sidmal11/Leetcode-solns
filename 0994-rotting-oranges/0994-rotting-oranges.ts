function orangesRotting(grid: number[][]): number {
    let visited = [];
    let queue = [];
    let row = grid.length;
    let col = grid[0].length;
    let good = 0;
    let min =0;
    let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    
    for (let i = 0 ; i<row ; i++){
        for (let j = 0 ; j<col ; j++){
            if (grid[i][j] === 2){
                queue.push({i,j});
            }else if (grid[i][j]===1){
                good++
            }
        }
    }
    
    while(queue.length && good){
        let queueLength = queue.length
        for (let r =0 ; r<queueLength ;r++ ){
            const {i,j} = queue.shift()

            for( let dir of dirs){
                let newRow = dir[0] + i;
                let newCol = dir[1] + j;
                if (newRow>=0 && newCol>=0 && newRow<row && newCol<col
                    && grid[newRow][newCol] === 1){
                        grid[newRow][newCol] = 2;
                        queue.push({i:newRow,j:newCol})
                        good--;
                    
                }
            }
        }
        min++;
    }
    
    
    return good !== 0 ? -1:min;
    
};


function bfs(i: number,j: number,visited,queue,row,col){
 
}