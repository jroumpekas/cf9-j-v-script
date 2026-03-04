const obj = { id: 1, firstname: "Anna" }

// Mutable Add
obj.lastname = "Smith";  // add new property

// Immutable add
// without [] syntax, the field name will be "field" instead of the value of 
//the field variable 
const addToobj = (obj, field, value) => ({ ...obj, [field]: value }) 
const obj2 = addToobj(obj, "lastname", "Smith");
console.log(obj2)  // { id: 1, firstname: 'Anna', lastname: 'Smith' }

// Immutable update
const updateObj = (obj, field, value) => ({ ...obj, [field]: value })
const obj3 = updateObj(obj2, "firstname", "Maria");
console.log(obj3)  // { id: 1, firstname: 'Maria', lastname: 'Smith' }

// Immutable delete
const deleteFromObj = (obj, field) => {
    const { [field]: _, ...objToReturn } = obj;  // destructuring assignment to exclude the field
    return objToReturn;
}