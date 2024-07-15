// Day 3: Control Structures

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
// const number=30;
// const number= -30;
// const number=0;
// if (number>0) {
//     console.log(`${number} is a possitive number `);
// }
// else if (number<0) {
//     console.log(`${number} is a negative number `);

// }
// else{
//     console.log(`${number} is a zero `);

// }

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
// const age=20;

/*const age=17;

if (age>=18) {
    console.log('The person is eligable for vote')
} else if(age < 1 ){
    console.log("Enter a valid age that gratter then 0  ")
}
else{
    console.log('The person is not eligable for vote')

}*/

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

// const numberOne=300;
// const numberTwo=30;
// const numberThree=4;

// if (numberOne>numberTwo) {
//     if (numberThree>numberOne) {
//         console.log('the gratest number is '+numberThree)
//     }else{
//         console.log('the gratest number is '+numberOne)
//     }
// }else{
//     if (numberTwo>numberThree) {
//         console.log('the gratest number is '+numberTwo)
//     }else{
//         console.log('the gratest number is '+numberThree)
//     }
// }

// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// const day = 4;

// switch (day) {
//   case 1:
//     console.log("The day of week is monday");
//     break;
//   case 2:
//     console.log("The day of week is tuesday");
//     break;
//   case 3:
//     console.log("The day of week is Wednesday");
//     break;
//   case 4:
//     console.log("The day of week is Thursday");
//     break;
//   case 5:
//     console.log("The day of week is Friday");
//     break;
//   case 6:
//     console.log("The day of week is Saturday");
//     break;
//   case 7:
//     console.log("The day of week is Sunday");
//     break;

//   default:
//     console.log("Please enter the value in range 1-7");
//     break;
// }

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

// For this i use 100-90 -> A
//80-89 -> B
//70-79 -> C
//60-69 -> D
//50-59 -> E
//0-49 -> F

// const percentageNumber = 86;

// switch (true) {
//   case percentageNumber <= 100 && percentageNumber >= 90:
//     console.log("Obtained greade is A");
//     break;
//   case percentageNumber <= 89 && percentageNumber >= 80:
//     console.log("Obtained greade is B");
//     break;
//   case percentageNumber <= 79 && percentageNumber >= 70:
//     console.log("Obtained greade is C");
//     break;
//   case percentageNumber <= 69 && percentageNumber >= 60:
//     console.log("Obtained greade is D");
//     break;
//   case percentageNumber <= 59 && percentageNumber >= 50:
//     console.log("Obtained greade is E");
//     break;
//   case percentageNumber <= 49 && percentageNumber >= 0:
//     console.log("Obtained greade is F");
//     break;

//   default:
//     console.log("Enter value in the range 0-100");
//     break;
// }

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// const number=30;
// // const number=37;
// const number=9;

// console.log('The number ',number,' is a ',number%2===0?"even":"odd"," Number")


// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

// const year=2016;

// if (year%400==0) {
//     console.log(year, " is a leap year ")
// }else if (year%4 ==0&&year%100!=0) {
//     console.log(year, " is a leap year ")

// }
// else{
//     console.log(year, " is not a leap year ")
// }

// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

// const anotherNumber=0;
// const anotherNumber=30;
const anotherNumber=-3;
if (anotherNumber>0) {
    console.log(anotherNumber +" is a Possitive number ")
} 
else if (anotherNumber===0) {
    console.log(anotherNumber +" is zero")

}
else {
    console.log(anotherNumber +" is a negative  number ")

}

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.


// const age=20;

const age=17;

if (age>=18) {
    console.log('The person is eligable for vote')
} else if(age < 1 ){
    console.log("Enter a valid age that gratter then 0  ")
}
else{
    console.log('The person is not eligable for vote')

}

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.


let day =5;
switch (day) {
  case 1:
    console.log("The day of week is monday");
    break;
  case 2:
    console.log("The day of week is tuesday");
    break;
  case 3:
    console.log("The day of week is Wednesday");
    break;
  case 4:
    console.log("The day of week is Thursday");
    break;
  case 5:
    console.log("The day of week is Friday");
    break;
  case 6:
    console.log("The day of week is Saturday");
    break;
  case 7:
    console.log("The day of week is Sunday");
    break;

  default:
    console.log("Please enter the value in range 1-7");
    break;
}


// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade. 

const percentageNumber = 100; 

switch (true) {
  case percentageNumber <= 100 && percentageNumber >= 90:
    console.log("Obtained greade is A");
    break;
  case percentageNumber <= 89 && percentageNumber >= 80:
    console.log("Obtained greade is B");
    break;
  case percentageNumber <= 79 && percentageNumber >= 70:
    console.log("Obtained greade is C");
    break;
  case percentageNumber <= 69 && percentageNumber >= 60:
    console.log("Obtained greade is D");
    break;
  case percentageNumber <= 59 && percentageNumber >= 50:
    console.log("Obtained greade is E");
    break;
  case percentageNumber <= 49 && percentageNumber >= 0:
    console.log("Obtained greade is F");
    break;

  default:
    console.log("Enter value in the range 0-100");
    break;
}

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
const year=2016;

if (year%400==0) {
    console.log(year, " is a leap year ")
}else if (year%4 ==0&&year%100!=0) {
    console.log(year, " is a leap year ")

}
else{
    console.log(year, " is not a leap year ")
}