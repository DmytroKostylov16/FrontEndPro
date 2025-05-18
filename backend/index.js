const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 3000;
app.use(express.json());
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const allToDo = [
    {
        id: 812,
        body: "eat apple",
        completed: true
    },
    {
        id: 142,
        body: "drink water",
        completed: false
    },
    {
        id: 308,
        body: "buy eggs",
        completed: true
    }
]

app.get('/todo', (req, res) => {
    res.json(allToDo);
})


app.get('/todo/:id', (req, res) => {
    const toDoId = +req.params.id;

    const  toDo = allToDo.find(toDo => toDo.id === toDoId)

    if(toDo) {
        return res.json(toDo);
    } else {
        return res.status(404).json({error: 'Not found.'});
    }
});


app.post('/todo', (req, res) => {
    const { body, completed } = req.body;

    if (!body || completed === undefined) {
        return res.status(404).json({error: 'Not enough info'});
    }

    function generateUniqueId() {
        let id;
        do {
            id = Math.floor(Math.random() * 10000);
        } while (allToDo.find(todo => todo.id === id));
        return id;
    }

    const newToDo = {
        id: generateUniqueId(),
        body,
        completed
    };
    allToDo.push(newToDo)

    res.status(201).json(newToDo);
});

app.put('/todo/:id', (req, res) => {
    const toDoId  = +req.params.id;
    const { body, completed } = req.body;
    const toDoIndex = allToDo.findIndex(toDo => toDo.id === toDoId)

    if (toDoIndex === -1) {
        return  res.status(400).json({error: 'Not found'});
    }

    if (!body || completed === undefined) {
        return res.status(404).json({error: 'Not enough info'});
    }
    allToDo[toDoIndex] = { id: toDoId, body, completed };
    res.status(200).json(allToDo[toDoIndex]);
});

app.delete('/todo/:id', (req, res) => {
    const toDoId = +req.params.id;
    const toDoIndex = allToDo.findIndex(toDo => toDo.id === toDoId)

    if (toDoIndex === -1) {
        return  res.status(400).json({error: 'Not found'});
    }

    allToDo.splice(toDoIndex, 1)

    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})