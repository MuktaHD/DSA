function isBalanced(expression) {
    // Stack to keep track of opening parentheses
    let stack = [];

    // Map to store matching pairs of parentheses
    let matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Iterate through each character in the expression
    for (let char of expression) {
        if (char === '(' || char === '{' || char === '[') {
            // Push opening parentheses onto the stack
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // Check if the stack is empty or the top of the stack doesn't match the current closing parenthesis
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }

    // If the stack is empty, parentheses are balanced
    return stack.length === 0;
}

// Test cases
console.log(isBalanced("{[()]}"));    // Output: true
console.log(isBalanced("{[(])}"));    // Output: false
