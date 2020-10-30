const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Authors Api')
})

const books = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: 'UK',
        books: ['Beowulf']
    },
    {
        id: 2,
        name: "William Shakespeare",
        nationality: 'UK',
        books: ['Hamlet, Othello, Romeo and Juliet, MacBeth']
    },
    {
        id: 3,
        name: "Charles Dickens",
        nationality: 'US',
        books: ['Oliver Twist, A Christmas Carol']
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: 'UK',
        books: ['The Picture of Dorian Gray, The Importance of Being Earnest']
    }
]

app.get('/json/authors/:id', (req, res) => {
    const newAuthors = {
        name: books[req.params.id - 1].name,
        nationality: books[req.params.id - 1].nationality,
    }
    res.json(newAuthors);
})

app.get('/json/authors/:id/books', (req, res) => {
    const newBooks = {
        books: books[req.params.id - 1].books
    }
    res.json(newBooks)
})