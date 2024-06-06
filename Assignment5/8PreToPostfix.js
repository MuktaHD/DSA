  function prefixToPostfix(prefix) {
    let stack = [];

    // Iterate over the prefix expression from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];

        if (/[a-zA-Z]/.test(char)) {
            // If the character is an operand, push it onto the stack
            stack.push(char);
        } else {
            // If the character is an operator, pop two elements from the stack
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            // Form a new string in postfix format and push it back onto the stack
            let newExpr = `${operand1}${operand2}${char}`;
            stack.push(newExpr);
        }
    }

    // The final element in the stack is the complete postfix expression
    return stack.pop();
}

// Test case
const prefix = "*+AB-CD";
console.log(prefixToPostfix(prefix)); // Output: "AB+CD-*"
