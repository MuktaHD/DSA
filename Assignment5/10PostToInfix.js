  function postfixToInfix(postfix) {
    let stack = [];
    for (let char of postfix) {
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
  
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let newExpr = `(${operand1}${char}${operand2})`;
            stack.push(newExpr);
        }
    }

    return stack.pop();
}

const postfix = "AB+CD-*";
console.log(postfixToInfix(postfix)); 

