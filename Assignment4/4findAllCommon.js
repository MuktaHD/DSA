const findCommonElements = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Initialize a hash map to track common elements
    const commonElements = new Map();

    // Initialize the hash map with elements from the first row
    for (let col = 0; col < cols; col++) {
        commonElements.set(matrix[0][col], true);
    }

    // Iterate through remaining rows and update common elements
    for (let row = 1; row < rows; row++) {
        const rowElements = new Map();
        for (let col = 0; col < cols; col++) {
            rowElements.set(matrix[row][col], true);
        }

        // Update common elements based on the current row
        for (const [element] of commonElements.entries()) {
            if (!rowElements.has(element)) {
                commonElements.delete(element);
            }
        }
    }

    // Convert the hash map to an array of common elements
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
console.log(commonElements); // Output: [1, 8]
