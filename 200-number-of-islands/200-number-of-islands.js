/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set();
    let count=0;
    for (let row = 0; row < grid.length ;  row++){
        for (let column = 0; column < grid[0].length ; column++){
        if (explore(grid, visited,row,column) === true){
            count+=1;
            }
        }
    }
    return count;
};    
    const explore = (grid,visited,r,c) => {
//         check if outofbounds
        const rowBound = r>=0 && r<grid.length;
        const colBound = c>=0 && c<grid[0].length;
        
        if (!rowBound) return false;
        if (!colBound) return false;
        
        
        if (visited.has(r+'#'+c)){
            return false;
        }
                
        if (grid[r][c] === '0'){
            return false;
        }
        
        visited.add(r+'#'+c)
        explore(grid,visited,r+1,c);
        explore(grid,visited,r,c+1);
        explore(grid,visited,r-1,c);
        explore(grid,visited,r,c-1);
        return true;
    }
