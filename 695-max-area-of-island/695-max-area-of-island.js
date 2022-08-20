/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    
    let visited = [];
    grid.forEach(row => {
        const arr = [];
        row.forEach(ele => {
            arr.push('N');
        })
        visited.push(arr);
    })
    let max = 0;
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            max = Math.max(explore(grid, row, col, visited),max);
        }
    }
    
    return max;
};


const explore = (grid,r, c, visited) => {
    if ( r < 0 || r>= grid.length || c < 0 || c>= grid[0].length) return 0;
    if ( grid[r][c] === 0 || visited[r][c]=== 'V') return 0;
    
    visited[r][c] = 'V';
    return 1 + explore(grid,r+1, c, visited) + explore(grid,r, c+1, visited) + explore(grid,r-1, c, visited) + explore(grid,r, c-1, visited);
    
}