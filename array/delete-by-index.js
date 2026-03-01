const arr = [10, 2, 9, 6, 5];

// delete by index

let itemToRemove = arr.indexOf(9);
arr.splice(itemToRemove,1);

console.log(arr); // Output: [10, 2, 6, 5]