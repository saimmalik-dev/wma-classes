
// console.log("Before Set timeout");

// const callback = () => {
//   console.log("Call Back function called after 2s");

//   console.log("using Set time out ");
// }

// setTimeout(callback, 2000);

// console.log("After Set timeout");


// // setInterval(() => {
// //   console.log("Set interval out called");

// // }, 2000);


// let name = "John Doe";
// function getName() {
//   let name = "Ali";
//   console.log(name);
// };




class User {
  #cnic;
  #email;
  #role;

  constructor(name, phone, email, role, cnic) {
    this.name = name;
    this.phone = phone;
    this.#email = email;
    this.#role = role;
    this.#cnic = cnic;
  }

  login() {
    console.log("User logged in");
  }


  get cnic() { // getter method
    return this.#cnic;
  }
  get email() { // getter method
    return this.#email;
  }
  get role() { // getter method
    return this.#role;
  }
}

// Inheritance from User class to Student and Teacher class
class Student extends User {
  constructor(name, phone, email, role, cnic, studentId) {
    super(name, phone, email, role, cnic);
    this.studentId = studentId;
  }
  login() { // method overriding (polymorphism)
    console.log("Student logged in");
  }
  markAttendance() {
    console.log("Attendance marked");
  }
}


class Teacher extends User {
  constructor(name, phone, email, role, cnic, teacherId) {
    super(name, phone, email, role, cnic);
    this.teacherId = teacherId;
  }
  login() {
    console.log("Teacher logged in");
  }

  checkAttendance() {
    console.log("Attendance checked");
  }

}


const student1 = new Student("Ali", "123456789", "ali@example.com", "student", "1234567890123", "S001");
// console.log(student1)
console.log(student1.cnic)
console.log(student1.email)
console.log(student1.role)
student1.login();
