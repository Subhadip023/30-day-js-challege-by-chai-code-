// Day 19: Regular Expressions
// Tasks/Activities:
// Activity 1: Basic Regular Expressions
//Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

let str = "JavaScript is a versatile language. I love JavaScript because it's powerful.I take a 30 Days JavaScript Challange from chai code YT channel";
let regex = /JavaScript/g;

let matches = str.match(regex);
console.log(matches);


// Task 2: Write a regular expression to match all digits in a string. Log the matches.

let myStr="I'm a 24 year student from AU . I done my deploma in 2021"

let digits=/\d+/g;

console.log(myStr.match(digits))

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches. 

const wordStr="Hi I'm Subhadip Chakraborty"

let capital=/\b[A-Z][a-z]*\b/g

console.log(wordStr.match(capital))



//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const digitStr = "The year is 2024 and the time is 12:34 PM.";
let digitRegex = /\d+/g;

console.log(digitStr.match(digitRegex));


// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

const phNo='(123) 456-7890';
let phoneRegex=/\((\d{3})\)\s(\d{3})-(\d{4})/;

console.log(phNo.match(phoneRegex))


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = "subhadip@gmail.com";
let emailRegex = /([^@]+)@([^@]+)/;

let emailMatches = email.match(emailRegex);
console.log(emailMatches);



// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const beginningStr = "Hello world, welcome to JavaScript.";
let beginningRegex = /^\w+/;

let beginningMatches = beginningStr.match(beginningRegex);
console.log(beginningMatches); 

//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const endStr = "Hello world, welcome to JavaScript.";
let endRegex = /\w+$/;

let endMatches = endStr.match(endRegex);
console.log(endMatches); 



// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const password = "Passw0546rd!";
let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let isPasswordValid = passwordRegex.test(password);
console.log(isPasswordValid); 



// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com";
let urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/\S*)?$/;

let isUrlValid = urlRegex.test(url);
console.log(isUrlValid); 

