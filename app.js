const arrmap = [1, 2, 4, 5, [6, [7,], 8,], 9, 10];
const doubled = arrmap.map((num) => {

    return num * 2
})

console.log(arrmap)
console.log(doubled)



// What these methods does:
// forEach → Do something
// map → Change every item
// filter → Select some items
// find → Find one item
// some → Is there at least one?
// every → Do all satisfy this?
// reduce → Turn many items into one result

// The way it return the value is different for each method
// map     → array → array
// filter  → array → array
// find    → array → one item
// some    → array → true/false
// every   → array → true/false
// reduce  → array → one value



// Filter method
const arr = [1, 2, 4, 5, 6, 9, 10];
const filteredArr = arr.filter((num) => {
    return num > 5
})

console.log(filteredArr)


// Find method
const arr2 = [1, 2, 4, 5, 6, 9, 10];
const foundItem = arr2.find((num) => {
    return num > 5
})
console.log("foundItem", foundItem)



// Some method
const std = [30, 23, 20, 21, 1, 2, 40];
const isSome = std.some((num) => {
    return num > 33
})
console.log("Some method:", isSome)


// Every Method
// const std1 = [30, 23, 20, 21, 1, 2, 40];
const std1 = [30, 23, 20, 21, 1, 2, 40];
const everyMethod = std1.every((num) => {
    return num > 18
})
console.log("Every method:", everyMethod)


// // Reduce Method
// const itemsPrice = [30, 23];
// const reduceMethod = itemsPrice.reduce((total, curr) => {
//     return total + curr
// }, 0)

// console.log("Reduce method:", reduceMethod)




// Shallow VS Deep Copy
const obj = { rating: { count: 4.5 } }
console.log(obj.rating.count)



const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
]

const shallowCopy = users.map((user) => {
    return structuredClone(user)
});
// console.log("users", users)
// console.log("shallow copy", shallowCopy)

shallowCopy[0].age = 40;


console.log("original user object", users)
console.log("shallow copy after change", shallowCopy)



// const deepCopy = users.map((user) => {
//     return structuredClone(user)
// });
// console.log("users", users)
// console.log("deepCopy copy", deepCopy)

// deepCopy[0].age = 40;

// console.log("users", users)
// console.log("deepCopy copy", deepCopy)



// Reduce Method
const items = [1000, 2300, 180]
// let sum = 0
// for (let i = 0; i < items.length; i++) {
//     // console.log();
//     sum += items[i];
// }
// console.log(sum)


const total = items.reduce((sum, currentValue) => {
    return sum + currentValue
})
console.log("total", total);
