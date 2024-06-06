 function sortStack(stack) {
    if (stack.length > 0) {
        let temp = stack.pop();
        sortStack(stack);
        sortedInsert(stack, temp);
    }
}

function sortedInsert(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
        stack.push(element);
    } else {
        let temp = stack.pop();
        sortedInsert(stack, element);
        stack.push(temp);
    }
}
const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack);

