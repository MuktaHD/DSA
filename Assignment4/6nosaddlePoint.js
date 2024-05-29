function findSaddlePoint(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Iterate through each row
    for (let i = 0; i < numRows; i++) {
        let minInRow = matrix[i][0];
        let colIndex = 0;

        // Find minimum in row
        for (let j = 1; j < numCols; j++) {
            if (matrix[i][j] < minInRow) {
                minInRow = matrix[i][j];
                colIndex = j;
            }
        }

        // Check if minimum in row is maximum in column
        let isSaddlePoint = true;
        for (let k = 0; k < numRows; k++) {
            if (matrix[k][colIndex] > minInRow) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            return { row: i, col: colIndex, value: minInRow };
        }
    }

    return "No saddle point found";
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const saddlePoint = findSaddlePoint(matrix);
console.log(saddlePoint);
