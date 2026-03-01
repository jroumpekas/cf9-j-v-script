const queue = [1, 2, 3, 4, 5];

queue.push(6); // Add 6 to the end of the queue
console.log(queue); // Output: [1, 2, 3, 4, 5, 6]

const frontElement = queue.shift(); // Remove the front element (1) from the queue
console.log("Dequeued element:", frontElement); // Output: Dequeued element: 1
console.log(queue); // Output: [2, 3, 4, 5, 6]

// queue.unshift(0); // Add 0 to the front of the queue