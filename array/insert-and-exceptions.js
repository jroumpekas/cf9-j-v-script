const products = []

function insert(arr, product){
    try{
        
       if(!Array.isArray(arr)) {
        throw new TypeError("Expected an array");
       }

       if(typeof product !== 'string' || product === null) {
        throw new TypeError("Product must be a string");
       }

       if(!product.trim()) {
        throw new Error("Product name cannot be empty");
       }

       if(arr.includes(product)) {
        throw new Error(`Product ${product} already exists in the array`);
       }

       arr.push(product);

    }catch(error){
        console.error(`Insert failed: ${error.message}`);
        throw error; // Re-throw the error after logging
    }
}

insert(products, "Laptop");
insert(products, "Smartphone");
insert(products, "Tablet");
insert(products, "Laptop"); // This will throw an error because "Laptop" already exists
console.log(products);