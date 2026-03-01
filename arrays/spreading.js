const arr = [1, 2, 3];

// Spreading the array into individual elements
const copy = [...arr]; // Creates a shallow copy of the array

const str = "Hello";
const chars = [...str]; // Spreads the string into an array of characters
console.log(copy); // [1, 2, 3]
console.log(chars); // ['H', 'e', 'l', 'l', 'o']
