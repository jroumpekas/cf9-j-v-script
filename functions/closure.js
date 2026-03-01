function createCounter() {
    let count = 0; // This variable is private to the closure

    return function() {  // this inner function is the closure
        count++;  // το count είναι το state
        return count; // it has access to the count variable
    }
}

const counter1 = createCounter(); 
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

class Counter {
    #count = 0; // private field

    increment() {
        this.#count++;
        return this.#count;
    }
}


const counter2 = new Counter();
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.increment()); // Output: 3