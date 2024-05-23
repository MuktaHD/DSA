function moveZerosToEnd(arr) {
    let index = 0; // Pointer to place the next non-zero element
  
    // First pass: Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[index++] = arr[i];
      }
    }
  
    // Second pass: Fill remaining positions with zeros
    for (let i = index; i < arr.length; i++) {
      arr[i] = 0;
    }
  
    return arr;
  }
  
  // Example usage:
  const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
  const result = moveZerosToEnd(arr);
  console.log(result); // Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]
  