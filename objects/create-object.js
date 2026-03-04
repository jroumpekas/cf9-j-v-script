const obj = {}          // instances του τύπου Object

const point = { 
    x: 0, 
    y: 0 
}

const point3D = new Object();
point3D.x = 1;
point3D.y = 10;
point3D.z = 25;


const customer = {
    id: 1,
    firstname: "Costas",
    lastname: "Papadopoulos",
    age: 32,
    height: 1.80
}

let customerName = customer.firstname + ", " + customer.lastname;
let customerName2 = customer["firstname"] + ", " + customer["lastname"];
