function intersection(arr1, arr2) {
    // Convert both arrays to sets to remove duplicates
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    // Find the intersection of both sets
    const intersectionSet = new Set([...set1].filter(element => set2.has(element)));
  
    // Convert the set back to an array
    return Array.from(intersectionSet);
  }
  
  // Example usage:
  const arr1 = [1, 2, 2, 1];
  const arr2 = [2, 2];
  const result = intersection(arr1, arr2);
  console.log(result); // Output: [2]
  