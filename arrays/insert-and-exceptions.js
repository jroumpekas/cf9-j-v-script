const products = []

function insert(arr, product) {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError("Expected an array");
        }

        if (typeof product !== "string") {
            throw new TypeError("Product must be a string");
        }

        if (!product.trim()) {
            throw new Error("Product name cannot be empty");
        }

        if (arr.includes(product)) {
            throw new Error(`Product "${product}" already exists in the array`);
        }

        arr.push(product);
    } catch (error) {
        console.error(`Insert failed: ${error.message}`);
        throw error;
    }
}

insert(products, "Laptop");
insert(products, "Mouse");
insert(products, "Keyboard");
insert(products, "Laptop"); // This should throw an error since "Laptop" already exists in the array
console.log(products);