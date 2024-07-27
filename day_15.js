// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outer() {
    const name ="subhadip"    
    function inner() {
        console.log(name)
    }
    inner()
}

outer()

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

    function counter() {
        let counter=0;
        return {
            incriment:function(){
            counter++;


        }
        ,getValue:function(){
            return counter
        }
        
    }}

    const myCounter=counter()
    // myCounter.incriment()
    // myCounter.incriment()
    // myCounter.incriment()
    // console.log(myCounter.getValue())
    // myCounter.incriment()

    // console.log(myCounter.getValue())

    // Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createGeneartor() {
    let lastId=8;

    return function () {
        lastId++;
        return lastId;       
    }
}

const generateId=createGeneartor()

console.log(generateId())

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function user(name) {
    // const name='subhadip'
    return function(){
        return `hi ,i'm subhadip ${name}`
    }
}
const greet=user('subhadip')

console.log(greet())

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionsArray() {
    const functionsArray = [];

    for (let i = 0; i < 5; i++) {
        functionsArray.push(
            (function(index) {
                return function() {
                    console.log(index);
                };
            })(i)
        );
    }

    return functionsArray;
}

const functions = createFunctionsArray();

functions[0](); 
functions[1](); 
functions[2](); 
functions[3](); 
functions[4](); 


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function manager() {
    let items = [];
    return {
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(item) {
            const index = items.indexOf(item); 
            if (index !== -1) {
                items.splice(index, 1);
            }
        },
        listItems: function() {
            return items.slice(); 
        }
    };
}

const itemsManager = manager();

itemsManager.addItem('10');
itemsManager.addItem('10');
itemsManager.addItem('10');
itemsManager.addItem('10');
console.log(itemsManager.listItems()); 
itemsManager.removeItem('10')
console.log(itemsManager.listItems()); 



// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}


const slowFunction = (num) => {
    console.log('Computing...');
    return num * num;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); 
console.log(memoizedFunction(5)); 


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

const fibonacci = memoize((n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
console.log(fibonacci(30)); // Output: 832040


