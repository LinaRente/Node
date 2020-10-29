const express = require('express');
const app = express();
const port = 3000;

const authors = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US','Oscar Wilde, UK' ]

const books = ['Beowulf', 'Hamlet, Othello, Romeo and Juliet, MacBeth', 'Oliver Twist, A Christmas Carol', 'The Picture of Dorian Gray, The Importance of Being Earnest']

// Exercices 0
app.listen(port, () => {
    console.log('Authors Api')
})

// Exercice 1
app.get('/authors/:id', (req, res) => {
    res.send(authors[req.params.id -1])
});

// Exercice 2
app.get('/authors/:id/books/', (req, res) => {
    res.send(books[req.params.id-1]);
});

// Exercice 3

//error 404 foncionne
app.get('*', (req, res) => {
    res.send('Error 404');
});

// Execices 4
