// Day 13: Modules
// Tasks/Activities:
// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

// import { add } from "./exportModuls.js";
// console.log(add(30,40))

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

// import { person } from "./exportModuls.js";
// console.log(person.greed())


// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script. 

// import {add,sub,mul,div} from './math.js'

// console.log("3+4 = "+add(3,4))
// console.log("3*4 = "+mul(3,4))
// console.log("3-4 = "+sub(3,4))
// console.log("12/4 = "+div(12,4))


//Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

// import name from './exportDedult.js'

// name('subhadip')


// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

// import * as math from './math.js'

// console.log('PI = '+math.PI)
// console.log('add 20,30 = '+math.add(20,30))
// console.log('sub 30,20 = '+math.subtract(30,20))
// console.log('mul 10,20= '+math.multiply(10,20))

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// import lodash from 'lodash'

// const myArray =[1,2,3,4,5,6,7,8,9,10]

// console.log(lodash.chunk(myArray,2))

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// import axios from "axios"

// const responce =await axios.get('https://dummyjson.com/c/c808-f4af-416d-9655');
// console.log(responce.data)


// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.


// Feature Request:
// 1. Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.


import { add } from "./exportModuls.js";
console.log(add(30,40))



// 2. Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage. 



//3. Third-Party Module Script: Write a script that installs, imports,
// and uses functions from third-party modules like lodash and axios. 4. Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
