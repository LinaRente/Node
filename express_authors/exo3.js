const express = require('express');
const app = express();
const port = 3000;

const author = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US', 'Oscar Wilde, UK']

app.listen(port, () => {
    console.log('Authors Api')
})

// Exercice 3

// Wrong id
app.get('/authors/:author', (req, res) => {
    if (author[req.params.author]) {
        res.send(`${author[req.params.author]}`)//req.params.array => index
    } else {
        res.send(`The author with the ID ${req.params.author} does not exist `)
    }
})

// error 404
app.get('*', (req, res) => {
    res.send('Error 404');
});