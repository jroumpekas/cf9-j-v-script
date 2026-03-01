class Counter{
    constructor() {
        this._count = 0; // conventionally private property (not truly private)
    }
    increment() {
        this._count++; // can still access and modify _count from outside the class
        return this._count;
    }
}

const counter1 = new Counter();
console.log(counter1._count); // Output: 0 (can access the "private" property)
console.log(counter1.increment()); // Output: 1
console.log(counter1.increment()); // Output: 2
console.log(counter1.increment()); // Output: 3
