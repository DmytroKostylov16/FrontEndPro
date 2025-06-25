const BASE_URL = 'http://localhost:3000/todo';

export async function getTasks() {
    const res = await fetch(BASE_URL);
    return res.json();
}

export async function createTask(newTask) {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask)
    });
    return res.json();
}

export async function updateTask(id, updatedTask) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask)
    })
    return res.json();
}


export async function deleteTask(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        const errorText = await res.text(); // читаємо як текст
        console.error('Помилка при видаленні:', errorText);
        throw new Error('Delete failed');
    }
}