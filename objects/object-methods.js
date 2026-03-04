const point = {
    x: 10,
    y: 20,
    print: function() {
        console.log(`Point(${this.x}, ${this.y})`)
    },
    printPoint() {
        console.log(`Point(${this.x}, ${this.y})`)
    }
}

point.print() // Point(10, 20)
point.printPoint() // Point(10, 20)