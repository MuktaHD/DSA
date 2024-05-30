const rotateMatrix90Clockwise = (matrix) => {
    const n = matrix.length;
    
    let result = Array.from({ length: n }, () => Array(n).fill(0));

    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    
    for (let i = 0; i < n; i++) {
        result[i].reverse();
    }

    return result;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotateMatrix90Clockwise(matrix);
console.log(rotatedMatrix);
