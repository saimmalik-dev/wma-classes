// First-class, Higher Order Function, CallBack & Asynchronous JS


// Function Expression
function add(num1, num2) {
  return num1 + num2
}
const arrowFn = () => {

}
const addFunc = add;
console.log(addFunc);

// First Class Functions: function that can be treated as value.
// Higher Order Functions: functions that can accept another function as arguement or return another function; 
function sayHello() {// first class function
  return "Hello, ";
}


function greeting(num1Param, name) { // higher order
  console.log(num1Param() + name);
  //   console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!"); // greeting(function, value);
// Hello, JavaScript!


// Higher Order Functions Examples: map, filter, some, these all are HOFs. 





const arr = [1, 2, 1, 3, 41, 10, 100]
const filterArr = arr.filter((item) => item > 40)
console.log(filterArr);








console.log("Before Set timeout");

const callback = () => {
  console.log("Call Back function called after 2s");
  
  console.log("using Set time out ");
}

setTimeout(callback, 2000);

console.log("After Set timeout");


// setInterval(() => {
//   console.log("Set interval out called");

// }, 2000);
