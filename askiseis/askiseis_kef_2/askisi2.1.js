function getValues(
    teacher = {
        name: "Jim",
        lastname: "Roumpekas",
        age: 28
    }
) {
    const arr = ["Jim", 28]

    return function() {
        const objectValues = Object.values(teacher)

        const common = objectValues.filter(values =>
            arr.includes(values)
        )
        return common;
    }
}    

const resultFunction = getValues();
console.log(resultFunction());

  
