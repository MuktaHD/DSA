  function postfixToInfix(postfix) {
    let stack = [];

    // Iterate over the postfix expression from left to right
    for (let char of postfix) {
        if (/[a-zA-Z0-9]/.test(char)) {
            // If the character is an operand, push it onto the stack
            stack.push(char);
        } else {
            // If the character is an operator, pop two elements from the stack
            let operand2 = stack.pop();
            let operand1 = stack.pop();

            // Form a new string in infix format and push it back onto the stack
            let newExpr = `(${operand1}${char}${operand2})`;
            stack.push(newExpr);
        }
    }

    // The final element in the stack is the complete infix expression
    return stack.pop();
}

// Test case
const postfix = "AB+CD-*";
console.log(postfixToInfix(postfix)); // Output: "((A+B)*(C-D))"

