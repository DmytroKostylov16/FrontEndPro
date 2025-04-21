"use strict"

let allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];

const toDoList = document.querySelector("#toDoList");
const newTask = document.querySelector("#newTask");
const addNewTaskButton = document.querySelector("#addNewTaskButton");

function renderTasks() {
    toDoList.innerHTML = "";
    allTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.checked ? "completed" : "";
        li.innerHTML = `
            <input type="checkbox" data-id="${task.id}" ${task.checked ? "checked" : ""}>
            ${task.task}
            <button class="deleteButton" data-id="${task.id}">Delete task</button>
        `;
        toDoList.appendChild(li);
    });
}
addNewTaskButton.addEventListener("click", () => {
    const task = newTask.value.trim();
    if (newTask.value === "") {
        console.log("Add new task");
        return;
    }
    allTasks.push({
        id: `${Math.floor(Math.random() * 10)}-${task}`,
        task,
        checked: false,
    });
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
    renderTasks();

    newTask.value = "";
});

toDoList.addEventListener("click", (e) => {
    const taskId = e.target.dataset.id;
    if(e.target.classList.contains("deleteButton")) {
        allTasks = allTasks.filter(task => task.id !== taskId);
        localStorage.setItem("allTasks", JSON.stringify(allTasks));
        renderTasks();
    }

    if (e.target.type === "checkbox") {
        allTasks = allTasks.map(task => task.id === taskId ? {...task, checked: e.target.checked} : task);
        localStorage.setItem("allTasks", JSON.stringify(allTasks));
        renderTasks();
    }
});

renderTasks();