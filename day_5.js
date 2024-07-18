// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.

// function isEven(number) {
//     if (number%2==0) {
//     console.log(number+" is a even number ")
//     } else {
//         console.log(number+" is a odd number ")

//     }
// }

// isEven(8)
// isEven(9)

// // Task 2: Write a function to calculate the square of a number and return the result.

// const square=function (number) {
//     return number*number;
// }

// let n=5;
// console.log("The square of "+n+" is "+square(5));
// console.log("The square of "+n+" is "+square(6));
// console.log("The square of "+n+" is "+square(7));

// // Activity 2: Function Expression
// // Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

// const max=(number1,number2)=>{
//     if (number1>number2) {
//         return number1
//     } else {
//         return number2
//     }
// }

// let number1=40;
// let number2=440;

// console.log("The maximam number between ",number1+" & "+number2 + " is "+ max(number1,number2))

// // Task 4: Write a function expression to concatenate two strings and return the result.

// function addString(str1,str2) {
//     return str1+" "+str2;
// }

// console.log(addString("subhadip","chakraborty"))

// // Activity 3: Arrow Functions
// // Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

// const addNumbers=(num1,num2)=>{
// return num1+num2;
// }

// console.log(number1+" + "+number2+" = "+addNumbers(number1,number2))

// // Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

// const isInString=(char,str)=>{
//     str=str.split('');
    
//     for (let index = 0; index < str.length; index++) {
//         if (str[index]===char) {
//                 return true
//         }
        
//     }

//     return false;

// }

// console.log(isInString('s','subhadip'));

// // Activity 4: Function Parameters and Default Values

// // Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

// const multiple=(number1,number2=5)=>{
//     return number1*number2
// }
// number1 = 4;
// number2 = 5;

// console.log(number1 + " * " + number2 + " = " + multiple(number1));
// // Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

// const greeting =(name,age=24)=>{
//     return `Hi ${name} welcome to 30 days challage.\n Your age is ${age}`
// }

// console.log(greeting("subhadip",18))
// console.log(greeting("subhadip",34))
// console.log(greeting("subhadip"))

// // Activity 5: Higher-Order Functions
// // Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times. 

// const hellow=()=>{
//     console.log( `Hellow , Welcome to 30 days js challage `)
// }

// const repiedHellow=(hellow,times)=>{
//     for (let index = 0; index < times; index++) {
//         hellow();
        
//     }
// }

// console.log(repiedHellow(hellow,4))



// // Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// const add_10=(value)=>{
// return value+10
// }
// const add_20=(value)=>{
//     return value+20;    
// }
// const add_30=(add_10,add_20,value)=>{

//     return add_20(add_10(value))
// }

// console.log(add_30(add_10,add_20,5))

// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

function isEven(number) {
    if (number%2==0) {
    console.log(number+" is a even number ")
    } else {
        console.log(number+" is a odd number ")

    }
}


// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.


const square=function (number) {
    return number*number;
}

let n=5;
console.log("The square of "+n+" is "+square(5));
console.log("The square of "+n+" is "+square(6));
console.log("The square of "+n+" is "+square(7));

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.

function addString(str1,str2) {
        return str1+" "+str2;
    }
    
    console.log(addString("subhadip","chakraborty"))

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

const addNumbers=(num1,num2)=>{
return num1+num2;
}

let number1=40;
let number2=10;

console.log(number1+" + "+number2+" = "+addNumbers(number1,number2))

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

const hellow=()=>{
    console.log( `Hellow , Welcome to 30 days js challage `)
}

const repiedHellow=(hellow,times)=>{
    for (let index = 0; index < times; index++) {
        hellow();
        
    }
}

console.log(repiedHellow(hellow,4))
