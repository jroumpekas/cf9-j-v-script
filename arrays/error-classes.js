class ProductAlreadyExistsError extends Error {
    constructor(message) {
        super(message);
        this.code = "ProductAlreadyExists";
    }
}

class ProductNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.code = "ProductNotFound";
    }
}

class IllegalArgumentError extends Error {
    constructor(message) {
        super(message);
        this.code = "IllegalArgument";
    }
}


function insert(arr, product) {
    try {
        if ((!Array.isArray(arr)) || (typeof product !== "string")) {
            throw new IllegalArgumentError("Expected an array and a string");
        }

        if (!product.trim()) {
            throw new Error("Product name cannot be empty");
        }

        if (arr.includes(product)) {
            throw new ProductAlreadyExistsError(`Product "${product}" already exists in the array`);
        }

        arr.push(product);
    } catch (error) {
        console.error(`Insert failed: ${error.message}`);
        console.error(`${error.stack}`);
        throw error;
    }
}

try {
    insert(products, "Laptop");
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
