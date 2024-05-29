function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let topRow = 0,
        bottomRow = matrix.length - 1,
        leftCol = 0,
        rightCol = matrix[0].length - 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
        // Traverse top row
        for (let i = leftCol; i <= rightCol; i++) {
            result.push(matrix[topRow][i]);
        }
        topRow++;

        // Traverse right column
        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightCol]);
        }
        rightCol--;

        // Traverse bottom row
        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                result.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }

        // Traverse left column
        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
