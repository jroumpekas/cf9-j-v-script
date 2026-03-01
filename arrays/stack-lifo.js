const stack = [1, 2, 3, 4, 5];

stack.push(6); // Add 6 to the top of the stack
console.log(stack); // Output: [1, 2, 3, 4, 5, 6]

const topElement = stack.pop(); // Remove the top element (6) from the stack
console.log("Popped element:", topElement); // Output: Popped element: 6
console.log(stack); // Output: [1, 2, 3, 4, 5]
