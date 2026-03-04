const jsonStr = ` {
    "id": 1,
    "firstname": "John",
    "lastname": "Smith",
    "age": 30,
    "isTeacher": false,
    "hobbies": ["football", "music"],
    "address": {
        "city": "Athens",
        "country": "Greece",
        "zip": "12345"
    },
    "phoneNumber": null
}`

console.log(JSON.parse(jsonStr)) // deserialization 
    
    
