// Zad 1
const arr = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk")
arr.forEach(test => {
    console.log(test)
})

// Zad 2

const arr1 = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk")
const BiggerThanOne =
    arr1.every(item => item > 100)
console.log(BiggerThanOne)
    // Zad 3 

const arr2 = new Array(1, 15, 150, 1500, "Jan", 5525, "Henryk")
index = arr2.indexOf("Jan")
console.log(index)