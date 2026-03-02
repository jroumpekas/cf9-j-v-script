class Counter {
    #count = 0; // private field

    // constructor() {
    //     // this.#count = 0; // can also initialize in constructor
    // }

    constructor(initialValue = 0) {
        this.#count = initialValue;
    }

    increment() {
        this.#count++;
        return this.#count;
    }   

    getCount() {
        return this.#count;
    }   
}

const counter1 = new Counter(); 
console.log(counter1.increment()) // 1
console.log(counter1.increment()) // 2
console.log(counter1.increment()) // 3
console.log(counter1.getCount()) // 3