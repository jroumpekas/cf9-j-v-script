const arr = [10, 2, 9, 6, 5];

// sort in a new array

// slice, sort
// let sortedArr = arr.slice().sort((a, b) => a - b); // Sorts the array
arr.sort(function(a, b) {
    if (a > b) {
        return 1;   
    } else if (a < b) {
        return -1;
    } else { 
        return 0; 
    }
})


// Spreading, sort
sortedArr = [...arr].sort((a, b) => a - b); // Sorts the array

// toSorted, sort
sortedArr = arr.toSorted((a, b) => a - b); // Sorts the array