const obj ={id: 1,
    firstname: "Anna"
}

// Mutable Add
obj.lastname = "Smith"; // add new property

// Immutable Add
// without [] syntax, the field name will be "field" instead of the value of the field variable
const addToObj = (obj, field, value) =>({...obj, [field]: value}) // return new object with added property
const obj2 = addToObj(obj, "lastname", "Smith"); // {id: 1, firstname: "Anna", lastname: "Smith"}

// Immutable Update
const updateObj = (obj, field, value) => ({...obj, [field]: value}) // return new object with updated property
const obj3 = updateObj(obj2, "firstname", "Anna-Marie"); // {id: 1, firstname: "Anna-Marie", lastname: "Smith"}

// Immutable Delete
const deleteFromObj = (obj, field) => {
    const { [field]: than, ...objToReturn} = obj; // destructuring assignment     to exclude the field
    return objToReturn;
}