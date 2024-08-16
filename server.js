const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let items = [];
let nextId = 1;

// Create - POST /items
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = nextId++;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read - GET /items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// Read - GET /items/:id
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === itemId);
    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Update - PUT /items/:id
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    const index = items.findIndex(i => i.id === itemId);

    if (index !== -1) {
        updatedItem.id = itemId;
        items[index] = updatedItem;
        res.status(200).json(updatedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// Delete - DELETE /items/:id
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const index = items.findIndex(i => i.id === itemId);

    if (index !== -1) {
        items.splice(index, 1);
        res.status(204).end(); 
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
