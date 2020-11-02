const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;


app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir: __dirname + "views/"
}));

app.set('view engine', 'handlebars');

app.get('/home/', function (req, res) {
    res.render('home', {
        title: 'Formulaire',
    })
});

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.post('/form/signup', (req, res) => {
    console.log(`${req.body.username} ${req.body.password}`);
    res.send(`${req.body.username} ${req.body.password}`)
});

// app.post('/form/signup', (req, res) => {
//     console.log(req.body.password + req.body.password);
// });


app.listen(port, () => {
    console.log('Server started on port: ' + port);
})
