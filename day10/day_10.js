// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

// const changeText=()=>{
//     document.getElementById('text').textContent="Change text of the paragraph from the button "
// }



// Task 2: Add a double-click event listener to an image that toggles its visibility.

const image=document.getElementById('image')
image.addEventListener('dblclike',()=>{
    if (image.style.display=='none') {
        image.style.display="block"
    }else{
        image.style.display="none"
    }
})

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color. 

const h2=document.querySelector('h2')
h2.addEventListener('mouseover',function(){
    h2.style.backgroundColor='black'
})

// Task 4: Add a mouseout event listener to an element that resets its background color.

h2.addEventListener('mouseout',function(){
    h2.style.backgroundColor='transparent'
})

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const inputField=document.getElementById('inputField');
inputField.addEventListener('keydown',function(e){
    console.log(`key pressed : ${e.key}`)
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const paragraph=document.getElementById('displayParagraph')

inputField.addEventListener('keyup',function(e){
        paragraph.textContent=`$urrent value :${inputField.value }`
})

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData=new FormData(form)
    const formEntries = Object.fromEntries(formData.entries());

    console.log('Form Data:', formEntries);})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select=document.getElementById('mySelect');

select.addEventListener('change',function(){
    const selectedValue=select.value;
    paragraph.textContent=`Selected value: ${selectedValue}`
})

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const myList=document.getElementById('myList')

myList.addEventListener('click',function(e){
    if (e.target&& e.target.nodeName==='LI') {
        paragraph.textContent=`Clicked Item text: ${e.target.textContent}`
    }
})

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

function addChiled(){
    const itemNumber=Number(myList.children.length)+1;
        const newChiled=document.createElement('li')
    newChiled.textContent="Item "+ itemNumber
    myList.appendChild(newChiled)
}


// Feature Request:
// 1. Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.



// 2. Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element. 3. Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// 4. Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// 5. Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.