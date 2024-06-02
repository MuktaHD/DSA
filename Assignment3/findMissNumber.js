function findMissingNumber(arr) {
   
    const n = Math.max(...arr);
    const totalSum = (n * (n + 1)) / 2;  
    const actualSum = arr.reduce((acc, num) => acc + num, 0);  

    const missingNumber = totalSum - actualSum;
  
    return missingNumber === 0 ? n + 1 : missingNumber;
  }
  //Example
  const arr = [1, 2,4, 6, 3, 7, 8];
  const missingNumber = findMissingNumber(arr);
  console.log(`The missing number is ${missingNumber}`); 
  
