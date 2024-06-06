function infixToPostfix(infix) {
    let precedence = {
        '^': 4,
        '*': 3,
        '/': 3,
        '+': 2,
        '-': 2,
        '(': 1
    };

    let stack = [];
    let postfix = [];
    
    for (let char of infix) {
        if (/[a-zA-Z0-9]/.test(char)) {
            // If the character is an operand, add it to the postfix output
            postfix.push(char);
        } else if (char === '(') {
            // If the character is '(', push it onto the stack
            stack.push(char);
        } else if (char === ')') {
            // If the character is ')', pop and output from the stack until '(' is found
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); // Pop '(' from the stack
        } else {
            // If an operator is encountered
            while (stack.length > 0 && precedence[stack[stack.length - 1]] >= precedence[char]) {
                postfix.push(stack.pop());
            }
            stack.push(char);
        }
    }

    // Pop all the operators from the stack
    while (stack.length > 0) {
        postfix.push(stack.pop());
    }

    return postfix.join('');
}

// Test case
const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(infix)); // Output: "abcd^e-fgh*+^*+i-"
