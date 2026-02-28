/**
 *   Δοθέντος δύο ακεραιών, να επιτραφεί το πηλίκο της διαίρεσης του πρώτου με το δεύτερο, στρογγυλοποιημένο σε δύο δεκαδικά ψηφία.
 */

let number1 = 10;
let number2 = 3;
let roundedResult = 0;

roundedResult = Math.round((number1 / number2 * 100)) / 100;

console.log(roundedResult); // Output is : 3.33
