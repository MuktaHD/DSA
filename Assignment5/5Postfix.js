function evaluatePostfix(expression) {
    let stack = [];

    for (let char of expression) {
        if (!isNaN(char)) {
            // If the character is a number, push it to the stack
            stack.push(Number(char));
        } else {
            // Otherwise, it's an operator, so pop the top two elements from the stack
            let b = stack.pop();
            let a = stack.pop();
            let result;

            // Apply the operator
            switch (char) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    throw new Error(`Unsupported operator: ${char}`);
            }

            // Push the result back to the stack
            stack.push(result);
        }
    }

    // The final result should be the only element left in the stack
    return stack.pop();
}

// Test case
console.log(evaluatePostfix("231*+9-")); // Output: -4

