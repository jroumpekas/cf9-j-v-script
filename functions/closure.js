function createCounter() {
    let count = 0; // this variable is private to the closure
    return function() { // this inner function is the closure
        count++;  
        return count; // it has access to the count variable
    }
}

const counter1 = createCounter(); 
console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3


class Counter {
    #count = 0; // private field
    increment() {
        this.#count++;
        return this.#count;
    }  
}
const counter2 = new Counter();
console.log(counter2.increment()) // 1
console.log(counter2.increment()) // 2
console.log(counter2.increment()) // 3
