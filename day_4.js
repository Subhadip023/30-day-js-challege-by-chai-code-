// Day 4: Loops

// Tasks/Activities:

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

// for (let index = 1; index <= 10; index++) {
// //   console.log(index);
// }

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

// for (let index = 1; index <= 10; index++) {
//     // console.log(5+" X "+index +" = " +5*index);
//   }

// Activity 2: While Loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

// let sum=0;
// let i=1;
// while (i<=10) {
//     sum+=i;
//     i++;
// }
// console.log("The Sum of numbers from 1 to 10 = ",sum)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

// i=10;

// while (i>=1) {
//     // console.log(i--)
// }

// Activity 3: Do...While Loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
 let i=1;
do {
    
    console.log(i++)
} while (i<=5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let number=8;
let realNumber=number;
let factorial = 1;


do {
    factorial*=number;
    number--;
} while (number>1);

console.log("Factorial of "+realNumber+" is "+factorial)

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:

for (let i = 0; i <5; i++) {
    for (let j = 0; j < 5; j++) {
        print('*')
    }
}

// *
// **
// ***
// ****
// *****
