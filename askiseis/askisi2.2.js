const user = {
    name: "Mike",
    age: 16,
    city: "New York",

    hello : function(){
        console.log(`Hello dear ${this.name}`)
    }
};

user.hello();   