const arr1 = [5, 10, 15, 20, 25, 30];

const arr2 = [15, 25, 35, 45, 55];

const common = arr1.filter(item => arr2.includes(item));

console.log(common);