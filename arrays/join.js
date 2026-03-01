const arr = [1, 2, 3, 4, 5];

const str = arr.join(" | "); // Join array elements into a string 
console.log(str); // Output: "1 | 2 | 3 | 4 | 5"

// add elements to the array
arr.push(6); // Add an element to the end of the array
arr.push(7, 8); // Add multiple elements to the end of the array

// delete an element
delete arr[0]; // Deletes the first element (1) but leaves an empty slot. Do not use itfor removing elements from an array. Use splice instead.