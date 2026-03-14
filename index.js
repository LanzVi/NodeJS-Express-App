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