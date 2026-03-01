const book = {
    author: {
        firstname : "Athanassios",
        lastname: "Androutsos"
    }
}

let lastname = book?.author?.lastname ?? "Unknown";

console.log(lastname)