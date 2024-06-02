function intersection(arr1, arr2) {

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
  
    const intersectionSet = new Set([...set1].filter(element => set2.has(element)));

    return Array.from(intersectionSet);
  }
  
  // Example 
  const arr1 = [1, 2, 2, 1];
  const arr2 = [2, 2];
  const result = intersection(arr1, arr2);
  console.log(result);
  
