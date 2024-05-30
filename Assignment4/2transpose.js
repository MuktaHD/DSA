const transposeMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let transposedMatrix = Array.from({ length: cols }, () => Array(rows).fill(0));

    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }

    return transposedMatrix;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);
