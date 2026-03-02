class Counter {
    constructor() {
        this.count = 0; // public property
    }

    increment() {
        this.count++;       // without this, looks in local scope
        return this.count;
    }

    getCount() {
        return this.count;
    }
}

const counter1 = new Counter();
console.log(counter1.increment()) // 1
console.log(counter1.increment()) // 2
console.log(counter1.increment()) // 3
console.log(counter1.getCount()) // 3