const express = require('express');
const app = express();
const port = 3000;

const authors = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US','Oscar Wilde, UK' ]

// Exercices 0
app.listen(port, () => {
    console.log('Authors Api')
})

// Exercice 1
app.get('/authors/:id', (req, res) => {
    res.send(authors[req.params.id -1])
});
