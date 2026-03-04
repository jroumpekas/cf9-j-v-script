const jsObj = { id: 1, title: "Athens", population: 3000000 }

// convert to JSON string -- serialization
const jsonString = JSON.stringify(jsObj);
console.log(jsonString)  // {"id":1,"title":"Athens","population":3000000}     

// convert back to JavaScript object -- deserialization
const jsObj2 = JSON.parse(jsonString);
console.log(jsObj2) // { id: 1, title: 'Athens', population: 3000000 }