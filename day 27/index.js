document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.querySelector('.task-list');
    const submitButton = document.getElementById('submit_btn');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Display stored tasks on page load
    displayTasks();

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const dueDate = document.getElementById('taskDueDate').value;
        
        const task = {
            id: Date.now(),
            title,
            description,
            dueDate
        };

        tasks.push(task);
        saveTasks();
        displayTasks();

        taskForm.reset();
        submitButton.innerText = 'Add Task';
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button class="delete_btn" onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    window.editTask = function(id) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        const task = tasks[taskIndex];
        submitButton.innerText = 'Edit Task';

        // Populate the form with the current task details
        document.getElementById('taskTitle').value = task.title;
        document.getElementById('taskDescription').value = task.description;
        document.getElementById('taskDueDate').value = task.dueDate;
    
        taskForm.onsubmit = (event) => {
            event.preventDefault();
    
            // Update the task details
            const updatedTask = {
                id: task.id, // Keep the same ID
                title: document.getElementById('taskTitle').value,
                description: document.getElementById('taskDescription').value,
                dueDate: document.getElementById('taskDueDate').value
            };

            // Remove old task and add updated task
            tasks.splice(taskIndex, 1);
            saveTasks();

            displayTasks(); // Refresh the task list with updated data
            taskForm.reset(); // Clear the form
            taskForm.onsubmit = originalSubmit; // Restore the original submit handler
            submitButton.innerText = 'Add Task'; // Reset the button text
        };
    };

    window.deleteTask = function(id) {
        if (confirm("Are you sure you want to delete this task?")) {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            displayTasks();
        }
    };

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const originalSubmit = taskForm.onsubmit;
});
