function findSecondLargest(arr) {
    if (arr.length < 2) {
      return null; // If there are fewer than 2 elements, there is no second largest element.
    }
  
    let first = -Infinity;
    let second = -Infinity;
  
    for (const num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num !== first) {
        second = num;
      }
    }
  
    return second === -Infinity ? null : second; // Handle the case where there is no second distinct largest element.
  }
  
  // Example usage:
  const arr = [12, 35, 1, 10, 34, 1];
  const secondLargest = findSecondLargest(arr);
  console.log(`The second largest element is ${secondLargest}`); // Output: The second largest element is 34
  