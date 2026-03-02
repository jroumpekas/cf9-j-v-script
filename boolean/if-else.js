const EXCELLENT = 90;
const VERY_GOOD = 75;
const GOOD = 60;

let grade = 85; // Example grade
let result = "";


if (grade >= EXCELLENT) {
    result = "Excellent";
} else if (grade >= VERY_GOOD) {
    result = "Very Good";
} else if (grade >= GOOD) {
    result = "Good"; 
} else {
    result = "Fail";
}

console.log("Grade:", grade);