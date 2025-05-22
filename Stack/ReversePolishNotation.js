function evalRPN(tokens) {
  let stack = [];
  let sum = 0;
  for (let i of tokens) {
    switch (i) {
      case '+':
        sum = stack.pop() + stack.pop();
        stack.push(sum);
        break;
      case '-':
        const val1 = stack.pop();
        const val2 = stack.pop();
        sum = val2 - val1;
        stack.push(sum);
        break;
      case '*':
        sum = stack.pop() * stack.pop();
        stack.push(sum);
        break;
      case '/':
        const a = stack.pop();
        const b = stack.pop();
        sum = (b / a) | 0;
        stack.push(sum);
        break;
      default:
        stack.push(+i);
        break;
    }
  }
  return stack.pop();
}

evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
