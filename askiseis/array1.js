function numberArray(arr = [1,4,4,5,86,43,2,2,5]) {
    // Return the array without duplicates
    return [...new Set(arr)];
}

console.log(numberArray()); // Output: [1, 4, 5, 86, 43, 2]