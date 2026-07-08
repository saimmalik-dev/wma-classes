// OOP IN JAVASCRIPT: Class #2

class Vehicle {
    constructor(model, color, wheelCount) { // used to create and initialize an object created with a class.
        this.model = model;
        this.color = color;
        this.wheelCount = wheelCount;
    }

    // method
    startVehicle(iginition = false) {
        if (iginition === false) {
            console.log("First ON the switch");
            return;
        }
        console.log("Starting the vehicle.....");
        console.log("Vehicle has started");
    }
}



var car = new Vehicle("Corolla", "Black", 4);
console.log("car", car)
var isKeyOn = false;
car.startVehicle(isKeyOn);
// var bike = new Vehicle("Honda", "Black", 2);
// console.log("bike", bike)






var person = {
    // key: value
    name: "Asad",
    age: 23,
    'first-namee': 23,
    // nested object
    innerObj: {},
}
// console.log(person['first-namee'])
// console.log(person['age'])

// FOR-in Loop,  used to get object keys
for (i in person) {
    console.log("keys", i);
}


var carObj = Object.keys(car)
var carObjVal = Object.values(car)
console.log(carObj);
console.log(carObjVal);



// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (var value of array) {
//     console.log("value", value);
// }


// for (var i = 0; i <= array.length; i++) {
//     console.log("value", array[i]);
// }




