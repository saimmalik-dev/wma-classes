// // Classes & Objects
// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     // method
//     getStudentDetails() {
//         return "Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade;
//     }
// }

// const std1 = new Student("John", 20, "A");
// console.log("std1", std1.getStudentDetails()) // method call
// // const std1 = new Student("John", 20, "A");


// // Access object properties
// // 1. dot notation: objectName.propertyName
// // 2. bracket notation: objectName['propertyName']
// const obj = {
//     // key: value,
//     name: "ali",
//     age: 23,
//     'city-address': "Karachi",
// }

// console.log("obj", obj['city-address'])
// console.log("obj", obj['age'])



// let plan1Name = "basic";
// let plan1deviceSupport = 1;
// let plan1videoQuality = 720;
// let plan2Name = "standard";
// let plan2deviceSupport = 2;
// let plan2videoQuality = 1080;
// let plan3Name = "premium";
// let plan3deviceSupport = 4;
// let plan3videoQuality = 2160;


// plan2deviceSupport = 5;


function calculateDiscount(price, discountPercentage, validDate) {
    let date = new Date()
    let currentDate = date.getDate()
    if (currentDate < validDate) {
        let discountedPrice = price * discountPercentage
        return discountedPrice
    }
    return price
}

let obj = {
    name: "basic",
    deviceSupport: 1,
    videoQuality: 720,
    price: 1000,
    discountPercentage: 0.14,
    validDate: 14,
    // discountCalculate: function (price, disco) {
    discountCalculate: function (price, discountPercentage, validDate) {
        let date = new Date()
        let currentDate = date.getDate()
        if (currentDate < validDate) {
            let discountedPrice = price * discountPercentage // 140
            return price - discountedPrice // 1000-140
        }
        return price
    }
}

obj.oldVideoQuality = 720; // add property in object if does not exist, 
obj.videoQuality = 1080; // otherwise update the value of existing property
console.log(obj);

console.log(obj.discountCalculate(obj.price, obj.discountPercentage, obj.validDate));




let str = 'I am a MERN Stack developer';
let totalWords = str.split(" ")
console.log(totalWords);

let capitalizeArr = []
for (let i = 0; i < totalWords.length; i++) {
    let capitalize = totalWords[i].charAt(0).toUpperCase()
    let joinWord = capitalize + totalWords[i].slice(1)
    console.log(joinWord);

    capitalizeArr.push(joinWord)
}
console.log(capitalizeArr);




