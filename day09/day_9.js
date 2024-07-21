// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.

// const name =document.getElementById('name')

// name.innerHTML='My name is Subhadip Chakraborty'

// Task 2: Select an HTML element by its class and change its background color.

const red=document.querySelector('.green')
red.style.background='green';

// Activity 2: Creating and Appending Elements
// Task 3: Create a new div element with some text content and append it to the body.

// const body =document.body;

// const div=document.createElement('div');
// div.textContent='This is My Componets'
// body.appendChild(div)


// Task 4: Create a new li element and add it to an existing ul list.

// const list =document.getElementById('list')

// const listElement=document.createElement('li')
// listElement.textContent='Item 4'
// list.append(listElement)


// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.

// const element=document.querySelector('.element')

// element.remove()

// Task 6: Remove the last child of a specific HTML element.

function removeLastChild() {
    const element = document.getElementById('exampleElement');
    if (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
    }
}

removeLastChild()
// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

// const myImage=document.getElementById('myImage');
// const url='https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'

// myImage.src=url
// myImage.clientHeight='600px';

// Task 8: Add and remove a CSS class to/from an HTML element.

const task8=document.getElementById('task8')

task8.classList.add('bg-green')
task8.classList.remove('bg-green')

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const changeText=()=>{
    document.querySelector('.varContent').innerHTML='Subhadip Chakraborty'
}

// Task 10: Add a mouseover event listener to an element that changes its border color.
// const varContent =document.querySelector('.varContent')
// varContent.addEventListener('mouseover',()=>{
//     varContent.style.border='2px solid black'
// })

// Feature Request:
// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.


const name =document.getElementById('name')

name.innerHTML='My name is Subhadip Chakraborty'

// 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.

const body =document.body;

const div=document.createElement('div');
div.textContent='This is My Componets'
body.appendChild(div)


// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.

const element=document.querySelector('.element')

element.remove()


// 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.


const myImage=document.getElementById('myImage');
const url='https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'

myImage.src=url

// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.


const varContent =document.querySelector('.varContent')
varContent.addEventListener('mouseover',()=>{
    varContent.style.border='2px solid black'
})