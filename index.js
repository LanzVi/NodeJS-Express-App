const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//route for Home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

//middleware to parse JSON bodies
app.use(express.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.send(`Received: ${JSON.stringify(data)}`);
});