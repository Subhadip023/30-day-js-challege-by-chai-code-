// **Task 1:** Declare a variable using var, assign it a number, and log the value to the console.
var number = 10;
// console.log(number);

// **Task 2:** Declare a variable using let, assign it a string, and log the value to the console.
let string = "subhadip";
// console.log(string);

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolean = true;
// console.log(boolean);

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numberDatatype = 20;
console.log(typeof numberDatatype);

let stringDatatype = "subhadip";
console.log(typeof stringDatatype);

let booleanDatatype = true;
console.log(typeof booleanDatatype);

let objDatatype = {
  name: "subhadip",
  email: "subhadip240420@gmail.com",
};
console.log(typeof objDatatype);

let arrayDatatype = [1, 2, 3, 4, 5, 6];
console.log(arrayDatatype);

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let letvalue = 20;
console.log("let value before change "+letvalue);
letvalue = 30;
console.log("let value after change "+letvalue);

// Task 6: Try reassigning a variable declared with const and observe the error.
const variable=30;
// variable =40 this is not valied as we give new value to the cont variable it return TypeError: Assignment to constant variable.


// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console. 

console.log(`The type of ${numberDatatype} is -> ${typeof numberDatatype}`)
console.log(`The type of ${stringDatatype} is -> ${typeof stringDatatype}`)
console.log(`The type of ${booleanDatatype} is -> ${typeof booleanDatatype}`)
console.log(`The type of ${objDatatype} is -> ${typeof objDatatype}`)
console.log(`The type of ${arrayDatatype} is -> ${typeof arrayDatatype}`)

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let letVariable=200;

letVariable=500; // this is ok and don't pass any error as let data type can be reassign the vale of it 



const constVariable=300;

constVariable=900; //this give an error as we can't re assign value to a cont variable 

console.error(constVariable=3008)