// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name='subhadip'
const age=24;

// console.log(`Hellow I'm ${name}, ${age} engineering student`)


// Task 2: Create a multi-line string using template literals and log it to the console.

// console.log(`Hellow ,
// I'm Subhadip Chakraborty student of aliah university.
// resently i done my btech in ece.
// Thak You`)

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const myArray=[1,2,3,4,5,6,7,8,9,10];

const [a,b]=myArray


// console.log('Frist Element of Arrya -> '+a)
// console.log('Second Element of Arrya -> '+b)

//  Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book ={
    title:"the best book of the world!",
    author:"Mr. Chakraborty"
}

const {title,author}=book;

// console.log(title)
// console.log(author)

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const newArray=[...myArray,11,12,13,14,15]

// console.log(newArray)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sum=(...numbers)=>{
    let sum=0;
    for (const number of numbers) {
        sum+=number
    }
    return sum
}

// console.log(sum(1,2,3))
// console.log(sum(1,2,3,4))
// console.log(sum(1,2,3,4,5))

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const product=(n1,n2=1)=>{
    return n1*n2;
}
// console.log(product(10))

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const email='subhadip240420@gmail.com';

const phoneNo='0123456789'

const getDetails=function(){
    console.log(`the name is -> ${this.name} \n email -> ${this.email} \n age -> ${this.age} \nPhone Number ->  ${this.phoneNo}`)
}

const myData={name,age,email,phoneNo,getDetails}

// myData.getDetails()

// Task 9: Create an object with computed property names based on variables and log the object to the console.


const prop1 = 'email';
const prop2 = 'phoneNo';

const computedObject = {
    [prop1]: 'subhadip240420@gmail.com',
    [prop2]: '0123456789'
};

// console.log(computedObject);

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.

console.log('Demonstrates the use of template literals')

console.log(`Hellow I'm ${name}, ${age} engineering student`)

console.log(`Hellow ,
I'm Subhadip Chakraborty student of aliah university.
resently i done my btech in ece.
Thak You`)

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.

console.log('\n\narray and object destructuring to extract values')

console.log('Frist Element of Arrya -> '+a)
console.log('Second Element of Arrya -> '+b)
console.log(title)
console.log(author)


// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments. 

console.log('\nspread operator to combine arrays and the rest operator to handle multiple function arguments\n')

console.log(newArray)
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))


// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling calling it with different arguments.

console.log('\ndefines a function with default parameters')
console.log(product(10))

// 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.

console.log('\nEnhanced object literals to create and log an object with methods and computed property names')
myData.getDetails()

console.log(computedObject);
