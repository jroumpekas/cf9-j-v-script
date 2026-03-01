const family = {
    father: "John",
    mother: "Betty",
    son: "Mike"
};

const updatedFamily = Object.fromEntries(
    Object.entries(family).map(([role, name]) => [role, name + " Brown"])
);

console.log(updatedFamily);
// Έξοδος: { father: "John Brown", mother: "Betty Brown", son: "Mike Brown" }
