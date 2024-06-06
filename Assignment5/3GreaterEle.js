function nextGreaterElement(arr) {
    let result = new Array(arr.length).fill(-1); // Initialize the result array with -1
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        // While the stack is not empty and the current element is greater than the top element of the stack
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            let index = stack.pop(); // Pop the top element from the stack
            result[index] = arr[i]; // The current element is the next greater element for the popped element
        }
        stack.push(i); // Push the current index onto the stack
    }

    return result;
}

// Test case
console.log(nextGreaterElement([4, 5, 2, 25])); // Output: [5, 25, 25, -1]
