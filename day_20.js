// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:
// Activity 1: Understanding LocalStorage
// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
// Task 1
// localStorage.setItem("Name","Subhadip")
// 
// const name= localStorage.getItem('Name')
// console.log(name)


// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

// const user ={
//     name:"Subhadip",
//     age:24,
//     Qualification:"B.tech in Electronics and communication engineering "
// }

// const userJson=JSON.stringify(user)

// localStorage.setItem('user',userJson)

// const RetrieveUser=localStorage.getItem('user')

// console.log(JSON.parse(RetrieveUser))


// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

document.getElementById('myForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    console.log(name,email)
const user ={
    name:name,
    email : email
}

const userJson=JSON.stringify(user)

localStorage.setItem('user',userJson)

displayData();
})

function displayData() {
    const userJSON=localStorage.getItem('user')

    if (userJSON) {
        const user=JSON.parse(userJSON)
        const outputDiv=document.getElementById('output')
        outputDiv.innerHTML=`<p>Name:${user.name}</p><p>email:${user.email}</p>`
    }

    // setTimeout(()=>{
    //     removeLocalStorage()
    //     alert("local Storage removed")
    // },5000)

}

function removeLocalStorage() {
    localStorage.removeItem("user");
}

document.addEventListener('DOMContentLoaded',()=>{

    displayData()
    displaySessionData()
})

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.




// Activity 3: Understanding SessionStorage
// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

sessionStorage.setItem('SessionUser','Subhadip')
const SessionUser=sessionStorage.getItem('SessionUser')

document.getElementById('output').innerHTML=SessionUser

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const user ={
    name:'subhadip',
    email : 'subhadip240420@gmail.com'
}

const userJson=JSON.stringify(user)

// sessionStorage.setItem('user',userJson)

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

document.getElementById('sessionForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    const name=document.getElementById('name-session').value
    const email=document.getElementById('email-session').value
const user ={
    name:name,
    email : email
}

const userJson=JSON.stringify(user)
sessionStorage.setItem('user',userJson)
displaySessionData()
})

function displaySessionData() {
    
    const userJSON=sessionStorage.getItem('user')

    if (userJSON) {
        const user=JSON.parse(userJSON)
        console.log(user)
        document.getElementById('sessionOutput').innerHTML=`<p>Name: ${user.name}</p><p>email: ${user.email}</p>`
    }

}

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

const removeSessionData=()=>{
    sessionStorage.removeItem('user')
}


// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function addDataInStorage(key, value) {
    localStorage.setItem(key, value);
    
    sessionStorage.setItem(key, value);
    
    const localStorageValue = localStorage.getItem(key);
    console.log(`Value from localStorage: ${localStorageValue}`);
    
    const sessionStorageValue = sessionStorage.getItem(key);
    console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

addDataInStorage('name', 'subhadip');


// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function ClearData() {
    // Clear all data from localStorage
    localStorage.clear();
    
    // Clear all data from sessionStorage
    sessionStorage.clear();
    
    // Verify and log that localStorage is empty
    const localStorageIsEmpty = localStorage.length === 0;
    console.log(`localStorage is empty: ${localStorageIsEmpty}`);
    
    // Verify and log that sessionStorage is empty
    const sessionStorageIsEmpty = sessionStorage.length === 0;
    console.log(`sessionStorage is empty: ${sessionStorageIsEmpty}`);
}

ClearData();

