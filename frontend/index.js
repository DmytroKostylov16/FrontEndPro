
import { getTasks, createTask } from './requests.js'
import { renderTask } from './dom.js'


const addTaskForm = document.querySelector('#add-task-form');
const formInput = document.querySelector('#form-input')
const tasks = document.querySelector('#tasks');

async function getAllTasks() {
    const tasks = await getTasks();
    tasks.innerHTML = '';
    tasks.forEach(renderTask);
}

getAllTasks();

addTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = formInput.value.trim();

    if (title === '') return;

    const newTask = {
        body: title,
        completed: false
    };

    try {
        const createdTask = await createTask(newTask);
        formInput.value = '';
        renderTask(createdTask);
    } catch (error) {
        console.error('Помилка створення завдання:', error);
    }
});







