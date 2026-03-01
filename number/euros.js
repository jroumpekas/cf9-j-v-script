const EXCHANGE_RATE = 1.123 // Example exchange rate from USD to EUR
let euros = 50;
let dollars = 0;

//  Convert Euros to Dollars
dollars = euros * EXCHANGE_RATE;

// Output the result
console.log(euros + " Euros is equal to " + dollars.toFixed(2) + " Dollars ");