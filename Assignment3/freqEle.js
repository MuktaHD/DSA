function countFrequency(arr) {
    const frequency = {};
    
    for (const element of arr) {
      if (frequency[element]) {
        frequency[element]++;
      } else {
        frequency[element] = 1;
      }
    }
    
    return frequency;
  }
  
  // Example 
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const frequencyCounts = countFrequency(arr);
  console.log(frequencyCounts); 
}
  
