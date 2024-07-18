// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
// 
// const myArray=[1,2,3,4,5];

// for (const element of myArray) {
    // console.log(element);
// }

// Task 2: Access the first and last elements of the array and log them to the console.

// console.log(myArray[0],myArray[4]);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array. 

// myArray.push(6)
// console.log(myArray);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.

// myArray.pop()

// console.log(myArray);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

// myArray.shift()
// console.log(myArray);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

// myArray.unshift(1)
// console.log(myArray);

// Activity 3: Array Methods (Intermediate)
// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

// const doubledMyArray=myArray.map((element)=>element*2)

// console.log(doubledMyArray);
// console.log(myArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

// const evenArray=myArray.filter((e)=> e%2==0 )

// console.log(evenArray);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

// const sumOfMyArray=myArray.reduce((acc,curval)=>(acc+curval),0)

// console.log(sumOfMyArray);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.

// for (let index = 0; index < myArray.length; index++) {
//     console.log(myArray[index]);
    
// }

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

// myArray.forEach(element => {
//     console.log(element);
// });

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// const row =3;
// const col=4;

// let matrix=[];

// for (let i = 0; i < row; i++) {

//     matrix[i]=[]
//     for(let j=0;j< col;j++){
//         matrix[i][j]=myArray[j]
//     }    
// }
// console.log(matrix);


// Task 13: Access and log a specific element from the two-dimensional array.

// console.log(matrix[2][3]);

// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

const myArray=[1,2,3,4,5,6,7,8,9,10]
myArray.push(11)

console.log(`Add a element using push ${myArray}`);
myArray.pop()
console.log(`remove a element using pop ${myArray}`);
myArray.shift()
console.log(`remove a element using shit ${myArray}`);
myArray.unshift(1)
console.log(`Add a element using unshift ${myArray}`);

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.

const doubleArray=myArray.map((element)=>element*2);

const evenArray =myArray.filter((element)=>element%2==0)

const totalOfMyArray = myArray.reduce((acc,curval)=>(acc+curval),0)


console.log(`\nUse map filter and reduce in myArray -> [ ${myArray}]\nDouble Array (Useing Map) -> ${doubleArray}
evenArray (using filter ) -> ${evenArray} 
total of array (using reduce ) -> ${totalOfMyArray} 

` );

// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.

console.log('\niterates over an array using for loop');

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
    
}
console.log('\niterates over an array using forEach loop');

myArray.forEach(element => {
    console.log(element);
});

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.

console.log('Creating a 2D array');


const row =3;
const col=4;

let matrix=[];

for (let i = 0; i < row; i++) {

    matrix[i]=[]
    for(let j=0;j< col;j++){
        matrix[i][j]=myArray[j]
    }    
}

console.log(matrix);

// manupualtion of 2d aray 

matrix[2][3]=10;
console.log('2D Array after Manupulation ');
console.log(matrix);
