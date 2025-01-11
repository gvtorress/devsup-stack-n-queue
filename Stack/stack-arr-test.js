import StackArray from "./stack-arr.js";

let stack = new StackArray(10);

console.log(`stack.isEmpty(): ${stack.isEmpty()}`);
console.log(`stack.count(): ${stack.count()}`);

stack.push("Maria");
stack.push("Joao");
stack.push("Ana");

console.log(`stack.isEmpty(): ${stack.isEmpty()}`);
console.log(`stack.count(): ${stack.count()}`);
console.log(`stack.peek(): ${stack.peek()}`);

// stack.clear();

while (!stack.isEmpty()) {
  const item = stack.pop();
  console.log(item);
}

console.log(`stack.isEmpty(): ${stack.isEmpty()}`);
