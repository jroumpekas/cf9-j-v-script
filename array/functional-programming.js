const users = [
    { id: 1, firstname: "Alice" },
    { id: 2, firstname: "Bob" },
    { id: 3, firstname: "Charlie" }
]

// traverse με forEach
users.forEach(user => console.log(user.firstname));

// map
const usersWithEmails = [
    { id: 1, firstname: "Alice", email: "alice@aueb.gr" },
    { id: 2, firstname: "Bob", email: "bob@gmail.com" },
    { id: 3, firstname: "Charlie", email: "charlie@gmail.com" }
]

const emails = usersWithEmails.map(user => user.email)     
console.log(emails)   // [alice@aueb.gr, bob@gmail.com, charlie@gmail.com]


// filter
const activeUsers = [
    { id: 1, firstname: "Alice", isActive: true },
    { id: 2, firstname: "Bob", isActive: false },
    { id: 3, firstname: "Charlie", isActive: true }
]

const usersWithStatusTrue = activeUsers.filter(user => user.isActive)
console.log(usersWithStatusTrue)

// reduce
const cart = [
    { id: 1, productName: "Laptop", price: 1000 },
    { id: 2, productName: "Mouse", price: 50 },
    { id: 3, productName: "Keyboard", price: 80 }
]

const totalPrice = cart.reduce((total, item) => total + item.price, 0)
console.log(totalPrice)  // 1130

// some
const hasExpensiveItem = cart.some(item => item.price > 500)
console.log(hasExpensiveItem)  // true

// every
const allItemsAffordable = cart.every(item => item.price < 1500)
console.log(allItemsAffordable)  // true

// flatmap
const posts = [
    { id: 1, title: "Post 1", tags: ["javascript", "programming"] },
    { id: 2, title: "Post 2", tags: ["css", "html"] },
    { id: 3, title: "Post 3", tags: ["react", "vue"] }
]

const allTags = posts.flatMap(post => post.tags)
console.log(allTags)  // ["javascript", "programming", "css", "html", "react", "vue"]


// findIndex
const userIndex = users.findIndex(user => user.firstname === "Bob")
console.log(userIndex)  // 1