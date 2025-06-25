import { deleteTask, updateTask } from './requests.js';

export function renderTask(toDo) {
    const toDoItem = document.createElement("li");
    toDoItem.dataset.id = toDo.id;
    const checked = toDo.completed ? "checked" : "";
    toDoItem.innerHTML = `
        <label class="checkTask">
            <h3 class="taskBody">${toDo.body}</h3>
            <input type="checkbox" ${checked}>
        </label>
       
        <button type="button" class="deleteTaskBtn">❌</button>
        <button type="button" class="updateTaskBtn">✏️</button>
    `;

    toDoItem.querySelector('.deleteTaskBtn').addEventListener('click', async (e) => {
        try {
            await deleteTask(toDo.id);
            toDoItem.remove();
        } catch (err) {
            console.error('Помилка при видаленні задачі:', err);
        }
    });

    toDoItem.querySelector('.updateTaskBtn').addEventListener('click', async () => {
        const newBody = prompt('Редагувати задачу:', toDo.body);
        if (newBody !== null && newBody.trim() !== '') {
            const updatedTask = {
                body: newBody.trim(),
                completed: toDo.completed
            };
            try {
                const updated = await updateTask(toDo.id, updatedTask);
                toDoItem.querySelector('.taskBody').textContent = updated.body;
            } catch (err) {
                console.error('Помилка при оновленні задачі:', err);
            }
        }
    });

    document.querySelector('#tasks').appendChild(toDoItem);
}