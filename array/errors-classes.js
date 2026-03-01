class ProductAlreadyExistsError extends Error {

    constructor(message) {
        super(message);
        this.name = "ProductAlreadyExistsError";
    }
 
}

class ProductNotFoundError extends Error {
     constructor(message) {
        super(message);
        this.name = "ProductNotFoundError";
    }
}

class IllegalArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = "IllegalArgumentError";
    }
}  


function insert(arr, product){
    try{
        
       if(!Array.isArray(arr) || typeof product !== 'string' || product === null) {
        throw new IllegalArgumentError("Expected an array and a string p");
       }

       if(typeof product !== 'string' || product === null) {
        throw new TypeError("Product must be a string");
       }

       if(!product.trim()) {
        throw new IllegalArgumentError("Product name cannot be empty");
       }

       if(arr.includes(product)) {
        throw new ProductAlreadyExistsError(`Product ${product} already exists in the array`);
       }

       arr.push(product);

    }catch(error){
        console.error(`Insert failed: ${error.message}`);
        console.error(`${error.stack}`);
        throw error; // Re-throw the error after logging
    }
}


try {
    const products = [];
    insert(products, "Laptop");
    insert(products, "Smartphone");
    insert(products, "Tablet");
    insert(products, "Laptop"); // This will throw an error because "Laptop" already exists
} catch (error) {
    switch (error.code) {
        case "ProductAlreadyExists":
            console.error("Handle product already exists error");
            break;
        case "IllegalArgument":
            console.error("Handle illegal argument error");
            break;
        default:
            console.error("Handle other errors");
    }
}