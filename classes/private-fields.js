class Counter {
    #count = 0; // private field
    increment() {
        this.#count++;
        return this.#count;
    }

    // constructor() {
    //     this.#count = 0; // initialize the private field in the constructor
    // }

    constructor (InitialValue = 0) {
        this.#count = InitialValue;
    }

    getCount() {
        return this.#count; // method to access the private field
    }
}

const counter2 = new Counter();
console.log(counter2.increment()); // Output: 1
console.log(counter2.increment()); // Output: 2
console.log(counter2.increment()); // Output: 3
console.log(counter2.getCount()); // Output: 3 (accessing the private field through a method)