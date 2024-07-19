// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

// const book = {
//   title: "The Best Book Of the world !",
//   author: "Mister India",
//   year: 2000,
// };

// console.log(book)

//Task 2: Access and log the title and author properties of the book object.

// console.log(book.title)
// console.log(book.author)

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// book.getAuthorAndTitle = function () {
//   return `"${this.title}" Book is written by , ${this.author}`;
// };

// console.log(book.getAuthorAndTitle())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// book.changeDate = function (y) {
//   this.year = y;
// };

// book.changeDate(2010);

// console.log(book.year)

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "subhadip libery ",
  books: [
    { title: "Title 1 ", author: "Mr Abc" ,year:2000},
    { title: "Title 2 ", author: "Mr Bcd" ,year:2020},
    { title: "Title 3 ", author: "Mr Efg" ,year:2010},
    { title: "Title 4 ", author: "Mr Ijk" ,year:2011},
  ],
};

// console.log(library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.

// console.log(library.name)
library.books.forEach(element => {
    // console.log(element.title)
});
// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

// Add a method to each book object
library.books.forEach((book) => {
    book.getDetails = function() {
        return `title -> ${this.title} year -> ${this.year}`;
    };
});

library.getBookTitleWithYear = function() {
    let str = '';
    library.books.forEach((book) => {
        str += `${book.getDetails()} \n`;
    });
    return str;
};

// console.log(library.getBookTitleWithYear());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value. Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
// Feature Request:

// for (const key in book) {
    
//     console.log(key+" : "+book[key])

// }


// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

let book = {
    title: "Book 1",
    year: 2020,
    author: "Author 1",
    
    // Method to get book details
    getDetails: function() {
        return `Title: ${this.title}, Year: ${this.year}, Author: ${this.author}`;
    }
};
console.log("Book Properties:");
console.log(`Title: ${book.title}`);
console.log(`Year: ${book.year}`);
console.log(`Author: ${book.author}`);

console.log("\nBook Method Results:");
console.log(book.getDetails());


// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.


    library.getLibraryDetails=function() {
        let details = "Library contains the following books:\n";
        this.books.forEach((book, index) => {
            details += `${index + 1}. Title: ${book.title}, Year: ${book.year}, Author: ${book.author}\n`;
        });
        return details;
    }


console.log(library.getLibraryDetails());


// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.


console.log("Using for...in loop:");
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}

// Iterating using Object.keys and Object.values
let keys = Object.keys(book);
let values = Object.values(book);

console.log("\nUsing Object.keys and Object.values:");
console.log("Keys:", keys);
console.log("Values:", values);
