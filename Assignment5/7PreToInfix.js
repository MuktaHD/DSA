function prefixToInfix(prefix) {
    let stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        let char = prefix[i];

        if (/[a-zA-Z]/.test(char)) {
            stack.push(char);
        } else {
    
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let newExpr = `(${operand1}${char}${operand2})`;
            stack.push(newExpr);
        }
    }

    return stack.pop();
}


const prefix = "+AB-CD";
console.log(prefixToInfix(prefix)); 
