// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. 

function throwErrorFunction() {
    throw new Error("This is an error");
}

function handleIntentionalError() {
    try {
        throwErrorFunction();
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

// handleIntentionalError();


// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function division(number1, number2) {
    try {
        if (number2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        console.log(number1 / number2);
    } catch (error) {
        console.log("Error occurred: " + error.message);
    }
}

// division(29, 0);


// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function myFunction() {
    try {
        console.log("This is message form try block")
        throw new Error("This is mesage form the error field")
    } catch (error) {
        console.log(error.message)
    } finally{
        console.log("This is message form final block")        
    }
}
// myFunction()

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class coustomError extends Error{
    constructor(message){
        super(message);
        this.name="coustom error by subhadip "
    }
}
function throwCustomError() {
    throw new coustomError("This is a custom error");
}


function handleCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        if (error instanceof coustomError) {
            console.log("Caught a custom error:", error.message);
        } else {
            console.log("Caught an error:", error.message);
        }
    }
}

handleCustomError()

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    console.log("Valid input:", input);
}

function handleValidation() {
    const userInput = ""; // Example of invalid input

    try {
        validateInput(userInput);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Validation Error:", error.message);
        } else {
            console.log("An unexpected error occurred:", error.message);
        }
    }
}

handleValidation();


// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use.catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    setTimeout(() => {
        if (isSuccess) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 1000);
});

randomPromise
    .then(result => console.log(result))
    .catch(error => console.log("Error:", error));



// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {
    const randomPromise = new Promise((resolve, reject) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                resolve("Promise resolved successfully");
            } else {
                reject("Promise rejected");
            }
        }, 1000);
    });

    try {
        const result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

handleRandomPromise();



// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console.

fetch("https://invalid.url")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log("Fetch Error:", error.message));


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchWithErrorHandling() {
    try {
        const response = await fetch("https://invalid.url");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch Error:", error.message);
    }
}

fetchWithErrorHandling();


// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks. 
function basicErrorHandling() {
    try {
        console.log("This is a message from the try block");
        // Intentionally throwing an error
        throw new Error("An intentional error");
    } catch (error) {
        console.log("Caught an error:", error.message);
    } finally {
        console.log("This is a message from the finally block");
    }
}

basicErrorHandling(\);


// 2.Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
function basicErrorHandling() {
    try {
        console.log("This is a message from the try block");
        // Intentionally throwing an error
        throw new Error("An intentional error");
    } catch (error) {
        console.log("Caught an error:", error.message);
    } finally {
        console.log("This is a message from the finally block");
    }
}

basicErrorHandling();


// 3. Promise Error Handling Script: Write a script that handles errors in promises using.catch() and try-catch within async functions.

function basicErrorHandling() {
    try {
        console.log("This is a message from the try block");
        // Intentionally throwing an error
        throw new Error("An intentional error");
    } catch (error) {
        console.log("Caught an error:", error.message);
    } finally {
        console.log("This is a message from the finally block");
    }
}

basicErrorHandling();

// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.

async function fetchWithErrorHandling() {
    try {
        const response = await fetch("https://invalid.url");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch Error:", error.message);
    }
}

fetchWithErrorHandling();
