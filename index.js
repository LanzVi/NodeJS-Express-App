const express = require('express');
const app = express();
const port = 3000;

//middleware to parse JSON bodies
app.use(express.json());

const items = ['Apple', 'Banana', 'Orange'];

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const newItem = req.body.item;
    if (newItem) {
        items.push(newItem);
        res.json(items);
    }
});

app.use(express.static('public'));

//route for Home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    //console.log('Received data:', data);
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

