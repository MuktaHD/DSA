function isBalanced(expression) {
    let stack = [];
    let matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let char of expression) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Ex.
console.log(isBalanced("{[()]}"));   
console.log(isBalanced("{[(])}"));  
