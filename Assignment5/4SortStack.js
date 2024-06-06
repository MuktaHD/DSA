 function sortStack(stack) {
    if (stack.length > 0) {
        // Remove the top element
        let temp = stack.pop();

        // Sort the remaining stack
        sortStack(stack);

        // Insert the removed element back in the sorted order
        sortedInsert(stack, temp);
    }
}

function sortedInsert(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
        // If the stack is empty or the top element is less than or equal to the element, push the element
        stack.push(element);
    } else {
        // Remove the top element
        let temp = stack.pop();

        // Recur for the remaining stack
        sortedInsert(stack, element);

        // Put the removed element back
        stack.push(temp);
    }
}

// Test case
const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack); // Output: [3, 23, 31, 34, 92, 98]

