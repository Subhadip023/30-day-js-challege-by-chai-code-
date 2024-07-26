// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//      greeting() {
//         return `Hi, I'm ${this.name} , i'm  ${this.age} years old`;
//     }

//     upDateAge(age){
//         this.age=age;
//     }
// }


// const p1=new Person('subhadip',24)
// const p2=new Person('sarbik',24)

// console.log(p1.greeting())
// console.log(p2.greeting())

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.

// p1.upDateAge(20);

// console.log(p1.age)


// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the Student class and log the student ID.

// class Student extends Person{
//     constructor(name,age,studentId){
//         super(name,age)
//         this.studentId=studentId
//     }

//     getstudentId(){
//         return 'The student Id is '+this.studentId;
//     }

//     greeting(){
//         return `Hi, I'm ${this.name} , i'm  ${this.age} years old and my student Id is ${this.studentId}`;

//     }

    
// }


// const s1=new Student("subhadip",24,10);

// console.log(s1.getstudentId())

//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

// console.log(s1.greeting())

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getName() {
//         return this.name;
//     }

//     getAge() {
//         return this.age;
//     }

//     // Static method
//     static getGreeting() {
//         return 'Hello from the Person class!';
//     }
// }

// Calling the static method without creating an instance
// console.log(Person.getGreeting()); // Output: Hello from the Person class!


//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// class Student extends Person {
//     // Static property to keep track of the number of students
//     static studentCount = 0;

//     constructor(name, age, studentId) {
//         super(name, age);  // Call the superclass constructor with required parameters
//         this.studentId = studentId;  // Initialize studentId
//         Student.studentCount++; // Increment the student count whenever a new Student is created
//     }

//     getStudentId() {
//         return 'The student Id is ' + this.studentId;
//     }

//     static getStudentCount() {
//         return `Total number of students: ${Student.studentCount}`;
//     }
// }

// const s1 = new Student("Subhadip", 24, 10);
// const s2 = new Student("Rahul", 22, 11);

// console.log(s1.getName());       
// console.log(s1.getAge());        
// console.log(s1.getStudentId());  
// console.log(Student.getStudentCount()); 


// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 

class Person{
    constructor (firstname,lastname){
        this.firstname=firstname;

        this.lastname=lastname
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length === 2) {
            this.firstname = parts[0];
            this.lastname = parts[1];
        } else {
            throw new Error('Full name must include first and last name');
        }
    }
}

const subhadip=new Person('subhadip','chakraborty');
console.log(subhadip.fullName)

subhadip.fullName='Subhadip Chakraborty'
console.log(subhadip.fullName)


// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages. 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).