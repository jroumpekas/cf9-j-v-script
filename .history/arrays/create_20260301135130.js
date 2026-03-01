const arr = []  // Create an empty array
const arr2 = [1, 2, 3, 4, 5] // Create an array with initial values
const grid = [[1, 2], [3, 4], [5, 6]] // Create a 2D array (array of arrays)


// Traverse the array using a for loop
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]); // Accessing array elements
}

// Traverse the array using an enhanced for loop (for...of)
for (const num of arr2) {
    console.log(num); // Accessing array elements using enhanced for loop
}

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]); // Accessing elements in a 2D array 
    } 
}

for (const row of grid) {
    for (const value of row) {
        console.log(value);
    }   
}

arr2.forEach(num => console.log(num)); // Using forEach to traverse the array
arr2.forEach(console.log);             // Using forEach with console.log directly