function printBoundaryElements(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (i === 0 || i === numRows - 1 || j === 0 || j === numCols - 1) {
                process.stdout.write(matrix[i][j] + " ");
            } else {
                process.stdout.write("  ");  
            }
        }
        console.log(); 
    }
}

const matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];

printBoundaryElements(matrix);
