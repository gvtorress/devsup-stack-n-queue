import StackArray from "./stack-arr.js";
import StackList from "./stack-list.js";

const isBalanced = (text) => {
  let stack = new StackList();

  for (let char of text) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}

console.log(isBalanced("(())()"));
console.log(isBalanced("())("));
console.log(isBalanced("((())"));
