const arr = [10, 2, 9, 6, 5];

function getMin(arr) {
    let minVal = Math.min(...arr);
    let minPosition = arr.indexOf(minVal);
    return [minVal, minPosition];
}

// find min with the old classic way
function getMinClassic(arr) {
    let minPosition = 0;
    let minVal = arr[minPosition];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minPosition = i;
        }
    }
    return [minVal, minPosition];
}