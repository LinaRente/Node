const express = require('express');
const exphbs = require('express-handlebars')

const app = express();

const port = 3000;

const students = ['Jean', 'Binta', 'Agathe', 'Adil']

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));


app.get('/home/', function (req, res) {
    res.render('home', {
        title: 'Welcome to express simple form',
        students: students,
    });
});

app.post('/students/add', (req, res) => {
    let studentsList = req.body.username;
    students.push(studentsList)
    res.render('list', {
        studentsAdded: studentsList
    })
});

app.listen(port, () => {
    console.log('Server started on port ' + port)
});