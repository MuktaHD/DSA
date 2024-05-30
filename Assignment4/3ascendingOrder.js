const searchInSortedMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0) {
        return false; 
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true; // Target found
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }

    return false; 
};

const matrix = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50]
];
const target = 29;

console.log(searchInSortedMatrix(matrix, target)); 
