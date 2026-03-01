// 1. Basic function Syntax

function sayHello(name) {
    return `Hello, ${name}!`;
}   


console.log(sayHello("Alice")); // Output: Hello, Alice!

// 2. Function Expression

const add = function(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8

// 3. Arrow Function

const multiply = (a, b) => a * b;

console.log(multiply(4, 6)); // Output: 24

//4. Optional Parameters

function sayHi(name) {
   if(!name) {
    name = "Guest";
   }
   console.log(`Hi, ${name}!`);
}

sayHi(); // Output: Hi, Guest!

// 5. Default Parameters, Overloading

function sayHi2(name = "Guest") {
    console.log(`Hi, ${name}!`);
}

sayHi2(); // Output: Hi, Guest!

function addUser(name = "Anonymous", age = 18, isAdmin = false) {
    return { name, age, isAdmin };
}

// 6. Rest Parameters

function max(a,b,...numbers) {
    return Math.max(a,b,...numbers);
}

console.log(max(1,2,3,4,5,6,7,8,9)); // Output: 9
