// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const myPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise resolved after 2 second")
    }, 2000);
});

myPromise.then((message)=>{
    console.log(message)
})


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().

const myRejection=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Error Found");
    }, 2000);
})

myRejection.catch((error)=>{
    console.log(error)
})

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

fetchData('Fetching data from server 1', 1000)
    .then((message) => {
        console.log(message);
        return fetchData('Fetching data from server 2', 2000);
    })
    .then((message) => {
        console.log(message);
        return fetchData('Fetching data from server 3', 3000);
    })
    .then((message) => {
        console.log(message);
        console.log('All data fetched');
    });


// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// Function that returns a promise which resolves after 2 seconds
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved with async and await after 2 seconds");
        }, 2000);
    });
}

// Async function that waits for the promise to resolve and then logs the resolved value
async function asyncFunction() {
    const result = await resolveAfter2Seconds();
    console.log(result);
}

// Call the async function
asyncFunction();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function handleRejectedPromise() {
    const promise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Promise rejected after 2 seconds");
        }, 2000);
    });

    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

handleRejectedPromise();


// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

function fetchDataWithPromises() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
}

fetchDataWithPromises();


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataWithAsyncAwait();

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function concurrentPromises() {
    const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 1000));
    const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2 resolved"), 2000));
    const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 3000));

    Promise.all([promise1, promise2, promise3])
        .then(values => {
            console.log("All promises resolved:", values);
        })
        .catch(error => console.error("Error:", error));
}

concurrentPromises();
function createAndHandlePromises() {
    const resolvedPromise = new Promise(resolve => setTimeout(() => resolve("Resolved!"), 1000));
    const rejectedPromise = new Promise((_, reject) => setTimeout(() => reject("Rejected!"), 1000));

    resolvedPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));

    rejectedPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

createAndHandlePromises();
function createAndHandlePromises() {
    const resolvedPromise = new Promise(resolve => setTimeout(() => resolve("Resolved!"), 1000));
    const rejectedPromise = new Promise((_, reject) => setTimeout(() => reject("Rejected!"), 1000));

    resolvedPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));

    rejectedPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

createAndHandlePromises();
function createAndHandlePromises() {
    const resolvedPromise = new Promise(resolve => setTimeout(() => resolve("Resolved!"), 1000));
    const rejectedPromise = new Promise((_, reject) => setTimeout(() => reject("Rejected!"), 1000));

    resolvedPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));

    rejectedPromise
        .then(result => console.log(result))
        .catch(error => console.error(error));
}

createAndHandlePromises();


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.

async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataWithAsyncAwait();


// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence. 3
// . Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch. 4. API Fetch Script: Create a script that fetches data from a public API using both
// promises and async/await, and logs the response data. 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.