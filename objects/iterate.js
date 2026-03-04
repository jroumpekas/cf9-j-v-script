const person = {
    firstname: "Athanassios",
    lastname: "Androutsos",
    age: 32,
    city: "Athens"
}

const keys = Object.keys(person);
console.log(keys)  // ["firstname", "lastname", "age", "city"]

keys.forEach(key => {
    console.log(key, person[key]);
})

const values = Object.values(person);
console.log(values) // ["Athanassios", "Androutsos", 32, "Athens"]

values.forEach(value => {
    console.log(value);
})

// object entries
const entries = Object.entries(person);
console.log(entries) // [["firstname", "Athanassios"], ["lastname", "Androutsos"], ["age", 32], ["city", "Athens"]]

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}` );
})
