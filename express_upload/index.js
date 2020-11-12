const express = require('express');
const exphbs = require('express-handlebars');
const multer  = require('multer');
const upload = multer({ dest: 'public/uploads/' });
const app = express();
const port = 3000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/upload', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

let userarray = [];

app.get('/', (req, res) => {
    res.render('home');
});

// app.post('/form', (req, res) => {
//     console.log('mon form', req.body)
// });



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.post('/upload', upload.single('image'),  (req, res) => {
//   console.log(req.file);
// });

app.post("/upload", upload.single('image'), (req, res, next) => {
    let userprofil = req.body.username;
    userarray.push(userprofil)
    let img = req.file.img
    console.log(img)
    res.render("donnes", {
        username: userprofil,
        image : img
    });
});



const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    firstName: {
        type: String,
    },
    surname: {
        type: String,
    },
    profilePicture: {
        type: String
    }
})

const User = mongoose.model('Car', CarSchema);

User.create({
    username: 'IcePrincess',
    firstName: 'Lina',
    surname: 'Renteria',
    profilePicture: ''
}).then(body => console.log(body))
    .catch(err => console.error(err))

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});