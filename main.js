const toDoList = document.querySelector("#toDoList");
const newTask = document.querySelector("#newTask");
const addNewTaskButton = document.querySelector("#addNewTaskButton");

toDoList.addEventListener("click", (e) => {
    if(e.target.classList.contains("deleteButton")) {
        e.target.parentElement.remove();
    }
});

addNewTaskButton.addEventListener("click", () => {
    const task = newTask.value.trim();
    if(task.trim()) {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="deleteButton">Delete task</button>`;
        toDoList.appendChild(li);
    }
    newTask.value = "";
});