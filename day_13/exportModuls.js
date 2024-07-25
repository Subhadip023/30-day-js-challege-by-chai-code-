// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

function add(n1,n2) {
    return n1+n2;
}

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person={
    name:"subhadip",
    age:24,
    greed:function () {
        return `Hi, I'm ${this.name} , I'm ${this.age} years old `
    }
}


export {add,person}
