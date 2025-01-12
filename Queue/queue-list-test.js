import QueueList from "./queue-list.js";

const queue = new QueueList();

console.log(`queue.isEmpty: ${queue.isEmpty()}`);
console.log(`queue.count: ${queue.count()}`);

queue.add("Maria");
queue.add("Joao");
queue.add("Ana");

console.log(`queue.isEmpty: ${queue.isEmpty()}`);
console.log(`queue.peek: ${queue.peek()}`);
console.log(`queue.count: ${queue.count()}`);


while (!queue.isEmpty()) {
  const item = queue.remove();
  console.log(item);
}

console.log(`queue.isEmpty: ${queue.isEmpty()}`);
