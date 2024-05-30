const findCommonElements = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    const commonElements = new Map();

    for (let col = 0; col < cols; col++) {
        commonElements.set(matrix[0][col], true);
    }


    for (let row = 1; row < rows; row++) {
        const rowElements = new Map();
        for (let col = 0; col < cols; col++) {
            rowElements.set(matrix[row][col], true);
        }

      
        for (const [element] of commonElements.entries()) {
            if (!rowElements.has(element)) {
                commonElements.delete(element);
            }
        }
    }
    const result = [];
    for (const [element] of commonElements.entries()) {
        result.push(element);
    }

    return result;
};

const matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];

const commonElements = findCommonElements(matrix);
console.log(commonElements);
