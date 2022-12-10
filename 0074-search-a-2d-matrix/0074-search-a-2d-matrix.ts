function searchMatrix(matrix: number[][], target: number): boolean {

    let ans = false;
    let top = 0;
    let midRow, midCol;
    let rows = matrix.length, cols = matrix[0].length;

    let right = cols - 1;
    let bottom = rows - 1;
    while (top <= bottom) {
        midRow = Math.floor(top + (bottom - top) / 2);
        if (target === matrix[midRow][0]) {
            return true;
        } else if (target < matrix[midRow][0]) {
            bottom = midRow - 1;
        } else if (target > matrix[midRow][0]) {

            if (target === matrix[midRow][right]) {
                return true;
            }
            if (target < matrix[midRow][right]) {
                // perform binary search
                let left = 0;
                while (left <= right) {
                    midCol = Math.floor(left + (right - left) / 2);
                    if (target === matrix[midRow][midCol]) {
                        return true;
                    } else if (target > matrix[midRow][midCol]) {
                        left = midCol+1;
                    } else if (target < matrix[midRow][midCol]) { 
                        right = midCol-1;
                    }
                }
            } else {
                top = midRow + 1;
            }
        }
    }

    return ans
};


