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
            postfix.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix.push(stack.pop());
            }
            stack.pop(); 
        } else {
        
            while (stack.length > 0 && precedence[stack[stack.length - 1]] >= precedence[char]) {
                postfix.push(stack.pop());
            }
            stack.push(char);
        }
    }
    while (stack.length > 0) {
        postfix.push(stack.pop());
    }

    return postfix.join('');
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(infix)); 
