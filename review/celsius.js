// #!/user/bin/env node -- Shebang line for Node.js
/**
 * Απλή function, που μετατρέπει βαθμούς Κελσίου σε Φαρενάιτ.
 */

function celsiusToFahrenheit(celsius) {
    return(celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(50)); // Output is : 122