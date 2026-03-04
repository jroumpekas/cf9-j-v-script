const book = {
    author: {
        firstname: "Athanassios",
        lastname: "Androutsos"
    }
}

let lastname = book?.author?.lastname ?? "Unknown";     // ?? nullish coalescing operator

console.log(lastname)