function infixToPrefix(infix) {
    function getPrecedence(op) {
        switch (op) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default:
                return 0;
        }
    }

    function isOperator(c) {
        return ['+', '-', '*', '/', '^'].includes(c);
    }

    function infixToPostfix(exp) {
        let stack = [];
        let result = '';

        for (let i = 0; i < exp.length; i++) {
            let c = exp[i];

            if (c >= 'a' && c <= 'z') {
                result += c;
            } else if (c === '(') {
                stack.push(c);
            } else if (c === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    result += stack.pop();
                }
                stack.pop();
            } else if (isOperator(c)) {
                while (stack.length && getPrecedence(stack[stack.length - 1]) >= getPrecedence(c)) {
                    result += stack.pop();
                }
                stack.push(c);
            }
        }

        while (stack.length) {
            result += stack.pop();
        }

        return result;
    }

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    let reversedInfix = reverseString(infix);
    reversedInfix = reversedInfix.replace(/\(/g, 'temp');
    reversedInfix = reversedInfix.replace(/\)/g, '(');
    reversedInfix = reversedInfix.replace(/temp/g, ')');

    let postfix = infixToPostfix(reversedInfix);

    let prefix = reverseString(postfix);

    return prefix;
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPrefix(infix)); 
